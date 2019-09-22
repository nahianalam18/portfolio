self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailModuleOrchestrator.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[319],{1050:function(n,e,t){"use strict";e.a={TabViewAddTab:{name:"TabViewAddTab",customData:function(n,e,t,r){return[n,e,t]}},TabViewCloseTab:{name:"TabViewCloseTab",customData:function(n,e){return[n.type,n.isShown,n.isActive,e,n.startTime?(new Date).getTime()-n.startTime:0]}},TabViewActivateTab:{name:"TabViewActivateTab",customData:function(n,e){return[n.type,e]},options:{isVerbose:!0}}}},1101:function(n,e,t){"use strict";function r(n){return n&&n.recipients?n.recipients.length:0}t.d(e,"a",function(){return r})},13795:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1905),a=t(88),c=t(362),o=t(882),u=t(2),s=t(1150),f=t(239),d=t(1038),l=t(18),b=Object(u.action)("closeImmersiveReadingPane",function(n){return{source:n}});Object(u.orchestrator)(b,function(n){if(!Object(f.b)())throw new Error("closeImmersiveReadingPane should only be called with reading pane off");var e=Object(c.a)(),t=Object(s.b)(e.tableQuery);if("messageSuggestion"!==t){if("mail"===t){var u=n.source||"Unknown";Object(l.o)("Search_ReadingPaneClosed",[u])}var b=Object(d.a)();if(Object(a.A)(!0),Object(a.B)(!1),b&&1==e.selectedRowKeys.size){var v=r.__spread(e.selectedRowKeys.keys())[0];o.g.importAndExecute(v,e)}}else Object(i.a)("CommandBar")});var v=b,p=t(8),m=t(12),w=Object(p.action)("onReadingPanePositionOptionSaved")(function(){Object(a.A)(!0),Object(a.B)(!Object(f.b)()),m.O.rowInfoForVLV.clear()}),O=t(367),g=Object(p.action)("onReplyOrReplyAllOrForwardMessage")(function(){var n=Object(O.c)();!Object(f.b)()||n&&n.type!=O.a.Primary||(Object(a.B)(!0),Object(a.A)(!1))}),h=t(535),y=t(299),j=t(1767),C=Object(p.action)("mailModuleOrchestrator.onSelectingFolder")(function(){null===y.a.primaryComposeId||Object(j.a)()?Object(f.b)()&&v():h.z.importAndExecute(null)}),S=Object(p.action)("onSelectMessageAd")(function(){Object(a.B)(!0),Object(a.A)(!Object(f.b)())}),A=t(217),I=t(333);function R(n){if(Object(f.b)())switch(n){case I.c.MailList:v();break;case I.c.ReadingPane:case I.c.ConversationAttachmentWell:}Object(A.a)()}I.E.eventManager.on(I.f.CloseEvent,R);var T=t(1402);Object(u.orchestrator)(T.b,function(n){Object(a.A)(!0),Object(a.B)(!Object(f.b)())});t.d(e,"closeImmersiveReadingPane",function(){return v}),t.d(e,"onReadingPanePositionOptionSaved",function(){return w}),t.d(e,"onReplyOrReplyAllOrForwardMessage",function(){return g}),t.d(e,"onSelectingFolder",function(){return C}),t.d(e,"onSelectMessageAd",function(){return S}),t.d(e,"onSxSPreviewPaneClose",function(){return R})},1430:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(171);function i(n,e,t){var i={pathname:n+e,search:t};return r.format(i)}},1516:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(10),i=t(6);function a(){var n=Object(r.a)(),e=n&&n.SessionSettings&&n.SessionSettings.IsExplicitLogon;return(Object(i.e)("rp-3SPeopleSuggestions")||Object(i.e)("rp-linkedInPeopleSuggestions"))&&!e&&n.SessionSettings.IsSubstrateSearchServiceAvailable}},152:function(n,e,t){"use strict";var r;t.d(e,"a",function(){return r}),function(n){n[n.Primary=0]="Primary",n[n.OverflowMenu=1]="OverflowMenu",n[n.SecondaryReadingPane=2]="SecondaryReadingPane",n[n.Compose=3]="Compose",n[n.FloatingChat=4]="FloatingChat"}(r||(r={}))},1525:function(n,e,t){"use strict";t.d(e,"c",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"b",function(){return c});var r=t(1101);function i(n){return n.isDirty||n.toRecipientWell&&n.toRecipientWell.isDirty||n.ccRecipientWell&&n.ccRecipientWell.isDirty||n.bccRecipientWell&&n.bccRecipientWell.isDirty}function a(n){return Object(r.a)(n.toRecipientWell)+Object(r.a)(n.ccRecipientWell)+Object(r.a)(n.bccRecipientWell)}function c(n){return function(n){return!!n.groupId}(n)&&(2==(e=n).operation||e.toRecipientWell.recipients.some(function(n){return n.persona.EmailAddress.EmailAddress.toLowerCase()===e.groupId.toLowerCase()}));var e}},1526:function(n,e,t){"use strict";var r=t(3),i=t(0),a=t(1527),c=t(8),o=Object(c.action)("addSessionMaskedRecipient")(function(n){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(e){return a.a.sessionMaskedRecipients[n]=!0,[2]})})});t.d(e,"b",function(){return s}),t.d(e,"a",function(){return o});var u=new r.c(function(){return t.e(425).then(t.bind(null,13960))}),s=new r.a(u,function(n){return n.execute3SPrimeCall})},1527:function(n,e,t){"use strict";t.d(e,"b",function(){return i});var r=t(2),i=Object(r.createStore)("substratepeoplesuggestions",{sessionMaskedRecipients:[]}),a=i();e.a=a},1531:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(0);function i(n){var e,t,i=[];if(n&&n.recipients)try{for(var a=r.__values(n.recipients),c=a.next();!c.done;c=a.next()){var o=c.value,u=o.persona.EmailAddress;u&&u.ItemId&&"PrivateDL"==u.MailboxType?i.push({Name:u.Name,RoutingType:u.RoutingType,MailboxType:u.MailboxType,ItemId:{Id:u.ItemId.Id,ChangeKey:null},EmailAddressIndex:u.EmailAddressIndex,RelevanceScore:u.RelevanceScore||0}):i.push(o.persona.EmailAddress)}}catch(n){e={error:n}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return i}},1532:function(n,e,t){"use strict";var r=t(219),i=t.n(r),a=t(8);function c(n){n&&(n.isDirty=!1)}e.a=Object(a.action)("updateComposeItemId")(function(n,e,t,r){n&&(n.itemId?n.itemId.ChangeKey=t:n.itemId=i()({Id:e,ChangeKey:t}),r&&(n.lastSaveTimeStamp=r,n.isDirty=!1,c(n.toRecipientWell),c(n.ccRecipientWell),c(n.bccRecipientWell)))})},1533:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(0),i=t(1560);function a(n){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,i.c.import()];case 1:return e=t.sent(),n&&e(n.referenceItemId&&n.referenceItemId.Id),[2]}})})}},1534:function(n,e,t){"use strict";var r=t(2),i=Object(r.createStore)("MRUAttachmentStore",{attachments:[]});e.a=i},1541:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(2),i=Object(r.action)("messageBeingSent")},1542:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(0),i=t(367),a=t(284),c=t(299);function o(n,e){var t,o,u=Object(c.b)();try{for(var s=r.__values(Object(a.a)().tabs),f=s.next();!f.done;f=s.next()){var d=f.value;if(d.type==i.a.Compose&&!d.isShown){var l=u.viewStates.get(d.data);if(l&&l.isInlineCompose&&l.conversationId==n&&(0==l.asyncSendState||e&&6==l.asyncSendState))return l}}}catch(n){t={error:n}}finally{try{f&&!f.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}return null}},1543:function(n,e,t){"use strict";var r=t(2);e.a=Object(r.action)("onInlineComposeSendStateChange",function(n,e){return{viewState:n,isSendPending:e}})},1560:function(n,e,t){"use strict";t.d(e,"c",function(){return c}),t.d(e,"b",function(){return o});var r=t(3),i=t(1534);t.d(e,"a",function(){return i.a});var a=new r.c(function(){return t.e(124).then(t.bind(null,2516))}),c=new r.b(a,function(n){return n.getAttachmentSuggestionsAction}),o=new r.b(a,function(n){return n.createCloudFileFromAttachmentData})},1563:function(n,e,t){"use strict";var r=t(617),i=t(8),a=t(284);e.a=Object(i.action)("setTabIsShown")(function(n,e){if(n.isShown!=e&&(n.isShown=e,n.blink=e,n.isActive&&!e)){var t=Object(a.a)(),i=t.tabs.indexOf(n),c=t.tabs.filter(function(e){return e.id==n.parentTabId&&e.isShown})[0]||function(n,e){e<0&&(e=0);for(var t=e;t<n.length;t++)if(n[t].isShown)return n[t];for(t=e-1;t>=0;t--)if(n[t].isShown)return n[t];return null}(t.tabs,i);c&&Object(r.a)(c)}})},1565:function(n,e,t){"use strict";var r=t(0),i=t(617),a=t(1050),c=t(777),o=t(152),u=t(23),s=t(284),f=1;e.a=Object(u.b)("addTab",a.a.TabViewAddTab)(function(n,e,t,a){var u=Object(c.a)(),d=Object(s.a)(),l={id:o.a[n]+(f++).toString(),isShown:e,isActive:!1,startTime:(new Date).getTime(),parentTabId:u?u.id:null,blink:e,data:a},b=null;switch(n){case o.a.Primary:b=r.__assign({},l,{type:o.a.Primary});break;case o.a.OverflowMenu:b=r.__assign({},l,{type:o.a.OverflowMenu,data:a});break;case o.a.SecondaryReadingPane:b=r.__assign({},l,{type:o.a.SecondaryReadingPane,data:a});break;case o.a.Compose:b=r.__assign({},l,{type:o.a.Compose,data:a});break;case o.a.FloatingChat:b=r.__assign({},l,{type:o.a.FloatingChat,data:a,isChatActive:!1})}d.tabs.push(b),t&&Object(i.a)(d.tabs[d.tabs.length-1])})},1566:function(n,e,t){"use strict";var r=t(8);e.a=Object(r.action)("toggleChatTab")(function(n){n.isChatActive=!n.isChatActive,n.isActive=n.isChatActive,n.blink=!1})},1666:function(n,e,t){"use strict";t.d(e,"d",function(){return o}),t.d(e,"b",function(){return u}),t.d(e,"e",function(){return s}),t.d(e,"c",function(){return f}),t.d(e,"a",function(){return d});var r=t(3),i=t(22),a=new r.c(function(){return Promise.all([t.e(5),t.e(521),t.e(141)]).then(t.bind(null,2529))}),c=new r.a(a,function(n){return n.loadCLPUserLabels}),o=new r.b(a,function(n){return n.showJustificationModal}),u=new r.a(a,function(n){return n.loadItemCLPInfo}),s=new r.b(a,function(n){return n.updateItemCLPInfo}),f=new r.b(a,function(n){return n.logReadCLPLabel}),d=Object(r.d)(a,function(n){return n.CLPSubjectHeaderLabel});Object(i.d)(function(){c.importAndExecute()})},1667:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(3),i=t(22),a=new r.c(function(){return t.e(331).then(t.bind(null,2510))}),c=new r.a(a,function(n){return n.loadSignatureInUserOptions});Object(i.d)(function(){c.importAndExecute()})},1767:function(n,e,t){"use strict";var r=t(2443);t(774),t(32),t(1430);t(2074),t(2241);t.d(e,"a",function(){return r.a})},2074:function(n,e,t){"use strict";var r=t(774),i=t(32),a=t(1430),c=t(66);function o(n,e){if(e){var t=e.displayName?e.displayName+"<"+e.smtpAddress+">":e.smtpAddress;return n?"&"+n+"="+t:t}return""}function u(n,e){return e?"&"+n+"="+e:""}function s(n){if(!n.to||!n.to.smtpAddress)return"";var e=c.parse(Object(i.a)().search.substr(1));return e.mailtouri=function(n){if(!n.to||!n.to.smtpAddress)return"";var e="mailto:"+o(null,n.to),t="";return t+=o("cc",n.cc),t+=o("bcc",n.bcc),t+=u("subject",n.subject),(t+=u("body",n.body))?e+"?"+t.slice(1):e}(n),Object(a.a)(r.e,r.b,"?"+c.stringify(e))}t.d(e,"a",function(){return s})},2241:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var r=t(774),i=t(32),a=t(1430);function c(n){return n?Object(a.a)(r.e,r.f+"/"+encodeURIComponent(n),Object(i.a)().search):""}},2443:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(774);function i(){return(location?location.pathname:"").split("/").indexOf(r.c)>=0}},284:function(n,e,t){"use strict";t.d(e,"a",function(){return c}),t.d(e,"b",function(){return o});var r=t(152),i=t(2),a={tabs:[{id:"primaryTab",type:r.a.Primary,isShown:!0,isActive:!0,blink:!1}],tabBarWidth:0,isOverflowMenuShown:!1},c=Object(i.createStore)("tab",a),o=(c(),c().tabs[0])},299:function(n,e,t){"use strict";var r=t(7),i=t(2),a={viewStates:new r.ObservableMap,primaryComposeId:null,complianceConfigurations:new r.ObservableMap,messageClassifications:new r.ObservableMap,newMessageCreationInProgress:!1},c=Object(i.createStore)("compose",a),o=c();t.d(e,"a",function(){return o}),t.d(e,"b",function(){return c})},367:function(n,e,t){"use strict";var r=t(899),i=t(152),a=t(0),c=t(284);function o(n){var e,t,r=Object(c.a)();try{for(var o=a.__values(r.tabs),u=o.next();!u.done;u=o.next()){var s=u.value;if(s.type!==i.a.Primary&&s.data==n)return s}}catch(n){e={error:n}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return null}var u=t(777),s=t(3),f=t(617),d=t(1565),l=t(874),b=t(2);Object(b.mutator)(l.a,function(n){var e,t;try{for(var r=a.__values(Object(c.a)().tabs),o=r.next();!o.done;o=r.next()){var u=o.value;if(u.type==i.a.FloatingChat&&u.data==n.chatConversationId)return void Object(f.a)(u,!0)}}catch(n){e={error:n}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}Object(d.a)(i.a.FloatingChat,!0,!0,n.chatConversationId)});var v=t(88);Object(b.orchestrator)(v.B,function(){Object(f.a)(c.b)}),t.d(e,"e",function(){return m}),t.d(e,"f",function(){return w}),t.d(e,"g",function(){return O}),t.d(e,"h",function(){return g}),t.d(e,"a",function(){return i.a}),t.d(e,"b",function(){return o}),t.d(e,"c",function(){return u.a}),t.d(e,"d",function(){return c.a}),t.d(e,"i",function(){return c.b}),t.d(e,"j",function(){return r.b});var p=new s.c(function(){return Promise.all([t.e(51),t.e(69),t.e(434)]).then(t.bind(null,13555))}),m=new s.a(p,function(n){return n.activateTab}),w=new s.a(p,function(n){return n.addTab}),O=new s.a(p,function(n){return n.closeTab}),g=new s.a(p,function(n){return n.setTabIsShown})},535:function(n,e,t){"use strict";t(1541);var r=t(3),i=(t(1667),t(1666),t(22)),a=t(1526),c=t(1516),o=new r.c(function(){return t.e(380).then(t.bind(null,13839))}),u=new r.a(o,function(n){return n.initializeCache});Object(i.c)(function(){u.importAndExecute(),Object(c.a)()&&a.b.importAndExecute(!0)});var s=t(952),f=t(1525),d=(t(1532),t(1531)),l=t(1542),b=t(1533),v=t(2),p=Object(v.action)("onComposeAddinsInitialized",function(n){return{hostItemIndex:n}}),m=t(1543),w=t(299),O=t(367);function g(){var n=Object(O.c)(),e=Object(w.b)(),t=n?function(n,e){switch(n.type){case O.a.Primary:return e.primaryComposeId;case O.a.Compose:return n.data;default:return null}}(n,e):e.primaryComposeId,r=t?e.viewStates.get(t):null;return r&&!r.isInlineCompose?r:null}t.d(e,"v",function(){return y}),t.d(e,"m",function(){return j}),t.d(e,"g",function(){return C}),t.d(e,"j",function(){return S}),t.d(e,"p",function(){return A}),t.d(e,"s",function(){return I}),t.d(e,"z",function(){return R}),t.d(e,"q",function(){return T}),t.d(e,"t",function(){return P}),t.d(e,"y",function(){return _}),t.d(e,"u",function(){return M}),t.d(e,"r",function(){return x}),t.d(e,"x",function(){return k}),t.d(e,"i",function(){return D}),t.d(e,"o",function(){return F}),t.d(e,"l",function(){return E}),t.d(e,"w",function(){return B}),t.d(e,"n",function(){return L}),t.d(e,"h",function(){return W}),t.d(e,"k",function(){return V}),t.d(e,"c",function(){return s.c}),t.d(e,"a",function(){return s.b}),t.d(e,"f",function(){return f.c}),t.d(e,"e",function(){return d.a}),t.d(e,"b",function(){return l.a}),t.d(e,"A",function(){return b.a}),t.d(e,"B",function(){return p}),t.d(e,"C",function(){return m.a}),t.d(e,"d",function(){return g});var h=new r.c(function(){return Promise.all([t.e(2),t.e(3),t.e(4),t.e(5),t.e(304)]).then(t.bind(null,13343))}),y=new r.a(h,function(n){return n.replyToMessage}),j=new r.a(h,function(n){return n.forwardMessage}),C=new r.a(h,function(n){return n.closeCompose}),S=new r.a(h,function(n){return n.discardCompose}),A=new r.a(h,function(n){return n.loadDraftToCompose}),I=new r.a(h,function(n){return n.openCompose}),R=new r.a(h,function(n){return n.trySaveAndCloseCompose}),T=new r.a(h,function(n){return n.moveComposeToTab}),P=new r.a(h,function(n){return n.recreateComposeFromViewState}),_=new r.a(h,function(n){return n.tryCreateResendDraft}),M=new r.a(h,function(n){return n.replyToApprovalMessage}),x=new r.a(h,function(n){return n.onEditDraftButtonClicked}),k=new r.a(h,function(n){return n.showSubjectPickerButton}),D=(new r.b(h,function(n){return n.createComposeViewState}),new r.b(h,function(n){return n.createReply})),F=new r.b(h,function(n){return n.getToCcRecipientsForReply}),E=new r.b(h,function(n){return n.findComposePlugins}),B=new r.b(h,function(n){return n.replyToMessageAndCreateViewState}),L=(new r.b(h,function(n){return n.infoBarAddHandler}),new r.b(h,function(n){return n.infoBarRemoveHandler}),new r.b(h,function(n){return n.getNextComposeId})),W=new r.b(h,function(n){return n.createAttachments}),V=new r.b(h,function(n){return n.findComposeFromRecipientWell})},617:function(n,e,t){"use strict";var r=t(152),i=t(1050),a=t(777),c=t(1563),o=t(1566),u=t(23),s=t(899);e.a=Object(u.b)("activateTab",i.a.TabViewActivateTab)(function(n,e){switch(Object(c.a)(n,!0),n.type){case r.a.FloatingChat:return void Object(o.a)(n);case r.a.Primary:case r.a.OverflowMenu:case r.a.SecondaryReadingPane:case r.a.Compose:if(!n.isActive){var t,i=Object(a.a)();if(i)i.isActive=!1,(t=Object(s.a)(i.type))&&t.onDeactivate&&t.onDeactivate(i);if(n)n.isActive=!0,n.blink=!1,(t=Object(s.a)(n.type))&&t.onActivate&&t.onActivate(n)}return}})},774:function(n,e,t){"use strict";t.d(e,"c",function(){return a}),t.d(e,"b",function(){return c}),t.d(e,"h",function(){return o}),t.d(e,"g",function(){return u}),t.d(e,"f",function(){return s}),t.d(e,"d",function(){return f}),t.d(e,"e",function(){return d}),t.d(e,"a",function(){return l});var r=t(0),i=t(222),a="deeplink",c="compose",o="reply",u="replyall",s="read",f="group",d="/"+r.__spread(["mail"],Object(i.a)().split("/").slice(1)).join("/")+a+"/",l="/"+r.__spread(["calendar"],Object(i.a)().split("/").slice(1)).join("/")+a+"/"},777:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(0),i=t(152),a=t(284),c=t(11);function o(){var n,e,t=Object(a.a)();try{for(var o=r.__values(t.tabs),u=o.next();!u.done;u=o.next()){var s=u.value;if(s.isActive&&s.type!=i.a.FloatingChat)return s}}catch(e){n={error:e}}finally{try{u&&!u.done&&(e=o.return)&&e.call(o)}finally{if(n)throw n.error}}return c.d.error("There is no active tab. Something went very wrong."),null}},874:function(n,e,t){"use strict";var r=t(2),i=Object(r.actionCreator)("ADD_CHAT_TAB",function(n){return{chatConversationId:n}});e.a=i},882:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"i",function(){return c}),t.d(e,"j",function(){return o}),t.d(e,"d",function(){return u}),t.d(e,"c",function(){return s}),t.d(e,"b",function(){return f}),t.d(e,"h",function(){return d}),t.d(e,"g",function(){return l}),t.d(e,"f",function(){return b}),t.d(e,"e",function(){return v});var r=t(3),i=new r.c(function(){return Promise.all([t.e(11),t.e(38),t.e(325)]).then(t.bind(null,3052))}),a=new r.a(i,function(n){return n.clearAutoMarkAsReadTimer}),c=new r.a(i,function(n){return n.setAutoMarkAsReadTimer}),o=new r.a(i,function(n){return n.toggleRowReadState}),u=new r.b(i,function(n){return n.markItemsAsReadBasedOnNodeIds}),s=new r.a(i,function(n){return n.markItemAsReadFromReadingPane}),f=new r.a(i,function(n){return n.markAsReadInTable}),d=new r.a(i,function(n){return n.onSingleSelectionChanged}),l=new r.a(i,function(n){return n.onReadingPaneClosed}),b=new r.a(i,function(n){return n.onNavigateAwayViaUpDown}),v=new r.a(i,function(n){return n.onItemPartDeselected})},899:function(n,e,t){"use strict";t.d(e,"b",function(){return a}),t.d(e,"a",function(){return c});var r=t(152),i={};function a(n,e){i[r.a[n]]=e}function c(n){return i[r.a[n]]}},952:function(n,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a});var r=t(10),i="HTML",a="Text",c="Html";function o(){return Object(r.a)().UserOptions.ComposeMarkup==c?"HTML":"Text"}}},0,[5,15,40,85,344,2,3,4,304,0,1,526,178,12,47,121,11,38,325,521,141,514,105,525,174,24,116,333,312,331,425]]);
//# sourceMappingURL=owa.MailModuleOrchestrator.js.map
self.scriptsLoaded['owa.MailModuleOrchestrator.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailModuleOrchestrator.js'] = (new Date()).getTime();