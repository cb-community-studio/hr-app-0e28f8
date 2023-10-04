const assert = require('assert');
const app = require('../../src/app');

describe('\'employeeSelfServicePortal\' service', () => {
  it('registered the service', () => {
    const service = app.service('employeeSelfServicePortal');

    assert.ok(service, 'Registered the service (employeeSelfServicePortal)');
  });
});
