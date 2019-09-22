self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ResizeHandle.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[387],{2346:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(1),o=i(1335),s=i(331),u=i(9476),a=i(115).bind(u),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getWidthDimensions=function(e){var i=e.parentElement.clientWidth;return{min:t.convertSettingToPixels(+e.getAttribute("data-min-width")||0,i),max:t.convertSettingToPixels(+e.getAttribute("data-max-width")||window.outerWidth,i),current:e.offsetWidth}},t.getHeightDimensions=function(e){var i=e.parentElement.clientHeight;return{min:t.convertSettingToPixels(+e.getAttribute("data-min-height")||0,i),max:t.convertSettingToPixels(+e.getAttribute("data-max-height")||window.outerHeight,i),current:e.offsetHeight}},t.onMouseDown=function(e){e.preventDefault(),e.stopPropagation();var i=t.props,n=i.onResize,r=i.onResizing,s=i.direction,a=i.setNewDimensions,d=e.currentTarget,l=s===o.a.vertical,p=d.previousSibling,m=d.nextSibling,g=l?t.getWidthDimensions:t.getHeightDimensions,c=g(p),h=g(m),v=Math.max(c.min-c.current,h.current-h.max),X=Math.min(c.max-c.current,h.current-h.min);if(t.shouldFlipForRtl()){var w=v;v=-X,X=-w}var _=l?e.clientX:e.clientY,b=0;d.classList.add(u.dragging);var f,x=function(e){var t;if(t=l?e.clientX:e.clientY,b=Math.min(X,Math.max(v,t-_)),l?d.style.left=b+"px":d.style.top=b+"px",r){var i=c.current+b,n=h.current-b;r(i,n)}},y=function(e){f(),t.shouldFlipForRtl()&&(b=-b);var i=c.current+b,r=h.current-b;a&&(l?(p.style.width=i+"px",m.style.width=r+"px"):(p.style.height=i+"px",m.style.height=r+"px")),n&&n(i,r)},j=function(e){f()};f=function(){document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",j),d.style.left=d.style.top="",d.classList.remove(u.dragging)},document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseup",y),document.body.addEventListener("mouseleave",j)},t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=(e.direction,e.onResize,e.onResizing,e.setNewDimensions,n.__rest(e,["direction","onResize","onResizing","setNewDimensions"])),i=a("resizeHandle",{horizontal:this.props.direction===o.a.horizontal,vertical:this.props.direction===o.a.vertical},this.props.className);return r.createElement("div",n.__assign({},t,{className:i,onMouseDown:this.onMouseDown}))},t.prototype.convertSettingToPixels=function(e,t){return e>=1?e:t*e},t.prototype.shouldFlipForRtl=function(){return this.props.direction===o.a.vertical&&Object(s.a)()},t.defaultProps={direction:o.a.vertical,setNewDimensions:!1},t}(r.Component);i.d(t,"ResizeHandle",function(){return d})},9476:function(e,t,i){var n=i(9477),r=i(31);"string"==typeof n&&(n=[[e.i,n]]);for(var o=0;o<n.length;o++)r.loadStyles(n[o][1],!1);n.locals&&(e.exports=n.locals)},9477:function(e,t,i){(t=e.exports=i(30)(!1)).push([e.i,'._38Xj5deXbp12RmYWi1X4iN{position:relative;z-index:2;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}html[dir] ._38Xj5deXbp12RmYWi1X4iN{background:transparent}._38Xj5deXbp12RmYWi1X4iN._2DHg1um6H9inv8qD9i8ppA{height:4px;cursor:row-resize}html[dir] ._38Xj5deXbp12RmYWi1X4iN._2DHg1um6H9inv8qD9i8ppA{margin-top:-2px;margin-bottom:-2px}._38Xj5deXbp12RmYWi1X4iN._2DHg1um6H9inv8qD9i8ppA._2yg6uZwwZp4KQsgiHSjrus:before{cursor:row-resize}._38Xj5deXbp12RmYWi1X4iN._2L6gCwJsrmGgd_DLITrMFL{width:4px;cursor:col-resize}html[dir=ltr] ._38Xj5deXbp12RmYWi1X4iN._2L6gCwJsrmGgd_DLITrMFL,html[dir=rtl] ._38Xj5deXbp12RmYWi1X4iN._2L6gCwJsrmGgd_DLITrMFL{margin-left:-2px;margin-right:-2px}._38Xj5deXbp12RmYWi1X4iN._2L6gCwJsrmGgd_DLITrMFL._2yg6uZwwZp4KQsgiHSjrus:before{cursor:col-resize}._38Xj5deXbp12RmYWi1X4iN._2yg6uZwwZp4KQsgiHSjrus{z-index:100}html[dir] ._38Xj5deXbp12RmYWi1X4iN._2yg6uZwwZp4KQsgiHSjrus{background:"[theme:neutralLight, default:#eaeaea]"}._38Xj5deXbp12RmYWi1X4iN._2yg6uZwwZp4KQsgiHSjrus:before{content:" ";position:fixed;z-index:99;top:0;bottom:0}html[dir=ltr] ._38Xj5deXbp12RmYWi1X4iN._2yg6uZwwZp4KQsgiHSjrus:before,html[dir=rtl] ._38Xj5deXbp12RmYWi1X4iN._2yg6uZwwZp4KQsgiHSjrus:before{left:0;right:0}',""]),t.locals={resizeHandle:"_38Xj5deXbp12RmYWi1X4iN",horizontal:"_2DHg1um6H9inv8qD9i8ppA",dragging:"_2yg6uZwwZp4KQsgiHSjrus",vertical:"_2L6gCwJsrmGgd_DLITrMFL"}}}]);
//# sourceMappingURL=owa.ResizeHandle.js.map
self.scriptsLoaded['owa.ResizeHandle.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ResizeHandle.js'] = (new Date()).getTime();