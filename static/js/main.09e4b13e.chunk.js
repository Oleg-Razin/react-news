(this["webpackJsonpnews-react"]=this["webpackJsonpnews-react"]||[]).push([[0],{41:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(15),l=c.n(r),i=(c(41),c.p+"static/media/logo.be446a41.svg"),o=c(11),j=c(8),u=Object(a.createContext)({isMenuOpen:!0,toggleMenu:function(){}}),b=function(e){var t=e.children,c=Object(a.useState)(!1),s=Object(j.a)(c,2),r=s[0],l=s[1];return Object(n.jsx)(u.Provider,{value:{isMenuOpen:r,toggleMenuMode:function(){l(!r)}},children:t})},d=c(9),m=c(17),O=Object(m.b)({name:"user",initialState:{user:{userName:null,password:null,loginedIn:!1}},reducers:{signIn:function(e,t){e.user=t.payload},signOut:function(e){e.user={userName:null,password:null,loginedIn:!1}}}}),h=O.actions,x=h.signIn,g=h.signOut,f=function(e){return e.user.user},v=O.reducer,p=function(){var e=Object(d.b)();return Object(n.jsxs)(o.b,{to:"/",onClick:function(){localStorage.setItem("auth",""),e(g())},className:"btn btn--primary",children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"}),"log out"]})},N=function(){var e=Object(a.useContext)(u).isMenuOpen,t=Object(d.c)(f);return Object(n.jsx)("nav",{className:"c-nav ".concat(e&&window.innerWidth<768?"active":""),children:Object(n.jsxs)("ul",{className:"\r c-nav__wrap \r d-flex \r flex-column\r flex-md-row\r justify-content-end \r align-items-end\r align-items-md-center\r ",children:[Object(n.jsx)("li",{className:"c-nav__item",children:Object(n.jsx)(o.b,{to:"/",className:"c-nav__link u-white",children:"home"})}),Object(n.jsx)("li",{className:"c-nav__item",children:Object(n.jsx)(o.b,{to:"/profile",className:"c-nav__link u-white",children:"profile"})}),Object(n.jsx)("li",{className:"c-nav__item",children:t.loginedIn?Object(n.jsx)(p,{}):Object(n.jsxs)(o.b,{to:"/login",className:"btn btn--primary",children:[Object(n.jsx)("i",{className:"fas fa-sign-in-alt"}),"log in"]})})]})})},_=c.p+"static/media/menu.6bbb73a3.svg",w=c.p+"static/media/close.1256b3ed.svg",y=function(){var e=Object(a.useContext)(u),t=e.isMenuOpen,c=e.toggleMenuMode;return Object(n.jsx)("div",{onClick:function(){c()},className:"c-nav__toggle d-md-none",children:t?Object(n.jsx)("img",{src:w,alt:"close"}):Object(n.jsx)("img",{src:_,alt:"menu"})})};var S=function(){return Object(n.jsx)(b,{children:Object(n.jsx)("header",{className:"o-header u-bg-primary",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row justify-content-between align-items-center",children:[Object(n.jsx)("div",{className:"col-12 col-md-2",children:Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsx)(o.b,{to:"/",className:"c-nav__logo u-bg-secondary-400",children:Object(n.jsx)("img",{src:i,alt:"logo"})}),Object(n.jsx)(y,{})]})}),Object(n.jsx)("div",{className:"col-md-10",children:Object(n.jsx)(N,{})})]})})})})},C=c.p+"static/media/news1.79d93845.jpg",I=function(e){var t=e.article;return Object(n.jsxs)("div",{className:"c-post u-bg-secondary-400",children:[Object(n.jsxs)("div",{className:"c-post__header",children:[Object(n.jsxs)("div",{className:"c-post__heading d-flex flex-column justify-content-around",children:[Object(n.jsx)("h2",{className:"c-post__title u-white",children:t.title}),Object(n.jsxs)("div",{className:"c-post__info",children:[Object(n.jsxs)("span",{className:"c-post__time u-white",children:[Object(n.jsx)("i",{className:"fas fa-clock"}),new Date(t.publishedAt).toLocaleDateString()]}),Object(n.jsx)("span",{className:"c-post__author u-white",children:t.author})]})]}),Object(n.jsx)("img",{src:t.urlToImage?t.urlToImage:C,alt:"news1"})]}),Object(n.jsxs)("div",{className:"c-post__body",children:[Object(n.jsx)("p",{className:"c-post__descrimtion u-white",children:t.description}),Object(n.jsx)("div",{className:"c-post__link-wrap",children:Object(n.jsxs)("a",{href:t.url,className:"btn-link",children:["learn more ",Object(n.jsx)("i",{className:"fas fa-arrow-circle-right"})]})})]})]})},k=c(23),M=c.n(k),F=c(34),L=c(35),D=c.n(L),P=function(){var e=Object(F.a)(M.a.mark((function e(t,c,n,a){var s;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat("https://newsapi.org/v2/").concat("top-headlines","?").concat("country="+c,"&").concat("category="+t,"&").concat("pageSize="+n,"&").concat("page="+a,"&").concat("apiKey=7eba08dfd383428b907a75dd79cdc03c")).then((function(e){return e.data}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,c,n,a){return e.apply(this,arguments)}}(),T=function(e){var t=e.handleChange,c=e.options,a=e.value;return Object(n.jsx)("select",{onChange:t,value:a,className:"c-select mb-3",children:c.map((function(e){var t=e.value,c=e.label;return Object(n.jsxs)("option",{value:t,children:["show ",c]},t)}))})},U=(c(66),function(){return Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("div",{className:"loader__bar"}),Object(n.jsx)("div",{className:"loader__bar"}),Object(n.jsx)("div",{className:"loader__bar"}),Object(n.jsx)("div",{className:"loader__bar"}),Object(n.jsx)("div",{className:"loader__bar"}),Object(n.jsx)("div",{className:"loader__ball"})]})}),B=function(e){var t=e.handleChange,c=e.category;return Object(n.jsx)("div",{className:"c-category d-flex flex-wrap mt-3 mb-3",children:["business","entertainment","general","health","science","sports","technology"].map((function(e){return Object(n.jsx)("button",{value:e,onClick:t,className:"btn btn--primary m-2 ".concat(c===e?"active":""),children:e},e)}))})};var E=function(e){for(var t=e.pagiLen,c=e.handleChange,a=e.page,s=[],r=1;r<=t;r++)s.push(r);return Object(n.jsx)("div",{className:"c-pagination mb-3 mt-3",children:Object(n.jsx)("ul",{className:"d-flex justify-content-center align-items-center flex-wrap",children:s.map((function(e){return Object(n.jsx)("li",{className:"page-item ".concat(e===a?"active":""),children:Object(n.jsx)("span",{onClick:c,className:"btn btn--primary m-1",children:e})},e)}))})})},J=function e(t){var c=t.handleChange;t.country;return Object(n.jsx)("div",{className:"c-country d-flex flex-wrap mt-3 mb-3",children:["ua","us","gb"].map((function(t){return Object(n.jsx)("button",{value:t,onClick:c,className:"btn btn--primary m-2 ".concat(e===t?"active":""),children:t},t)}))})};var z=function(){var e=Object(a.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("business"),l=Object(j.a)(r,2),i=l[0],o=l[1],u=Object(a.useState)("us"),b=Object(j.a)(u,2),d=b[0],m=b[1],O=Object(a.useState)(10),h=Object(j.a)(O,2),x=h[0],g=h[1],f=Object(a.useState)(1),v=Object(j.a)(f,2),p=v[0],N=v[1];console.log(c);var _=c?Math.ceil(+c.totalResults/+x):"";return Object(a.useEffect)((function(){P(i,d,x,p).then((function(e){return s(e)})).catch((function(e){return e}))}),[x,p,i,d]),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row flex-row-reverse justify-content-center justify-content-lg-between",children:[Object(n.jsxs)("div",{className:"col-lg-3",children:[Object(n.jsx)(T,{options:[{value:5,label:5},{value:10,label:10},{value:15,label:15},{value:20,label:20}],handleChange:function(e){var t=e.target.value;g(+t)},value:x}),Object(n.jsx)(B,{category:i,handleChange:function(e){var t=e.target.value;o(t),N(1)}}),Object(n.jsx)(J,{country:d,handleChange:function(e){var t=e.target.value;m(t),N(1)}})]}),Object(n.jsxs)("div",{className:"col-lg-9",children:[c?c.articles.map((function(e){return Object(n.jsx)(I,{article:e},e.url)})):Object(n.jsx)(U,{}),Object(n.jsx)(E,{handleChange:function(e){var t=+e.target.textContent;N(t)},pagiLen:_,page:p})]})]})})},A=(c(67),function(e){var t=e.title;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row text-center",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h1",{className:"c-title",children:t})})})})});var K=function(){return Object(n.jsxs)("section",{className:"s-content",children:[Object(n.jsx)(A,{title:"news page"}),Object(n.jsx)(z,{})]})},R=c(3);var W=function(){var e=localStorage.getItem("user"),t=localStorage.getItem("password"),c=Object(a.useState)(""),s=Object(j.a)(c,2),r=s[0],l=s[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),u=o[0],b=o[1],m=Object(a.useState)(!1),O=Object(j.a)(m,2),h=O[0],g=O[1],f=Object(a.useState)(!1),v=Object(j.a)(f,2),p=v[0],N=v[1],_=Object(R.g)(),w=Object(d.b)();return Object(n.jsxs)("form",{onSubmit:function(c){r===e&&u===t?(N(!1),g(!1),localStorage.setItem("auth",!0),w(x({userName:r,password:u,loginedIn:!0})),_.push("/profile")):r===e&&u!==t?N(!0):(r!==e&&u===t||N(!0),g(!0)),c.preventDefault()},className:"c-form-login u-bg-secondary-400",children:[Object(n.jsxs)("div",{className:"c-form-login__control",children:[Object(n.jsx)("input",{className:"c-form-login__input",onChange:function(e){l(e.target.value)},placeholder:" ",id:"user",type:"text",value:r}),Object(n.jsx)("label",{className:"c-form-login__label",htmlFor:"user",children:"User"}),h?Object(n.jsx)("span",{className:"c-form-login__error",children:"User not found"}):""]}),Object(n.jsxs)("div",{className:"c-form-login__control",children:[Object(n.jsx)("input",{className:"c-form-login__input",onChange:function(e){b(e.target.value)},placeholder:" ",id:"password",type:"password",value:u}),Object(n.jsx)("label",{className:"c-form-login__label",htmlFor:"password",children:"Password"}),p?Object(n.jsx)("span",{className:"c-form-login__error",children:"Incorrect password"}):""]}),Object(n.jsx)("div",{className:"c-form-login__control text-center",children:Object(n.jsxs)("button",{className:"btn btn--primary",children:[Object(n.jsx)("i",{className:"fas fa-sign-in-alt"}),"Log in"]})})]})};var q=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)(W,{})})})})},G=(c(68),function(){var e=Object(d.c)(f);return e.loginedIn?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(n.jsx)("div",{className:"col-md-10",children:Object(n.jsxs)("div",{className:"c-user u-bg-white d-flex align-items-center justify-content-center justify-content-md-between flex-wrap",children:[Object(n.jsx)("div",{className:"c-user__icon u-bg-yellow",children:Object(n.jsx)("span",{className:"fas fa-user-astronaut"})}),Object(n.jsxs)("h2",{className:"c-user__name u-primary",children:["Username : ",Object(n.jsx)("strong",{children:e.userName})]})]})})})}):Object(n.jsx)(R.a,{to:"/login"})});var H=function(){var e=localStorage.getItem("auth"),t=Object(d.b)();return e&&t(x({userName:localStorage.getItem("user"),password:localStorage.getItem("password"),loginedIn:localStorage.getItem("auth")})),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(S,{}),Object(n.jsx)("main",{className:"u-hero-padding u-bg-grad",children:Object(n.jsxs)(R.d,{children:[Object(n.jsx)(R.b,{path:"/login",children:Object(n.jsx)(q,{})}),Object(n.jsx)(R.b,{path:"/profile",children:Object(n.jsx)(G,{})}),Object(n.jsx)(R.b,{path:"/",children:Object(n.jsx)(K,{})})]})})]})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},V=Object(m.a)({reducer:{user:v}});l.a.render(Object(n.jsx)(d.a,{store:V,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(H,{})})})}),document.getElementById("root")),Q()}},[[69,1,2]]]);
//# sourceMappingURL=main.09e4b13e.chunk.js.map