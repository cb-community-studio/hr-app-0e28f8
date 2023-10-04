const { JobPosting } = require('./jobPosting.class');
const createModel = require('../../models/jobPosting.model');
const hooks = require('./jobPosting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/jobPosting', new JobPosting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('jobPosting');

  service.hooks(hooks);
};