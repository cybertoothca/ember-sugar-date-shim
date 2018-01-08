import {test} from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | when index');

test('visiting /', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
    assert.equal(find('.js-test-sugar-date-full-en-ca').text(), 'Tuesday, 11 September, 2001 6:46');
  });
});
