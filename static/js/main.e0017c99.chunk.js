(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},85:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),a=n.n(i),s=n(17),r=n.n(s),j=(n(66),n(31)),o=n(19),l=n(102),d=n(103),b=n(101),h=n(100),O=n(60),u=(n(67),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),x=n(38),p=n(28),f=n.n(p),m=n(7),g=n(39);n(85);function v(){var e=Object(x.a)(["\n    font-size: 25px;\n    color:red;\n"]);return v=function(){return e},e}function N(){var e=Object(x.a)(["\n    font-size: 25px;\n    color:","\n"]);return N=function(){return e},e}function S(){var e=Object(x.a)(["\n    padding:20px;\n"]);return S=function(){return e},e}var k=g.a.div(S()),y=g.a.h4(N(),(function(e){return e.\uc0c9\uc0c1}));g.a.h4(v());function C(e){return Object(c.jsxs)("p",{children:["\uc7ac\uace0 :  ",e.\uc7ac\uace0[e.\uc0c1\ud488id]," "]})}var w=function(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(i.useState)(""),l=Object(o.a)(r,2),d=l[0],b=l[1];Object(i.useEffect)((function(){f.a.get();var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(i.useEffect)((function(){f.a.get()}),[]);var h=Object(m.g)().id,O=e.shoes.find((function(e){return e.id==h})),u=Object(m.f)();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(k,{children:Object(c.jsx)(y,{className:"red",children:"Detail"})}),d,Object(c.jsx)("input",{onChange:function(e){b(e.target.value)}}),!0===a?Object(c.jsx)("div",{className:"my-alert2",id:"my-alert2",children:Object(c.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \uc548\ub0a8\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(O.id+1)+".jpg",width:"100%"})}),Object(c.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(c.jsx)("h4",{className:"pt-5",children:O.title}),Object(c.jsx)("p",{children:O.content}),Object(c.jsxs)("p",{children:[O.price,"\uc6d0"]}),e.\uc7ac\uace0[O.id],Object(c.jsx)(C,{"\uc7ac\uace0":e.\uc7ac\uace0,"\uc0c1\ud488id":O.id}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(j.a)(e.\uc7ac\uace0);t[O.id]=t[O.id]-1,e.\uc7ac\uace0\ubcc0\uacbd(t)},children:"\uc8fc\ubb38\ud558\uae30"})," \xa0",Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){u.goBack()},children:"\ub4a4\ub85c\uac00\uae30"}),"   \xa0",Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){u.push("/asdf")},children:"/\uac00\uae30"})]})]})]})},B=n(21);function F(e){return Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)(B.b,{to:"/detail/"+e.i,children:Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"})}),Object(c.jsx)("h4",{children:e.shoes.title}),Object(c.jsxs)("p",{children:[e.shoes.content,"  &  ",e.shoes.price]})]})}function I(){return Object(c.jsxs)(h.a,{className:"background",children:[Object(c.jsx)("h1",{children:"20% Season OFF"}),Object(c.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{variant:"primary",children:"Learn more"})})]})}var T=function(){var e=Object(i.useState)(u),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)([10,11,12]),r=Object(o.a)(s,2),h=r[0],O=r[1],x=Object(i.useState)(!1),p=Object(o.a)(x,2),g=p[0],v=p[1],N=Object(i.useState)(0),S=Object(o.a)(N,2),k=S[0],y=S[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(c.jsx)(l.a.Brand,{href:"/",children:"ShoeShop"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(d.a,{className:"mr-auto",children:[Object(c.jsx)(d.a.Link,{as:B.b,to:"/",children:"Home "}),Object(c.jsx)(d.a.Link,{as:B.b,to:"/detail",children:"Detail "}),Object(c.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(c.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(c.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(c.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(b.a.Divider,{}),Object(c.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(c.jsxs)(m.c,{children:[Object(c.jsxs)(m.a,{exact:!0,path:"/",children:[Object(c.jsx)(I,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)(F,{shoes:n[t],i:t},t)}))}),!0===g?Object(c.jsx)("div",{className:"my-alert2",id:"my-alert2",children:Object(c.jsx)("p",{children:"\ub85c\ub529\uc911..."})}):null,Object(c.jsxs)("button",{className:"btn btn-primary",onClick:function(){y(k+1),v(!0),f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){v(!1),console.log(e.data),a([].concat(Object(j.a)(n),Object(j.a)(e.data))),n.map((function(e,t){return Object(c.jsx)(F,{shoes:n[t],i:t},t)}))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:["\ub354\ubcf4\uae30 ",k]})]})]}),Object(c.jsx)(m.a,{path:"/detail/:id",children:Object(c.jsx)(w,{shoes:n,"\uc7ac\uace0":h,"\uc7ac\uace0\ubcc0\uacbd":O})}),Object(c.jsx)(m.a,{path:"/:id",children:Object(c.jsx)("div",{children:"\uc544\ubb34\uac70\ub098"})})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(B.a,{children:Object(c.jsx)(T,{})})}),document.getElementById("root")),D()}},[[94,1,2]]]);
//# sourceMappingURL=main.e0017c99.chunk.js.map