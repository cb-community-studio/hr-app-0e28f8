const { RecruitmentAndOnboarding } = require('./recruitmentAndOnboarding.class');
const createModel = require('../../models/recruitmentAndOnboarding.model');
const hooks = require('./recruitmentAndOnboarding.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/recruitmentAndOnboarding', new RecruitmentAndOnboarding(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recruitmentAndOnboarding');

  service.hooks(hooks);
};