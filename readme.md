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

## Modules
Below you can find a list of all the available imports from `std`. 
Keep in mind that imports should be case-sensitive, relative to whether or not 
the default export is a `class`, or an `object`, `instance`, `variable`, etc.

### std
- `import Array from 'std/Array';`
- `import Boolean from 'std/Boolean';`
- `import console from 'std/console';`

### dom
- `import window from 'std/dom/window';`
- `import Worker from 'std/dom/Worker';`

## node
- `import Buffer from 'std/node/Buffer';`
- `import process from 'std/node/process';`
