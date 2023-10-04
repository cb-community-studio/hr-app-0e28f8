const { EmployeeRelations } = require('./employeeRelations.class');
const createModel = require('../../models/employeeRelations.model');
const hooks = require('./employeeRelations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/employeeRelations', new EmployeeRelations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employeeRelations');

  service.hooks(hooks);
};