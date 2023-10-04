const assert = require('assert');
const app = require('../../src/app');

describe('\'complianceAndDocuments\' service', () => {
  it('registered the service', () => {
    const service = app.service('complianceAndDocuments');

    assert.ok(service, 'Registered the service (complianceAndDocuments)');
  });
});
