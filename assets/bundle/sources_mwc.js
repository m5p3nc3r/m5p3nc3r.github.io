"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};function t(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,o=e=>(...t)=>{const i=e(...t);return r.set(i,!0),i},s=e=>"function"==typeof e&&r.has(e),a=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,l=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},d={},c={},p=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${p}--\x3e`,u=new RegExp(`${p}|${h}`);class m{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=r.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)f(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[a],i=y.exec(t)[2],n=i.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(u);this.parts.push({type:"attribute",index:s,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(p)>=0){const n=e.parentNode,r=t.split(u),o=r.length-1;for(let t=0;t<o;t++){let i,o=r[t];if(""===o)i=g();else{const e=y.exec(o);null!==e&&f(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++s})}""===r[o]?(n.insertBefore(g(),e),i.push(e)):e.data=r[o],a+=o}}else if(8===e.nodeType)if(e.data===p){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore(g(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(i.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const f=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},_=e=>-1!==e.index,g=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,s=0,l=n.nextNode();for(;o<i.length;)if(r=i[o],_(r)){for(;s<r.index;)s++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return a&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${p} `;class x{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const o=y.exec(e);t+=null===o?e+(i?v:h):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+p}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(w(e)||!S(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===d||w(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=d,e(this)}this.value!==d&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}const e=this.__pendingValue;e!==d&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const r of e)i=t[n],void 0===i&&(i=new T(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(r),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){l(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}if(this.__pendingValue===d)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=d}}class I extends E{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends C{}let O=!1;try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}if(this.__pendingValue===d)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=d}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const R=new class{handleAttributeExpressions(e,t,i,n){const r=t[0];if("."===r){return new I(e,t.slice(1),i).parts}return"@"===r?[new N(e,t.slice(1),n.eventContext)]:"?"===r?[new A(e,t.slice(1),i)]:new E(e,t,i).parts}handleTextExpression(e){return new T(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function F(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(p);return i=t.keyString.get(n),void 0===i&&(i=new m(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const M=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const L=(e,...t)=>new x(e,t,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function z(e,t){const{element:{content:i},parts:n}=e,r=document.createTreeWalker(i,133,null,!1);let o=B(n),s=n[o],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,o=B(n,o),s=n[o]}d.forEach(e=>e.parentNode.removeChild(e))}const H=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},B=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(_(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const j=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const $=e=>t=>{const i=j(t.type,e);let n=M.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(i,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(p);if(r=n.keyString.get(o),void 0===r){const i=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(i,e),r=new m(t,i),n.keyString.set(o,r)}return n.stringsArray.set(t.strings,r),r},U=["html","svg"],q=new Set,G=(e,t,i)=>{q.add(e);const n=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{U.forEach(t=>{const i=M.get(j(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),z(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:r}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let s=B(r),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===i&&(a=H(t),i.parentNode.insertBefore(t,i));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=B(r,s);return}s=B(r,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),z(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const X={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y},W=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const n=this[e];this[i]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Y){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||X,r="function"==typeof n?n:n.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||X.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const n=this.constructor,r=n._attributeNameForProperty(e,i);if(void 0!==r){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i._classProperties.get(n)||J;this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,r=n._classProperties.get(e)||J;n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{e=i,t=n});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}K.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Q=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}});function ee(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Q(e,t)}function te(e){return(t,i)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?ie(n,t,i):ne(n,t)}}const ie=(e,t,i)=>{Object.defineProperty(t,i,e)},ne=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,re="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol();class se{constructor(e,t){if(t!==oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(re?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ae=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof se)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new se(i,oe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const le=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let n=0,r=t.length;n<r;n++){const r=t[n];Array.isArray(r)?e(r,i):i.push(r)}return i}(e);class de extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){le(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?re?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof x&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}de.finalized=!0,de.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=D.has(t),o=V&&11===t.nodeType&&!!t.host,s=o&&!q.has(n),a=s?document.createDocumentFragment():t;if(((e,t,i)=>{let n=D.get(t);void 0===n&&(l(t,t.firstChild),D.set(t,n=new T(Object.assign({templateFactory:F},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:$(n)},i)),s){const e=D.get(a);D.delete(a);const i=e.value instanceof b?e.value.template:void 0;G(n,a,i),l(t,t.firstChild),t.appendChild(a),D.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ce={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},pe={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},he={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},ue=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),me=function(e){function n(t){return e.call(this,i({},n.defaultAdapter,t))||this}return t(n,e),Object.defineProperty(n,"strings",{get:function(){return he},enumerable:!0,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return ce},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return pe},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),n.prototype.handleTargetScroll=function(){},n.prototype.handleWindowResize=function(){},n.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},n}(ue),fe=function(e){function i(t){var i=e.call(this,t)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter_.getViewportScrollY(),i.topAppBarHeight_=i.adapter_.getTopAppBarHeight(),i}return t(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter_.setStyle("top","")},i.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter_.getViewportScrollY(),0),t=e-this.lastScrollPosition_;this.lastScrollPosition_=e,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=t,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},i.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){e.resizeThrottleId_=0,e.throttledResizeHandler_()}),pe.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized_=!1,e.resizeDebounceId_=0}),pe.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate_=function(){var e=-this.topAppBarHeight_,t=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>e,n=t&&i;if(n)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return n},i.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var e=this.currentAppBarOffsetTop_;Math.abs(e)>=this.topAppBarHeight_&&(e=-pe.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",e+"px")}},i.prototype.throttledResizeHandler_=function(){var e=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==e&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-e,this.topAppBarHeight_=e),this.handleTargetScroll()},i}(me);const _e=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;function ge(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ye=e=>e.nodeType===Node.ELEMENT_NODE;function be(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}let ve=!1;const xe=()=>{},we={get passive(){return ve=!0,!1}};document.addEventListener("x",xe,we),document.removeEventListener("x",xe);const Se=ve,Ee=(e=window.document)=>{let t=e.activeElement;const i=[];if(!t)return i;for(;t&&(i.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return i},Ce=e=>{const t=Ee();if(!t.length)return!1;const i=t[t.length-1],n=new Event("check-if-focused",{bubbles:!0,composed:!0});let r=[];const o=e=>{r=e.composedPath()};return document.body.addEventListener("check-if-focused",o),i.dispatchEvent(n),document.body.removeEventListener("check-if-focused",o),-1!==r.indexOf(e)};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Te extends de{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ae=new WeakMap,Ie=o(e=>t=>{if(!(t instanceof C)||t instanceof P||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:n}=i;Ae.has(t)||(n.className=i.strings.join(" "));const{classList:r}=n,o=Ae.get(t);for(const t in o)t in e||r.remove(t);for(const t in e){const i=e[t];if(!o||i!==o[t]){r[i?"add":"remove"](t)}}Ae.set(t,e)}),Pe=Se?{passive:!0}:void 0;class Oe extends Te{constructor(){super(...arguments),this.mdcFoundationClass=me,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t)}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=L`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=L`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),L`
      <header class="mdc-top-app-bar ${Ie(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${Ie(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(he.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Pe)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}n([te(".mdc-top-app-bar")],Oe.prototype,"mdcRoot",void 0),n([te('slot[name="actionItems"]')],Oe.prototype,"_actionItemsSlot",void 0),n([ee({type:Boolean})],Oe.prototype,"centerTitle",void 0),n([ee()],Oe.prototype,"scrollTarget",null);class Ne extends Oe{constructor(){super(...arguments),this.mdcFoundationClass=fe,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,Pe)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}n([ee({type:Boolean,reflect:!0})],Ne.prototype,"prominent",void 0),n([ee({type:Boolean,reflect:!0})],Ne.prototype,"dense",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ke=ae`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;let Re=class extends Ne{};Re.styles=ke,Re=n([Z("mwc-top-app-bar")],Re);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fe=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.wasScrolled_=!1,t}return t(i,e),i.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(ce.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(ce.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},i}(fe);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Me extends Ne{constructor(){super(...arguments),this.mdcFoundationClass=Fe}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Pe)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let De=class extends Me{};
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Le(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var i={get passive(){return t=!0,!1}},n=function(){};e.document.addEventListener("test",n,i),e.document.removeEventListener("test",n,i)}catch(e){t=!1}return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(e)&&{passive:!0}}De.styles=ke,De=n([Z("mwc-top-app-bar-fixed")],De);var ze,He={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Be={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},je={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ve=["touchstart","pointerdown","mousedown","keydown"],$e=["touchend","pointerup","mouseup","contextmenu"],Ue=[],qe=function(e){function n(t){var r=e.call(this,i({},n.defaultAdapter,t))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(e){return r.activate_(e)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return t(n,e),Object.defineProperty(n,"cssClasses",{get:function(){return He},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return Be},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return je},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){var e=this,t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){var i=n.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.addClass(r),e.adapter_.isUnbounded()&&(e.adapter_.addClass(o),e.layoutInternal_())}))}},n.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(n.cssClasses.FG_DEACTIVATION));var t=n.cssClasses,i=t.ROOT,r=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.removeClass(i),e.adapter_.removeClass(r),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},n.prototype.activate=function(e){this.activate_(e)},n.prototype.deactivate=function(){this.deactivate_()},n.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},n.prototype.setUnbounded=function(e){var t=n.cssClasses.UNBOUNDED;e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},n.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.addClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter_.removeClass(n.cssClasses.BG_FOCUSED)}))},n.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},n.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers_=function(e){var t=this;e&&(Ve.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},n.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):$e.forEach((function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},n.prototype.deregisterRootHandlers_=function(){var e=this;Ve.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},n.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),$e.forEach((function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},n.prototype.removeCssVars_=function(){var e=this,t=n.strings;Object.keys(t).forEach((function(i){0===i.indexOf("VAR_")&&e.adapter_.updateCssVariable(t[i],null)}))},n.prototype.activate_=function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==e&&n.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&Ue.length>0&&Ue.some((function(e){return t.adapter_.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(Ue.push(e.target),this.registerDeactivationHandlers_(e)),i.wasElementMadeActive=this.checkElementMadeActive_(e),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){Ue=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive_(e),i.wasElementMadeActive&&t.animateActivation_()),i.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},n.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()},n.prototype.animateActivation_=function(){var e=this,t=n.strings,i=t.VAR_FG_TRANSLATE_START,r=t.VAR_FG_TRANSLATE_END,o=n.cssClasses,s=o.FG_DEACTIVATION,a=o.FG_ACTIVATION,l=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",c="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),h=p.startPoint,u=p.endPoint;d=h.x+"px, "+h.y+"px",c=u.x+"px, "+u.y+"px"}this.adapter_.updateCssVariable(i,d),this.adapter_.updateCssVariable(r,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),l)},n.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var n,r,o=t.x,s=t.y,a=o+i.left,l=s+i.top;if("touchstart"===e.type){var d=e;n=d.changedTouches[0].pageX-a,r=d.changedTouches[0].pageY-l}else{var c=e;n=c.pageX-a,r=c.pageY-l}return{x:n,y:r}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},n.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,t=n.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,o=i.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter_.removeClass(t)}),je.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses_=function(){var e=n.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},n.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),n.numbers.TAP_DELAY_MS)},n.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var n=i({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()})))}},n.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady_()},n.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+n.numbers.PADDING;var i=Math.floor(t*n.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},n.prototype.updateLayoutCssVars_=function(){var e=n.strings,t=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(t,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},n}(ue);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ge=ae`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/,Xe=function(e,t){void 0===t&&(t=!1);var i,n=e.CSS;if("boolean"==typeof ze&&!t)return ze;if(!(n&&"function"==typeof n.supports))return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||o,t||(ze=i),i}(window),Ye=navigator.userAgent.match(/Safari/);let Je=!1;const We=e=>{Ye&&!Je&&(()=>{Je=!0;const e=document.createElement("style"),t=new T({templateFactory:F});t.appendInto(e),t.setValue(Ge),t.commit(),document.head.appendChild(e)})();const t=e.surfaceNode,i=e.interactionNode||t;i.getRootNode()!==t.getRootNode()&&""===i.style.position&&(i.style.position="relative");const n=new qe({browserSupportsCssVars:()=>Xe,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>ge(i,":active"),isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>i.contains(e),registerInteractionHandler:(e,t)=>i.addEventListener(e,t,Le()),deregisterInteractionHandler:(e,t)=>i.removeEventListener(e,t,Le()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,Le()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,Le()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,i)=>t.style.setProperty(e,i),computeBoundingRect:()=>t.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return n.init(),n},Ke=new WeakMap,Ze=o((e={})=>t=>{const i=t.committer.element,n=e.interactionNode||i;let r=t.value;const o=Ke.get(r);void 0!==o&&o!==n&&(r.destroy(),r=d),r===d?(r=We(Object.assign({},e,{surfaceNode:i})),Ke.set(r,n),t.setValue(r)):(void 0!==e.unbounded&&r.setUnbounded(e.unbounded),void 0!==e.disabled&&r.setUnbounded(e.disabled)),!0===e.active?r.activate():!1===e.active&&r.deactivate()});class Qe extends de{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return L`<button
    .ripple="${Ze()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}n([ee({type:Boolean,reflect:!0})],Qe.prototype,"disabled",void 0),n([ee({type:String})],Qe.prototype,"icon",void 0),n([ee({type:String})],Qe.prototype,"label",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const et=ae`.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;outline:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let tt=class extends Qe{};tt.styles=et,tt=n([Z("mwc-icon-button")],tt),
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{var e,t,i;const n=Symbol(),r=Symbol(),o=Symbol(),s=Symbol(),a=Symbol(),l=Symbol(),d=Symbol(),c=Symbol(),p=Symbol(),h=Symbol(),u=Symbol(),m=Symbol(),f=Symbol();document.$blockingElements=new class{constructor(){this[e]=[],this[t]=[],this[i]=new Set}destructor(){this[p](this[o]);this[n]=null,this[o]=null,this[r]=null}get top(){const e=this[n];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[n].push(e))}remove(e){const t=this[n].indexOf(e);return-1!==t&&(this[n].splice(t,1),t===this[n].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[n].indexOf(e)}[(e=n,t=o,i=r,l)](e){const t=this[r],i=this[o];if(!e)return this[p](i),t.clear(),void(this[o]=[]);const n=this[h](e);if(n[n.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=n;const s=this[u](e);if(!i.length)return void this[c](n,s,t);let a=i.length-1,l=n.length-1;for(;a>0&&l>0&&i[a]===n[l];)a--,l--;i[a]!==n[l]&&this[d](i[a],n[l]),a>0&&this[p](i.slice(0,a)),l>0&&this[c](n.slice(0,l),s,null)}[d](e,t){const i=e[s];this[m](e)&&!e.inert&&(e.inert=!0,i.add(e)),i.has(t)&&(t.inert=!1,i.delete(t)),t[a]=e[a],t[s]=i,e[a]=void 0,e[s]=void 0}[p](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[s];for(const t of e)t.inert=!1;t[s]=void 0}}[c](e,t,i){for(const n of e){const e=n.parentNode,r=e.children,o=new Set;for(let e=0;e<r.length;e++){const s=r[e];s===n||!this[m](s)||t&&t.has(s)||(i&&s.inert?i.add(s):(s.inert=!0,o.add(s)))}n[s]=o;const l=new MutationObserver(this[f].bind(this));n[a]=l;let d=e;const c=d;c.__shady&&c.host&&(d=c.host),l.observe(d,{childList:!0})}}[f](e){const t=this[o],i=this[r];for(const n of e){const e=n.target.host||n.target,r=e===document.body?t.length:t.indexOf(e),o=t[r-1],a=o[s];for(let e=0;e<n.removedNodes.length;e++){const t=n.removedNodes[e];if(t===o)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];this[m](t)&&(i&&t.inert?i.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let i=e;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&t.push(i),i.assignedSlot){for(;i=i.assignedSlot;)t.push(i);i=t.pop()}else i=i.parentNode||i.host;return t}[u](e){const t=e.shadowRoot;if(!t)return null;const i=new Set;let n,r,o;const s=t.querySelectorAll("slot");if(s.length&&s[0].assignedNodes)for(n=0;n<s.length;n++)for(o=s[n].assignedNodes({flatten:!0}),r=0;r<o.length;r++)o[r].nodeType===Node.ELEMENT_NODE&&i.add(o[r]);return i}}})();const it=Array.prototype.slice,nt=Element.prototype.matches||Element.prototype.msMatchesSelector,rt=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class ot{constructor(e,t){this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(e){this._savedAriaHidden=e}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(e){at(e,e=>this._visitNode(e));let t=document.activeElement;if(!document.body.contains(e)){let i=e,n=void 0;for(;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=i;break}i=i.parentNode}n&&(t=n.activeElement)}e.contains(t)&&(t.blur(),t===document.activeElement&&document.body.focus())}_visitNode(e){if(e.nodeType!==Node.ELEMENT_NODE)return;const t=e;t!==this._rootElement&&t.hasAttribute("inert")&&this._adoptInertRoot(t),(nt.call(t,rt)||t.hasAttribute("tabindex"))&&this._manageNode(t)}_manageNode(e){const t=this._inertManager.register(e,this);this._managedNodes.add(t)}_unmanageNode(e){const t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}_unmanageSubtree(e){at(e,e=>this._unmanageNode(e))}_adoptInertRoot(e){let t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}_onMutation(e,t){e.forEach((function(e){const t=e.target;if("childList"===e.type)it.call(e.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),it.call(e.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(t);else if(t!==this._rootElement&&"inert"===e.attributeName&&t.hasAttribute("inert")){this._adoptInertRoot(t);const e=this._inertManager.getInertRoot(t);this._managedNodes.forEach((function(i){t.contains(i.node)&&e._manageNode(i.node)}))}}),this)}}class st{constructor(e,t){this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(e){this._throwIfDestroyed(),this._savedTabIndex=e}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const e=this.node;if(nt.call(e,rt)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}addInertRoot(e){this._throwIfDestroyed(),this._inertRoots.add(e)}removeInertRoot(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}}function at(e,t,i){if(e.nodeType==Node.ELEMENT_NODE){const i=e;t&&t(i);const n=i.shadowRoot;if(n)return void at(n,t);if("content"==i.localName){const e=i,n=e.getDistributedNodes?e.getDistributedNodes():[];for(let e=0;e<n.length;e++)at(n[e],t);return}if("slot"==i.localName){const e=i,n=e.assignedNodes?e.assignedNodes({flatten:!0}):[];for(let e=0;e<n.length;e++)at(n[e],t);return}}let n=e.firstChild;for(;null!=n;)at(n,t),n=n.nextSibling}function lt(e){if(e.querySelector("style#inert-style"))return;const t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",e.appendChild(t)}const dt=new class{constructor(e){if(!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),lt(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(e,t){if(t){if(this._inertRoots.has(e))return;const t=new ot(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)){let t=e.parentNode;for(;t;)11===t.nodeType&&lt(t),t=t.parentNode}}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}getInertRoot(e){return this._inertRoots.get(e)}register(e,t){let i=this._managedNodes.get(e);return void 0!==i?i.addInertRoot(t):i=new st(e,t),this._managedNodes.set(e,i),i}deregister(e,t){const i=this._managedNodes.get(e);return i?(i.removeInertRoot(t),i.destroyed&&this._managedNodes.delete(e),i):null}_onDocumentLoaded(){it.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(e,t){const i=this;e.forEach((function(e){switch(e.type){case"childList":it.call(e.addedNodes).forEach((function(e){if(e.nodeType!==Node.ELEMENT_NODE)return;const t=it.call(e.querySelectorAll("[inert]"));nt.call(e,"[inert]")&&t.unshift(e),t.forEach((function(e){this.setInert(e,!0)}),i)}),i);break;case"attributes":if("inert"!==e.attributeName)return;const t=e.target,n=t.hasAttribute("inert");i.setInert(t,n)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){dt.setInert(this,e)}})
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var ct={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},pt={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},ht=function(e){function n(t){var r=e.call(this,i({},n.defaultAdapter,t))||this;return r.animationFrame_=0,r.animationTimer_=0,r}return t(n,e),Object.defineProperty(n,"strings",{get:function(){return pt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return ct},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},n.prototype.open=function(){var e=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(ct.OPEN),this.adapter_.addClass(ct.ANIMATE),this.runNextAnimationFrame_((function(){e.adapter_.addClass(ct.OPENING)})),this.adapter_.saveFocus())},n.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(ct.CLOSING)},n.prototype.isOpen=function(){return this.adapter_.hasClass(ct.OPEN)},n.prototype.isOpening=function(){return this.adapter_.hasClass(ct.OPENING)||this.adapter_.hasClass(ct.ANIMATE)},n.prototype.isClosing=function(){return this.adapter_.hasClass(ct.CLOSING)},n.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},n.prototype.handleTransitionEnd=function(e){var t=ct.OPENING,i=ct.CLOSING,n=ct.OPEN,r=ct.ANIMATE,o=ct.ROOT;this.isElement_(e.target)&&this.adapter_.elementHasClass(e.target,o)&&(this.isClosing()?(this.adapter_.removeClass(n),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(r),this.adapter_.removeClass(t),this.adapter_.removeClass(i))},n.prototype.opened_=function(){},n.prototype.closed_=function(){},n.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},n.prototype.isElement_=function(e){return Boolean(e.classList)},n}(ue),ut=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t(i,e),i.prototype.handleScrimClick=function(){this.close()},i.prototype.opened_=function(){this.adapter_.trapFocus()},i.prototype.closed_=function(){this.adapter_.releaseFocus()},i}(ht);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const mt=document.$blockingElements;class ft extends Te{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?ut:ht}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{elementHasClass:(e,t)=>e.classList.contains(t),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(pt.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(pt.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{mt.push(this),this.appContent.inert=!0},releaseFocus:()=>{mt.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof ut&&this.mdcFoundation.handleScrimClick()}render(){const e="dismissible"===this.type||"modal"===this.type,t="modal"===this.type,i=this.hasHeader?L`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return L`
      <aside class="mdc-drawer
          ${Ie({"mdc-drawer--dismissible":e,"mdc-drawer--modal":t})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${t?L`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",e=>this.mdcFoundation.handleKeydown(e)),this.mdcRoot.addEventListener("transitionend",e=>this.mdcFoundation.handleTransitionEnd(e))}updated(e){e.has("type")&&this.createFoundation()}}n([te(".mdc-drawer")],ft.prototype,"mdcRoot",void 0),n([te(".mdc-drawer-app-content")],ft.prototype,"appContent",void 0),n([_e((function(e){""!==this.type&&(e?this.mdcFoundation.open():this.mdcFoundation.close())})),ee({type:Boolean,reflect:!0})],ft.prototype,"open",void 0),n([ee({type:Boolean})],ft.prototype,"hasHeader",void 0),n([ee({reflect:!0})],ft.prototype,"type",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const _t=ae`.mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-radius:0 0 0 0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-radius:0 0 0 0}.mdc-drawer .mdc-list-item{border-radius:4px}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit;height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}`;let gt=class extends ft{};gt.styles=_t,gt=n([Z("mwc-drawer")],gt);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const yt=o(e=>t=>{if(void 0===e&&t instanceof C){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bt="mdc-list-item",vt="mdc-list-item--disabled",xt={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+bt+" button:not(:disabled),\n    ."+bt+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+bt+" button:not(:disabled),\n    ."+bt+" a,\n    ."+bt+' input[type="radio"]:not(:disabled),\n    .'+bt+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},wt={UNSET_INDEX:-1};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const St=["input","button","textarea","select"];function Et(e){return e instanceof Set}const Ct=e=>{const t=e===wt.UNSET_INDEX?new Set:e;return Et(t)?new Set(t):new Set([t])};class Tt extends ue{constructor(e){super(Object.assign(Object.assign({},Tt.defaultAdapter),e)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=wt.UNSET_INDEX,this.focusedItemIndex_=wt.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return xt}static get numbers(){return wt}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(e){this.wrapFocus_=e}setMulti(e){this.isMulti_=e}setVerticalOrientation(e){this.isVertical_=e}setUseActivatedClass(e){this.useActivatedClass_=e}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(Ct(e)):this.setSingleSelectionAtIndex_(e))}handleFocusIn(e,t){t>=0&&this.adapter_.setTabIndexForElementIndex(t,0)}handleFocusOut(e,t){t>=0&&this.adapter_.setTabIndexForElementIndex(t,-1),setTimeout(()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(e,t,i){const n="ArrowLeft"===e.key||37===e.keyCode,r="ArrowUp"===e.key||38===e.keyCode,o="ArrowRight"===e.key||39===e.keyCode,s="ArrowDown"===e.key||40===e.keyCode,a="Home"===e.key||36===e.keyCode,l="End"===e.key||35===e.keyCode,d="Enter"===e.key||13===e.keyCode,c="Space"===e.key||32===e.keyCode;if(this.adapter_.isRootFocused())return void(r||l?(e.preventDefault(),this.focusLastElement()):(s||a)&&(e.preventDefault(),this.focusFirstElement()));let p,h=this.adapter_.getFocusedElementIndex();if(!(-1===h&&(h=i,h<0))){if(this.isVertical_&&s||!this.isVertical_&&o)this.preventDefaultEvent_(e),p=this.focusNextElement(h);else if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(e),p=this.focusPrevElement(h);else if(a)this.preventDefaultEvent_(e),p=this.focusFirstElement();else if(l)this.preventDefaultEvent_(e),p=this.focusLastElement();else if((d||c)&&t){const t=e.target;if(t&&"A"===t.tagName&&d)return;this.preventDefaultEvent_(e),this.setSelectedIndexOnAction_(h)}this.focusedItemIndex_=h,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(e,t){e!==wt.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}focusNextElement(e){let t=e+1;if(t>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter_.focusItemAtIndex(t),t}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(t),t}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const e=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(e),e}setEnabled(e,t){this.isIndexValid_(e)&&this.adapter_.setDisabledStateForElementIndex(e,!t)}preventDefaultEvent_(e){const t=`${e.target.tagName}`.toLowerCase();-1===St.indexOf(t)&&e.preventDefault()}setSingleSelectionAtIndex_(e){this.selectedIndex_!==e&&(this.selectedIndex_!==wt.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),this.adapter_.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter_.notifySelected(e))}setMultiSelectionAtIndex_(e){const t=((e,t)=>{const i=Array.from(e),n=Array.from(t),r={added:[],removed:[]},o=i.sort(),s=n.sort();let a=0,l=0;for(;a<o.length||l<s.length;){const e=o[a],t=s[l];e!==t?void 0!==e&&(void 0===t||e<t)?(r.removed.push(e),a++):void 0!==t&&(void 0===e||t<e)&&(r.added.push(t),l++):(a++,l++)}return r})(Ct(this.selectedIndex_),e);if(t.removed.length||t.added.length){for(const e of t.removed)this.adapter_.setSelectedStateForElementIndex(e,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(e,!1);for(const e of t.added)this.adapter_.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(e,!0);this.selectedIndex_=e,this.adapter_.notifySelected(e,t)}}setAriaForSingleSelectionAtIndex_(e){this.selectedIndex_===wt.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(e,xt.ARIA_CURRENT));const t=null!==this.ariaCurrentAttrValue_,i=t?xt.ARIA_CURRENT:xt.ARIA_SELECTED;this.selectedIndex_!==wt.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false");const n=t?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(e,i,n)}setTabindexAtIndex_(e){this.focusedItemIndex_===wt.UNSET_INDEX&&0!==e?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(e,0)}setTabindexToFirstSelectedItem_(){let e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==wt.UNSET_INDEX?e=this.selectedIndex_:Et(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(e)}isIndexValid_(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;{let t=!1;for(const i of e)if(t=this.isIndexInRange_(i),t)break;return t}}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange_(e)}return!1}isIndexInRange_(e){const t=this.adapter_.getListItemCount();return e>=0&&e<t}setSelectedIndexOnAction_(e,t){if(this.adapter_.getDisabledStateForElementIndex(e))return;let i=e;this.isMulti_&&(i=new Set([e])),this.isIndexValid_(i)&&(this.isMulti_?this.toggleMultiAtIndex(e,t):this.setSingleSelectionAtIndex_(e),this.adapter_.notifyAction(e))}toggleMultiAtIndex(e,t){let i=!1;i=void 0===t?!this.adapter_.getSelectedStateForElementIndex(e):t;const n=Ct(this.selectedIndex_);i?n.add(e):n.delete(e),this.setMultiSelectionAtIndex_(n)}}
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const At=e=>e.hasAttribute("mwc-list-item");class It extends Te{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=Tt,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const e=this.slotElement;return e?e.assignedNodes({flatten:!0}).filter(ye):[]}get items(){return this.items_}updateItems(){const e=this.assignedElements,t=[];for(const i of e)At(i)&&t.push(i),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=t;const i=new Set;if(this.items_.forEach((e,t)=>{this.itemRoles?e.setAttribute("role",this.itemRoles):e.removeAttribute("role"),e.selected&&i.add(t)}),this.multi)this.select(i);else{const e=i.size?i.entries().next().value[1]:-1;this.select(e)}}get selected(){const e=this.index;if(!Et(e))return-1===e?null:this.items[e];const t=[];for(const i of e)t.push(this.items[i]);return t}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const e=null===this.innerRole?void 0:this.innerRole,t=this.rootTabbable?"0":"-1";return L`
      <!-- @ts-ignore -->
      <ul
          tabindex=${t}
          role="${yt(e)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}>
        <slot
            @slotchange=${this.onSlotChange}
            @list-item-rendered=${this.onListItemConnected}>
        </slot>
      </ul>
    `}onFocusIn(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}onFocusOut(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}onKeydown(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e),i=e.target,n=At(i);this.mdcFoundation.handleKeydown(e,n,t)}}onRequestSelected(e){if(this.mdcFoundation){const t=this.getIndexOfTarget(e);if(-1===t)return;if(this.items[t].disabled)return;const i=e.detail.selected;this.mdcFoundation.handleSingleSelection(t,i),e.stopPropagation()}}getIndexOfTarget(e){const t=this.items,i=e.composedPath();for(const e of i){let i=-1;if(ye(e)&&At(e)&&(i=t.indexOf(e)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const e=Ee();if(!e.length)return-1;for(let t=e.length-1;t>=0;t--){const i=e[t];if(At(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(e,t)=>{if(!this.mdcRoot)return"";const i=this.items[e];return i?i.getAttribute(t):""},setAttributeForElementIndex:(e,t,i)=>{if(!this.mdcRoot)return;const n=this.items[e];n&&n.setAttribute(t,i)},focusItemAtIndex:e=>{const t=this.items[e];t&&t.focus()},setTabIndexForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.tabindex=t)},notifyAction:e=>{const t={bubbles:!0,composed:!0};t.detail={index:e};const i=new CustomEvent("action",t);this.dispatchEvent(i)},notifySelected:(e,t)=>{const i={bubbles:!0,composed:!0};i.detail={index:e,diff:t};const n=new CustomEvent("selected",i);this.dispatchEvent(n)},isFocusInsideList:()=>Ce(this),isRootFocused:()=>{const e=this.mdcRoot;return e.getRootNode().activeElement===e},setDisabledStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.disabled=t)},getDisabledStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.disabled},setSelectedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.selected=t)},getSelectedStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.selected},setActivatedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.activated=t)}},this.mdcAdapter}selectUi(e,t=!1){const i=this.items[e];i&&(i.selected=!0,i.activated=t)}deselectUi(e){const t=this.items[e];t&&(t.selected=!1,t.activated=!1)}select(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}toggle(e,t){this.mdcFoundation.toggleMultiAtIndex(e,t)}onSlotChange(){this.layout()}onListItemConnected(e){const t=e.target;this.layout(-1===this.items.indexOf(t))}layout(e=!0){if(e&&this.updateItems(),!this.noninteractive){let e=null;for(const t of this.items)e||t.noninteractive||(e=t),t.tabindex=-1;e&&(e.tabindex=0)}}focus(){const e=this.mdcRoot;e&&e.focus()}blur(){const e=this.mdcRoot;e&&e.blur()}}n([te(".mdc-list")],It.prototype,"mdcRoot",void 0),n([te("slot")],It.prototype,"slotElement",void 0),n([ee({type:Boolean}),_e((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],It.prototype,"activatable",void 0),n([ee({type:Boolean}),_e((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],It.prototype,"multi",void 0),n([ee({type:Boolean}),_e((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],It.prototype,"wrapFocus",void 0),n([ee({type:String}),_e((function(e,t){void 0!==t&&this.updateItems()}))],It.prototype,"itemRoles",void 0),n([ee({type:String})],It.prototype,"innerRole",void 0),n([ee({type:Boolean})],It.prototype,"rootTabbable",void 0),n([ee({type:Boolean,reflect:!0}),_e((function(e){const t=this.slotElement;if(e&&t){const e=function(e,t){for(const i of e.assignedNodes({flatten:!0}))if(ye(i)){const e=i;if(ge(e,t))return e}return null}(t,'[tabindex="0"]');this.previousTabindex=e,e&&e.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],It.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Pt=ae`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Ot=class extends It{};Ot.styles=Pt,Ot=n([Z("mwc-list")],Ot);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Nt,kt,Rt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Ft={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Mt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(Nt||(Nt={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(kt||(kt={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Dt,Lt=function(e){function n(t){var r=e.call(this,i({},n.defaultAdapter,t))||this;return r.isOpen_=!1,r.isQuickOpen_=!1,r.isHoistedElement_=!1,r.isFixedPosition_=!1,r.openAnimationEndTimerId_=0,r.closeAnimationEndTimerId_=0,r.animationRequestId_=0,r.anchorCorner_=kt.TOP_START,r.anchorMargin_={top:0,right:0,bottom:0,left:0},r.position_={x:0,y:0},r}return t(n,e),Object.defineProperty(n,"cssClasses",{get:function(){return Rt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return Ft},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return Mt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"Corner",{get:function(){return kt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){var e=n.cssClasses,t=e.ROOT,i=e.OPEN;if(!this.adapter_.hasClass(t))throw new Error(t+" class required in root element.");this.adapter_.hasClass(i)&&(this.isOpen_=!0)},n.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},n.prototype.setAnchorCorner=function(e){this.anchorCorner_=e},n.prototype.setAnchorMargin=function(e){this.anchorMargin_.top=e.top||0,this.anchorMargin_.right=e.right||0,this.anchorMargin_.bottom=e.bottom||0,this.anchorMargin_.left=e.left||0},n.prototype.setIsHoisted=function(e){this.isHoistedElement_=e},n.prototype.setFixedPosition=function(e){this.isFixedPosition_=e},n.prototype.setAbsolutePosition=function(e,t){this.position_.x=this.isFinite_(e)?e:0,this.position_.y=this.isFinite_(t)?t:0},n.prototype.setQuickOpen=function(e){this.isQuickOpen_=e},n.prototype.isOpen=function(){return this.isOpen_},n.prototype.open=function(){var e=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(n.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){e.adapter_.addClass(n.cssClasses.OPEN),e.dimensions_=e.adapter_.getInnerDimensions(),e.autoPosition_(),e.isQuickOpen_?e.adapter_.notifyOpen():e.openAnimationEndTimerId_=setTimeout((function(){e.openAnimationEndTimerId_=0,e.adapter_.removeClass(n.cssClasses.ANIMATING_OPEN),e.adapter_.notifyOpen()}),Mt.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0},n.prototype.close=function(e){var t=this;void 0===e&&(e=!1),this.isQuickOpen_||this.adapter_.addClass(n.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){t.adapter_.removeClass(n.cssClasses.OPEN),t.isQuickOpen_?t.adapter_.notifyClose():t.closeAnimationEndTimerId_=setTimeout((function(){t.closeAnimationEndTimerId_=0,t.adapter_.removeClass(n.cssClasses.ANIMATING_CLOSED),t.adapter_.notifyClose()}),Mt.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,e||this.maybeRestoreFocus_()},n.prototype.handleBodyClick=function(e){var t=e.target;this.adapter_.isElementInContainer(t)||this.close()},n.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},n.prototype.autoPosition_=function(){var e;this.measurements_=this.getAutoLayoutMeasurements_();var t=this.getOriginCorner_(),i=this.getMenuSurfaceMaxHeight_(t),n=this.hasBit_(t,Nt.BOTTOM)?"bottom":"top",r=this.hasBit_(t,Nt.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset_(t),s=this.getVerticalOriginOffset_(t),a=this.measurements_,l=a.anchorSize,d=a.surfaceSize,c=((e={})[r]=o,e[n]=s,e);l.width/d.width>Mt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(c),this.adapter_.setTransformOrigin(r+" "+n),this.adapter_.setPosition(c),this.adapter_.setMaxHeight(i?i+"px":"")},n.prototype.getAutoLayoutMeasurements_=function(){var e=this.adapter_.getAnchorDimensions(),t=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),n=this.adapter_.getWindowScroll();return e||(e={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions_,viewportDistance:{top:e.top,right:i.width-e.right,bottom:i.height-e.bottom,left:e.left},viewportSize:i,windowScroll:n}},n.prototype.getOriginCorner_=function(){var e=kt.TOP_LEFT,t=this.measurements_,i=t.viewportDistance,n=t.anchorSize,r=t.surfaceSize,o=this.hasBit_(this.anchorCorner_,Nt.BOTTOM),s=o?i.top+n.height+this.anchorMargin_.bottom:i.top+this.anchorMargin_.top,a=o?i.bottom-this.anchorMargin_.bottom:i.bottom+n.height-this.anchorMargin_.top,l=r.height-s,d=r.height-a;d>0&&l<d&&(e=this.setBit_(e,Nt.BOTTOM));var c=this.adapter_.isRtl(),p=this.hasBit_(this.anchorCorner_,Nt.FLIP_RTL),h=this.hasBit_(this.anchorCorner_,Nt.RIGHT),u=h&&!c||!h&&p&&c,m=u?i.left+n.width+this.anchorMargin_.right:i.left+this.anchorMargin_.left,f=u?i.right-this.anchorMargin_.right:i.right+n.width-this.anchorMargin_.left,_=r.width-m,g=r.width-f;return(_<0&&u&&c||h&&!u&&_<0||g>0&&_<g)&&(e=this.setBit_(e,Nt.RIGHT)),e},n.prototype.getMenuSurfaceMaxHeight_=function(e){var t=this.measurements_.viewportDistance,i=0,r=this.hasBit_(e,Nt.BOTTOM),o=this.hasBit_(this.anchorCorner_,Nt.BOTTOM),s=n.numbers.MARGIN_TO_EDGE;return r?(i=t.top+this.anchorMargin_.top-s,o||(i+=this.measurements_.anchorSize.height)):(i=t.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-s,o&&(i-=this.measurements_.anchorSize.height)),i},n.prototype.getHorizontalOriginOffset_=function(e){var t=this.measurements_.anchorSize,i=this.hasBit_(e,Nt.RIGHT),n=this.hasBit_(this.anchorCorner_,Nt.RIGHT);if(i){var r=n?t.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?r-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):r}return n?t.width-this.anchorMargin_.right:this.anchorMargin_.left},n.prototype.getVerticalOriginOffset_=function(e){var t=this.measurements_.anchorSize,i=this.hasBit_(e,Nt.BOTTOM),n=this.hasBit_(this.anchorCorner_,Nt.BOTTOM);return i?n?t.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?t.height+this.anchorMargin_.bottom:this.anchorMargin_.top},n.prototype.adjustPositionForHoistedElement_=function(e){var t,i,n=this.measurements_,r=n.windowScroll,o=n.viewportDistance,s=Object.keys(e);try{for(var a=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],i=0;return t?t.call(e):{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}}(s),l=a.next();!l.done;l=a.next()){var d=l.value,c=e[d]||0;c+=o[d],this.isFixedPosition_||("top"===d?c+=r.y:"bottom"===d?c-=r.y:"left"===d?c+=r.x:c-=r.x),e[d]=c}}catch(e){t={error:e}}finally{try{l&&!l.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}},n.prototype.maybeRestoreFocus_=function(){var e=this.adapter_.isFocused(),t=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(e||t)&&this.adapter_.restoreFocus()},n.prototype.hasBit_=function(e,t){return Boolean(e&t)},n.prototype.setBit_=function(e,t){return e|t},n.prototype.isFinite_=function(e){return"number"==typeof e&&isFinite(e)},n}(ue);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class zt extends Te{constructor(){super(...arguments),this.mdcFoundationClass=Lt,this.absolute=!1,this.fullwidth=!1,this.anchor=null,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,fullwidth:this.fullwidth};return L`
      <div
          class="mdc-menu-surface ${Ie(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{const t=this.mdcRoot;if(!t)return;const i=`${function(e,t){if(void 0===t&&(t=!1),void 0===Dt||t){var i=e.document.createElement("div");Dt="transform"in i.style?"transform":"webkitTransform"}return Dt}(window)}-origin`;t.style.setProperty(i,e)},isFocused:()=>Ce(this),saveFocus:()=>{const e=Ee(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{const t=this.mdcRoot;t&&(t.style.left="left"in e?`${e.left}px`:"",t.style.right="right"in e?`${e.right}px`:"",t.style.top="top"in e?`${e.top}px`:"",t.style.bottom="bottom"in e?`${e.bottom}px`:"")},setMaxHeight:e=>{const t=this.mdcRoot;t&&(t.style.maxHeight=e)}})}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound)}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}saveOrRestoreAnchor(e){e&&(this.previousAnchor=this.anchor,this.anchor=null),e||this.anchor||!this.previousAnchor||(this.anchor=this.previousAnchor)}close(){this.open=!1}show(){this.open=!0}}n([te(".mdc-menu-surface")],zt.prototype,"mdcRoot",void 0),n([te("slot")],zt.prototype,"slotElement",void 0),n([ee({type:Boolean}),_e((function(e){this.mdcFoundation&&!this.fixed&&(this.mdcFoundation.setIsHoisted(e),this.saveOrRestoreAnchor(e))}))],zt.prototype,"absolute",void 0),n([ee({type:Boolean})],zt.prototype,"fullwidth",void 0),n([ee({type:Object}),_e((function(e,t){t&&(t.style.position=""),e&&(e.style.position="relative")}))],zt.prototype,"anchor",void 0),n([ee({type:Boolean}),_e((function(e){this.mdcFoundation&&!this.absolute&&(this.mdcFoundation.setIsHoisted(e),this.saveOrRestoreAnchor(e))}))],zt.prototype,"fixed",void 0),n([ee({type:Number}),_e((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y}))}))],zt.prototype,"x",void 0),n([ee({type:Number}),_e((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e}))}))],zt.prototype,"y",void 0),n([ee({type:Boolean}),_e((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],zt.prototype,"quick",void 0),n([ee({type:Boolean,reflect:!0}),_e((function(e){this.mdcFoundation&&(e?this.mdcFoundation.open():this.mdcFoundation.close())}))],zt.prototype,"open",void 0),n([ee({type:String}),_e((function(e){this.mdcFoundation&&(e?this.mdcFoundation.setAnchorCorner(kt[e]):this.mdcFoundation.setAnchorCorner(kt.TOP_START))}))],zt.prototype,"corner",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ht=ae`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}:host(:not([open])){display:none}.fullwidth{width:100%}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Bt=class extends zt{};Bt.styles=Ht,Bt=n([Z("mwc-menu-surface")],Bt);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jt,Vt={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},$t={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},Ut={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(jt||(jt={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qt=function(e){function n(t){var r=e.call(this,i({},n.defaultAdapter,t))||this;return r.closeAnimationEndTimerId_=0,r.defaultFocusState_=jt.LIST_ROOT,r}return t(n,e),Object.defineProperty(n,"cssClasses",{get:function(){return Vt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return $t},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return Ut},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},n.prototype.handleKeydown=function(e){var t=e.key,i=e.keyCode;("Tab"===t||9===i)&&this.adapter_.closeSurface(!0)},n.prototype.handleItemAction=function(e){var t=this,i=this.adapter_.getElementIndex(e);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=t.adapter_.getElementIndex(e);t.adapter_.isSelectableItemAtIndex(i)&&t.setSelectedIndex(i)}),Lt.numbers.TRANSITION_CLOSE_DURATION))},n.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case jt.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case jt.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case jt.NONE:break;default:this.adapter_.focusListRoot()}},n.prototype.setDefaultFocusState=function(e){this.defaultFocusState_=e},n.prototype.setSelectedIndex=function(e){if(this.validatedIndex_(e),!this.adapter_.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter_.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter_.removeAttributeFromElementAtIndex(t,$t.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(t,Vt.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(e,Vt.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(e,$t.ARIA_CHECKED_ATTR,"true")},n.prototype.setEnabled=function(e,t){this.validatedIndex_(e),t?(this.adapter_.removeClassFromElementAtIndex(e,vt),this.adapter_.addAttributeToElementAtIndex(e,$t.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(e,vt),this.adapter_.addAttributeToElementAtIndex(e,$t.ARIA_DISABLED_ATTR,"true"))},n.prototype.validatedIndex_=function(e){var t=this.adapter_.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},n}(ue);class Gt extends Te{constructor(){super(...arguments),this.mdcFoundationClass=qt,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT"}get listElement(){return this.listElement_?this.listElement_:(this.listElement_=this.renderRoot.querySelector("mwc-list"),this.listElement_)}get items(){const e=this.listElement;return e?e.items:[]}get index(){const e=this.listElement;return e?e.index:-1}get selected(){const e=this.listElement;return e?e.selected:null}render(){const e="menu"===this.innerRole?"menuitem":"option";return L`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
          <mwc-list
            rootTabbable
            .innerRole=${this.innerRole}
            .multi=${this.multi}
            class="mdc-list"
            .itemRoles=${e}
            .wrapFocus=${this.wrapFocus}
            .activatable=${this.activatable}
            @action=${this.onAction}>
          <slot></slot>
        </mwc-list>
      </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?this.forceGroupSelection&&!n.selected&&i.toggle(e,!0):n.classList.add(t))},removeClassFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&("mdc-menu-item--selected"===t?n.selected&&i.toggle(e,!1):n.classList.remove(t))},addAttributeToElementAtIndex:(e,t,i)=>{const n=this.listElement;if(!n)return;const r=n.items[e];r&&r.setAttribute(t,i)},removeAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const n=i.items[e];n&&n.removeAttribute(t)},elementContainsClass:(e,t)=>e.classList.contains(t),closeSurface:()=>{this.open=!1},getElementIndex:e=>{const t=this.listElement;return t?t.items.indexOf(e):-1},notifySelected:()=>{},getMenuItemCount:()=>{const e=this.listElement;return e?e.items.length:0},focusItemAtIndex:e=>{const t=this.listElement;if(!t)return;const i=t.items[e];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:e=>{const t=this.listElement;if(!t)return-1;const i=t.items[e];if(!i||!i.group)return-1;for(let n=0;n<t.items.length;n++){if(n===e)continue;const r=t.items[n];if(r.selected&&r.group===i.group)return n}return-1},isSelectableItemAtIndex:e=>{const t=this.listElement;if(!t)return!1;const i=t.items[e];return!!i&&i.hasAttribute("group")}}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onAction(e){const t=this.listElement;if(this.mdcFoundation&&t){const i=e.detail.index,n=t.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}select(e){const t=this.listElement;t&&t.select(e)}close(){this.open=!1}show(){this.open=!0}layout(e=!0){const t=this.listElement;t&&t.layout(e)}}n([te(".mdc-menu")],Gt.prototype,"mdcRoot",void 0),n([te("slot")],Gt.prototype,"slotElement",void 0),n([ee({type:Object})],Gt.prototype,"anchor",void 0),n([ee({type:Boolean,reflect:!0})],Gt.prototype,"open",void 0),n([ee({type:Boolean})],Gt.prototype,"quick",void 0),n([ee({type:Boolean})],Gt.prototype,"wrapFocus",void 0),n([ee({type:String})],Gt.prototype,"innerRole",void 0),n([ee({type:String})],Gt.prototype,"corner",void 0),n([ee({type:Number})],Gt.prototype,"x",void 0),n([ee({type:Number})],Gt.prototype,"y",void 0),n([ee({type:Boolean})],Gt.prototype,"absolute",void 0),n([ee({type:Boolean})],Gt.prototype,"multi",void 0),n([ee({type:Boolean})],Gt.prototype,"activatable",void 0),n([ee({type:Boolean})],Gt.prototype,"fixed",void 0),n([ee({type:Boolean})],Gt.prototype,"forceGroupSelection",void 0),n([ee({type:Boolean})],Gt.prototype,"fullwidth",void 0),n([ee({type:String}),_e((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(jt[e])}))],Gt.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Xt=ae`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Yt=class extends Gt{};Yt.styles=Xt,Yt=n([Z("mwc-menu")],Yt);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class Jt extends de{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.boundOnClick=this.onClick.bind(this)}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():L``,i=this.hasMeta?this.renderMeta():L``;return L`
      ${t}
      ${e}
      ${i}`}renderGraphic(){return L`
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return L`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return L`
      <span class="mdc-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return L`<slot></slot>`}renderTwoline(){return L`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestDetail(!1,!this.selected)}fireRequestDetail(e,t){const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{isClick:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.toggleAttribute("mwc-list-item",!0),this.addEventListener("click",this.boundOnClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.boundOnClick)}firstUpdated(){this.dispatchEvent(new Event("list-item-rendered",{bubbles:!0,composed:!0})),We({surfaceNode:this,unbounded:!1})}}n([te("slot")],Jt.prototype,"slotElement",void 0),n([ee({type:String})],Jt.prototype,"value",void 0),n([ee({type:String,reflect:!0})],Jt.prototype,"group",void 0),n([ee({type:Number,reflect:!0})],Jt.prototype,"tabindex",void 0),n([ee({type:Boolean,reflect:!0}),_e((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Jt.prototype,"disabled",void 0),n([ee({type:Boolean,reflect:!0})],Jt.prototype,"twoline",void 0),n([ee({type:Boolean,reflect:!0})],Jt.prototype,"activated",void 0),n([ee({type:String,reflect:!0})],Jt.prototype,"graphic",void 0),n([ee({type:Boolean})],Jt.prototype,"hasMeta",void 0),n([ee({type:Boolean,reflect:!0}),_e((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.toggleAttribute("mwc-list-item",!0)}))],Jt.prototype,"noninteractive",void 0),n([ee({type:Boolean,reflect:!0}),_e((function(e){e?this.setAttribute("aria-selected","true"):this.setAttribute("aria-selected","false")}))],Jt.prototype,"selected",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Wt=ae`:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host(:not([disabled])){--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([disabled]))::before,:host(:not([disabled]))::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:"";top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host(:not([disabled]))::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host(:not([disabled]))::before,:host(:not([disabled]))::after{background-color:#000}:host(.mdc-ripple-upgraded:not([disabled]))::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host(.mdc-ripple-upgraded:not([disabled]))::after{top:0;left:0;transform:scale(0);transform-origin:center center;width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host(.mdc-ripple-upgraded--unbounded:not([disabled]))::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host(.mdc-ripple-upgraded--foreground-activation:not([disabled]))::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host(.mdc-ripple-upgraded--foreground-deactivation:not([disabled]))::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host([disabled],[noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}:host(:not([disabled]):hover)::before{opacity:.04}:host(:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host(:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.12}:host(:not([disabled]):not(.mdc-ripple-upgraded))::after{transition:opacity 150ms linear}:host(:not([disabled]):not(.mdc-ripple-upgraded):active)::after{transition-duration:75ms;opacity:.12}:host(:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.12}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.2}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.2}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.2}:host([activated]:not([disabled]))::before{opacity:.12}:host([activated]:not([disabled]))::before,:host([activated]:not([disabled]))::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host([activated]:not([disabled]):hover)::before{opacity:.16}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.24}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.24}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.24}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Kt=class extends Jt{};Kt.styles=Wt,Kt=n([Z("mwc-list-item")],Kt);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Zt=ae`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let Qt=class extends de{render(){return L`<slot></slot>`}};Qt.styles=Zt,Qt=n([Z("mwc-icon")],Qt);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ei=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ti,ii;function ni(e){ti=(!e||!e.shimcssproperties)&&(ei||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ii=window.ShadyCSS.cssBuild);const ri=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ti=window.ShadyCSS.nativeCss:window.ShadyCSS?(ni(window.ShadyCSS),window.ShadyCSS=void 0):ni(window.WebComponents&&window.WebComponents.flags);const oi=ti;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class si{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ai(e){return function e(t,i){let n=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;n=i.substring(e,t.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(hi.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=n.trim();t.atRule=0===r.indexOf(fi),t.atRule?0===r.indexOf(mi)?t.type=di.MEDIA_RULE:r.match(hi.keyframesRule)&&(t.type=di.KEYFRAMES_RULE,t.keyframesName=t.selector.split(hi.multipleSpaces).pop()):0===r.indexOf(ui)?t.type=di.MIXIN_RULE:t.type=di.STYLE_RULE}let r=t.rules;if(r)for(let t,n=0,o=r.length;n<o&&(t=r[n]);n++)e(t,i);return t}(function(e){let t=new si;t.start=0,t.end=e.length;let i=t;for(let n=0,r=e.length;n<r;n++)if(e[n]===ci){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new si,i.start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===pi&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(hi.comments,"").replace(hi.port,"")),e)}function li(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(ui)}(i))for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++)n=li(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(hi.mixinApply,"").replace(hi.varApply,"")}(e=function(e){return e.replace(hi.customProp,"").replace(hi.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+ci+"\n"),i+=n,e.selector&&(i+=pi+"\n\n")),i}const di={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ci="{",pi="}",hi={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ui="--",mi="@media",fi="@",_i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,gi=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,yi=/@media\s(.*)/,bi=new Set;function vi(e){const t=e.textContent;if(!bi.has(t)){bi.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function xi(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function wi(e,t){return e?("string"==typeof e&&(e=ai(e)),t&&Ei(e,t),li(e,oi)):""}function Si(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=ai(e.textContent)),e.__cssRules||null}function Ei(e,t,i,n){if(!e)return;let r=!1,o=e.type;if(n&&o===di.MEDIA_RULE){let t=e.selector.match(yi);t&&(window.matchMedia(t[1]).matches||(r=!0))}o===di.STYLE_RULE?t(e):i&&o===di.KEYFRAMES_RULE?i(e):o===di.MIXIN_RULE&&(r=!0);let s=e.rules;if(s&&!r)for(let e,r=0,o=s.length;r<o&&(e=s[r]);r++)Ei(e,t,i,n)}window.ShadyDOM&&window.ShadyDOM.wrap;function Ci(e){if(void 0!==ii)return ii;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function Ti(e){return""!==Ci(e)}function Ai(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function Ii(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Pi=/;\s*/m,Oi=/^\s*(initial)|(inherit)\s*$/,Ni=/\s*!important/;class ki{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Ri=null;class Fi{constructor(){this._currentElement=null,this._measureElement=null,this._map=new ki}detectMixin(e){return function(e){const t=gi.test(e)||_i.test(e);return gi.lastIndex=0,_i.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];xi(n)?ei||(vi(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Si(e);return this.transformRules(i,t),e.textContent=wi(i),i}transformCustomStyle(e){let t=Si(e);return Ei(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=wi(t),t}transformRules(e,t){this._currentElement=t,Ei(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(_i,(e,i,n,r)=>this._produceCssProperties(e,i,n,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return Ei(t,t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=gi.exec(e);){let n=i[0],r=i[1],o=i.index,s=o+n.indexOf("@apply"),a=o+n.length,l=e.slice(0,s),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let p=this._atApplyToCssProperties(r,c);e=`${l}${p}${d}`,gi.lastIndex=o+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Pi,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let r,o,s;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(r in a)s=t&&t[r],o=[r,": var(",e,"_-_",r],s&&o.push(",",s.replace(Ni,"")),o.push(")"),Ni.test(a[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Oi.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,r=e.split(";"),o={};for(let e,s,a=0;a<r.length;a++)e=r[a],e&&(s=e.split(":"),s.length>1&&(i=s[0].trim(),n=s.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n));return o}_invalidateMixinEntry(e){if(Ri)for(let t in e.dependants)t!==this._currentElement&&Ri(t)}_produceCssProperties(e,t,i,n,r){if(i&&function e(t,i){let n=t.indexOf("var(");if(-1===n)return i(t,"","","");let r=function(e,t){let i=0;for(let n=t,r=e.length;n<r;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}(t,n+3),o=t.substring(n+4,r),s=t.substring(0,n),a=e(t.substring(r+1),i),l=o.indexOf(",");return-1===l?i(s,o.trim(),"",a):i(s,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let o=this._consumeCssProperties(""+n,r),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let p,h,u=[],m=!1;for(p in l)h=a[p],void 0===h&&(h="initial"),!c||p in c||(m=!0),u.push(`${t}_-_${p}: ${h}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(s=`${e};${s}`),`${s}${u.join("; ")};`}}Fi.prototype.detectMixin=Fi.prototype.detectMixin,Fi.prototype.transformStyle=Fi.prototype.transformStyle,Fi.prototype.transformCustomStyle=Fi.prototype.transformCustomStyle,Fi.prototype.transformRules=Fi.prototype.transformRules,Fi.prototype.transformRule=Fi.prototype.transformRule,Fi.prototype.transformTemplate=Fi.prototype.transformTemplate,Fi.prototype._separator="_-_",Object.defineProperty(Fi.prototype,"invalidCallback",{get:()=>Ri,set(e){Ri=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Mi={},Di="_applyShimCurrentVersion",Li="_applyShimNextVersion",zi=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hi(e){let t=Mi[e];t&&function(e){e[Di]=e[Di]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[Li]=(e[Li]||0)+1}(t)}function Bi(e){return e[Di]===e[Li]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ji,Vi=null,$i=window.HTMLImports&&window.HTMLImports.whenReady||null;function Ui(e){requestAnimationFrame((function(){$i?$i(e):(Vi||(Vi=new Promise(e=>{ji=e}),"complete"===document.readyState?ji():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&ji()})),Vi.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qi="__shadyCSSCachedStyle";let Gi=null,Xi=null;class Yi{constructor(){this.customStyles=[],this.enqueued=!1,Ui(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Xi&&(this.enqueued=!0,Ui(Xi))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[qi])return e[qi];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[qi])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;Gi&&Gi(e),i[qi]=e}}return e}}Yi.prototype.addCustomStyle=Yi.prototype.addCustomStyle,Yi.prototype.getStyleForCustomStyle=Yi.prototype.getStyleForCustomStyle,Yi.prototype.processStyles=Yi.prototype.processStyles,Object.defineProperties(Yi.prototype,{transformCallback:{get:()=>Gi,set(e){Gi=e}},validateCallback:{get:()=>Xi,set(e){let t=!1;Xi||(t=!0),Xi=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ji=new Fi;class Wi{constructor(){this.customStyleInterface=null,Ji.invalidCallback=Hi}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Ji.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Ti(e))return;Mi[t]=e;let i=Ji.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&Ji.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Ai(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}(e),i=Mi[t];if((!i||!Ti(i))&&i&&!Bi(i)){(function(e){return!Bi(e)&&e._applyShimValidatingVersion===e[Li]})(i)||(this.prepareTemplate(i,t),function(e){e._applyShimValidatingVersion=e[Li],e._validating||(e._validating=!0,zi.then((function(){e[Di]=e[Li],e._validating=!1})))}(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=wi(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Wi;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Ii(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:oi,nativeShadow:ei,cssBuild:ii,disableRuntime:ri},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Ji,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ki,Zi,Qi=/(url\()([^)]*)(\))/g,en=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function tn(e,t){if(e&&en.test(e))return e;if("//"===e)return e;if(void 0===Ki){Ki=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Ki="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),Ki)try{return new URL(e,t).href}catch(t){return e}return Zi||(Zi=document.implementation.createHTMLDocument("temp"),Zi.base=Zi.createElement("base"),Zi.head.appendChild(Zi.base),Zi.anchor=Zi.createElement("a"),Zi.body.appendChild(Zi.anchor)),Zi.base.href=t,Zi.anchor.href=e,Zi.anchor.href||e}function nn(e,t){return e.replace(Qi,(function(e,i,n,r){return i+"'"+tn(n.replace(/["']/g,""),t)+"'"+r}))}function rn(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let on=rn(document.baseURI||window.location.href),sn=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,an=0;const ln=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=an++;return function(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=t,s=o.get(n);s||(s=e(n),o.set(n,s));let a=Object.create(s.__mixinSet||r||null);return a[i]=!0,s.__mixinSet=a,s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dn={},cn={};class pn extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=function(e){return dn[e]||cn[e.toLowerCase()]}(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=tn(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=rn(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){dn[e]=cn[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}pn.prototype.modules=dn,customElements.define("dom-module",pn);function hn(e){return pn.import(e)}function un(e){const t=nn((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function mn(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...fn(t[e]));return i}function fn(e){const t=hn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...gn(t));const i=t.querySelector("template");i&&e.push(..._n(i,t.assetpath)),t._styles=e}return t._styles}function _n(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let r=n[e],o=r.getAttribute("include");o&&i.push(...mn(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=nn(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function gn(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=un(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=un(e));t.push(i?e._unscopedStyle:e._style)}}return t}function yn(e){let t=hn(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=gn(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const n=_n(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const bn=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function vn(e){return e.indexOf(".")>=0}function xn(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function wn(e,t){return 0===e.indexOf(t+".")}function Sn(e,t){return 0===t.indexOf(e+".")}function En(e,t,i){return t+i.slice(e.length)}function Cn(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function Tn(e){return Array.isArray(e)?Cn(e).split("."):e.toString().split(".")}function An(e,t,i){let n=e,r=Tn(t);for(let e=0;e<r.length;e++){if(!n)return;n=n[r[e]]}return i&&(i.path=r.join(".")),n}function In(e,t,i){let n=e,r=Tn(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(n=n[r[e]],!n)return}n[o]=i}else n[t]=i;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pn={},On=/-[a-z]/g,Nn=/([A-Z])/g;function kn(e){return Pn[e]||(Pn[e]=e.indexOf("-")<0?e:e.replace(On,e=>e[1].toUpperCase()))}function Rn(e){return Pn[e]||(Pn[e]=e.replace(Nn,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Fn=0,Mn=0,Dn=[],Ln=0,zn=document.createTextNode("");new window.MutationObserver((function(){const e=Dn.length;for(let t=0;t<e;t++){let e=Dn[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Dn.splice(0,e),Mn+=e})).observe(zn,{characterData:!0});const Hn={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Bn={run:e=>(zn.textContent=Ln++,Dn.push(e),Fn++),cancel(e){const t=e-Mn;if(t>=0){if(!Dn[t])throw new Error("invalid async handle: "+e);Dn[t]=null}}},jn=Bn,Vn=ln(e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],r=this._shouldPropertyChange(e,t,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,jn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=bn(e)),void 0===n?e.removeAttribute(i):e.setAttribute(i,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),$n={};let Un=HTMLElement.prototype;for(;Un;){let e=Object.getOwnPropertyNames(Un);for(let t=0;t<e.length;t++)$n[e[t]]=!0;Un=Object.getPrototypeOf(Un)}const qn=ln(e=>{const t=Vn(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(kn(e[t]))}static attributeNameForProperty(e){return Rn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!$n[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),Gn={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xn=!1,Yn=!1;function Jn(e){(function(){if(!Xn){Xn=!0;const e=document.createElement("textarea");e.placeholder="a",Yn=e.placeholder===e.textContent}return Yn})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Wn(e){let t=e.getAttribute("is");if(t&&Gn[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Kn(e,t){let i=t.parentInfo&&Kn(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function Zn(e,t,i,n){n.id&&(t[n.id]=i)}function Qn(e,t,i){if(i.events&&i.events.length)for(let n,r=0,o=i.events;r<o.length&&(n=o[r]);r++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function er(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}const tr=ln(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,t,i)||n,Jn(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,t,i)||n),n}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let n,r=e.firstChild,o=0;r;r=n){if("template"==r.localName&&(r=Wn(r)),n=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,n=i.nextSibling,e.removeChild(i),i=n;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),r.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let n=e,r=this._parseTemplate(n,t);return(r.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,r=Array.from(e.attributes);for(let o,s=r.length-1;o=r[s];s--)n=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,r){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,n=t.content||e.content,r=document.importNode(n,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let e,t=0,n=i.length;t<n&&(e=i[t]);t++){let i=o[t]=Kn(r,e);Zn(0,r.$,i,e),er(0,i,e),Qn(this,i,e)}return r=r,r}_addMethodEventListenerToNode(e,t,i,n){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ir=0;const nr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},rr=/[A-Z]/;function or(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}}else i=e[t]={};return i}function sr(e,t,i,n,r,o){if(t){let s=!1,a=ir++;for(let l in i)ar(e,t,a,l,i,n,r,o)&&(s=!0);return s}return!1}function ar(e,t,i,n,r,o,s,a){let l=!1,d=t[s?xn(n):n];if(d)for(let t,c=0,p=d.length;c<p&&(t=d[c]);c++)t.info&&t.info.lastRun===i||s&&!lr(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,r,o,t.info,s,a),l=!0);return l}function lr(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!wn(i,e))||!(!t.wildcard||!Sn(i,e))}return!0}function dr(e,t,i,n,r){let o="string"==typeof r.method?e[r.method]:r.method,s=r.property;o?o.call(e,e.__data[s],n[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function cr(e,t,i){let n=xn(t);if(n!==t){return pr(e,Rn(n)+"-changed",i[t],t),!0}return!1}function pr(e,t,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),bn(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function hr(e,t,i,n,r,o){let s=(o?xn(t):t)!=t?t:null,a=s?An(e,s):e.__data[t];s&&void 0===a&&(a=i[t]),pr(e,r.eventName,a,s)}function ur(e,t,i,n,r){let o=e.__data[t];sn&&(o=sn(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}function mr(e,t,i,n,r){let o=xr(e,t,i,n,r),s=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):e[s]=o}function fr(e,t,i,n,r,o,s){i.bindings=i.bindings||[];let a={kind:n,target:r,parts:o,literal:s,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Rn(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let n=a.parts[i];n.compoundIndex=i,_r(e,t,a,n,l)}}function _r(e,t,i,n,r){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:r,binding:i,part:n,evaluator:e};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&(n=Tr(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:gr,info:s,trigger:n})}}}function gr(e,t,i,n,r,o,s){let a=s[r.index],l=r.binding,d=r.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=i[t];t=En(d.source,l.target,t),a._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,i,n,r){r=function(e,t,i,n){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[n.compoundIndex]=t,t=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,i,n),sn&&(r=sn(r,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[nr.READ_ONLY]&&t[nr.READ_ONLY][n]||t._setPendingProperty(n,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,r)}}(e,a,l,d,r.evaluator._evaluateBinding(e,d,t,i,n,o))}}function yr(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e].literal;let o=t.target;i[o]=r,t.literal&&"property"==t.kind&&("className"===o&&(e=bn(e)),e[o]=t.literal)}}function br(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,n,r){let o,s=e.detail,a=s&&s.path;a?(n=En(i,n,a),o=s&&s.value):o=e.currentTarget[i],o=r?!o:o,t[nr.READ_ONLY]&&t[nr.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,o,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,i.target,n.source,n.negate)}))}}function vr(e,t,i,n,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<t.args.length&&(r=t.args[o]);o++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:n,info:s,trigger:r});o&&e._addPropertyEffect(t.methodName,i,{fn:n,info:s})}function xr(e,t,i,n,r){let o=e._methodHost||e,s=o[r.methodName];if(s){let n=e._marshalArgs(r.args,t,i);return s.apply(o,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const wr=[],Sr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Er(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function Cr(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:wr};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Tr(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Tr(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=xn(t),i.structured=vn(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Ar(e,t,i){let n=An(e,i);return void 0===n&&(n=t[i]),n}function Ir(e,t,i,n){e.notifyPath(i+".splices",{indexSplices:n}),e.notifyPath(i+".length",t.length)}function Pr(e,t,i,n,r,o){Ir(e,t,i,[{index:n,addedCount:r,removed:o,object:t,type:"splice"}])}const Or=ln(e=>{const t=tr(qn(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return nr}_initializeProperties(){super._initializeProperties(),Nr.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[nr.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==nr.READ_ONLY);let n=or(this,t)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=or(this,t)[e],r=n.indexOf(i);r>=0&&n.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,nr.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,nr.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,nr.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,nr.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||xn(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=An(this,e);if(!(e=In(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let n=e.__dataLinkedPaths;if(n){let r;for(let o in n){let s=n[o];Sn(o,t)?(r=En(o,s,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Sn(s,t)&&(r=En(s,o,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=bn(e)),e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&vn(e),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[nr.NOTIFY]&&this[nr.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[nr.READ_ONLY]&&this[nr.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,n){let r=e[nr.COMPUTE];if(r){let o=t;for(;sr(e,r,o,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,i,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),sr(this,this[nr.REFLECT],t,i,n),sr(this,this[nr.OBSERVE],t,i,n),r&&function(e,t,i,n,r){let o,s,a=e[nr.NOTIFY],l=ir++;for(let s in t)t[s]&&(a&&ar(e,a,l,s,i,n,r)?o=!0:r&&cr(e,s,i)&&(o=!0));o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[nr.PROPAGATE]&&sr(this,this[nr.PROPAGATE],e,t,i);let n=this.__templateInfo;for(;n;)sr(this,n.propertyEffects,e,t,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=Cn(e),t=Cn(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Cn(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Ir(this,An(this,e,i),i.path,t)}get(e,t){return An(t||this,e)}set(e,t,i){i?In(i,e,t):this[nr.READ_ONLY]&&this[nr.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=An(this,e,i),r=n.length,o=n.push(...t);return t.length&&Pr(this,n,i.path,r,t.length,[]),o}pop(e){let t={path:""},i=An(this,e,t),n=Boolean(i.length),r=i.pop();return n&&Pr(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...n){let r,o={path:""},s=An(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?s.splice(t):s.splice(t,i,...n),(n.length||r.length)&&Pr(this,s,o.path,t,n.length,r),r}shift(e){let t={path:""},i=An(this,e,t),n=Boolean(i.length),r=i.shift();return n&&Pr(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},n=An(this,e,i),r=n.unshift(...t);return t.length&&Pr(this,n,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=An(this,e,n),i=n.path}else i=Array.isArray(e)?Cn(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,nr.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,nr.OBSERVE,{fn:dr,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,nr.OBSERVE,{fn:dr,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=Cr(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");vr(this,i,nr.OBSERVE,xr,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,nr.NOTIFY,{fn:hr,info:{eventName:Rn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,nr.REFLECT,{fn:ur,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=Cr(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");vr(this,n,nr.COMPUTE,mr,e,i)}_marshalArgs(e,t,i){const n=this.__data,r=[];for(let o=0,s=e.length;o<s;o++){let{name:s,structured:a,wildcard:l,value:d,literal:c}=e[o];if(!c)if(l){const e=Sn(s,t),r=Ar(n,i,e?t:s);d={path:e?t:s,value:r,base:e?An(n,s):r}}else d=a?Ar(n,i,s):n[s];r[o]=d}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__templateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&(i=Object.create(i),i.wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e){Nr.beginHosting(this);let t=super._stampTemplate(e);Nr.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,function(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let r=n[t],o=i[t],s=r.bindings;if(s)for(let t=0;t<s.length;t++){let i=s[t];yr(o,i),br(o,e,i)}o.__dataHost=e}}(this,i),this.__dataReady&&sr(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e=0;e<i.length;e++){let t=i[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,i,n){let r=t._parseTemplateNode.call(this,e,i,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Er(t)||" ",fr(this,i,n,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,n,r,o){let s=this._parseBindings(o,i);if(s){let t=r,o="property";rr.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let a=Er(s);return a&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(r=kn(r)),fr(this,i,n,o,r,s,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,n,r,o)}static _parseTemplateNestedTemplate(e,i,n){let r=t._parseTemplateNestedTemplate.call(this,e,i,n),o=n.templateInfo.hostProps;for(let e in o){fr(this,i,n,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return r}static _parseBindings(e,t){let i,n=[],r=0;for(;null!==(i=Sr.exec(e));){i.index>r&&n.push({literal:e.slice(r,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let p=Cr(a),h=[];if(p){let{args:e,methodName:i}=p;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let n=t.dynamicFns;(n&&n[i]||p.static)&&(h.push(i),p.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:o,negate:s,customEvent:l,signature:p,dependencies:h,event:d}),r=Sr.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,r,o){let s;return s=t.signature?xr(e,i,n,0,t.signature):i!=t.source?An(e,t.source):o&&vn(i)?An(e,i):e.__data[i],t.negate&&(s=!s),s}}});const Nr=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kr=ln(e=>{const t=Vn(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),Rr=window.ShadyCSS&&window.ShadyCSS.cssBuild,Fr=ln(e=>{const t=kr(Or(e));function i(e,t,i,n){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,n)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,n[i.observer]),e._addPropertyToAttributeMap(t)}function n(e,t,i,n){if(!Rr){const r=t.content.querySelectorAll("style"),o=_n(t),s=function(e){let t=hn(e);return t?gn(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<s.length;i++){let r=s[i];r.textContent=e._processStyleText(r.textContent,n),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],s=r[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=e._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=pn.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=rn(e.url);else{const e=pn.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=on,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return nn(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;n(this,t,e,i?tn(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=bn(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=tn(this.importPath)),tn(e,t)}static _parseTemplateContent(e,i,n){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,n)}static _addTemplatePropertyEffect(e,i,n){return t._addTemplatePropertyEffect.call(this,e,i,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Mr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Dr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Dr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Mr?e._cancelAsync():e=new Mr,e.setConfig(t,i),e}}let Dr=new Set;const Lr=function(e){Dr.add(e)},zr=function(){const e=Boolean(Dr.size);return Dr.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Hr="string"==typeof document.head.style.touchAction,Br="__polymerGesturesHandled",jr="__polymerGesturesTouchAction",Vr=["mousedown","mousemove","mouseup","click"],$r=[0,1,4,2],Ur=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function qr(e){return Vr.indexOf(e)>-1}let Gr=!1;function Xr(e){qr(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Gr=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Yr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Jr=[],Wr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Kr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Zr(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let Qr=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Br]={skip:!0},"click"===e.type)){let t=!1,n=oo(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)Jr.push(n[e]);else if(i=n[e],Wr[i.localName]){let i=Zr(n[e]);for(let e=0;e<i.length;e++)t=t||Jr.indexOf(i[e])>-1}if(n[e]===io.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function eo(e){let t=Yr?["click"]:Vr;for(let i,n=0;n<t.length;n++)i=t[n],e?(Jr.length=0,document.addEventListener(i,Qr,!0)):document.removeEventListener(i,Qr,!0)}function to(e){let t=e.type;if(!qr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Ur&&(t=$r[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let io={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function no(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function ro(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){io.mouse.mouseIgnoreJob||eo(!0),io.mouse.target=oo(e)[0],io.mouse.mouseIgnoreJob=Mr.debounce(io.mouse.mouseIgnoreJob,Hn.after(2500),(function(){eo(),io.mouse.target=null,io.mouse.mouseIgnoreJob=null}))}),!!Gr&&{passive:!0});const oo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],so={},ao=[];function lo(e){const t=oo(e);return t.length>0?t[0]:e.target}function co(e){let t,i=e.type,n=e.currentTarget.__polymerGestures;if(!n)return;let r=n[i];if(r){if(!e[Br]&&(e[Br]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(io.touch.id=t.identifier),io.touch.id!==t.identifier)return;Hr||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)io.touch.x=t.clientX,io.touch.y=t.clientY,io.touch.scrollDecided=!1;else if("touchmove"===i){if(io.touch.scrollDecided)return;io.touch.scrollDecided=!0;let i=function(e){let t="auto",i=oo(e);for(let e,n=0;n<i.length;n++)if(e=i[n],e[jr]){t=e[jr];break}return t}(e),n=!1,r=Math.abs(io.touch.x-t.clientX),o=Math.abs(io.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>r:"pan-y"===i&&(n=r>o)),n?e.preventDefault():_o("track")}}(e)}if(t=e[Br],!t.skip){for(let i,n=0;n<ao.length;n++)i=ao[n],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<ao.length;o++)n=ao[o],r[n.name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function po(e,t,i){return!!so[t]&&(function(e,t,i){let n=so[t],r=n.deps,o=n.name,s=e.__polymerGestures;s||(e.__polymerGestures=s={});for(let t,i,n=0;n<r.length;n++)t=r[n],Yr&&qr(t)&&"click"!==t||(i=s[t],i||(s[t]=i={_count:0}),0===i._count&&e.addEventListener(t,co,Xr(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&mo(e,n.touchAction)}(e,t,i),!0)}function ho(e,t,i){return!!so[t]&&(function(e,t,i){let n=so[t],r=n.deps,o=n.name,s=e.__polymerGestures;if(s)for(let t,i,n=0;n<r.length;n++)t=r[n],i=s[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,co,Xr(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function uo(e){ao.push(e);for(let t=0;t<e.emits.length;t++)so[e.emits[t]]=e}function mo(e,t){Hr&&e instanceof HTMLElement&&Bn.run(()=>{e.style.touchAction=t}),e[jr]=t}function fo(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,bn(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function _o(e){let t=function(e){for(let t,i=0;i<ao.length;i++){t=ao[i];for(let i,n=0;n<t.emits.length;n++)if(i=t.emits[n],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function go(e,t,i,n){t&&fo(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return _o(e)}})}function yo(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),r=Math.abs(e.y-i);return n>=5||r>=5}function bo(e,t,i){if(!t)return;let n,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;r&&(n=o.x-r.x,l=o.y-r.y),fo(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(e,t),r===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function vo(e,t,i){let n=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=lo(i||t);!o||Kr[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=lo(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,r=e.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||fo(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/uo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ro(this.info)},mousedown:function(e){if(!to(e))return;let t=lo(e),i=this;no(this.info,(function(e){to(e)||(go("up",t,e),ro(i.info))}),(function(e){to(e)&&go("up",t,e),ro(i.info)})),go("down",t,e)},touchstart:function(e){go("down",lo(e),e.changedTouches[0],e)},touchend:function(e){go("up",lo(e),e.changedTouches[0],e)}}),uo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ro(this.info)},mousedown:function(e){if(!to(e))return;let t=lo(e),i=this,n=function(e){let n=e.clientX,r=e.clientY;yo(i.info,n,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&_o("tap"),i.info.addMove({x:n,y:r}),to(e)||(i.info.state="end",ro(i.info)),t&&bo(i.info,t,e),i.info.started=!0)};no(this.info,n,(function(e){i.info.started&&n(e),ro(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=lo(e),i=e.changedTouches[0],n=i.clientX,r=i.clientY;yo(this.info,n,r)&&("start"===this.info.state&&_o("tap"),this.info.addMove({x:n,y:r}),bo(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=lo(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),bo(this.info,t,i))}}),uo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){to(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){to(e)&&vo(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){vo(this.info,e.changedTouches[0],e)}});const xo=ln(e=>class extends e{_addEventListenerToNode(e,t,i){po(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){ho(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}),wo=/:host\(:dir\((ltr|rtl)\)\)/g,So=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Eo=/:dir\((?:ltr|rtl)\)/,Co=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),To=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ao=null,Io="";function Po(){Io=document.documentElement.getAttribute("dir")}function Oo(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Io)}}function No(){Po(),Io=document.documentElement.getAttribute("dir");for(let e=0;e<To.length;e++)Oo(To[e])}const ko=ln(e=>{Co||Ao||(Po(),Ao=new MutationObserver(No),Ao.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=qn(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Co&&Eo.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(wo,':host([dir="$1"])'),t=t.replace(So,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ao&&Ao.takeRecords().length&&No(),To.push(this),Oo(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=To.indexOf(this);e>-1&&To.splice(e,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ro(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Fo(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Ro():window.addEventListener("DOMContentLoaded",Ro);function Mo(e,t,i,n,r,o){let s,a=0,l=0,d=Math.min(i-t,o-r);if(0==t&&0==r&&(a=function(e,t,i){for(let n=0;n<i;n++)if(!Lo(e[n],t[n]))return n;return i}(e,n,d)),i==e.length&&o==n.length&&(l=function(e,t,i){let n=e.length,r=t.length,o=0;for(;o<i&&Lo(e[--n],t[--r]);)o++;return o}(e,n,d-a)),r+=a,o-=l,(i-=l)-(t+=a)==0&&o-r==0)return[];if(t==i){for(s=Fo(t,[],0);r<o;)s.removed.push(n[r++]);return[s]}if(r==o)return[Fo(t,[],i-t)];let c=function(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let o,s=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];o=a<l?a<s?a:s:l<s?l:s,o==s?(s==n?r.push(0):(r.push(1),n=s),t--,i--):o==a?(r.push(3),t--,n=a):(r.push(2),i--,n=l)}return r.reverse(),r}(function(e,t,i,n,r,o){let s=o-r+1,a=i-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<s;i++)for(let o=1;o<a;o++)if(Lo(e[t+o-1],n[r+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,n,r,o));s=void 0;let p=[],h=t,u=r;for(let e=0;e<c.length;e++)switch(c[e]){case 0:s&&(p.push(s),s=void 0),h++,u++;break;case 1:s||(s=Fo(h,[],0)),s.addedCount++,h++,s.removed.push(n[u]),u++;break;case 2:s||(s=Fo(h,[],0)),s.addedCount++,h++;break;case 3:s||(s=Fo(h,[],0)),s.removed.push(n[u]),u++}return s&&p.push(s),p}function Do(e,t){return Mo(e,0,e.length,t,0,t.length)}function Lo(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function zo(e){return"slot"===e.localName}let Ho=class{static getFlattenedNodes(e){const t=bn(e);return zo(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>zo(e)?bn(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){zo(this._target)?this._listenSlots([this._target]):bn(this._target).children&&(this._listenSlots(bn(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){zo(this._target)?this._unlistenSlots([this._target]):bn(this._target).children&&(this._unlistenSlots(bn(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Bn.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Do(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,r=0;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];zo(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];zo(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bo=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=zr()}while(e||t)},jo=Element.prototype,Vo=jo.matches||jo.matchesSelector||jo.mozMatchesSelector||jo.msMatchesSelector||jo.oMatchesSelector||jo.webkitMatchesSelector,$o=function(e,t){return Vo.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Uo{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Ho(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(bn(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=bn(t).parentNode||bn(t).host;return t===this.node}getOwnerRoot(){return bn(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?bn(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=bn(this.node).assignedSlot;for(;t;)e.push(t),t=bn(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return bn(i).importNode(e,t)}getEffectiveChildNodes(){return Ho.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,r=0,o=t.length;r<o&&(n=t[r]);r++)n.nodeType===Node.ELEMENT_NODE&&$o(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function qo(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class Go{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Uo.prototype.cloneNode,Uo.prototype.appendChild,Uo.prototype.insertBefore,Uo.prototype.removeChild,Uo.prototype.replaceChild,Uo.prototype.setAttribute,Uo.prototype.removeAttribute,Uo.prototype.querySelector,Uo.prototype.querySelectorAll,Uo.prototype.parentNode,Uo.prototype.firstChild,Uo.prototype.lastChild,Uo.prototype.nextSibling,Uo.prototype.previousSibling,Uo.prototype.firstElementChild,Uo.prototype.lastElementChild,Uo.prototype.nextElementSibling,Uo.prototype.previousElementSibling,Uo.prototype.childNodes,Uo.prototype.children,Uo.prototype.classList,Uo.prototype.textContent,Uo.prototype.innerHTML;let Xo=Uo;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Uo.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=Uo.prototype[t])}),qo(e.prototype,["classList"]),Xo=e,Object.defineProperties(Go.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Yo(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const n=i[e];if(Yo(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(Uo.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),qo(Uo.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(Uo.prototype,["textContent","innerHTML","className"]);const Yo=function(e){if((e=e||document)instanceof Xo)return e;if(e instanceof Go)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Go(e):new Xo(e),e.__domApi=t),t},Jo=window.ShadyDOM,Wo=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ko(e,t){return bn(e).getRootNode()===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Zo=window.ShadyCSS;const Qo=ln(e=>{const t=ko(xo(Fr(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,r=0;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=t;let r=i.node||this;return bn(r).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(e);r||(r={},n.set(e,r));let o=t+i;r[o]||(r[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,o=n&&n[r];o&&(this._removeEventListenerFromNode(e,t,o),n[r]=null)}setScrollDirection(e,t){mo(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=bn(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Yo(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Yo(this).getEffectiveChildNodes()}queryDistributedElements(e){return Yo(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Yo(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&bn(this).contains(e)&&bn(this).getRootNode()===bn(e).getRootNode()}isLocalDescendant(e){return this.root===bn(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Jo||!Wo)return null;if(!Jo.handlesDynamicScoping)return null;const i=Wo.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),r=bn(e).getRootNode(),o=e=>{if(!Ko(e,r))return;const t=Array.from(Jo.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!Ko(o,r))continue;const s=i.currentScopeForNode(o);s!==n&&(""!==s&&i.unscopeNode(o,s),i.scopeNode(o,n))}};if(o(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Zo.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Mr.debounce(this._debouncers[e],i>0?Hn.after(i):Bn,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Hn.run(e.bind(this),t):~Bn.run(e.bind(this))}cancelAsync(e){e<0?Bn.cancel(~e):Hn.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return $o(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(bn(i).setAttribute(e,""),!0):(bn(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=An(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n}),es={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ts={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},is=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ts);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ns(e,t,i,n){!function(e,t,i){const n=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let o=0;o<r.length;o++){let s=r[o];if(!(s in i))if(n)t[s]=e[s];else{let i=Object.getOwnPropertyDescriptor(e,s);i&&(i.configurable=!0,Object.defineProperty(t,s,i))}}}(t,e,n);for(let e in es)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function rs(e,t){for(const i in t){const n=e[i],r=t[i];e[i]=!("value"in r)&&n&&"value"in n?Object.assign({value:n.value},r):r}}function os(e,t,i){let n;const r={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)rs(t,n[e].properties);return rs(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)e=n[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=r.attributeChanged;if(n)for(let r=0;r<n.length;r++)n[r].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=function e(t,i,n){i=i||[];for(let r=t.length-1;r>=0;r--){let o=t[r];o?Array.isArray(o)?e(o,i):i.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),o.prototype.behaviors=e?e.concat(i):n}return(t=>{n&&function(e,t,i){for(let n=0;n<t.length;n++)ns(e,t[n],i,is)}(t,n,r),ns(t,e,r,ts)})(o.prototype),o.generatedFrom=e,o}const ss=function(e){let t;return t="function"==typeof e?e:ss.Class(e),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function as(e,t,i,n,r){let o;r&&(o="object"==typeof i&&null!==i,o&&(n=e.__dataTemp[t]));let s=n!==i&&(n==n||i==i);return o&&s&&(e.__dataTemp[t]=i),s}ss.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(Qo(HTMLElement)):Qo(HTMLElement);return i=os(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const ls=ln(e=>class extends e{_shouldPropertyChange(e,t,i){return as(this,e,t,i,!0)}}),ds=ln(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return as(this,e,t,i,this.mutableData)}});ls._mutablePropertyChange=as;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let cs=null;function ps(){return cs}ps.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ps,writable:!0}});const hs=Or(ps),us=ls(hs);const ms=Or(class{});class fs extends ms{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),bn(bn(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&bn(bn(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}fs.prototype.__dataHost,fs.prototype.__templatizeOptions,fs.prototype._methodHost,fs.prototype.__templatizeOwner,fs.prototype.__hostProps;const _s=ls(fs);function gs(e,t,i){let n=i.mutableData?_s:fs;xs.mixin&&(n=xs.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),function(e,t,i,n){let r=i.hostProps||{};for(let t in n.instanceProps){delete r[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:vs(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(r,e,t,i),r}function ys(e,t,i){let n=i.forwardHostProp;if(n&&t.hasHostProps){let r=t.templatizeTemplateClass;if(!r){let e=i.mutableData?us:hs;r=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)r.prototype._addPropertyEffect("_host_"+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:bs(e,n)}),r.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){cs=e,Object.setPrototypeOf(e,t.prototype),new t,cs=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function bs(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function vs(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function xs(e,t,i){if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:fs)._parseTemplate(e),r=n.templatizeInstanceClass;r||(r=gs(e,n,i),n.templatizeInstanceClass=r),ys(e,n,i);let o=class extends r{};return o.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=n.hostProps,o=o,o}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ws=xo(ds(Or(HTMLElement)));customElements.define("dom-bind",class extends ws{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,n){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){bn(bn(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ss{constructor(e){this.value=e.toString()}toString(){return this.value}}function Es(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ss)return function(e){if(e instanceof Ss)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Cs=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+Es(i)+e[n+1],e[0]),i},Ts=Fr(HTMLElement),As=ds(Ts);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Is extends As{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=bn(bn(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=xs(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let n,r=0;r<i.length&&(n=i[r]);r++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((n=this.as)===(r=t)||wn(n,r)||Sn(n,r)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let r=En(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(r,i)}var n,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Mr.debounce(this.__renderDebouncer,t>0?Hn.after(t):Bn,e.bind(this)),Lr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Bo()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const r=Math.min(t.length,this.__limit);for(;n<r;n++){let r=this.__instances[n],o=t[n],s=e[o];i[o]=n,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,n),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):this.__insertInstance(s,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=bn(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(e,t,i);let r=this.__instances[t+1],o=r?r.children[0]:this;return bn(bn(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[r],s=this.__instances[o];if(s){let i=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(i,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=bn(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(this.template,e)}}customElements.define(Is.is,Is);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ps extends Ts{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Mr.debounce(this.__renderDebouncer,Bn,()=>this.__render()),Lr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=bn(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||bn(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Bo()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=bn(this).parentNode;if(e){if(!this.__ctor){let e=bn(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!bn(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=xs(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[xn(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(bn(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)bn(e).insertBefore(i,this)}}else this.__instance=new this.__ctor,bn(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=bn(e[0]).parentNode;if(t){t=bn(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ps.is,Ps);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Os=ln(e=>{let t=Fr(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=Do(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(Ts);class Ns extends Os{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ns.is,Ns);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ks=new Yi;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){ks.processStyles(),Ai(e,t)},styleElement(e){ks.processStyles()},styleDocument(e){ks.processStyles(),Ai(document.body,e)},getComputedStyleValue:(e,t)=>Ii(e,t),flushCustomStyles(){},nativeCss:oi,nativeShadow:ei,cssBuild:ii,disableRuntime:ri}),window.ShadyCSS.CustomStyleInterface=ks;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Rs=window.ShadyCSS.CustomStyleInterface;class Fs extends HTMLElement{constructor(){super(),this._style=null,Rs.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=yn(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Fs);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Qo(HTMLElement).prototype;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ms=Cs`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Ms.setAttribute("style","display: none;"),document.head.appendChild(Ms.content);var Ds=document.createElement("style");Ds.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ds),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss({_template:Cs`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=tn(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ls=Cs`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Ls.setAttribute("style","display: none;"),document.head.appendChild(Ls.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const zs=Cs`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;zs.setAttribute("style","display: none;"),document.head.appendChild(zs.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Hs=Cs`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Hs.setAttribute("style","display: none;"),document.head.appendChild(Hs.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Bs=Cs`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Bs.setAttribute("style","display: none;"),document.head.appendChild(Bs.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ss({_template:Cs`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),i=this.getAttribute("aria-label");"string"==typeof i&&i!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}});