const assert = require('assert');
const app = require('../../src/app');

describe('\'attendanceAndLeaveManagement\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendanceAndLeaveManagement');

    assert.ok(service, 'Registered the service (attendanceAndLeaveManagement)');
  });
});
