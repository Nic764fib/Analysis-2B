import assert from 'node:assert/strict';
import {modules} from '../dist/content.js';
import {experimentsFor} from '../dist/lab-content.js';
import {labModels,coverModel,differentialModel,inverseModel,implicitModel,schwarzModel,taylorModel,gradientStepModel,iterationModel,uniformModel,intervalModel,limitModel} from '../dist/lab-models.js';
import katex from '../dist/vendor/katex/katex.mjs';
const near=(a,b,tol=1e-8)=>assert(Math.abs(a-b)<=tol*Math.max(1,Math.abs(b)),`${a} != ${b}`);
const strings=o=>typeof o==='string'?[o]:o&&typeof o==='object'?Object.values(o).flatMap(strings):[];
let cases=0,formulas=0;
function mathCheck(o){for(const s of strings(o))for(const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)){katex.renderToString(m[1]??m[2],{throwOnError:true,strict:'ignore'});formulas++;}}
for(const module of modules){
 const labs=experimentsFor(module.visual);assert.equal(labs.length,2);mathCheck(labs);
 for(const lab of labs){
  assert(module.theory.some(t=>t.id===lab.theory),lab.theory);
  assert(module.exercises.some(e=>e.id===lab.exercise),lab.exercise);
  assert(lab.quiz.correct>=0&&lab.quiz.correct<lab.quiz.answers.length);assert(lab.presets.length>=3);
  if(lab.legacy)continue;
  const defaults=Object.fromEntries(lab.controls.map(c=>[c.key,c.value]));
  const variants=lab.controls.reduce((rows,c)=>rows.flatMap(row=>(c.options?c.options.map(o=>o[0]):[c.min,c.value,c.max]).map(v=>({...row,[c.key]:v}))),[{}]);
  variants.push(...lab.presets.map(s=>({...defaults,...s.values})));
  for(const values of variants){
   const result=labModels[lab.id](values);cases++;mathCheck(result);
   assert(result.text&&result.explanation&&result.figures.length);
   for(const f of result.figures){assert(f.svg.startsWith('<svg'));assert(!/NaN|Infinity|undefined/.test(f.svg),`${lab.id} ${JSON.stringify(values)}`);}
  }
 }
}
assert.equal(coverModel({mode:'with-zero',epsilon:.2,n:4}).covered,false);
assert.equal(coverModel({mode:'with-zero',epsilon:.2,n:5}).covered,true);
for(const n of [1,5,30,1000]){const r=coverModel({mode:'without-zero',epsilon:.2,n});assert(!r.covered);assert(r.witness<1/(n+1));}
near(differentialModel({mode:'smooth',angle:33,radius:.03}).ratio,.03);
near(differentialModel({mode:'counter',angle:0,radius:.03}).ratio,0);
near(differentialModel({mode:'counter',angle:45,radius:.03}).ratio,1/(2*.03));
assert(inverseModel({a:.3,radius:.8}).fold);assert(!inverseModel({a:.7,radius:.3}).fold);near(inverseModel({a:0,radius:.3}).det,0);
for(let angle=0;angle<=360;angle+=15)for(let free=0;free<3;free++){
 const r=implicitModel({angle,free}),[i,j]=r.dep,v=r.point;
 near(v.reduce((s,x)=>s+x*x,0),1);near(v.reduce((s,x)=>s+x,0),1);
 if(r.derivatives){const [u,w]=r.derivatives;near(2*v[i]*u+2*v[j]*w+2*v[free],0);near(u+w+1,0);}
}
assert.equal(implicitModel({angle:30,free:0}).derivatives,null);assert(implicitModel({angle:30,free:1}).derivatives);
near(schwarzModel({mode:'counter',h:5,k:1}).value,-1,3e-8);
near(schwarzModel({mode:'counter',h:1,k:5}).value,1,3e-8);
near(schwarzModel({mode:'counter',h:3,k:3}).value,0);
near(schwarzModel({mode:'smooth',h:3,k:3}).value,1.002);
const ordinary=taylorModel({angle:35,radius:.02,degree:2});assert(ordinary.ratio>7.5&&ordinary.ratio<8.5);
const special=taylorModel({angle:90,radius:.02,degree:2});near(special.error,Math.abs(Math.log1p(.02**2)-.02**2));assert(special.ratio>15&&special.ratio<17);
assert(gradientStepModel({angle:243,h:.25}).change<0);assert(gradientStepModel({angle:243,h:3}).change>0);
for(const q of [-1.2,-1,-.95,-.8,0,.8,.95,1,1.2])for(const x0 of [-2,0,2]){
 const r=iterationModel({q,x0,n:20});
 if(r.target!==null)near(r.xs.at(-1),r.target+(x0-r.target)*q**20);else near(r.xs.at(-1),x0+20);
 if(r.contract)assert(r.error<=r.bound+1e-10);
}
for(const x of [0,.5,1]){const r=uniformModel({x,epsilon:.3,factor:.5});assert(r.gap<.3);near(r.delta,.09);}
for(const a of [.5,.8,.9,.99])for(const epsilon of [.05,.1,.25,.5]){const r=intervalModel({a,n:10,epsilon});assert(a**r.N<epsilon);assert(a**(r.N-1)>=epsilon-1e-12);}
assert.equal(intervalModel({a:1,n:100,epsilon:.1}).N,null);
near(limitModel({n:20,power:1}).derivativeError,1);near(limitModel({n:20,power:2}).derivativeError,.05);
console.log(JSON.stringify({interactiveExperiments:24,experimentCases:cases,experimentFormulas:formulas,mathematicalBoundaryChecks:'passed'}));
