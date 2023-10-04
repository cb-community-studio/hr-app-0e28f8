const assert = require('assert');
const app = require('../../src/app');

describe('\'offboardingTermination\' service', () => {
  it('registered the service', () => {
    const service = app.service('offboardingTermination');

    assert.ok(service, 'Registered the service (offboardingTermination)');
  });
});
