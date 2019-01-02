/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-social-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//amba.masterpro.site:2022/',
      PoolName: 'AMBA Pool',
      CompanyName: 'MasterPro.site',
      // HTTP mining endpoint
      HttpHost: 'http://amba.masterpro.site',
      HttpPort: 2822,

      // Stratum mining endpoint
      StratumHost: 'amba.masterpro.site',
      StratumPort: 2001,

      // Fee and payout details
      PoolFee: '0.3%',
      PayoutThreshold: '10',
      PayoutInterval: '3h',

      // For network hashrate (change for your favourite fork)
      BlockTime: 15.0,
      BlockReward: 6,
      Unit: 'AMBA',

    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'https://amba.masterpro.site:2022'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

