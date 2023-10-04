const assert = require('assert');
const app = require('../../src/app');

describe('\'applicant\' service', () => {
  it('registered the service', () => {
    const service = app.service('applicant');

    assert.ok(service, 'Registered the service (applicant)');
  });
});
