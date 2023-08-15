import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mtf', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mtf');
    assert.ok(route);
  });
});
