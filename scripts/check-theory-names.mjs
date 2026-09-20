import assert from 'node:assert/strict';
import {modules} from '../dist/content.js';
import {findTheorems,originLabels,theoryNames} from '../dist/theory-names.js';
const entries=modules.flatMap(m=>m.theory.map(t=>({...t,module:m.id})));
const expected=[...Array.from({length:12},(_,i)=>`1.${i+1}`),...Array.from({length:34},(_,i)=>`2.${i+1}`)];
const covered=new Set(entries.flatMap(t=>t.scriptRefs));
assert.deepEqual([...covered].sort(),expected.sort(),'Every numbered statement in the 2026 notes must be represented.');
assert.deepEqual(Object.keys(theoryNames).sort(),entries.map(t=>t.id).sort(),'No missing or orphaned name entries.');
for(const t of entries){
 assert(t.title&&t.recognize&&originLabels[t.origin],t.id);
 if(t.origin!=='script')assert(t.scriptRefs.length===0&&!t.originalName,'Do not label helpers as original statements.');
}
const lookup=query=>findTheorems(entries,{query}).map(t=>t.id);
assert.equal(lookup('endliche Teilüberdeckung')[0],'compact-def');
assert.equal(lookup('Cantor')[0],'cantor');
assert.equal(lookup('Heine Borel')[0],'heine-borel');
assert.equal(lookup('Mean value property')[0],'rectangle-mean');
assert.equal(lookup('Mean Value Theorem')[0],'mean-scalar');
assert.equal(lookup('Inverse Function Theorem')[0],'inverse-theorem');
assert.equal(lookup('Implicit Function Theorem')[0],'implicit-theorem');
assert.equal(lookup('Taylor')[0],'taylor-theorem');
assert.deepEqual(lookup('Majorantentest'),[],'Default directory contains only Lecture Notes.');
assert.equal(findTheorems(entries,{query:'Majorantentest',scope:'all'})[0].id,'weierstrass');
assert(findTheorems(entries,{module:'hoehere-ableitungen'}).every(t=>t.module==='hoehere-ableitungen'));
console.log(JSON.stringify({numberedLectureStatements:covered.size,classifiedTheory:entries.length,nameLookup:'passed'}));
