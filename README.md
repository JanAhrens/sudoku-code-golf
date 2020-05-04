# Sudoku Code Golf

This repository contains my solution to a code golf challenge.

```
f=[0,9,18,27,36,45,54,63,72]
v=a=>{for(q=[],f.map(b=>q.push(a.slice(b,b+9).split``)),h=0;h<9;h++)q.push(f.map(b=>a[b+h]));for(h=0;h<3;h++)for(k=0;k<3;k++){for(m=[],t=0;t<3;t++)f.slice(3*h,3*h+3).map(b=>m.push(a[3*k+b+t]));q.push(m)}return q.map(w=>w.filter(x=>x!="-")).filter(a=>a.filter((y,z)=>a.indexOf(y)!=z).length>0).length<1}
r=a=>{if(a.indexOf("-")<0)return a;for(var b=1;b<10;b++)if(i=a.replace("-",b),v(i)){var d=r(i);if(v(d))return d}return i}
s=b=>(e="-".repeat(81),b.length==81?(o=r(b),v(o)?o:e):e)
```

## Task description

Write a Javascript function `s` that receives a string of numbers for a 9x9 Sudoku grid that can include blanks (represented with a minus `-`) as its only argument, and returns the string with the solution. The sequence of the numbers in the string should be by row. This means the first 9 characters represent the first row, the next 9 the second row, and thus consecutively until the end.
Keep in mind:

* Ecmascript Version allowed => ES2019 (ES10)
* Should work offline mostly, no sudoku solver remote services
* Only 9x9 grids should be accepted. In case of malformed grids of invalid sizes, the output should be an empty 9x9 grid
* If a valid grid with no empty slots is passed as the argument, the output should be that grid
* If an invalid grid with no empty slots is passed as the argument, the output should be an empty 9x9 grid
* If an unsolvable grid is passed as the argument, the output should be an emtpy 9x9 grid
* No errors should obviously be thrown
Example input/output:
* Input:  '53--7----6--195----98----6-8---6---34--8-3--17---2---6-6----28----419--5----8--79'
* Output: '534678912672195348198342567859761423426853791713924856961537284287419635345286179'

Happy Sudoku solving!
