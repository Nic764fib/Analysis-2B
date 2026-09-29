const DAY=86400000;
const levelOf=review=>Number.isInteger(review?.level)?Math.max(0,Math.min(3,review.level)):0;

export function nextReview(previous,rating,now=Date.now()){
 if(!['again','partial','complete'].includes(rating))throw new Error('Unbekannte Bewertung');
 const level=levelOf(previous);
 // Early free practice must not turn three clicks into three successful days.
 if(rating==='complete'&&level>0&&previous.due>now)return {...previous,schedule:2};
 const nextLevel=rating==='complete'?Math.min(3,level+1):0;
 const delay=rating==='again'?60000:rating==='partial'?600000:nextLevel*DAY;
 return {level:nextLevel,due:now+delay,schedule:2};
}

export function reviewLabel(previous,rating,now=Date.now()){
 if(rating==='again')return '1 Minute';
 if(rating==='partial')return '10 Minuten';
 if(levelOf(previous)>0&&previous.due>now)return 'Termin bleibt';
 const days=nextReview(previous,rating,now).level;
 return days===1?'1 Tag':`${days} Tage`;
}

export function migrateReviews(reviews){
 let changed=false;
 for(const [id,review]of Object.entries(reviews)){
  if(review.schedule===2)continue;
  const level=levelOf(review);
  // Old due dates encode the previous 1/3/7-day interval. Preserve its start.
  const reduction=level===2?DAY:level===3?4*DAY:0;
  reviews[id]={level,due:review.due-reduction,schedule:2};
  changed=true;
 }
 return changed;
}

export function reviewQueue(cards,reviews,known,mode='due',isFocus=()=>false,now=Date.now()){
 return cards.filter(t=>mode==='all'||mode==='open'&&!known[t.id]||mode==='due'&&(!reviews[t.id]||reviews[t.id].due<=now))
  .sort((a,b)=>{
   if(mode==='due'){
    const ar=reviews[a.id],br=reviews[b.id];
    if(Boolean(ar)!==Boolean(br))return ar?-1:1;
    if(ar&&br&&ar.due!==br.due)return ar.due-br.due;
   }
   return Number(isFocus(b))-Number(isFocus(a));
  });
}
