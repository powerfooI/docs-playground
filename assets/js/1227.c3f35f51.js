/*! For license information please see 1227.c3f35f51.js.LICENSE.txt */
(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1227],{9365:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var r=n(6540),a=n(4164),o=n(3104),s=n(6347),i=n(205),u=n(7485),l=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=h({queryString:n,groupId:a}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??v;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function E(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==r&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(E,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function C(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},9108:(e,t,n)=>{"use strict";n.d(t,{A:()=>be});var r=n(6540);const a=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t};function o(e){const t=a(e);return(0,r.useCallback)((function(...e){return t.current&&t.current(...e)}),[t])}const s=function(e,t){const n=(0,r.useRef)(!0);(0,r.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)};function i(e){const t=function(e){const t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((()=>()=>t.current()),[])}const u=2**31-1;function l(e,t,n){const r=n-Date.now();e.current=r<=u?setTimeout(t,r):setTimeout((()=>l(e,t,n)),u)}function c(){const e=function(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),t=(0,r.useRef)();return i((()=>clearTimeout(t.current))),(0,r.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(r,a=0){e()&&(n(),a<=u?t.current=setTimeout(r,a):l(t,r,Date.now()+a))},clear:n,handleRef:t}}),[])}void 0!==n.g&&n.g.navigator&&n.g.navigator.product,new WeakMap;var d=n(4848);const f=["as","disabled"];function p({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:s,tabIndex:i=0,type:u}){e||(e=null!=n||null!=r||null!=a?"a":"button");const l={tagName:e};if("button"===e)return[{type:u||"button",disabled:t},l];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==s||s(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},l]}const h=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f);const[o,{tagName:s}]=p(Object.assign({tagName:n,disabled:r},a));return(0,d.jsx)(s,Object.assign({},a,o,{ref:t}))}));h.displayName="Button";const v=["onKeyDown"];const m=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,v);const[a]=p(Object.assign({tagName:"a"},r)),s=o((e=>{a.onKeyDown(e),null==n||n(e)}));return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,d.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,d.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:s}));var i}));m.displayName="Anchor";const b=m;var x=n(6942),E=n.n(x),g=n(8168),y=n(8587);n(311);function C(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){return Object.keys(t).reduce((function(n,a){var o,s=n,i=s[C(a)],u=s[a],l=(0,y.A)(s,[C(a),a].map(k)),c=t[a],d=function(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),s=o[0],i=o[1],u=void 0!==e,l=a.current;return a.current=u,!u&&l&&s!==t&&i(t),[u?e:s,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(u,i,e[c]),f=d[0],p=d[1];return(0,g.A)({},l,((o={})[a]=f,o[c]=p,o))}),e)}function S(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function N(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function T(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}S.__suppressDeprecationWarning=!0,N.__suppressDeprecationWarning=!0,T.__suppressDeprecationWarning=!0;const j=["xxl","xl","lg","md","sm","xs"],D=r.createContext({prefixes:{},breakpoints:j,minBreakpoint:"xs"}),{Consumer:O,Provider:I}=D;function R(e,t){const{prefixes:n}=(0,r.useContext)(D);return e||n[t]||t}const _=r.forwardRef((({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=R(t,"carousel-caption"),(0,d.jsx)(n,{ref:a,className:E()(e,t),...r}))));_.displayName="CarouselCaption";const A=_,L=r.forwardRef((({as:e="div",bsPrefix:t,className:n,...r},a)=>{const o=E()(n,R(t,"carousel-item"));return(0,d.jsx)(e,{ref:a,...r,className:o})}));L.displayName="CarouselItem";const V=L;function M(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function P(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var $=/([A-Z])/g;var q=/^ms-/;function K(e){return function(e){return e.replace($,"-$1").toLowerCase()}(e).replace(q,"-ms-")}var U=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const F=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(K(t))||function(e,t){return P(e).getComputedStyle(e,t)}(e).getPropertyValue(K(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!U.test(e))}(a)?n+=K(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(K(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},X=!("undefined"==typeof window||!window.document||!window.document.createElement);var B=!1,W=!1;try{var Y={get passive(){return B=!0},get once(){return W=B=!0}};X&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(xe){}const H=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!W){var a=r.once,o=r.capture,s=n;!W&&a&&(s=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=s),e.addEventListener(t,s,B?r:o)}e.addEventListener(t,n,r)};const Z=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};const z=function(e,t,n,r){return H(e,t,n,r),function(){Z(e,t,n,r)}};function G(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=z(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function J(e,t,n,r){var a,o;null==n&&(a=F(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var s=G(e,n,r),i=z(e,"transitionend",t);return function(){s(),i()}}function Q(e,t){const n=F(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ee(e,t){const n=Q(e,"transitionDuration"),r=Q(e,"transitionDelay"),a=J(e,(n=>{n.target===e&&(a(),t(n))}),n+r)}var te=n(2892),ne=n(961);const re=!1,ae=r.createContext(null);var oe="unmounted",se="exited",ie="entering",ue="entered",le="exiting",ce=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=se,r.appearStatus=ie):a=ue:a=t.unmountOnExit||t.mountOnEnter?oe:se,r.state={status:a},r.nextCallback=null,r}(0,te.A)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===oe?{status:se}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ie&&n!==ue&&(t=ie):n!==ie&&n!==ue||(t=le)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:ne.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===se&&this.setState({status:oe})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[ne.findDOMNode(this),r],o=a[0],s=a[1],i=this.getTimeouts(),u=r?i.appear:i.enter;!e&&!n||re?this.safeSetState({status:ue},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:ie},(function(){t.props.onEntering(o,s),t.onTransitionEnd(u,(function(){t.safeSetState({status:ue},(function(){t.props.onEntered(o,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:ne.findDOMNode(this);t&&!re?(this.props.onExit(r),this.safeSetState({status:le},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:se},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:se},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:ne.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],s=a[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===oe)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,y.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ae.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function de(){}ce.contextType=ae,ce.propTypes={},ce.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:de,onEntering:de,onEntered:de,onExit:de,onExiting:de,onExited:de},ce.UNMOUNTED=oe,ce.EXITED=se,ce.ENTERING=ie,ce.ENTERED=ue,ce.EXITING=le;const fe=ce,pe=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;const he=function(e,t){return(0,r.useMemo)((()=>function(e,t){const n=pe(e),r=pe(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const ve=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,onExited:s,addEndListener:i,children:u,childRef:l,...c},f)=>{const p=(0,r.useRef)(null),h=he(p,l),v=e=>{var t;h((t=e)&&"setState"in t?ne.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&p.current&&e(p.current,t)},b=(0,r.useCallback)(m(e),[e]),x=(0,r.useCallback)(m(t),[t]),E=(0,r.useCallback)(m(n),[n]),g=(0,r.useCallback)(m(a),[a]),y=(0,r.useCallback)(m(o),[o]),C=(0,r.useCallback)(m(s),[s]),k=(0,r.useCallback)(m(i),[i]);return(0,d.jsx)(fe,{ref:f,...c,onEnter:b,onEntered:E,onEntering:x,onExit:g,onExited:C,onExiting:y,addEndListener:k,nodeRef:p,children:"function"==typeof u?(e,t)=>u(e,{...t,ref:v}):r.cloneElement(u,{ref:v})})}));const me=r.forwardRef((({defaultActiveIndex:e=0,...t},n)=>{const{as:i="div",bsPrefix:u,slide:l=!0,fade:f=!1,controls:p=!0,indicators:h=!0,indicatorLabels:v=[],activeIndex:m,onSelect:x,onSlide:g,onSlid:y,interval:C=5e3,keyboard:k=!0,onKeyDown:S,pause:N="hover",onMouseOver:T,onMouseOut:j,wrap:O=!0,touch:I=!0,onTouchStart:_,onTouchMove:A,onTouchEnd:L,prevIcon:V=(0,d.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:P="Previous",nextIcon:$=(0,d.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:q="Next",variant:K,className:U,children:F,...X}=w({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),B=R(u,"carousel"),W=function(){const{dir:e}=(0,r.useContext)(D);return"rtl"===e}(),Y=(0,r.useRef)(null),[H,Z]=(0,r.useState)("next"),[z,G]=(0,r.useState)(!1),[J,Q]=(0,r.useState)(!1),[te,ne]=(0,r.useState)(m||0);(0,r.useEffect)((()=>{J||m===te||(Y.current?Z(Y.current):Z((m||0)>te?"next":"prev"),l&&Q(!0),ne(m||0))}),[m,J,te,l]),(0,r.useEffect)((()=>{Y.current&&(Y.current=null)}));let re,ae=0;!function(e,t){let n=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&t(e,n++)}))}(F,((e,t)=>{++ae,t===m&&(re=e.props.interval)}));const oe=a(re),se=(0,r.useCallback)((e=>{if(J)return;let t=te-1;if(t<0){if(!O)return;t=ae-1}Y.current="prev",null==x||x(t,e)}),[J,te,x,O,ae]),ie=o((e=>{if(J)return;let t=te+1;if(t>=ae){if(!O)return;t=0}Y.current="next",null==x||x(t,e)})),ue=(0,r.useRef)();(0,r.useImperativeHandle)(n,(()=>({element:ue.current,prev:se,next:ie})));const le=o((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&(W?se():ie())})),ce="next"===H?"start":"end";s((()=>{l||(null==g||g(te,ce),null==y||y(te,ce))}),[te]);const de=`${B}-item-${H}`,fe=`${B}-item-${ce}`,pe=(0,r.useCallback)((e=>{!function(e){e.offsetHeight}(e),null==g||g(te,ce)}),[g,te,ce]),he=(0,r.useCallback)((()=>{Q(!1),null==y||y(te,ce)}),[y,te,ce]),me=(0,r.useCallback)((e=>{if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(W?ie(e):se(e));case"ArrowRight":return e.preventDefault(),void(W?se(e):ie(e))}null==S||S(e)}),[k,S,se,ie,W]),be=(0,r.useCallback)((e=>{"hover"===N&&G(!0),null==T||T(e)}),[N,T]),xe=(0,r.useCallback)((e=>{G(!1),null==j||j(e)}),[j]),Ee=(0,r.useRef)(0),ge=(0,r.useRef)(0),ye=c(),Ce=(0,r.useCallback)((e=>{Ee.current=e.touches[0].clientX,ge.current=0,"hover"===N&&G(!0),null==_||_(e)}),[N,_]),ke=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-Ee.current,null==A||A(e)}),[A]),we=(0,r.useCallback)((e=>{if(I){const t=ge.current;Math.abs(t)>40&&(t>0?se(e):ie(e))}"hover"===N&&ye.set((()=>{G(!1)}),C||void 0),null==L||L(e)}),[I,N,se,ie,ye,C,L]),Se=null!=C&&!z&&!J,Ne=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!Se)return;const n=W?se:ie;return Ne.current=window.setInterval(document.visibilityState?le:n,null!=(e=null!=(t=oe.current)?t:C)?e:void 0),()=>{null!==Ne.current&&clearInterval(Ne.current)}}),[Se,se,ie,oe,C,le,W]);const Te=(0,r.useMemo)((()=>h&&Array.from({length:ae},((e,t)=>e=>{null==x||x(t,e)}))),[h,ae,x]);return(0,d.jsxs)(i,{ref:ue,...X,onKeyDown:me,onMouseOver:be,onMouseOut:xe,onTouchStart:Ce,onTouchMove:ke,onTouchEnd:we,className:E()(U,B,l&&"slide",f&&`${B}-fade`,K&&`${B}-${K}`),children:[h&&(0,d.jsx)("div",{className:`${B}-indicators`,children:M(F,((e,t)=>(0,d.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=v&&v.length?v[t]:`Slide ${t+1}`,className:t===te?"active":void 0,onClick:Te?Te[t]:void 0,"aria-current":t===te},t)))}),(0,d.jsx)("div",{className:`${B}-inner`,children:M(F,((e,t)=>{const n=t===te;return l?(0,d.jsx)(ve,{in:n,onEnter:n?pe:void 0,onEntered:n?he:void 0,addEndListener:ee,children:(t,a)=>r.cloneElement(e,{...a,className:E()(e.props.className,n&&"entered"!==t&&de,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})}):r.cloneElement(e,{className:E()(e.props.className,n&&"active")})}))}),p&&(0,d.jsxs)(d.Fragment,{children:[(O||0!==m)&&(0,d.jsxs)(b,{className:`${B}-control-prev`,onClick:se,children:[V,P&&(0,d.jsx)("span",{className:"visually-hidden",children:P})]}),(O||m!==ae-1)&&(0,d.jsxs)(b,{className:`${B}-control-next`,onClick:ie,children:[$,q&&(0,d.jsx)("span",{className:"visually-hidden",children:q})]})]})]})}));me.displayName="Carousel";const be=Object.assign(me,{Caption:A,Item:V})},6942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);