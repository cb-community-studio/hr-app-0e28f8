const assert = require('assert');
const app = require('../../src/app');

describe('\'timeTracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('timeTracking');

    assert.ok(service, 'Registered the service (timeTracking)');
  });
});
