const { TrainingAndDevelopment } = require('./trainingAndDevelopment.class');
const createModel = require('../../models/trainingAndDevelopment.model');
const hooks = require('./trainingAndDevelopment.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/trainingAndDevelopment', new TrainingAndDevelopment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('trainingAndDevelopment');

  service.hooks(hooks);
};