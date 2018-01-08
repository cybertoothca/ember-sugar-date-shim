import Ember from 'ember';
import Sugar from 'ember-sugar-date';

export default Ember.Controller.extend({
  date: Ember.computed(function () {
    return new Date(Date.UTC(2001, 8, 11, 12, 46, 40));
  }),

  localeName: Ember.computed(function () {
    return navigator.language;
  }),

  sugarDateFull: Ember.computed('date', 'localeName', function () {
    return Sugar.Date.full(this.get('date'), this.get('localeName'));
  }),

  sugarDateFullEnCA: Ember.computed('date', function () {
    return Sugar.Date.full(this.get('date'), 'en-CA');
  })
});
