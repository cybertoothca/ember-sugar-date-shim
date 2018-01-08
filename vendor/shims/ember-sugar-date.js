(function () {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Sugar'],
      __esModule: true,
    };
  }

  define('ember-sugar-date', [], vendorModule);
})();
