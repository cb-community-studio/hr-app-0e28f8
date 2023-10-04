const { WorkforceDiversityAndInclusi } = require('./workforceDiversityAndInclusi.class');
const createModel = require('../../models/workforceDiversityAndInclusi.model');
const hooks = require('./workforceDiversityAndInclusi.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/workforceDiversityAndInclusi', new WorkforceDiversityAndInclusi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('workforceDiversityAndInclusi');

  service.hooks(hooks);
};