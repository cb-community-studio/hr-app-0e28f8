const assert = require('assert');
const app = require('../../src/app');

describe('\'benefitsOpenEnrollment\' service', () => {
  it('registered the service', () => {
    const service = app.service('benefitsOpenEnrollment');

    assert.ok(service, 'Registered the service (benefitsOpenEnrollment)');
  });
});
