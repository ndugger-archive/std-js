export default (() => typeof global === 'undefined' ? window : global)();
