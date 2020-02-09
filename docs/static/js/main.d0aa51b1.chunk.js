(this["webpackJsonpmulti-hash-webapp"]=this["webpackJsonpmulti-hash-webapp"]||[]).push([[0],{137:function(e,t,a){},189:function(e,t,a){"use strict";(function(e){var n=a(13),r=a(12),o=a(0),i=a.n(o),l=(a(137),a(460)),c=a(216),s=a(126),u=a(122),m=a(11),h=a(458),f=a(459),d=a(215),p=a(28),g=a(464),b=a(210),v=a.n(b),y=a(211),E=a.n(y),w=a(192),C=a(213),j=a(197),x=a(198),k=a.n(x),N=a(124),O=a(123),S=a.n(O),D=a(199),H=a(93),T=a(465),A=a(212),I=a.n(A),F=a(463),B=a(462),L=a(60),R=a.n(L),W=a(125),z=a(27),M=a(209);function P(e){return i.a.createElement(B.a,Object.assign({elevation:6,variant:"filled"},e))}var K=new k.a,G=Object(u.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(r.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),tipCode:{color:"blue",overflowWrap:"break-word"},search:Object(r.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",flexGrow:1},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(r.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),footerColumn:{flex:"1 1 auto",flexDirection:"column",padding:12,flexBasis:1,minWidth:400}}}));function V(){var e=G();return i.a.createElement("footer",{style:{backgroundColor:"#F1F1FF",paddingTop:30,paddingBottom:30}},i.a.createElement(c.a,null,i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-even",alignItems:"center"}},i.a.createElement("div",{className:e.footerColumn,style:{}},i.a.createElement(p.a,{variant:"h6"},"Multi Hash"),i.a.createElement("p",null,"Multi Hash is a webapp to quickly and easily generate common hashes with simple text, file, or random data."),i.a.createElement("p",null,"It is a ",i.a.createElement(W.a,{href:"https://developers.google.com/web/progressive-web-apps",variant:"button",color:"primary",target:"_blank",rel:"noopener"},"Progressive Web App (PWA)")," that can run offline."),i.a.createElement("p",null,"All hashing is done in your browser and varies based on the strength of your processing power."),i.a.createElement("p",null,"It utilizes web workers for hashing to prevent the UI thread from being blocked."),i.a.createElement("p",null,"It displays basic hashing stats and speeds based on your in-browser performance.")),i.a.createElement("div",{className:e.footerColumn},i.a.createElement("p",null,"Multi Hash was developed by",i.a.createElement(N.a,{variant:"contained",color:"primary",href:"https://github.com/pRizz/",target:"_blank",rel:"noopener",className:e.button,style:{marginLeft:12,marginRight:12},startIcon:i.a.createElement(S.a,null)},"@pRizz")),i.a.createElement("p",null,"Copyright \xa9 2020 Peter Ryszkiewicz"),i.a.createElement("p",null,"Check out my other crypto projects at ",i.a.createElement(W.a,{href:"https://www.prizzventuresllc.com",variant:"button",target:"_blank"},"www.prizzventuresllc.com")),i.a.createElement("p",{className:e.footerColumn},i.a.createElement(W.a,{href:"https://www.prizzventuresllc.com/PrivacyPolicy.txt",variant:"button",color:"primary",target:"_blank",rel:"noopener"},"Privacy Policy")))),i.a.createElement("div",null,i.a.createElement("p",null,"If you like these apps and want to support me making more, please consider tipping me at these addresses:"),i.a.createElement("div",null,"IOTA: ",i.a.createElement("code",{className:e.tipCode},R.a.IOTA)),i.a.createElement("div",null,"NANO: ",i.a.createElement("code",{className:e.tipCode},R.a.NANO)),i.a.createElement("div",null,"BANANO: ",i.a.createElement("code",{className:e.tipCode},R.a.BANANO)),i.a.createElement("div",null,"ETH: ",i.a.createElement("code",{className:e.tipCode},R.a.ETH)),i.a.createElement("div",null,"BTC: ",i.a.createElement("code",{className:e.tipCode},R.a.BTC)),i.a.createElement("div",null,"Thanks for your support!"))))}function U(e){var t=e.onFilterValueChange,a=G();return i.a.createElement("div",{className:a.grow},i.a.createElement(h.a,{position:"static"},i.a.createElement(f.a,null,i.a.createElement(d.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer"},i.a.createElement(v.a,null)),i.a.createElement(p.a,{className:a.title,variant:"h6",noWrap:!0},"Multi Hash"),i.a.createElement("div",{className:a.search},i.a.createElement("div",{className:a.searchIcon},i.a.createElement(E.a,null)),i.a.createElement(g.a,{placeholder:"Filter (sha, blake, etc.)",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"filter-list"},onChange:function(e){t(e.target.value)}})),i.a.createElement(d.a,{href:"https://github.com/pRizz/multi-hash",target:"_blank",rel:"noopener",variant:"contained",className:a.button,color:"inherit","aria-label":"source code"},i.a.createElement(S.a,null)))))}function _(e){for(var t=e.length,a=e.length-1;a>=0;a--){var n=e.charCodeAt(a);n>127&&n<=2047?t++:n>2047&&n<=65535&&(t+=2)}return t}var J=[{name:"10 KB",byteCount:1e4},{name:"100 KB",byteCount:1e5},{name:"1 MB",byteCount:1e6},{name:"10 MB",byteCount:1e7},{name:"100 MB",byteCount:1e8},{name:"500 MB (slow)",byteCount:5e8},{name:"1 GB (slow)",byteCount:1e9}];function q(e){var t=e.onDataToHash;return i.a.createElement("section",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},J.map((function(e){return i.a.createElement(N.a,{variant:"contained",color:"primary",key:e.name,style:{margin:8},onClick:function(){t(e.byteCount)}},e.name)})))}function Q(e){var t=e.bufferToHash,a=e.filterText,n=e.onHashInfoData;return j.a.filter((function(e){return!a||e.hashingFunctionName.toLowerCase().includes(a.toLowerCase())})).map((function(e,a){return i.a.createElement(w.a,Object.assign({key:e.hashingFunctionName,bufferToHash:t,worker:K,hashDefinitionIndex:a,onHashInfoData:n},e))}))}var Y=!1;function Z(){return i.a.createElement(p.a,{variant:"h5",style:{margin:20}},"Or")}t.a=function(){var t=i.a.useState(""),a=Object(n.a)(t,2),r=a[0],o=a[1],u=i.a.useState(e.alloc(0)),m=Object(n.a)(u,2),h=m[0],f=m[1],d=i.a.useState(Object(z.a)(0)),g=Object(n.a)(d,2),b=g[0],v=g[1],y=i.a.useState(""),E=Object(n.a)(y,2),w=E[0],j=E[1],x=i.a.useState(""),k=Object(n.a)(x,2),N=k[0],O=k[1],S=i.a.useState(0),A=Object(n.a)(S,2),B=A[0],L=A[1],R=i.a.useState([]),W=Object(n.a)(R,2),G=W[0],J=W[1],$=i.a.useState(""),X=Object(n.a)($,2),ee=X[0],te=X[1],ae=i.a.useState(!1),ne=Object(n.a)(ae,2),re=ne[0],oe=ne[1],ie=i.a.useState(!1),le=Object(n.a)(ie,2),ce=le[0],se=le[1];Y||(Y=!0,K.addEventListener("message",(function(e){var t=e.data.jobQueueCount;if("onRandomData"===e.data.type)return function(e){var t=e.byteCount,a=e.buffer;console.log(t),console.log(a),se(!1),ue(a)}(e.data.opts);void 0!==t&&(oe(0===t),L(t))})));var ue=function(e){f(e),te("".concat(Object(z.a)(e.byteLength)," of random data"))},me=B>0,he=function(){oe(!1)},fe=function(e){se(!0),K.postMessage({type:"onGetRandomData",opts:{byteCount:e}})},de=me?"Hashing ".concat(ee," | Job queue count: ").concat(B):"Hashes for ".concat(ee||"null value");return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,null),i.a.createElement(U,{onFilterValueChange:function(e){j(e)}}),i.a.createElement(c.a,{maxWidth:"md"},i.a.createElement("br",null),i.a.createElement(s.a,{id:"outlined-multiline-static",label:"Text To Hash",multiline:!0,rows:"4",value:r,onChange:function(t){var a=t.target.value;o(a),f(function(t){return e.from((new TextEncoder).encode(t))}(a));var n=Object(z.a)(_(a));v(n),te("".concat(Object(z.a)(_(a))," of text"))},variant:"outlined",helperText:b,fullWidth:!0}),i.a.createElement(Z,null),i.a.createElement(C.a,{onDrop:function(t){t.forEach((function(t){var a=new FileReader;a.onload=function(){!function(t){var a=t.fileBuffer,n=t.fileName;f(e.from(a)),O("".concat(n,": ").concat(Object(z.a)(a.byteLength))),te("".concat(Object(z.a)(a.byteLength)," of a file"))}({fileBuffer:a.result,fileName:t.name})},a.readAsArrayBuffer(t)}))}},(function(e){var t=e.getRootProps,a=e.getInputProps;return i.a.createElement("section",{style:{border:"dashed gray",borderColor:N?"blue":"gray"}},i.a.createElement("div",t(),i.a.createElement("input",a()),i.a.createElement("p",{style:{fontSize:30,paddingTop:50,margin:0,paddingLeft:30,paddingRight:30}},"Drag 'n' drop a file here, or click to select a file"),i.a.createElement("p",{style:{fontSize:30,margin:4}},"(hashing is done locally)"),N&&i.a.createElement(T.a,{icon:i.a.createElement(I.a,null),label:N,clickable:!0,color:"primary",style:{marginTop:20}}),i.a.createElement("div",{style:{height:50}})))})),i.a.createElement(Z,null),i.a.createElement(p.a,{variant:"h4"},"Random Data"),i.a.createElement(q,{onDataToHash:fe}),ce&&i.a.createElement(p.a,{variant:"h5",style:{display:"flex",alignItems:"center",justifyContent:"center",margin:12,textAlign:"center"}},"Generating Random Data",i.a.createElement(H.a,{style:{alignSelf:"center",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",margin:8}})),i.a.createElement(Z,null),i.a.createElement(p.a,{variant:"h5",style:{margin:8}},"Custom Size Random Data"),i.a.createElement(M.a,{onDataToHash:fe}),i.a.createElement("div",{style:{height:"3em"}}),i.a.createElement(p.a,{variant:"h3"},de),me&&i.a.createElement(H.a,{style:{margin:20}}),i.a.createElement(Q,{bufferToHash:h,filterText:w,onHashInfoData:function(e){var t=G.findIndex((function(t,a,n){return t.hashingFunctionName===e.hashingFunctionName}));t<0?G.push(e):(G.splice(t,1,e),J(G))}}),i.a.createElement(D.a,{statsDescription:ee,data:G,isLoading:me}),i.a.createElement(F.a,{open:re,autoHideDuration:3e3,onClose:he},i.a.createElement(P,{onClose:he,severity:"success"},"Done hashing!"))),i.a.createElement(V,null))}}).call(this,a(136).Buffer)},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(193),r=a(13),o=a(0),i=a.n(o),l=(a(137),a(126)),c=a(93);function s(e){var t=e.bufferToHash,a=e.hashingFunctionName,o=e.worker,s=e.hashDefinitionIndex,u=e.onHashInfoData,m=i.a.useState(""),h=Object(r.a)(m,2),f=h[0],d=h[1],p=i.a.useState(!1),g=Object(r.a)(p,2),b=g[0],v=g[1],y=i.a.useState(""),E=Object(r.a)(y,2),w=E[0],C=E[1],j=i.a.useState(""),x=Object(r.a)(j,2),k=x[0],N=x[1],O=i.a.useState(null),S=Object(r.a)(O,2),D=S[0],H=S[1],T=i.a.useState(""),A=Object(r.a)(T,2),I=A[0],F=A[1];null!==D&&D.length===t.length||(H(t),C(t),o.postMessage({hashDefinitionIndex:s,bufferToHash:t,hashingFunctionName:a}),b||(v(!0),o.addEventListener("message",(function(e){var t=e.data;if(t.hashingFunctionName===a){var r=function(e,t){var a=e/1e3;return{"duration (s)":a,"MB/s":t/1e6/a,"ns/byte":1e6*e/t}}(t.hashDuration,t.bufferToHash.length),o=function(e){var t=e["duration (s)"],a=e["MB/s"],n=e["ns/byte"],r=(1e3*t).toLocaleString(void 0,{maximumFractionDigits:3}),o=n.toLocaleString(void 0,{maximumFractionDigits:3}),i=a.toLocaleString(void 0,{maximumFractionDigits:3});return"Took ".concat(r," ms | ").concat(o," ns/byte | ").concat(i,"MB/s")}(r);d(t.hash),N(t.bufferToHash),F(o),u(Object(n.a)({hashingFunctionName:a},r))}}))));var B=w.length!==k.length;return i.a.createElement("div",{key:a,style:{marginTop:"2em",marginBottom:"2em",position:"relative"}},B&&i.a.createElement("div",{style:{position:"absolute",justifyContent:"center",width:"100%",height:"100%"}},i.a.createElement(c.a,{style:{alignSelf:"center",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,margin:"auto",height:"100%"}})),i.a.createElement(l.a,{id:"outlined-multiline-static",label:a,multiline:!0,rows:"4",value:f,variant:"outlined",helperText:I,fullWidth:!0,style:{position:"relative"}}))}},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(268),a(271);function n(e){for(var t=[],a=new DataView(e),n=0;n<a.byteLength;n+=4){var r=("00000000"+a.getUint32(n).toString(16)).slice(-"00000000".length);t.push(r)}return t.join("")}var r=[{hashingFunctionName:"SHA-1",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-1",e).then((function(e){return n(e)}))}},{hashingFunctionName:"SHA-256",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-256",e).then((function(e){return n(e)}))}},{hashingFunctionName:"SHA-384",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-384",e).then((function(e){return n(e)}))}},{hashingFunctionName:"SHA-512",hashingFunctionAsync:function(e){return crypto.subtle.digest("SHA-512",e).then((function(e){return n(e)}))}}]},198:function(e,t,a){e.exports=function(){return new Worker(a.p+"8bb3dc51baa0b09289a1.worker.js")}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(12),r=a(0),o=a.n(r),i=a(38),l=a(93),c=a(28),s=a(214),u=[{name:"Duration (lower is better)",dataKey:"duration (s)"},{name:"Throughput (higher is better)",dataKey:"MB/s"},{name:"Throughput Inverse (lower is better)",dataKey:"ns/byte"}];function m(e){var t=e.chartProps,a=e.isLoading;return t.map((function(e){return o.a.createElement("div",{key:e.name,style:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",margin:12}},a&&o.a.createElement("div",{style:{position:"absolute",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"rgba(128, 128, 128, 0.1)",zIndex:10}},o.a.createElement(l.a,{color:"secondary",style:{alignSelf:"center",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1,margin:"auto",height:"100%"}})),o.a.createElement(s.a,{style:{padding:20,margin:20}},o.a.createElement(c.a,{variant:"h4"},e.name),o.a.createElement(i.b,{width:400,height:300,data:e.chartData,margin:{top:5,right:5,left:5,bottom:5}},o.a.createElement(i.c,{strokeDasharray:"3 3"}),o.a.createElement(i.f,{dataKey:"Hashing Function"}),o.a.createElement(i.g,null),o.a.createElement(i.e,null),o.a.createElement(i.d,null),o.a.createElement(i.a,{dataKey:e.dataKey,fill:"#8884d8"}))))}))}function h(e){var t,a=e.data,r=e.statsDescription,i=e.isLoading,l=(t=a,u.map((function(e){var a=e.name,r=e.dataKey,o=t.filter((function(e){return!!e[r]})).map((function(e){return Object(n.a)({"Hashing Function":e.hashingFunctionName},r,e[r])}));return{name:a,dataKey:r,chartData:o}})));return o.a.createElement("section",null,o.a.createElement(c.a,{variant:"h2"},"Stats for hashing ",r||"null value"),o.a.createElement(m,{chartProps:l,isLoading:i}))}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(13),r=a(0),o=a.n(r),i=a(126),l=a(124),c=a(27);function s(e){var t=e.onDataToHash,a=Object(r.useState)(NaN),s=Object(n.a)(a,2),u=s[0],m=s[1],h=o.a.useState(Object(c.a)(0)),f=Object(n.a)(h,2),d=f[0],p=f[1];return o.a.createElement("section",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},o.a.createElement(i.a,{id:"outlined-multiline-static",label:"MB To Hash",rows:"1",onChange:function(e){try{var t=parseInt(e.target.value),a=1e6*t;m(t),p(Object(c.a)(a))}catch(e){m(NaN),p("N/A")}},variant:"outlined",helperText:d,fullWidth:!0}),o.a.createElement(l.a,{variant:"contained",color:"primary",disabled:isNaN(u),style:{margin:8},onClick:function(){t(1e6*u)}},"Hash ",u," MB"))}},256:function(e,t,a){e.exports=a(457)},261:function(e,t,a){},27:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=[[8,"Y"],[7,"Z"],[6,"E"],[5,"P"],[4,"T"],[3,"G"],[2,"M"],[1,"k"]].map((function(e){return{minValue:Math.pow(1e3,e[0]),prefix:e[1]}}));function r(e){var t=!0,a=!1,r=void 0;try{for(var o,i=n[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;if(e>=l.minValue)return"".concat((e/l.minValue).toLocaleString(void 0,{maximumFractionDigits:3})," ").concat(l.prefix,"B")}}catch(c){a=!0,r=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}return"".concat(e," bytes")}},457:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=(a(261),a(189)),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(l.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/multi-hash",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/multi-hash","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[256,1,2]]]);
//# sourceMappingURL=main.d0aa51b1.chunk.js.map