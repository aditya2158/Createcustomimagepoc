(this.webpackJsonpdragndrop=this.webpackJsonpdragndrop||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),c=n(7),l=n.n(c),a=(n(21),n(22),n(3)),r=n(4),o=n(11),h=n(16),d=n.n(h),b=n(1),j=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(!1),l=Object(r.a)(c,2),h=l[0],j=l[1],g=Object(i.useState)([]),u=Object(r.a)(g,2),y=u[0],p=u[1],x=Object(i.useState)({width:200,height:20,x:10,y:10}),O=Object(r.a)(x,2),f=O[0],m=(O[1],Object(i.useState)("")),v=Object(r.a)(m,2),w=v[0],C=v[1];return Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},id:"result",children:[Object(b.jsx)("div",{className:"pareent",style:{height:"30vh",backgroundColor:"yellow"}}),y.map((function(e,t){return function(e,t){switch(e.type){case"line":return Object(b.jsx)(o.a,{bounds:".pareent",disableDragging:n,enableResizing:h,style:e.style,size:{width:e.style.width,height:e.style.height},position:{x:e.style.x,y:e.style.y},onDragStop:function(e,n){var i=Object(a.a)(y);i[t].style.x=n.x,i[t].style.y=n.y,p(i)},onResizeStop:function(e,n,i,s,c){var l=Object(a.a)(y);l[t].style.width=i.style.width,l[t].style.height=i.style.height,p(l)}});case"box":return Object(b.jsx)(o.a,{bounds:".pareent",disableDragging:n,enableResizing:h,style:e.style,size:{width:e.style.width,height:e.style.height},position:{x:e.style.x,y:e.style.y},onDragStop:function(e,n){var i=Object(a.a)(y);i[t].style.x=n.x,i[t].style.y=n.y,p(i)},onResizeStop:function(e,n,i,s,c){var l=Object(a.a)(y);l[t].style.width=i.style.width,l[t].style.height=i.style.height,p(l)},children:"Rnd"});default:return}}(e,t)})),Object(b.jsxs)("p",{children:["button",Object(b.jsx)("button",{onClick:function(){var e=Object(a.a)(y);e.push({type:"box",style:{display:"flex",alignItems:"center",justifyContent:"center",border:"solid 10px green",backgroundColor:"red",width:200,height:200,x:f.x+0,y:f.y+20}}),p(e)},children:"+"})]}),Object(b.jsxs)("p",{children:["Horizontal line",Object(b.jsx)("button",{onClick:function(){var e=Object(a.a)(y);e.push({type:"line",style:{display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px green",backgroundColor:"green",width:200,height:5,x:f.x+50,y:f.y+20}}),p(e)},children:"+"})]}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{onClick:function(){j(!h),s(!n)},children:h?"Drag":"Resize"})}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{onClick:function(){var e=document.getElementById("result");d()(e,{scrollX:0,scrollY:0}).then((function(e){localStorage.setItem("canvasImage",e.toDataURL("image/png").replace("image/png","image/octet-stream")),C(e.toDataURL("image/png").replace("image/png","image/octet-stream"))}))},children:"Create Image"})}),w.length>0&&Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Taken from above"}),Object(b.jsx)("img",{height:"250px",width:"475px",src:w,alt:"PoC"})]})]})};var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),s(e),c(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.01b0cc0d.chunk.js.map