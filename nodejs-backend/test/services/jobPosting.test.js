const assert = require('assert');
const app = require('../../src/app');

describe('\'jobPosting\' service', () => {
  it('registered the service', () => {
    const service = app.service('jobPosting');

    assert.ok(service, 'Registered the service (jobPosting)');
  });
});
