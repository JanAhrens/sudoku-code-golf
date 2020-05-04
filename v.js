// j = JSON.stringify
j = JSON.stringify;
// f = fields
f = [0, 9, 18, 27, 36, 45, 54, 63, 72];
// v = validate
// p = parameter (function parameter)
module.exports = p => {
  // q = qiver
  q = [];
  // -- calculate rows
  // d = delete soon (local scoped variable)
  f.map(d => q.push(p.slice(d, d + 9).split``));

  // -- calculate columns
  // h = higher (counter variable)
  for (h = 0; h < 9; h++) q.push(f.map(d => p[d + h]));

  // -- calculate blocks
  for (h = 0; h < 3; h++) {
    // k = kounter (counter variable), // m = module (block)
    for (k = 0; m=[], k < 3; k++) {
      // t = talley (counter variable)
      for (t = 0; t < 3; t++)
        f.slice(3 * h, 3 * h + 3).map(d => m.push(p[k * 3 + d + t]));
      q.push(m);
    }
  }
  return q.map(w=>w.filter(x=>x!='-')).filter(a => a.filter((y,z)=>a.indexOf(y)!=z).length>0).length<1;
};
