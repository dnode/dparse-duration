[![Dependency Status](https://david-dm.org/dnode/dparse-duration/status.svg)](https://david-dm.org/dnode/dparse-duration)
[![devDependency Status](https://david-dm.org/dnode/dparse-duration/dev-status.svg)](https://david-dm.org/dnode/dparse-duration?type=dev)

# Installation

`npm i --save dparse-duration`


# Initialisation

```javascript
const parse = require('dparse-duration');
```


# Examples

## 1 hour into milliseconds

```javascript
parse('1h');
```

## 1 hour into seconds

```javascript
parse('1h', 's');
```
