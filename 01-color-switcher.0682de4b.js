const t={bodyRef:document.querySelector("body"),btnStartRef:document.querySelector("button[data-start]"),btnStopRef:document.querySelector("button[data-stop]")};function e(){t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function n(){t.btnStartRef.disabled=!1,t.btnStopRef.disabled=!0}e(),n(),t.btnStartRef.addEventListener("click",(()=>{e(),timerId=setInterval((()=>{e()}),1e3),t.btnStartRef.disabled=!0,t.btnStopRef.disabled=!1})),t.btnStopRef.addEventListener("click",(()=>{clearInterval(timerId),n()}));
//# sourceMappingURL=01-color-switcher.0682de4b.js.map
