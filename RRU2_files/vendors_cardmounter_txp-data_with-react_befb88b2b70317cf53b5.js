/*! Version: 1.0.0; Third Party Notices: https://lpcres.delve.office.com/lpc/versionless/tpn-672c4e1c6c56fb84a0d4eb753556416d16a21f2f3d01adf30c6e318475a9640e3cbc17eed34d926126bcf47277b412579d36213b1cb186c91a58c6b004e95cbf.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[3],{1003:function(e,t,r){var a=r(1522),n=36e5,i=6e4,o=2,s=/[T ]/,c=/:/,l=/^(\d{2})$/,u=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],m=/^(\d{4})/,d=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],v=/^-(\d{2})$/,f=/^-?(\d{3})$/,p=/^-?(\d{2})-?(\d{2})$/,y=/^-?W(\d{2})$/,T=/^-?W(\d{2})-?(\d{1})$/,g=/^(\d{2}([.,]\d*)?)$/,h=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,D=/([Z+-].*)$/,k=/^(Z)$/,S=/^([+-])(\d{2})$/,R=/^([+-])(\d{2}):?(\d{2})$/;function I(e,t,r){t=t||0,r=r||0;var a=new Date(0);a.setUTCFullYear(e,0,4);var n=7*t+r+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+n),a}e.exports=function(e,t){if(a(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?o:Number(r);var b=function(e){var t,r={},a=e.split(s);if(c.test(a[0])?(r.date=null,t=a[0]):(r.date=a[0],t=a[1]),t){var n=D.exec(t);n?(r.time=t.replace(n[1],""),r.timezone=n[1]):r.time=t}return r}(e),L=function(e,t){var r,a=u[t],n=d[t];if(r=m.exec(e)||n.exec(e)){var i=r[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(r=l.exec(e)||a.exec(e)){var o=r[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}(b.date,r),C=L.year,F=function(e,t){if(null===t)return null;var r,a,n,i;if(0===e.length)return(a=new Date(0)).setUTCFullYear(t),a;if(r=v.exec(e))return a=new Date(0),n=parseInt(r[1],10)-1,a.setUTCFullYear(t,n),a;if(r=f.exec(e)){a=new Date(0);var o=parseInt(r[1],10);return a.setUTCFullYear(t,0,o),a}if(r=p.exec(e)){a=new Date(0),n=parseInt(r[1],10)-1;var s=parseInt(r[2],10);return a.setUTCFullYear(t,n,s),a}if(r=y.exec(e))return i=parseInt(r[1],10)-1,I(t,i);if(r=T.exec(e)){i=parseInt(r[1],10)-1;var c=parseInt(r[2],10)-1;return I(t,i,c)}return null}(L.restDateString,C);if(F){var A,U=F.getTime(),N=0;return b.time&&(N=function(e){var t,r,a;if(t=g.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*n;if(t=h.exec(e))return r=parseInt(t[1],10),a=parseFloat(t[2].replace(",",".")),r%24*n+a*i;if(t=x.exec(e)){r=parseInt(t[1],10),a=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return r%24*n+a*i+1e3*o}return null}(b.time)),b.timezone?(P=b.timezone,A=(E=k.exec(P))?0:(E=S.exec(P))?(B=60*parseInt(E[2],10),"+"===E[1]?-B:B):(E=R.exec(P))?(B=60*parseInt(E[2],10)+parseInt(E[3],10),"+"===E[1]?-B:B):0):(A=new Date(U+N).getTimezoneOffset(),A=new Date(U+N+A*i).getTimezoneOffset()),new Date(U+N+A*i)}var P,E,B;return new Date(e)}},1099:function(e,t,r){"use strict";var a=r(428);t.a=function(e){var t,r=null;if("number"==typeof e)r=e;else{var n=e;r=n&&n.txpActivities&&n.txpActivities.length>0?n.txpActivities[0].type:null}return(t={})[a.a.activityType]=r&&r.toString(),t}},1212:function(e,t,r){var a=r(1003);e.exports=function(e){var t=a(e);return t.setHours(0,0,0,0),t}},1213:function(e,t,r){var a=r(1523);e.exports=function(e,t){var r=a(e,t)/1e3;return r>0?Math.floor(r):Math.ceil(r)}},1521:function(e,t,r){var a=r(1003);e.exports=function(e,t){var r=a(e),n=a(t);return r.getTime()===n.getTime()}},1522:function(e,t){e.exports=function(e){return e instanceof Date}},1523:function(e,t,r){var a=r(1003);e.exports=function(e,t){var r=a(e),n=a(t);return r.getTime()-n.getTime()}},1524:function(e,t,r){var a=r(1003);e.exports=function(e,t){var r=a(e),n=a(t);return r.getTime()>n.getTime()}},1525:function(e,t,r){var a=r(1212);e.exports=function(e,t){var r=a(e),n=a(t);return r.getTime()===n.getTime()}},1618:function(e,t,r){"use strict";var a;r.r(t),function(e){e[e.Primary=0]="Primary",e[e.Combined=1]="Combined"}(a||(a={}));var n,i=a;!function(e){e[e.TxpActivity=0]="TxpActivity",e[e.Dining=1]="Dining",e[e.EventActivityType=2]="EventActivityType",e[e.FlightDeparture=3]="FlightDeparture",e[e.HotelCheckin=4]="HotelCheckin",e[e.HotelCheckout=5]="HotelCheckout",e[e.InvoiceDue=6]="InvoiceDue",e[e.ParcelDelivery=7]="ParcelDelivery",e[e.RentalCarPickup=8]="RentalCarPickup",e[e.RentalCarDropOff=9]="RentalCarDropOff",e[e.InvoiceScheduled=10]="InvoiceScheduled",e[e.ServiceAppointment=11]="ServiceAppointment"}(n||(n={}));var o,s=n,c={TxpActivity:"TxpActivity",flightdeparture:s.FlightDeparture,hotelcheckin:s.HotelCheckin,hotelcheckout:s.HotelCheckout,invoicedue:s.InvoiceDue,invoicescheduled:s.InvoiceScheduled,parceldelivery:s.ParcelDelivery,rentalcarpickup:s.RentalCarPickup,rentalcardropoff:s.RentalCarDropOff,dining:s.Dining,miscevent:s.EventActivityType,serviceappointment:s.ServiceAppointment};!function(e){e[e.None=0]="None",e[e.Unexpected=1]="Unexpected",e[e.Configuration=2]="Configuration",e[e.Trust=3]="Trust",e[e.Error=4]="Error",e[e.ByDesign=5]="ByDesign",e[e.InThePast=6]="InThePast",e[e.SharedEvent=7]="SharedEvent"}(o||(o={}));var l,u=o,m={EventReservation:"miscevent",FlightReservation:"flightdeparture",FoodEstablishmentReservation:"dining",Invoice:"invoicedue",LodgingReservation:"hotelcheckin",ParcelDelivery:"parceldelivery",RentalCarReservation:"rentalcarpickup",ServiceReservation:"serviceappointment"};!function(e){e[e.Primary=0]="Primary",e[e.Secondary=1]="Secondary"}(l||(l={}));var d=l,v={primary:d.Primary,secondary:d.Secondary},f=2,p="",y=-1;function T(e,t,r,a){return{activityId:t.toString(),type:r,entityId:e,calendarEventIdIndex:y,eventOmission:u.None,role:v.primary,activityName:a}}var g={none:u.None,unexpected:u.Unexpected,configuration:u.Configuration,trust:u.Trust,error:u.Error,bydesign:u.ByDesign,inthepast:u.InThePast,sharedevent:u.SharedEvent};function h(e,t){var r=e.type?e.type.toLowerCase():null,a=c[r];return a?function(e,t,r,a){var n=e.calendarEventOmission?e.calendarEventOmission.toLowerCase():null,i=e.role?e.role.toLowerCase():null,o=g[n],s=v[i];return{activityId:a.toString(),type:t,entityId:e.entityId,calendarEventIdIndex:e.calendarEventIdIndex,eventOmission:o,role:s,activityName:r}}(e,a,r,t):null}var x,D={EventReservation:"EventReservation",FlightReservation:"FlightReservation",FoodReservation:"FoodEstablishmentReservation",Invoice:"Invoice",LodgingReservation:"LodgingReservation",ParcelDelivery:"ParcelDelivery",RentalCarReservation:"RentalCarReservation",ServiceReservation:"ServiceReservation",UnsuccessfulFlightReservation:"UnsuccessfulFlightReservation",UnsuccessfulLodgingReservation:"UnsuccessfulLodgingReservation",UnsuccessfulRentalCarReservation:"UnsuccessfulRentalCarReservation"};!function(e){e[e.EventSharingFromCalendar=0]="EventSharingFromCalendar",e[e.EventSharingFromMail=1]="EventSharingFromMail",e[e.EmailReminder=2]="EmailReminder"}(x||(x={}));var k=x,S="schema.org parser",R="schema",I="extraction";function b(e,t){if(e){var r=t?e["@EntityId"]:e["@id"];if(r){var a=k[e["additionalType/Txp"]],n=e["@source"],i=function(e,t){var r=null;return null!=e?r=k[e]:t&&(r=t.toLowerCase().indexOf(S)>-1?R:I),r}(a,n),o=e["originEmails/Txp"],s=e["@inferenceId"],c=e.immutableMessageIds,l=null,u=null,m=null;return o&&o.length&&(l=o[0].ewsId,u=o[0].receivedTime,m=o[0].internetMessageId),{id:r,source:n,trustScore:e["@entityExtractionTrustLevel"],txpAdditionalType:a,origin:i,originalEmailEwsId:l,originalEmailReceivedTime:u,originalEmailInternetMessageId:m,inferenceId:s,immutableMessageIds:c}}}return null}var L,C=r(10);!function(e){e[e.EventReservation=0]="EventReservation",e[e.FlightReservation=1]="FlightReservation",e[e.FoodReservation=2]="FoodReservation",e[e.Invoice=3]="Invoice",e[e.LodgingReservation=4]="LodgingReservation",e[e.ParcelDelivery=5]="ParcelDelivery",e[e.RentalCarReservation=6]="RentalCarReservation",e[e.ServiceReservation=7]="ServiceReservation",e[e.UnsuccessfulFlightReservation=8]="UnsuccessfulFlightReservation",e[e.UnsuccessfulLodgingReservation=9]="UnsuccessfulLodgingReservation",e[e.UnsuccessfulRentalCarReservation=10]="UnsuccessfulRentalCarReservation"}(L||(L={}));var F=L;function A(e,t){return e&&t?C.a({basicEntity:e},{name:t.name,phone:t.phone}):null}function U(e,t,r){if(e&&t){var a=void 0;if(t.reservationId)a=t.reservationId;else if(t.reservationNumber)a=t.reservationNumber;else if(!r)return null;var n=t.underName,i=C.a({},e,{reservationId:a,reservationStatus:t.reservationStatus,modifyReservationUrl:t.modifyReservationUrl,underName:A({},n)}),o=t.reservedTicket;if(o){var s=o.ticketSeat;i=C.a({},i,{reservedTicket:{ticketNumber:o.ticketNumber,seat:{row:s?s.seatRow:null,seatNumber:s?s.seatNumber:null,section:s?s.seatSection:null}}})}return i}return null}function N(e,t){return e&&t?C.a({},e,{streetAddress:t.streetAddress,addressLocality:t.addressLocality,addressRegion:t.addressRegion,addressCountry:t.addressCountry,postalCode:t.postalCode,postOfficeBoxNumber:t.postOfficeBoxNumber}):null}function P(e){var t=N({},e.reservationFor.address);return{name:e.reservationFor.name,address:t,telephone:e.reservationFor.telephone,city:e.reservationFor.city}}function E(e,t){if(e&&t){var r=C.a({},e,{name:t.name,telephone:t.telephone,city:t["address/commonCity"]});return t.address&&(r=C.a({},r,{address:C.a({},t.address)})),r}return null}var B="numSeats";function W(e){var t=0;return e[B]&&e[B]>0&&(t=parseInt(e[B],10)-1),t}function w(e,t){return e&&t?e=E(e=C.a({},e,{iataCode:t.iataCode}),t):null}function O(e,t){if(e&&t){var r=U(e,t,!1);if(function(e){if(e&&e.reservationFor&&e.reservationFor.provider){var t=e.reservationFor,r=e.reservationFor.provider;if(r.iataCode&&r.name&&M(t.arrivalAirport)&&M(t.departureAirport)&&t.flightNumber&&t.arrivalTime&&t.departureTime&&t.arrivalTime)return!0}return!1}(t)){var a=t.reservationFor,n=a.provider;return r=C.a({},r,{entityName:D.FlightReservation,entityType:F.FlightReservation,checkinUrl:t.checkinUrl?t.checkinUrl:t.potentialAction?t.potentialAction.target:null,departureTime:a.departureTime,departureTimeUTC:a["departureTime/utc"],departureTerminal:a.departureTerminal,departureGate:a.departureGate,departureTimeZone:a["departureTime/windowsTimeZoneName"],arrivalTime:a.arrivalTime,arrivalTimeUTC:a["arrivalTime/utc"],arrivalTerminal:a.arrivalTerminal,arrivalGate:a.arrivalGate,arrivalTimeZone:a["arrivalTime/windowsTimeZoneName"],flightNumber:a.flightNumber,airline:{name:n.name,iataCode:n.iataCode}}),r=C.a({},r,{departureAirport:w(r,a.departureAirport)}),r=C.a({},r,{arrivalAirport:w(r,a.arrivalAirport)})}}return null}function M(e){return!!(e&&e.iataCode&&(e["address/commonCity"]||e.address&&e.address.addressLocality))}function H(e,t){return e&&t?C.a({basicEntity:e},{name:t.name,telephone:t.telephone}):null}function $(e){if(e){if(!Array.isArray(e))return e;if(e.length>0)return e[0]}}function G(e,t){return e&&t?C.a({},e,{price:t.price,priceCurrency:t.priceCurrency}):null}function Y(e,t){if(e&&t&&function(e){if(e){var t=$(e.partOfOrder);if(t&&t.seller&&t.seller.name&&(e.expectedArrivalFrom||e.expectedArrivalUntil)&&e.deliveryAddress)return!0}return!1}(t)){var r=$(t.partOfOrder),a=r.seller,n=C.a({},e,{entityName:D.ParcelDelivery,entityType:F.ParcelDelivery,trackingUrl:t.trackingUrl,trackingNumber:t.trackingNumber,expectedArrivalFrom:t.expectedArrivalFrom,expectedArrivalUntil:t.expectedArrivalUntil,expectedArrivalUntilUtc:t["expectedArrivalUntil/utc"],deliveryAddress:{},partOfOrder:{orderNumber:r.orderNumber,orderStatus:r.orderStatus,seller:{name:a.name,telephone:a.telephone}}});n.provider=H({},t.provider),n.deliveryAddress=N({},t.deliveryAddress);var i=$(t.partOfOrder.orderedItem);return i&&(n.partOfOrder=C.a({},n.partOfOrder,{orderedItem:{url:i.url,name:i.name,sku:i.sku,description:i.description,brand:i.brand,color:i.color}})),n}return null}function z(e,t){if(t=$(t),e&&t){var r=C.a({},e,{name:t.name,description:t.addressLocality,model:t.model});return t.brand&&(r=C.a({},r,{brand:C.a({},t.brand)})),r}return null}function Z(e,t,r,a){if(e){var n=b(e,a);if(n){switch(e["@type"]){case D.FlightReservation:n=O(n,e);break;case D.RentalCarReservation:n=function(e,t){if(e&&t&&function(e){return!!(e.reservationFor&&e.dropoffLocation&&e.pickupLocation&&e.pickupTime&&e.dropoffTime)}(t)){var r=U(e,t,!0);return r=C.a({},r,{entityName:D.RentalCarReservation,entityType:F.RentalCarReservation,pickupTime:t.pickupTime,pickupTimeUTC:t["pickupTime/utc"],dropoffTime:t.dropoffTime,dropoffTimeUTC:t["dropoffTime/utc"],car:z(r,t.reservationFor),dropoffLocation:E(r,t.dropoffLocation),pickupLocation:E(r,t.pickupLocation),provider:t.provider})}return null}(n,e);break;case D.ParcelDelivery:n=Y(n,e);break;case D.LodgingReservation:n=function(e,t){if(e&&t&&function(e){return!!(e&&e.checkinTime&&e.checkoutTime&&e.reservationFor)}(t)){var r=U(e,t,!0),a=$((r=C.a({},r,{entityName:D.LodgingReservation,entityType:F.LodgingReservation,checkinTime:t.checkinTime,checkoutTime:t.checkoutTime,checkinTimeUTC:t["checkinTime/utc"],checkoutTimeUTC:t["checkoutTime/utc"],lodgingBusiness:{}})).lodgingBusiness);return a.address=N({},t.reservationFor.address),a.name=t.reservationFor.name,r}return null}(n,e);break;case D.FoodReservation:n=function(e,t){if(e&&t&&function(e){return!!(e&&e.startTime&&e.underName&&e.underName.name&&e.reservationFor&&e.reservationFor.name)}(t)){var r=U(e,t,!0);return r=C.a({},r,{entityName:D.FoodReservation,entityType:F.FoodReservation,startTime:t.startTime,startTimeUTC:t["startTime/utc"],partySize:Number(t["partySize/excludingOrganizer"]),restaurantInfo:P(t)})}return null}(n,e);break;case D.EventReservation:n=function(e,t){if(e&&t&&function(e){return!!(e&&e.reservationFor&&e.reservationFor.startDate&&e.underName&&e.underName.name)}(t)){var r=U(e,t,!0),a=t.reservationFor;if(a)return r=C.a({},r,{entityName:D.EventReservation,entityType:F.EventReservation,name:t.underName.name,startDate:a.startDate,startDateUtc:a["startDate/utc"],endDate:a.endDate,endDateUtc:a["endDate/utc"],numSeats:W(t),location:E(r,a.location),eventName:a.name})}return null}(n,e);break;case D.Invoice:n=t?(o=e,(i=n)&&o&&function(e){return!!(e&&e.accountId&&e.provider&&e.provider.name&&(e.scheduledPaymentDate||e.paymentDueDate))}(o)?C.a({},i,{entityName:D.Invoice,entityType:F.Invoice,accountId:o.accountId,billingPeriod:o.billingPeriod,scheduledPaymentDate:o.scheduledPaymentDate,broker:H({},o.broker),category:o.category,customer:o.customer,provider:H({},o.provider),minimumPaymentDue:G({},o.minimumPaymentDue),totalPaymentDue:G({},o.totalPaymentDue),paymentDueDate:o.paymentDueDate,potentialAction:(s={},c=o.potentialAction,l=$(c),s&&l?C.a({},s,{url:l.url,description:l.description}):null),paymentStatus:o.paymentStatus}):null):null;break;case D.ServiceReservation:n=r?function(e,t){if(e&&t&&function(e){if(e){var t=e.reservationFor;if(t&&t.name&&t.startTimeFrom&&t.provider&&t.provider.name)return!0}return!1}(t)){var r=U(e,t,!0),a=t.reservationFor;return r=C.a({},r,{entityName:D.ServiceReservation,entityType:F.ServiceReservation,startTimeFrom:a.startTimeFrom,startTimeFromUtc:t.reservationFor["startTimeFrom/utc"],endTimeFrom:a.endTimeFrom,endTimeFromUtc:t.reservationFor["endTimeFrom/utc"],name:a.name,underName:A(r,t.underName),provider:A(r,a.provider),location:E({},a.location),confirmReservationUrl:t.confirmReservationUrl,modifyReservationUrl:t.modifyReservationUrl})}return null}(n,e):null;break;default:return null}return n}}var i,o,s,c,l;return null}function X(e,t,r,a,n){if(e){var i=void 0,o=void 0;try{o=JSON.parse(e)}catch(e){o=null}if(o)if(i=function(e,t,r,a){var n={},i=[];return e&&e.forEach(function(e){var o=Z(e,t,r,a);if(!o)return null;n[o.id]=o,i.push(o)}),0==Object.keys(n).length?null:{entitiesDictionary:n,entitiesArray:i}}(function(e){var t;if(e){var r=e.filter(function(e){return e.type!=c.TxpActivity}).map(function(e){return e.entities});t=[].concat.apply([],r)}return 0!=t.length?t:null}(o),t,r,n)){var s=void 0;if(a)s=function(e){var t;if(e){t=[];for(var r=0;r<e.length;r++){var a=e[r],n=m[a.entityName],i=c[n];i&&t.push(T(a.id,r,i,n))}}return t}(i.entitiesArray);else s=function(e,t){if(e){for(var r=[],a=0;a<e.length;a++){var n=e[a];if(n&&t&&t[n.entityId]){var i=h(n,a);if(!i)return null;r.push(i)}}return 0==r.length?null:r}return null}(((l=o)&&(u=l.filter(function(e){return e.type==c.TxpActivity}).map(function(e){return e.entities})),0!=u[0].length?u[0]:null),i.entitiesDictionary);if(s&&s.length>0)return{txpEntities:i.entitiesDictionary,txpActivities:s}}}var l,u;return null}var j=r(1521),J=r.n(j),q=r(1212),V=r.n(q);function K(e,t,r){var a=V()(e);return J()(a,e)?t?r.formatWeekDayMonthDayYear(a):r.formatWeekDayDate(a):t?r.formatMonthDayShortTime(e):r.formatWeekDayDateTime(e)}function Q(e,t,r,a,n){return e?{text:e,label:t,icon:r,isRequired:a,placeholder:n}:null}var _={CheckIn:"TXPCheckIn",ConfirmReservation:"TXPConfirmReservation",TrackPackage:"TXPTrackPackage",ModifyReservation:"TXPModifyReservation",PayBill:"TXPPayBill"};var ee=r(1213),te=r.n(ee);var re=r(1524),ae=r.n(re);function ne(e,t,r,a,n,i,o,c){var l,u,m,d=!1,v=n.formatters.format(n.strings.flightSummaryFirstLine,e.arrivalAirport.city),f=n.formatters.format(n.strings.flightSummarySecondLine,e.airline.name,e.airline.iataCode,e.flightNumber),p=e.reservationId&&n.formatters.format(n.strings.flightSummaryThirdLine,e.reservationId),y=e.departureTime,T=e.arrivalTime,g=e.departureAirport.iataCode,h=e.departureAirport.city,x=n.formatters.formatUserTime(y),D=n.formatters.formatWeekDayMonthDayYear(y),k=n.formatters.formatWeekDayDate(y),S=e.departureTerminal,R=e.departureGate,I=e.arrivalAirport.iataCode,b=e.arrivalAirport.city,L=n.formatters.formatUserTime(T),C=n.formatters.formatWeekDayMonthDayYear(T),A=n.formatters.formatWeekDayDate(T),U=e.arrivalTerminal,N=e.arrivalGate;u=n.formatters.formatWeekDayDateTime(y);var P=n.formatters.format(n.strings.brandSummaryFlightSecondLineText,e.airline.iataCode,e.flightNumber,e.arrivalAirport.iataCode,n.formatters.formatShortMonthDayYear(y)),E=n.formatters.format(n.strings.flightDepartureArrivalAriaText,x,D,h,g,L,C,b,I),B=new Date(e.departureTimeUTC),W=new Date;ae()(B,W)&&(d=!0);var w=e.checkinUrl&&d?{actionIconName:c.airPlane,actionUrl:e.checkinUrl,actionButtonText:n.strings.checkinText,actionName:_.CheckIn}:null;if(e.arrivalTimeUTC&&B){var O=new Date(e.arrivalTimeUTC),M=te()(O,B),H=n.formatters.durationFormatter(M);u=n.formatters.format(n.strings.flightSummaryFourthLine,u,H)}return e.reservedTicket&&e.reservedTicket.seat&&(e.reservedTicket.seat.seatNumber||e.reservedTicket.seat.row)&&(l=n.formatters.format(n.strings.flightSeatText,e.reservedTicket.seat.seatNumber,e.reservedTicket.seat.row)),t&&(m=function(e,t,r){var a=e.departureTime,n=e.arrivalTimeUTC,i=e.departureTimeUTC,o=e.departureAirport,s=e.arrivalAirport,c=e.airline,l=e.flightNumber,u=t.formatters.formatUserTime(a),m=t.formatters.formatWeekDayMonthDayYear(a),d=null;if(n&&i){var v=new Date(i),f=new Date(n),p=te()(f,v);d=t.formatters.durationFormatter(p)}var y="";y=d?t.formatters.format(t.strings.flightBusStopSummaryWithDurationFormatText,o.city,t.formatters.formatWeekDayDateTime(a),d):t.formatters.format(t.strings.flightBusStopSummaryFormatText,o.city,t.formatters.formatWeekDayDateTime(a));var T=t.formatters.format(t.strings.flightBusStopAriaText,o.city,m,u);return{busStopLabel:t.strings.flightBusStopLabelText,busStopText:t.formatters.format(t.strings.flightBusStopFirstLineFormatText,c.name,c.iataCode,l,s.city),collapsedText:y,ariaBusStopText:T,icon:r}}(e,n,c.airPlane)),{departureIATA:g,arrivalIATA:I,departureTime:x,arrivalTime:L,departureDate:k,arrivalDate:A,departureTerminal:Q(S,n.strings.flightTerminalLabel,null),departureGate:Q(R,n.strings.flightGateLabel,null),arrivalTerminal:Q(U,n.strings.flightTerminalLabel,null),arrivalGate:Q(N,n.strings.flightGateLabel,null),arrivalsIcon:c.arrivals,departureCity:h,arrivalCity:b,seat:Q(l,n.strings.flightSeatLabel,null),summaryData:{firstLine:{text:v},secondLine:{text:f},thirdLine:{text:p},fourthLine:Q(u,n.strings.flightDepartureLabel,c.clock)},ariaText:E,entityIcon:i,entityImage:a,activityType:s.FlightDeparture,brandsSummaryFirstLine:v,brandsSummarySecondLine:P,busStopData:m,id:r,entityType:F.FlightReservation,actionButtonData:w,calendarEventId:o,isFutureFlight:d}}function ie(e,t,r,a,n,o,c,l,u,m,d){var v,f,y,T,g,h=e.lodgingBusiness;h&&(T=h.name,g=h.address);var x=h&&g?g.streetAddress:null,D=e.reservationId&&c.formatters.format(c.strings.reservationCodeText,e.reservationId),k=K(e.checkoutTime,!1,c.formatters),S=K(e.checkinTime,!1,c.formatters),R=e.modifyReservationUrl?{actionIconName:d.edit,actionUrl:e.modifyReservationUrl,actionButtonText:c.strings.modifyReservationText,actionName:_.ModifyReservation}:null;return u==i.Combined?(v=S,f=Q(k,c.strings.hotelCheckOutText)):r==s.HotelCheckout?f=Q(k,c.strings.hotelCheckOutText,d.clock):r==s.HotelCheckin&&(v=S),t&&(y=function(e,t,r,a){var n,i,o,c=e.lodgingBusiness?e.lodgingBusiness.name:null;if(t==s.HotelCheckout){i=r.formatters.format(r.strings.hotelCheckOutText,p);var l=K(e.checkoutTime,!1,r.formatters);o=K(e.checkoutTime,!0,r.formatters),n=l}else if(t==s.HotelCheckin){i=r.formatters.format(r.strings.hotelCheckInText,p);var u=K(e.checkinTime,!1,r.formatters);o=K(e.checkinTime,!0,r.formatters),n=u}return{busStopLabel:i,busStopText:c,collapsedText:n,ariaBusStopText:o,icon:a}}(e,r,c,d.hotel)),x=n?x:null,{id:a,summaryData:{firstLine:Q(h.name,null,null,!0,c.strings.placeHolderForHotelName),secondLine:{text:D}},entityIcon:l,entityImage:o,activityType:r,entityType:F.LodgingReservation,busStopData:y,editableField:T,detailsData:{firstLine:Q(v,c.strings.hotelCheckInText,d.clock),secondLine:f,thirdLine:Q(x,null,d.location,!0,c.strings.placeHolderForLocation)},brandsSummaryFirstLine:h.name,brandsSummarySecondLine:c.formatters.formatWeekDayDateTime(e.checkinTime),actionButtonData:R,calendarEventId:m,inferenceId:e.inferenceId}}function oe(e,t,r,a,n,i,o,c,l){var u,m,d,v,f,p,y=e.customer?e.customer.name:"",T=!!e.scheduledPaymentDate,g=e.totalPaymentDue&&e.totalPaymentDue.price?e.totalPaymentDue.price:null;m=g?T?i.strings.invoiceAriaWithScheduledFormatText:i.strings.invoiceAriaWithDueFormatText:T?i.strings.invoiceAriaWithScheduledNoAmountFormatText:i.strings.invoiceAriaWithDueNoAmountFormatText;var h=T?i.strings.invoiceScheduledText:i.strings.invoiceDueText;T?(f=i.formatters.formatWeekDayDate(e.scheduledPaymentDate),p=i.formatters.format(i.strings.brandSummaryInvoiceSecondLineText,g,i.formatters.formatUserDate(e.scheduledPaymentDate)),d=i.formatters.formatWeekDayMonthDayYear(e.scheduledPaymentDate)):(f=i.formatters.formatWeekDayDate(e.paymentDueDate),p=i.formatters.format(i.strings.brandSummaryInvoiceSecondLineText,g,i.formatters.formatUserDate(e.paymentDueDate)),d=i.formatters.formatWeekDayMonthDayYear(e.paymentDueDate)),u=f,v=i.formatters.format(m,d,g)+" "+y;var x,D=e.potentialAction&&e.potentialAction.url?{actionIconName:l.paymentCard,actionUrl:e.potentialAction.url,actionButtonText:i.strings.payBillButtonText,actionName:_.PayBill}:null;return t&&(x=function(e,t,r,a,n,i,o,c){var l,u,m,d,v=t==s.InvoiceScheduled;return r?(m=v?o.strings.invoiceWithScheduledWholeCardSummaryText:o.strings.invoiceWithDueWholeCardSummaryText,d=v?o.strings.invoiceWithScheduledBusStopText:o.strings.invoiceWithDueBusStopText):(m=v?o.strings.invoiceWithScheduledNoAmountWholeCardSummaryText:o.strings.invoiceWithDueNoAmountWholeCardSummaryText,d=v?o.strings.invoiceWithScheduledNoAmountBusStopText:o.strings.invoiceWithDueNoAmountBusStopText),l=o.formatters.format(d,e.provider.name,a,r),u=o.formatters.format(m,e.provider.name,e.accountId,n,r)+" "+i,{busStopLabel:o.strings.invoiceLabelText,busStopText:o.formatters.format(o.strings.invoiceBillText,e.provider.name),collapsedText:l,ariaBusStopText:u,icon:c}}(e,r,g,f,d,y,i,l.paymentCard)),{id:a,entityIcon:o,entityImage:n,activityType:r,entityType:F.Invoice,summaryData:{firstLine:{text:i.formatters.format(i.strings.invoiceBillText,e.provider.name)},secondLine:{text:i.formatters.format(i.strings.invoiceAccountNumberText,e.accountId)}},detailsData:{firstLine:Q(u,h,l.clock),secondLine:Q(y,i.strings.invoiceCustomerText,l.contact),thirdLine:g?Q(g,i.strings.invoiceAmountText,l.money):null},actionButtonData:D,calendarEventId:c,ariaText:v,busStopData:x,brandsSummaryFirstLine:i.strings.brandSummaryInvoiceFirstLineText,brandsSummarySecondLine:p}}var se=r(1525),ce=r.n(se);function le(e,t,r,a,n,o,c,l,u,m,d){var v,f,y,T,g,h,x,D,k=e.car,S=e.provider?e.provider.name:null,R=K(e.pickupTime,!1,c.formatters),I=e.reservationId&&c.formatters.format(c.strings.reservationCodeText,e.reservationId),b=K(e.dropoffTime,!1,c.formatters),L=e.modifyReservationUrl?{actionIconName:d.edit,actionUrl:e.modifyReservationUrl,actionButtonText:c.strings.modifyReservationText,actionName:_.ModifyReservation}:null;if(k&&k.model&&k.brand&&k.brand.name&&(y=c.formatters.format(c.strings.carText,k.brand.name,k.model)),u==i.Combined)D=e.dropoffLocation,v=c.formatters.format(c.strings.reservationText,S),T=R,g=Q(b,c.strings.dropOffText);else if(r==s.RentalCarPickup)D=e.pickupLocation,v=c.formatters.format(c.strings.pickUpSuffixText,S),T=R;else{if(r!=s.RentalCarDropOff)return null;D=e.dropoffLocation,v=c.formatters.format(c.strings.dropOffSuffixText,S),g=Q(b,c.strings.dropOffText,d.clock)}return D&&(h=D.name,x=D.address?D.address.streetAddress:null),t&&(f=function(e,t,r,a,n){var i,o,c,l=r?r.name:null;if(t==s.RentalCarPickup)o=a.formatters.format(a.strings.pickUpText,p),i=K(e.pickupTime,!1,a.formatters),c=K(e.pickupTime,!0,a.formatters);else{if(t!=s.RentalCarDropOff)return null;o=a.formatters.format(a.strings.dropOffText,p),i=K(e.dropoffTime,!1,a.formatters),c=K(e.dropoffTime,!0,a.formatters)}return{busStopLabel:o,busStopText:l,collapsedText:i,ariaBusStopText:c,icon:n}}(e,r,D,c,d.car)),x=n?x:null,{id:a,summaryData:{firstLine:{text:v},secondLine:{text:I}},entityImage:o,entityIcon:l,activityType:r,entityType:F.RentalCarReservation,busStopData:f,detailsData:{firstLine:Q(h,null,d.building),secondLine:Q(y,null,d.parkingLocation),thirdLine:Q(T,c.strings.pickUpText,d.clock),fourthLine:g,fifthLine:Q(x,null,d.location)},brandsSummaryFirstLine:v,brandsSummarySecondLine:c.formatters.formatWeekDayDateTime(e.pickupTime),actionButtonData:L,calendarEventId:m}}var ue="http://schema.org/ReservationPending",me="http://schema.org/ReservationHold",de="http://schema.org/ReservationConfirmed";function ve(e,t){switch(e){case ue:return t.strings.reservationPendingText;case me:return t.strings.reservationHoldText;default:return null}}function fe(e,t,r,a,n,i,o,c){var l,u,m=e.activityId;c&&(u=function(e,t){var r=e.calendarEventIdIndex;if(r===y)return null;var a=t[r];return a?a.Id:null}(e,c));var d=(i=i||{}).detailsIcons?i.detailsIcons:{},v=function(e){return e?e.image:null},f=function(e){return e?e.icon:null},p=!0;switch(e.type){case s.FlightDeparture:l=ne(t,r,m,v(i.flight),n,f(i.flight),u,d);break;case s.ParcelDelivery:l=function(e,t,r,a,n,i,o,c){var l,u=e.partOfOrder,m=u.seller?u.seller.name:null,d=u?u.orderNumber:null,v=n.formatters.format(n.strings.parcelDeliveryFirstLine,m),f=n.formatters.format(n.strings.parcelDeliverySecondLine,d),p=e.expectedArrivalUntil,y=e.expectedArrivalFrom;p&&(l=y&&!ce()(y,p)?n.formatters.format(n.strings.deliveryTextRange,n.formatters.formatWeekDayDate(y),n.formatters.formatWeekDayDate(p)):n.formatters.formatWeekDayDate(p));var T=e.trackingNumber,g=e.provider?e.provider.name:null,h=u?u.orderedItem:null,x=u&&h&&h.name?h.name:null,D=T&&g?n.formatters.format(n.strings.trackingText,g,T):null,k=e.deliveryAddress,S=k&&k.streetAddress?k.streetAddress:null;S=r?S:null;var R=e.trackingUrl?{actionIconName:c.deliveryTruck,actionUrl:e.trackingUrl,actionButtonText:n.strings.trackPackageButtonText,actionName:_.TrackPackage}:null;return{id:t,entityImage:a,entityIcon:i,activityType:s.ParcelDelivery,entityType:F.ParcelDelivery,summaryData:{firstLine:{text:v},secondLine:{text:f}},detailsData:{firstLine:Q(x,null,i),secondLine:Q(D,null,c.deliveryTruck),thirdLine:Q(l,n.strings.deliveryText,c.clock),fourthLine:Q(S,null,c.location)},brandsSummaryFirstLine:v,brandsSummarySecondLine:n.formatters.format(n.strings.brandSummaryPackageSecondLineText,n.formatters.formatWeekDayDate(p)),actionButtonData:R,calendarEventId:o}}(t,m,!a,v(i.parcelDelivery),n,f(i.parcelDelivery),u,d);break;case s.RentalCarPickup:case s.RentalCarDropOff:l=le(t,r,e.type,m,!a,v(i.rentalCar),n,f(i.rentalCar),o,u,d);break;case s.HotelCheckin:case s.HotelCheckout:l=ie(t,r,e.type,m,!a,v(i.lodging),n,f(i.lodging),o,u,d);break;case s.EventActivityType:l=function(e,t,r,a,n,i,o,c,l){var u,m,d,v=e.location?e.location:null,f=e.reservedTicket?e.reservedTicket.ticketNumber:null,p=i.formatters.format(i.strings.reservationText,e.eventName),y=e.reservationId&&i.formatters.format(i.strings.reservationCodeText,e.reservationId),T=K(e.startDate,!1,i.formatters),g=K(e.startDate,!0,i.formatters),h=e.underName.name,x=h;1==e.numSeats?x=i.formatters.format(i.strings.eventReservationWithOneGuestText,h):e.numSeats>1&&(x=i.formatters.format(i.strings.eventReservationWithGuestsText,h,e.numSeats)),v&&(v.name?d=v.name:v.address.streetAddress&&(d=v.address.streetAddress));var D=e.modifyReservationUrl?{actionIconName:l.edit,actionUrl:e.modifyReservationUrl,actionButtonText:i.strings.modifyReservationText,actionName:_.ModifyReservation}:null,k=[];f&&k.push(f);var S,R=function(e,t){var r,a=null,n=t.strings,i=n.eventSectionRowSeatPlaceholder,o=n.eventSeatRowPlaceholder,s=n.eventSeatPlaceholder;if(e&&e.seat&&e.seat.seatNumber){var c=e.seat,l=c.row,u=c.seatNumber,m=c.section;l?m?(r=i,a=t.formatters.format(r,m,l,u)):(r=o,a=t.formatters.format(r,l,u)):(r=s,a=t.formatters.format(r,u))}return a}(e.reservedTicket,i);R&&k.push(R),S=2==k.length?(u=i.formatters).format.apply(u,C.e([i.strings.cityDateFormatText],k)):k[0]||null;var I={firstLine:Q(T,i.strings.eventTimePrefixText,l.clock),secondLine:Q(x,i.strings.reservationForText,l.contact),thirdLine:Q(S,i.strings.eventTicketLabel,l.ticket),fourthLine:a?Q(d,null,l.location):null};return t&&(m=function(e,t,r,a,n){var i,o,s=e.location?e.location.city:null;return s?(i=a.formatters.format(a.strings.cityDateFormatText,s,t),o=a.formatters.format(a.strings.cardWithCitySummaryAriaText,e.eventName,s,r)):(i=t,o=a.formatters.format(a.strings.cardSummaryAriaText,e.eventName,r)),{busStopLabel:a.strings.reservationLabelText,busStopText:e.eventName,collapsedText:i,ariaBusStopText:o,icon:n}}(e,T,g,i,l.event)),{id:r,summaryData:{firstLine:{text:p},secondLine:{text:y}},entityIcon:o,entityImage:n,activityType:s.EventActivityType,entityType:F.EventReservation,detailsData:I,actionButtonData:D,calendarEventId:c,ariaText:i.formatters.format(i.strings.eventAriaFormatText,g,I.secondLine&&I.secondLine.text,I.thirdLine&&I.thirdLine.text,d),busStopData:m,brandsSummaryFirstLine:e.eventName,brandsSummarySecondLine:i.formatters.formatWeekDayDateTime(e.startDate)}}(t,r,m,!a,v(i.event),n,f(i.event),u,d);break;case s.Dining:l=function(e,t,r,a,n,i,o,c,l){var u,m=e.restaurantInfo,d=i.formatters.format(i.strings.reservationText,m.name),v=e.reservationId&&i.formatters.format(i.strings.reservationCodeText,e.reservationId),f=e.underName.name,p=K(e.startTime,!1,i.formatters),y=K(e.startTime,!0,i.formatters),T=function(e,t,r){var a=e;return 1==t?a=r.formatters.format(r.strings.restaurantReservationWithOneGuestText,e):t>1&&(a=r.formatters.format(r.strings.restaurantReservationWithGuestsText,e,t)),a}(f,e.partySize,i),g=m.telephone?m.telephone:null,h=m.address?m.address.streetAddress:null,x=e.modifyReservationUrl?{actionIconName:l.edit,actionUrl:e.modifyReservationUrl,actionButtonText:i.strings.modifyReservationText,actionName:_.ModifyReservation}:null;t&&(u=function(e,t,r,a,n){var i,o;return e.city?(i=a.formatters.format(a.strings.cityDateFormatText,e.city,t),o=a.formatters.format(a.strings.cardWithCitySummaryAriaText,e.name,r,e.city)):(i=t,o=a.formatters.format(a.strings.cardSummaryAriaText,e.name,r)),{icon:n,busStopLabel:a.strings.reservationLabelText,busStopText:e.name,collapsedText:i,ariaBusStopText:o}}(m,p,y,i,l.eatDrink));var D=i.formatters.format(i.strings.restaurantAriaFormatText,y,f,g,h);return h=a?h:null,{id:r,entityIcon:o,summaryData:{firstLine:{text:d},secondLine:{text:v}},entityImage:n,activityType:s.Dining,entityType:F.FoodReservation,detailsData:{firstLine:Q(p,i.strings.eventTimePrefixText,l.clock),secondLine:Q(T,i.strings.reservationForText,l.contact),thirdLine:Q(g,i.strings.restaurantReservationPhoneText,l.phone),fourthLine:Q(h,null,l.location)},busStopData:u,brandsSummaryFirstLine:m.name,brandsSummarySecondLine:i.formatters.formatWeekDayDateTime(e.startTime),actionButtonData:x,calendarEventId:c,ariaText:D}}(t,r,m,!a,v(i.dining),n,f(i.dining),u,d);break;case s.InvoiceDue:case s.InvoiceScheduled:l=oe(t,r,e.type,m,v(i.invoice),n,f(i.invoice),u,d);break;case s.ServiceAppointment:l=function(e,t,r,a,n,i,o,c,l){var u,m,d,v=e.name,f=e.reservationId?i.formatters.format(i.strings.reservationCodeText,e.reservationId):null,p=K(e.startTimeFrom,!1,i.formatters),y=K(e.startTimeFrom,!0,i.formatters),T=e.location;T&&T.address&&(m=T.address.streetAddress),e.reservationStatus&&(d=e.reservationStatus==de?e.modifyReservationUrl?{actionIconName:l.edit,actionUrl:e.modifyReservationUrl,actionButtonText:i.strings.modifyReservationText,actionName:_.ModifyReservation}:null:e.confirmReservationUrl?{actionIconName:l.accept,actionUrl:e.confirmReservationUrl,actionButtonText:i.strings.confirmReservationText,actionName:_.ConfirmReservation}:null);var g={firstLine:Q(p,i.strings.eventTimePrefixText,l.clock),secondLine:Q(e.provider.name,i.strings.reservationProviderText,l.contact),thirdLine:a?Q(m,null,l.location):null},h=i.formatters.format(i.strings.eventAriaFormatText,y,g.secondLine&&g.secondLine.text,g.thirdLine&&g.thirdLine.text,m);return t&&(u=function(e,t,r,a,n){var i=a.formatters.format(a.strings.cardSummaryAriaText,e.name,r);return{busStopLabel:a.strings.reservationLabelText,busStopText:e.name,collapsedText:t,ariaBusStopText:i,icon:n}}(e,p,y,i,l.appointment)),{id:r,summaryData:{firstLine:{text:v},secondLine:{text:f}},entityIcon:o,entityImage:n,activityType:s.ServiceAppointment,entityType:F.ServiceReservation,detailsData:g,actionButtonData:d,calendarEventId:c,ariaText:h,busStopData:u}}(t,r,m,!a,v(i.serviceReservation),n,f(i.serviceReservation),u,d),p=!1;break;default:l=null}var T=t&&t.reservationStatus;return l&&T&&p&&(l=C.a({},l,function(e,t,r){return{reservationStatus:e?Q(ve(e.reservationStatus,t),null,r.warning):null}}(t,n,d))),l}function pe(e,t,r,a,n,o,s,c){var l=[];return e.forEach(function(e){var u=t[e.entityId],m=c||0===c?c:function(e,t){var r=t[e.entityId];return 2==r?i.Primary:1==r?(t[e.entityId]=0,i.Combined):null}(e,r);if(null!=m){var d=fe(e,u,!1,a,n,o,m,s);l.push(d)}}),l}function ye(e,t,r,a,n,i){if(e){var o=e.txpActivities,s=e.txpEntities,c=function(e){if(e){var t={};return e.forEach(function(e){if(e&&e.role==d.Primary){var r=e.entityId;t[r]?t[r]+=1:t[r]=1}}),t}return null}(o),l=Object.values(c).reduce(function(e,t){return e+t})>f;if(o&&s&&c)return{cardItems:l?function(e,t,r,a,n,i){var o=[];return e.forEach(function(e){var s=fe(e,t[e.entityId],!0,r,a,n,null,i);o.push(s)}),o}(o,s,r,a,n,t):pe(o,s,c,r,a,n,t,i),isBusStopEnabled:l}}return null}var Te=r(1099),ge=r(428);r.d(t,"LogNames",function(){return ge.a}),r.d(t,"CardRole",function(){return i}),r.d(t,"convertTxpBlobToObject",function(){return X}),r.d(t,"populateActionButtonDataPoint",function(){return Te.a}),r.d(t,"populateViewCards",function(){return ye})}}]);