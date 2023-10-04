const { TimeTracking } = require('./timeTracking.class');
const createModel = require('../../models/timeTracking.model');
const hooks = require('./timeTracking.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/timeTracking', new TimeTracking(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('timeTracking');

  service.hooks(hooks);
};