self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.13.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[13],{3380:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n(0),o=n(1),i=n(43),r=n(185),u=n(274),a=function(e){function t(t){var n=e.call(this,t)||this;return n._inputElement=o.createRef(),n._autoFillEnabled=!0,n._onCompositionStart=function(e){n._autoFillEnabled=!1},n._onCompositionEnd=function(e){var t=n._getCurrentInputValue();n._tryEnableAutofill(t,n.value,!1,!0);var s="ko"===e.nativeEvent.locale;n._async.setTimeout(function(){var e=s?n.value:n._getCurrentInputValue();n._updateValue(e)},0)},n._onClick=function(){n._value&&""!==n._value&&n._autoFillEnabled&&(n._autoFillEnabled=!1)},n._onKeyDown=function(e){if(n.props.onKeyDown&&n.props.onKeyDown(e),!e.nativeEvent.isComposing)switch(e.which){case i.a.backspace:n._autoFillEnabled=!1;break;case i.a.left:case i.a.right:n._autoFillEnabled&&(n._value=n.state.displayValue,n._autoFillEnabled=!1);break;default:n._autoFillEnabled||-1!==n.props.enableAutofillOnKeyPress.indexOf(e.which)&&(n._autoFillEnabled=!0)}},n._onInputChanged=function(e){var t=n._getCurrentInputValue(e);n._tryEnableAutofill(t,n._value,e.nativeEvent.isComposing),n._updateValue(t)},n._onChanged=function(){},n._updateValue=function(e){(e||e!==n._value)&&(n._value=n.props.onInputChange?n.props.onInputChange(e):e,n.setState({displayValue:n._getDisplayValue(n._value,n.props.suggestedDisplayValue)},function(){return n._notifyInputChange(n._value)}))},n._value=t.defaultVisibleValue||"",n.state={displayValue:t.defaultVisibleValue||""},n}return s.__extends(t,e),Object.defineProperty(t.prototype,"cursorLocation",{get:function(){if(this._inputElement.current){var e=this._inputElement.current;return"forward"!==e.selectionDirection?e.selectionEnd:e.selectionStart}return-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isValueSelected",{get:function(){return Boolean(this.inputElement&&this.inputElement.selectionStart!==this.inputElement.selectionEnd)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this._inputElement.current?this._inputElement.current.selectionStart:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this._inputElement.current?this._inputElement.current.selectionEnd:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputElement",{get:function(){return this._inputElement.current},enumerable:!0,configurable:!0}),t.prototype.componentWillReceiveProps=function(e){var t;this.props.updateValueInWillReceiveProps&&(t=this.props.updateValueInWillReceiveProps()),"string"==typeof(t=this._getDisplayValue(t||this._value,e.suggestedDisplayValue))&&this.setState({displayValue:t})},t.prototype.componentDidUpdate=function(){var e=this._value,t=this.props,n=t.suggestedDisplayValue,s=t.shouldSelectFullInputValueInComponentDidUpdate,o=0;if(!t.preventValueSelection&&this._autoFillEnabled&&e&&n&&this._doesTextStartWith(n,e)){var i=!1;if(s&&(i=s()),i&&this._inputElement.current)this._inputElement.current.setSelectionRange(0,n.length,"backward");else{for(;o<e.length&&e[o].toLocaleLowerCase()===n[o].toLocaleLowerCase();)o++;o>0&&this._inputElement.current&&this._inputElement.current.setSelectionRange(o,n.length,"backward")}}},t.prototype.render=function(){var e=this.state.displayValue,t=Object(r.j)(this.props,r.o);return o.createElement("input",s.__assign({},t,{ref:this._inputElement,value:e,autoCapitalize:"off",autoComplete:"off",onCompositionStart:this._onCompositionStart,onCompositionEnd:this._onCompositionEnd,onChange:this._onChanged,onInput:this._onInputChanged,onKeyDown:this._onKeyDown,onClick:this.props.onClick?this.props.onClick:this._onClick,"data-lpignore":!0}))},t.prototype.focus=function(){this._inputElement.current&&this._inputElement.current.focus()},t.prototype.clear=function(){this._autoFillEnabled=!0,this._updateValue(""),this._inputElement.current&&this._inputElement.current.setSelectionRange(0,0)},t.prototype._getCurrentInputValue=function(e){return e&&e.target&&e.target.value?e.target.value:this.inputElement&&this.inputElement.value?this.inputElement.value:""},t.prototype._tryEnableAutofill=function(e,t,n,s){!n&&e&&this._inputElement.current&&this._inputElement.current.selectionStart===e.length&&!this._autoFillEnabled&&(e.length>t.length||s)&&(this._autoFillEnabled=!0)},t.prototype._notifyInputChange=function(e){this.props.onInputValueChange&&this.props.onInputValueChange(e)},t.prototype._getDisplayValue=function(e,t){var n=e;return t&&e&&this._doesTextStartWith(t,n)&&this._autoFillEnabled&&(n=t),n},t.prototype._doesTextStartWith=function(e,t){return!(!e||!t)&&0===e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())},t.defaultProps={enableAutofillOnKeyPress:[i.a.down,i.a.up]},t}(u.a);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}s.__extends(t,e)}(a)},3690:function(e,t,n){"use strict";n.r(t),n.d(t,"root",function(){return o}),n.d(t,"suggestionsItem",function(){return i}),n.d(t,"closeButton",function(){return r}),n.d(t,"suggestionsItemIsSuggested",function(){return u}),n.d(t,"itemButton",function(){return a}),n.d(t,"actionButton",function(){return g}),n.d(t,"buttonSelected",function(){return l}),n.d(t,"suggestionsTitle",function(){return c}),n.d(t,"suggestionsContainer",function(){return p}),n.d(t,"suggestionsNone",function(){return d}),n.d(t,"suggestionsSpinner",function(){return h}),n.d(t,"suggestionsAvailable",function(){return m});var s=n(681);Object(s.loadStyles)([{rawString:".root_ca1e4ebe{min-width:260px}.suggestionsItem_ca1e4ebe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative;overflow:hidden}.suggestionsItem_ca1e4ebe:hover{background:"},{theme:"neutralLighter",defaultValue:"#f3f2f1"},{rawString:"}.suggestionsItem_ca1e4ebe:hover .closeButton_ca1e4ebe{display:block}.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe{background:"},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:"}.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe:hover{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c6c4"},{rawString:"}@media screen and (-ms-high-contrast: active){.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe:hover{background:Highlight;color:HighlightText}}@media screen and (-ms-high-contrast: active){.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe{background:Highlight;color:HighlightText;-ms-high-contrast-adjust:none}}.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe .closeButton_ca1e4ebe:hover{background:"},{theme:"neutralTertiary",defaultValue:"#a19f9d"},{rawString:";color:"},{theme:"neutralPrimary",defaultValue:"#323130"},{rawString:"}@media screen and (-ms-high-contrast: active){.suggestionsItem_ca1e4ebe.suggestionsItemIsSuggested_ca1e4ebe .itemButton_ca1e4ebe{color:HighlightText}}.suggestionsItem_ca1e4ebe .closeButton_ca1e4ebe{display:none;color:"},{theme:"neutralSecondary",defaultValue:"#605e5c"},{rawString:"}.suggestionsItem_ca1e4ebe .closeButton_ca1e4ebe:hover{background:"},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:"}.actionButton_ca1e4ebe{background:none;background-color:transparent;border:0;cursor:pointer;margin:0;position:relative;border-top:1px solid "},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:";height:40px;width:100%;font-size:12px}[dir='ltr'] .actionButton_ca1e4ebe{padding-left:8px}[dir='rtl'] .actionButton_ca1e4ebe{padding-right:8px}html[dir='ltr'] .actionButton_ca1e4ebe{text-align:left}html[dir='rtl'] .actionButton_ca1e4ebe{text-align:right}.actionButton_ca1e4ebe:hover{background-color:"},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:";cursor:pointer}.actionButton_ca1e4ebe:focus,.actionButton_ca1e4ebe:active{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:"}.actionButton_ca1e4ebe .ms-Button-icon{font-size:16px;width:25px}.actionButton_ca1e4ebe .ms-Button-label{margin:0 4px 0 9px}html[dir='rtl'] .actionButton_ca1e4ebe .ms-Button-label{margin:0 9px 0 4px}.buttonSelected_ca1e4ebe{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:"}.suggestionsTitle_ca1e4ebe{padding:0 12px;color:"},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:";font-size:12px;line-height:40px;border-bottom:1px solid "},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:"}.suggestionsContainer_ca1e4ebe{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid "},{theme:"neutralLight",defaultValue:"#edebe9"},{rawString:"}.suggestionsNone_ca1e4ebe{text-align:center;color:#797775;font-size:12px;line-height:30px}.suggestionsSpinner_ca1e4ebe{margin:5px 0;white-space:nowrap;line-height:20px;font-size:12px}html[dir='ltr'] .suggestionsSpinner_ca1e4ebe{padding-left:14px}html[dir='rtl'] .suggestionsSpinner_ca1e4ebe{padding-right:14px}html[dir='ltr'] .suggestionsSpinner_ca1e4ebe{text-align:left}html[dir='rtl'] .suggestionsSpinner_ca1e4ebe{text-align:right}.suggestionsSpinner_ca1e4ebe .ms-Spinner-circle{display:inline-block;vertical-align:middle}.suggestionsSpinner_ca1e4ebe .ms-Spinner-label{display:inline-block;margin:0px 10px 0 16px;vertical-align:middle}html[dir='rtl'] .suggestionsSpinner_ca1e4ebe .ms-Spinner-label{margin:0px 16px 0 10px}.itemButton_ca1e4ebe.itemButton_ca1e4ebe{width:100%;padding:0px;min-width:0;height:100%}@media screen and (-ms-high-contrast: active){.itemButton_ca1e4ebe.itemButton_ca1e4ebe{color:WindowText}}.itemButton_ca1e4ebe.itemButton_ca1e4ebe:hover{color:"},{theme:"neutralDark",defaultValue:"#201f1e"},{rawString:"}.closeButton_ca1e4ebe.closeButton_ca1e4ebe{padding:0 4px;height:auto;width:32px}@media screen and (-ms-high-contrast: active){.closeButton_ca1e4ebe.closeButton_ca1e4ebe{color:WindowText}}.closeButton_ca1e4ebe.closeButton_ca1e4ebe:hover{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c6c4"},{rawString:";color:"},{theme:"neutralDark",defaultValue:"#201f1e"},{rawString:"}.suggestionsAvailable_ca1e4ebe{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n"}]);var o="root_ca1e4ebe",i="suggestionsItem_ca1e4ebe",r="closeButton_ca1e4ebe",u="suggestionsItemIsSuggested_ca1e4ebe",a="itemButton_ca1e4ebe",g="actionButton_ca1e4ebe",l="buttonSelected_ca1e4ebe",c="suggestionsTitle_ca1e4ebe",p="suggestionsContainer_ca1e4ebe",d="suggestionsNone_ca1e4ebe",h="suggestionsSpinner_ca1e4ebe",m="suggestionsAvailable_ca1e4ebe"},3802:function(e,t,n){"use strict";var s={};n.r(s),n.d(s,"callout",function(){return g});var o={};n.r(o),n.d(o,"suggestionsContainer",function(){return f});var i={};n.r(i),n.d(i,"root",function(){return v}),n.d(i,"actionButton",function(){return y}),n.d(i,"buttonSelected",function(){return I}),n.d(i,"suggestionsTitle",function(){return x}),n.d(i,"suggestionsSpinner",function(){return E}),n.d(i,"itemButton",function(){return w}),n.d(i,"screenReaderOnly",function(){return C});var r=n(0),u=n(1),a=n(681);Object(a.loadStyles)([{rawString:".callout_e8e64567 .ms-Suggestions-itemButton{padding:0px;border:none}.callout_e8e64567 .ms-Suggestions{min-width:300px}\n"}]);var g="callout_e8e64567",l=n(43),c=n(540),p=n(274),d=n(1723),h=n(49),m=n(4048);Object(a.loadStyles)([{rawString:".suggestionsContainer_d47618a5{overflow-y:auto;overflow-x:hidden;max-height:300px}.suggestionsContainer_d47618a5 .ms-Suggestion-item:hover{background-color:"},{theme:"neutralLighter",defaultValue:"#f3f2f1"},{rawString:";cursor:pointer}.suggestionsContainer_d47618a5 .is-suggested{background-color:"},{theme:"themeLighter",defaultValue:"#deecf9"},{rawString:"}.suggestionsContainer_d47618a5 .is-suggested:hover{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:";cursor:pointer}\n"}]);var f="suggestionsContainer_d47618a5",S=o,b=function(e){function t(t){var n=e.call(this,t)||this;return n.SuggestionsItemOfProperType=m.a,n._onClickTypedSuggestionsItem=function(e,t){return function(s){n.props.onSuggestionClick(s,e,t)}},n._onRemoveTypedSuggestionsItem=function(e,t){return function(s){(0,n.props.onSuggestionRemove)(s,e,t),s.stopPropagation()}},n.currentIndex=-1,n}return r.__extends(t,e),t.prototype.nextSuggestion=function(){var e=this.props.suggestions;if(e&&e.length>0){if(-1===this.currentIndex)return this.setSelectedSuggestion(0),!0;if(this.currentIndex<e.length-1)return this.setSelectedSuggestion(this.currentIndex+1),!0;if(this.props.shouldLoopSelection&&this.currentIndex===e.length-1)return this.setSelectedSuggestion(0),!0}return!1},t.prototype.previousSuggestion=function(){var e=this.props.suggestions;if(e&&e.length>0){if(-1===this.currentIndex)return this.setSelectedSuggestion(e.length-1),!0;if(this.currentIndex>0)return this.setSelectedSuggestion(this.currentIndex-1),!0;if(this.props.shouldLoopSelection&&0===this.currentIndex)return this.setSelectedSuggestion(e.length-1),!0}return!1},Object.defineProperty(t.prototype,"selectedElement",{get:function(){return this._selectedElement},enumerable:!0,configurable:!0}),t.prototype.getCurrentItem=function(){return this.props.suggestions[this.currentIndex]},t.prototype.getSuggestionAtIndex=function(e){return this.props.suggestions[e]},t.prototype.hasSuggestionSelected=function(){return-1!==this.currentIndex&&this.currentIndex<this.props.suggestions.length},t.prototype.removeSuggestion=function(e){this.props.suggestions.splice(e,1)},t.prototype.deselectAllSuggestions=function(){this.currentIndex>-1&&this.props.suggestions[this.currentIndex]&&(this.props.suggestions[this.currentIndex].selected=!1,this.currentIndex=-1,this.forceUpdate())},t.prototype.setSelectedSuggestion=function(e){var t=this.props.suggestions;e>t.length-1||e<0?(this.currentIndex=0,this.currentSuggestion.selected=!1,this.currentSuggestion=t[0],this.currentSuggestion.selected=!0):(this.currentIndex>-1&&t[this.currentIndex]&&(t[this.currentIndex].selected=!1),t[e].selected=!0,this.currentIndex=e,this.currentSuggestion=t[e]),this.forceUpdate()},t.prototype.componentDidUpdate=function(){this.scrollSelected()},t.prototype.render=function(){var e=this,t=this.props,n=t.onRenderSuggestion,s=t.suggestionsItemClassName,o=t.resultsMaximumNumber,i=t.showRemoveButtons,r=t.suggestionsContainerAriaLabel,a=this.SuggestionsItemOfProperType,g=this.props.suggestions;return o&&(g=g.slice(0,o)),u.createElement("div",{className:Object(c.a)("ms-Suggestions-container",S.suggestionsContainer),id:"suggestion-list",role:"list","aria-label":r},g.map(function(t,o){return u.createElement("div",{ref:e._resolveRef(t.selected||o===e.currentIndex?"_selectedElement":""),key:t.item.key?t.item.key:o,id:"sug-"+o,role:"listitem","aria-label":t.ariaLabel},u.createElement(a,{id:"sug-item"+o,suggestionModel:t,RenderSuggestion:n,onClick:e._onClickTypedSuggestionsItem(t.item,o),className:s,showRemoveButton:i,onRemoveItem:e._onRemoveTypedSuggestionsItem(t.item,o),isSelectedOverride:o===e.currentIndex}))}))},t.prototype.scrollSelected=function(){this._selectedElement&&void 0!==this._selectedElement.scrollIntoView&&this._selectedElement.scrollIntoView(!1)},t}(p.a);Object(a.loadStyles)([{rawString:".root_76303b11{min-width:260px}.actionButton_76303b11{background:none;background-color:transparent;border:0;cursor:pointer;margin:0;padding:0px;position:relative;width:100%;font-size:12px}html[dir='ltr'] .actionButton_76303b11{text-align:left}html[dir='rtl'] .actionButton_76303b11{text-align:right}.actionButton_76303b11:hover{background-color:"},{theme:"neutralLighter",defaultValue:"#f3f2f1"},{rawString:";cursor:pointer}.actionButton_76303b11:focus,.actionButton_76303b11:active{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:"}.actionButton_76303b11 .ms-Button-icon{font-size:16px;width:25px}.actionButton_76303b11 .ms-Button-label{margin:0 4px 0 9px}html[dir='rtl'] .actionButton_76303b11 .ms-Button-label{margin:0 9px 0 4px}.buttonSelected_76303b11{background-color:"},{theme:"themeLighter",defaultValue:"#deecf9"},{rawString:"}.buttonSelected_76303b11:hover{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:";cursor:pointer}.suggestionsTitle_76303b11{font-size:12px}.suggestionsSpinner_76303b11{margin:5px 0;white-space:nowrap;line-height:20px;font-size:12px}html[dir='ltr'] .suggestionsSpinner_76303b11{padding-left:14px}html[dir='rtl'] .suggestionsSpinner_76303b11{padding-right:14px}html[dir='ltr'] .suggestionsSpinner_76303b11{text-align:left}html[dir='rtl'] .suggestionsSpinner_76303b11{text-align:right}.suggestionsSpinner_76303b11 .ms-Spinner-circle{display:inline-block;vertical-align:middle}.suggestionsSpinner_76303b11 .ms-Spinner-label{display:inline-block;margin:0px 10px 0 16px;vertical-align:middle}html[dir='rtl'] .suggestionsSpinner_76303b11 .ms-Spinner-label{margin:0px 16px 0 10px}.itemButton_76303b11{height:100%;width:100%;padding:7px 12px}@media screen and (-ms-high-contrast: active){.itemButton_76303b11{color:WindowText}}.screenReaderOnly_76303b11{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n"}]);var _,v="root_76303b11",y="actionButton_76303b11",I="buttonSelected_76303b11",x="suggestionsTitle_76303b11",E="suggestionsSpinner_76303b11",w="itemButton_76303b11",C="screenReaderOnly_76303b11",B=i;!function(e){e[e.header=0]="header",e[e.suggestion=1]="suggestion",e[e.footer=2]="footer"}(_||(_={}));var k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e,t=this.props,n=t.renderItem,s=t.onExecute,o=t.isSelected,i=t.id,r=t.className;return s?u.createElement("div",{id:i,onClick:s,className:Object(c.a)("ms-Suggestions-sectionButton",r,B.actionButton,(e={},e["is-selected "+B.buttonSelected]=o,e))},n()):u.createElement("div",{id:i,className:Object(c.a)("ms-Suggestions-section",r,B.suggestionsTitle)},n())},t}(p.a),V=function(e){function t(t){var n=e.call(this,t)||this;return n.SuggestionsOfProperType=b,n.state={selectedHeaderIndex:-1,selectedFooterIndex:-1,suggestions:t.suggestions},n}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.resetSelectedItem()},t.prototype.componentDidUpdate=function(){this.scrollSelected()},t.prototype.componentWillReceiveProps=function(e){var t=this;e.suggestions&&this.setState({suggestions:e.suggestions},function(){t.resetSelectedItem()})},t.prototype.componentWillUnmount=function(){this._suggestions.deselectAllSuggestions()},t.prototype.render=function(){var e=this.props,t=e.className,n=e.headerItemsProps,s=e.footerItemsProps;return u.createElement("div",{className:Object(c.a)("ms-Suggestions",t||"",B.root)},n&&this.renderHeaderItems(),this._renderSuggestions(),s&&this.renderFooterItems())},Object.defineProperty(t.prototype,"currentSuggestion",{get:function(){return this._suggestions&&this._suggestions.getCurrentItem()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentSuggestionIndex",{get:function(){return this._suggestions?this._suggestions.currentIndex:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedElement",{get:function(){return this._selectedElement?this._selectedElement:this._suggestions.selectedElement},enumerable:!0,configurable:!0}),t.prototype.hasSuggestionSelected=function(){return this._suggestions&&this._suggestions.hasSuggestionSelected()},t.prototype.hasSelection=function(){var e=this.state,t=e.selectedHeaderIndex,n=e.selectedFooterIndex;return-1!==t||this.hasSuggestionSelected()||-1!==n},t.prototype.executeSelectedAction=function(){var e=this.props,t=e.headerItemsProps,n=e.footerItemsProps,s=this.state,o=s.selectedHeaderIndex,i=s.selectedFooterIndex;if(t&&-1!==o&&o<t.length){var r=t[o];r.onExecute&&r.onExecute()}else if(this._suggestions.hasSuggestionSelected())this.props.completeSuggestion();else if(n&&-1!==i&&i<n.length){var u=n[i];u.onExecute&&u.onExecute()}},t.prototype.removeSuggestion=function(e){this._suggestions.removeSuggestion(e||this._suggestions.currentIndex)},t.prototype.handleKeyDown=function(e){var t=this.state,n=t.selectedHeaderIndex,s=t.selectedFooterIndex,o=!1;return e===l.a.down?-1!==n||this._suggestions.hasSuggestionSelected()||-1!==s?-1!==n?(this.selectNextItem(_.header),o=!0):this._suggestions.hasSuggestionSelected()?(this.selectNextItem(_.suggestion),o=!0):-1!==s&&(this.selectNextItem(_.footer),o=!0):this.selectFirstItem():e===l.a.up?-1!==n||this._suggestions.hasSuggestionSelected()||-1!==s?-1!==n?(this.selectPreviousItem(_.header),o=!0):this._suggestions.hasSuggestionSelected()?(this.selectPreviousItem(_.suggestion),o=!0):-1!==s&&(this.selectPreviousItem(_.footer),o=!0):this.selectLastItem():e!==l.a.enter&&e!==l.a.tab||this.hasSelection()&&(this.executeSelectedAction(),o=!0),o},t.prototype.scrollSelected=function(){this._selectedElement&&this._selectedElement.scrollIntoView(!1)},t.prototype.renderHeaderItems=function(){var e=this,t=this.props,n=t.headerItemsProps,s=t.suggestionsHeaderContainerAriaLabel,o=this.state.selectedHeaderIndex;return n?u.createElement("div",{className:Object(c.a)("ms-Suggestions-headerContainer",B.suggestionsContainer),id:"suggestionHeader-list",role:"list","aria-label":s},n.map(function(t,n){var s=-1!==o&&o===n;return t.shouldShow()?u.createElement("div",{ref:e._resolveRef(s?"_selectedElement":""),id:"sug-header"+n,key:"sug-header"+n,role:"listitem","aria-label":t.ariaLabel},u.createElement(k,{id:"sug-header-item"+n,isSelected:s,renderItem:t.renderItem,onExecute:t.onExecute,className:t.className})):null})):null},t.prototype.renderFooterItems=function(){var e=this,t=this.props,n=t.footerItemsProps,s=t.suggestionsFooterContainerAriaLabel,o=this.state.selectedFooterIndex;return n?u.createElement("div",{className:Object(c.a)("ms-Suggestions-footerContainer",B.suggestionsContainer),id:"suggestionFooter-list",role:"list","aria-label":s},n.map(function(t,n){var s=-1!==o&&o===n;return t.shouldShow()?u.createElement("div",{ref:e._resolveRef(s?"_selectedElement":""),id:"sug-footer"+n,key:"sug-footer"+n,role:"listitem","aria-label":t.ariaLabel},u.createElement(k,{id:"sug-footer-item"+n,isSelected:s,renderItem:t.renderItem,onExecute:t.onExecute,className:t.className})):null})):null},t.prototype._renderSuggestions=function(){var e=this.SuggestionsOfProperType;return u.createElement(e,r.__assign({ref:this._resolveRef("_suggestions")},this.props,{suggestions:this.state.suggestions}))},t.prototype.selectNextItem=function(e,t){if(e!==t){var n=void 0!==t?t:e;this._selectNextItemOfItemType(e,n===e?this._getCurrentIndexForType(e):void 0)||this.selectNextItem(this._getNextItemSectionType(e),n)}else this._selectNextItemOfItemType(e)},t.prototype.selectPreviousItem=function(e,t){if(e!==t){var n=void 0!==t?t:e;this._selectPreviousItemOfItemType(e,n===e?this._getCurrentIndexForType(e):void 0)||this.selectPreviousItem(this._getPreviousItemSectionType(e),n)}else this._selectPreviousItemOfItemType(e)},t.prototype.resetSelectedItem=function(){this.setState({selectedHeaderIndex:-1,selectedFooterIndex:-1}),this._suggestions.deselectAllSuggestions(),(void 0===this.props.shouldSelectFirstItem||this.props.shouldSelectFirstItem())&&this.selectFirstItem()},t.prototype.selectFirstItem=function(){this._selectNextItemOfItemType(_.header)||this._selectNextItemOfItemType(_.suggestion)||this._selectNextItemOfItemType(_.footer)},t.prototype.selectLastItem=function(){this._selectPreviousItemOfItemType(_.footer)||this._selectPreviousItemOfItemType(_.suggestion)||this._selectPreviousItemOfItemType(_.header)},t.prototype._selectNextItemOfItemType=function(e,t){if(void 0===t&&(t=-1),e===_.suggestion){if(this.state.suggestions.length>t+1)return this._suggestions.setSelectedSuggestion(t+1),this.setState({selectedHeaderIndex:-1,selectedFooterIndex:-1}),!0}else{var n=e===_.header,s=n?this.props.headerItemsProps:this.props.footerItemsProps;if(s&&s.length>t+1)for(var o=t+1;o<s.length;o++){var i=s[o];if(i.onExecute&&i.shouldShow())return this.setState({selectedHeaderIndex:n?o:-1}),this.setState({selectedFooterIndex:n?-1:o}),this._suggestions.deselectAllSuggestions(),!0}}return!1},t.prototype._selectPreviousItemOfItemType=function(e,t){if(e===_.suggestion){if((n=void 0!==t?t:this.state.suggestions.length)>0)return this._suggestions.setSelectedSuggestion(n-1),this.setState({selectedHeaderIndex:-1,selectedFooterIndex:-1}),!0}else{var n,s=e===_.header,o=s?this.props.headerItemsProps:this.props.footerItemsProps;if(o)if((n=void 0!==t?t:o.length)>0)for(var i=n-1;i>=0;i--){var r=o[i];if(r.onExecute&&r.shouldShow())return this.setState({selectedHeaderIndex:s?i:-1}),this.setState({selectedFooterIndex:s?-1:i}),this._suggestions.deselectAllSuggestions(),!0}}return!1},t.prototype._getCurrentIndexForType=function(e){switch(e){case _.header:return this.state.selectedHeaderIndex;case _.suggestion:return this._suggestions.currentIndex;case _.footer:return this.state.selectedFooterIndex}},t.prototype._getNextItemSectionType=function(e){switch(e){case _.header:return _.suggestion;case _.suggestion:return _.footer;case _.footer:return _.header}},t.prototype._getPreviousItemSectionType=function(e){switch(e){case _.header:return _.footer;case _.suggestion:return _.header;case _.footer:return _.suggestion}},t}(p.a);n.d(t,"a",function(){return T});var P=s,T=function(e){function t(t){var n=e.call(this,t)||this;return n.root=u.createRef(),n.suggestionsControl=u.createRef(),n.SuggestionsControlOfProperType=V,n.isComponentMounted=!1,n.onQueryStringChanged=function(e){e!==n.state.queryString&&(n.setState({queryString:e}),n.props.onInputChanged&&n.props.onInputChanged(e),n.updateValue(e))},n.hidePicker=function(){n.props.onSuggestionsHidden&&n.isSuggestionsShown&&n.props.onSuggestionsHidden(),n.setState({suggestionsVisible:!1})},n.showPicker=function(e){void 0===e&&(e=!1),n.props.onSuggestionsShown&&!n.isSuggestionsShown&&n.props.onSuggestionsShown(),n.setState({suggestionsVisible:!0});var t=n.props.inputElement?n.props.inputElement.value:"";e&&n.updateValue(t)},n.completeSuggestion=function(){n.suggestionsControl.current&&n.suggestionsControl.current.hasSuggestionSelected()&&n.onChange(n.suggestionsControl.current.currentSuggestion.item)},n.onSuggestionClick=function(e,t,s){n.onChange(t),n._updateSuggestionsVisible(!1)},n.onSuggestionRemove=function(e,t,s){n.props.onRemoveSuggestion&&n.props.onRemoveSuggestion(t),n.suggestionsControl.current&&n.suggestionsControl.current.removeSuggestion(s)},n.onKeyDown=function(e){if(n.state.suggestionsVisible&&(!n.props.inputElement||n.props.inputElement.contains(e.target))){var t=e.which;switch(t){case l.a.escape:n.hidePicker(),e.preventDefault(),e.stopPropagation();break;case l.a.tab:case l.a.enter:!e.shiftKey&&!e.ctrlKey&&n.suggestionsControl.current&&n.suggestionsControl.current.handleKeyDown(t)?(e.preventDefault(),e.stopPropagation()):n._onValidateInput();break;case l.a.del:n.props.onRemoveSuggestion&&n.suggestionsControl.current&&n.suggestionsControl.current.hasSuggestionSelected&&n.suggestionsControl.current.currentSuggestion&&e.shiftKey&&(n.props.onRemoveSuggestion(n.suggestionsControl.current.currentSuggestion.item),n.suggestionsControl.current.removeSuggestion(),n.forceUpdate(),e.stopPropagation());break;case l.a.up:case l.a.down:n.suggestionsControl.current&&n.suggestionsControl.current.handleKeyDown(t)&&(e.preventDefault(),e.stopPropagation(),n._updateActiveDescendant())}}},n._onValidateInput=function(){if(n.state.queryString&&n.props.onValidateInput&&n.props.createGenericItem){var e=n.props.createGenericItem(n.state.queryString,n.props.onValidateInput(n.state.queryString)),t=n.suggestionStore.convertSuggestionsToSuggestionItems([e]);n.onChange(t[0].item)}},n.suggestionStore=t.suggestionsStore,n.state={queryString:"",didBind:!1},n}return r.__extends(t,e),Object.defineProperty(t.prototype,"inputText",{get:function(){return this.state.queryString},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suggestions",{get:function(){return this.suggestionStore.suggestions},enumerable:!0,configurable:!0}),t.prototype.forceResolveSuggestion=function(){this.suggestionsControl.current&&this.suggestionsControl.current.hasSuggestionSelected()?this.completeSuggestion():this._onValidateInput()},Object.defineProperty(t.prototype,"currentSelectedSuggestionIndex",{get:function(){return this.suggestionsControl.current?this.suggestionsControl.current.currentSuggestionIndex:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSuggestionsShown",{get:function(){return void 0!==this.state.suggestionsVisible&&this.state.suggestionsVisible},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){this._bindToInputElement(),this.isComponentMounted=!0,this._onResolveSuggestions=this._async.debounce(this._onResolveSuggestions,this.props.resolveDelay)},t.prototype.componentDidUpdate=function(){this._bindToInputElement()},t.prototype.componentWillUnmount=function(){this._unbindFromInputElement(),this.isComponentMounted=!1},t.prototype.componentWillReceiveProps=function(e){e.suggestionItems&&this.updateSuggestions(e.suggestionItems)},t.prototype.updateSuggestions=function(e,t){void 0===t&&(t=!1),this.suggestionStore.updateSuggestions(e),t&&this.forceUpdate()},t.prototype.render=function(){var e=this.props.className;return u.createElement("div",{ref:this.root,className:Object(c.a)("ms-BasePicker ms-BaseFloatingPicker",e||"")},this.renderSuggestions())},t.prototype.renderSuggestions=function(){var e=this.SuggestionsControlOfProperType;return this.state.suggestionsVisible?u.createElement(d.a,{className:P.callout,isBeakVisible:!1,gapSpace:5,target:this.props.inputElement,onDismiss:this.hidePicker,directionalHint:h.a.bottomLeftEdge,directionalHintForRTL:h.a.bottomRightEdge,calloutWidth:this.props.calloutWidth?this.props.calloutWidth:0},u.createElement(e,r.__assign({onRenderSuggestion:this.props.onRenderSuggestionsItem,onSuggestionClick:this.onSuggestionClick,onSuggestionRemove:this.onSuggestionRemove,suggestions:this.suggestionStore.getSuggestions(),componentRef:this.suggestionsControl,completeSuggestion:this.completeSuggestion,shouldLoopSelection:!1},this.props.pickerSuggestionsProps))):null},t.prototype.onSelectionChange=function(){this.forceUpdate()},t.prototype.updateValue=function(e){""===e?this.updateSuggestionWithZeroState():this._onResolveSuggestions(e)},t.prototype.updateSuggestionWithZeroState=function(){if(this.props.onZeroQuerySuggestion){var e=(0,this.props.onZeroQuerySuggestion)(this.props.selectedItems);this.updateSuggestionsList(e)}else this.hidePicker()},t.prototype.updateSuggestionsList=function(e){var t=this,n=e,s=e;if(Array.isArray(n))this.updateSuggestions(n,!0);else if(s&&s.then){var o=this.currentPromise=s;o.then(function(e){o===t.currentPromise&&t.isComponentMounted&&t.updateSuggestions(e,!0)})}},t.prototype.onChange=function(e){this.props.onChange&&this.props.onChange(e)},t.prototype._updateActiveDescendant=function(){if(this.props.inputElement&&this.suggestionsControl.current&&this.suggestionsControl.current.selectedElement){var e=this.suggestionsControl.current.selectedElement.getAttribute("id");e&&this.props.inputElement.setAttribute("aria-activedescendant",e)}},t.prototype._onResolveSuggestions=function(e){var t=this.props.onResolveSuggestions(e,this.props.selectedItems);this._updateSuggestionsVisible(!0),null!==t&&this.updateSuggestionsList(t)},t.prototype._updateSuggestionsVisible=function(e){e?this.showPicker():this.hidePicker()},t.prototype._bindToInputElement=function(){this.props.inputElement&&!this.state.didBind&&(this.props.inputElement.addEventListener("keydown",this.onKeyDown),this.setState({didBind:!0}))},t.prototype._unbindFromInputElement=function(){this.props.inputElement&&this.state.didBind&&(this.props.inputElement.removeEventListener("keydown",this.onKeyDown),this.setState({didBind:!1}))},t}(p.a)},4048:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var s=n(0),o=n(1),i=n(867),r=n(540),u=n(274),a=n(1659),g=n(918),l=n(3690),c=Object(i.a)(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){var e,t=this.props,n=t.suggestionModel,s=t.RenderSuggestion,i=t.onClick,u=t.className,p=t.onRemoveItem,d=t.isSelectedOverride,h=t.removeButtonAriaLabel,m=t.styles,f=t.theme,S=m?c(m,{theme:f,className:u,suggested:n.selected||d}):{root:Object(r.a)("ms-Suggestions-item",l.suggestionsItem,(e={},e["is-suggested "+l.suggestionsItemIsSuggested]=n.selected||d,e),u),itemButton:Object(r.a)("ms-Suggestions-itemButton",l.itemButton),closeButton:Object(r.a)("ms-Suggestions-closeButton",l.closeButton)};return o.createElement("div",{className:S.root},o.createElement(a.a,{onClick:i,className:S.itemButton},s(n.item,this.props)),this.props.showRemoveButton?o.createElement(g.a,{iconProps:{iconName:"Cancel",styles:{root:{fontSize:"12px"}}},title:h,ariaLabel:h,onClick:p,className:S.closeButton}):null)},t}(u.a)},4732:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var s=function(){function e(e){var t=this;this._isSuggestionModel=function(e){return void 0!==e.item},this._ensureSuggestionModel=function(e){return t._isSuggestionModel(e)?e:{item:e,selected:!1,ariaLabel:void 0!==t.getAriaLabel?t.getAriaLabel(e):e.name||e.primaryText}},this.suggestions=[],this.getAriaLabel=e&&e.getAriaLabel}return e.prototype.updateSuggestions=function(e){e&&e.length>0?this.suggestions=this.convertSuggestionsToSuggestionItems(e):this.suggestions=[]},e.prototype.getSuggestions=function(){return this.suggestions},e.prototype.getSuggestionAtIndex=function(e){return this.suggestions[e]},e.prototype.removeSuggestion=function(e){this.suggestions.splice(e,1)},e.prototype.convertSuggestionsToSuggestionItems=function(e){return Array.isArray(e)?e.map(this._ensureSuggestionModel):[]},e}()}}]);
//# sourceMappingURL=owa.13.js.map
self.scriptsLoaded['owa.13.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.13.js'] = (new Date()).getTime();