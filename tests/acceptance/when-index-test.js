import {test} from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Sugar from 'ember-sugar-date';

moduleForAcceptance('Acceptance | when index');

test('visiting /', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
    assert.equal(find('.js-test-sugar-date-full-en-ca').text(),
      Sugar.Date.full(new Date(Date.UTC(2001, 8, 11, 12, 46, 40)), 'en-CA'));
  });
});
