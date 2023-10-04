const assert = require('assert');
const app = require('../../src/app');

describe('\'performanceReview\' service', () => {
  it('registered the service', () => {
    const service = app.service('performanceReview');

    assert.ok(service, 'Registered the service (performanceReview)');
  });
});
