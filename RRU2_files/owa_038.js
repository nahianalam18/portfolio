self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.27.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[27],{1504:function(e,r,n){"use strict";var t;function a(e){var r=e.getCalendarFolders;return t=r,e}function d(){var e=t;return t=void 0,e}n.d(r,"b",function(){return a}),n.d(r,"a",function(){return d})},1876:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(56),a=n(2248);r.default=function(e,r){return void 0===e||e.__type||(e=a.default(e)),t.makeServiceRequest("GetUserUnifiedGroups",e,r)}},1877:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0);r.default=function(e){return t.__assign({__type:"GetUserUnifiedGroupsRequest:#Exchange"},e)}},1983:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(56);r.default=function(e,r){return t.makeServiceRequest("GetCalendarFolders",e,r)}},2006:function(e,r,n){"use strict";var t=n(0),a=n(8),d=n(2015),o=n(4),i=n(1876),u=n.n(i),c=n(1877),l=n.n(c),s=n(26),f="Groups",p=n(34),I=n(567);function b(){return t.__awaiter(this,void 0,void 0,function(){var e,r;return t.__generator(this,function(n){switch(n.label){case 0:return 4,(e=[]).push({FilterType:1,SortType:4,SortDirection:"Descending"}),e.push({FilterType:2,SortType:4,SortDirection:"Descending"}),(r=Object(s.getJsonRequestHeader)()).RequestServerVersion="V2018_01_08",[4,u()({Header:r,Body:l()({RequestedGroupsSets:e})})];case 1:return[2,n.sent()]}})})}var m=Object(a.action)("getGroupCalendarsService")(function(){return t.__awaiter(this,void 0,void 0,function(){var e;return t.__generator(this,function(r){switch(r.label){case 0:return[4,b()];case 1:return null!=(e=r.sent())&&e.Body.GroupsSets&&e.Body.GroupsSets.length>0?[2,v(e.Body.GroupsSets)]:[2,null]}})})});function v(e){var r=[],n=[];if(e.forEach(function(e){e.Groups.forEach(function(e){var t=e.SmtpAddress.toLowerCase(),a={type:p.a.GroupMailbox,deprecatedMailboxId:t,primarySmtpAddress:t,routingKey:Object(p.c)()+t,returnModernConversationItems:!1,requestOptions:null},d={__type:I.a,CalendarColor:-1,CalendarName:e.DisplayName,OwnerEmailAddress:t,OwnerName:e.DisplayName,IsGroupMailboxCalendar:!0,IsGeneralScheduleCalendar:!0,ItemId:{Id:t},ParentGroupId:f},o={DistinguishedFolderId:t,DisplayName:e.DisplayName};r.push({entry:d,folder:o,mailboxInfo:a});var i={id:{id:t,mailboxInfo:a},calculatedFolderId:t,displayName:e.DisplayName,colorScheme:null};n.push(i)})}),n.length>0){var t=Object(p.e)(),a={type:p.a.GroupMailbox,deprecatedMailboxId:t.deprecatedMailboxId,primarySmtpAddress:t.primarySmtpAddress,routingKey:Object(p.b)(),returnModernConversationItems:!1,requestOptions:null},i={id:{id:f,mailboxInfo:a},GroupId:f,ItemId:{Id:f},GroupName:Object(o.a)(d.a),GroupType:3};return{groupCalendars:r,calendarGroup:i,calendars:n}}return null}var g=n(41),O=Object(a.action)("getGroupCalendars")(function(){return t.__awaiter(this,void 0,void 0,function(){var e;return t.__generator(this,function(r){switch(r.label){case 0:return[4,m()];case 1:return null!=(e=r.sent())&&null!=e.groupCalendars?(e.groupCalendars.forEach(function(e){Object(g.b)(e.entry,e.folder,e.mailboxInfo)}),Object(g.a)(e.calendarGroup),[2,{group:e.calendarGroup,calendars:e.calendars}]):[2,null]}})})}),C=n(6),h=n(18),y=n(10),j=Object(a.action)("initializeGroupCalendars")(function(e){return t.__awaiter(this,void 0,void 0,function(){var r,n,a,d,o,i;return t.__generator(this,function(t){switch(t.label){case 0:r=new h.a("initializeGroupCalendars"),n=Object(y.a)().GroupsEnabled,a=Object(C.e)("cal-groupsCalendar"),d=!Object(g.r)().some(function(e){return e.GroupId===f}),o=n&&a&&(e||d),r.addCustomData({issueServiceCall:o,GroupsEnabled:n,featureEnabled:a,refresh:e,initialLoad:d}),t.label=1;case 1:return t.trys.push([1,4,,5]),o?[4,O()]:[3,3];case 2:t.sent(),t.label=3;case 3:return r.end(),[3,5];case 4:throw i=t.sent(),r.endWithError("ServerError",Error(i)),i;case 5:return[2]}})})}),_=n(2),F=n(11),E=n(523),M=null;Object(_.orchestrator)(g.y,function(e){var r=e.payload,n=r.id,t=r.EventType,a=r.Group.SmtpAddress;F.d.info(n+": "+t+", "+a),M||(M=Object(E.a)(j.bind(null,!0),2e3)),M()}),n.d(r,"b",function(){return j}),n.d(r,"a",function(){return f})},2014:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(56),a=n(2337);r.default=function(e,r){return void 0===e.request||e.request.__type||(e.request=a.default(e.request)),t.makeServiceRequest("GetCalendarFolderConfiguration",e,r)}},2015:function(e){e.exports={a:"YEa"}},2248:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0);r.default=function(e){return t.__assign({__type:"GetUserUnifiedGroupsJsonRequest:#Exchange"},e)}},2337:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0);r.default=function(e){return t.__assign({__type:"GetCalendarFolderConfigurationRequest:#Exchange"},e)}},41:function(e,r,n){"use strict";var t=n(2),a=n(7),d={calendarEntryMapping:new a.ObservableMap,calendarFolderMapping:new a.ObservableMap,calendarItemIdToChangeKey:new a.ObservableMap,folderIdToCalendarId:new a.ObservableMap,validEntryMapping:new a.ObservableMap,calendarGroupsMapping:new a.ObservableMap,defaultCalendars:new a.ObservableMap},o=Object(t.createStore)("calendarsCacheStore",d),i=n(0),u=Object(t.action)("initializeCalendarsCacheInStore",function(e,r,n,t,a,d){return{defaultCalendarEntry:e,calendarEntries:r,calendarFolders:n,calendarGroups:t,folderIdMapping:a,calendarIdToChangeKeyMapping:d}}),c=Object(t.action)("updateChangeKeyByCalendarItemId",function(e){return{itemId:e}}),l=Object(t.action)("addToCalendarsCache",function(e,r,n){return{calendarEntry:e,folder:r,mailboxInfo:n}}),s=Object(t.action)("addCalendarGroupToCalendarsCache",function(e){return{calendarGroup:e}}),f=Object(t.action)("updateCalendarEntry",function(e,r){return{itemId:e,calendarEntry:r}}),p=Object(t.action)("updateCalendarFolder",function(e,r){return{calendar:e,calendarFolder:r}}),I=Object(t.action)("removeCalendarFromCalendarsCache",function(e){return{calendar:e}}),b=Object(t.action)("markCalendarEntryAsValid",function(e){return{calendarEntry:e}}),m=Object(t.action)("calendarUpdated",function(e,r){return{calendarId:e,updates:r}}),v=Object(t.action)("groupAssociationChanged",function(e){return{payload:e}}),g=Object(t.action)("removeCalendarWithIDFromCalendarsCache",function(e){return{calendarId:e}});function O(e){if(void 0!==e.CalendarFolderId)return e.CalendarFolderId;var r=e;return r.IsGeneralScheduleCalendar?{Id:r.OwnerEmailAddress,ChangeKey:""}:r.SharedFolderId?{Id:r.SharedFolderId.Id,ChangeKey:null!=r.SharedFolderId.ChangeKey?r.SharedFolderId.ChangeKey:""}:null}Object(t.mutator)(c,function(e){var r=e.itemId,n=r.Id,t=r.ChangeKey;o().calendarItemIdToChangeKey.set(n,t)}),Object(t.mutator)(f,function(e){var r=e.itemId.Id,n=e.calendarEntry,t=o().calendarEntryMapping.get(r),a=(n.ItemId,i.__rest(n,["ItemId"]));t&&Object.keys(a).forEach(function(e){t[e]=a[e]})}),Object(t.mutator)(b,function(e){var r=e.calendarEntry;o().validEntryMapping.set(r.ItemId.Id,!0)});var C=n(34);function h(e){return e||(e=Object(C.e)().primarySmtpAddress),o().defaultCalendars.get(e)}function y(){var e=o().calendarEntryMapping;return i.__spread(e.values())}function j(){return y().map(function(e){return M(e.id.id)}).filter(function(e){return e})}function _(){var e=o().calendarGroupsMapping;return i.__spread(e.values())}function F(e){return o().folderIdToCalendarId.get(e)}function E(e){return o().calendarEntryMapping.get(e)}function M(e){var r=E(e);return r?{id:{id:e,mailboxInfo:i.__assign({},r.id.mailboxInfo)},calculatedFolderId:D(e),displayName:r.CalendarName,colorScheme:null}:null}function S(e){return o().calendarFolderMapping.get(e.id.id)}function w(e){return E(e.id.id)}function G(e){var r=F(e);return r?E(r.id):void 0}function A(e){var r=o().calendarFolderMapping,n=F(e);return n?r.get(n.id):void 0}function x(e){return o().calendarItemIdToChangeKey.get(e)}function T(e){return K(e.id.id)}function K(e){var r=o().calendarFolderMapping.get(e);return r&&(r.FolderId||r.DistinguishedFolderId)?r.FolderId?r.FolderId.Id:r.DistinguishedFolderId:D(e)}function D(e){var r=o().calendarEntryMapping.get(e);if(r){var n=O(r);return n?n.Id:null}return null}function q(e){var r=o(),n=r.folderIdToCalendarId,t=r.calendarEntryMapping,a=n.get(e);if(a){var d=t.get(a.id);return!d.IsGroupMailboxCalendar&&null!=d.CalendarFolderId}return!1}function k(e){if(q(e)){var r=G(e);return r&&r.IsReadOnly}return!1}function R(e){var r=o().validEntryMapping;return e&&r.get(e.ItemId.Id)}function N(e){return!q(K(e))&&!R(E(e))}function P(e){var r,n=o(),t=n.folderIdToCalendarId,a=n.calendarEntryMapping,d=t.get(e);d?r=a.get(d.id):r=i.__spread(a.values()).filter(function(r){return r.OwnerEmailAddress&&r.OwnerEmailAddress.toLowerCase()==e.toLowerCase()})[0];return r}function L(e,r){return r+"_"+e}function U(e,r){Object.keys(r).forEach(function(n){return e.set(n,r[n])})}function z(e,r){var n=o();n.calendarItemIdToChangeKey.delete(e),n.calendarEntryMapping.delete(e),n.calendarFolderMapping.delete(e),r&&n.folderIdToCalendarId.delete(r)}function H(e){var r=F(e);return r?r.mailboxInfo:null}function B(e){var r=S(e),n=w(e);return r&&n&&!n.IsReadOnly&&r.EffectiveRights&&r.EffectiveRights.CreateContents}Object(t.mutator)(u,function(e){var r=e.defaultCalendarEntry;r&&o().defaultCalendars.set(r.id.mailboxInfo.primarySmtpAddress,r)}),Object(t.mutator)(u,function(e){var r=e.calendarEntries;U(o().calendarEntryMapping,r)}),Object(t.mutator)(u,function(e){var r=e.calendarFolders;U(o().calendarFolderMapping,r)}),Object(t.mutator)(u,function(e){var r=e.folderIdMapping;U(o().folderIdToCalendarId,r)}),Object(t.mutator)(u,function(e){var r=e.calendarIdToChangeKeyMapping;U(o().calendarItemIdToChangeKey,r)}),Object(t.mutator)(u,function(e){var r=e.calendarGroups;U(o().calendarGroupsMapping,r)}),Object(t.mutator)(l,function(e){var r=e.calendarEntry,n=e.folder,t=e.mailboxInfo,a=o();a.calendarItemIdToChangeKey.set(r.ItemId.Id,r.ItemId.ChangeKey);var d=i.__assign({},r,{id:{id:r.ItemId.Id,mailboxInfo:t}});a.calendarEntryMapping.set(r.ItemId.Id,d),a.calendarFolderMapping.set(r.ItemId.Id,n),n.FolderId?a.folderIdToCalendarId.set(n.FolderId.Id,{id:r.ItemId.Id,mailboxInfo:t}):n.DistinguishedFolderId&&a.folderIdToCalendarId.set(n.DistinguishedFolderId,{id:r.ItemId.Id,mailboxInfo:t})}),Object(t.mutator)(s,function(e){var r=e.calendarGroup,n=o(),t=L(r.id.mailboxInfo.primarySmtpAddress,r.GroupId);n.calendarGroupsMapping.set(t,r)}),Object(t.mutator)(I,function(e){var r=e.calendar;z(r.id.id,r.calculatedFolderId?r.calculatedFolderId:null)}),Object(t.mutator)(g,function(e){var r=e.calendarId;z(r,K(r))}),Object(t.mutator)(p,function(e){var r=e.calendar,n=e.calendarFolder,t=S(r);Object.keys(n).forEach(function(e){t[e]=n[e]})});var J=n(567),V=n(10);function W(e,r){var n=w(e);if(Object(J.c)(n)){var t=n;return!t.IsOwnerEmailAddressInvalid&&t.OwnerEmailAddress==r}return e.id&&e.id.mailboxInfo?r.indexOf(e.id.mailboxInfo.primarySmtpAddress)>=0:Object(V.a)().SessionSettings.UserEmailAddress==r}function $(e){return e?e.map(M).filter(function(e){return!!e}):null}n.d(r,"z",function(){return u}),n.d(r,"K",function(){return c}),n.d(r,"b",function(){return l}),n.d(r,"a",function(){return s}),n.d(r,"I",function(){return f}),n.d(r,"J",function(){return p}),n.d(r,"G",function(){return I}),n.d(r,"F",function(){return b}),n.d(r,"d",function(){return m}),n.d(r,"y",function(){return v}),n.d(r,"H",function(){return g}),n.d(r,"u",function(){return h}),n.d(r,"i",function(){return y}),n.d(r,"e",function(){return j}),n.d(r,"r",function(){return _}),n.d(r,"s",function(){return F}),n.d(r,"k",function(){return E}),n.d(r,"h",function(){return M}),n.d(r,"n",function(){return S}),n.d(r,"j",function(){return w}),n.d(r,"m",function(){return G}),n.d(r,"o",function(){return A}),n.d(r,"t",function(){return x}),n.d(r,"p",function(){return T}),n.d(r,"v",function(){return K}),n.d(r,"g",function(){return D}),n.d(r,"B",function(){return q}),n.d(r,"C",function(){return k}),n.d(r,"D",function(){return R}),n.d(r,"c",function(){return N}),n.d(r,"l",function(){return P}),n.d(r,"f",function(){return O}),n.d(r,"w",function(){return H}),n.d(r,"q",function(){return L}),n.d(r,"E",function(){return B}),n.d(r,"A",function(){return W}),n.d(r,"x",function(){return $})},567:function(e,r,n){"use strict";var t="LinkedCalendarEntry:#Exchange";function a(e){return e.__type==t}function d(e){return e.CanViewPrivateItems}n.d(r,"c",function(){return a}),n.d(r,"a",function(){return t}),n.d(r,"b",function(){return d})},865:function(e,r,n){"use strict";var t,a=n(2),d=Object(a.createStore)("cacheLoaderStore",{loadedCalendarAccounts:[]});!function(e){e[e.Outlook=0]="Outlook",e[e.OutlookGroup=1]="OutlookGroup"}(t||(t={}));var o=n(75),i=n(34);function u(e,r){switch(e){case t.Outlook:return(r||Object(i.e)().primarySmtpAddress)+e.toString();case t.OutlookGroup:return e.toString();default:return Object(o.a)(e)}}function c(e,r){var n=u(e,r);return d().loadedCalendarAccounts.some(function(e){return e===n})}var l=Object(a.action)("addToLoadedCalendarAccounts",function(e){return{calendarAccountData:e}});Object(a.mutator)(l,function(e){d().loadedCalendarAccounts.push(e.calendarAccountData)});var s=n(0),f=n(11),p=n(940),I=Object(a.action)("calendarCacheInitializedForAccount",function(e,r){return{calendarProviderType:e,userId:r}}),b=n(2006),m={};function v(e,r){if(c(e,r))return Promise.resolve();var n=u(e,r),a=m[n];if(a)return a.requestPromise;var d=function(e,r){return s.__awaiter(this,void 0,void 0,function(){var n;return s.__generator(this,function(a){switch(a.label){case 0:switch(e){case t.Outlook:return[3,1];case t.OutlookGroup:return[3,5]}return[3,7];case 1:return a.trys.push([1,3,,4]),r=r||Object(i.e)().primarySmtpAddress,[4,Object(p.d)(r)];case 2:return a.sent(),[3,4];case 3:return n=a.sent(),f.d.error("initializeCalendarsCacheForAccount: failed to initialize calendar cache: "+n),[3,4];case 4:return[3,8];case 5:return[4,Object(b.b)()];case 6:return a.sent(),[3,8];case 7:Object(o.a)(e),a.label=8;case 8:return[2]}})})}(e,r);return m[n]={requestPromise:d},d.then(function(){l(n),I(e,r)})}n.d(r,"d",function(){return c}),n.d(r,"c",function(){return v}),n.d(r,"a",function(){return t}),n.d(r,"b",function(){return I})},940:function(e,r,n){"use strict";var t=n(0),a=n(41),d=n(34),o=n(10),i=n(567),u=n(11);function c(e,r,n){var c,l={},s={},f={},p={},I={},b=n?[n]:[Object(o.a)().SessionSettings.LogonEmailAddress],m=Object(d.e)(n);return e.forEach(function(e){I[e.ItemId.Id]=e.ItemId.ChangeKey;var n=t.__assign({},e,{id:{id:e.GroupId,mailboxInfo:m}}),d=Object(a.q)(m.primarySmtpAddress,e.GroupId);p[d]=n,e.Calendars.forEach(function(e){if(function(e,r){if(7==e.CalendarFolderType)return!1;if(Object(i.c)(e)){var n=e;if(n.IsOwnerEmailAddressInvalid)return u.d.info("[getCalendarsService] Ommitting shared calendar with IsOwnerEmailAddressInvalid flag on, OwnerEmailAddress: {1}: "+n.OwnerEmailAddress),!1;var t=n.IsGeneralScheduleCalendar?n.OwnerEmailAddress:n.SharedFolderId?n.SharedFolderId.Id:null;if(!t)return u.d.info("[getCalendarsService] Ommitting linked calendar with null SharedFolderId, Id: {1}: "+e.ItemId.Id),!1;if(r.includes(t))return u.d.info("[getCalendarsService] Ommitting duplicate shared calendar from Calendar folder list. DuplicateKey: {1}: "+t),!1;if(r.push(t),n.OwnerEmailAddress=n.OwnerEmailAddress.toLowerCase(),n.IsGroupMailboxCalendar)return!1}return!0}(e,b)){var n=e.ItemId.Id,d=Object(a.f)(e).Id;if(1==e.CalendarFolderType){var o=r&&r.filter(function(e){return e.FolderId.Id===d})[0];c={id:{id:n,mailboxInfo:m},calculatedFolderId:d,displayName:o?o.DisplayName:e.CalendarName,colorScheme:null}}var s=t.__assign({},e,{id:{id:n,mailboxInfo:m}});!l[n]&&(l[n]=s),!f[d]&&(f[d]={id:e.ItemId.Id,mailboxInfo:m}),!I[n]&&(I[n]=e.ItemId.ChangeKey)}})}),r.forEach(function(e){var r=f[e.FolderId.Id];r&&(s[r.id]=e)}),{defaultCalendar:c,calendarEntryMapping:l,calendarFolderMapping:s,folderIdMapping:f,calendarGroupMapping:p,calendarIdToChangeKeyMapping:I}}var l=n(1983),s=n.n(l),f=n(26),p=n(1504),I=n(144);function b(e){return t.__awaiter(this,void 0,void 0,function(){var r,n;return t.__generator(this,function(t){switch(t.label){case 0:return r=null,e&&!Object(d.h)(e)||(r=Object(p.a)()),r?[3,3]:[4,Object(I.e)(Object(d.e)(e))];case 1:return n=t.sent(),[4,s()({Header:Object(f.getJsonRequestHeader)()},n)];case 2:r=t.sent(),t.label=3;case 3:return[2,r]}})})}var m=n(151),v=n.n(m),g=n(2014),O=n.n(g);function C(e,r){return t.__awaiter(this,void 0,void 0,function(){var n,d,o,i;return t.__generator(this,function(t){switch(t.label){case 0:return n=new Headers,Object(I.g)(r,n),d={headers:n},o=Object(a.m)(e.Id),i=o&&(o.IsGeneralScheduleCalendar||o.IsGroupMailboxCalendar)?v()({Id:"calendar",Mailbox:{EmailAddress:r}}):5==o.CalendarFolderType?o.SharedFolderId:e,[4,O()({request:{FolderId:i}},d)];case 1:return[2,t.sent()]}})})}var h=n(113),y=n.n(h),j=n(18);function _(e){return t.__awaiter(this,void 0,void 0,function(){var r,n,i,u,c,l,s;return t.__generator(this,function(t){switch(t.label){case 0:if(!(r=Object(a.k)(e)))throw new Error("Unable to get calendar entry for calendar "+e);n=Object(a.v)(e),i=Object(a.g)(e),u=Object(a.s)(n),c=u?u.mailboxInfo:Object(d.e)(),l=5==r.CalendarFolderType&&Object(o.a)().SessionSettings.DefaultPublicFolderMailbox?Object(o.a)().SessionSettings.DefaultPublicFolderMailbox:function(e,r){return e||(r?r.primarySmtpAddress:null)}(r.OwnerEmailAddress,c),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,C(y()({Id:i}),l)];case 2:return s=t.sent(),[3,4];case 3:return t.sent(),Object(j.o)("getCalendarFolderConfigurationServiceFailed"),Object(a.F)(r),[2];case 4:if(!s)throw new Error("Unable to get folder for calendar "+e);return Object(a.F)(r),5==r.CalendarFolderType?function(e,r,n){var t=e.CalendarFolder;if(t){r.CalendarFolderId||(r.CalendarFolderId=e.CalendarFolder.FolderId);var o=t.ReplicaList[0];Object(a.b)(r,t,{type:0,deprecatedMailboxId:o,primarySmtpAddress:o,routingKey:Object(d.c)()+o,requestOptions:Object(I.a)(o,n),returnModernConversationItems:n.returnModernConversationItems})}}(s,r,c):function(e,r,n,t){var d=e.CalendarFolder;d&&d.EffectiveRights&&d.EffectiveRights.Read&&(e.MasterList&&(r.RemoteCategories=e.MasterList),(t==r.OwnerEmailAddress||r.ItemId&&t==r.ItemId.Id)&&(Object(a.d)(t,{id:{id:r.ItemId.Id,mailboxInfo:n},calculatedFolderId:d.FolderId.Id}),Object(a.H)(t),Object(a.b)(r,d,n)))}(s,r,c,e),[2]}})})}function F(e){return t.__awaiter(this,void 0,void 0,function(){var r,n;return t.__generator(this,function(t){switch(t.label){case 0:return[4,b(e)];case 1:return null!==(r=t.sent())&&r.WasSuccessful?(n=c(r.CalendarGroups,r.CalendarFolders,e),Object(a.z)(n.defaultCalendar,n.calendarEntryMapping,n.calendarFolderMapping,n.calendarGroupMapping,n.folderIdMapping,n.calendarIdToChangeKeyMapping)):u.d.error("[getCalendarFoldersFromServer] Failed to load calendars from server"),[2]}})})}n.d(r,"a",function(){return c}),n.d(r,"c",function(){return b}),n.d(r,"b",function(){return _}),n.d(r,"d",function(){return F})}}]);
//# sourceMappingURL=owa.27.js.map
self.scriptsLoaded['owa.27.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.27.js'] = (new Date()).getTime();