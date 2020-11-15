import React from "react";
import {
  withStyles,
  Drawer,
  ListItem,
  Divider,
  ListItemText,
  List,
  ListItemIcon,
  Hidden
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";

const DrawerList = (props) => {
    const {routesData, handleClick, open} = props;
  return (
    <List>
      {routesData.map((route, index) => {
        return route.isCollapsible ? (
          <>
            <ListItem button onClick={() => handleClick(index)}>
              <ListItemIcon classes={{ root: "drawer-list-item" }}>
                <i className={route.icon} />
              </ListItemIcon>
              <ListItemText>{route.label}</ListItemText>
              {open === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open === index} timeout="auto" unmountOnExit>
              {route.comps.map((subRoute, subIndex) => {
                return (
                  <ListItem
                    key={`${subRoute.path}-${subIndex + 1}`}
                    button
                    component={NavLink}
                    to={subRoute.path}
                    activeClassName="active-list-item"
                  >
                    <ListItemIcon>
                      <i className={subRoute.icon} />
                    </ListItemIcon>
                    <ListItemText>{subRoute.label}</ListItemText>
                  </ListItem>
                );
              })}
            </Collapse>
          </>
        ) : (
          <ListItem
            key={`${route.path}-${index + 1}`}
            button
            component={NavLink}
            to={route.path}
            activeClassName="active-list-item"
          >
            <ListItemIcon>
              <i className={route.icon} />
            </ListItemIcon>
            <ListItemText>{route.label}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default DrawerList;
