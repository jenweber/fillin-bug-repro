import { module, test } from 'qunit';
import { visit, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | inputs', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    await fillIn('#enabled-input', 'text in an enabled input')
    await fillIn('#disabled-input', 'text in a disabled input')

    await assert.dom('#enabled-input').hasValue('text in an enabled input')
    assert.dom('#disabled-input').hasValue('text in a disabled input') // this should fail, but it passes
  });
});
