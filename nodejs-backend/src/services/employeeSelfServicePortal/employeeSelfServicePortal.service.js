const { EmployeeSelfServicePortal } = require('./employeeSelfServicePortal.class');
const createModel = require('../../models/employeeSelfServicePortal.model');
const hooks = require('./employeeSelfServicePortal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/employeeSelfServicePortal', new EmployeeSelfServicePortal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employeeSelfServicePortal');

  service.hooks(hooks);
};