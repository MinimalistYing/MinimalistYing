(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./node_modules/vanilla-antd-message/dist/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=document.createElement("div");function a(){o.classList.add("vanilla-antd-message"),document.body.appendChild(o)}a.prototype.show=function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"info",a=document.createElement("div"),s=document.createElement("span"),r=document.createElement("i");r.classList.add(n),r.classList.add("vanilla-antd-message-icon"),s.innerText=e,a.classList.add("vanilla-antd-content-box"),a.classList.add("animate-in"),a.appendChild(r),a.appendChild(s),a.style.top="".concat(50*this.count,"px"),o.appendChild(a),this.count++,setTimeout(function(){a.classList.add("animate-out"),setTimeout(function(){o.removeChild(a);for(var e=document.querySelectorAll(".vanilla-antd-content-box"),n=0;n<e.length;n++)e[n].style.top="".concat(parseInt(e[n].style.top,10)-50,"px");t.count--},300)},this.duration)},a.prototype.success=function(e){this.show(e,"success")},a.prototype.error=function(e){this.show(e,"error")},a.prototype.warn=function(e){this.show(e,"warn")},a.prototype.info=function(e){this.show(e,"info")},a.prototype.duration=3e3,a.prototype.count=0;var s=new a;t.default=s},"./node_modules/vanilla-antd-message/dist/style.css":function(e,t,n){},"./src/components/VanillaAntdDemo/index.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=r(n("./node_modules/react/index.js")),s=r(n("./node_modules/vanilla-antd-message/dist/index.js"));function r(e){return e&&e.__esModule?e:{default:e}}n("./node_modules/vanilla-antd-message/dist/style.css"),n("./src/components/VanillaAntdDemo/index.less");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){return a.default.createElement("main",{className:"message-demo"},a.default.createElement("button",{className:"info-btn",onClick:function(){return s.default.info("Info Message")}},"info"),a.default.createElement("button",{className:"success-btn",onClick:function(){return s.default.success("Success Message")}},"success"),a.default.createElement("button",{className:"error-btn",onClick:function(){return s.default.error("Error Message")}},"error"),a.default.createElement("button",{className:"warn-btn",onClick:function(){return s.default.warn("Warn Message")}},"warn"))}}]),t}();t.default=i},"./src/components/VanillaAntdDemo/index.less":function(e,t,n){}}]);