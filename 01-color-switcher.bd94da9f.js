const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;function d(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.background=t}t.addEventListener("click",(()=>{a=setInterval(d,1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.bd94da9f.js.map
