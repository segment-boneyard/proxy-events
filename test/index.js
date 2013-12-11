
try {
  var Emitter = require('events').EventEmitter;
  var proxy = require('..');
  var assert = require('assert');
} catch (e) {
  var Emitter = require('emitter');
  var proxy = require('proxy-events');
  var assert = require('assert');
}

describe('proxy-events', function () {
  it('should proxy events', function (done) {
    var a = new Emitter;
    var b = new Emitter;
    b.on('foo', done);
    proxy(a, b);
    a.emit('foo');
  });

  it('should take a prefix', function (done) {
    var a = new Emitter;
    var b = new Emitter;
    b.on('prefix:foo', done);
    proxy(a, b, 'prefix:');
    a.emit('foo');
  });
});