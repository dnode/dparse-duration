const parse = require('parse-duration');

let ms, s, m, h, d, w;
const dividers = {
  ms: ms = 1,
  s: s = ms * 1000,
  m: m = s * 60,
  h: h = m * 60,
  d: d = h * 24,
  w: w = d * 7,
};

module.exports = (str, format = 'ms') => parse(str) / dividers[format];
