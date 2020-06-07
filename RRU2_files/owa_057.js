self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Translation.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[443],{9275:function(e,t,n){"use strict";n.r(t);var r="-",a=4;function s(e){if(0===(e=e.toLowerCase()).lastIndexOf("zh-",0))switch(e){case"zh-cht":case"zh-hant":case"zh-hk":case"zh-tw":return"zh-cht";default:return"zh-chs"}var t=e.indexOf(r,1);if(-1===t)return e;var n=e.indexOf(r,t+r.length);return-1===n&&(n=e.length),n-t==r.length+a&&(t=n),e.substring(0,t)}var u=n(2),o=n(92),i=Object(u.createStore)("TranslationStore",{sessionId:Object(o.a)(),localeOfSupportedLanguageMap:null,supportedLanguageMap:null,isUserLocaleSupported:!1,userLanguageName:null,userLanguageTag:null})();function c(e){return!!i.supportedLanguageMap&&i.supportedLanguageMap.has(e)}function l(e,t){void 0===t&&(t=null);var n=s(e);if(!c(n))return!1;if(null!=t){var r=s(t);return!!c(r)&&n!==r}return!0}var d=n(0),g="https://ogma.osi.office.net",p="/TradukoApi/api/v1.0/translateContentArray",f="/TradukoApi/api/v1.0/supportedLanguages",h="/TradukoApi/api/v1.0/detectLanguage",v="ows/api/v1/translation/translateText",O="ows/api/v1/translation/getSupportedLanguages";function L(e){return O+"?clientLocale="+e}var T=n(15);function w(e,t){e.setRequestHeader("Content-type","application/json"),e.setRequestHeader("Accept","application/json, text/plain, */*"),e.setRequestHeader("x-translator-sid",i.sessionId),e.setRequestHeader("x-translator-cross-sid",i.sessionId),e.setRequestHeader("x-translator-cid",t),e.setRequestHeader("x-translator-user-id",Object(T.e)()),e.setRequestHeader("x-translator-client-version",Object(T.f)()),e.setRequestHeader("x-translator-client-app","Outlook"),e.setRequestHeader("x-translator-client-type","Browser")}var S=n(6);function m(e){return{"x-translator-sid":i.sessionId,"x-translator-cross-sid":i.sessionId,"x-translator-cid":e,"x-translator-user-id":Object(T.e)(),"x-translator-client-version":Object(T.f)()}}var M=n(65),_=3e4;function b(e,t){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(n){return[2,new Promise(function(n,r){Object(S.e)("rp-inlineTranslation-UseOWS")?function(e,t,n,r){d.__awaiter(this,void 0,void 0,function(){var a,u,o,i,c,l,g;return d.__generator(this,function(d){switch(d.label){case 0:a=m(t),u=s(e),o=!1,i=setTimeout(function(){o=!0,r("Request timed out")},_),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,Object(M.b)(L(u),t,!1,a,!0)];case 2:return c=d.sent(),o||(clearTimeout(i),(l=x(c))?n(l):r("OWS OGMA returned invalid response: "+c)),[3,4];case 3:return g=d.sent(),r("getSupportedLanguagesOWS failed:"+g.message),[3,4];case 4:return[2]}})})}(e,t,n,r):function(e,t,n,r){var a=new XMLHttpRequest;a.timeout=_,a.onload=function(){if(200===a.status){var e=x(JSON.parse(this.responseText));e?n(e):r("OGMA returned invalid response: "+this.response)}else r("OGMA failed to retrieve supported languages: "+this.response)},a.onerror=function(){r("OGMA call failed: "+this.response)},a.ontimeout=function(){r("OGMA call timed out")};var u=s(e);a.open("GET",function(e){return""+g+f+"?clientLocale="+e}(u)),w(a,t),a.send()}(e,t,n,r)})]})})}function x(e){try{var t=new Map;return e.forEach(function(e){t.set(e.LanguageTag,e)}),t}catch(e){return null}}var j=n(10),A=Object(u.mutatorAction)("setSupportedLanguageMap",function(e,t){var n=s(e);i.localeOfSupportedLanguageMap=e,i.userLanguageName=t.get(n).LanguageName,i.userLanguageTag=n,i.supportedLanguageMap=t,i.isUserLocaleSupported=l(e)}),G=n(18),E=15e3,R=0,q=E;function y(){return d.__awaiter(this,void 0,void 0,function(){var e,t,n,r,a,s,u;return d.__generator(this,function(c){switch(c.label){case 0:if(e=Object(j.a)().SessionSettings.UserCulture,t=Date.now(),e===i.localeOfSupportedLanguageMap||!(0===R||t>R+q))return[3,5];n=null,r=Object(o.a)(),a=new G.a("InlineTranslationGetSupportedLanguages"),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,b(e,r)];case 2:return n=c.sent(),R=0,q=E,a.end(),[3,4];case 3:throw s=c.sent(),u=new Error("[InlineTranslation] getSupportedLanguages failed. Error:"+s+" | cid:"+r),R=t,q*=2,a.endWithError("ServerError",u),s;case 4:return A(e,n),[2,!0];case 5:return[2,!1]}})})}function I(){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(e){switch(e.label){case 0:return[4,y()];case 1:return e.sent(),[2,i.supportedLanguageMap]}})})}function H(){return i.localeOfSupportedLanguageMap}function N(e,t){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(n){return[2,new Promise(function(n,r){var a=new XMLHttpRequest;a.onload=function(){if(200===a.status){var e=JSON.parse(this.responseText);e?n(e):r("OGMA returned invalid response: "+this.response)}else r("OGMA failed to detect email language: "+this.response)},a.onerror=function(){r("OGMA call failed: "+this.response)},a.open("POST",""+g+h),w(a,t),a.send(JSON.stringify(e))})]})})}var D=1e4;function U(e){return d.__awaiter(this,void 0,void 0,function(){var t,n,r,a,s,u;return d.__generator(this,function(i){switch(i.label){case 0:t=Object(o.a)(),n=null,r=new G.a("InlineTranslationGetDetectedLanguage"),i.label=1;case 1:return i.trys.push([1,3,,4]),(a=e.join(" ")).length>D&&(a=a.substring(0,D)),[4,N(a,t)];case 2:return n=i.sent(),r.end(),[3,4];case 3:return s=i.sent(),u=new Error("[InlineTranslation] getOgmaDetectedLanguage failed. Error:"+s+" | cid:"+t),r.endWithError("ServerError",u),[3,4];case 4:return[2,n]}})})}function z(e){return i.supportedLanguageMap.has(e)?i.supportedLanguageMap.get(e).LanguageName:null}function W(){return i.userLanguageName}function k(){return i.userLanguageTag}function C(){return i.isUserLocaleSupported}var J=15e3;function P(e,t){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(n){return[2,new Promise(function(n,r){Object(S.e)("rp-inlineTranslation-UseOWS")?function(e,t,n,r){d.__awaiter(this,void 0,void 0,function(){var a,s,u,o,c;return d.__generator(this,function(l){switch(l.label){case 0:a=m(t),s=!1,u=setTimeout(function(){s=!0,r("Request timed out")},J),l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Object(M.d)((d=i.userLanguageTag,v+"?toLang="+d),e,t,!1,a,!0)];case 2:return o=l.sent(),s||(clearTimeout(u),null!=o?n(X(o)):r("OGMA returned invalid response: "+o)),[3,4];case 3:return c=l.sent(),r("translateTextOWS failed:"+c.message),[3,4];case 4:return[2]}var d})})}(e,t,n,r):function(e,t,n,r){var a=new XMLHttpRequest;a.timeout=J,a.onload=function(){if(200===a.status){var e=JSON.parse(this.responseText);null!=e?n(X(e)):r("OGMA returned invalid response: "+this.response)}else r("OGMA failed to translate messaage: "+this.response)},a.onerror=function(){r("OGMA call failed: "+this.response)},a.ontimeout=function(){r("OGMA call timed out")},a.open("POST",(s=i.userLanguageTag,""+g+p+"?fromLang=&toLang="+s)),w(a,t),a.send(function(e){var t=[];return e.forEach(function(e){var n={Data:e,DataType:"html"};t.push(n)}),JSON.stringify(t)}(e));var s}(e,t,n,r)})]})})}function X(e){var t=[];return e.forEach(function(e){t.push(e.TranslatedText)}),t}var $=n(226);function B(e,t){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(n){switch(n.label){case 0:return e.translationMode!==t.translationMode&&Object(G.o)("InlineTranslationChangeTranslationMode",[],{cosmosOnlyData:t.translationMode.toString()}),t.excludedLanguages.forEach(function(t){e.excludedLanguages.includes(t)||Object(G.o)("InlineTranslationOptOutOfLanguage",[],{cosmosOnlyData:t})}),e.excludedLanguages.forEach(function(e){t.excludedLanguages.includes(e)||Object(G.o)("InlineTranslationRemoveOptOutOfLanguage",[],{cosmosOnlyData:e})}),[4,$.d.importAndExecute($.a.Translation,t)];case 1:return n.sent(),[2]}})})}n.d(t,"checkCanTranslate",function(){return l}),n.d(t,"initSupportedLanguages",function(){return y}),n.d(t,"initAndGetSupportedLanguageMap",function(){return I}),n.d(t,"getLocaleOfSupportedLanguageMap",function(){return H}),n.d(t,"getOgmaSupportedLanguageTag",function(){return s}),n.d(t,"getDetectedLanguage",function(){return U}),n.d(t,"getSupportedLanguageMap",function(){return z}),n.d(t,"getUserLanguageName",function(){return W}),n.d(t,"getUserLanguageTag",function(){return k}),n.d(t,"getIsUserLocaleSupported",function(){return C}),n.d(t,"translateText",function(){return P}),n.d(t,"updateTranslationOptions",function(){return B})}},0,[514,105,24,116]]);
//# sourceMappingURL=owa.Translation.js.map
self.scriptsLoaded['owa.Translation.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Translation.js'] = (new Date()).getTime();