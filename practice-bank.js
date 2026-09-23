import {compactTasks} from './practice-compact.js';
import {inverseTasks} from './practice-inverse.js';
import {implicitTasks} from './practice-implicit.js';
import {taylorTasks} from './practice-taylor.js';
import {families} from './practice-shared.js';
import {workedSteps} from './practice-worked.js';
export {families,topics} from './practice-shared.js';
export function readableMath(value){
 if(typeof value==='string')return value.replace(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g,block=>block.replace(/(?<![\w^])(\d+)\/(\d+)(?!\w)/g,'\\frac{$1}{$2}'));
 if(Array.isArray(value))return value.map(readableMath);
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,v])=>[key,readableMath(v)]));
 return value;
}
export const practiceBank=[...compactTasks,...inverseTasks,...implicitTasks,...taylorTasks].map(task=>readableMath({
 ...task,topic:families[task.family].topic,recipe:families[task.family].recipe,fields:task.fields||[],intro:task.intro||'',
 parts:task.parts.map((p,i)=>({...p,...(workedSteps[task.id]?.[i]?{solution:undefined,steps:workedSteps[task.id][i]}:{})}))
}));
export const taskById=Object.fromEntries(practiceBank.map(t=>[t.id,t]));
