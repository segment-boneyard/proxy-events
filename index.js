
var wildcards = require('wildcards');

/**
 * Expose `proxyEvents`.
 */

module.exports = proxyEvents;

/**
 * Proxy events from `one` emitter to `another`, with an optional `prefix`.
 *
 * @param {Emitter} one
 * @param {Emitter} another
 * @param {String} [prefix]
 */

function proxyEvents (one, another, prefix) {
  prefix = prefix || '';
  wildcards(one, function () {
    var args = [].slice.call(arguments);
    args[0] = prefix + args[0];
    another.emit.apply(another, args);
  });
}