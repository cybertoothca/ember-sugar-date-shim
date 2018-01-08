/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sugar-date-shim',
  options: {
    nodeAssets: {
      'sugar-date': {
        vendor: {
          srcDir: 'dist',
          destDir: 'ember-sugar-date-shim',
          include: ['sugar-date.js', 'locales/*.js']
        }
      }
    }
  },
  included(app) {
    this._super.included(...arguments);
    app.import('vendor/ember-sugar-date-shim/sugar-date.js');
    app.import('vendor/ember-sugar-date-shim/locales/ca.js');
    app.import('vendor/ember-sugar-date-shim/locales/da.js');
    app.import('vendor/ember-sugar-date-shim/locales/de.js');
    app.import('vendor/ember-sugar-date-shim/locales/es.js');
    app.import('vendor/ember-sugar-date-shim/locales/fi.js');
    app.import('vendor/ember-sugar-date-shim/locales/fr.js');
    app.import('vendor/ember-sugar-date-shim/locales/it.js');
    app.import('vendor/ember-sugar-date-shim/locales/ja.js');
    app.import('vendor/ember-sugar-date-shim/locales/ko.js');
    app.import('vendor/ember-sugar-date-shim/locales/nl.js');
    app.import('vendor/ember-sugar-date-shim/locales/no.js');
    app.import('vendor/ember-sugar-date-shim/locales/pl.js');
    app.import('vendor/ember-sugar-date-shim/locales/pt.js');
    app.import('vendor/ember-sugar-date-shim/locales/ru.js');
    app.import('vendor/ember-sugar-date-shim/locales/sv.js');
    app.import('vendor/ember-sugar-date-shim/locales/zh-CN.js');
    app.import('vendor/ember-sugar-date-shim/locales/zh-TW.js');
    app.import('vendor/shims/ember-sugar-date.js');
  }
};
