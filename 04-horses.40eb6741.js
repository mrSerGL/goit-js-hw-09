const e=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],t={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tebleBody:document.querySelector(".js-results-table > tbody")};let r;function o(e){return new Promise(((t,r)=>{const o=(s=1e3,n=3e3,Math.floor(Math.random()*(n-s+1)+s));var s,n;setTimeout((()=>{t({horse:e,time:o}),r({horse:e,time:o})}),o)}))}t.startBtn.addEventListener("click",(function(){const s=e.map(o);t.progressField.textContent="Заїзд почався, ставки не приймаются!",Promise.all(s).then((e=>{var o;console.table(e.sort(((e,t)=>e.time-t.time))),r=e,t.progressField.textContent=`Заїзд закінчівся, переміг ${r[0].horse} з часом ${r[0].time} ms. `,o=r,t.tebleBody.innerHTML="",o.map(((e,r)=>{const o=`<tr><td>${r+1}</td><td>${e.horse}</td><td>${e.time}</td></tr>`;t.tebleBody.insertAdjacentHTML("beforeend",o)}))})).catch((e=>console.log("we have trouble")))}));
//# sourceMappingURL=04-horses.40eb6741.js.map
