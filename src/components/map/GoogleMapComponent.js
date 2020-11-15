import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  Polygon,
  InfoWindow
} from "react-google-maps";
import Button from "@material-ui/core/Button";

class GoogleMapComponent extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 8,
      infoOpen: false,
      selectedPlace: {},
      markerMap: {}
    };
    this.mapRef = null;
    this.handleMapRef = ref => {
      this.mapRef = ref;
    };
    this.map = withScriptjs(
      withGoogleMap(props => {
        // console.log("SELECTED POLY", props.selectedPolygon);

        return (
          <GoogleMap
            defaultZoom={this.state.zoom}
            defaultCenter={{ lat: 40.4093, lng: 49.8671 }}
            onClick={props.handleMapClick || props.editPolygonMapClick}
          >
            {/* {props.isEditable === true
              ? props.allPolygons.map((polygon, parentIndex) =>
                  polygon.polygons.map((markerPolygon, childIndex) => (
                    <Marker
                      draggable
                      onDragEnd={e =>
                        props.editMarkerLocation(e, parentIndex, childIndex)
                      }
                      position={{
                        lat: markerPolygon[1],
                        lng: markerPolygon[0]
                      }}
                    />
                  ))
                )
              : } */}
            {(props.fixedPolygons || []).map((polygon, parentIndex) =>
              (polygon.polygons || []).map((markerPolygon, childIndex) => (
                <Marker
                  position={{
                    lat: markerPolygon[1],
                    lng: markerPolygon[0]
                  }}
                />
              ))
            )}

            {// props.isEditable && props.selectedPolygon.length > 0 ?
            //   props.selectedPolygon.polygons.map((markerPolygon, index) => (
            //     <Marker
            //       draggable
            //       // onDragEnd={e => props.changeMarkerLocation(e, index)}
            //       position={{ lat: markerPolygon[1], lng: markerPolygon[0] }}
            //       // onLoad={marker => console.log(marker)}
            //       // onClick={marker => this.markerClickHandler(marker, index)}
            //     />
            //   ))
            //   :
            props.isEditable
              ? props.selectedPolygon.length <= 0
                ? null
                : (props.selectedPolygon[0].polygons || []).map(
                    (markerPolygon, index) => (
                      <Marker
                        draggable
                        onDragEnd={e => props.editMarkerLocation(e, index)}
                        position={{
                          lat: markerPolygon[1],
                          lng: markerPolygon[0]
                        }}
                        // onLoad={marker => console.log(marker)}
                        onClick={marker =>
                          this.markerClickHandler(marker, index)
                        }
                      />
                    )
                  )
              : (props.currentPolygon || []).map((markerPolygon, index) => (
                  <Marker
                    draggable
                    onDragEnd={e => props.changeMarkerLocation(e, index)}
                    position={{ lat: markerPolygon[1], lng: markerPolygon[0] }}
                    onLoad={marker => console.log(marker)}
                    onClick={marker => this.markerClickHandler(marker, index)}
                  />
                ))}

            {this.state.infoOpen && this.state.selectedPlace && (
              //
              <InfoWindow
                position={this.state.markerMap.position}
                onCloseClick={() =>
                  this.setState({
                    infoOpen: false
                  })
                }
              >
                <div>
                  {/* <h3>{props.sheraz === undefined ? "Sheraz" : "Nothing"}</h3> */}
                  <Button
                    onClick={this.deleteMyMarker}
                    style={{ float: "right", margin: "10px" }}
                    variant="contained"
                    color="primary"
                  >
                    Delete
                  </Button>
                </div>
              </InfoWindow>
            )}
            {(props.fixedPolygons || []).map((polygon, parentIndex) => (
              <Polygon
                path={this.reversedCoords(polygon.polygons)}
                //key={1}
                options={{
                  fillColor: "#000",
                  fillOpacity: 0.4,
                  strokeColor: "#000",
                  strokeOpacity: 1,
                  strokeWeight: 1
                }}
              />
            ))}

            {/* {
              props.isEditable ? props.selectedPolygon.length <= 0
              ? null
              : (<Polygon
                path={this.reversedCoords(props.selectedPolygon[0].polygons)}
                //key={1}
                options={{
                  fillColor: "red",
                  fillOpacity: 0.4,
                  strokeColor: "red",
                  strokeOpacity: 1,
                  strokeWeight: 1
                }}
              />) : (
              <Polygon
                path={this.reversedCoords(props.currentPolygon)}
                //key={1}
                options={{
                  fillColor: "red",
                  fillOpacity: 0.4,
                  strokeColor: "red",
                  strokeOpacity: 1,
                  strokeWeight: 1
                }}
              />)
            } */}
            {(props.selectedPolygon || props.currentPolygon).length <=
            0 ? null : (
              <Polygon
                path={this.reversedCoords(
                  props.currentPolygon || props.selectedPolygon[0].polygons
                )}
                //key={1}
                options={{
                  fillColor: "red",
                  fillOpacity: 0.4,
                  strokeColor: "red",
                  strokeOpacity: 1,
                  strokeWeight: 1
                }}
              />
            )}
          </GoogleMap>
        );
      })
    );
  }

  componentDidMount() {}

  reversedCoords = coords => {
    const polygon = (coords || []).map(ll => {
      return { lat: ll[1], lng: ll[0] };
    });
    console.log(polygon);
    return polygon;
  };

  deleteMyMarker = () => {
    this.setState({
      infoOpen: false
    });
    this.props.deleteMarker(this.state.markerMap.id);
  };

  fitBounds = () => {
    const bounds = new window.google.maps.LatLngBounds();
    // myPlaces.map(place => {
    //   bounds.extend(place.pos);
    //   return place.id;
    // });

    (this.props.currentPolygon || []).map(place => {
      bounds.extend({ lat: place[1], lng: place[0] });
      return place;
    });
    console.log(bounds);
    this.map.fitBounds(bounds);
  };

  loadHandler = () => {
    // Store a reference to the google map instance in state

    // Fit map bounds to contain all markers
    this.fitBounds();
  };

  // We have to create a mapping of our places to actual Marker objects
  markerLoadHandler = async marker => {
    console.log("ONLOAD");
    // return setMarkerMap(prevState => {
    //   const len = Object.keys(prevState).length;
    //   console.log(prevState);
    //   return { ...prevState, [len]: marker };
    // });
    // console.log("LIGHT", marker);
    // const len = this.state.markerMap
    return this.setState(prevState => ({
      markerMap: {
        ...prevState.markerMap,
        [Object.keys(prevState).length]: marker
      }
    }));
  };

  markerClickHandler = async (marker, index) => {
    //main, place, index, id
    // Remember which place was clicked
    this.setState({
      markerMap: {
        position: { lat: marker.latLng.lat(), lng: marker.latLng.lng() },
        id: index
      }
    });

    const no = index;
    this.setState({
      selectedPlace: { index: no }
    });
    console.log(index);
    if (this.state.infoOpen) {
      this.setState({
        infoOpen: false
      });
    }
    this.setState({
      infoOpen: true
    });
    // Required so clicking a 2nd marker works as expected
    // If you want to zoom in a little on marker click
    if (this.state.zoom < 13) {
      this.setState({
        zoom: 13
      });
    }

    // console.log(this.state.markerMap);

    // if you want to center the selected Marker
    //setCenter(place.pos)
  };

  render() {
    const Map = this.map;
    console.log("HGA", this.props.fixedPolygons);
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXXUe1UPwcYKHx8L3drP_vJks8zl9kla4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        {...this.props}
      />
    );
  }
}

export default GoogleMapComponent;
