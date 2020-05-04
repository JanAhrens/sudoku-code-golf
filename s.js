f=[0,9,18,27,36,45,54,63,72]
v=a=>{for(q=[],f.map(b=>q.push(a.slice(b,b+9).split``)),h=0;h<9;h++)q.push(f.map(b=>a[b+h]));for(h=0;h<3;h++)for(k=0;k<3;k++){for(m=[],t=0;t<3;t++)f.slice(3*h,3*h+3).map(b=>m.push(a[3*k+b+t]));q.push(m)}return q.map(w=>w.filter(x=>x!="-")).filter(a=>a.filter((y,z)=>a.indexOf(y)!=z).length>0).length<1}
r=a=>{if(a.indexOf("-")<0)return a;for(var b=1;b<10;b++)if(i=a.replace("-",b),v(i)){var d=r(i);if(v(d))return d}return i}
s=b=>(e="-".repeat(81),b.length==81?(o=r(b),v(o)?o:e):e)
