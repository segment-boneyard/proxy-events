# proxy-events

  Proxy events from one emitter to another.

## Installation

```
$ npm install proxy-events
$ component install segmentio/proxy-events
```

## Example

```js
var Emitter = require('events').EventEmitter;
var proxy = require('proxy-events');

var app = new Emitter;
var subapp = new Emitter;

proxy(subapp, app);

app.on('foo', console.log);

subapp.emit('foo', 'bar'); 
// "bar"
```

## API

### proxy(one, another, [prefix])

  Proxy events from `one` emitter to `another` with an optional `prefix`.

# License

  MIT
