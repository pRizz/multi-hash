(this["webpackJsonpmulti-hash"]=this["webpackJsonpmulti-hash"]||[]).push([[0],{43:function(e,t,n){},48:function(e,t,n){"use strict";(function(e){var a=n(11),r=n(7),o=n(0),i=n.n(o),l=(n(43),n(93)),c=n(94),u=n(62),s=n(39),m=n(14),h=n(90),f=n(91),p=n(31),g=n(92),d=n(97),b=n(61),E=n(32),v=n(37),y=n(57),w=n.n(y),k=n(58),F=n.n(k),O=n(56),S=n.n(O),j=n(54),x=n.n(j),A=n(55),C=n.n(A),N=n(59),T=n.n(N),H=n(49),B=n(51),L=n(52),M=n.n(L),I=n(60),P=Object(s.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(r.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(r.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(r.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(r.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function R(e){var t=e.onFilterValueChange,n=P(),r=i.a.useState(null),o=Object(a.a)(r,2),l=o[0],c=o[1],u=i.a.useState(null),s=Object(a.a)(u,2),m=s[0],y=s[1],k=Boolean(l),O=Boolean(m),j=function(){y(null)},A=function(){c(null),j()},N=i.a.createElement(v.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:A},i.a.createElement(E.a,{onClick:A},"Profile"),i.a.createElement(E.a,{onClick:A},"My account")),H=i.a.createElement(v.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:j},i.a.createElement(E.a,null,i.a.createElement(p.a,{"aria-label":"show 4 new mails",color:"inherit"},i.a.createElement(b.a,{badgeContent:4,color:"secondary"},i.a.createElement(x.a,null))),i.a.createElement("p",null,"Messages")),i.a.createElement(E.a,null,i.a.createElement(p.a,{"aria-label":"show 11 new notifications",color:"inherit"},i.a.createElement(b.a,{badgeContent:11,color:"secondary"},i.a.createElement(C.a,null))),i.a.createElement("p",null,"Notifications")),i.a.createElement(E.a,{onClick:function(e){c(e.currentTarget)}},i.a.createElement(p.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},i.a.createElement(S.a,null)),i.a.createElement("p",null,"Profile")));return i.a.createElement("div",{className:n.grow},i.a.createElement(h.a,{position:"static"},i.a.createElement(f.a,null,i.a.createElement(p.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer"},i.a.createElement(w.a,null)),i.a.createElement(g.a,{className:n.title,variant:"h6",noWrap:!0},"Multi Hash"),i.a.createElement("div",{className:n.search},i.a.createElement("div",{className:n.searchIcon},i.a.createElement(F.a,null)),i.a.createElement(d.a,{placeholder:"Filter (sha, blake, etc.)",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"filter-list"},onChange:function(e){t(e.target.value)}})),i.a.createElement("div",{className:n.grow}),i.a.createElement("div",{className:n.sectionMobile},i.a.createElement(p.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit"},i.a.createElement(T.a,null))))),H,N)}var D=[[8,"Y"],[7,"Z"],[6,"E"],[5,"P"],[4,"T"],[3,"G"],[2,"M"],[1,"k"]].map((function(e){return{minValue:Math.pow(1e3,e[0]),prefix:e[1]}}));function V(e){var t=!0,n=!1,a=void 0;try{for(var r,o=D[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;if(e>=i.minValue)return"".concat((e/i.minValue).toLocaleString(void 0,{maximumFractionDigits:3})," ").concat(i.prefix,"B")}}catch(l){n=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}return"".concat(e," bytes")}function W(e){for(var t=[],n=new DataView(e),a=0;a<n.byteLength;a+=4){var r=("00000000"+n.getUint32(a).toString(16)).slice(-"00000000".length);t.push(r)}return t.join("")}var z=[{hashingFunctionName:"SHA-1",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-1",e).then((function(e){return W(e)}))}},{hashingFunctionName:"SHA-256",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-256",e).then((function(e){return W(e)}))}},{hashingFunctionName:"SHA-384",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-384",e).then((function(e){return W(e)}))}},{hashingFunctionName:"SHA-512",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-512",e).then((function(e){return W(e)}))}},{hashingFunctionName:"blake2b",hashingFunctionAsync:function(e){return new Promise((function(t){t(Object(B.blake2bHex)(e,null,64))}))}},{hashingFunctionName:"md5",hashingFunctionAsync:function(e){return new Promise((function(t){t(M()(e))}))}}];function G(e){var t=e.bufferToHash,n=e.filterText;return z.filter((function(e){return!n||e.hashingFunctionName.toLowerCase().includes(n.toLowerCase())})).map((function(e){return i.a.createElement(H.a,Object.assign({key:e.hashingFunctionName,bufferToHash:t},e))}))}t.a=function(){var t=i.a.useState(""),n=Object(a.a)(t,2),r=n[0],o=n[1],s=i.a.useState(e.alloc(0)),m=Object(a.a)(s,2),h=m[0],f=m[1],p=i.a.useState(V(0)),g=Object(a.a)(p,2),d=g[0],b=g[1],E=i.a.useState(""),v=Object(a.a)(E,2),y=v[0],w=v[1],k=i.a.useState(""),F=Object(a.a)(k,2),O=F[0],S=F[1];return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,null),i.a.createElement(R,{onFilterValueChange:function(e){w(e)}}),i.a.createElement(c.a,{maxWidth:"md"},i.a.createElement("br",null),i.a.createElement(u.a,{id:"outlined-multiline-static",label:"Text To Hash",multiline:!0,rows:"4",value:r,onChange:function(t){var n=t.target.value;o(n),f(function(t){return e.from((new TextEncoder).encode(t))}(n)),b(V(function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var a=e.charCodeAt(n);a>127&&a<=2047?t++:a>2047&&a<=65535&&(t+=2)}return t}(n)))},variant:"outlined",helperText:d,fullWidth:!0}),i.a.createElement("h2",null,"Or"),i.a.createElement("h2",null,"File Input"),i.a.createElement(I.a,{onDrop:function(t){t.forEach((function(t){var n=new FileReader;n.onload=function(){var t;t=n.result,console.log("handleFileChange"),console.log(t),console.log(t.byteLength),f(e.from(t)),S(V(t.byteLength))},n.readAsArrayBuffer(t)}))}},(function(e){var t=e.getRootProps,n=e.getInputProps;return i.a.createElement("section",{style:{padding:40,border:"dashed gray"}},i.a.createElement("div",t(),i.a.createElement("input",n()),i.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))})),i.a.createElement("div",null,O),i.a.createElement(G,{bufferToHash:h,filterText:y})))}}).call(this,n(42).Buffer)},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(11),r=n(0),o=n.n(r),i=(n(43),n(62));function l(e){var t=e.bufferToHash,n=e.hashingFunctionAsync,r=e.hashingFunctionName,l=o.a.useState(""),c=Object(a.a)(l,2),u=c[0],s=c[1],m=o.a.useState(null),h=Object(a.a)(m,2),f=h[0],p=h[1],g=o.a.useState(""),d=Object(a.a)(g,2),b=d[0],E=d[1];if(console.log("bufferToHash"),console.log(t),null===f||f.length!==t.length){p(t);var v=performance.now();n(t).then((function(e){var n=function(e,t){var n=e.toLocaleString(void 0,{maximumFractionDigits:3}),a=(e/t*1e6).toLocaleString(void 0,{maximumFractionDigits:3});return"Took ".concat(n," ms; ").concat(a," ns/byte")}(performance.now()-v,t.length);s(e),E(n),console.log("".concat(r,": ").concat(e))}))}return o.a.createElement("div",{key:r,style:{marginTop:"2em",marginBottom:"2em"}},o.a.createElement(i.a,{id:"outlined-multiline-static",label:r,multiline:!0,rows:"4",value:u,variant:"outlined",helperText:b,fullWidth:!0}))}},70:function(e,t,n){e.exports=n(88)},75:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(75),n(48));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.ad9cd823.chunk.js.map