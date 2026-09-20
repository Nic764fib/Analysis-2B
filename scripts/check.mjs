import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import{modules,examInfo,errata}from'../dist/content.js';
import{generate,parseNumber}from'../dist/generators.js';
import katex from '../dist/vendor/katex/katex.mjs';
import {plotTypes,plotMarkup,drawPlot} from '../dist/plots.js';
const ids=new Set();let formulas=0;
function strings(obj){if(typeof obj==='string')return[obj];if(Array.isArray(obj))return obj.flatMap(strings);if(obj&&typeof obj==='object')return Object.values(obj).flatMap(strings);return[]}
for(const m of modules){assert(m.id&&m.theory.length&&m.exercises.length);for(const entry of [...m.theory,...m.exercises]){assert(!ids.has(entry.id),`duplicate ${entry.id}`);ids.add(entry.id);assert(entry.source);if(entry.steps)assert(entry.steps.length>0);}}
for(const s of strings([modules,errata])){const re=/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g;let match;while((match=re.exec(s))){katex.renderToString(match[1]??match[2],{throwOnError:true,strict:'ignore'});formulas++;}}
for(const part of examInfo.parts){for(const id of [...part.ids,...part.theoryIds])assert(ids.has(id));}
for(const m of modules.filter(m=>m.generator))for(let seed=1;seed<=100;seed++){const g=generate(m.generator,seed);assert.deepEqual(g,generate(m.generator,seed));for(const f of g.fields)assert(Number.isFinite(f.answer));for(const s of strings(g)){const re=/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g;let r;while((r=re.exec(s)))katex.renderToString(r[1]??r[2],{throwOnError:true,strict:'ignore'});}}
assert.equal(parseNumber('2/3'),2/3);assert.equal(parseNumber('-0,5'),-.5);assert(Number.isNaN(parseNumber('')));assert(Number.isNaN(parseNumber('1/0')));assert(Number.isNaN(parseNumber('alert(1)')));
const assets=['dist/index.html','dist/app.js','dist/style.css','dist/vendor/katex/katex.min.js','dist/vendor/katex/contrib/auto-render.min.js'];assets.forEach(f=>assert(fs.existsSync(f),f));
let plotCases=0;
for(const type of plotTypes){
 const markup=plotMarkup(type);assert(!/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(markup),`${type}: control character`);
 const options=[];
 for(const m of markup.matchAll(/<input[^>]+>/g)){const a=Object.fromEntries([...m[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(x=>[x[1],x[2]]));options.push([a['data-param'],[a.min,a.value,a.max]]);}
 for(const m of markup.matchAll(/<select data-param="([^"]+)">([\s\S]*?)<\/select>/g)){const vals=[...m[2].matchAll(/<option(?: value="([^"]+)")?[^>]*>([^<]+)<\/option>/g)].map(x=>x[1]??x[2]);options.push([m[1],vals]);}
 let cases=[{}];for(const [key,values]of options)cases=cases.flatMap(p=>values.map(v=>({...p,[key]:v})));
 for(const params of cases){const result=drawPlot(type,params);assert(result.svg.startsWith('<svg'),type);assert(!/NaN|Infinity|undefined/.test(result.svg),`${type}: invalid SVG`);assert(result.text&&result.legend,type);for(const s of [markup,result.text])for(const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g))katex.renderToString(m[1]??m[2],{throwOnError:true,strict:'ignore'});plotCases++;}
}
for(const m of modules){assert(plotTypes.includes(m.visual));for(const e of m.exercises)assert(Array.isArray(e.hint)&&e.hint.length>=3,e.id);}
console.log(JSON.stringify({visualizations:plotTypes.length,plotCases,status:'passed'}));
console.log(JSON.stringify({modules:modules.length,theory:modules.reduce((s,m)=>s+m.theory.length,0),exercises:modules.reduce((s,m)=>s+m.exercises.length,0),formulas,generatedVariants:modules.filter(m=>m.generator).length*100,status:'passed'}));
