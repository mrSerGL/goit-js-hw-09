!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r,i=o("h6c0i"),c=["Бучифаль","Осадок","Волчьясыть","Дрысак","Кабысдох"],s={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tebleBody:document.querySelector(".js-results-table > tbody")};function d(e){return new Promise((function(t,n){var o,r,c=(o=1e3,r=4e3,Math.floor(Math.random()*(r-o+1)+o));setTimeout((function(){i.Notify.success("".concat(e," finished")),t({horse:e,time:c}),n({horse:e,time:c})}),c)}))}s.startBtn.addEventListener("click",(function(){var e=c.map(d);s.tebleBody.innerHTML="",i.Notify.failure("START"),s.progressField.textContent="Заїзд почався, ставки не приймаются!",Promise.all(e).then((function(e){var t;console.table(e.sort((function(e,t){return e.time-t.time}))),r=e,s.progressField.textContent="Заїзд закінчівся, переміг ".concat(r[0].horse," з часом ").concat(r[0].time," ms. "),t=r,setTimeout((function(){s.tebleBody.innerHTML="",t.map((function(e,t){var n="<tr><td>".concat(t+1,"</td><td>").concat(e.horse,"</td><td>").concat(e.time,"</td></tr>");s.tebleBody.insertAdjacentHTML("beforeend",n)}))}),2e3)})).catch((function(e){return console.log("we have trouble")}))}))}();
//# sourceMappingURL=04-horses.d2486070.js.map
