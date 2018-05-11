# JavaScript Standard Library: std
**Opinionated** standard library for JavaScript to enable importing global objects.

Tired of global variables? Not sure where that object came from? Stop referencing globals, and import their references instead!

## How To Install
I am no longer hosting packages on npm; you may install directly from github, though!
```
npm install ndugger/std --save
```

## Examples
```javascript
import console from 'std/console';

console.log(...);
```

```javascript
import Object from 'std/Object';

Object.assign(...);
```

```javascript
import Array from 'std/Array';

new Array(...);
```

```javascript
import WebAssembly from 'std/WebAssembly';

WebAssembly.compile(...);
```

```javascript
import Worker from 'std/dom/Worker';

new Worker(...);
```

```javascript
import window from 'std/dom/window';

window.onload = event => { ... };
```

```javascript
import Buffer from 'std/node/Buffer';

Buffer.from(...);
```

```javascript
import process from 'std/node/process';

process.stdout.write(...);
```
