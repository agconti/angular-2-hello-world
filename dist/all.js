System.register(['angular2/angular2'], function (_export) {
  'use strict';

  var Component, View, bootstrap, HelloWorld;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      bootstrap = _angular2Angular2.bootstrap;
    }],
    execute: function () {
      HelloWorld = (function () {
        function HelloWorld() {
          _classCallCheck(this, _HelloWorld);
        }

        var _HelloWorld = HelloWorld;
        HelloWorld = View({
          template: '<h1>Hello World!</h1>'
        })(HelloWorld) || HelloWorld;
        HelloWorld = Component({
          selector: 'helloworld'
        })(HelloWorld) || HelloWorld;
        return HelloWorld;
      })();

      bootstrap(HelloWorld);
    }
  };
});
//# sourceMappingURL=all.js.map