!function(e){function t(t){for(var a,o,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={2:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({}[e]||e)+".bundle.js"}(e);var i=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="bundles/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;s.push([208,3]),r()}({208:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(17),o=r.n(s),c=r(10),i=r(99),l=r(228),u=r(226),d=r(51),p=r(74),h=r(12);class m extends a.PureComponent{constructor(e){super(e),this.state={}}render(){const{classes:e}=this.props;return n.a.createElement("div",{className:e.root},"Loading...")}}var f=Object(h.a)(e=>({root:{height:"100vh",textAlign:"center",lineHeight:"100vh",fontSize:"32px"}}))(m),b=r(69),g=r(101),y=r(93),v=r(56),E=r(92),O=r(95),j=r.n(O);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const w=Object(a.lazy)(()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,348))),P=Object(a.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,361))),T=Object(a.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(4),r.e(6)]).then(r.bind(null,364)));class _ extends a.Component{constructor(e){super(e),this.state={theme:Object(d.a)({})};this.sagaMiddleware=Object(E.a)(),this.store=Object(g.a)({reducer:y.a,preloadedState:{settings:{},party:{},dj:{songs:{songName:"",songList:[],searchResults:[]}},form:{}},middleware:[this.sagaMiddleware]}),j.a.getItem("settings").then(e=>{let t={};e&&(t=Object.assign({},JSON.parse(e)),t.currentPlayer=0,t.largescreen=!1,t.fullscreen=!1,t.mobileMode=!1,t.hideChat=!1,t.hideNav=!1),this.store.dispatch(Object(v.a)({...t}))}),this.switchTheme=this.switchTheme.bind(this);let t=null;this.store.subscribe(()=>{let e=t;t=this.store.getState().settings.theme,e!==t&&(console.log("theme changed"),this.switchTheme(t),this.setState({}))})}componentDidMount(){this.store.dispatch(Object(v.a)({theme:"dark"}))}switchTheme(e){let t={};switch(e){case"light":t={palette:{type:"light",primary:{main:"#2181ff"},secondary:{main:"#ff3b3b"},background:{paper:"#fafafa"}}};break;case"dark":t={palette:{type:"dark",primary:{main:"#2181ff"},secondary:{main:"#ff3b3b"},background:{paper:"#424242"}}};break;case"spotify":t={palette:{type:"dark",primary:{main:"#1db954"},secondary:{main:"#121212"},background:{paper:"#424242"}}}}this.setState({theme:Object(d.a)(t)})}shouldComponentUpdate(e,t){return!0}render(){return console.log("re-rendering index"),n.a.createElement(b.a,{store:this.store},n.a.createElement(u.a,{theme:this.state.theme},n.a.createElement(p.SnackbarProvider,{maxSnack:3},n.a.createElement(l.a,null),n.a.createElement(i.a,null,n.a.createElement(a.Suspense,{fallback:n.a.createElement(f,null)},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/party/:roomName?",render:e=>n.a.createElement(T,S({},e,{store:this.store}))}),n.a.createElement(c.a,{path:"/dj/:roomName?",render:e=>n.a.createElement(P,S({},e,{store:this.store}))}),n.a.createElement(c.a,{path:"/",render:e=>n.a.createElement(w,S({},e,{store:this.store,sagaMiddleware:this.sagaMiddleware}))})))))))}}t.default=_;o.a.render(n.a.createElement(_,null),document.getElementById("root"))},56:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a=e=>({type:"UPDATE_SETTINGS",payload:{settings:e}})},93:function(e,t,r){"use strict";var a=r(5),n=r(229);var s=(e={},t)=>{switch(t.type){case"UPDATE_SETTINGS":let r={...t.payload.settings};return Object.keys(r).forEach(e=>void 0===r[e]&&delete r[e]),{...e,...r};default:return e}};var o=(e={},t)=>{switch(t.type){case"UPDATE_SONG_NAME":return{...e,songName:t.payload.songName};case"UPDATE_SONG_LIST":return{...e,songList:t.payload.songList};case"UPDATE_SEARCH_RESULTS":return{...e,searchResults:t.payload.searchResults};default:return e}};var c=Object(a.combineReducers)({songs:o,form:n.a});var i=(e={},t)=>{switch(t.type){case"UPDATE_SONG_NAME":return{...e,songName:t.payload.songName};case"UPDATE_SONG_LIST":return{...e,songList:t.payload.songList};case"UPDATE_SEARCH_RESULTS":return{...e,searchResults:t.payload.searchResults};default:return e}};var l=Object(a.combineReducers)({songs:i,form:n.a});const u=Object(a.combineReducers)({dj:l,party:c,settings:s,form:n.a});t.a=u}});