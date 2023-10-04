const assert = require('assert');
const app = require('../../src/app');

describe('\'successionPlanning\' service', () => {
  it('registered the service', () => {
    const service = app.service('successionPlanning');

    assert.ok(service, 'Registered the service (successionPlanning)');
  });
});
