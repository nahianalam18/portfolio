self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.GroupFilesHubActions~GroupList~GroupSharedActions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[52],{3513:function(e,n,t){"use strict";var r=t(26),i=t(3983),o=t.n(i),s=t(3984),a=t.n(s);function u(e){var n={Type:0,Value:e};return new Promise(function(t,i){a()({Header:Object(r.getJsonRequestHeader)(),Body:o()({GroupIdentity:n})}).then(function(n){return t({response:n,groupId:e})}).catch(function(){i()})})}var c=t(3872),d=t.n(c),f=t(3873),l=t.n(f);function p(e,n){return l()({Header:Object(r.getJsonRequestHeader)(),Body:d()({IncludeInactiveGroups:!0,PageNumber:1,QueryString:e,PageSize:n||100,ApplicationId:"Owa"})})}t(3697);var y,g=t(0),b=t(3726),h=t.n(b),C=t(3986),S=t.n(C),R=t(3487),v=t(234);function O(){return S()({request:h()({})},{headers:{"X-OWA-CANARY":Object(v.getOwaCanaryCookie)()}})}function A(){return g.__awaiter(this,void 0,void 0,function(){return g.__generator(this,function(e){switch(e.label){case 0:return y?[3,2]:[4,(R.d?R.d:O)().then(function(e){return y=e?e.SerializedPeopleIKnowGraph:null})];case 1:e.sent(),e.label=2;case 2:return[2,Promise.resolve(y)]}})})}var B=t(3987),I=t.n(B),D=t(3988),m=t.n(D);function P(e){return m()({Header:Object(r.getJsonRequestHeader)(),Body:I()({GroupCountLimit:e||50,TopRelevantMemberCountLimit:1})})}var G=t(3876),j=t.n(G),w=t(3877),N=t.n(w);function H(e,n){return T({Value:e,Type:0},n?1:0)}function T(e,n){return N()({Header:Object(r.getJsonRequestHeader)(),Body:j()({GroupIdentity:e,ResponseShape:n,IncludeCapabilities:!0,AdditionalProperties:[2,4,3,7]})},{headers:{"X-OWA-ExplicitLogonUser":e.Value,"X-AnchorMailbox":e.Value,"X-OWA-CANARY":Object(v.getOwaCanaryCookie)()},datapoint:{jsonCustomData:function(e){var n={};return e&&e.Body&&Object(F.a)(e.Body)?e.Body.GroupDetails||(n.error="NOGroupDetails"):n.error="NoBody",n}}})}var x=t(3990),E=t.n(x),M=t(542),q=t.n(M),_=t(3991),J=t.n(_);function V(e,n){return g.__awaiter(this,void 0,void 0,function(){var t,i;return g.__generator(this,function(o){switch(o.label){case 0:return n&&(t=q()({Offset:0,BasePoint:"Beginning",MaxEntriesReturned:n})),[4,A()];case 1:return i=o.sent(),[2,J()({Header:Object(r.getJsonRequestHeader)(),Body:E()({GroupIdentity:{Value:e,Type:0},MembersPaging:t,SerializedPeopleIKnowGraph:i})},{headers:{"X-OWA-ExplicitLogonUser":e,"X-AnchorMailbox":e,"X-OWA-CANARY":Object(v.getOwaCanaryCookie)()},datapoint:{jsonCustomData:function(e){var n={};return e&&e.response&&e.response.Body&&Object(F.a)(e.response.Body)?e.response.Body.MembersInfo||(n.error="NOGroupDetails"):n.error="NoBody",n}}}).then(function(n){return{response:n,groupId:e}})]}})})}t(3657),t(1877),t(1876);var F=t(3624),k=t(3670);t(3664),t(3993),t(3994);t(3799),t(3800);var L=t(3996),X=t.n(L),z=t(3997),U=t.n(z),W=t(144),Y={BasePoint:"Beginning",Offset:0},K=function(e){var n=q()(Y);return n.MaxEntriesReturned=e,n};function $(e,n){return U()({Header:Object(r.getJsonRequestHeader)(),Body:X()({GroupIdentity:{Value:e,Type:0},CacheOptions:{MaxAgeInSeconds:-1,Hash:null},IsBackgroundCall:!1,FilesPaging:K(n)})},{headers:Object(W.f)(null,"GetFileItems-FH-REACT-Cache",!0)})}function Q(e,n){return U()({Header:Object(r.getJsonRequestHeader)(),Body:X()({GroupIdentity:{Value:e,Type:0},CacheOptions:{MaxAgeInSeconds:-1,Hash:"ffffffffffff"},IsBackgroundCall:!0,FilesPaging:K(n)})},{headers:Object(W.f)(null,"GetFileItems-FH-REACT-BGRefresh",!0)})}t(3698),t(3680);t(3937);t.d(n,"a",function(){return u}),t.d(n,"b",function(){return p}),t.d(n,"e",function(){return P}),t.d(n,"f",function(){return H}),t.d(n,"g",function(){return T}),t.d(n,"h",function(){return V}),t.d(n,"i",function(){return F.a}),t.d(n,"k",function(){return F.b}),t.d(n,"j",function(){return k.a}),t.d(n,"c",function(){return $}),t.d(n,"d",function(){return Q})},3624:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return a});var r="NoError",i="Success",o="|";function s(e){return e.ResponseCode&&e.ResponseCode.toString()===r&&e.ResponseClass&&e.ResponseClass.toString()===i}function a(e){var n="";if(!e||!e.Body)return n;var t=e.Body;return t.ResponseCode&&(n+=t.ResponseCode.toString()),t.ResponseClass&&(n+=o,n+=t.ResponseClass.toString()),n}},3657:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r,i=t(0),o=t(894),s=t(3796),a=t.n(s),u=t(3663),c=t.n(u),d=t(26);function f(e){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){return[2,a()(c()({Header:Object(d.getJsonRequestHeader)(),Body:{ResponseShape:e?1:0}})).then(function(e){return function(e){return e&&e.Body?{responseCode:r.Success,unifiedGroupSettings:{namingPolicySettings:p(e.Body),defaultClassification:l(e.Body),supportedClassifications:y(e.Body),groupsGuidelinesLink:g(e.Body),orgAllowAddGuests:h(e.Body),defaultGroupAccessType:b(e.Body),groupCreationEnabled:C(e.Body)}}:{responseCode:r.Error,errorMessage:e.Body.MessageText}}(e)}).catch(function(){return{responseCode:r.Error,errorMessage:"Error while getting group settings"}})]})})}function l(e){if(e.DataClassifications){if(e.DataClassifications.Default)return e.DataClassifications.Default;if(e.DataClassifications.Classifications&&1===e.DataClassifications.Classifications.length)return e.DataClassifications.Classifications[0].Name}return""}function p(e){if(e.NamingPolicySettings){var n={};return e.NamingPolicySettings.AliasDecorationPrefix&&(n.AliasDecorationPrefix=e.NamingPolicySettings.AliasDecorationPrefix),e.NamingPolicySettings.AliasDecorationSuffix&&(n.AliasDecorationSuffix=e.NamingPolicySettings.AliasDecorationSuffix),e.NamingPolicySettings.DisplayNameDecorationPrefix&&(n.DisplayNameDecorationPrefix=e.NamingPolicySettings.DisplayNameDecorationPrefix),e.NamingPolicySettings.DisplayNameDecorationSuffix&&(n.DisplayNameDecorationSuffix=e.NamingPolicySettings.DisplayNameDecorationSuffix),n}return{}}function y(e){if(e.DataClassifications&&e.DataClassifications.Classifications){return e.DataClassifications.Classifications}return[]}function g(e){return e.GroupsGuidelinesLink?e.GroupsGuidelinesLink:""}function b(e){if(e.DefaultGroupAccessType){if(1===e.DefaultGroupAccessType)return o.a.Private;if(3===e.DefaultGroupAccessType)return o.a.Public}return o.a.Private}function h(e){return!!e.OrgAllowAddGuests&&e.OrgAllowAddGuests}function C(e){return!!e.GroupCreationEnabled&&e.GroupCreationEnabled}!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.Unauthorized=2]="Unauthorized"}(r||(r={}))},3664:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(26),i=t(1027),o=t.n(i),s=t(3766),a=t.n(s),u=t(3767),c=t.n(u),d=t(144),f=t(3749);function l(e,n){var t=o()({Type:0,Value:e}),i=Object(f.b)(n);return new Promise(function(n,o){c()({Header:Object(r.getJsonRequestHeader)(),Body:a()({GroupIdentity:t,SubscriptionType:i.SubscriptionType,ShouldIgnoreReply:i.ShouldIgnoreReply})},{headers:Object(d.f)(e)}).then(function(t){return n({response:t,groupId:e})}).catch(function(e){o(e)})})}},3670:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(26),i=t(1027),o=t.n(i),s=t(3797),a=t.n(s),u=t(3798),c=t.n(u),d=t(3487),f=t(144);function l(e,n,t){var i=o()({Type:0,Value:n}),s=null,u=Object(d.i)();return u&&e.some(function(e){return e.toLowerCase()==u.toLowerCase()})&&1!=t||(s={headers:Object(f.f)(n)}),new Promise(function(o,u){c()({Header:Object(r.getJsonRequestHeader)(),Body:a()({Members:e,Action:t,GroupIdentity:i})},s).then(function(e){return o({response:e,groupId:n})}).catch(function(e){u(e)})})}},3697:function(e,n,t){"use strict";t.d(n,"a",function(){return y});var r=t(26),i=t(1027),o=t.n(i),s=t(1765),a=t.n(s),u=t(3874),c=t.n(u),d=t(3875),f=t.n(d),l=t(144);function p(e,n){var t=c()({GroupIdentity:e});return n&&""!=n.trim()&&(t.MessageBody=a()({BodyType:"Text",Value:n})),t}function y(e,n){var t=o()({Type:0,Value:e}),i={headers:Object(l.f)(e)};return new Promise(function(o,s){f()({Header:Object(r.getJsonRequestHeader)(),Body:p(t,n)},i).then(function(n){return o({response:n,groupId:e})}).catch(function(e){s(e)})})}},3698:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(3999),i=t.n(r),o=t(144);function s(e,n,t){void 0===t&&(t="GetSharePointTextFileContent-FH-REACT");var r={FileId:e,FileUrl:n};return i()({request:r},{headers:Object(o.f)(null,t)})}},3749:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o});var r=t(3777);function i(e){switch(e){case r.a.All:return{SubscriptionType:3,ShouldIgnoreReply:!1,IsSubscribed:!0};case r.a.RepliesAndEvents:return{SubscriptionType:2,ShouldIgnoreReply:!1,IsSubscribed:!1};case r.a.RepliesOnly:return{SubscriptionType:0,ShouldIgnoreReply:!1,IsSubscribed:!1};case r.a.None:return{SubscriptionType:0,ShouldIgnoreReply:!0,IsSubscribed:!1}}}function o(e){var n=e.SubscriptionType,t=e.ShouldIgnoreReply;switch(n){case 3:return r.a.All;case 2:return r.a.RepliesAndEvents;case 0:return t?r.a.None:r.a.RepliesOnly;case 1:return r.a.RepliesOnly}}},3777:function(e,n,t){"use strict";var r;t.d(n,"a",function(){return r}),function(e){e[e.All=0]="All",e[e.RepliesAndEvents=1]="RepliesAndEvents",e[e.RepliesOnly=2]="RepliesOnly",e[e.None=3]="None"}(r||(r={}))}}]);
//# sourceMappingURL=owa.GroupFilesHubActions~GroupList~GroupSharedActions.js.map
self.scriptsLoaded['owa.GroupFilesHubActions~GroupList~GroupSharedActions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.GroupFilesHubActions~GroupList~GroupSharedActions.js'] = (new Date()).getTime();