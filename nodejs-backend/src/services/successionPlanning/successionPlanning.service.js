const { SuccessionPlanning } = require('./successionPlanning.class');
const createModel = require('../../models/successionPlanning.model');
const hooks = require('./successionPlanning.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/successionPlanning', new SuccessionPlanning(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('successionPlanning');

  service.hooks(hooks);
};