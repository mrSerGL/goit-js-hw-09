const e=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"];let t;function o(e){return new Promise(((t,o)=>{const r=(s=1e3,n=3e3,Math.floor(Math.random()*(n-s+1)+s));var s,n;setTimeout((()=>{t({horse:e,time:r}),o({horse:e,time:r})}),r)}))}({startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tebleBody:document.querySelector(".js-results-table > tbody")}).startBtn.addEventListener("click",(function(){const r=e.map(o);Promise.all(r).then((e=>{console.table(e.sort(((e,t)=>e.time-t.time))),console.log(`заезд окончен, победитель ${e[0].horse}!`),t=e,console.log(t)})).catch((e=>console.log("its some trouble")))}));
//# sourceMappingURL=04-horses.aa2d42bf.js.map
