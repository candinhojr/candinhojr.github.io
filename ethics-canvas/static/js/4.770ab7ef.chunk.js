(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{399:function(e,n,t){"use strict";t.r(n);var r=t(11),o=t(12),a=t(87),c=t(69),i=t(2),l=t(0),u=t.n(l),s=t(180),d=t.n(s),f=t(48),p=t.n(f),v=(t(73),t(50),t(98)),m=t.n(v),b=(t(15),t(236)),g=t.n(b);function h(e,n){return m()(e)?g()(d()(e),n,function(e,n){if(p()(e))return n}):void 0!==n?n:e}function y(e,n){return Object.keys(e).reduce(function(t,r){return Object(c.a)({},t,Object(a.a)({},r,n(r,e[r])))},{})}var O=t(17),j=t.n(O),E=t(250),w=t.n(E);function k(e,n){return e.map(function(e){return e&&e[n]})}function x(e,n,t){var r=t.key;if(p()(e)&&p()(n)){var o=k(e,r),a=k(n,r);return w()(o,a).map(function(t){return h(e[o.indexOf(t)],n[a.indexOf(t)])})}return j()(n)?e:n}var S=t(261),C=t.n(S),P=t(284),R=t.n(P),I=t(286),z=t.n(I);function H(e){var n=e.header,t=e.props,r=e.sections;return"# ".concat(n.value,"\n").concat(t.map(function(e){var n=e.key,t=e.value;return"".concat(n,":").concat(t?" ".concat(t):"")}).join("\n"),"\n\n").concat(r.map(function(e){var n=e.key,t=e.header,r=e.placeholder,o=e.content;return"## ".concat(t," {").concat(n,"}").concat(r?"\n[".concat(r,"]"):"").concat(o?"\n".concat(o):"","\n")}).join("\n"),"\n")}var F=t(398),T={log:console.log,warn:console.warn,error:console.error},A=t(287),D=t.n(A),L=/^\s*#(?!#)\s*(.*)$/,M=/^\s*#(.*)$/,B=/^\s*(\S+)\s*:(.*)$/,q=/^\s*##([^{]*){([^}]*)}(.*)$/,V=/\[(.*)\S*\]/,K=/\s*\[(.*)/,U=/^\s*([^\]]*)]/;function N(e){var n=e.split("\n"),t=function(e){var n=0;for(;n<e.length;){var t=e[n],r=t.match(L);if(r){var a=Object(o.a)(r,2),c=a[1];return{header:{value:c.trim()},index:n}}n+=1}return{header:{value:""},index:-1}}(n),r=t.header,a=function(e,n){var t=n,r=[];for(;t<e.length;){var a=e[t],c=a.match(B);if(c){var i=Object(o.a)(c,3),l=i[1],u=i[2];r.push({key:l.trim(),value:u.trim()})}else if(a.match(M))break;t+=1}return{props:r,lastIndex:t-1}}(n,t.index+1);return{header:r,props:a.props,sections:function(e,n){var t=n,r=[];for(;t<e.length;){var a=e[t],c=a.match(q);if(c){var i=Object(o.a)(c,4),l=i[1],u=i[2],s=i[3],d="".concat(l.trim()," ").concat(s.trim()).trim(),f=W(e,t+1),p=f.placeholder,v=f.index;t=v+1||t+1;for(var m=[];t<e.length&&!(e[t+1]||"").match(q);)a=e[t],m.push(a),t+=1;r.push({key:u.trim(),header:d,placeholder:p,content:m.join("\n").trim()})}t+=1}return{sections:r}}(n,a.lastIndex+1).sections}}function W(e,n){for(var t=n,r=[];t<e.length;){var a=e[t].trim();if(0===r.length){var c=a.match(V);if(c)return{placeholder:Object(o.a)(c,2)[1].trim(),index:t};var i=a.match(K);if(i){var l=Object(o.a)(i,2)[1];r.push(l.trim())}else if(""!==a)break}else if(r.length>0){var u=a.match(U);if(u){var s=Object(o.a)(u,2)[1];return r.push(s.trim()),{placeholder:r.join("\n"),index:t}}r.push(a)}t+=1}return{placeholder:"",index:-1}}function Y(e,n){try{var t=N(n),r=k(t.sections,{key:"key"}),o=k(e.sections,{key:"key"}),a=D.a.apply(void 0,[r].concat(Object(F.a)(o)));a.length>0&&(T.warn("Unexpected sections found:",a),a.forEach(function(e){delete t.sections[e]}));var c=k(t.sections,{key:"key"}),i=k(e.sections,{key:"key"}),l=D.a.apply(void 0,[c].concat(Object(F.a)(i)));return l.length>0&&(T.warn("Unexpected props found:",l),l.forEach(function(e){delete t.sections[e]})),t.sections=x(e.sections,t.sections,{key:"key"}),t.props=x(e.props,t.props,{key:"key"}),function e(n,t){var r=h(n,t);return m()(r)?y(r,function(r){return e(m()(n)?n[r]:void 0,m()(t)?t[r]:void 0)}):void 0!==t?t:n}(e,t)}catch(u){T.error("Parsing model failed"),T.error(u)}return e}var $=R()(function(e){localStorage.setItem(e.localStorageKey,H(e)),localStorage.setItem("isInited","true")},250);var _=function(e){var n=function(e){var n=e.model;if(!m()(n))throw new Error("Model must be provided: useMarkdownSync({ model })");var t,r=n,o=function(e){r=e,$(e),t&&t(e)},a={loadFromFile:function(e){return new Promise(function(n,t){var r=new FileReader;r.onload=function(e){a.loadMarkdown(e.target.result),n()},r.onerror=t,r.readAsText(e)})},loadFromLocalStorage:function(){a.loadMarkdown(localStorage.getItem(n.localStorageKey))},loadMarkdown:function(e){e&&o(Y(n,e))},saveAs:function(){var e=new Blob([H(r)],{type:"text/plain;charset=utf-8"}),n="ethics canvas - ".concat(r.header.value.substr(0,20).replace(/[^a-zA-Z0-9]+/g," "),".txt");z.a.saveAs(e,n)},reset:function(){o(n)},setOnChange:function(e){t=e},removeOnChange:function(){t=null},get SECTION_KEYS(){return k(n.sections,"key")},get sections(){return r.sections},getSectionIndex:function(e){return C()(a.sections,["key",e])},getSection:function(e){return a.sections[a.getSectionIndex(e)]},updateSection:function(e,t){if(!m()(t))throw new Error("Invalid arguments for markdownSyncApi.updateSection(key: string, sectionUpdate: object)");var i=a.getSectionIndex(e);if(-1===i)throw new Error('Section with key "'.concat(e,'" not available in model'),n);var l=r.sections[i],u=Array.from(r.sections);u[i]=Object(c.a)({},l,t),o(Object(c.a)({},r,{sections:u}))},get header(){return r.header},updateHeader:function(e){if(!m()(e))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(headerUpdate: object)");o(Object(c.a)({},r,{header:Object(c.a)({},r.header,e)}))},get PROP_KEYS(){return k(n.props,"key")},get props(){return r.props},getPropertyIndex:function(e){return C()(a.props,["key",e])},getProperty:function(e){return a.props[a.getPropertyIndex(e)]},updateProperty:function(e,t){if(!m()(t))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(key: string, propertyUpdate: object)");var i=a.getPropertyIndex(e);if(-1===i)throw new Error('Property with key "'.concat(e,'" not available in model'),n);var l=r.props[i],u=Array.from(r.props);u[i]=Object(c.a)({},l,t),o(Object(c.a)({},r,{props:u}))}};return a}({model:e});return n.loadFromLocalStorage(),n};var G=t(1),J=t(64),Q=t(378),X=t(389),Z=function(e){return J.EditorState.createWithContent(Object(Q.stateFromMarkdown)(e))},ee=function(e,n){return J.EditorState.push(e,Object(Q.stateFromMarkdown)(n))},ne=function(e){return Object(X.stateToMarkdown)(e.getCurrentContent(),{gfm:!0})},te=function(e,n){return J.RichUtils.toggleInlineStyle(e,n)},re=function(e,n,t){var r=oe(e);if(ae(r,n)&&!ce(r,t))return ie(e,t);var o=J.RichUtils.toggleBlockType(e,n);return ie(o,t)},oe=function(e){return e.getCurrentContent().getBlockForKey(e.getSelection().getStartKey())},ae=function(e,n){return e.getType()===n},ce=function(e,n){var t=e.getData(),r=Object.keys(n);return t.size===r.length&&!r.find(function(e){return n[e]!==t.get(e)})},ie=function(e,n){var t=J.Modifier.setBlockData(e.getCurrentContent(),e.getSelection(),n);return J.EditorState.push(e,t,"change-block-data")},le=t(4),ue=function(){return Boolean(document.fullscreenElement||document.webkitCurrentFullScreenElement)},se=function(){ue()?document.exitFullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozExitFullscreen?document.mozExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT||{})}()};var de=t(5);function fe(){var e=Object(i.a)(["\n  color: #999999;\n  display: inline-block;\n\n  ","\n"]);return fe=function(){return e},e}function pe(){var e=Object(i.a)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  line-height: inherit;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: #DDDDDD;\n    outline: none;\n  }\n\n  ","\n"]);return pe=function(){return e},e}function ve(){var e=Object(i.a)(["\n  display: block;\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n"]);return ve=function(){return e},e}function me(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 0 0.5em;\n  text-align: right;\n\n  @media print {\n    display: none;\n  }\n  className: 'menu-container';\n"]);return me=function(){return e},e}var be="\n  margin-top: -0.5em;\n  margin-right: 1px;\n  padding: 0.5em 1em;\n  position: relative;\n  &:last-child {\n    margin-right: -0.5em;\n  }\n\n  &:not(:last-child)::after {\n    background: currentColor;\n    bottom: 0.6em;\n    content: '';\n    position: absolute;\n    right: -1px;\n    top: 0.6em;\n    width: 1px;\n  }\n",ge=G.c.div(me(),function(e){return e.theme.pageBackground}),he=G.c.form(ve()),ye=G.c.button(pe(),be),Oe=G.c.span(fe(),be);var je=function(e){var n=e.loadFromFile,t=e.onReset,a=e.onSaveAs,c=e.setIsPrintingTemplate,i=Object(r.a)(e,["loadFromFile","onReset","onSaveAs","setIsPrintingTemplate"]),s=Object(l.useRef)(),d=Object(l.useRef)(),f=Object(l.useCallback)(function(){window.confirm("Are you sure to reject all your changes?")&&t()},[t]),p=Object(l.useCallback)(function(){Object(de.b)("/")},[]),v=Object(l.useCallback)(function(){c(!0),setTimeout(function(){window.print()},50)},[c]),m=function(){var e=Object(l.useState)(ue()),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(l.useEffect)(function(){var e=function(){return r(ue())};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),function(){document.removeEventListener("fullscreenchange",e)}},[r]),{isFullscreen:t,isFullscreenSupported:le.c.fullscreen,toggleFullscreen:se}}(),b=m.isFullscreen,g=m.isFullscreenSupported,h=m.toggleFullscreen;return u.a.createElement(ge,i,le.b.isIos&&!le.a.isStandalone&&u.a.createElement(Oe,null,'Install this webapp: Tap share button and "Add to Home Screen"'),!le.b.isIos&&g&&u.a.createElement(ye,{onClick:h},b?"Sair da tela cheia":"Tela cheia"),u.a.createElement(ye,{onClick:a},"Exportar"),u.a.createElement(ye,{onClick:function(){return d.current.click()}},"Importar",u.a.createElement(he,{ref:s},u.a.createElement("input",{accept:"text/plain, text/markdown","aria-hidden":!0,tabIndex:"-1",type:"file",onChange:function(e){var t=e.target;n(t.files[0]),s.current.reset()},ref:d}))),u.a.createElement(ye,{onClick:f},"Criar novo"),u.a.createElement(ye,{onClick:window.print},"Imprimir"),u.a.createElement(ye,{onClick:v},"Imprimir Template"),u.a.createElement(ye,{"aria-label":"Help",onClick:p},"?"))};function Ee(){var e=Object(i.a)(["\n  border-left-style: solid;\n  bottom: ",";\n  left: 0;\n  top: ",";\n"]);return Ee=function(){return e},e}function we(){var e=Object(i.a)(["\n  border-bottom-style: solid;\n  bottom: 0;\n  left: ",";\n  right: ",";\n"]);return we=function(){return e},e}function ke(){var e=Object(i.a)(["\n  border-right-style: solid;\n  bottom: ",";\n  right: 0;\n  top: ",";\n"]);return ke=function(){return e},e}function xe(){var e=Object(i.a)(["\n  border-top-style: solid;\n  left: ",";\n  right: ",";\n  top: 0;\n"]);return xe=function(){return e},e}function Se(){var e=Object(i.a)(["\n  position: absolute;\n  border-color: ",";\n  border-style: none;\n  border-width: 1px;\n\n  @media print {\n    border-width: 2px;\n  }\n"]);return Se=function(){return e},e}var Ce=G.c.div(Se(),function(e){return e.theme.borderColor}),Pe=Object(G.c)(Ce)(xe(),"0.75em","0.75em"),Re=Object(G.c)(Ce)(ke(),"0.75em","0.75em"),Ie=Object(G.c)(Ce)(we(),"0.75em","0.75em"),ze=Object(G.c)(Ce)(Ee(),"0.75em","0.75em");var He=function(e){var n=e.top,t=e.right,r=e.bottom,o=e.left;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(Pe,null),t&&u.a.createElement(Re,null),r&&u.a.createElement(Ie,null),o&&u.a.createElement(ze,null))},Fe=t(391),Te=t.n(Fe),Ae=[],De=function(e,n){Ae.push({isFocusWithin:!1,ref:e,setIsFocusWithin:n}),1===Object.keys(Ae).length&&(document.body.addEventListener("mousedown",Me),document.body.addEventListener("keydown",Me),document.body.addEventListener("keyup",Me))},Le=function(e){Te()(Ae,function(n){return n.ref===e}),0===Object.keys(Ae).length&&(document.body.removeEventListener("mousedown",Me),document.body.removeEventListener("keydown",Me),document.body.removeEventListener("keyup",Me))},Me=function(e){var n=e.target;Ae=Ae.map(function(e){var t=e.ref.current;if(!t)return e;var r=t.contains(n);return e.isFocusWithin===r?e:(e.setIsFocusWithin(r),Object(c.a)({},e,{isFocusWithin:r}))})};function Be(){return(Be=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function qe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ve=u.a.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),Ke=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ue=function(e){var n=e.svgRef,t=qe(e,["svgRef"]);return u.a.createElement("svg",Be({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Ve,Ke)},Ne=u.a.forwardRef(function(e,n){return u.a.createElement(Ue,Be({svgRef:n},e))});t.p;function We(){return(We=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ye(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var $e=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),_e=u.a.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),Ge=function(e){var n=e.svgRef,t=Ye(e,["svgRef"]);return u.a.createElement("svg",We({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),$e,_e)},Je=u.a.forwardRef(function(e,n){return u.a.createElement(Ge,We({svgRef:n},e))});t.p;function Qe(){return(Qe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Xe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ze=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),en=u.a.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}),nn=function(e){var n=e.svgRef,t=Xe(e,["svgRef"]);return u.a.createElement("svg",Qe({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Ze,en)},tn=u.a.forwardRef(function(e,n){return u.a.createElement(nn,Qe({svgRef:n},e))});t.p;function rn(){return(rn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function on(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var an=u.a.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),cn=u.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),ln=function(e){var n=e.svgRef,t=on(e,["svgRef"]);return u.a.createElement("svg",rn({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),an,cn)},un=u.a.forwardRef(function(e,n){return u.a.createElement(ln,rn({svgRef:n},e))});t.p;function sn(){return(sn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function dn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var fn=u.a.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),pn=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),vn=function(e){var n=e.svgRef,t=dn(e,["svgRef"]);return u.a.createElement("svg",sn({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),fn,pn)},mn=u.a.forwardRef(function(e,n){return u.a.createElement(vn,sn({svgRef:n},e))});t.p;function bn(){return(bn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function gn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var hn=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),yn=u.a.createElement("path",{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}),On=function(e){var n=e.svgRef,t=gn(e,["svgRef"]);return u.a.createElement("svg",bn({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),hn,yn)},jn=u.a.forwardRef(function(e,n){return u.a.createElement(On,bn({svgRef:n},e))});t.p;function En(){return(En=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function wn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var kn=u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),xn=u.a.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}),Sn=function(e){var n=e.svgRef,t=wn(e,["svgRef"]);return u.a.createElement("svg",En({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),kn,xn)},Cn=u.a.forwardRef(function(e,n){return u.a.createElement(Sn,En({svgRef:n},e))});t.p;function Pn(){return(Pn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Rn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var In=u.a.createElement("path",{d:"M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"}),zn=u.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Hn=function(e){var n=e.svgRef,t=Rn(e,["svgRef"]);return u.a.createElement("svg",Pn({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),In,zn)},Fn=u.a.forwardRef(function(e,n){return u.a.createElement(Hn,Pn({svgRef:n},e))}),Tn=(t.p,[{label:"Bold",type:"BOLD",icon:u.a.createElement(Ne,null)},{label:"Italic",type:"ITALIC",icon:u.a.createElement(tn,null)},{label:"Underline",type:"UNDERLINE",icon:u.a.createElement(Cn,null)},{label:"Strikethrough",type:"STRIKETHROUGH",icon:u.a.createElement(jn,null)}]),An=[{label:"Header",type:"header-three",icon:u.a.createElement(Je,null)},{label:"UL",type:"unordered-list-item",icon:u.a.createElement(un,null)},{label:"OL",type:"ordered-list-item",icon:u.a.createElement(mn,null)}];function Dn(e){var n=e.color,t=e.label,r=e.key;return{color:n,data:{language:void 0===r?t:r},icon:u.a.createElement(Fn,null),label:t,type:"code-block"}}function Ln(){var e=Object(i.a)(["\n  color: ",";\n  background: ",";;\n  border: none;\n  border-radius: 0;\n  cursor: pointer;\n  display: flex;\n  opacity: ",";\n  padding: 0.25em;\n\n  &:hover, &:focus {\n    background: #DDDDDD;\n  }\n  &:first-child {\n    padding-left: 0.4em;\n    border-top-left-radius: 0.75em;\n    border-bottom-left-radius: 0.75em;\n  }\n  &:last-child {\n    padding-left: 0.4em;\n    border-top-right-radius: 0.75em;\n    border-bottom-right-radius: 0.75em;\n  }\n"]);return Ln=function(){return e},e}var Mn=G.c.button(Ln(),function(e){return e.color||"inherit"},function(e){return e["aria-pressed"]?"#DDDDDD":"transparent"},function(e){return e["aria-pressed"]?1:.5});var Bn=function(e){var n=e.color,t=e.icon,o=e.isActive,a=e.label,c=e.onToggle,i=e.type,l=e.data,s=Object(r.a)(e,["color","icon","isActive","label","onToggle","type","data"]),d=function(e){e.preventDefault(),c(i,l)};return u.a.createElement(Mn,Object.assign({"aria-label":a,"aria-pressed":o,color:n,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||d(e)},onMouseDown:d,tabIndex:"0"},s),t||a)};function qn(){var e=Object(i.a)(["\n  background: #EEEEEE;\n  border-radius: 0.75em;\n  display: flex;\n  margin-right: 0.5em;\n  margin-top: 0.25em;\n"]);return qn=function(){return e},e}var Vn=G.c.div(qn());var Kn=function(e){var n=e.controlTypes,t=e.getIsActive,r=e.onToggle;return u.a.createElement(Vn,null,n.map(function(e){return u.a.createElement(Bn,Object.assign({isActive:t(e),key:e.label,onToggle:r},e))}))};function Un(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: ",";\n  overflow: hidden;\n  z-index: 2;\n\n  @media print {\n    display: none;\n  }\n"]);return Un=function(){return e},e}var Nn=G.c.div(Un(),function(e){return e.isVisible?void 0:0});var Wn=function(e){var n=e.cardControlTypes,t=e.editorState,o=e.isVisible,a=e.onChange,c=Object(r.a)(e,["cardControlTypes","editorState","isVisible","onChange"]),i=Object(l.useCallback)(function(e){var n=te(t,e);a(n)},[a,t]),s=Object(l.useCallback)(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=re(t,e,n);a(r)},[a,t]),d=oe(t),f=Object(l.useCallback)(function(e){return ae(d,e.type)&&ce(d,e.data||{})},[d]),p=t.getCurrentInlineStyle(),v=Object(l.useCallback)(function(e){return p.has(e.type)},[p]);return u.a.createElement(Nn,Object.assign({isVisible:o},c),u.a.createElement(Kn,{controlTypes:Tn,editorState:t,getIsActive:v,onToggle:i}),u.a.createElement(Kn,{controlTypes:An,editorState:t,getIsActive:f,onToggle:s}),n.length>0&&u.a.createElement(Kn,{controlTypes:n,editorState:t,getIsActive:f,onToggle:s}))},Yn=t(147),$n=t.n(Yn);function _n(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 0.5em;\n"]);return _n=function(){return e},e}var Gn=G.c.section(_n(),function(e){return e.color||"#EEEEEE"});var Jn=function(e){var n=e.blockProps,t=Object(r.a)(e,["blockProps"]);return u.a.createElement(Gn,{color:n.color},u.a.createElement(J.EditorBlock,t))},Qn=$n()(function(e){return function(n){if("code-block"===n.getType()){var t=n.getData(),r=e.find(function(e){return t.get("language")===e.key});return{component:Jn,editable:!0,props:{color:r&&r.color}}}return null}});t(397);function Xn(){var e=Object(i.a)(["\n  .DraftEditor-root {\n    flex: 1;\n  }\n  .public-DraftEditorPlaceholder-root {\n    max-height: 100%;\n    overflow: hidden;\n    @media print {\n      display: "," !important;\n      color: #666;\n      font-style: italic;\n    }\n  }\n"]);return Xn=function(){return e},e}function Zn(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Zn=function(){return e},e}var et=G.c.div(Zn()),nt=Object(G.b)(Xn(),function(e){return e.isPrintingTemplate?"block":"none"});function tt(e){var n=e.cardStyles,t=e.editorState,a=e.onChange,c=e.placeholder,i=e.isPrintingTemplate,s=e.readOnly,d=Object(r.a)(e,["cardStyles","editorState","onChange","placeholder","isPrintingTemplate","readOnly"]),f=Object(l.useRef)(null),p=Object(l.useRef)(null),v=function(e){var n=Object(l.useState)(!1),t=Object(o.a)(n,2),r=t[0],a=t[1];return Object(l.useEffect)(function(){return De(e,a),function(){Le(e)}},[e]),r}(p),m=Object(l.useMemo)(function(){return Qn(n)},[n]),b=Object(l.useCallback)(function(e){i||a(e)},[a,i]),g=Object(l.useCallback)(function(e,n){if(i)return"handled";var t=J.RichUtils.handleKeyCommand(n,e);return t?(a(t),"handled"):"not-handled"},[a,i]),h=Object(l.useCallback)(function(e){return i?"handled":e.shiftKey?(a(J.RichUtils.insertSoftNewline(t)),"handled"):"not-handled"},[a,t,i]);return u.a.createElement(et,Object.assign({onClick:function(){f.current.focus()},ref:p},d),u.a.createElement(nt,{isPrintingTemplate:i}),u.a.createElement(J.Editor,{blockRendererFn:m,editorState:t,handleKeyCommand:g,handleReturn:h,onChange:b,placeholder:c,readOnly:s||i,ref:f}),!i&&u.a.createElement(Wn,{cardControlTypes:n&&n.map(Dn),editorState:t,isVisible:v,onChange:b}))}tt.defaultProps={cardStyles:[{label:"Card",data:{}},{label:"Card OK",color:"green",key:"ok"},{label:"Card Warn",color:"orange",key:"warn"},{label:"Card Not OK",color:"red",key:"not ok"}],isPrintingTemplate:!1,readOnly:!1};var rt=tt;function ot(){var e=Object(i.a)(['\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding: 0;\n  font-size: 14px;\n  color: #666;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n\n  &:hover::after {\n    content: "','";\n    position: absolute;\n    top: calc(100% + 5px);\n    left: ',";\n    transform: translateX(-45%);\n    padding: 8px 12px;\n    background: #333;\n    color: white;\n    font-size: 12px;\n    border-radius: 4px;\n    white-space: pre-wrap;\n    z-index: 1000;\n    width: 280px; /* Largura fixa para o tooltip */\n    text-align: left;\n    line-height: 1.4;\n    max-width: 90vw;\n  }\n"]);return ot=function(){return e},e}function at(){var e=Object(i.a)(["\n  flex: 1;\n\n    ","\n"]);return at=function(){return e},e}function ct(){var e=Object(i.a)(["\n  font-size: 1.3em;\n  margin: 0 0 0.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n"]);return ct=function(){return e},e}function it(){var e=Object(i.a)(["\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  padding: 0.75rem;\n  position: relative;\n  className: 'area-box';\n"]);return it=function(){return e},e}var lt=G.c.article(it()),ut=G.c.h2(ct()),st=Object(G.c)(rt)(at(),function(e){return e.isPrintingTemplate&&"\n    &::placeholder {\n      color: #666;\n      font-style: italic;\n    }\n  "}),dt=G.c.button(ot(),function(e){return e.tooltip.replace(/\n/g,"\\A ")},function(e){return e.tooltipPosition});function ft(e){var n=e.border,t=(e.content,e.editorState),a=e.header,c=e.onChange,i=e.placeholder,s=e.isPrintingTemplate,d=Object(r.a)(e,["border","content","editorState","header","onChange","placeholder","isPrintingTemplate"]),f=Object(l.useRef)(null),p=Object(l.useState)("0px"),v=Object(o.a)(p,2),m=v[0],b=v[1];return Object(l.useEffect)(function(){var e=function(){if(f.current){var e=f.current.getBoundingClientRect(),n=window.innerWidth;e.right+280>n?b("-150px"):b("150px")}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),u.a.createElement(lt,d,u.a.createElement(ut,null,a,!s&&i&&u.a.createElement(dt,{ref:f,type:"button",tooltip:i,"aria-label":"Ajuda",tooltipPosition:m},"?")),u.a.createElement(st,{editorState:s?Z(i):t,onChange:function(e){c({content:ne(e),editorState:e})},readOnly:s,placeholder:i,isPrintingTemplate:s}),u.a.createElement(He,n))}ft.defaultProps={border:[!1,!1,!1,!1]};var pt=ft;function vt(){var e=Object(i.a)(["\n  flex: 1;\n"]);return vt=function(){return e},e}function mt(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  text-align: right;\n  width: 20em;\n"]);return mt=function(){return e},e}function bt(){var e=Object(i.a)(["\n"]);return bt=function(){return e},e}function gt(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  width: 100%;\n"]);return gt=function(){return e},e}function ht(){var e=Object(i.a)(["\n  margin: 0;\n  flex: 1;\n"]);return ht=function(){return e},e}function yt(){var e=Object(i.a)(["\n  margin: 0.75em 0.75em 0 0.75em;\n  display: flex;\n"]);return yt=function(){return e},e}function Ot(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ot=function(){return e},e}var jt=G.c.div(Ot()),Et=G.c.div(yt()),wt=G.c.h1(ht()),kt=G.c.input(gt()),xt=G.c.div(bt()),St=G.c.input(mt()),Ct=Object(G.c)(pt)(vt());var Pt=function(e){var n=e.getProperty,t=(e.gridArea,e.header),o=e.onHeaderChange,a=e.onPropertyChange,c=e.sectionProps,i=Object(r.a)(e,["getProperty","gridArea","header","onHeaderChange","onPropertyChange","sectionProps"]),s=Object(l.useCallback)(function(e){var n=e.target;o({value:n.value})},[o]),d=Object(l.useCallback)(function(e){var n=e.target;a("date",{value:n.value})},[a]),f=Object(l.useCallback)(function(e){var n=e.target;a("name",{value:n.value})},[a]);return u.a.createElement(jt,i,u.a.createElement(Et,null,u.a.createElement(wt,null,u.a.createElement(kt,Object.assign({"aria-label":"Your Business",onChange:s,placeholder:"Your Business"},t))),u.a.createElement(xt,null,u.a.createElement(St,Object.assign({onChange:d},n("date"))),u.a.createElement(St,Object.assign({onChange:f},n("name"))))),u.a.createElement(Ct,c))},Rt={header:{value:"",placeholder:"Seu Canvas \xc9tico"},localStorageKey:"ethicsCanvas",props:[{key:"date",placeholder:"Date",value:(new Date).toLocaleDateString()},{key:"name",placeholder:"Seu nome",value:""}],sections:[{key:"purpose",border:{bottom:!0,right:!0,left:!0},content:"",header:"Prop\xf3sito",isHeader:!0,placeholder:"\u2022 Comece definindo claramente qual \xe9 o prop\xf3sito da tecnologia ou produto que voc\xea est\xe1 desenvolvendo.\n\u2022 Qual \xe9 o problema que voc\xea pretende resolver?\n\u2022 Como sua solu\xe7\xe3o ir\xe1 ajudar as pessoas?"},{key:"governance-accountability",border:{right:!0,left:!0},content:"",header:"Governan\xe7a e Responsabilidade",placeholder:"\u2022 Pense em como garantir que sua solu\xe7\xe3o seja governada de forma respons\xe1vel.\n\u2022 Como voc\xea pode garantir que sua tecnologia seja desenvolvida e mantida de maneira \xe9tica e respons\xe1vel?"},{key:"privacy-security",border:{right:!0,left:!0},content:"",header:"Privacidade e Seguran\xe7a",placeholder:"\u2022 Pense em como garantir que sua solu\xe7\xe3o proteja a privacidade e a seguran\xe7a dos usu\xe1rios. Considere as poss\xedveis amea\xe7as \xe0 seguran\xe7a de dados e informa\xe7\xf5es pessoais dos usu\xe1rios e como voc\xea pode garantir que eles estejam seguros.\n\u2022 Como voc\xea pode garantir que as informa\xe7\xf5es sejam claras e precisas?\n\u2022 Como os usu\xe1rios podem ter controle sobre seus dados?"},{key:"social-impact",border:{top:!0},content:"",header:"Impacto Social",placeholder:"\u2022 Pense no impacto social que sua solu\xe7\xe3o pode ter.\n\u2022 Considere como sua tecnologia pode afetar a sociedade em geral e como voc\xea pode garantir que essa influ\xeancia seja positiva."},{key:"transparency-accountability",border:{},content:"",header:"Transpar\xeancia e Responsabilidade",placeholder:"\u2022 Pense em como sua solu\xe7\xe3o pode ser transparente e respons\xe1vel em rela\xe7\xe3o aos usu\xe1rios.\n\u2022 Como voc\xea pode garantir que sua solu\xe7\xe3o seja desenvolvida e mantida de maneira \xe9tica e respons\xe1vel?"},{key:"accessibility-inclusion",border:{top:!0,left:!0},content:"",header:"Acessibilidade e Inclus\xe3o",placeholder:"\u2022 Pense em como sua tecnologia pode ser acess\xedvel e inclusiva para todas as pessoas.\n\u2022 Considere as diferentes necessidades e habilidades que seu p\xfablico pode ter e como voc\xea pode garantir que sua solu\xe7\xe3o seja acess\xedvel a todos."},{key:"education-engagement",border:{left:!0},content:"",header:"Educa\xe7\xe3o e Engajamento",placeholder:"\u2022 Considere como voc\xea pode educar e engajar as pessoas sobre o produto ou tecnologia que est\xe1 desenvolvendo.\n\u2022 Como voc\xea pode comunicar seus valores e prop\xf3sito de forma clara e acess\xedvel para o p\xfablico?"},{key:"comments-observations",border:{top:!0,right:!0,left:!0},content:"",header:"Observa\xe7\xf5es e Coment\xe1rios",placeholder:""}]},It=function(){var e=Object(l.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(l.useEffect)(function(){var e=!1;console.log(t);var n=function(){t&&!e&&(e=!0,document.body.classList.add("printing-template"))},o=function(){e&&(document.body.classList.remove("printing-template"),e=!1,setTimeout(function(){r(!1)},0))};return window.addEventListener("beforeprint",n),window.addEventListener("afterprint",o),function(){window.removeEventListener("beforeprint",n),window.removeEventListener("afterprint",o)}},[t]),[t,r]};function zt(){var e=Object(i.a)(["\n  grid-area: menu;\n"]);return zt=function(){return e},e}function Ht(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return Ht=function(){return e},e}function Ft(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return Ft=function(){return e},e}function Tt(){var e=Object(i.a)(["\n  background-color: ",";\n  border-color: ",';\n  border-style: solid;\n  border-width: 0.5em;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto 1fr 1fr 1fr 0.75fr;\n  grid-template-areas:\n    "menu menu menu menu menu menu menu menu menu menu menu menu"\n    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"\n    "education-engagement education-engagement education-engagement privacy-security privacy-security privacy-security transparency-accountability transparency-accountability transparency-accountability governance-accountability governance-accountability governance-accountability"\n    "accessibility-inclusion accessibility-inclusion accessibility-inclusion privacy-security privacy-security privacy-security social-impact social-impact social-impact governance-accountability governance-accountability governance-accountability"\n    "comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations";\n  margin: auto;\n\n  height: 100%;\n  width: 100%;\n  @media screen {\n    min-width: 90em;\n    min-height: 60em;\n  }\n  className: \'grid-container\';\n']);return Tt=function(){return e},e}var At=G.c.div(Tt(),function(e){return e.theme.paperBackground},function(e){return e.theme.pageBackground}),Dt=Object(G.c)(pt)(Ft(),function(e){return e.gridArea}),Lt=Object(G.c)(Pt)(Ht(),function(e){return e.gridArea}),Mt=Object(G.c)(je)(zt()),Bt=function(e){return e.reduce(function(e,n){return Object(c.a)({},e,Object(a.a)({},n.key,Z(n.content)))},{})};n.default=function(){var e=function(e){var n=e.model,t=Object(l.useState)(function(){return _(n)}),r=Object(o.a)(t,1)[0],a=Object(l.useState)(),c=Object(o.a)(a,2)[1];return Object(l.useEffect)(function(){return r.setOnChange(c),function(){r.removeOnChange()}},[r]),r}({model:Rt}),n=It(),t=Object(o.a)(n,2),i=t[0],s=t[1],d=Object(l.useState)(function(){return Bt(e.sections)}),f=Object(o.a)(d,2),p=f[0],v=f[1],m=function(){var n=y(p,function(n,t){return ee(t,e.getSection(n).content)});v(n)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(At,null,u.a.createElement(Mt,{loadFromFile:function(n){e.loadFromFile(n).then(m)},onReset:function(){e.reset(),m()},onSaveAs:e.saveAs,setIsPrintingTemplate:s}),e.sections.map(function(n){var t=n.isHeader,o=n.key,l=Object(r.a)(n,["isHeader","key"]),s=Object(c.a)({editorState:p[o],isPrintingTemplate:i,onChange:function(n){var t=n.content,r=n.editorState;i||(e.updateSection(o,{content:t}),function(e,n){var t=Object(c.a)({},p,Object(a.a)({},e,n));v(t)}(o,r))}},l);return t?u.a.createElement(Lt,{gridArea:o,header:e.header,key:o,onHeaderChange:e.updateHeader,onPropertyChange:e.updateProperty,getProperty:e.getProperty,sectionProps:s}):u.a.createElement(Dt,Object.assign({gridArea:o,key:o,isPrintingTemplate:i},s))})))}}}]);
//# sourceMappingURL=4.770ab7ef.chunk.js.map