// Wochenplan-Prüfung für die Organisations-Aufgaben. Die Funktionen stammen
// unverändert aus der Übungsprüfung (check prüft einen Plan, solve findet Lösungen).
// Tage 0..4 = Mo..Fr, Stunden 8..16 (Startstunden), Mittag 12.
var DAYS=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag'];
function slotsOf(it,a){var r=[],n=Math.ceil(it.dur);
 if(it.c&&it.c.two){for(var h=13;h<=16;h++)r.push([a.d,h]);for(var h2=8;h2<=11;h2++)r.push([a.d+1,h2]);}
 else for(var i=0;i<n;i++)r.push([a.d,a.s+i]);return r}
function absStart(it,a){return it.c&&it.c.two?a.d*100+13:a.d*100+a.s}
function absEnd(it,a){return it.c&&it.c.two?(a.d+1)*100+12:a.d*100+a.s+Math.ceil(it.dur)}
function check(plan,asg){var err={},used={},res={ok:true,err:err,missing:false};
 function bad(n,m){(err[n]=err[n]||[]).push(m);res.ok=false}
 var occ={};plan.fixed.forEach(function(f){for(var h=f.s;h<f.e;h++)occ[f.d+'-'+h]=f.n});
 var byName={};plan.fixed.forEach(function(f){byName[f.n]={start:f.d*100+f.s,end:f.d*100+f.e}});
 plan.mov.forEach(function(it){var a=asg[it.n];if(!a||a.d==null||(!(it.c&&it.c.two)&&a.s==null)){bad(it.n,'noch nicht platziert');res.missing=true;return}
  if(it.c&&it.c.two&&a.d>3)bad(it.n,'Ein 2-Tage-Termin braucht den Folgetag: Er kann nicht am Freitag beginnen.');
  byName[it.n]={start:absStart(it,a),end:absEnd(it,a)}});
 plan.mov.forEach(function(it){var a=asg[it.n];if(!a||a.d==null||(!(it.c&&it.c.two)&&a.s==null))return;
  slotsOf(it,a).forEach(function(sl){var k=sl[0]+'-'+sl[1];
   if(sl[0]>4||sl[1]<8||sl[1]>16)bad(it.n,'liegt ausserhalb von 08.00–17.00 Uhr');
   else if(sl[1]===12)bad(it.n,'liegt in der Mittagspause (12.00–13.00)');
   else if(occ[k]&&occ[k]!==it.n)bad(it.n,'überschneidet sich mit «'+occ[k]+'» ('+DAYS[sl[0]].slice(0,2)+' '+(sl[1]<10?'0':'')+sl[1]+'.00)');
   occ[k]=it.n;});
  var c=it.c||{};
  if(c.day!=null&&a.d!==c.day)bad(it.n,'muss zwingend am '+DAYS[c.day]+' stattfinden');
  if(c.after!=null){if(a.d<=c.after)bad(it.n,'muss erst nach '+DAYS[c.after]+' stattfinden');
   if(c.am&&absEnd(it,a)%100>12)bad(it.n,'muss am Vormittag stattfinden (bis 12.00 Uhr)');
   if(c.pm&&a.s<13)bad(it.n,'muss am Nachmittag stattfinden (ab 13.00 Uhr)');}
  if(c.before){var t=byName[c.before];if(t&&absEnd(it,a)>t.start)bad(it.n,'muss vor «'+c.before+'» zu Ende sein')}
 });
 return res}
function solve(plan,limit){var sols=[],cnt=0;var mov=plan.mov;
 function opts(it){var o=[];if(it.c&&it.c.two){for(var d=0;d<=3;d++)o.push({d:d,s:13});}else for(var d2=0;d2<=4;d2++)for(var s=8;s<=16;s++)o.push({d:d2,s:s});return o}
 function rec(i,asg){if(cnt>=(limit||200))return;if(i===mov.length){var r=check(plan,asg);if(r.ok){cnt++;if(sols.length<3)sols.push(JSON.parse(JSON.stringify(asg)));}return}
  var it=mov[i];opts(it).forEach(function(o){asg[it.n]=o;var r=check(partial(plan,i+1),asg);if(!r.err[it.n]||!r.err[it.n].length)rec(i+1,asg);delete asg[it.n]})}
 function partial(p,k){return {fixed:p.fixed,mov:p.mov.slice(0,k).concat([])}}
 // partial check ignores "before" targets that are later items (byName missing => skipped)
 rec(0,{});return {count:cnt,sols:sols}}

export { check, solve, DAYS, slotsOf };
