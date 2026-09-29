import {esc} from './study-ui.js';
import {namingLabel} from './theory-names.js';

export function nameCaption(t){return `<p class="name-caption">${esc(namingLabel(t))}</p>`;}
export function recognitionHint(t){return `<details class="recognition-hint"><summary>Woran erkenne ich diese Aussage?</summary><p>${esc(t.recognize)}</p>${t.contrast?`<p class="name-contrast">${esc(t.contrast)}</p>`:''}</details>`;}
