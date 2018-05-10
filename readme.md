# JavaScript Standard Library: std
Opinionated standard library for JavaScript to enable importing global objects

Tired of global variables? Not sure where that object came from? Stop referencing globals, and import their references instead!

## How To Install
I am no longer hosting packages on npm; you may install directly from github, though!
```
npm install ndugger/std --save
```

## Examples
```javascript
import Object from 'std/object';

Object.assign(...);
```

```javascript
import WebAssembly from 'std/web-assembly';

WebAssembly.compile(...);
```

```javascript
import Worker from 'std/dom/worker';

new Worker(...);
```

```javascript
import Buffer from 'std/node/buffer';

Buffer.from(...);
```
