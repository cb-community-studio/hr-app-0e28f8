const assert = require('assert');
const app = require('../../src/app');

describe('\'payroll\' service', () => {
  it('registered the service', () => {
    const service = app.service('payroll');

    assert.ok(service, 'Registered the service (payroll)');
  });
});
