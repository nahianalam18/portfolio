self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.InlineImageLoader.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[282],{13688:function(e,t,n){"use strict";n.r(t);var r=n(3650),o=n(8),i=Object(o.action)("clearInlineImageStore")(function(){r.a.inlineImages={}}),a=n(4331),u=n(4381),c=n(4363),s=Object(o.action)("addInlineImageToStore")(function(e,t){r.a.inlineImages[e]=t}),d=n(548);function l(e){var t=Object(u.a)(e,a.f),n=Object(u.a)(e,d.c);if(t.length>0&&n.length>0){var r=Object(c.a)(e);r&&s(n,r)}}function f(e,t,n,r,o,i,a){void 0===r&&(r=""),void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a=""),e.addCustomData([t,n,r,o,i,a]),r&&r.length>0?e.endWithError("ClientError"):e.end()}var m="RequestError",g="RequestTimeout",h="RequestAbort",v="ImageZeroBytes",p="ImageInvalidLength",b=[{format:"JPEG",signature:new Uint8Array([255,216,255,224]),mime:/^image\/p?jpe?g$/i,expectedMime:"image/jpeg"},{format:"EXIF",signature:new Uint8Array([255,216,255,225]),mime:/^image\/p?jpe?g$/i},{format:"SPIFF",signature:new Uint8Array([255,216,255,232]),mime:/^image\/p?jpe?g$/i},{format:"CannonEOS",signature:new Uint8Array([255,216,255,226]),mime:/^image\/p?jpe?g$/i},{format:"SamsungD500",signature:new Uint8Array([255,216,255,227]),mime:/^image\/p?jpe?g$/i},{format:"PNG",signature:new Uint8Array([137,80,78,71,13,10,26,10]),mime:/^image\/png$/i,expectedMime:"image/png"},{format:"GIF",signature:new Uint8Array([71,73,70,56]),mime:/^image\/gif$/i,expectedMime:"image/gif"},{format:"TIFF1",signature:new Uint8Array([73,32,73]),mime:/^image\/(x-)?tiff$/i},{format:"TIFF2",signature:new Uint8Array([73,73,42,0]),mime:/^image\/(x-)?tiff$/i},{format:"TIFF3",signature:new Uint8Array([77,77,0,42]),mime:/^image\/(x-)?tiff$/i},{format:"TIFF4",signature:new Uint8Array([77,77,0,43]),mime:/^image\/(x-)?tiff$/i},{format:"BMP",signature:new Uint8Array([66,77]),mime:/^image\/bmp$/i}];function w(e,t){return void 0===t&&(t=!1),new Promise(function(n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){var e=r.status,t=r.getResponseHeader("Content-Type")||"";if(t.length>0){var o=t.indexOf(";");o>0&&(t=t.substr(0,o))}var i="",u=null,c="",s=!1,d="";if(200==e){var l=r.response;if(l&&0!=l.byteLength)if(l.byteLength<10)i=p;else{var f=function(e){for(var t=0;t<b.length;t++)for(var n=b[t],r=0;r<n.signature.length&&n.signature[r]==e[r];r++)if(r==n.signature.length-1)return n;return null}(u=new Uint8Array(r.response,0,10));f&&(c=f.format,(s=t&&f.mime.test(t))||(i=a.l,d=f.expectedMime))}else i=v}n({status:i,responseCode:e,contentType:t,detectedFormat:c,first10BytesBase64:u?y(u):"",mimeMatched:s,expectedMime:d})}},r.ontimeout=function(){n({status:g})},r.onerror=function(){n({status:m})},r.onabort=function(){n({status:h})},t&&(r.withCredentials=!0),r.open("GET",e,!0),r.responseType="arraybuffer",r.send()})}function y(e){for(var t="",n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var O=new RegExp("^https?://([^/]*)/.*","i"),C=window.location.hostname.toLowerCase();function _(e){if(e){var t=e.ownerDocument||document;return t&&t.documentElement.contains(e)}return!1}var A="onload";function j(e,t,n,r){e.onload=function(e){var t=e.target;I(t),n&&n(t)},e.onerror=function(e){var t=e.target;I(t),r&&r(t)},e.setAttribute(d.b,d.d),e.src=t}function I(e){e.removeAttribute(A),e.removeAttribute(d.b),e.onload=null,e.onerror=null}var D=n(53),T=n(11),k="deeplink/read/",R="/owa/?debugJS=true&viewmodel=ReadMessageItem&InternetMessageID=";function S(e,t,n,r){var o="Please engage nickhu@microsoft.com with below data:\n",i=Object(u.a)(e,a.e);i&&(o+="Deeplink (React): "+x(i,!0)+"\n");var c=Object(u.a)(e,a.d);c&&(o+="Deeplink (MVVM): "+x(c,!1)+"\n");var s=e.src;s&&(o+="Src: "+s+"\n");var l=Object(u.a)(e,d.c);if(l&&(o+="OriginalSrc: "+l+"\n"),n){var f=n.status,m=n.contentType,g=n.detectedFormat,h=n.first10BytesBase64;f&&(o+="Status: "+f+"\n"),m&&(o+="ContentType: "+m+"\n"),g&&(o+="DetectedFormat: "+g+"\n"),h&&(o+="First10Bytes: "+h+"\n"),o+="MimeMatch: "+n.mimeMatched}r&&r>0&&(o+="Retried: "+r),T.d.error("Error loading inline image: "+t+".\n"+o)}function x(e,t){void 0===t&&(t=!0);var n=Object(D.n)();return t?n+Object(D.l)()+k+e:n+R+e}var E=n(18),U=new RegExp("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}","i");function M(e,t,n,r,o,i,a,u,c,s,d,l,f,m){void 0===r&&(r=""),void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a=""),void 0===u&&(u=""),void 0===c&&(c=""),void 0===s&&(s=""),void 0===d&&(d=""),void 0===l&&(l=""),void 0===f&&(f=""),void 0===m&&(m="");var g=[e,t,n,r,o,i,a=function(e){if(!e)return"";var t="",n=e,r=e.indexOf(":");return r>=0&&(t=e.slice(0,r+1),n=e.slice(r+1)),t+(n=n.match(U)?"<GUID>":"<PII>")}(a),u,c,s,d,l,f,m];Object(E.o)("InlineImageLoadError",g),T.d.info("InlineImageLoadError: "+g)}var P,B=n(6),F="DataUri_Success",L="DataUri_RequestFailed",G="DataUri_OnError",N=new RegExp("^data:[a-z]+\\/[a-z-]+;","i");function W(e,t,n,r,o,i){n?r&&r(e):o&&o(e);var a=t.imageType,u=t.perfDataPoint,c=t.howLoad,s=t.context,d=t.loaderCode,l=t.originalSrc,m=t.owaDomain,g=t.downloadDomain,h=t.responseData,v=h.responseCode,p=h.status,b=h.contentType,w=h.detectedFormat,y=h.first10BytesBase64,O=h.mimeMatched,C=n?"":i||p||v.toString();u&&f(u,a,c,C,s,d,n?F:""),n||(M(a,c,C,v.toString(),s,d,l,b,m,g,w,y,O.toString()),Object(B.e)("mc-imageDiagnostics")&&S(e,C,h))}!function(e){e[e.NotStarted=0]="NotStarted",e[e.Pending=1]="Pending",e[e.Completed=2]="Completed"}(P||(P={}));var q=4,H=3,$=1e3,V=2e4,z="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7",X="RetryTimedOut",J=[],Z=null;function Q(e,t,n,r,o){var i={image:e,url:t,retryContext:n,currentRetry:0,status:P.NotStarted,whenQueued:Date.now(),onSuccessCallback:r,onErrorCallback:o};Y(i),J.push(i),Z||(Z=setTimeout(function(){return function e(){if(J.length>0){var t=Date.now(),n=[],r=[],o=[];J.forEach(function(e){e.status!=P.Completed&&(t-e.whenQueued>V?K(e,!1,X):e.status==P.Pending?(o.push(e),n.push(e)):e.status==P.NotStarted&&(r.push(e),n.push(e)))});var i=q-o.length;i>0&&r.length>0&&(u=r.slice(0,Math.min(i,r.length)))&&u.length>0&&u.forEach(function(e){e.currentRetry++,e.status=P.Pending,_(e.image)?j(e.image,e.url,function(t){K(e,!0)},function(t){e.currentRetry>=H?K(e,!1):Y(e)}):K(e,!1,a.k+"_R"+e.currentRetry)}),J=n}var u;Z=J.length>0?setTimeout(function(){return e()},$):null}()},$))}function Y(e){e.status=P.NotStarted,e.image.src=z}function K(e,t,n){if(void 0===n&&(n=""),e.status!=P.Completed){var r=e.image,o=e.onSuccessCallback,i=e.onErrorCallback,a=e.currentRetry;t?o&&o(r):i&&i(r);var u=e.retryContext,c=u.imageType,s=u.perfDataPoint,d=u.howLoad,l=u.context,m=u.loaderCode,g=u.originalSrc,h=u.owaDomain,v=u.downloadDomain,p=u.responseData,b=p.responseCode,w=p.status,y=p.contentType,O=p.detectedFormat,C=p.first10BytesBase64,_=p.mimeMatched,A=t?"":n||w||b.toString();s&&f(s,c,d,A,l,m,a.toString()),t||(M(c,d,A,b.toString(),l,m,g,y,h,v,O,C,_.toString(),a.toString()),Object(B.e)("mc-imageDiagnostics")&&200==b&&S(r,A,p)),e.status=P.Completed}}var ee="InlineImageLoad";function te(){return new E.a(ee)}var ne="ZeroNaturalWidth";function re(e,t,n,r,o,i){void 0===i&&(i=!1);var c,s=te(),l=null!=(c=t.match(O))&&c.length>1&&c[1].toLowerCase()!=C,m=l?a.o:a.q,g=Object(u.a)(e,d.c),h=Object(u.a)(e,a.c);0==h.length&&(h=a.r);var v="";l&&(e.setAttribute(a.a,a.g),v=a.g),T.d.info("InlineImage: Load attachment, Url: "+t+", crossDomain: "+l+", crossOrigin: "+v);var p=l?C:"",b=l?function(e){var t=e.match(O);return null!=t&&t.length>1?t[1].toLowerCase():C}(t):"";j(e,t,function(e){r&&r(e);var t=e.naturalWidth>0;f(s,h,m,t?"":ne,n,v),t||M(h,m,ne,"",n,v,g,"",p,b)},function(u){var c=a.n;n!=a.h||_(u)?w(t,l).then(function(d){if(i&&200==d.responseCode&&d.mimeMatched)Q(u,t,{imageType:h,howLoad:m,context:n,loaderCode:v,originalSrc:g,owaDomain:p,downloadDomain:b,responseData:d,perfDataPoint:s},r,o);else if(d.status==a.l&&d.expectedMime)!function(e,t,n,r,o){var i=new XMLHttpRequest;i.onload=function(){var t=new FileReader;t.onloadend=function(){if(t.result){var i=t.result.replace(N,"data:"+n.responseData.expectedMime+";");j(e,i,function(){return W(e,n,!0,r,o)},function(){return W(e,n,!1,r,o,G)})}},t.readAsDataURL(i.response)},i.ontimeout=i.onerror=function(){W(e,n,!1,r,o,L)},e.crossOrigin==a.g&&(i.withCredentials=!0),i.open("GET",t,!0),i.responseType="blob",i.send()}(u,t,{imageType:h,howLoad:m,context:n,loaderCode:v,originalSrc:g,owaDomain:p,downloadDomain:b,responseData:d,perfDataPoint:s},r,o);else{o&&o(u);var l=d.status,w=d.responseCode,y=d.contentType,O=d.detectedFormat,C=d.first10BytesBase64,_=d.mimeMatched;c=l||w.toString(),f(s,h,m,c,n,v),M(h,m,c,w.toString(),n,v,g,y,p,b,O,C,_.toString()),Object(B.e)("mc-imageDiagnostics")&&(404!=w&&0!=w&&200!=w||S(e,c,200==w?d:null))}}):(o&&o(u),c=a.k,f(s,h,m,c,n,v),M(h,m,c,"",n,v,g,"",p,b))})}var oe=n(86),ie=n(7509),ae=n(1769),ue="naturalwidth",ce="naturalheight",se="width",de="height",le="px";function fe(e,t,n){void 0===n&&(n=!0);var o=Object(u.a)(e,d.a),i=Object(u.a)(e,a.c),c=Object(u.a)(e,d.c),s=c.length>0?r.a.inlineImages[c]:null;if(0==o.length&&!s)return!1;if(s){var l=te();j(e,s,function(e){ge(e),f(l,i,a.p,"",t)},function(e){f(l,i,a.p,a.n,t),M(i,a.p,a.n,"",t,"",c,"")})}else{var m={Id:decodeURIComponent(o),mailboxInfo:Object(ie.a)(e)},g=Object(ae.a)(m.mailboxInfo.routingKey,m,1);if(null!=g&&g.length>0){var h=e.style.display,v=n?function(e){var t="50px",n="50px";e.style.width&&e.style.height?(t=e.style.width,n=e.style.height):e.getAttribute(se)&&e.getAttribute(de)?(t=e.getAttribute(se)+le,n=e.getAttribute(de)+le):e.getAttribute(ue)&&e.getAttribute(ce)&&(t=e.getAttribute(ue)+le,n=e.getAttribute(ce)+le);var r=Object(oe.g)(),o=document.createElement("div");if(o.style.display="inline-block",o.style.width=t,o.style.height=n,o.style.maxWidth="100%",o.style.maxHeight=e.style.maxHeight,o.style.borderWidth="1px",o.style.borderStyle="dashed",o.style.borderColor=r.themePrimary,o.style.boxSizing="border-box",e.style.display="none",e.parentNode.insertBefore(o,e),e.getAttribute(ue)&&e.getAttribute(ce)){var i=Math.min(parseInt(o.style.width),o.offsetWidth);o.style.height=Math.ceil(i/parseInt(e.getAttribute(ue))*parseInt(e.getAttribute(ce))).toString()}return o}(e):null;re(e,g,t,function(e){me(v),ge(e),e.style.display=h},function(e){me(v),e.style.display="inline"},!0)}else M(i,"",a.m,"",t,"",c,""),e.removeAttribute("src")}return!0}function me(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ge(e){var t=e.style;e.hasAttribute("width")||t.width||e.hasAttribute("height")||t.height||(t.maxWidth="100%",t.height="auto")}var he=n(1277);var ve=n(0),pe=n(242),be=n(70),we=n(6773),ye="https://imgproxy.services.web.outlook.com/proxy/?u={0}&t={1}",Oe="ImageProxyModelD",Ce="https://outlookimageproxy.azurewebsites.net";function _e(e,t){return new Promise(function(n){e.onload=function(t){Ae(e),n(!0)},e.onerror=function(t){Ae(e),n(!1)},e.src=t})}function Ae(e){e.onload=null,e.onerror=null}function je(e){return t=e,n=Object(u.a)(t,d.c),r=Object(u.a)(t,a.b),!(!n||!r)&&(Object(he.a)()?Object(B.e)("rp-imageProxyOnModelD")?function(e,t){ve.__awaiter(this,void 0,void 0,function(){var n,r,o,i,a,c,s,l,f,m;return ve.__generator(this,function(g){switch(g.label){case 0:return n=e,r=!1,t?[4,Object(we.a)(e)]:[3,3];case 1:return(o=g.sent())?[4,_e(e,o)]:[2];case 2:g.sent()&&(r=!0),n=document.createElement("img"),g.label=3;case 3:return(i=Object(u.a)(e,d.c))?(a=new E.a(Oe),c=ve.__read(Object(pe.getAccessTokenforResourceAsLazy)(Ce),2),s=c[0],l=c[1],s?[3,5]:[4,l]):[2];case 4:s=g.sent(),g.label=5;case 5:return f=Object(be.a)(ye,encodeURIComponent(i),encodeURIComponent(s)),[4,_e(n,f)];case 6:return m=g.sent(),t?r&&m?a.end():(a.addCustomData({resultB:r,resultD:m}),a.endWithError("ServerError")):m?a.end():a.endWithError("ServerError"),[2]}})})}(e,!0):function(e){ve.__awaiter(this,void 0,void 0,function(){var t;return ve.__generator(this,function(n){switch(n.label){case 0:return[4,Object(we.a)(e)];case 1:return(t=n.sent())?(e.src=t,[2,!0]):[2,!1]}})})}(e):e.src="",!0);var t,n,r}var Ie="data-imageerror",De="data-outlook-trace",Te="CidTildeWrd",ke="AttNotFound",Re=new RegExp("^cid:\\s?~WRD","i"),Se=new RegExp("^cid:","i"),xe=new RegExp("f:([0-9]+)","i"),Ee=new RegExp("t:([0-9]+)","i");function Ue(e,t){var n=Object(u.a)(e,Ie),r=Object(u.a)(e,a.c),o=Object(u.a)(e,d.c);if(n&&n.length>0){var i=n;if(o&&Re.test(o))i=Te;else if(n==ke){var c=function(e){var t="";if(e){var n=xe.exec(e),r=Ee.exec(e);if(n&&2==n.length&&r&&2==r.length){var o=parseInt(n[1]),i=parseInt(r[1]);isNaN(o)||isNaN(i)||(0==o?t="PreEWS":o>0&&(o<i?t="MidEWS":o==i&&(t="PostEWS")))}}else t="NoTrace";return t}(Object(u.a)(e,De));c&&(i=ke+"_"+c)}!function(e,t,n,r,o,i){void 0===n&&(n=""),void 0===r&&(r=""),void 0===o&&(o=""),void 0===i&&(i="");var a=new E.a(ee),u=[e,t,n,r,o,i];a.addCustomData(u),n&&n.length>0?a.endWithError("ClientError"):a.end()}(r,"",i,t),M(r,"",i,"",t,"",o,""),e.onload=null,e.removeAttribute("src"),Object(B.e)("mc-imageDiagnostics")&&(n!=ke&&0!=n.indexOf("NotImage")||S(e,n))}else if(o&&!Se.test(o)){var s=te();j(e,o,function(e){f(s,r,"","",t)},function(e){f(s,r,"",a.n,t),w(o).then(function(e){var n=e.status,i=e.responseCode,a=e.contentType,u=n||i.toString();M(r,"",u,i.toString(),t,"",o,a)})})}}function Me(e,t,n){var r=t||"";fe(e,r,!!n)||je(e)||Ue(e,r)}function Pe(e){var t=[e];Object(E.o)("InlineImageAttachmentUpload",t),T.d.info("InlineImageAttachmentUpload: "+t)}n.d(t,"clearInlineImageStore",function(){return i}),n.d(t,"cacheInlineImage",function(){return l}),n.d(t,"loadFromAttachmentServiceUrl",function(){return re}),n.d(t,"loadFromAttachment",function(){return fe}),n.d(t,"loadFromProxy",function(){return je}),n.d(t,"loadFromImageTag",function(){return Me}),n.d(t,"logImageLoadError",function(){return M}),n.d(t,"logImageUpload",function(){return Pe}),n.d(t,"tryCreateDataURIFromImage",function(){return c.a})},1394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(875),o=n(876),i=n(877),a=n(308);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:o.default({TimeZoneDefinition:i.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return a.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},1762:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h});var r=n(0),o=n(4),i=n(2444),a=n(2456),u=n.n(a),c=n(10),s=n(18),d=n(11),l=Object(i.b)({timeBetweenRetryInMS:function(){return 3e4}}),f=function(){function e(e,t,n){var i=this;this.downloadTokenRefreshMinutes=e,this.downloadUrlBase=t,this.refreshDownloadTokenAndRetryInCaseOfFailure=function(){return r.__awaiter(i,void 0,void 0,function(){function e(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u()()];case 1:return[2,t.sent()];case 2:throw e=t.sent(),d.d.warn("Unable to get the download token "+e),e;case 3:return[2]}})})}var t,n,o,i,a=this;return r.__generator(this,function(u){switch(u.label){case 0:if(this.isRefreshingDownloadToken)return[3,4];this.isRefreshingDownloadToken=!0,t=0,n=l(function(){return r.__awaiter(a,void 0,void 0,function(){var n;return r.__generator(this,function(r){switch(r.label){case 0:return t++,n=this,[4,e()];case 1:return n.downloadToken=r.sent(),this.isRefreshingDownloadToken=!1,[2]}})})}).retriableFunc,o=new s.b("AttachmentRefreshDownloadToken"),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,n()];case 2:return u.sent(),o.addCustomData([t]),o.end(),[3,4];case 3:return i=u.sent(),d.d.warn("Retry to refresh token failed: "+i),o.addCustomData([t]),o.endWithError("ServerError",i),this.isRefreshingDownloadToken=!1,[3,4];case 4:return[2]}})})},this.useDownloadUrlBase=!Object(o.g)(this.downloadUrlBase),this.downloadToken=n,this.downloadTokenRefreshMinutes<1&&(this.downloadTokenRefreshMinutes=1),this.useDownloadUrlBase&&setInterval(this.refreshDownloadTokenAndRetryInCaseOfFailure,6e4*this.downloadTokenRefreshMinutes)}return e.getInstance=function(){if(!e.instance){var t=Object(c.a)().ApplicationSettings;e.instance=new e(t.DownloadTokenRefreshMinutes,t.DownloadUrlBase,t.FirstDownloadToken)}return e.instance},e.resetInstanceForTesting=function(){e.instance=null},e.prototype.getDownloadToken=function(){return this.downloadToken},e.prototype.getUseDownloadUrlBase=function(){return this.useDownloadUrlBase},e.prototype.getDownloadUrlBase=function(){return this.downloadUrlBase},e}();function m(){return f.getInstance().getDownloadToken()}function g(){return f.getInstance().getUseDownloadUrlBase()}function h(){return f.getInstance().getDownloadUrlBase()}},1769:function(e,t,n){"use strict";var r=n(2445);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b});var o=n(1762);n.d(t,"c",function(){return o.a})},2444:function(e,t,n){"use strict";function r(e){void 0===e&&(e={}),function(e){e.timeBetweenRetryInMS=e.timeBetweenRetryInMS||function(){return 6e4}}(e);var t=e.maximumAttempts,n=e.timeBetweenRetryInMS;return function(e){var r=0,o=!1,i=function(a,u){o?u(new Error("The function retry was cancelled")):(r++,e().then(function(e){return a(e)}).catch(function(e){t&&r>=t?u(e):setTimeout(function(){return i(a,u)},n(r))}))};return{retriableFunc:function(){return new Promise(function(e,t){return i(e,t)})},cancel:function(){return o=!0}}}}function o(e){return function(t){return Math.pow(2,t)*e}}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o})},2445:function(e,t,n){"use strict";var r=n(75),o=n(4),i=n(234),a="/owa/",u="service.svc/s/GetFileAttachment?id={0}",c="service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}",s="service.svc/s/GetAttachmentThumbnail?id={0}&thumbnailType=2",d="service.svc/s/GetReferenceAttachment?attachmentId={0}&location={1}&isImagePreview=True",l="service.svc/s/GetAttachmentThumbnail?id={0}",f="pdfprint.aspx?id={0}",m="pdfprint.aspx?id={0}&location={1}",g=[".bmp",".gif",".jpe",".jpeg",".jpg",".jfif",".dib",".png",".psd",".tiff",".tif"];var h=n(1762),v=n(44),p=n(125),b=n(15);function w(e,t,n,u,s,l,f,h,v){var p;switch(void 0===s&&(s=0),void 0===l&&(l=0),void 0===f&&(f=!0),void 0===h&&(h=null),void 0===v&&(v=null),n){case 0:p=c;break;case 3:p=m;break;case 1:if(!function(e){if(!e)return!1;var t=null,n=e.lastIndexOf(".");return n>0&&(t=e.substr(n).toLowerCase()),!!t&&g.indexOf(t.toLowerCase())>=0}(h))return null;p=d;break;default:Object(r.a)(n)}var b=u?l:s;!b&&s&&(b=s);var w=Object(o.b)("{0}{1}{2}&permissionLevel={3}",a,v,Object(o.b)(p,encodeURIComponent(e.Id),encodeURIComponent(t)),b);f&&(w=w+"&X-OWA-CANARY="+Object(i.getOwaCanaryCookie)());return w}function y(e,t,n,c,d){var m;switch(void 0===c&&(c=!1),void 0===d&&(d=!0),n){case 0:m=u;break;case 1:m=s;break;case 2:m=l;break;case 3:m=f;break;default:return Object(r.a)(n)}return Object(o.g)(m)?null:Object(o.b)("{0}{1}{2}",function(e,t,n,r,u){if(void 0===u&&(u=!1),!t||!t.Id)return null;var c=Object(o.b)(n,encodeURIComponent(t.Id));if(!Object(h.c)()||u&&"Firefox"===Object(p.a)().browser)return a+c+"&X-OWA-CANARY="+Object(i.getOwaCanaryCookie)();var s="{0}{1}/{2}&owa={3}&scriptVer={4}";Object(v.a)()&&(s+="&isc=1");var d=Object(o.b)(s,Object(h.b)(),e,c,window.location.hostname,Object(b.f)()||"unofficial");return r&&(d+="&X-OWA-CANARY="+Object(i.getOwaCanaryCookie)(),d+="&token="+Object(h.a)()),d}(e,t,m,d,3===n),c?"&isDownload=true":"","&animation=true")}n.d(t,"b",function(){return w}),n.d(t,"a",function(){return y})},2456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56);t.default=function(e){return r.makeServiceRequest("GetAttachmentDownloadToken",{},e)}},3646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),o=n(3971);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetClientAccessToken",e,t)}},3647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetClientAccessTokenRequest:#Exchange"},e)}},3971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetClientAccessTokenJsonRequest:#Exchange"},e)}},4331:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return s}),n.d(t,"r",function(){return d}),n.d(t,"n",function(){return l}),n.d(t,"m",function(){return f}),n.d(t,"k",function(){return m}),n.d(t,"l",function(){return g}),n.d(t,"h",function(){return h}),n.d(t,"p",function(){return v}),n.d(t,"o",function(){return p}),n.d(t,"q",function(){return b}),n.d(t,"j",function(){return w}),n.d(t,"i",function(){return y});var r="src",o="data-imagetype",i="crossorigin",a="data-itemid",u="data-inetid",c="data-imageproxyendpoint",s="use-credentials",d="AttachmentByCid",l="OnError",f="NullAttachmentUrl",m="DOMDetached",g="ImageMismatch",h="RP",v="DataUri",p="CrossDomain",b="SameDomain",w="ImageProxySkipForConsumerChild",y="ImageProxyConnectorsAuthTokenFalse"},4363:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(18),o="2d",i="canvas",a="image/png";function u(e){try{var t=document.createElement(i),n=e.naturalWidth,u=e.naturalHeight;if(n>0&&u>0||(Object(r.o)("CreateDataURIMissingNaturalDimensions"),n=e.width,u=e.height),n>0&&u>0)return t.width=n,t.height=u,t.getContext(o).drawImage(e,0,0),t.toDataURL(a)}catch(e){}return null}},4381:function(e,t,n){"use strict";function r(e,t){return e.hasAttribute(t)?e.getAttribute(t):""}n.d(t,"a",function(){return r})},443:function(e,t,n){"use strict";var r=n(904),o=n(34),i={};function a(e){var t=e.toLocaleLowerCase();if(!i[t]){var n={type:o.a.GroupMailbox,deprecatedMailboxId:e,primarySmtpAddress:e,routingKey:Object(o.c)()+e,returnModernConversationItems:!1,requestOptions:Object(r.a)(e)};i[t]=n}return i[t]}var u=n(2),c=Object(u.action)("EDIT_GROUP_SUCCESS",function(e,t){return{groupSmtp:e,photoUrl:t}}),s=Object(u.action)("ADD_GROUP_MEMBER_SUCCESS",function(e){return{groupSmtp:e}}),d=Object(u.action)("POPUP_OPENED",function(){return{isOpen:!0}}),l=Object(u.action)("POPUP_CLOSED",function(){return{isOpen:!1}}),f=Object(u.action)("DELETE_GROUP_SUCCESS",function(e){return{groupSmtp:e}});n.d(t,"n",function(){return r.a}),n.d(t,"m",function(){return a}),n.d(t,"l",function(){return c}),n.d(t,"j",function(){return s}),n.d(t,"q",function(){return d}),n.d(t,"p",function(){return l}),n.d(t,"k",function(){return f}),n.d(t,"r",function(){return"SwitchGroup"}),n.d(t,"o",function(){return"NavigateFromMeToWe"}),n.d(t,"g",function(){return"GroupHeader_SendEmail_Button_Clicked"}),n.d(t,"c",function(){return"GroupHeader_Email_Button_Clicked"}),n.d(t,"d",function(){return"GroupHeader_Files_Button_Clicked"}),n.d(t,"a",function(){return"GroupHeader_Calendar_Button_Clicked"}),n.d(t,"e",function(){return"GroupHeader_Notebook_Button_Clicked"}),n.d(t,"f",function(){return"GroupHeader_Planner_Button_Clicked"}),n.d(t,"i",function(){return"GroupHeader_Site_Button_Clicked"}),n.d(t,"b",function(){return"GroupHeader_CustomLeaveGroup_Button_Clicked"}),n.d(t,"h",function(){return"GroupHeader_Settings_Button_Clicked"})},5529:function(e,t,n){"use strict";var r,o,i,a=n(0),u=n(6),c=n(44),s=n(242),d=n(18),l=n(3647),f=n.n(l),m=n(3646),g=n.n(m),h=n(1394),v=n(407),p="GetConnectorsLTITokenFailure",b="GetConnectorsLTITokenException",w="GetConnectorsLTITokenNull",y="ConnectorsLtiToken",O="40B852DF-9693-420D-AA7D-10072C9CE077",C=5;function _(){return a.__awaiter(this,void 0,void 0,function(){var e;return a.__generator(this,function(t){switch(t.label){case 0:return(e=function(){if(r){var e=Date.now()-o;if(e<1e3*(r.TTL-C)*60)return r.TokenValue}return null}())?[3,2]:[4,A()];case 1:e=t.sent(),t.label=2;case 2:return[2,e]}})})}function A(){return i||(i=new Promise(function(e,t){var n={Header:Object(h.getJsonRequestHeader)(),Body:f()({TokenRequests:[{__type:"TokenRequest:#Exchange",Id:O,TokenType:"Connectors"}]})};g()(n).then(function(n){i=null,n&&"Success"===n.Body.ResponseMessages.Items[0].ResponseClass?(r=n.Body.ResponseMessages.Items[0].Token,o=Date.now(),function(e){if(!e)throw j(w),new Error("getClientAuthToken null");v.set(y,e,{path:"/actions/"})}(r.TokenValue),e(r.TokenValue)):(j(p),t(new Error("getClientAuthToken failed")))}).catch(function(e){i=null,j(b),t(new Error("getClientAuthToken exception: "+e))})})),i}function j(e){Object(d.o)(e),r=void 0}var I="https://outlook.office365.com/connectors",D="User.Read";function T(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(e){switch(e.label){case 0:return!Object(u.e)("rp-actionableMessages-aad-token")||Object(c.a)()?[3,2]:[4,R()];case 1:return[2,e.sent()];case 2:return Object(u.e)("rp-actionableMessages-msa-token")&&Object(c.a)()?[4,k()]:[3,4];case 3:return[2,e.sent()];case 4:return[4,_()];case 5:return[2,e.sent()]}})})}function k(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(e){switch(e.label){case 0:return[4,Object(s.getDelegationTokenForOwa)(D)];case 1:return[2,e.sent()]}})})}function R(){return a.__awaiter(this,void 0,void 0,function(){var e,t,n;return a.__generator(this,function(r){switch(r.label){case 0:return e=a.__read(Object(s.getAccessTokenforResourceAsLazy)(I),2),t=e[0],n=e[1],t?[3,2]:[4,n];case 1:t=r.sent(),r.label=2;case 2:return[2,t]}})})}n.d(t,"a",function(){return T}),n.d(t,"b",function(){return _})},6773:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(0),o=n(4331),i=n(5529),a=n(159),u=n(10),c=n(18),s=n(4381),d=n(548),l="data-connectorsauthtoken",f="u",m="i",g="d",h="ClientId";function v(e){return r.__awaiter(this,void 0,void 0,function(){var t,n,i,g;return r.__generator(this,function(r){switch(r.label){case 0:return t=Object(s.a)(e,d.c),n=Object(s.a)(e,o.b),i=Object(s.a)(e,l),t&&n?Object(u.a)().IsConsumerChild?(Object(c.o)(o.j),[2,t]):"1"!=i?[3,2]:[4,p(n,t)]:[2,""];case 1:return g=r.sent(),[3,3];case 2:g=function(e,t){var n=Object(a.getCookie)(h);if(!n)return null;if("/actions/ei"==e.toLowerCase())return Object(c.o)(o.i),null;return e+"?"+f+"="+encodeURIComponent(t)+"&"+m+"="+encodeURIComponent(n)}(n,t),r.label=3;case 3:return[2,g]}})})}function p(e,t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Object(i.b)()];case 1:return n.sent(),[3,3];case 2:return n.sent(),[2,null];case 3:return[2,e+"?"+f+"="+encodeURIComponent(t)+"&"+g+"="+encodeURIComponent((new Date).toISOString())]}})})}},7509:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(4),o=n(443),i=n(34),a=n(4381),u="explicitlogon";function c(e){var t=Object(a.a)(e,u);return Object(r.g)(t)?Object(i.e)():Object(o.m)(t)}},904:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(144);function o(e){return{headers:Object(r.f)(e,"GroupMailbox")}}}},0,[514,105,24,116,495]]);
//# sourceMappingURL=owa.InlineImageLoader.js.map
self.scriptsLoaded['owa.InlineImageLoader.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.InlineImageLoader.js'] = (new Date()).getTime();