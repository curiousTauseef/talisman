webpackJsonp([14],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=r(1),a=n(l),o=r(13),u=r(12),i=n(u),f=r(281),d=n(f);(0,o.render)(a.default.createElement(i.default,{algorithm:d.default}),document.getElementById("fonetico-mount"))},5:function(e,t){"use strict";function r(e,t){var r=[];if(!e.global){var n=e.exec(t);return n&&r.push(n),r}for(var l=void 0;l=e.exec(t);)r.push(l);return e.lastIndex=0,r}function n(e){return e.slice().sort(function(e,t){return e-t})}function l(e){return"string"==typeof e?e.split(""):e}function a(e){for(var t="string"==typeof e,r=l(e),n=[r[0]],a=1,o=r.length;a<o;a++)r[a]!==r[a-1]&&n.push(r[a]);return t?n.join(""):n}function o(e,t){var r={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,l=e.length;n<l;n++)r[e[n]]=t[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=r,t.numericSort=n,t.seq=l,t.squeeze=a,t.translation=o},12:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(1),a=n(l),o=r(11),u=r(10),i=n(u),f=function(e){return e},d=function(e,t){return e===t},c=(0,o.compose)((0,o.withState)("wordOne","setWordOne",""),(0,o.withState)("wordTwo","setWordTwo","")),s=c(function(e){var t=e.algorithm,r=e.codeRenderer,n=void 0===r?f:r,l=e.comparator,o=void 0===l?d:l,u=e.wordOne,c=e.wordTwo,s=e.setWordOne,g=e.setWordTwo,h=u?t(u):null,m=c?t(c):null,p=h?n(h):"",v=m?n(m):"",E="·",y="default";return h&&m&&(console.log(h,m),o(h,m)?(E="=~",y="success"):(E="!~",y="error")),a.default.createElement("table",null,a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(i.default,{placeholder:"Word 1",value:u,onChange:function(e){return s(e.target.value)},status:y})),a.default.createElement("td",{style:{width:"15%",textAlign:"center"}},a.default.createElement("strong",null,E)),a.default.createElement("td",null,a.default.createElement(i.default,{placeholder:"Word 2",value:c,onChange:function(e){return g(e.target.value)},status:y}))),a.default.createElement("tr",null,a.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},p," "),a.default.createElement("td",null),a.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "))))});t.default=s},281:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function l(e){if("string"!=typeof e)throw Error("talisman/phonetics/spanish/fonetico: the given word is not a string.");e=e.toUpperCase();for(var t="",r=0,l=e.length;r<l;r++)t+=o[e[r]]||e[r];t=t.replace(/[^A-ZÑÜ\s]/g,"");for(var a=0,i=u.length;a<i;a++){var f;t=(f=t).replace.apply(f,n(u[a]))}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var a=r(5),o=(0,a.translation)("ÁÉÍÓÚ","AEIOU"),u=[[/([^L])\1+/g,"$1"],[/CH(?![AEIOUY])/g,"K"],[/CH/g,"§"],[/^SH/g,"ʃ"],[/C([EIY])/g,"S$1"],[/C/g,"K"],[/G([EIY])/g,"J$1"],[/GUA/g,"GWA"],[/GU/g,"G"],[/GÜ/g,"GW"],[/Ü/g,"U"],[/QU?/g,"K"],[/H?[UO]([AIE])/g,"W$1"],[/Z/g,"S"],[/V/g,"B"],[/^PS/g,"S"],[/PH/g,"F"],[/H/g,""],[/Y$/g,"I"],[/^XI/g,"SI"],[/X/g,"J"],[/LL/g,"Y"]]}});