(this["webpackJsonpmulti-hash"]=this["webpackJsonpmulti-hash"]||[]).push([[0],{38:function(e,t,n){},61:function(e,t,n){e.exports=n(80)},66:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=(n(66),n(12)),l=n(7),u=(n(38),n(126)),s=n(127),m=n(128),h=n(46),p=n(17),g=n(123),d=n(124),f=n(121),b=n(125),E=n(129),v=n(122),w=n(130),y=n(53),k=n(50),O=n.n(k),F=n(51),S=n.n(F),j=n(49),x=n.n(j),C=n(47),N=n.n(C),A=n(48),H=n.n(A),T=n(52),M=n.n(T);function B(e){var t,n=e.textOrValueToHash,a=e.hashingFunctionAsync,i=e.hashingFunctionName,o=r.a.useState(""),l=Object(c.a)(o,2),u=l[0],s=l[1],h=r.a.useState(""),p=Object(c.a)(h,2),g=p[0],d=p[1],f=r.a.useState(""),b=Object(c.a)(f,2),E=b[0],v=b[1],w=(t=n,new TextEncoder("utf-8").encode(t));if(n!==g){d(n);var y=performance.now();a(w).then((function(e){var t=performance.now();v(function(e,t){var n=e.toLocaleString(void 0,{maximumFractionDigits:3}),a=(e/t*1e6).toLocaleString(void 0,{maximumFractionDigits:3});return"Took ".concat(n," ms; ").concat(a," ns/byte")}(t-y,w.length)),s(e)}))}return r.a.createElement("div",{key:i,style:{marginTop:"2em",marginBottom:"2em"}},r.a.createElement(m.a,{id:"outlined-multiline-static",label:i,multiline:!0,rows:"4",value:u,variant:"outlined",helperText:E,fullWidth:!0}))}var L=n(44),V=n(45),I=n.n(V),P=Object(h.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function R(e){var t=e.onFilterValueChange,n=P(),a=r.a.useState(null),i=Object(c.a)(a,2),o=i[0],l=i[1],u=r.a.useState(null),s=Object(c.a)(u,2),m=s[0],h=s[1],p=Boolean(o),k=Boolean(m),F=function(){h(null)},j=function(){l(null),F()},C=r.a.createElement(y.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:j},r.a.createElement(w.a,{onClick:j},"Profile"),r.a.createElement(w.a,{onClick:j},"My account")),A=r.a.createElement(y.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:F},r.a.createElement(w.a,null,r.a.createElement(f.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(v.a,{badgeContent:4,color:"secondary"},r.a.createElement(N.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(w.a,null,r.a.createElement(f.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(v.a,{badgeContent:11,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(w.a,{onClick:function(e){l(e.currentTarget)}},r.a.createElement(f.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(x.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:n.grow},r.a.createElement(g.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(f.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(O.a,null)),r.a.createElement(b.a,{className:n.title,variant:"h6",noWrap:!0},"Multi Hash"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(S.a,null)),r.a.createElement(E.a,{placeholder:"Filter (sha, blake, etc.)",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"filter-list"},onChange:function(e){t(e.target.value)}})),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(f.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},color:"inherit"},r.a.createElement(M.a,null))))),A,C)}var W=[[8,"Y"],[7,"Z"],[6,"E"],[5,"P"],[4,"T"],[3,"G"],[2,"M"],[1,"k"]].map((function(e){return{minValue:Math.pow(1e3,e[0]),prefix:e[1]}}));function D(e){var t=!0,n=!1,a=void 0;try{for(var r,i=W[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;if(e>=o.minValue)return"".concat((e/o.minValue).toLocaleString(void 0,{maximumFractionDigits:3})," ").concat(o.prefix,"B")}}catch(c){n=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}return"".concat(e," bytes")}function z(e){for(var t=[],n=new DataView(e),a=0;a<n.byteLength;a+=4){var r=("00000000"+n.getUint32(a).toString(16)).slice(-"00000000".length);t.push(r)}return t.join("")}var G=[{hashingFunctionName:"SHA-1",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-1",e).then((function(e){return z(e)}))}},{hashingFunctionName:"SHA-256",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-256",e).then((function(e){return z(e)}))}},{hashingFunctionName:"SHA-384",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-384",e).then((function(e){return z(e)}))}},{hashingFunctionName:"SHA-512",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-512",e).then((function(e){return z(e)}))}},{hashingFunctionName:"blake2b",hashingFunctionAsync:function(e){return new Promise((function(t){t(Object(L.blake2bHex)(e,null,64))}))}},{hashingFunctionName:"md5",hashingFunctionAsync:function(e){return new Promise((function(t){t(I()(e))}))}}];var J=function(){var e=r.a.useState(""),t=Object(c.a)(e,2),n=t[0],a=t[1],i=r.a.useState(D(0)),o=Object(c.a)(i,2),l=o[0],h=o[1],p=r.a.useState(""),g=Object(c.a)(p,2),d=g[0],f=g[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null),r.a.createElement(R,{onFilterValueChange:function(e){f(e)}}),r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement("br",null),r.a.createElement(m.a,{id:"outlined-multiline-static",label:"Text To Hash",multiline:!0,rows:"4",value:n,onChange:function(e){a(e.target.value),h(D(function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var a=e.charCodeAt(n);a>127&&a<=2047?t++:a>2047&&a<=65535&&(t+=2)}return t}(e.target.value)))},variant:"outlined",helperText:l,fullWidth:!0}),r.a.createElement("h2",null,"Or"),r.a.createElement("h2",null,"File Input"),function(e,t){return G.filter((function(e){return!t||e.hashingFunctionName.toLowerCase().includes(t.toLowerCase())})).map((function(t){return r.a.createElement(B,Object.assign({key:t.hashingFunctionName,textOrValueToHash:e},t))}))}(n,d)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.5cd4c6b8.chunk.js.map