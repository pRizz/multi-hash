(this["webpackJsonpmulti-hash"]=this["webpackJsonpmulti-hash"]||[]).push([[0],{134:function(e,t,n){},186:function(e,t,n){"use strict";(function(e){var a=n(13),r=n(10),o=n(0),i=n.n(o),c=(n(134),n(461)),l=n(462),s=n(216),u=n(124),m=n(12),h=n(459),f=n(460),d=n(71),g=n(61),p=n(466),b=n(215),v=n(72),y=n(94),E=n(209),w=n.n(E),k=n(210),C=n.n(k),j=n(208),S=n.n(j),x=n(206),O=n.n(x),D=n(207),F=n.n(D),N=n(211),T=n.n(N),H=n(189),B=n(214),A=n(194),I=n(195),L=n.n(I),M=n(126),R=n(212),W=n.n(R),z=n(196),P=n(125),K=n(467),V=n(213),G=n.n(V),U=n(465),J=n(464);function _(e){return i.a.createElement(J.a,Object.assign({elevation:6,variant:"filled"},e))}var q=new L.a,Q=Object(u.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(r.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(r.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(r.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(r.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Y(e){var t=e.onFilterValueChange,n=Q(),r=i.a.useState(null),o=Object(a.a)(r,2),c=o[0],l=o[1],s=i.a.useState(null),u=Object(a.a)(s,2),m=u[0],E=u[1],k=Boolean(c),j=Boolean(m),x=function(){E(null)},D=function(){l(null),x()},N=i.a.createElement(y.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:D},i.a.createElement(v.a,{onClick:D},"Profile"),i.a.createElement(v.a,{onClick:D},"My account")),H=i.a.createElement(y.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:x},i.a.createElement(v.a,null,i.a.createElement(d.a,{"aria-label":"show 4 new mails",color:"inherit"},i.a.createElement(b.a,{badgeContent:4,color:"secondary"},i.a.createElement(O.a,null))),i.a.createElement("p",null,"Messages")),i.a.createElement(v.a,null,i.a.createElement(d.a,{"aria-label":"show 11 new notifications",color:"inherit"},i.a.createElement(b.a,{badgeContent:11,color:"secondary"},i.a.createElement(F.a,null))),i.a.createElement("p",null,"Notifications")),i.a.createElement(v.a,{onClick:function(e){l(e.currentTarget)}},i.a.createElement(d.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},i.a.createElement(S.a,null)),i.a.createElement("p",null,"Profile")));return i.a.createElement("div",{className:n.grow},i.a.createElement(h.a,{position:"static"},i.a.createElement(f.a,null,i.a.createElement(d.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer"},i.a.createElement(w.a,null)),i.a.createElement(g.a,{className:n.title,variant:"h6",noWrap:!0},"Multi Hash"),i.a.createElement("div",{className:n.search},i.a.createElement("div",{className:n.searchIcon},i.a.createElement(C.a,null)),i.a.createElement(p.a,{placeholder:"Filter (sha, blake, etc.)",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"filter-list"},onChange:function(e){t(e.target.value)}})),i.a.createElement("div",{className:n.grow}),i.a.createElement("div",{className:n.sectionMobile},i.a.createElement(d.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit"},i.a.createElement(T.a,null))),i.a.createElement(M.a,{href:"https://github.com/pRizz/multi-hash",target:"_blank",rel:"noopener",variant:"contained",className:n.button,startIcon:i.a.createElement(W.a,null)},"Source Code"),i.a.createElement("div",{style:{width:12}}),i.a.createElement(M.a,{href:"https://www.prizzventuresllc.com/",target:"_blank",rel:"noopener",variant:"contained",className:n.button},"P Rizz Ventures"))),H,N)}var Z=[[8,"Y"],[7,"Z"],[6,"E"],[5,"P"],[4,"T"],[3,"G"],[2,"M"],[1,"k"]].map((function(e){return{minValue:Math.pow(1e3,e[0]),prefix:e[1]}}));function $(e){var t=!0,n=!1,a=void 0;try{for(var r,o=Z[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;if(e>=i.minValue)return"".concat((e/i.minValue).toLocaleString(void 0,{maximumFractionDigits:3})," ").concat(i.prefix,"B")}}catch(c){n=!0,a=c}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}return"".concat(e," bytes")}function X(e){for(var t=e.length,n=e.length-1;n>=0;n--){var a=e.charCodeAt(n);a>127&&a<=2047?t++:a>2047&&a<=65535&&(t+=2)}return t}var ee=[{name:"10 KB",byteCount:1e4},{name:"100 KB",byteCount:1e5},{name:"1 MB",byteCount:1e6},{name:"10 MB",byteCount:1e7},{name:"100 MB",byteCount:1e8},{name:"500 MB (slow)",byteCount:5e8},{name:"1 GB (slow)",byteCount:1e9}];function te(t){var n=t.onDataToHash;return i.a.createElement("section",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},ee.map((function(t){return i.a.createElement(M.a,{variant:"contained",color:"primary",key:t.name,style:{margin:8},onClick:function(){var a,r=(a=t.byteCount,e.alloc(a));n(r)}},t.name)})))}function ne(e){var t=e.bufferToHash,n=e.filterText,a=e.onHashInfoData;return A.a.filter((function(e){return!n||e.hashingFunctionName.toLowerCase().includes(n.toLowerCase())})).map((function(e,n){return i.a.createElement(H.a,Object.assign({key:e.hashingFunctionName,bufferToHash:t,worker:q,hashDefinitionIndex:n,onHashInfoData:a},e))}))}var ae=!1;function re(){return i.a.createElement(g.a,{variant:"h5",style:{margin:20}},"Or")}t.a=function(){var t=i.a.useState(""),n=Object(a.a)(t,2),r=n[0],o=n[1],u=i.a.useState(e.alloc(0)),m=Object(a.a)(u,2),h=m[0],f=m[1],d=i.a.useState($(0)),p=Object(a.a)(d,2),b=p[0],v=p[1],y=i.a.useState(""),E=Object(a.a)(y,2),w=E[0],k=E[1],C=i.a.useState(""),j=Object(a.a)(C,2),S=j[0],x=j[1],O=i.a.useState(0),D=Object(a.a)(O,2),F=D[0],N=D[1],T=i.a.useState([]),H=Object(a.a)(T,2),A=H[0],I=H[1],L=i.a.useState(""),M=Object(a.a)(L,2),R=M[0],W=M[1],V=i.a.useState(!1),J=Object(a.a)(V,2),Q=J[0],Z=J[1];ae||(ae=!0,q.addEventListener("message",(function(e){var t=e.data.jobQueueCount;void 0!==t&&(Z(0===t),N(t))})));var ee=F>0,oe=function(){Z(!1)};return i.a.createElement("div",{className:"App"},i.a.createElement(c.a,null),i.a.createElement(Y,{onFilterValueChange:function(e){k(e)}}),i.a.createElement(l.a,{maxWidth:"md"},i.a.createElement("br",null),i.a.createElement(s.a,{id:"outlined-multiline-static",label:"Text To Hash",multiline:!0,rows:"4",value:r,onChange:function(t){var n=t.target.value;o(n),f(function(t){return e.from((new TextEncoder).encode(t))}(n));var a=$(X(n));v(a),W("".concat($(X(n))," of text"))},variant:"outlined",helperText:b,fullWidth:!0}),i.a.createElement(re,null),i.a.createElement(B.a,{onDrop:function(t){t.forEach((function(t){var n=new FileReader;n.onload=function(){!function(t){var n=t.fileBuffer,a=t.fileName;console.log("handleFileChange"),console.log(n),console.log(n.byteLength),f(e.from(n)),x("".concat(a,": ").concat($(n.byteLength))),W("".concat($(n.byteLength)," of a file"))}({fileBuffer:n.result,fileName:t.name})},n.readAsArrayBuffer(t)}))}},(function(e){var t=e.getRootProps,n=e.getInputProps;return i.a.createElement("section",{style:{border:"dashed gray",borderColor:S?"blue":"gray"}},i.a.createElement("div",t(),i.a.createElement("input",n()),i.a.createElement("p",{style:{fontSize:30,paddingTop:50,margin:0}},"Drag 'n' drop a file here, or click to select a file"),i.a.createElement("p",{style:{fontSize:30,margin:4}},"(hashing is done locally)"),S&&i.a.createElement(K.a,{icon:i.a.createElement(G.a,null),label:S,clickable:!0,color:"primary",style:{marginTop:20}}),i.a.createElement("div",{style:{marginBottom:50}})))})),i.a.createElement(re,null),i.a.createElement(g.a,{variant:"h5"},"Random Data"),i.a.createElement(te,{onDataToHash:function(e){f(e),W("".concat($(e.byteLength)," of random data"))}}),i.a.createElement("div",{style:{height:"3em"}}),i.a.createElement(g.a,{variant:"h3"},"Hash job queue count: ",F),ee&&i.a.createElement(P.a,null),i.a.createElement(ne,{bufferToHash:h,filterText:w,onHashInfoData:function(e){var t=A.findIndex((function(t,n,a){return t.hashingFunctionName===e.hashingFunctionName}));t<0?A.push(e):(A.splice(t,1,e),I(A))}}),i.a.createElement(z.a,{statsDescription:R,data:A,isLoading:ee}),i.a.createElement(U.a,{open:Q,autoHideDuration:3e3,onClose:oe},i.a.createElement(_,{onClose:oe,severity:"success"},"Done hashing!"))),i.a.createElement("div",null,"Footer TODO"))}}).call(this,n(133).Buffer)},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(190),r=n(13),o=n(0),i=n.n(o),c=(n(134),n(216)),l=n(125);function s(e){var t=e.bufferToHash,n=e.hashingFunctionName,o=e.worker,s=e.hashDefinitionIndex,u=e.onHashInfoData,m=i.a.useState(""),h=Object(r.a)(m,2),f=h[0],d=h[1],g=i.a.useState(!1),p=Object(r.a)(g,2),b=p[0],v=p[1],y=i.a.useState(""),E=Object(r.a)(y,2),w=E[0],k=E[1],C=i.a.useState(""),j=Object(r.a)(C,2),S=j[0],x=j[1],O=i.a.useState(null),D=Object(r.a)(O,2),F=D[0],N=D[1],T=i.a.useState(""),H=Object(r.a)(T,2),B=H[0],A=H[1];null!==F&&F.length===t.length||(N(t),k(t),o.postMessage({hashDefinitionIndex:s,bufferToHash:t,hashingFunctionName:n}),b||(v(!0),o.addEventListener("message",(function(e){var t=e.data;if(t.hashingFunctionName===n){var r=function(e,t){var n=e/1e3;return{"duration (s)":n,"MB/s":t/1e6/n,"ns/byte":1e6*e/t}}(t.hashDuration,t.bufferToHash.length),o=function(e){var t=e["duration (s)"],n=e["MB/s"],a=e["ns/byte"],r=(1e3*t).toLocaleString(void 0,{maximumFractionDigits:3}),o=a.toLocaleString(void 0,{maximumFractionDigits:3}),i=n.toLocaleString(void 0,{maximumFractionDigits:3});return"Took ".concat(r," ms | ").concat(o," ns/byte | ").concat(i,"MB/s")}(r);d(t.hash),x(t.bufferToHash),A(o),u(Object(a.a)({hashingFunctionName:n},r))}}))));var I=w.length!==S.length;return i.a.createElement("div",{key:n,style:{marginTop:"2em",marginBottom:"2em",position:"relative"}},I&&i.a.createElement("div",{style:{position:"absolute",justifyContent:"center",width:"100%",height:"100%"}},i.a.createElement(l.a,{style:{alignSelf:"center",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,margin:"auto",height:"100%"}})),i.a.createElement(c.a,{id:"outlined-multiline-static",label:n,multiline:!0,rows:"4",value:f,variant:"outlined",helperText:B,fullWidth:!0,style:{position:"relative"}}))}},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(268),n(271);function a(e){for(var t=[],n=new DataView(e),a=0;a<n.byteLength;a+=4){var r=("00000000"+n.getUint32(a).toString(16)).slice(-"00000000".length);t.push(r)}return t.join("")}var r=[{hashingFunctionName:"SHA-1",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-1",e).then((function(e){return a(e)}))}},{hashingFunctionName:"SHA-256",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-256",e).then((function(e){return a(e)}))}},{hashingFunctionName:"SHA-384",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-384",e).then((function(e){return a(e)}))}},{hashingFunctionName:"SHA-512",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-512",e).then((function(e){return a(e)}))}}]},195:function(e,t,n){e.exports=function(){return new Worker(n.p+"2edacf457f7419de02cb.worker.js")}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(10),r=n(0),o=n.n(r),i=n(38),c=n(125),l=n(61),s=[{name:"Duration (lower is better)",dataKey:"duration (s)"},{name:"Throughput (higher is better)",dataKey:"MB/s"},{name:"Throughput Inverse (lower is better)",dataKey:"ns/byte"}];function u(e){var t=e.chartProps,n=e.isLoading;return t.map((function(e){return o.a.createElement("div",{key:e.name,style:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",margin:12}},n&&o.a.createElement("div",{style:{position:"absolute",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"rgba(128, 128, 128, 0.1)",zIndex:10}},o.a.createElement(c.a,{color:"secondary",style:{alignSelf:"center",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,margin:"auto",height:"100%"}})),o.a.createElement(l.a,{variant:"h4"},e.name),o.a.createElement(i.b,{width:500,height:300,data:e.chartData,margin:{top:5,right:5,left:5,bottom:5}},o.a.createElement(i.c,{strokeDasharray:"3 3"}),o.a.createElement(i.f,{dataKey:"Hashing Function"}),o.a.createElement(i.g,null),o.a.createElement(i.e,null),o.a.createElement(i.d,null),o.a.createElement(i.a,{dataKey:e.dataKey,fill:"#8884d8"})))}))}function m(e){var t,n=e.data,r=e.statsDescription,i=e.isLoading,c=(t=n,s.map((function(e){var n=e.name,r=e.dataKey,o=t.filter((function(e){return!!e[r]})).map((function(e){return Object(a.a)({"Hashing Function":e.hashingFunctionName},r,e[r])}));return{name:n,dataKey:r,chartData:o}})));return o.a.createElement("section",null,o.a.createElement(l.a,{variant:"h2"},"Stats for hashing ",r||"null value"),o.a.createElement(u,{chartProps:c,isLoading:i}))}},256:function(e,t,n){e.exports=n(457)},261:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(261),n(186)),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(c.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/multi-hash",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/multi-hash","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[256,1,2]]]);
//# sourceMappingURL=main.57bf6d28.chunk.js.map