const t={bodyRef:document.querySelector("body"),btnStartRef:document.querySelector("button[data-start]"),btnStopRef:document.querySelector("button[data-stop]")};let e=o();function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.bodyRef.style.backgroundColor=e,t.btnStartRef.addEventListener("click",(()=>{timerId=setInterval((()=>{t.bodyRef.style.backgroundColor=o()}),1e3),t.btnStartRef.disabled=!0})),t.btnStopRef.addEventListener("click",(()=>{clearInterval(timerId),t.btnStartRef.disabled=!1}));
//# sourceMappingURL=01-color-switcher.55fc829a.js.map
