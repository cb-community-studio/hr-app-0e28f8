const { HrBudgetingAndCostTracking } = require('./hrBudgetingAndCostTracking.class');
const createModel = require('../../models/hrBudgetingAndCostTracking.model');
const hooks = require('./hrBudgetingAndCostTracking.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/hrBudgetingAndCostTracking', new HrBudgetingAndCostTracking(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hrBudgetingAndCostTracking');

  service.hooks(hooks);
};