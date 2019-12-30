# CHANGELOG

## 1.0.0 - 2019-12-30
- UintBuffer class is no longer a default export. Used it like this:
```javascript
const UintBuffer = require('uint-buffer').UintBuffer;
```
- New package structure:
	* dist file is "./dist/uint-buffer.js", a UMD served as "main"
	* ES6 source is "./index.js", served as "module"

## 0.1.0 - 2018-07-30
- min and max as protected properties
- overflow and unpackUnsafe as protected methods
