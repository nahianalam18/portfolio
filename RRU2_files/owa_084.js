self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~ActivityFeedBoot~FindTimeBoot~MailBoot~MailDeepBoot~PeopleBoot~PublishedCalendarBoot.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[21],{1174:function(t,e,n){n(315),n(798),n(799),n(1199),t.exports=n(99).Map},1175:function(t,e,n){n(315),n(798),n(799),n(1203),t.exports=n(99).Set},1176:function(t,e,n){n(1204),t.exports=n(99).Object.entries},1177:function(t,e,n){n(1205),t.exports=n(99).Object.values},1178:function(t,e,n){n(1206).polyfill()},1179:function(t,e,n){(function(e){t.exports=e.React=n(1)}).call(this,n(101))},1180:function(t,e,n){(function(e){t.exports=e.ReactDOM=n(54)}).call(this,n(101))},1186:function(t,e,n){var r=n(312);t.exports=function(t){return Object(r(t))}},1187:function(t,e,n){var r=n(131);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},1188:function(t,e,n){var r=n(371),i=n(87)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},1189:function(t,e,n){var r=n(360),i=n(87)("iterator"),o=n(371);t.exports=n(99).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},119:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1209);e.stitch=r.stitch,e.subscribe=r.subscribe,e.raise=r.raise,e.raiseAction=r.raiseAction},1190:function(t,e,n){var r=n(87)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},1191:function(t,e,n){(function(e){(function(){var n,r,i,o,s,c;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-s)/1e6},r=e.hrtime,o=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),c=1e9*e.uptime(),s=o-c):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(181))},1194:function(t,e,n){var r=n(246),i=n(312);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),u=r(n),a=c.length;return u<0||u>=a?t?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?t?c.charAt(u):o:t?c.slice(u,u+2):s-56320+(o-55296<<10)+65536}}},1195:function(t,e,n){"use strict";var r=n(314),i=n(194),o=n(259),s={};n(148)(s,n(87)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},1196:function(t,e,n){var r=n(109),i=n(1186),o=n(247)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},1197:function(t,e,n){"use strict";var r=n(1198),i=n(800),o=n(371),s=n(120);t.exports=n(601)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},1198:function(t,e,n){var r=n(87)("unscopables"),i=Array.prototype;null==i[r]&&n(148)(i,r,{}),t.exports=function(t){i[r][t]=!0}},1199:function(t,e,n){"use strict";var r=n(801),i=n(602);t.exports=n(805)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},1200:function(t,e,n){"use strict";var r=n(76),i=n(105),o=n(106),s=n(87)("species");t.exports=function(t){var e=r[t];o&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},1201:function(t,e,n){var r=n(108),i=n(1202).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},1202:function(t,e,n){var r=n(108),i=n(131),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(258)(Function.call,n(359).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},1203:function(t,e,n){"use strict";var r=n(801),i=n(602);t.exports=n(805)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},1204:function(t,e,n){var r=n(236),i=n(806)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},1205:function(t,e,n){var r=n(236),i=n(806)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},1206:function(t,e,n){(function(e){for(var r=n(1191),i="undefined"==typeof window?e:window,o=["moz","webkit"],s="AnimationFrame",c=i["request"+s],u=i["cancel"+s]||i["cancelRequest"+s],a=0;!c&&a<o.length;a++)c=i[o[a]+"Request"+s],u=i[o[a]+"Cancel"+s]||i[o[a]+"CancelRequest"+s];if(!c||!u){var f=0,h=0,l=[];c=function(t){if(0===l.length){var e=r(),n=Math.max(0,1e3/60-(e-f));f=n+e,setTimeout(function(){var t=l.slice(0);l.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return l.push({handle:++h,callback:t,cancelled:!1}),h},u=function(t){for(var e=0;e<l.length;e++)l[e].handle===t&&(l[e].cancelled=!0)}}t.exports=function(t){return c.call(i,t)},t.exports.cancel=function(){u.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=c,t.cancelAnimationFrame=u}}).call(this,n(101))},1207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1208);e.default=function(){var t=Promise.prototype.then,e=Promise.prototype.catch;return Promise.prototype.then=r.wrapThen(t),Promise.prototype.catch=r.wrapCatch(e),function(){Promise.prototype.then=t,Promise.prototype.catch=e}}},1208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(216),i=n(807);function o(t,e){var n=i.getCurrentAction();if(!n||!t)return t;var o=n+" => "+e;return function(){var e,n=arguments;return r.default(o)(function(){e=t.apply(null,n)})(),e}}e.wrapThen=function(t){return function(e,n){return t.call(this,o(e,"then"),o(n,"then_rejected"))}},e.wrapCatch=function(t){return function(e){return t.call(this,o(e,"catch"))}}},1209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(216),i={};e.stitch=function(t,e,n,r,o){var s=t(e,n,r,o);return n&&i[n]&&i[n].forEach(function(t){return t.apply(null,r)}),s},e.subscribe=function(t,e){i[t]||(i[t]=[]),i[t].push(e)},e.raise=function(t,e){var n=r.default(t)(function(){});e?e(n):n()},e.raiseAction=function(t){return r.default(t)(function(){})}},371:function(t,e){t.exports={}},601:function(t,e,n){"use strict";var r=n(195),i=n(236),o=n(149),s=n(148),c=n(371),u=n(1195),a=n(259),f=n(1196),h=n(87)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,d,v,y,m){u(n,e,d);var g,_,w,x=function(t){if(!l&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",A="values"==v,S=!1,O=t.prototype,k=O[h]||O["@@iterator"]||v&&O[v],E=k||x(v),L=v?A?x("entries"):E:void 0,M="Array"==e&&O.entries||k;if(M&&(w=f(M.call(new t)))!==Object.prototype&&w.next&&(a(w,b,!0),r||"function"==typeof w[h]||s(w,h,p)),A&&k&&"values"!==k.name&&(S=!0,E=function(){return k.call(this)}),r&&!m||!l&&!S&&O[h]||s(O,h,E),c[e]=E,c[b]=p,v)if(g={values:A?E:x("values"),keys:y?E:x("keys"),entries:L},m)for(_ in g)_ in O||o(O,_,g[_]);else i(i.P+i.F*(l||S),e,g);return g}},602:function(t,e,n){var r=n(108);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},798:function(t,e,n){"use strict";var r=n(1194)(!0);n(601)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},799:function(t,e,n){for(var r=n(1197),i=n(176),o=n(149),s=n(76),c=n(148),u=n(371),a=n(87),f=a("iterator"),h=a("toStringTag"),l=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(p),v=0;v<d.length;v++){var y,m=d[v],g=p[m],_=s[m],w=_&&_.prototype;if(w&&(w[f]||c(w,f,l),w[h]||c(w,h,m),u[m]=l,g))for(y in r)w[y]||o(w,y,r[y],!0)}},800:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},801:function(t,e,n){"use strict";var r=n(105).f,i=n(314),o=n(802),s=n(258),c=n(803),u=n(804),a=n(601),f=n(800),h=n(1200),l=n(106),p=n(313).fastKey,d=n(602),v=l?"_s":"size",y=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,a){var f=t(function(t,r){c(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&u(r,n,t[a],t)});return o(f.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=d(this,e),r=y(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(t){d(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(d(this,e),t)}}),l&&r(f.prototype,"size",{get:function(){return d(this,e)[v]}}),f},def:function(t,e,n){var r,i,o=y(t,e);return o?o.v=n:(t._l=o={i:i=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,e,n){a(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))},n?"entries":"values",!n,!0),h(e)}}},802:function(t,e,n){var r=n(149);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},803:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},804:function(t,e,n){var r=n(258),i=n(1187),o=n(1188),s=n(131),c=n(358),u=n(1189),a={},f={};(e=t.exports=function(t,e,n,h,l){var p,d,v,y,m=l?function(){return t}:u(t),g=r(n,h,e?2:1),_=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=c(t.length);p>_;_++)if((y=e?g(s(d=t[_])[0],d[1]):g(t[_]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=i(v,g,d.value,e))===a||y===f)return y}).BREAK=a,e.RETURN=f},805:function(t,e,n){"use strict";var r=n(76),i=n(236),o=n(149),s=n(802),c=n(313),u=n(804),a=n(803),f=n(108),h=n(155),l=n(1190),p=n(259),d=n(1201);t.exports=function(t,e,n,v,y,m){var g=r[t],_=g,w=y?"set":"add",x=_&&_.prototype,b={},A=function(t){var e=x[t];o(x,t,"delete"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof _&&(m||x.forEach&&!h(function(){(new _).entries().next()}))){var S=new _,O=S[w](m?{}:-0,1)!=S,k=h(function(){S.has(1)}),E=l(function(t){new _(t)}),L=!m&&h(function(){for(var t=new _,e=5;e--;)t[w](e,e);return!t.has(-0)});E||((_=e(function(e,n){a(e,_,t);var r=d(new g,e,_);return null!=n&&u(n,y,r[w],r),r})).prototype=x,x.constructor=_),(k||L)&&(A("delete"),A("has"),y&&A("get")),(L||O)&&A(w),m&&x.clear&&delete x.clear}else _=v.getConstructor(e,t,y,w),s(_.prototype,n),c.NEED=!0;return p(_,t),b[t]=_,i(i.G+i.W+i.F*(_!=g),b),m||v.setStrong(_,t,y),_}},806:function(t,e,n){var r=n(176),i=n(120),o=n(196).f;t.exports=function(t){return function(e){for(var n,s=i(e),c=r(s),u=c.length,a=0,f=[];u>a;)o.call(s,n=c[a++])&&f.push(t?[n,s[n]]:s[n]);return f}}},807:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(1207),o=[],s=!1;e.getCurrentAction=function(){return o.length?o[o.length-1]:null},e.promiseMiddleware=function(t,e,n,c,u){s||(r=i.default(),s=!0);try{return o.push(n),t(e,n,c,u)}finally{o.pop(),o.length||(r(),s=!1)}}},821:function(t,e,n){!function(t){var e=document.location;function n(){return""===e.hash||"#"===e.hash}var r={mode:"modern",hash:e.hash,history:!1,check:function(){var t=e.hash;t!=this.hash&&(this.hash=t,this.onHashChanged())},fire:function(){"modern"===this.mode?!0===this.history?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(t,e){var n=this;function r(t){for(var e=0,n=i.listeners.length;e<n;e++)i.listeners[e](t)}if(this.history=e,i.listeners||(i.listeners=[]),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7))!0===this.history?window.onpopstate=r:window.onhashchange=r,this.mode="modern";else{var o=document.createElement("iframe");o.id="state-frame",o.style.display="none",document.body.appendChild(o),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){"location"===event.propertyName&&n.check()}),window.setInterval(function(){n.check()},50),this.onHashChanged=r,this.mode="legacy"}return i.listeners.push(t),this.mode},destroy:function(t){if(i&&i.listeners)for(var e=i.listeners,n=e.length-1;n>=0;n--)e[n]===t&&e.splice(n,1)},setHash:function(t){return"legacy"===this.mode&&this.writeFrame(t),!0===this.history?(window.history.pushState({},document.title,t),this.fire()):e.hash="/"===t[0]?t:"/"+t,this},writeFrame:function(t){var e=document.getElementById("state-frame"),n=e.contentDocument||e.contentWindow.document;n.open(),n.write("<script>_hash = '"+t+"'; onload = parent.listener.syncHash;<script>"),n.close()},syncHash:function(){var t=this._hash;return t!=e.hash&&(e.hash=t),this},onHashChanged:function(){}},i=t.Router=function(t){if(!(this instanceof i))return new i(t);this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=null!=(null!=window.history?window.history.pushState:null),this.configure(),this.mount(t||{})};function o(t,e){for(var n=0;n<t.length;n+=1)if(!1===e(t[n],n,t))return}function c(t){for(var e=[],n=0,r=t.length;n<r;n++)e=e.concat(t[n]);return e}function u(t,e,n){if(!t.length)return n();var r=0;!function i(){e(t[r],function(e){e||!1===e?(n(e),n=function(){}):(r+=1)===t.length?n():i()})}()}function a(t,e,n){for(var r in n=t,e)if(e.hasOwnProperty(r)&&(n=e[r](t))!==t)break;return n===t?"([._a-zA-Z0-9-%()]+)":n}function f(t,e,n,r){var i,o=0,s=0,c=0;n=(n||"(").toString(),r=(r||")").toString();for(i=0;i<t.length;i++){var u=t[i];if(u.indexOf(n,o)>u.indexOf(r,o)||~u.indexOf(n,o)&&!~u.indexOf(r,o)||!~u.indexOf(n,o)&&~u.indexOf(r,o)){if(s=u.indexOf(n,o),c=u.indexOf(r,o),~s&&!~c||!~s&&~c){var a=t.slice(0,(i||1)+1).join(e);t=[a].concat(t.slice((i||1)+1))}o=(c>s?c:s)+1,i=0}else o=0}return t}i.prototype.init=function(t){var i,o=this;return this.handler=function(t){var e=t&&t.newURL||window.location.hash,n=!0===o.history?o.getPath():e.replace(/.*#/,"");o.dispatch("on","/"===n.charAt(0)?n:"/"+n)},r.init(this.handler,this.history),!1===this.history?n()&&t?e.hash=t:n()||o.dispatch("on","/"+e.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(i=n()&&t?t:n()?null:e.hash.replace(/^#/,""))&&window.history.replaceState({},document.title,i):i=this.getPath(),(i||!0===this.run_in_init)&&this.handler()),this},i.prototype.explode=function(){var t=!0===this.history?this.getPath():e.hash;return"/"===t.charAt(1)&&(t=t.slice(1)),t.slice(1,t.length).split("/")},i.prototype.setRoute=function(t,e,n){var i=this.explode();return"number"==typeof t&&"string"==typeof e?i[t]=e:"string"==typeof n?i.splice(t,e,s):i=[t],r.setHash(i.join("/")),i},i.prototype.insertEx=function(t,e,n,r){return"once"===t&&(t="on",n=function(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}(n)),this._insert(t,e,n,r)},i.prototype.getRoute=function(t){var e=t;if("number"==typeof t)e=this.explode()[t];else if("string"==typeof t){e=this.explode().indexOf(t)}else e=this.explode();return e},i.prototype.destroy=function(){return r.destroy(this.handler),this},i.prototype.getPath=function(){var t=window.location.pathname;return"/"!==t.substr(0,1)&&(t="/"+t),t};var h=/\?.*/;i.prototype.configure=function(t){t=t||{};for(var e=0;e<this.methods.length;e++)this._methods[this.methods[e]]=!0;return this.recurse=void 0===t.recurse?this.recurse||!1:t.recurse,this.async=t.async||!1,this.delimiter=t.delimiter||"/",this.strict=void 0===t.strict||t.strict,this.notfound=t.notfound,this.resource=t.resource,this.history=t.html5history&&this.historySupport||!1,this.run_in_init=!0===this.history&&!1!==t.run_handler_in_init,this.convert_hash_in_init=!0===this.history&&!1!==t.convert_hash_in_init,this.every={after:t.after||null,before:t.before||null,on:t.on||null},this},i.prototype.param=function(t,e){":"!==t[0]&&(t=":"+t);var n=new RegExp(t,"g");return this.params[t]=function(t){return t.replace(n,e.source||e)},this},i.prototype.on=i.prototype.route=function(t,e,n){var r=this;return n||"function"!=typeof e||(n=e,e=t,t="on"),Array.isArray(e)?e.forEach(function(e){r.on(t,e,n)}):(e.source&&(e=e.source.replace(/\\\//gi,"/")),Array.isArray(t)?t.forEach(function(t){r.on(t.toLowerCase(),e,n)}):(e=f(e=e.split(new RegExp(this.delimiter)),this.delimiter),void this.insert(t,this.scope.concat(e),n)))},i.prototype.path=function(t,e){var n=this.scope.length;t.source&&(t=t.source.replace(/\\\//gi,"/")),t=f(t=t.split(new RegExp(this.delimiter)),this.delimiter),this.scope=this.scope.concat(t),e.call(this,this),this.scope.splice(n,t.length)},i.prototype.dispatch=function(t,e,n){var r,i=this,o=this.traverse(t,e.replace(h,""),this.routes,""),s=this._invoked;if(this._invoked=!0,!o||0===o.length)return this.last=[],"function"==typeof this.notfound&&this.invoke([this.notfound],{method:t,path:e},n),!1;function c(){i.last=o.after,i.invoke(i.runlist(o),i,n)}return"forward"===this.recurse&&(o=o.reverse()),(r=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last])&&r.length>0&&s?(this.async?this.invoke(r,this,c):(this.invoke(r,this),c()),!0):(c(),!0)},i.prototype.invoke=function(t,e,n){var r,i=this;this.async?(r=function(n,i){if(Array.isArray(n))return u(n,r,i);"function"==typeof n&&n.apply(e,(t.captures||[]).concat(i))},u(t,r,function(){n&&n.apply(e,arguments)})):(r=function(n){return Array.isArray(n)?o(n,r):"function"==typeof n?n.apply(e,t.captures||[]):void("string"==typeof n&&i.resource&&i.resource[n].apply(e,t.captures||[]))},o(t,r))},i.prototype.traverse=function(t,e,n,r,i){var o,s,c,u,a=[];function f(t){if(!i)return t;var e=function t(e){for(var n=[],r=0;r<e.length;r++)n[r]=Array.isArray(e[r])?t(e[r]):e[r];return n}(t);return e.matched=t.matched,e.captures=t.captures,e.after=t.after.filter(i),function t(e){for(var n=e.length-1;n>=0;n--)Array.isArray(e[n])?(t(e[n]),0===e[n].length&&e.splice(n,1)):i(e[n])||e.splice(n,1)}(e),e}if(e===this.delimiter&&n[t])return(u=[[n.before,n[t]].filter(Boolean)]).after=[n.after].filter(Boolean),u.matched=!0,u.captures=[],f(u);for(var h in n)if(n.hasOwnProperty(h)&&(!this._methods[h]||this._methods[h]&&"object"==typeof n[h]&&!Array.isArray(n[h]))){if(o=s=r+this.delimiter+h,this.strict||(s+="["+this.delimiter+"]?"),!(c=e.match(new RegExp("^"+s))))continue;if(c[0]&&c[0]==e&&n[h][t])return(u=[[n[h].before,n[h][t]].filter(Boolean)]).after=[n[h].after].filter(Boolean),u.matched=!0,u.captures=c.slice(1),this.recurse&&n===this.routes&&(u.push([n.before,n.on].filter(Boolean)),u.after=u.after.concat([n.after].filter(Boolean))),f(u);if((u=this.traverse(t,e,n[h],o)).matched)return u.length>0&&(a=a.concat(u)),this.recurse&&(a.push([n[h].before,n[h][t]].filter(Boolean)),u.after=u.after.concat([n[h].after].filter(Boolean)),n===this.routes&&(a.push([n.before,n.on].filter(Boolean)),u.after=u.after.concat([n.after].filter(Boolean)))),a.matched=!0,a.captures=u.captures,a.after=u.after,f(a)}return!1},i.prototype.insert=function(t,e,n,r){var i,o,s,c;if(e=e.filter(function(t){return t&&t.length>0}),r=r||this.routes,c=e.shift(),/\:|\*/.test(c)&&!/\\d|\\w/.test(c)&&(c=function(t,e){for(var n,r=0,i="";n=t.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);)r=n.index+n[0].length,n[0]=n[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),i+=t.substr(0,n.index)+n[0];var o,s,c=(t=i+=t.substr(r)).match(/:([^\/]+)/gi);if(c){s=c.length;for(var u=0;u<s;u++)t="::"===(o=c[u]).slice(0,2)?o.slice(1):t.replace(o,a(o,e))}return t}(c,this.params)),e.length>0)return r[c]=r[c]||{},this.insert(t,e,n,r[c]);if(c||e.length||r!==this.routes){if(i=typeof r[c],o=Array.isArray(r[c]),r[c]&&!o&&"object"==i)switch(typeof r[c][t]){case"function":return void(r[c][t]=[r[c][t],n]);case"object":return void r[c][t].push(n);case"undefined":return void(r[c][t]=n)}else if("undefined"==i)return(s={})[t]=n,void(r[c]=s);throw new Error("Invalid route context: "+i)}switch(typeof r[t]){case"function":return void(r[t]=[r[t],n]);case"object":return void r[t].push(n);case"undefined":return void(r[t]=n)}},i.prototype.extend=function(t){var e,n=this,r=t.length;function i(t){n._methods[t]=!0,n[t]=function(){var e=1===arguments.length?[t,""]:[t];n.on.apply(n,e.concat(Array.prototype.slice.call(arguments)))}}for(e=0;e<r;e++)i(t[e])},i.prototype.runlist=function(t){var e=this.every&&this.every.before?[this.every.before].concat(c(t)):c(t);return this.every&&this.every.on&&e.push(this.every.on),e.captures=t.captures,e.source=t.source,e},i.prototype.mount=function(t,e){if(t&&"object"==typeof t&&!Array.isArray(t)){var n=this;for(var r in e=e||[],Array.isArray(e)||(e=e.split(n.delimiter)),t)t.hasOwnProperty(r)&&i(r,e.slice(0))}function i(e,r){var i=e,o=e.split(n.delimiter),s=typeof t[e],c=""===o[0]||!n._methods[o[0]],u=c?"on":i;if(c&&(i=i.slice((i.match(new RegExp("^"+n.delimiter))||[""])[0].length),o.shift()),c&&"object"===s&&!Array.isArray(t[e]))return r=r.concat(o),void n.mount(t[e],r);c&&(r=f(r=r.concat(i.split(n.delimiter)),n.delimiter)),n.insert(u,r,t[e])}}}(e)},822:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(807);e.promiseMiddleware=r.promiseMiddleware}}]);
//# sourceMappingURL=owa.vendors~ActivityFeedBoot~FindTimeBoot~MailBoot~MailDeepBoot~PeopleBoot~PublishedCalendarBoot.js.map
self.scriptsLoaded['owa.vendors~ActivityFeedBoot~FindTimeBoot~MailBoot~MailDeepBoot~PeopleBoot~PublishedCalendarBoot.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~ActivityFeedBoot~FindTimeBoot~MailBoot~MailDeepBoot~PeopleBoot~PublishedCalendarBoot.js'] = (new Date()).getTime();