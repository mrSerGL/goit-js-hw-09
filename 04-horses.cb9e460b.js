!function(){var e,t=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],r={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tebleBody:document.querySelector(".js-results-table > tbody")};function n(e){return new Promise((function(t,r){var n,o,s=(n=1e3,o=3e3,Math.floor(Math.random()*(o-n+1)+n));setTimeout((function(){t({horse:e,time:s}),r({horse:e,time:s})}),s)}))}r.startBtn.addEventListener("click",(function(){var o=t.map(n);r.progressField.textContent="Заїзд почався, ставки не приймаются!",Promise.all(o).then((function(t){console.table(t.sort((function(e,t){return e.time-t.time}))),e=t,r.progressField.textContent="Заїзд закінчівся, переміг ".concat(e[0].horse," з часом ").concat(e[0].time," ms. ")})).catch((function(e){return console.log("we have trouble")}))}))}();
//# sourceMappingURL=04-horses.cb9e460b.js.map
