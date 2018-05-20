# JavaScript Standard Library: std
**Opinionated** standard library for JavaScript to enable importing global objects.

Tired of global variables? Not sure where that object came from? Stop referencing globals, and import their references instead!

## How To Install
I am no longer hosting packages on npm; you may install directly from github, though!
```
npm install ndugger/std-js --save
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
import WebAssembly from 'std/WebAssembly';

WebAssembly.compile(...);
```

```javascript
import Buffer from 'std/node/Buffer';

Buffer.from(...);
```

```javascript
import process from 'std/node/process';

process.stdout.write(...);
```

```javascript
import window from 'std/dom/window';

window.onload = event => { ... };
```

## Modules
Below you can find a list of all the available imports from `std`. 
Keep in mind that imports should be case-sensitive, relative to whether or not 
the default export is a `class`, or an `object`, `instance`, `variable`, etc.

- `import Array from 'std/Array';`
- `import Boolean from 'std/Boolean';`
- `import Date from 'std/Date';`
- `import Error from 'std/Error';`
- `import Function from 'std/Function';`
- `import JSON from 'std/JSON';`
- `import Map from 'std/Map';`
- `import Math from 'std/Math';`
- `import NaN from 'std/NaN';`
- `import Number from 'std/Number';`
- `import Object from 'std/Object';`
- `import Promise from 'std/Promise';`
- `import Proxy from 'std/Proxy';`
- `import Reflect from 'std/Reflect';`
- `import RegExp from 'std/RegExp';`
- `import Set from 'std/Set';`
- `import String from 'std/String';`
- `import Symbol from 'std/Symbol';`
- `import URL from 'std/URL';`
- `import WeakMap from 'std/WeakMap';`
- `import WeakSet from 'std/WeakSet';`
- `import WebAssembly from 'std/WebAssembly';`
- `import console from 'std/console';`
- `import setTimeout from 'std/setTimeout';`

### dom
- `import CustomEvent from 'std/dom/CustomEvent';`
- `import DocumentFragment from 'std/dom/DocumentFragment';`
- `import Event from 'std/dom/Event';`
- `import HTMLElement from 'std/dom/HTMLElement';`
- `import ServiceWorker from 'std/dom/ServiceWorker';`
- `import SharedWorker from 'std/dom/SharedWorker';`
- `import Worker from 'std/dom/Worker';`
- `import document from 'std/dom/document';`
- `import requestAnimationFrame from 'std/dom/requestAnimationFrame';`
- `import window from 'std/dom/window';`

### node
- `import Buffer from 'std/node/Buffer';`
- `import Console from 'std/node/Console';`
- `import process from 'std/node/process';`
