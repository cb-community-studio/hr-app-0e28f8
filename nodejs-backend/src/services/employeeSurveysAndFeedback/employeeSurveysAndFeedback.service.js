const { EmployeeSurveysAndFeedback } = require('./employeeSurveysAndFeedback.class');
const createModel = require('../../models/employeeSurveysAndFeedback.model');
const hooks = require('./employeeSurveysAndFeedback.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/employeeSurveysAndFeedback', new EmployeeSurveysAndFeedback(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employeeSurveysAndFeedback');

  service.hooks(hooks);
};