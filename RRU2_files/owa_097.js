self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.RecipientCache.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[380],{1124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PersonaResponseShape:#Exchange"},e)}},1125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(891);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("FindPeople",e,t)}},13839:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(3711),a=n(1530),s=n.n(a),u=n(891),o=n.n(u),c=n(1397),d=n.n(c),l=n(542),p=n.n(l),f=n(1124),I=n.n(f),P=n(71),_=n.n(P),b=n(1125),h=n.n(b),v=n(26),y=500,m="owa.react.compose";function g(){var e,t=d()({IndexedPageItemView:p()({BasePoint:"Beginning",Offset:0,MaxEntriesReturned:y}),PersonaShape:(e=I()({BaseShape:"IdOnly",AdditionalProperties:[_()({FieldURI:"PersonaEmailAddress"}),_()({FieldURI:"EmailAddresses"}),_()({FieldURI:"PersonaDisplayName"}),_()({FieldURI:"PersonaDisplayNames"}),_()({FieldURI:"PersonaId"}),_()({FieldURI:"PersonaType"}),_()({FieldURI:"PersonaImAddress"}),_()({FieldURI:"PersonaTitle"})]}),e),QuerySources:["Mailbox"],QueryString:"",SearchPeopleSuggestionIndex:!0,ShouldResolveOneOffEmailAddress:!1,Context:[s()({Key:"AppName",Value:"OWA"}),s()({Key:"AppScenario",Value:m})]});return h()(o()({Header:Object(v.getJsonRequestHeader)(),Body:t})).then(function(e){return e.Body})}var O=n(92),w=n(65),A=n(3648),R="/search/api/v1/suggestions?",j="owa.react.recipientcache",D=500;function E(){return r.__awaiter(this,void 0,void 0,function(){var e,t;return r.__generator(this,function(n){switch(n.label){case 0:return[4,S()];case 1:return e=n.sent(),t=function(e){return{AppName:"OWA",Scenario:{Name:j},Cvid:Object(O.a)(),EntityRequests:[e]}}(e),[2,Object(w.d)(R,t,null,!1,null,!0,void 0,!1).then(function(e){return e},function(e){throw new Error(e.message)})]}})})}function S(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2,{Query:{QueryString:""},EntityType:"People",Provenances:["Mailbox"],Size:D,Fields:A.a}]})})}var x=n(3688),C=n(11),M=n(23),L=Object(M.b)("tryInitializeCacheWithSource",{name:"RecipientCacheInitialization",custonData:function(e,t){return[e,t]}})(function(e,t,n){return r.__awaiter(this,void 0,void 0,function(){var t,a,s,u;return r.__generator(this,function(o){switch(o.label){case 0:switch(o.trys.push([0,6,,7]),t=void 0,e){case 0:return[3,1];case 1:return[3,3]}return[3,5];case 1:return[4,E()];case 2:return a=o.sent(),t=function(e){var t,n,i=[];if(e&&e.Groups){var a=e.Instrumentation&&e.Instrumentation.TraceId;try{for(var s=r.__values(e.Groups),u=s.next();!u.done;u=s.next()){var o=u.value;if("People"===o.Type){i=o.Suggestions.map(function(e){return Object(x.a)(e,a)});break}}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}}else C.d.warn("Response groups should not be null");return i}(a),[3,5];case 3:return[4,g()];case 4:return s=o.sent(),t=s.ResultSet,[3,5];case 5:return t&&t.length>0&&(t.forEach(function(e){var t=Object(i.a)(e);t&&(n.store.allKeys[t]=!0)}),n.store.recipientCache=t),[3,7];case 6:return u=o.sent(),C.d.warn(u.message),[3,7];case 7:return[2]}})})});var T=n(2075),F=n(1516),U=n(8),G=Object(U.action)("initializeCache")(Object(U.select)({store:function(){return T.a}})(function(e){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(n){switch(n.label){case 0:return t=Object(F.a)(),[4,L(t?0:1,!1,e)];case 1:return n.sent(),!t||e.store.recipientCache?[3,3]:[4,L(1,!0,e)];case 2:n.sent(),n.label=3;case 3:return e.store.recipientCache||(e.store.recipientCache=[]),[2]}})})}));n.d(t,"initializeCache",function(){return G})},1397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleRequest:#Exchange"},e)}},1530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ContextProperty:#Exchange"},e)}},2075:function(e,t,n){"use strict";var r=n(2),i=Object(r.createStore)("recipientcache",{recipientCache:null,allKeys:{}})();t.a=i},3648:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=["Id","ADObjectId","DisplayName","EmailAddresses","PeopleSubtype","PeopleType","PDLItemId","PersonaId","ImAddress","JobTitle"]},3688:function(e,t,n){"use strict";var r=n(4),i=n(1527);function a(e,t,n){var a=e.EmailAddresses,c=e.DisplayName,d=e.Text,l=e.PDLItemId,p=e.ADObjectId,f=e.PersonaId,I=e.FeatureData,P=e.Id,_=e.ReferenceId,b=e.ImAddress,h=e.JobTitle,v=e.PeopleSubtype,y=a?a[0]:null;if(!n&&function(e){return Object(i.b)().sessionMaskedRecipients[e]}(y))return null;var m={EmailAddress:y,Name:Object(r.g)(c)?d:c,MailboxType:o(v),RoutingType:s(v),ItemId:l?{Id:l,__type:"ItemId:#Exchange"}:null};return{DisplayName:c,ADObjectId:p,FeatureData:I,Id:P,ImAddress:b,EmailAddress:m,EmailAddresses:[m],PersonaTypeString:u(v),PersonaId:{Id:f},Title:h,ReferenceId:_,TransactionId:t}}function s(e){return"PersonalDistributionList"==e?"MAPIPDL":"SMTP"}function u(e){switch(e){case"PublicDistributionList":case"PersonalDistributionList":return"DistributionList";case"UnifiedGroup":return"ModernGroup";case"OrganizationUser":case"PersonalContact":case"ImplicitContact":case"OrganizationContact":return"Person";case"LinkedIn":return"LinkedIn";case"ImplicitGroup":return"ImplicitGroup";default:return"Unknown"}}function o(e){switch(e){case"PublicDistributionList":return"PublicDL";case"PersonalDistributionList":return"PrivateDL";case"UnifiedGroup":return"GroupMailbox";case"ImplicitGroup":return"RecommendedGroup";case"OrganizationUser":return"InternalMailbox";case"LinkedIn":return"LinkedIn";case"PersonalContact":case"OrganizationContact":case"ImplicitContact":case"Guest":case"Unknown":return"ExternalMailbox";default:return e}}n.d(t,"a",function(){return a})},3711:function(e,t,n){"use strict";function r(e){return e?e.EmailAddress&&e.EmailAddress.EmailAddress||e.PersonaId&&e.PersonaId.Id:null}n.d(t,"a",function(){return r})},891:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleJsonRequest:#Exchange"},e)}}},0,[514,105]]);
//# sourceMappingURL=owa.RecipientCache.js.map
self.scriptsLoaded['owa.RecipientCache.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.RecipientCache.js'] = (new Date()).getTime();