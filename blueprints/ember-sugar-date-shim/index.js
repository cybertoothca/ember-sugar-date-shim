/* eslint-env node */

module.exports = {
  afterInstall: function (/*options*/) {
    return this.addPackagesToProject([{name: 'sugar-date'}]);
  },

  description: 'An Ember shim for the `sugar-date` module.',

  name: 'ember-sugar-date-shim',

  normalizeEntityName: function () {
  }
};
