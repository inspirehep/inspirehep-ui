const appBaseUrl = 'http://localhost:8080';

const routes = {
  admin: {
    holdingpenDashboard: `${appBaseUrl}/holdingpen/dashboard`,
  },
  public: {
    home: appBaseUrl,
    literatureSearch: `${appBaseUrl}/literature/customSearch`,
    literatureDetailForRecord1: `${appBaseUrl}/literature/1`,
  },
};

module.exports = {
  routes,
  appBaseUrl,
};
