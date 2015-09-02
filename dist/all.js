'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2 = require('angular2');

var HelloWorld = (function () {
  function HelloWorld() {
    _classCallCheck(this, _HelloWorld);
  }

  var _HelloWorld = HelloWorld;
  HelloWorld = (0, _angular2.View)({
    template: '<h1>Hello World!</h1>'
  })(HelloWorld) || HelloWorld;
  HelloWorld = (0, _angular2.Componet)({
    selector: 'helloworld'
  })(HelloWorld) || HelloWorld;
  return HelloWorld;
})();

(0, _angular2.bootstrap)(HelloWorld);
//# sourceMappingURL=all.js.map