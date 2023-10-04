const assert = require('assert');
const app = require('../../src/app');

describe('\'hrBudgetingAndCostTracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('hrBudgetingAndCostTracking');

    assert.ok(service, 'Registered the service (hrBudgetingAndCostTracking)');
  });
});
