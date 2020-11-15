import { get, post, newGet, newPost } from "./HttpProvider";
import featureConstants from "../constants/feature-constants";
import actionsConstants from "../constants/actions-constants";

const SERVICE_URLS = {
  /* *Domino's Admin* */
  login: "/admin/login",

  signup: "admin/signup",
  dashboard: "admin/dashboard",
  getAllAdminUsers: "admin/all",
  updateAdminUser: "admin/update",
  getAdminStats: "admin/stats",

  /* *Users* */
  getUsers: "users/get",
  getUserById: "users/profile",
  banUser: "users/ban",
  searchUser: "users/search",
  addCusFeedInformation:'/users/sendmessage',
  updateBannerInformation:'/banners/update',

  /*pizza*/
  getPizza: "/menu/getbytype/pizza",
  pizzaInformation: "/menu/get",
  updatepizzaInformation: "menu/update",
  updateImage: "/admin/upload",
  // getSide:'/menu/getbytype/sides',
  getBread: "/menu/getbytype/bread",
  getDrink:"/menu/getbytype/drink",
  getSauce: "/menu/getbytype/sides",
  getChicken: "/menu/getbytype/chicken",
  getSalad: "/menu/getbytype/salad",
  getCustomer: "/users/all",
  addStoreInformation: "/stores/add",
  updateStoreInformation: "/stores/update",
  addDoughInformation:'/dough/add',
  getStore: "/stores/get",
  getStoreByID: "/stores/get",
  getOrder: "/orders/get",
  getOrderById: "/orders/get",
  getDough:"/dough/get",
  getSides:"/dough/get",
  getingredient:"/menu/getbytype/topping",
  updateDoughInformation:"/dough/update",
  getDoughByID:'/dough/get',
  addSideInformation:'/dough/add',
  addRiderInformation:'/riders/add',
  getSideByID:'/dough/get',
  getriderByID:'/riders',
  updateSideInformation:'/dough/update',
  getDeals:'/deals/admin',
  getDealByID:'/deals/get',
  getRider:'/riders/all',
  updateRiderInformation:'/riders/update',
  getCity:"/cities/get/city",
addCity:'/cities/add',
getDistrict:'/cities/get/region',
addDistrict:'/cities/add',
getStreet:'/cities/get/street',
addStreet:'/cities/add',
getTopping:'/menu/getbytype/topping',
customerInformation:'/users/detail',
getBanner:"/banners/all",
addBanners:"/banners/add",

  /* *Transporters* */
  getAllTransporters: "transporters/get",
  getTransporterById: "transporters/profile",
  banTransporter: "transporters/ban",
  getNearbyTransporters: "transporters/nearby",
  activateTransporter: "transporters/activate",
  findTransportersToBreakOrder: "transporters/specific",
  searchTransporter: "transporters/search",
  getServiceAreas: "transporters/serviceareas",
  getTransporterIdenfyStatus: "transporters/idenfystatus",
  updateAdmin: "transporters/updateadmin",
  updateDealInformation:'deals/update',
  getcityByID:'/cities',
  bannerInfo:"/banners",

  /* *Orders* */
  getOrders: "orders/all",
  getOrderById: "orders/get",
  getOrderByNumber: "orders/search",
  updateRoute: "orders/updateroute",
  assignOrder: "orders/assign",
  getOrdersByDriverId: "orders/bydriver",
  getOrdersByUserId: "orders/user/all",
  cancelOrder: "orders/cancel",
  modifyOrder: "orders/update",
  estimateOrder: "orders/rates",
  autoBreakOrder: "orders/autobreak",
  reverseGeoCode: "https://nominatim.openstreetmap.org/reverse?format=jsonv2",

  /* *Rates* */
  getRates: "rates/all",
  addRates: "rates/add",
  updateRates: "rates/update",

  /* *Promotions* */
  getAllPromotions: "promo/all",
  addPromotions: "promo/add",
  expirePromotions: "promo/expire",
  updatePromotions: "promo/update",

  /* *Categories* */
  getAllCategories: "categories/get",
  getSubCategoryByParent: "categories/getbyparent",
  addCategory: "categories/add",

  /* *Feedback* */
  getFeedbackByTransporter: "feedback/getbytransporter",
  getFeedbackByUser: "feedback/getbyuser",

  /* *Vehicles* */
  getAllVehicles: "vehicles/all",
  activateVehicle: "vehicles/activate",

  /* *Commodities* */
  updateCommodity: "commodities/update",

  /* *Finance* */
  getAllFinances: "finance/all",
  getFinanceById: "finance/detail",
  updateFinanceStatus: "finance/pay"
};

/*
 *
 * Admin
 */
const login = ({ email, password }) =>
  post(
    SERVICE_URLS.login,
    { email, password },
    { feature: featureConstants.login }
  );

const signup = data =>
  newPost(SERVICE_URLS.signup, data, { feature: featureConstants.signup });

const dashboard = () =>
  get(SERVICE_URLS.dashboard, {}, { feature: featureConstants.dashboard });

const getAllAdminUsers = () =>
  newGet(
    SERVICE_URLS.getAllAdminUsers,
    {},
    { feature: featureConstants.roles, action: actionsConstants.read }
  );

const updateAdminUser = data =>
  newPost(SERVICE_URLS.updateAdminUser, data, {
    feature: featureConstants.roles,
    action: actionsConstants.update
  });

const getAdminStats = data =>
  newGet(SERVICE_URLS.getAdminStats, data, {
    feature: featureConstants.dashboard
  });

/*
 *
 * Users
 */
const getUsers = () =>
  get(
    SERVICE_URLS.getUsers,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
const getPizza = data =>
  get(
    SERVICE_URLS.getPizza,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getSides = data =>
  get(
    SERVICE_URLS.getSides,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getingredient = data =>
  get(
    SERVICE_URLS.getingredient,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const pizzaInformation = data =>
  get(
    SERVICE_URLS.pizzaInformation,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const breadInformation = data =>
  get(
    SERVICE_URLS.breadInformation,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const bannerInfo = data =>
  get(
    SERVICE_URLS.bannerInfo,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );


  const getStreet = data =>
  get(
    SERVICE_URLS.getStreet,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );





  const addCusFeedInformation = data =>
  post(SERVICE_URLS.addCusFeedInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });



  const addCity = data =>
  post(SERVICE_URLS.addCity, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

  const addStreet = data =>
  post(SERVICE_URLS.addStreet, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

  const addDistrict = data =>
  post(SERVICE_URLS.addDistrict, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });









const addStoreInformation = data =>
  post(SERVICE_URLS.addStoreInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

const updateStoreInformation = data =>
  post(SERVICE_URLS.updateStoreInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

const addDoughInformation = data =>
  post(SERVICE_URLS.addDoughInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

  const updateDoughInformation = data =>
  post(SERVICE_URLS.updateDoughInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
  const updateBannerInformation = data =>
  post(SERVICE_URLS.updateBannerInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

  const addSideInformation = data =>
  post(SERVICE_URLS.addSideInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
  
  const addRiderInformation = data =>
  post(SERVICE_URLS.addRiderInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
  const addBanners = data =>
  post(SERVICE_URLS.addBanners, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
 const updateSideInformation = data =>
  post(SERVICE_URLS.updateSideInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
  const updateRiderInformation = data =>
  post(SERVICE_URLS.updateRiderInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
  const updateDealInformation = data =>
  post(SERVICE_URLS.updateDealInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });



const updatepizzaInformation = data =>
  post(SERVICE_URLS.updatepizzaInformation, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });

const updateImage = data =>
  post(SERVICE_URLS.updateImage, data, {
    feature: featureConstants.users,
    action: actionsConstants.update
  });
const getSide = data =>
  get(
    SERVICE_URLS.getSide,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const getBread = data =>
  get(
    SERVICE_URLS.getBread,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getBanner = data =>
  get(
    SERVICE_URLS.getBanner,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

  const getDrink = data =>
  get(
    SERVICE_URLS.getDrink,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );



  const getCity = data =>
  get(
    SERVICE_URLS.getCity,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );




const getDough = data =>
get(
  SERVICE_URLS.getDough,
  {},
  {
    feature: featureConstants.users,
    action: actionsConstants.read
  }
);
  
const getDeals = data =>
get(
  SERVICE_URLS.getDeals,
  {},
  {
    feature: featureConstants.users,
    action: actionsConstants.read
  }
);

const customerInformation = data =>
get(
  SERVICE_URLS.customerInformation,
  {data},
  {
    feature: featureConstants.users,
    action: actionsConstants.read
  }
);


const getSauce = data =>
  get(
    SERVICE_URLS.getSauce,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const getChicken = data =>
  get(
    SERVICE_URLS.getChicken,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  
const getTopping = data =>
get(
  SERVICE_URLS.getTopping,
  {},
  {
    feature: featureConstants.users,
    action: actionsConstants.read
  }
);

const getSalad = data =>
  get(
    SERVICE_URLS.getSalad,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

  const getRider = data =>
  get(
    SERVICE_URLS.getRider,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
const getCustomer = data =>
  get(
    SERVICE_URLS.getCustomer,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const getStore = () =>
  get(
    SERVICE_URLS.getStore,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const getStoreByID = data =>
  get(
    SERVICE_URLS.getStoreByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getcityByID = data =>
  get(
    SERVICE_URLS.getcityByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );

const getOrder = data =>
  get(
    SERVICE_URLS.getOrder,
    {},
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
const getOrderById = data =>
  get(
    SERVICE_URLS.getOrderById,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getDoughByID = data =>
  get(
    SERVICE_URLS.getDoughByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getSideByID = data =>
  get(
    SERVICE_URLS.getSideByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getriderByID = data =>
  get(
    SERVICE_URLS.getriderByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
  const getDealByID = data =>
  get(
    SERVICE_URLS.getDealByID,
    { data },
    {
      feature: featureConstants.users,
      action: actionsConstants.read
    }
  );
const getUserById = data =>
  get(SERVICE_URLS.getUserById, data, {
    feature: featureConstants.users,
    action: actionsConstants.read
  });

const searchUser = data =>
  get(SERVICE_URLS.searchUser, data, {
    feature: featureConstants.users,
    action: actionsConstants.read
  });

const banUser = ({ _id, banned }) =>
  post(
    SERVICE_URLS.banUser,
    { _id, banned },
    {
      feature: featureConstants.users,
      action: actionsConstants.update
    }
  );

/**
 *
 * Transporters
 */
const getAllTransporters = () =>
  get(
    SERVICE_URLS.getAllTransporters,
    {},
    {
      feature: featureConstants.transporters,
      action: actionsConstants.read
    }
  );

const getTransporterById = data =>
  get(SERVICE_URLS.getTransporterById, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.read
  });
  
const getDistrict = data =>
get(SERVICE_URLS.getDistrict, data, {
  feature: featureConstants.transporters,
  action: actionsConstants.read
});

const searchTransporter = data =>
  get(SERVICE_URLS.searchTransporter, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.read
  });

const banTransporter = ({ transporter, banned }) =>
  post(
    SERVICE_URLS.banTransporter,
    { transporter, banned },
    {
      feature: featureConstants.transporters,
      action: actionsConstants.update
    }
  );

const getNearbyTransporters = data =>
  post(SERVICE_URLS.getNearbyTransporters, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.update
  });

const activateTransporter = ({ transporter }) =>
  post(
    SERVICE_URLS.activateTransporter,
    { transporter },
    {
      feature: featureConstants.transporters,
      action: actionsConstants.update
    }
  );

const findTransportersToBreakOrder = (location, type) =>
  newPost(
    SERVICE_URLS.findTransportersToBreakOrder,
    { location, type },
    {
      feature: featureConstants.transporters,
      action: actionsConstants.update
    }
  );

const getServiceAreas = data =>
  newGet(SERVICE_URLS.getServiceAreas, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.read
  });

const getTransporterIdenfyStatus = data =>
  newGet(SERVICE_URLS.getTransporterIdenfyStatus, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.update
  });

const updateTransporterAdmin = date =>
  newPost(SERVICE_URLS.updateAdmin, date, {
    feature: featureConstants.transporters,
    action: actionsConstants.update
  });

/**
 *
 * Orders
 */
const getOrders = () =>
  get(
    SERVICE_URLS.getOrders,
    {},
    {
      feature: featureConstants.orders,
      action: actionsConstants.read
    }
  );

// const getOrderById = data =>
//   get(SERVICE_URLS.getOrderById, data, {
//     feature: featureConstants.orders,
//     action: actionsConstants.read
//   });

const getOrderByNumber = number =>
  get(
    SERVICE_URLS.getOrderByNumber,
    { number },
    {
      feature: featureConstants.orders,
      action: actionsConstants.read
    }
  );

const updateRoute = data =>
  post(SERVICE_URLS.updateRoute, data, {
    feature: featureConstants.orders,
    action: actionsConstants.update
  });

const assignOrder = data =>
  post(SERVICE_URLS.assignOrder, data, {
    feature: featureConstants.orders,
    action: actionsConstants.update
  });

const getOrdersByDriver = data =>
  get(SERVICE_URLS.getOrdersByDriverId, data, {
    feature: featureConstants.orders,
    action: actionsConstants.read
  });

const getOrdersByUserId = data =>
  get(SERVICE_URLS.getOrdersByUserId, data, {
    feature: featureConstants.users,
    action: actionsConstants.read
  });

const modifyOrder = data =>
  post(SERVICE_URLS.modifyOrder, data, {
    feature: featureConstants.orders,
    action: actionsConstants.update
  });

const estimateOrder = data =>
  newPost(SERVICE_URLS.estimateOrder, data, {
    feature: featureConstants.orders,
    action: actionsConstants.read
  });

const cancelOrder = ({ _id, cancellationReason }) =>
  post(
    SERVICE_URLS.cancelOrder,
    { _id, cancellationReason },
    {
      feature: featureConstants.orders,
      action: actionsConstants.update
    }
  );

const autoBreakOrder = id =>
  newGet(
    SERVICE_URLS.autoBreakOrder,
    { id },
    {
      feature: featureConstants.orders,
      action: actionsConstants.update
    }
  );

/**
 *
 * Rates
 */
const getRates = () =>
  get(
    SERVICE_URLS.getRates,
    {},
    {
      feature: featureConstants.rates,
      action: actionsConstants.read
    }
  );

const addRates = data =>
  post(SERVICE_URLS.addRates, data, {
    feature: featureConstants.rates,
    action: actionsConstants.create
  });

const updateRates = data =>
  post(SERVICE_URLS.updateRates, data, {
    feature: featureConstants.rates,
    action: actionsConstants.update
  });

/**
 *
 * Promotions
 */
const getAllPromotions = () =>
  get(
    SERVICE_URLS.getAllPromotions,
    {},
    {
      feature: featureConstants.promotions,
      action: actionsConstants.read
    }
  );

const addPromotions = data =>
  post(SERVICE_URLS.addPromotions, data, {
    feature: featureConstants.promotions,
    action: actionsConstants.create
  });

const expirePromotions = data =>
  post(SERVICE_URLS.expirePromotions, data, {
    feature: featureConstants.promotions,
    action: actionsConstants.update
  });

const updatePromotions = data =>
  post(SERVICE_URLS.updatePromotions, data, {
    feature: featureConstants.promotions,
    action: actionsConstants.update
  });

/**
 *
 * Categories
 */
const getAllCategories = () =>
  get(
    SERVICE_URLS.getAllCategories,
    {},
    {
      feature: featureConstants.categories,
      action: actionsConstants.read
    }
  );

const getSubCategoryByParent = parentId =>
  get(
    SERVICE_URLS.getSubCategoryByParent,
    { parentId },
    {
      feature: featureConstants.categories,
      action: actionsConstants.read
    }
  );

const addCategory = data =>
  post(SERVICE_URLS.addCategory, data, {
    feature: featureConstants.categories,
    action: actionsConstants.create
  });

/**
 *
 * Feedback
 */
const getFeedbackByTransporter = data =>
  get(SERVICE_URLS.getFeedbackByTransporter, data, {
    feature: featureConstants.transporters,
    action: actionsConstants.read
  });

const getFeedbackByUser = data =>
  get(SERVICE_URLS.getFeedbackByUser, data, {
    feature: featureConstants.users,
    action: actionsConstants.read
  });

/**
 *
 * Vehicles
 */
const getAllVehicles = () =>
  get(
    SERVICE_URLS.getAllVehicles,
    {},
    {
      feature: featureConstants.vehicles,
      action: actionsConstants.read
    }
  );

const activateVehicle = ({ vehicle }) =>
  post(
    SERVICE_URLS.activateVehicle,
    { vehicle },
    {
      feature: featureConstants.transporters,
      action: actionsConstants.update
    }
  );

/**
 *
 * Commodities
 */
const updateCommodity = data =>
  newPost(SERVICE_URLS.updateCommodity, data, {
    feature: featureConstants.orders,
    action: actionsConstants.update
  });

/**
 *
 * Finance
 */
const getAllFinances = () =>
  newGet(
    SERVICE_URLS.getAllFinances,
    {},
    {
      feature: featureConstants.finance,
      action: actionsConstants.read
    }
  );

const getFinanceById = id =>
  newGet(
    SERVICE_URLS.getFinanceById,
    { id },
    {
      feature: featureConstants.finance,
      action: actionsConstants.read
    }
  );

const updateFinanceStatus = ({ lastPaidAmount, bankAccount, _id }) =>
  newPost(
    SERVICE_URLS.updateFinanceStatus,
    {
      lastPaidAmount,
      bankAccount,
      _id
    },
    {
      feature: featureConstants.finance,
      action: actionsConstants.update
    }
  );

const apiServices = {
  // Auth
  login,
  dashboard,
  signup,
  getAllAdminUsers,
  updateAdminUser,
  getAdminStats,
  addCusFeedInformation,
  getDistrict,
  addDistrict,
  getStreet,
  addStreet,
  getcityByID,
  customerInformation,
  getBanner,
  bannerInfo,
  addBanners,
  // Users
  getUsers,
  getUserById,
  banUser,
  searchUser,

  //pizza
  getPizza,
  pizzaInformation,
  updatepizzaInformation,
  updateImage,
   getSides,
  getBread,
  getDrink,
  breadInformation,
  getSauce,
  getChicken,
  getSalad,
  getDough,
  getCustomer,
  addStoreInformation,
  updateStoreInformation,
  getStore,
  getStoreByID,
  getOrder,
  getOrderById,
  addDoughInformation,
  updateDoughInformation,
  getDoughByID,
  addSideInformation,
  addRiderInformation,
  getSideByID,
  updateSideInformation,
  getDeals,
  getDealByID,
  updateDealInformation,
  getRider,
getriderByID,
addCity,
updateBannerInformation,

  // Transporters
  getAllTransporters,
  getTransporterById,
  banTransporter,
  activateTransporter,
  getNearbyTransporters,
  findTransportersToBreakOrder,
  searchTransporter,
  getServiceAreas,
  getTransporterIdenfyStatus,
  updateTransporterAdmin,
  updateRiderInformation,
  getCity,

  // Orders
  getOrders,
  getOrderById,
  getOrderByNumber,
  updateRoute,
  assignOrder,
  getOrdersByDriver,
  getOrdersByUserId,
  cancelOrder,
  modifyOrder,
  estimateOrder,
  autoBreakOrder,
  getTopping,
  // Rates
  addRates,
  getRates,
  updateRates,
  getingredient,

  // Promotions
  getAllPromotions,
  addPromotions,
  expirePromotions,
  updatePromotions,

  // Categories
  getAllCategories,
  getSubCategoryByParent,
  addCategory,

  // Feedback
  getFeedbackByTransporter,
  getFeedbackByUser,

  // Vehicles
  getAllVehicles,
  activateVehicle,

  // Commodities
  updateCommodity,

  // Finance
  getAllFinances,
  getFinanceById,
  updateFinanceStatus
};
export default apiServices;

// const getAddress = data => {
//   const params = `&lat=${data[0]}&lon=${data[1]}`;
//   const url = SERVICE_URLS.reverseGeoCode + params;
//   return independentRequest(url, 'get');
// };
