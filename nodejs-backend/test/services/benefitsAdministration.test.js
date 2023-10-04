const assert = require('assert');
const app = require('../../src/app');

describe('\'benefitsAdministration\' service', () => {
  it('registered the service', () => {
    const service = app.service('benefitsAdministration');

    assert.ok(service, 'Registered the service (benefitsAdministration)');
  });
});
