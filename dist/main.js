!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={render:()=>{const e=document.getElementById("content");null!==e.firstChild&&e.firstChild.remove();const t=document.createElement("DIV");t.classList.add("info"),t.classList.add("about-info"),t.textContent="King's Healthy Eats (KHE) is your premium one stop shop for quality Caribbean cooking. Come dine with us and we promise you'll leave in better stead than you came",e.appendChild(t)}},d={render:()=>{const e=document.getElementById("content");null!==e.firstChild&&e.firstChild.remove();const t=document.createElement("DIV");t.classList.add("info"),t.classList.add("contact-info");const n=document.createElement("P");t.appendChild(n),n.textContent="Send us a message!";const o=document.createElement("FORM"),d=document.createElement("LABEL");d.textContent="Name",o.appendChild(d);const c=document.createElement("INPUT");o.appendChild(c);const r=document.createElement("BR");o.appendChild(r);const a=document.createElement("LABEL");a.textContent="Email",o.appendChild(a);const l=document.createElement("INPUT");o.appendChild(l);const i=document.createElement("BR");o.appendChild(i);const u=document.createElement("LABEL");u.textContent="Message",o.appendChild(u);const m=document.createElement("TEXTAREA");o.appendChild(m);const s=document.createElement("BR");o.appendChild(s);const p=document.createElement("BUTTON");p.textContent="Submit",o.appendChild(p),t.appendChild(o),e.appendChild(t)}};({render:()=>{const e=document.createElement("NAV");e.id="main-nav";const t=document.createElement("DIV");t.classList.add("logo"),t.textContent="KHE";const n=document.createElement("DIV");n.id="tabs",e.appendChild(t),e.appendChild(n);const o=document.createElement("UL");n.appendChild(o);const d=document.createElement("LI");d.id="about",d.textContent="About",n.appendChild(d);const c=document.createElement("LI");c.id="contact",c.textContent="Contact",n.appendChild(c);const r=document.createElement("LI");r.id="menu",r.textContent="Menu",n.appendChild(r);const a=document.createElement("LI");a.id="reserve",a.textContent="Reservations",n.appendChild(a);const l=document.createElement("LI");l.id="locations",l.textContent="Locations",n.appendChild(l),document.body.prepend(e)}}).render();document.getElementById("content");document.getElementById("about").addEventListener("click",()=>{o.render()}),document.getElementById("contact").addEventListener("click",()=>{d.render()});document.getElementById("menu"),document.getElementById("reserve"),document.getElementById("locations")}]);