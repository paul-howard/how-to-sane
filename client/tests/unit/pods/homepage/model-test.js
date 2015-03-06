import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('homepage', 'Homepage', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:template',
    'model:service'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});
