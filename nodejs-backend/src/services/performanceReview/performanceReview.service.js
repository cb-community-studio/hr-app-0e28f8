const { PerformanceReview } = require('./performanceReview.class');
const createModel = require('../../models/performanceReview.model');
const hooks = require('./performanceReview.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/performanceReview', new PerformanceReview(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('performanceReview');

  service.hooks(hooks);
};