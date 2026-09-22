"""Independent symbolic check of the curated calculations (requires SymPy).
Run check-practice.mjs first to export the actual bank used by the browser.
"""
import json
from pathlib import Path
import sympy as s

bank={t['id']:t for t in json.loads(Path('tmp/practice-bank.json').read_text(encoding='utf8'))}
checked=[]
def fields(task, values):
    actual=[s.Rational(f['answer']) for f in bank[task]['fields']]
    assert len(actual)==len(values),(task,actual,values)
    for a,b in zip(actual,values): assert s.simplify(a-b)==0,(task,a,b)
    checked.append(task)
def eq(a,b):
    if isinstance(a,s.MatrixBase): assert all(s.simplify(v)==0 for v in a-b),(a,b)
    else: assert s.simplify(a-b)==0,(a,b)
x,y,z,u,v,t,r,phi,psi=s.symbols('x y z u v t r phi psi',real=True)
half=s.Rational(1,2)

# Inverse problems: actual derivatives, preimages and inverse matrices.
polar=s.Matrix([r*s.cos(t),r*s.sin(t)]);eq(polar.jacobian([r,t]).det(),r);fields('i-polar',[2])
square=s.Matrix([x*x-y*y,2*x*y]);js=square.jacobian([x,y]);eq(js.det(),4*(x*x+y*y))
eq(sum(e*e for e in square),(x*x+y*y)**2)
eq(square.subs({x:2,y:1}),s.Matrix([3,4]));inv=js.subs({x:2,y:1}).inv();eq(inv,s.Matrix([[s.Rational(1,5),s.Rational(1,10)],[-s.Rational(1,10),s.Rational(1,5)]]));fields('i-square-inverse',[inv[0,0],inv[1,0]])
xp,yp=s.symbols('xp yp',positive=True);power=s.Matrix([xp**yp,yp**xp]);det=s.simplify(power.jacobian([xp,yp]).det());eq(det,xp**yp*yp**xp*(1-s.log(xp)*s.log(yp)));fields('i-powers',[det.subs({xp:1,yp:1})])
space=s.Matrix([r*s.sin(phi)*s.cos(psi),r*s.sin(phi)*s.sin(psi),r*s.cos(psi)]);eq(s.trigsimp(space.jacobian([r,phi,psi]).det()),r*r*s.sin(phi)*s.cos(phi)*s.cos(psi))
triangle=s.Matrix([x+y*y,y]);eq(triangle.subs({x:2,y:1}),s.Matrix([3,1]));fields('i-triangle',[triangle.jacobian([x,y]).subs({x:2,y:1}).inv()[0,1]])
exp=s.Matrix([s.exp(x)*s.cos(y),s.exp(x)*s.sin(y)]);eq(s.trigsimp(exp.jacobian([x,y]).det()),s.exp(2*x));eq(exp.subs({x:0,y:0}),exp.subs({x:0,y:2*s.pi}))
double=s.Matrix([s.exp(x)*s.cos(2*y),s.exp(x)*s.sin(2*y)]);eq(s.trigsimp(double.jacobian([x,y]).det()),2*s.exp(2*x));point={x:s.log(2),y:s.pi/4};eq(double.subs(point),s.Matrix([0,2]));inv=double.jacobian([x,y]).subs(point).inv();fields('i-double',[inv[0,1],inv[1,0]])

# Implicit problems: check zero, invertible dependent block, dimensions and A Dg+B.
def implicit(task,F,dependent,free,point,expected,field_values):
    eq(F.subs(point),s.zeros(len(F),1))
    A=F.jacobian(dependent).subs(point);B=F.jacobian(free).subs(point)
    assert A.det()!=0
    D=-A.inv()*B;eq(D,s.Matrix(expected));eq(A*D+B,s.zeros(*B.shape))
    fields(task,field_values(D))
F=x-3*y+s.exp(x*y*y)+2
implicit('p-exp',s.Matrix([F]),[y],[x],{x:0,y:1},[[s.Rational(2,3)]],lambda D:[D[0]])
ellipse=x*x+x*y+y*y-7;eq(ellipse.subs({x:1,y:2}),0);gx=-s.diff(ellipse,x)/s.diff(ellipse,y);hy=-s.diff(ellipse,y)/s.diff(ellipse,x);fields('p-ellipse',[gx.subs({x:1,y:2}),hy.subs({x:1,y:2})])
implicit('p-circle',s.Matrix([x*x+y*y-1]),[x],[y],{x:1,y:0},[[0]],lambda D:[D[0]])
implicit('p-system',s.Matrix([u*u+v+t-2,u+2*v+t*t-3]),[u,v],[t],{u:1,v:1,t:0},[[-s.Rational(2,3)],[s.Rational(1,3)]],lambda D:list(D))
f=-1+(x-2)-3*(y+1)
implicit('p-sheet',s.Matrix([f+u*u,u*x+3*y**3+u**3]),[x,u],[y],{x:2,y:-1,u:1},[[11],[-4]],lambda D:list(D))
exam=s.Matrix([-s.exp(x)+2*u+s.cos(y)+4,s.pi*x*x+5*u**3+s.sin(y)+5]);eq((exam[0]-4).subs({x:0,u:-1,y:s.pi}),-4)
implicit('p-exam',exam,[x,u],[y],{x:0,u:-1,y:s.pi},[[s.Rational(2,15)],[s.Rational(1,15)]],lambda D:list(D))
a,b=s.symbols('a b',real=True)
implicit('p-multifree',s.Matrix([u*u+v+a-2,u+2*v+b-3]),[u,v],[a,b],{u:1,v:1,a:0,b:0},[[-s.Rational(2,3),s.Rational(1,3)],[s.Rational(1,3),-s.Rational(2,3)]],lambda D:list(D))
implicit('p-multifree-shift',s.Matrix([u+v*v-a,u*u+v-b]),[u,v],[a,b],{u:1,v:1,a:2,b:2},[[-s.Rational(1,3),s.Rational(2,3)],[s.Rational(2,3),-s.Rational(1,3)]],lambda D:[D[0,0],D[0,1]])

# Independent one-parameter Taylor expansion verifies every displayed polynomial.
eps=s.symbols('eps');h1,h2,h3=s.symbols('h1 h2 h3');
def taylor(task,f,variables,point,order,expected,get_fields):
    hs=[h1,h2,h3][:len(variables)]
    sub={var:origin+eps*h for var,origin,h in zip(variables,point,hs)}
    calculated=s.expand(s.series(f.subs(sub,simultaneous=True),eps,0,order+1).removeO().subs(eps,1))
    eq(calculated,s.expand(expected))
    at=dict(zip(variables,point));grad=s.Matrix([s.diff(f,var).subs(at) for var in variables]);H=s.hessian(f,variables).subs(at)
    fields(task,get_fields(calculated,grad,H))
taylor('t-logexp',s.log(1+x+y*y)+s.exp(x*y),[x,y],[0,0],2,1+h1-h1*h1/2+h1*h2+h2*h2,lambda P,g,H:[P.coeff(h1,2),P.coeff(h1,1).coeff(h2,1),H[1,1]])
taylor('t-product',s.exp(y*z)*(s.cos(x)+s.sin(z)),[x,y,z],[0,0,0],2,1+h3-h1*h1/2+h2*h3,lambda P,g,H:[P.coeff(h2,1).coeff(h3,1),P.coeff(h3,2)])
taylor('t-log-shift',s.log(1+x+y),[x,y],[0,1],3,s.log(2)+(h1+h2)/2-(h1+h2)**2/8+(h1+h2)**3/24,lambda P,g,H:[P.coeff(h1,3)])
taylor('t-shift',s.log(1+x+y*y)+s.exp((x-1)*y),[x,y],[1,0],2,1+s.log(2)+h1/2-h1*h1/8+h1*h2+h2*h2/2,lambda P,g,H:[H[0,0],H[0,1],H[1,1]])
taylor('t-exp-shift',s.exp(x+y)+x*y,[x,y],[1,-1],2,2*h2+h1*h1/2+2*h1*h2+h2*h2/2,lambda P,g,H:[g[0],g[1],H[0,1]])
taylor('t-fraction',(s.exp(x+y)-1)/(1-z)+s.sin(x*z)+y*y*s.exp(z),[x,y,z],[0,0,0],2,h1+h2+h1*h1/2+h1*h2+3*h2*h2/2+2*h1*h3+h2*h3,lambda P,g,H:[H[2,2],H[0,2],H[1,1]])
taylor('t-read',3+2*x-y+4*x*x-3*x*y+5*y*y+x**3,[x,y],[0,0],2,3+2*h1-h2+4*h1*h1-3*h1*h2+5*h2*h2,lambda P,g,H:[H[0,0],H[0,1],H[1,1]])
taylor('t-read-shift',s.exp((x-1)**2+2*(y-2))+(x-1)*(y-2),[x,y],[1,2],2,1+2*h2+h1*h1+h1*h2+2*h2*h2,lambda P,g,H:[H[0,0],H[0,1],H[1,1]])
assert set(checked)=={task for task,t in bank.items() if t['fields']}
print(json.dumps({'symbolicMath':'passed','numericFieldTasks':len(checked),'taylorPolynomials':8,'implicitSystems':8,'inverseJacobians':8,'compactness':'logical arguments reviewed separately in PRACTICE_TRAINING.md'}))
