const { BenefitsOpenEnrollment } = require('./benefitsOpenEnrollment.class');
const createModel = require('../../models/benefitsOpenEnrollment.model');
const hooks = require('./benefitsOpenEnrollment.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/benefitsOpenEnrollment', new BenefitsOpenEnrollment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('benefitsOpenEnrollment');

  service.hooks(hooks);
};