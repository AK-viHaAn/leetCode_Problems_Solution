/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     if (s.length !== t.length) return false;

  const mapa = new Map();       // e:1,a:1 g;1,d;1
  const mapb = new Map();       // a;1,e;1 d;1,g;1 

  for (let i = 0; i < s.length; i++) {   //s = "egg", t = "add"
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      mapa.set(s[i], t[i])
    }

    if (mapb.has(t[i])) {
      if (mapb.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      mapb.set(t[i], s[i])
    }
  }

  return true
    
};