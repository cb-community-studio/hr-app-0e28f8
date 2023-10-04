const { ComplianceAndDocuments } = require('./complianceAndDocuments.class');
const createModel = require('../../models/complianceAndDocuments.model');
const hooks = require('./complianceAndDocuments.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/complianceAndDocuments', new ComplianceAndDocuments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('complianceAndDocuments');

  service.hooks(hooks);
};