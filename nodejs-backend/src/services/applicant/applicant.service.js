const { Applicant } = require('./applicant.class');
const createModel = require('../../models/applicant.model');
const hooks = require('./applicant.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/applicant', new Applicant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('applicant');

  service.hooks(hooks);
};