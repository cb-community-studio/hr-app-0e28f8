const { HrAnalyticsAndReporting } = require('./hrAnalyticsAndReporting.class');
const createModel = require('../../models/hrAnalyticsAndReporting.model');
const hooks = require('./hrAnalyticsAndReporting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/hrAnalyticsAndReporting', new HrAnalyticsAndReporting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hrAnalyticsAndReporting');

  service.hooks(hooks);
};