const e=document.querySelector(".form");e.addEventListener("submit",function(e){e.preventDefault();let t=e.target.elements,o=t.amount.valueAsNumber,n=t.delay.valueAsNumber,l=t.step.valueAsNumber,s=n;for(let e=1;e<=o;e+=1)e>1&&(s+=l),(function(e,t){let o=Math.random()>.3;return new Promise((n,l)=>{setTimeout(()=>{o?n({position:e,delay:t}):l({position:e,delay:t})},t)})})(e,s).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})});
//# sourceMappingURL=03-promises.6800b5e3.js.map
