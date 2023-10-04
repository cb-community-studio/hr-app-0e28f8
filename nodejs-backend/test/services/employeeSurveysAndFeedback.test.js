const assert = require('assert');
const app = require('../../src/app');

describe('\'employeeSurveysAndFeedback\' service', () => {
  it('registered the service', () => {
    const service = app.service('employeeSurveysAndFeedback');

    assert.ok(service, 'Registered the service (employeeSurveysAndFeedback)');
  });
});
