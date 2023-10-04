const assert = require('assert');
const app = require('../../src/app');

describe('\'trainingAndDevelopment\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainingAndDevelopment');

    assert.ok(service, 'Registered the service (trainingAndDevelopment)');
  });
});
