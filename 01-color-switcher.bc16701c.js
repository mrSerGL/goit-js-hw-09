!function(){var t={bodyRef:document.querySelector("body"),btnStartRef:document.querySelector("button[data-start]"),btnStopRef:document.querySelector("button[data-stop]")},e=n();function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.bodyRef.style.backgroundColor=e,t.btnStartRef.addEventListener("click",(function(){timerId=setInterval((function(){t.bodyRef.style.backgroundColor=n()}),1e3),t.btnStartRef.disabled=!0})),t.btnStopRef.addEventListener("click",(function(){clearInterval(timerId),t.btnStartRef.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.bc16701c.js.map
