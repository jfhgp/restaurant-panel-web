import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import classNames from "classnames";
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

import routeConstants from "../../constants/route-constants";
import withMediaQuery from "./WithMediaQuery";
import DrawerList from "./DrawerList";

/**
 * Material UI Styles
 */
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));
const drawerWidth = 243;
const styles = theme => ({
  drawer: {
    width: drawerWidth,

    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    // width: 60,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  }
});
/* ************************************************ */

const AppDrawer = props => {
  const {
    classes,
    isDrawerOpen,
    minHeight,
    mediaQuery,
    isMobileDrawerOpen,
    handleMobileDrawer
  } = props;
  const [open, setOpen] = React.useState(-1);
  const handleClick = index => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };
  // const myClasses = useStyles();
  console.log("ROUTE", props.routesData);
  console.log("MEDIA", mediaQuery);
  return (
    <>
      {mediaQuery ? (
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
            "app-drawer-close": !isDrawerOpen
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: isDrawerOpen,
              [classes.drawerClose]: !isDrawerOpen
            })
          }}
          open={isDrawerOpen}
        >
          <div style={{ minHeight }} />
          <Divider />
          <DrawerList
            routesData={props.routesData}
            handleClick={handleClick}
            open={open}
          />
        </Drawer>
      ) : (
        <Drawer open={isMobileDrawerOpen} onClose={handleMobileDrawer}>
          <div style={{ minHeight }} />
          <Divider />
          <DrawerList
            routesData={props.routesData}
            handleClick={handleClick}
            open={open}
          />
        </Drawer>
      )}
    </>
  );
};

AppDrawer.propTypes = {
  classes: PropTypes.shape(),
  isDrawerOpen: PropTypes.bool,
  minHeight: PropTypes.number,
  routesData: PropTypes.arrayOf(PropTypes.shape())
};

export default withStyles(styles)(AppDrawer);
