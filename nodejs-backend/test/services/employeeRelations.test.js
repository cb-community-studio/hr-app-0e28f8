const assert = require('assert');
const app = require('../../src/app');

describe('\'employeeRelations\' service', () => {
  it('registered the service', () => {
    const service = app.service('employeeRelations');

    assert.ok(service, 'Registered the service (employeeRelations)');
  });
});
