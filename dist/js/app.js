!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(4)},function(e,t){!function(e){const t="resize-active";let n=!1,o=null;const r=()=>{n=!1,document.documentElement.classList.remove(t)};e.addEventListener("resize",(()=>{n||(n=!0,document.documentElement.classList.add(t)),clearTimeout(o),o=setTimeout(r,500)}))}(window)},,,function(e,t,n){"use strict";n.r(t);n(1);const o=document.documentElement;document.body;function r(){let e="",t=document.querySelector(".bubble");for(let t=0;t<286;t++){e+=`<div class="bubble__item">${Math.floor(5*Math.random())}</div>`}t.innerHTML=e}function c(){let e=document.querySelector(".header__hit"),t=document.querySelector(".header__time"),n=document.querySelector(".header__score"),o=document.querySelector(".bubble"),c=document.getElementById("bg"),u=document.getElementById("click"),l=document.getElementById("error"),a=document.getElementById("congrats"),d=0,i=0,s=60;function f(){i=Math.floor(5*Math.random()),e.textContent=i}document.addEventListener("load",(()=>{c.play()})),f(),function(){o.addEventListener("click",(e=>{let t=Number(e.target.textContent);i===t?(f(),r(),function(){d+=10,n.textContent=d}(),function(){u.play()}()):(!function(){l.play()}(),e.target.style.backgroundColor="red",e.target.classList.contains("bubble")&&(e.target.style.backgroundColor=""),e.target.classList.contains("h1")&&(e.target.style.backgroundColor=""))}))}(),function(){let r=setInterval((function(){s>0?(s--,t.textContent=s):(clearInterval(r),function(){c.pause()}(),o.innerHTML=`\n        <div class="congrats">\n            <h1 class="h1">Game Over !!! <br> your score : ${d}</h1>\n        </div>\n        `,e.textContent="-",n.textContent="-",t.textContent="-",function(){a.play()}())}),1e3)}()}(Document.prototype.ready=e=>{e&&"function"==typeof e&&document.addEventListener("DOMContentLoaded",(()=>{if("interactive"===document.readyState||"complete"===document.readyState)return e()}))})((()=>{o.classList.add("is-loaded"),r(),c()}))}]);