const { AttendanceAndLeaveManagement } = require('./attendanceAndLeaveManagement.class');
const createModel = require('../../models/attendanceAndLeaveManagement.model');
const hooks = require('./attendanceAndLeaveManagement.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/attendanceAndLeaveManagement', new AttendanceAndLeaveManagement(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendanceAndLeaveManagement');

  service.hooks(hooks);
};