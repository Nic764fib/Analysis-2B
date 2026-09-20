import assert from 'node:assert/strict';

const near=(a,b,tolerance=2e-6)=>assert(Math.abs(a-b)<tolerance,`${a} != ${b}`);
function hessian(f,point){
 const step=1e-4,n=point.length,at=(i,di,j=i,dj=0)=>{const x=[...point];x[i]+=di;x[j]+=dj;return f(x);};
 return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j
  ?(at(i,step)-2*f(point)+at(i,-step))/(step*step)
  :(at(i,step,j,step)-at(i,step,j,-step)-at(i,-step,j,step)+at(i,-step,j,-step))/(4*step*step)));
}
const f=([x,y])=>Math.log(1+x+y*y)+Math.exp((x-1)*y);
const g=([x,y,z])=>Math.exp(x+y)/(1-z)-1+Math.sin(x*z);
for(const [fun,point,expected] of [[f,[1,0],[[-.25,1],[1,1]]],[g,[0,0,0],[[1,1,2],[1,1,1],[2,1,2]]]]){
 hessian(fun,point).forEach((row,i)=>row.forEach((v,j)=>near(v,expected[i][j])));
}
const Ax=[[2,3],[-6,1]],Ay=[[1,-4,0],[2,0,-1]],Dg=[[1/4,1/5,-3/20],[-1/2,6/5,1/10]];
for(let i=0;i<2;i++)for(let j=0;j<3;j++)near(Ax[i][0]*Dg[0][j]+Ax[i][1]*Dg[1][j]+Ay[i][j],0,1e-12);
for(const n of [1,2,3,5]){
 const point=Array.from({length:n},(_,i)=>(i+1)/5),r=point.reduce((s,x)=>s+x*x,0);
 const H=hessian(v=>Math.log(1+v.reduce((s,x)=>s+x*x,0)),point);
 near(H.reduce((s,row,i)=>s+row[i],0),(2*n+(2*n-4)*r)/(1+r)**2);
}
console.log(JSON.stringify({newTaylorHessians:'numerically verified',implicitMatrix:'verified',radialLaplacian:'numerically verified'}));
