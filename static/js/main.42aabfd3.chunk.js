(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{123:function(e,t,n){},129:function(e,t){},130:function(e,t){},16:function(e,t,n){e.exports={wrapper:"Book_wrapper__1sU5g",btn:"Book_btn__WJEDP",book:"Book_book__1yqFR","book-hover":"Book_book-hover__YpXhy","book-front":"Book_book-front__fZfj8","book-expand":"Book_book-expand__2k63v","book-page":"Book_book-page__34sUo","book-page-item":"Book_book-page-item__hCMeB","book-back":"Book_book-back__18923","book-spine":"Book_book-spine__1Ahkb"}},205:function(e,t){},207:function(e,t){},257:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(113),a=n.n(o),i=(n(123),n(3)),s=n(73),l=n(69),p=n.n(l),j=n(29),u=n.n(j),d=n(0);var b=function(e){var t=e.width,n=void 0===t?"100%":t,c=e.height,r=void 0===c?300:c;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"\u8f6e\u64ad\u56fe"}),Object(d.jsx)("div",{className:u.a.carousel,style:{width:n,height:r},children:Object(d.jsxs)("div",{className:u.a.container,children:[Object(d.jsx)("div",{className:u.a.item,style:{display:"block",backgroundColor:"green"}}),Object(d.jsx)("div",{className:u.a.item,style:{display:"none",backgroundColor:"blue"}}),Object(d.jsx)("div",{className:u.a.item,style:{display:"none",backgroundColor:"red"}})]})})]})},x=n(118),h=n(74),f=n(8),O=n.n(f),m=n(22),v=n(23),y=n(5),_=n(70),g=n.n(_),w=n(53),k=n.n(w),S=["index_type","item_type","majors","code","content","evaluation_score","score_code"],C=function(){var e=Object(c.useState)("/test.xlsx"),t=Object(y.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(1),a=Object(y.a)(o,2),i=a[0],s=a[1],l=Object(c.useState)([]),p=Object(y.a)(l,2),j=p[0],u=p[1],b=Object(c.useState)([]),f=Object(y.a)(b,2),_=f[0],w=f[1],C=Object(c.useState)(""),N=Object(y.a)(C,2),A=N[0],B=N[1],D=Object(c.useState)(""),E=Object(y.a)(D,2),L=E[0],J=E[1],F=Object(c.useState)(""),P=Object(y.a)(F,2),X=P[0],z=P[1];var M=function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){if(!e.ok)throw new Error("fetch failed");return e.arrayBuffer()})).then((function(e){var t=new Uint8Array(e),n=g.a.read(t,{type:"array"}),c=g.a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{defval:null}),r=c.shift();return{contentColSpan:Object.keys(r).filter((function(e){return/^content/.test(e)})).length,data:c}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(O.a.mark((function e(){var t,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return e.next=3,M(n);case 3:t=e.sent,c=t.contentColSpan,r=t.data,s(c),u(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=_.filter((function(e){return e.index_type.includes(A)&&e.item_type.includes(L)&&e.majors.includes(X)})).map((function(e,t,n){var c=e.row,r=Object(h.a)(e,["row"]),o=Object(x.a)(c);return 0!==t&&n[t-1].index_type===r.index_type||"index_type"!==c[0].type&&o.splice(0,0,{text:r.index_type,rowSpan:1,colSpan:1,type:"index_type"}),0!==t&&n[t-1].index_type===r.index_type&&n[t-1].item_type===r.item_type||("index_type"===o[0].type&&"item_type"!==o[1].type?o.splice(1,0,{text:r.item_type,rowSpan:1,colSpan:1,type:"item_type"}):"index_type"!==c[0].type&&"item_type"!==c[0].type&&o.splice(0,0,{text:r.item_type,rowSpan:1,colSpan:1,type:"item_type"})),Object(v.a)({row:o},r)})).map((function(e,t,n){var c=e.row,r=Object(h.a)(e,["row"]),o=c.map((function(e){return"index_type"===e.type?Object(v.a)(Object(v.a)({},e),{},{rowSpan:n.filter((function(e){return e.index_type.includes(r.index_type)})).length}):"item_type"===e.type?Object(v.a)(Object(v.a)({},e),{},{rowSpan:n.filter((function(e){return e.index_type.includes(r.index_type)&&e.item_type.includes(r.item_type)})).length}):e}));return Object(v.a)({row:o},r)}));return console.log(H),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"xlsx\u6587\u4ef6\u8f6cjson"}),Object(d.jsxs)("div",{className:k.a.form,children:[Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value.trim())}}),Object(d.jsx)("button",{onClick:T,style:{marginLeft:10},children:"xlsx\u8f6c\u6362"}),Object(d.jsx)("button",{onClick:function(){var e=[],t={majors:"",index_type:"",item_type:""};j.forEach((function(n,c){var r=[];S.forEach((function(e){switch(e){case"content":var o=Object.keys(n).filter((function(e){return/^content_\d+$/.test(e)})).sort(),a=o.every((function(e){return!n[e]}));if(n[e]){var s={text:n[e],rowSpan:1,colSpan:1,type:"content"};for(a&&(s.colSpan=i);j[c+s.rowSpan]&&!j[c+s.rowSpan].code;)s.rowSpan+=1;r.push(s)}a||o.forEach((function(e){n[e]&&function(){var t={text:n[e],rowSpan:1,colSpan:1,type:"content_child"},a=o.filter((function(t){return t>e}));a.every((function(e){return!n[e]}))&&(t.colSpan+=a.length);for(var i=o.filter((function(t){return t<=e}));j[c+t.rowSpan]&&!j[c+t.rowSpan].code&&i.every((function(e){return!j[c+t.rowSpan][e]}));)t.rowSpan+=1;r.push(t)}()}));break;default:var l={text:n[e],rowSpan:1,colSpan:1,type:e};if(n[e]){if("code"===e&&(t.majors=n.majors||""),"index_type"===e&&(t.index_type=n.index_type||""),"item_type"===e&&(t.item_type=n.item_type||""),"majors"===e)for(;j[c+l.rowSpan]&&!j[c+l.rowSpan].code;)l.rowSpan+=1;else for(;j[c+l.rowSpan]&&!j[c+l.rowSpan][e];)l.rowSpan+=1;"score_code"===e&&(l.score_options=n.score_options?n.score_options.split(","):[],l.score_majors=n.score_majors?n.score_majors.split(","):[],l.reject_score_codes=n.reject_score_codes?n.reject_score_codes.split(","):[]),r.push(l)}else if("majors"===e&&n.code){for(;j[c+l.rowSpan]&&!j[c+l.rowSpan].code;)l.rowSpan+=1;r.push(l)}}})),e.push(Object(v.a)({row:r},t))})),console.log(e),w(e)},style:{marginLeft:10},children:"table\u8f6c\u6362"})]}),Object(d.jsxs)("div",{className:k.a.filter,children:[Object(d.jsx)("label",{htmlFor:"index_type",style:{marginLeft:10},children:"\u6307\u6807\u7c7b\u522b"}),Object(d.jsxs)("select",{name:"index_type",id:"index_type",value:A,onChange:function(e){return B(e.target.value)},style:{marginLeft:10},children:[Object(d.jsx)("option",{value:"",children:"\u5168\u90e8"}),Object(d.jsx)("option",{value:"\u5b89\u5168\u8010\u4e45",children:"\u5b89\u5168\u8010\u4e45"}),Object(d.jsx)("option",{value:"\u5065\u5eb7\u8212\u9002",children:"\u5065\u5eb7\u8212\u9002"}),Object(d.jsx)("option",{value:"\u751f\u6d3b\u4fbf\u5229",children:"\u751f\u6d3b\u4fbf\u5229"}),Object(d.jsx)("option",{value:"\u8d44\u6e90\u8282\u7ea6",children:"\u8d44\u6e90\u8282\u7ea6"}),Object(d.jsx)("option",{value:"\u73af\u5883\u5b9c\u5c45",children:"\u73af\u5883\u5b9c\u5c45"}),Object(d.jsx)("option",{value:"\u63d0\u9ad8\u521b\u65b0",children:"\u63d0\u9ad8\u521b\u65b0"})]}),Object(d.jsx)("label",{htmlFor:"item_type",style:{marginLeft:10},children:"\u5b50\u9879"}),Object(d.jsxs)("select",{name:"item_type",id:"item_type",value:L,onChange:function(e){return J(e.target.value)},style:{marginLeft:10},children:[Object(d.jsx)("option",{value:"",children:"\u5168\u90e8"}),Object(d.jsx)("option",{value:"\u63a7\u5236\u9879",children:"\u63a7\u5236\u9879"}),Object(d.jsx)("option",{value:"\u8bc4\u5206\u9879",children:"\u8bc4\u5206\u9879"})]}),Object(d.jsx)("label",{htmlFor:"majors",style:{marginLeft:10},children:"\u4e13\u4e1a"}),Object(d.jsxs)("select",{name:"majors",id:"majors",value:X,onChange:function(e){return z(e.target.value)},style:{marginLeft:10},children:[Object(d.jsx)("option",{value:"",children:"\u5168\u90e8"}),Object(d.jsx)("option",{value:"\u5efa\u7b51",children:"\u5efa\u7b51"}),Object(d.jsx)("option",{value:"\u7ed3\u6784",children:"\u7ed3\u6784"}),Object(d.jsx)("option",{value:"\u7ed9\u6392\u6c34",children:"\u7ed9\u6392\u6c34"}),Object(d.jsx)("option",{value:"\u6696\u901a",children:"\u6696\u901a"}),Object(d.jsx)("option",{value:"\u7535\u6c14",children:"\u7535\u6c14"})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:k.a.table,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\u6307\u6807\u7c7b\u522b"}),Object(d.jsx)("th",{children:"\u5b50\u9879"}),Object(d.jsx)("th",{children:"\u6761\u6587\u4e13\u4e1a"}),Object(d.jsx)("th",{children:"\u6761\u6587\u7f16\u53f7"}),Object(d.jsx)("th",{children:"\u6761\u6587\u5185\u5bb9"}),Object(d.jsx)("th",{colSpan:i-1,children:"\u8bc4\u4ef7\u5185\u5bb9"}),Object(d.jsx)("th",{children:"\u8bc4\u4ef7\u6863\u6b21"}),Object(d.jsx)("th",{children:"\u5206\u503c\u7f16\u53f7"})]})}),Object(d.jsx)("tbody",{children:Array.isArray(H)&&H.map((function(e,t){return Object(d.jsx)("tr",{children:e.row.map((function(e,t){return Object(d.jsx)("td",{rowSpan:e.rowSpan,colSpan:e.colSpan,children:e.text},t)}))},t)}))})]})})]})},N=n(114),A=function(){var e=Object(c.useState)("My name is {{name}}"),t=Object(y.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)('{ "name": "Json" }'),a=Object(y.a)(o,2),i=a[0],s=a[1],l=Object(c.useState)(""),p=Object(y.a)(l,2),j=p[0],u=p[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"art-template\u6a21\u677f\u66ff\u6362"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{verticalAlign:"top"},children:"\u6a21\u677f\uff1a"}),Object(d.jsx)("textarea",{style:{verticalAlign:"top"},cols:"30",rows:"10",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{verticalAlign:"top"},children:"\u6570\u636e\uff1a"}),Object(d.jsx)("textarea",{style:{verticalAlign:"top"},cols:"30",rows:"10",value:i,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:function(e){var t=JSON.parse(i),c=Object(N.render)(n,t);console.log(t),u(c)},children:"\u8f93\u51fa"})}),Object(d.jsx)("p",{style:{border:"1px solid #ccc",minHeight:100,padding:20,whiteSpace:"pre-wrap"},children:j})]})},B=n(34),D=n(52),E=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"docx\u63d2\u4ef6\u751f\u6210.docx\u6587\u4ef6"}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var t=new B.Document;t.addSection({size:{width:"297mm",height:"420mm",orientation:B.PageOrientation.LANDSCAPE},children:new Array(100).fill(new B.Paragraph("\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\uff01")),properties:{column:{count:2}}}),B.Packer.toBlob(t).then((function(e){Object(D.saveAs)(e,"\u6d4b\u8bd5\u6587\u6863.docx")}))},children:"\u8f93\u51fadocx"})})]})},L=n(115),J=n.n(L),F=function(){var e=Object(c.useState)(),t=Object(y.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),a=Object(y.a)(o,2),i=a[0],s=a[1],l=Object(c.useState)(""),p=Object(y.a)(l,2),j=p[0],u=p[1],b=Object(c.createRef)(),x=function(){var e=Object(m.a)(O.a.mark((function e(t){var n,c,r,o,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,c=t.replaceContent,r=t.saveName,e.next=3,J.a.loadAsync(n);case 3:return o=e.sent,e.next=6,o.file("word/document.xml").async("text");case 6:return a=e.sent,o.file("word/document.xml",c?c(a):a),e.next=10,o.generateAsync({type:"blob"});case 10:i=e.sent,Object(D.saveAs)(i,r||"".concat(Date.now(),".docx"));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(t.target.value&&t.target.files&&t.target.files[0])){e.next=6;break}if("application/vnd.openxmlformats-officedocument.wordprocessingml.document"===t.target.files[0].type){e.next=4;break}return e.abrupt("return",console.error("\u6587\u4ef6\u7c7b\u578b\u9519\u8bef\uff0c\u4ec5\u652f\u6301.docx\u6587\u4ef6"));case 4:console.log(t.target.files[0]),r(t.target.files[0]);case 6:t.target.value="";case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"docx\u6587\u4ef6\u5185\u5bb9\u66ff\u6362"}),Object(d.jsx)("p",{children:"\u4e0a\u4f20\u4e00\u4e2adocx\u6587\u4ef6\uff0c\u5c06\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u66ff\u6362\uff0c\u7136\u540e\u5bfc\u51fa\u65b0\u7684docx\u6587\u4ef6"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("input",{ref:b,style:{display:"none"},type:"file",accept:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:h}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),b.current.click()},children:"\u4e0a\u4f20\u6587\u4ef6"}),Object(d.jsx)("span",{children:n&&n.name})]}),Object(d.jsxs)("p",{children:["\u67e5\u627e\uff1a",Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("p",{children:["\u66ff\u6362\uff1a",Object(d.jsx)("input",{type:"text",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:function(e){if(e.preventDefault(),n){x({file:n,replaceContent:function(e){return e&&i?e.replace(i,j||""):e},saveName:"\u6d4b\u8bd5.docx"})}},children:"\u5bfc\u51faword"})})]})},P=n(116),X=n.n(P),z=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(),a=Object(y.a)(o,2),i=a[0],s=a[1],l=Object(c.createRef)(),p=function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(t.target.value&&t.target.files&&t.target.files[0])){e.next=6;break}if("application/vnd.openxmlformats-officedocument.wordprocessingml.document"===t.target.files[0].type){e.next=4;break}return e.abrupt("return",console.error("\u6587\u4ef6\u7c7b\u578b\u9519\u8bef\uff0c\u4ec5\u652f\u6301.docx\u6587\u4ef6"));case 4:console.log(t.target.files[0]),s(t.target.files[0]);case 6:t.target.value="";case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{marginTop:20},children:[Object(d.jsx)("h2",{children:"docx\u6587\u4ef6\u9884\u89c8"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("input",{ref:l,style:{display:"none"},type:"file",accept:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",onChange:p}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),l.current.click()},children:"\u4e0a\u4f20\u6587\u4ef6"}),Object(d.jsx)("span",{children:i&&i.name})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:function(e){if(e.preventDefault(),i){var t=new FileReader;t.readAsArrayBuffer(i),t.onload=function(e){X.a.convertToHtml({arrayBuffer:e.target.result}).then((function(e){console.log("html: ",e.value),console.log("messages: ",e.messages),r(e.value)})).done()}}},children:"\u9884\u89c8docx"})}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:n},style:{padding:20,minHeight:100,textAlign:"left",border:"1px solid #ccc"}})]})},M=n(16),T=n.n(M),H=function(e){return Object(d.jsx)("div",{className:T.a.wrapper,children:Object(d.jsxs)("div",{className:"".concat(T.a.book," ").concat(T.a["book-expand"]),children:[Object(d.jsxs)("div",{className:T.a["book-front"],children:[Object(d.jsx)("img",{src:"/book-test.png",alt:""}),Object(d.jsx)("div",{})]}),Object(d.jsx)("div",{className:T.a["book-page"],children:new Array(5).fill(null).map((function(e,t,n){return Object(d.jsx)("div",{className:T.a["book-page-item"],children:t===Math.ceil(n.length/2)&&Object(d.jsx)("a",{className:T.a.btn,href:".#",children:"\u70b9\u51fb\u4e0b\u8f7d"})},t)}))}),Object(d.jsx)("div",{className:T.a["book-back"],children:Object(d.jsx)("img",{src:"/book-test.png",alt:""})}),Object(d.jsx)("div",{className:T.a["book-spine"]})]})})},R=function(e){var t=e.to,n=e.label,c=e.activeOnlyWhenExact,r=Object(i.g)({path:t,exact:c});return Object(d.jsx)("li",{className:r?p.a.active:"",children:Object(d.jsx)(s.b,{to:t,children:n})})};var U=function(){var e=[{path:"/carousel",title:"Carousel",component:b},{path:"/xlsx2json",title:"Xlsx2json",component:C},{path:"/art-template",title:"ArtTemplate",component:A},{path:"/docx",title:"Docx",component:E},{path:"/jszip",title:"Jszip",component:F},{path:"/docx-previewer",title:"DocxPreviewer",component:z},{path:"/book",title:"Book",component:H}];return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:p.a.app,children:[Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsx)(R,{to:e.path,label:e.title},e.path)}))})}),Object(d.jsx)("main",{children:Object(d.jsxs)(i.d,{children:[e.map((function(e){return Object(d.jsx)(i.b,{path:e.path,children:Object(d.jsx)(e.component,{})},e.path)})),Object(d.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(i.a,{to:e[0].path})}})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={carousel:"Carousel_carousel__3iif3",container:"Carousel_container__il8GN",item:"Carousel_item__XTzEJ"}},53:function(e,t,n){e.exports={form:"Xlsx2json_form__Ys5_v",filter:"Xlsx2json_filter__2KUj7",table:"Xlsx2json_table__19eEY"}},69:function(e,t,n){e.exports={app:"App_app__2ziFi",active:"App_active__2jQ78"}},78:function(e,t){}},[[257,1,2]]]);
//# sourceMappingURL=main.42aabfd3.chunk.js.map