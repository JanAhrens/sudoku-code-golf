// a = another variable (function parameter)
// b = block
// c = candidate
// d = delete soon (local scoped variable)
// e = empty
// f = fields
// g = good
// h = higher (counter variable)
// i = iteration
// j = JSON.stringify
// k = kounter (counter variable)
// l = label (function parameter)
// m = module (block)
// n = next itegration
// o = output
// p = parameter (function parameter)
// q = qiver
// r = recurse
// s = solve
// t = talley (counter variable)
// u = u're short
// v = validate
// w = w
// x = x
// y = y
// z = z

// v = validate
v = require("./v.js");
// f = fields
f = [0, 9, 18, 27, 36, 45, 54, 63, 72];
// r = recurse
// l = label (function parameter)
r = l => {
  if (l.indexOf("-") < 0) return l;
  // c = candidate
  for(var c=1;c<10;c++) {
    // i = iteration
    i = l.replace("-", c);
    if (v(i)) {
      //console.log(i);
      // n = next itegration
      var n = r(i);
      if (v(n)) return n;
    }
  }
  return i;
};
// s = solve
module.exports = a => {
  // e = empty
  var e = '-'.repeat(81);
  return a.length==81?(o=r(a),v(o)?o:e):e;
}