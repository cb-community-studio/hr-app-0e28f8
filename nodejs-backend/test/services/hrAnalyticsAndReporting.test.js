const assert = require('assert');
const app = require('../../src/app');

describe('\'hrAnalyticsAndReporting\' service', () => {
  it('registered the service', () => {
    const service = app.service('hrAnalyticsAndReporting');

    assert.ok(service, 'Registered the service (hrAnalyticsAndReporting)');
  });
});
