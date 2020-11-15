import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { authClass } from "../../utils/auth.util";

/** Route Constants **/
import routeConstants from "../../constants/route-constants";
import { getRoutesData } from "../../utils/permissions.utils";

/** Image Light Box **/
import ImageLightBoxComponent from "../../components/ImageLightBoxComponent";

/** components **/
// menu
import AppTopBar from "../AppTopbar";
// Drawer
import AppDrawer from "./AppDrawer";
// Dashboard
import DashboardContainer from "../../features/dashboard/DashboardContainer";
import withMediaQuery from "./WithMediaQuery";

// import CityMan from '../../features/CityMan/CityMan';

/**
 * Material UI Styles
 */
const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  }
});
/* ************************************************ */

class AppLayout extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpen: true,
      minHeight: 0
    };

    this.appBar = {};
    this.routesData = getRoutesData(authClass.getUser.permissions);
  }

  componentDidMount() {
    this.setState({ minHeight: this.appBar.offsetHeight });
  }

  handleToggleDrawer = () => {
    this.setState(prevState => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  };

  handleMobileDrawer = () => {
    this.setState(prevState => ({
      isMobileDrawerOpen: !prevState.isMobileDrawerOpen
    }))
  }

  // componentDidUpdate() {
  //   if (!this.isDesktop() && this.state.isDrawerOpen) {
  //     this.setState({ isDrawerOpen: false });
  //   }
  // }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  handleAppBarRef = ref => (this.appBar = ref);
  
  render() {
    const { classes } = this.props;
    const { isDrawerOpen, isMobileDrawerOpen } = this.state;
    
    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    const {mediaQuery} = this.props;
    console.log("MediaQuery", mediaQuery)
    return (
      <div>
        <AppTopBar
          toggleDrawer={this.handleToggleDrawer}
          handleMobileDrawer={this.handleMobileDrawer}
          isDrawerOpen={isDrawerOpen}
          mediaQuery={mediaQuery}
          appBarRef={this.handleAppBarRef}
        />
        <AppDrawer
          isDrawerOpen={isDrawerOpen}
          isMobileDrawerOpen={isMobileDrawerOpen}
          handleMobileDrawer={this.handleMobileDrawer}
          minHeight={this.state.minHeight}
          routesData={this.routesData}
          mediaQuery={mediaQuery}
        />
        <main
          className={classes.content}
          style={{
            width: mediaQuery ? (isDrawerOpen ? "calc(100vw - 240px)" : "calc(100vw - 60px)") : "calc(100vw - 0)",
            
          }}
        >
          <div className="layout-main">
            <Switch>
              {/* <PrivateRoute
                path={routeConstants.dashboard}
                exact
                component={DashboardContainer}
              />
              <PrivateRoute
                path={routeConstants.catalog}
                exact
                component={CatalogManagement}
              />
              <PrivateRoute
                path={routeConstants.cusfeedback}
                exact
                component={CusFeedback}
              />
              <PrivateRoute
                path={routeConstants.pizza}
                exact
                component={Pizza}
              />
              <PrivateRoute
                path={`${routeConstants.addpizza}`}
                exact
                component={PizzasAdd}
              />
              <PrivateRoute
                path={routeConstants.getbread}
                exact
                component={Bread}
              />
              <PrivateRoute
                path={`${routeConstants.addbread}`}
                exact
                component={BreadAdd}
              />
              <PrivateRoute
                path={routeConstants.getdrink}
                exact
                component={Drink}
              />
              <PrivateRoute
                path={`${routeConstants.adddrink}`}
                exact
                component={DrinkAdd}
              />
              <PrivateRoute
                path={routeConstants.getsauce}
                exact
                component={Sauce}
              />

              <PrivateRoute
                path={`${routeConstants.addsauce}`}
                exact
                component={SauceAdd}
              />

              <PrivateRoute
                path={routeConstants.getchicken}
                exact
                component={Chicken}
              />
              <PrivateRoute
                path={`${routeConstants.addchicken}`}
                exact
                component={ChickenAdd}
              />

              <PrivateRoute
                path={routeConstants.getsalad}
                exact
                component={Salad}
              />
              <PrivateRoute
                path={`${routeConstants.addsalad}`}
                exact
                component={SaladAdd}
              />

              <PrivateRoute
                path={routeConstants.ingredient}
                exact
                component={Ingredientcomp}
              />
              <PrivateRoute
                path={routeConstants.dough}
                exact
                component={Doughcomp}
              />

              <PrivateRoute
                path={routeConstants.doughAdd}
                exact
                component={DoughAdd}
              />
              <PrivateRoute
                path={routeConstants.sideman}
                exact
                component={SideComp}
              />
              <PrivateRoute
                path={routeConstants.sideManAdd}
                exact
                component={SideManAdd}
              />
              <PrivateRoute
                path={routeConstants.coupon}
                exact
                component={CoupMan}
              />
              <PrivateRoute
                path={routeConstants.couponAdd}
                exact
                component={CouponAdd}
              />
              <PrivateRoute
                path={routeConstants.product}
                exact
                component={Product}
              />
              <PrivateRoute
                path={routeConstants.size}
                exact
                component={SizeMan}
              />
              <PrivateRoute
                path={routeConstants.flavour}
                exact
                component={FlavourMan}
              />
              <PrivateRoute
                path={routeConstants.subcat}
                exact
                component={SubCat}
              />
              <PrivateRoute
                path={routeConstants.maincatman}
                exact
                component={MainCatMan}
              />
              <PrivateRoute
                path={routeConstants.customerman}
                exact
                component={CustomerMan}
              />
              <PrivateRoute
                path={routeConstants.orders}
                exact
                component={Orders}
              />
              <PrivateRoute
                path={routeConstants.orderdetail}
                exact
                component={OrderDetail}
              />
              <PrivateRoute
                path={routeConstants.orderarchive}
                exact
                component={OrderArchive}
              />
              <PrivateRoute
                path={routeConstants.banners}
                exact
                component={Banners}
              />
              <PrivateRoute
                path={routeConstants.crossbanner}
                exact
                component={CrossBanner}
              />
              <PrivateRoute
                path={routeConstants.crossbanneradd}
                exact
                component={CrossBannerAdd}
              />
              <PrivateRoute
                path={routeConstants.banneradd}
                exact
                component={BannerAdd}
              />
              <PrivateRoute
                path={routeConstants.pageskinman}
                exact
                component={PageSkinMan}
              />
              <PrivateRoute
                path={routeConstants.addpageskin}
                exact
                component={AddPageSkin}
              />
              <PrivateRoute
                path={routeConstants.addpageskintemp}
                exact
                component={AddPageSkinTemp}
              />
              <PrivateRoute
                path={routeConstants.cityman}
                exact
                component={CityMan}
              />
              <PrivateRoute
                path={routeConstants.districts}
                exact
                component={Districts}
              />
              <PrivateRoute
                path={routeConstants.countries}
                exact
                component={Countries}
              />
              <PrivateRoute
                path={routeConstants.roadman}
                exact
                component={RoadMan}
              />
              <PrivateRoute
                path={routeConstants.roadmanadd}
                exact
                component={RoadManAdd}
              />
              <PrivateRoute
                path={routeConstants.streetman}
                exact
                component={StreetMan}
              />
              <PrivateRoute
                path={routeConstants.streetmanadd}
                exact
                component={StreetManAdd}
              />
              <PrivateRoute
                path={routeConstants.staticpage}
                exact
                component={StaticPage}
              />
              <PrivateRoute
                path={routeConstants.staticpageadd}
                exact
                component={StaticPageAdd}
              />
              <PrivateRoute
                path={routeConstants.storeman}
                exact
                component={StoreMan}
              />
              <PrivateRoute
                path={`${routeConstants.storemanadd}`}
                exact
                component={StoreManAdd}
              />

              <PrivateRoute
                path={routeConstants.getrider}
                exact
                component={RiderMan}
              />

              <PrivateRoute
                path={routeConstants.addrider}
                exact
                component={RiderManAdd}
              />

              <PrivateRoute
                path={routeConstants.addcity}
                exact
                component={CityAdd}
              />

              <PrivateRoute
                path={routeConstants.getcity}
                exact
                component={CityMan}
              />

              <PrivateRoute
                path={routeConstants.adddistrict}
                exact
                component={DistrictAdd}
              />

              <PrivateRoute
                path={routeConstants.pizzaview}
                exact
                component={PizzaView}
              />

              <PrivateRoute
                path={routeConstants.BreadView}
                exact
                component={BreadView}
              />

              <PrivateRoute
                path={routeConstants.DrinkView}
                exact
                component={DrinkView}
              />

              <PrivateRoute
                path={routeConstants.SauceView}
                exact
                component={SauceView}
              />

              <PrivateRoute
                path={routeConstants.ChickenView}
                exact
                component={ChickenView}
              />
              <PrivateRoute
                path={routeConstants.SaladView}
                exact
                component={SaladView}
              />
              <PrivateRoute
                path={routeConstants.Topping}
                exact
                component={Topping}
              />

              <PrivateRoute
                path={routeConstants.ToppingView}
                exact
                component={ToppingView}
              />

              <PrivateRoute
                path={routeConstants.ToppingAdd}
                exact
                component={ToppingAdd}
              />

              <PrivateRoute
                path={routeConstants.customerdetail}
                exact
                component={CustomerDetail}
              /> */}

              {/* <Route path={routeConstants.dashboard}
              exact 
              component={DashboardContainer}
              />
               <Route path={routeConstants.catalog}
               exact 
               component={CatalogManagement} 
               /> */}
              {/** Dashboard routes */}
              {/* <PrivateRoute
                path={routeConstants.dashboard}
                exact
                component={DashboardContainer}
              />

              {this.routesData.map((route, index) => (
                <PrivateRoute
                  key={`${route.path}-${index + 1}`}
                  path={route.path}
                  component={route.comp}
                />
              ))} */}
              {this.routesData.map((route, index) => {
                return route.isCollapsible ? (
                  <>
                    {route.comps.map((subRoute, subIndex) => {
                      return (
                        <PrivateRoute
                          key={`${subRoute.path}-${subIndex + 1}`}
                          path={subRoute.path}
                          component={subRoute.comp}
                        />
                      );
                    })}
                  </>
                ) : (
                  <PrivateRoute
                    key={`${route.path}-${index + 1}`}
                    path={route.path}
                    component={route.comp}
                  />
                );
              })}

              {/** Not found */}
              <Redirect to={routeConstants.notFound} />
            </Switch>
          </div>
        </main>
        <ImageLightBoxComponent />
      </div>
    );
  }
}

AppLayout.propTypes = {
  location: PropTypes.shape(),
  classes: PropTypes.shape()
};

export default withStyles(styles)(withMediaQuery('(min-width:768px)')(AppLayout));


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authClass.getUser.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.shape(),
  component: PropTypes.func
};
