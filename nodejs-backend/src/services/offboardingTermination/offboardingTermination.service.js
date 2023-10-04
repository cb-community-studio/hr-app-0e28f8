const { OffboardingTermination } = require('./offboardingTermination.class');
const createModel = require('../../models/offboardingTermination.model');
const hooks = require('./offboardingTermination.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/offboardingTermination', new OffboardingTermination(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('offboardingTermination');

  service.hooks(hooks);
};