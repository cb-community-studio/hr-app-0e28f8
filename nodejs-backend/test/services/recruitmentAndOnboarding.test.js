const assert = require('assert');
const app = require('../../src/app');

describe('\'recruitmentAndOnboarding\' service', () => {
  it('registered the service', () => {
    const service = app.service('recruitmentAndOnboarding');

    assert.ok(service, 'Registered the service (recruitmentAndOnboarding)');
  });
});
