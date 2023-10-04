const assert = require('assert');
const app = require('../../src/app');

describe('\'workforceDiversityAndInclusi\' service', () => {
  it('registered the service', () => {
    const service = app.service('workforceDiversityAndInclusi');

    assert.ok(service, 'Registered the service (workforceDiversityAndInclusi)');
  });
});
