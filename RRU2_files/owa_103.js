self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.HeaderCharms.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[269],{1142:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"g",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"a",function(){return h});var r=n(3),i=n(6),a=n(1853);n.d(t,"b",function(){return a.a});var c=n(1852);n.d(t,"d",function(){return c.a});var u=new r.c(function(){return Promise.all([n.e(4),n.e(5),n.e(417)]).then(n.bind(null,2965))}),o=new r.b(u,function(e){return e.initializeSkypeForBusiness});function s(){Object(i.e)("fwk-skypeBusinessV2")&&o.import().then(function(e){return e()})}var f=new r.b(u,function(e){return e.tryRegisterForPresenceUpdates}),d=new r.b(u,function(e){return e.startChat}),l=new r.a(u,function(e){return e.setIsChatCalloutShown}),h=Object(r.d)(u,function(e){return e.UcmaChatView})},1314:function(e,t,n){"use strict";var r=n(2),i=Object(r.createStore)("SkypeStore",{unreadConversationCount:0,isRecentsInitialized:!1,isSwcInitialized:!1,isGlimpseOpen:!1})();t.a=i},1326:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(6),i=n(392);function a(){return Object(r.e)("rp-skypeInTabs")&&1==Object(i.b)()}},1365:function(e){e.exports={a:"ZGb"}},1366:function(e){e.exports={a:"WGb"}},1438:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(7),i=n(2),a={signInState:0,presences:new r.ObservableMap({}),processingManualSignIn:!1,isRetrySignInAllowed:!0},c=Object(i.createStore)("presenceStore",a),u=c();t.a=u},1852:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1438);function i(){return 3==r.a.signInState}},1853:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1874),i=n(1438),a=n(14),c=n(6);function u(e){if(Object(c.e)("fwk-skypeBusinessV2")&&e){var t=Object(r.b)(e),n=function(e){switch(e){case"Offline":return a.b.offline;case"Away":case"BeRightBack":return a.b.away;case"Busy":case"IdleBusy":return a.b.busy;case"DoNotDisturb":return a.b.dnd;case"Online":case"IdleOnline":return a.b.online;case"None":return a.b.none}}(i.a.presences.get(t));return n||void 0}}},1874:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r="sip:";function i(e){if(!e)return null;var t=e.toLowerCase();return 0!=t.indexOf(r)&&(t=r+t),t}},1942:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(2),i={chats:[],isChatCalloutShown:!1,isMoreChatMenuShown:!1,participantCache:new(n(7).ObservableMap),chatProvider:0},a=Object(r.createStore)("ucmaChatStore",i);a()},2345:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(165),a=n(143),c=n(28),u=Object(c.a)(function(e){return r.createElement(i.a,{title:"Feature Flags",key:"featureflags",icons:{iconName:"Flag"},ariaLabel:"featureflags charm",behavior:{paneComponent:a.e,charm:1}})}),o=n(0),s=n(1365),f=n(9978),d=n(1366),l=n(4),h=n(19),b=n(6),p=n(1142),m=n(5009),C=n(1942),v=n(1438),O=n(54),w=n(726),j="https://teams.microsoft.com",k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.setCharmDiv=function(e){t.charmDiv=O.findDOMNode(e)},t.onDismiss=function(){w.g.importAndExecute(!1)},t.onUcmaDismiss=function(){p.e.importAndExecute(!1)},t.getBadgeCount=function(){return w.f.tryImportForRender()?w.h.unreadConversationCount:null},t.onClickUcmaCharm=function(){p.e.importAndExecute(!Object(C.a)().isChatCalloutShown)},t.onClickNonUcmaCharm=function(){var e=w.h.isGlimpseOpen;w.g.importAndExecute(!e)},t.onClickTeams=function(){window.open(j)},t}return o.__extends(t,e),t.prototype.render=function(){if(!Object(b.e)("fwk-skypeBusinessV2"))return w.h.isSwcInitialized&&this.renderCharm(w.h.isGlimpseOpen,"SkypeLogo",Object(l.a)(s.a),Object(l.a)(f.a),w.h.isGlimpseOpen&&this.renderCharmContent(),this.onClickNonUcmaCharm,this.getBadgeCount);var e=Object(C.a)();switch(e.chatProvider){case 3:case 4:return!Object(b.e)("fwk-skypeSuite")&&3==v.a.signInState&&this.renderCharm(e.isChatCalloutShown,"SkypeForBusinessLogo",Object(l.a)(d.a),Object(l.a)(f.b),e.isChatCalloutShown&&r.createElement(p.a,{onDismiss:this.onUcmaDismiss,target:this.charmDiv}),this.onClickUcmaCharm,m.c);case 5:return!Object(b.e)("fwk-skypeSuite")&&this.renderCharm(!1,"OfficeChat",Object(l.a)(d.a),Object(l.a)(f.b),void 0,this.onClickTeams,this.getBadgeCount);default:return null}},t.prototype.renderCharm=function(e,t,n,a,c,u,o){return r.createElement(i.a,{ref:this.setCharmDiv,key:"skype",icons:{iconName:t,hoverIconName:t},title:n,ariaLabel:n,ariaLabelWithBadgeCount:a,behavior:{isActive:e,content:c,onClick:u},getBadgeCount:o})},t.prototype.renderCharmContent=function(){return r.createElement(w.a,{onDismiss:this.onDismiss,target:this.charmDiv})},t=o.__decorate([h.observer],t)}(r.Component),y=n(718),g=n(4659),S=function(){return o.__spread(Object(g.a)().items.values()).filter(function(e){return!e.isSeen}).length},I=n(82),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onActivityFeedCharmClick=function(){Object(b.e)("fwk-o365shellheader")||Object(I.c)(10)},t}return o.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement(i.a,{key:"activityfeed",icons:{iconName:"Ringer"},ariaLabel:Object(l.a)(y.a),title:Object(l.a)(y.a),behavior:{paneComponent:Object(b.e)("fwk-o365shellheader")?null:a.a,charm:10,onClick:this.onActivityFeedCharmClick},getBadgeCount:S}))},t=o.__decorate([h.observer],t)}(r.Component);n.d(t,"FeatureFlagsCharm",function(){return u}),n.d(t,"SkypeCharm",function(){return k}),n.d(t,"ActivityFeedCharm",function(){return A})},4659:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(2),i=n(7),a=Object(r.createStore)("activityFeedStore",{firstFetchComplete:!1,isActivityFeedOpen:!1,items:new i.ObservableMap})},5009:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return o});var r=n(1942);function i(){return Object(r.a)().chats.filter(function(e){return 1==e.state||2==e.state})}function a(){return Object(r.a)().chats.filter(function(e){return 0==e.state})}function c(){return Object(r.a)().chats.filter(function(e){return 0==e.state||u(e)>0}).length}function u(e){return e.lastMessageSequence-e.lastReadMessageSequence}function o(){return Object(r.a)().chats.filter(function(e){return 4==e.state})}},718:function(e){e.exports={a:"tFb"}},726:function(e,t,n){"use strict";var r=n(1314),i=n(3),a=n(22),c=n(874),u=n(6),o=n(1326);n.d(t,"a",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"f",function(){return l}),n.d(t,"e",function(){return p}),n.d(t,"d",function(){return m}),n.d(t,"h",function(){return r.a}),n.d(t,"b",function(){return c.a}),n.d(t,"c",function(){return o.a});var s=new i.c(function(){return n.e(416).then(n.bind(null,13703))}),f=Object(i.d)(s,function(e){return e.SkypeGlimpse}),d=new i.a(s,function(e){return e.updateIsGlimpseOpen}),l=new i.b(s,function(e){return e.shouldShowUnreadConversationCount}),h=new i.a(s,function(e){return e.beginSkypeInitialization}),b=new i.a(s,function(e){return e.createOnSwcReadyEvent}),p=new i.a(s,function(e){return e.onNotificationReceived}),m=new i.a(s,function(e){return e.onHideNotificationReceived});Object(a.c)(function(){Object(u.e)("fwk-partner-code-off")||Object(u.e)("fwk-skypeSuite")&&Object(u.e)("fwk-o365shellheader")||!Object(u.e)("fwk-skypeConsumer")||h.importAndExecute(),b.importAndExecute()})},874:function(e,t,n){"use strict";var r=n(2),i=Object(r.actionCreator)("ADD_CHAT_TAB",function(e){return{chatConversationId:e}});t.a=i},9978:function(e){e.exports={b:"XGb",a:"YGb"}}},0,[5,15,40,85,344,2,3,544,53,270,4,417,114,416]]);
//# sourceMappingURL=owa.HeaderCharms.js.map
self.scriptsLoaded['owa.HeaderCharms.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.HeaderCharms.js'] = (new Date()).getTime();