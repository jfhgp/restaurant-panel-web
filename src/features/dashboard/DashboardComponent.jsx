import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import routes from "../../constants/route-constants";
import { RestrictedLink } from "../../utils/permissions.utils";
import actions from "../../constants/actions-constants";
import featureConstants from "../../constants/feature-constants";
import EmptyDataPlaceholder from "../../components/layout/EmptyDataPlaceholder";
import EmptyRow from "../../components/table/EmptyRow";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../../App.css";
import { Chart } from "react-charts";
import {Link} from "react-router-dom"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const DashboardComponent = props => {
  const classes = useStyles();
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [1, 1],
          [1, 2],
          [3, 12],
          [4, 24]
        ]
      },
      {
        label: "Series 2",
        data: [
          [10, 1],
          [1, 2],
          [3, 12],
          [6, 23]
        ]
      }
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <Fragment>
      <div className="dash">
        <h1>Admin Dashboard</h1>
      </div>
      <br></br>
      <div>
        <CssBaseline />
        <Container maxWidth="xl">
          <div className={classes.root} />
          <div style={{ border: "2px" }}>
            <div
              style={{
                backgroundColor: "gray",
                height: "30px",
                display: "flex",
                alignItems: "center"
              }}
            >
              Realtime order report
            </div>
          </div>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Link to="/orders">
              <Paper className={classes.paper}>
                <div>
            <h1>{props.totalNumberorder}</h1>
                </div>
                <br></br>
                <div>
                  <h1> Total Order</h1>
                </div>
              </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>{props.completedOrder}</h1>
                </div>
                <br></br>
                <div>
                  <h1>Completed Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>New Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
            <h1>{props.pending}</h1>
                </div>
                <br></br>
                <div>
                  <h1>Incomplete Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
            <h1>{props.cancelled}</h1>
                </div>
                <br></br>
                <div>
                  <h1>Cancelled Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>New Customer</h1>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Ordering Customer</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
            <h1>{props.web}</h1>
                </div>
                <br></br>
                <div>
                  <h1>Web Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
            <h1>{props.mobile}</h1>
                </div>
                <br></br>
                <div>
                  <h1>Mobile Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Android Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Iphone Order</h1>
                </div>
              </Paper>
            </Grid>
          
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Yemek sepeti Oredr</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Re-Order</h1>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={classes.paper}>
                <div>
                  <h1>0</h1>
                </div>
                <br></br>
                <div>
                  <h1>Other Channels</h1>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <br></br>

      <Grid container spacing={3}>
        <Grid xs={12} md={4} item>
          <label style={{ paddingLeft: "100px" }}>
            <b>ORDER PER DAY</b>
          </label>
          <div
            style={{
              width: "400px",
              height: "300px"
            }}
          >
            <Chart data={data} axes={axes} />
          </div>
        </Grid>

        <Grid xs={12} md={4} item>
          <label style={{ paddingLeft: "100px" }}>
            <b>ORDER PER MONTH</b>
          </label>
          <div
            style={{
              width: "400px",
              height: "300px"
            }}
          >
            <Chart data={data} axes={axes} />
          </div>
        </Grid>

        <Grid xs={12} md={4} item>
          <label style={{ paddingLeft: "100px" }}>
            <b>ORDER PER YEAR</b>
          </label>
          <div
            style={{
              width: "400px",
              height: "300px"
            }}
          >
            <Chart data={data} axes={axes} />
          </div>
        </Grid>
      </Grid>
    </Fragment>
    // <div className="layout-page dashboard-div">
    //   <div style={{ margin: '0 2rem' }}>
    //     <Typography variant="headline">Admin Dashboard</Typography>
    //   </div>
    //   <div className="p-grid" style={{ margin: 0 }}>
    //     <div className="p-col-12 padding-0">
    //       <div className="p-grid" style={{ padding: '0 1rem', margin: 0 }}>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={routes.orders}
    //             featureAndAction={{
    //               feature: featureConstants.orders,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(243,229,245)' }}>
    //                 <i
    //                   className="fas fa-clipboard-list"
    //                   style={{ color: 'rgb(142,36,170)' }}
    //                 />
    //               </div>
    //               <span>{details.orders}</span>
    //               <span>Total Requests</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={`${routes.orders}/pending`}
    //             featureAndAction={{
    //               feature: featureConstants.orders,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(225,241,255)' }}>
    //                 <i
    //                   className="fas fa-power-off"
    //                   style={{ color: 'rgb(63,122,252)' }}
    //                 />
    //               </div>
    //               <span>{details.pending}</span>
    //               <span>Pending Requests</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={`${routes.orders}/accepted`}
    //             featureAndAction={{
    //               feature: featureConstants.orders,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(255,242,216)' }}>
    //                 <i
    //                   className="fas fa-graduation-cap"
    //                   style={{ color: 'rgb(255,168,29)' }}
    //                 />
    //               </div>
    //               <span>{details.accepted}</span>
    //               <span>Accepted Orders</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={`${routes.orders}/delivered`}
    //             featureAndAction={{
    //               feature: featureConstants.orders,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(255,234,234)' }}>
    //                 <i
    //                   className="far fa-money-bill-alt"
    //                   style={{ color: 'rgb(255,0,0)' }}
    //                 />
    //               </div>
    //               <span>{details.delivered}</span>
    //               <span>Delivered Orders</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="p-col-12 padding-0">
    //       <div className="p-grid" style={{ padding: '0 1rem', margin: 0 }}>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={routes.orders}
    //             featureAndAction={{
    //               feature: featureConstants.orders,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(243,229,245)' }}>
    //                 <i
    //                   className="fas fa-clipboard-list"
    //                   style={{ color: 'rgb(142,36,170)' }}
    //                 />
    //               </div>
    //               <span>{details.recentOrders.length}</span>
    //               <span>New Orders</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={routes.transporters}
    //             featureAndAction={{
    //               feature: featureConstants.transporters,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(225,241,255)' }}>
    //                 <i
    //                   className="fas fa-user-tie"
    //                   style={{ color: 'rgb(63,122,252)' }}
    //                 />
    //               </div>
    //               <span>{details.newTransporters}</span>
    //               <span>New Transporters</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <RestrictedLink
    //             to={routes.users}
    //             featureAndAction={{
    //               feature: featureConstants.users,
    //               action: actions.read
    //             }}
    //           >
    //             <div className="stat-box">
    //               <div style={{ backgroundColor: 'rgb(255,242,216)' }}>
    //                 <i
    //                   className="fas fa-user"
    //                   style={{ color: 'rgb(255,168,29)' }}
    //                 />
    //               </div>
    //               <span>{details.newUsers}</span>
    //               <span>New Users</span>
    //             </div>
    //           </RestrictedLink>
    //         </div>
    //         <div className="p-col-12 p-md-3 p-lg-3 padding-0">
    //           <div className="stat-box">
    //             <div style={{ backgroundColor: 'rgb(255,234,234)' }}>
    //               <i
    //                 className="fas fa-car-alt"
    //                 style={{ color: 'rgb(255,0,0)' }}
    //               />
    //             </div>
    //             <span>{details.newVehicles}</span>
    //             <span>New Vehicles</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="p-col-12 padding-0">
    //       <div className="p-grid" style={{ padding: '0 1rem', margin: 0 }}>
    //         <div
    //           className="p-col-12 p-sm-12 p-md-6 p-lg-6 dashboard-status"
    //           style={{ padding: 0 }}
    //         >
    //           <div>
    //             <div>
    //               <Typography variant="headline">Status</Typography>
    //             </div>
    //             <div className="p-grid">
    //               <div className="p-col-12 p-md-6 p-lg-6 padding-0">
    //                 <RestrictedLink
    //                   to={routes.users}
    //                   featureAndAction={{
    //                     feature: featureConstants.users,
    //                     action: actions.read
    //                   }}
    //                 >
    //                   <div className="stat-box">
    //                     <div style={{ backgroundColor: 'rgb(243,229,245)' }}>
    //                       <i
    //                         className="fas fa-users"
    //                         style={{ color: 'rgb(142,36,170)' }}
    //                       />
    //                     </div>
    //                     <span>{details.users}</span>
    //                     <span>Users</span>
    //                   </div>
    //                 </RestrictedLink>
    //               </div>
    //               <div className="p-col-12 p-md-6 p-lg-6 padding-0">
    //                 <RestrictedLink
    //                   to={routes.transporters}
    //                   featureAndAction={{
    //                     feature: featureConstants.transporters,
    //                     action: actions.read
    //                   }}
    //                 >
    //                   <div className="stat-box">
    //                     <div style={{ backgroundColor: 'rgb(225,241,255)' }}>
    //                       <i
    //                         className="fas fa-user-tie"
    //                         style={{ color: 'rgb(63,122,252)' }}
    //                       />
    //                     </div>
    //                     <span>{details.transporters}</span>
    //                     <span>Transporters</span>
    //                   </div>
    //                 </RestrictedLink>
    //               </div>
    //               <div className="p-col-12 p-md-6 p-lg-6 padding-0">
    //                 <RestrictedLink
    //                   to={routes.orders}
    //                   featureAndAction={{
    //                     feature: featureConstants.orders,
    //                     action: actions.read
    //                   }}
    //                 >
    //                   <div className="stat-box">
    //                     <div style={{ backgroundColor: 'rgb(255,242,216)' }}>
    //                       <i
    //                         className="far fa-file-alt"
    //                         style={{ color: 'rgb(255,168,29)' }}
    //                       />
    //                     </div>
    //                     <span>{details.orders}</span>
    //                     <span>Requests</span>
    //                   </div>
    //                 </RestrictedLink>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="p-col-12 p-sm-12 p-md-6 p-lg-6 top-transporters">
    //           <div>
    //             <Typography variant="headline">Top Transporters</Typography>
    //             <div>
    //               <Table>
    //                 <TableHead>
    //                   <TableRow>
    //                     <TableCell>Photo</TableCell>
    //                     <TableCell>Name</TableCell>
    //                     <TableCell>Phone</TableCell>
    //                     <TableCell>Email</TableCell>
    //                   </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                   {details.topTransporters.length ? (
    //                     details.topTransporters.map((item, index) => (
    //                       <TableRow
    //                         key={item._id}
    //                         style={
    //                           index % 2 === 0
    //                             ? { backgroundColor: '#f7f7f7' }
    //                             : {}
    //                         }
    //                         onClick={() =>
    //                           props.handleRowClick(
    //                             `${routes.transporters}/${item._id}`,
    //                             {
    //                               feature: featureConstants.transporters,
    //                               action: actions.read
    //                             }
    //                           )
    //                         }
    //                       >
    //                         <TableCell>
    //                           <img src={item.picture} alt="" />
    //                         </TableCell>
    //                         <TableCell>
    //                           {item.firstName} {item.lastName}
    //                         </TableCell>
    //                         <TableCell>{item.mobile}</TableCell>
    //                         <TableCell>{item.email}</TableCell>
    //                       </TableRow>
    //                     ))
    //                   ) : (
    //                     <EmptyRow
    //                       colSpan={4}
    //                       message="No transporters available."
    //                     />
    //                   )}
    //                 </TableBody>
    //               </Table>
    //             </div>
    //             <div className="text-right">
    //               <RestrictedLink
    //                 to={routes.transporters}
    //                 featureAndAction={{
    //                   feature: featureConstants.transporters,
    //                   action: actions.read
    //                 }}
    //               >
    //                 <Button disabled={activity}>View All</Button>
    //               </RestrictedLink>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="p-col-12 p-sm-12 p-md-6 p-lg-6 top-users">
    //           <div>
    //             <Typography variant="headline">Top Users</Typography>
    //             <div>
    //               <Table>
    //                 <TableHead>
    //                   <TableRow>
    //                     <TableCell>Photo</TableCell>
    //                     <TableCell>Name</TableCell>
    //                     <TableCell>Phone</TableCell>
    //                     <TableCell>Email</TableCell>
    //                   </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                   {details.topUsers.length ? (
    //                     details.topUsers.map((item, index) => (
    //                       <TableRow
    //                         key={item._id}
    //                         style={
    //                           index % 2 === 0
    //                             ? { backgroundColor: '#f7f7f7' }
    //                             : {}
    //                         }
    //                         onClick={() =>
    //                           props.handleRowClick(
    //                             `${routes.users}/${item._id}`,
    //                             {
    //                               feature: featureConstants.users,
    //                               action: actions.read
    //                             }
    //                           )
    //                         }
    //                       >
    //                         <TableCell>
    //                           <img src={item.picture} alt="" />
    //                         </TableCell>
    //                         <TableCell>
    //                           {item.firstName} {item.lastName}
    //                         </TableCell>
    //                         <TableCell>{item.mobile}</TableCell>
    //                         <TableCell>{item.email}</TableCell>
    //                       </TableRow>
    //                     ))
    //                   ) : (
    //                     <EmptyRow colSpan={4} message="No users available." />
    //                   )}
    //                 </TableBody>
    //               </Table>
    //             </div>
    //             <div className="text-right">
    //               <RestrictedLink
    //                 to={routes.users}
    //                 featureAndAction={{
    //                   feature: featureConstants.users,
    //                   action: actions.read
    //                 }}
    //               >
    //                 <Button disabled={activity}>View All</Button>
    //               </RestrictedLink>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="p-col-12 p-sm-12 p-md-6 p-lg-6 recent-orders">
    //           <div>
    //             <Typography variant="headline">Recent Orders</Typography>
    //             <div>
    //               {details.recentOrders.length ? (
    //                 details.recentOrders.map(item => (
    //                   <RestrictedLink
    //                     key={item._id}
    //                     to={`${routes.orders}/details/${item._id}`}
    //                     featureAndAction={{
    //                       feature: featureConstants.orders,
    //                       action: actions.read
    //                     }}
    //                   >
    //                     <div className="recent-order">
    //                       <div>#{item._id}</div>
    //                       <div>
    //                         <i className="fas fa-dot-circle" />
    //                         <Typography variant="body1">
    //                           {item.pickup.address}
    //                         </Typography>
    //                       </div>
    //                       <div style={{ marginTop: '0.4rem' }}>
    //                         <i className="fas fa-location-arrow" />
    //                         <Typography variant="body1">
    //                           {item.dropoff.address}
    //                         </Typography>
    //                       </div>
    //                       <div>{moment(item.createdAt).fromNow()}</div>
    //                     </div>
    //                   </RestrictedLink>
    //                 ))
    //               ) : (
    //                 <EmptyDataPlaceholder message="No orders available." />
    //               )}
    //             </div>
    //             <div className="text-right">
    //               <RestrictedLink
    //                 to={routes.orders}
    //                 featureAndAction={{
    //                   feature: featureConstants.orders,
    //                   action: actions.read
    //                 }}
    //               >
    //                 <Button disabled={activity}>View All</Button>
    //               </RestrictedLink>
    //             </div>
    //           </div>
    //         </div>
    //         {/* <div className="p-col-12 dashboard-stats">
    //           <div className="p-grid">
    //             <div className="p-col-12">
    //               <Line data={props.chartData} />
    //             </div>
    //             <div className="p-col-12 p-md-6 p-lg-2">
    //               <DatePicker
    //                 autoOk
    //                 label="From"
    //                 fullWidth
    //                 value={props.from}
    //                 onChange={date =>
    //                   handleChange({ target: { name: 'from', value: date } })
    //                 }
    //                 format="D MMMM YYYY"
    //               />
    //             </div>
    //             <div className="p-col-12 p-md-6 p-lg-2">
    //               <DatePicker
    //                 autoOk
    //                 label="To"
    //                 fullWidth
    //                 value={props.to}
    //                 onChange={date =>
    //                   handleChange({ target: { name: 'to', value: date } })
    //                 }
    //                 format="D MMMM YYYY"
    //               />
    //             </div>
    //             <div className="p-col-12 p-md-3 p-lg-2 text-center">
    //               <FormControlLabel
    //                 control={
    //                   <Checkbox
    //                     checked={props.orders}
    //                     name="orders"
    //                     onChange={handleChange}
    //                     color="default"
    //                   />
    //                 }
    //                 label="Orders"
    //               />
    //             </div>
    //             <div className="p-col-12 p-md-3 p-lg-2 text-center">
    //               <FormControlLabel
    //                 control={
    //                   <Checkbox
    //                     checked={props.newUsers}
    //                     onChange={handleChange}
    //                     name="newUsers"
    //                     color="default"
    //                   />
    //                 }
    //                 label="Users"
    //               />
    //             </div>
    //             <div className="p-col-12 p-md-3 p-lg-2 text-center">
    //               <FormControlLabel
    //                 control={
    //                   <Checkbox
    //                     checked={props.newTransporters}
    //                     onChange={handleChange}
    //                     name="newTransporters"
    //                     color="default"
    //                   />
    //                 }
    //                 label="Transporters"
    //               />
    //             </div>
    //             <div className="p-col-12 p-md-3 p-lg-2 text-center">
    //               <FormControlLabel
    //                 control={
    //                   <Checkbox
    //                     // checked={props.earnings}
    //                     // onChange={handleChange}
    //                     name="earnings"
    //                     color="default"
    //                   />
    //                 }
    //                 label="Earnings"
    //               />
    //             </div>
    //           </div>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

DashboardComponent.defaultProps = {
  details: {
    orders: 0,
    users: 0,
    transporters: 0,
    pending: 0,
    accepted: 0,
    delivered: 0,
    newTransporters: 0,
    newUsers: 0,
    newVehicles: 0,
    topTransporters: [],
    topUsers: [],
    recentOrders: [],
    vehicles: []
  },
  from: null,
  to: null,
  chartData: {
    datasets: [],
    labels: []
  }
};

DashboardComponent.propTypes = {
  details: PropTypes.shape(),
  activity: PropTypes.bool,
  handleRowClick: PropTypes.func
};

export default DashboardComponent;
