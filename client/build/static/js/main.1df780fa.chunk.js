(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),l=(n(29),n(30),n(31),n(16)),o=n(2),i=n(4),u=n.n(i),d=n(10),j=n(5);n(20);function b(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(j.a)(c,2),l=s[0],o=s[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c,s,l,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:"GET",a=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{},r(!0),e.prev=4,c["Content-Type"]="application/json",a&&(a=JSON.stringify(a),c["Content-Type"]="application/json"),"GET"!=n){e.next=13;break}return e.next=10,fetch(t,{method:n,headers:c});case 10:s=e.sent,e.next=16;break;case 13:return e.next=15,fetch(t,{method:n,body:a,headers:c});case 15:s=e.sent;case 16:return e.next=18,s.json();case 18:if(l=e.sent,s.ok){e.next=21;break}throw new Error(l.message||"\u0422\u0440\u0430\u0431\u043b \u0432 \u0445\u0443\u043a\u0435");case 21:return r(!1),e.abrupt("return",l);case 25:throw e.prev=25,e.t0=e.catch(4),r(!1),o(e.t0.message),e.t0;case 30:case"end":return e.stop()}}),e,null,[[4,25]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l}}var m=Object(a.createContext)({token:null,userid:null,login:function(){},logout:function(){},isAuth:!1,isBanned:!1,userEmail:null}),h=n(0),O=["Id","Name","Email","isBanned","Registration Date","Last Login Date"];function p(){var e=b().request,t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useContext)(m),l=Object(a.useState)([]),o=Object(j.a)(l,2),i=o[0],p=o[1],x=new Array,f=Object(a.useState)(null),g=Object(j.a)(f,2),v=(g[0],g[1],Object(a.useEffect)((function(){if(v(),r)s.logout();else try{var t=function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/auth/getDbData","GET");case 2:return n=t.sent,console.log(i),p(n),console.log(i),x=n,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();return p(x),console.log(i),t}catch(n){console.log(n.message)}}),[]),function(){console.log(s.userId),function(){var t=Object(d.a)(u.a.mark((function t(){var n,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/auth/can/"+s.userId,"GET");case 2:n=t.sent,localStorage.setItem("inBan",JSON.stringify({inBan:n.message})),a=JSON.parse(localStorage.getItem("inBan")),r=a.inBan,c(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),N=function(){var t=Object(d.a)(u.a.mark((function t(n,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a?"/api/auth/update/"+n+"/ban":"/api/auth/update/"+n+"/unban",t.next=3,e(r,"PUT");case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/api/auth/delete/"+n,t.next=3,e(a,"DELETE");case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=Object(a.useState)(!1),S=Object(j.a)(k,2),y=S[0],I=S[1];return Object(h.jsxs)("div",{children:[console.log(i),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-1"}),Object(h.jsx)("div",{className:"col-1",children:Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){return v(),void(r?s.logout():p(i.map((function(e){if(e){if(!e.isSelected)return e;w(e.email).then((function(e){return console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0434\u0430\u043b\u0451\u043d")})),e._id==s.userId&&s.logout()}}))))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}),Object(h.jsx)("div",{className:"col-2"}),Object(h.jsx)("div",{className:"col-1",children:Object(h.jsx)("button",{className:"btn btn-warning",onClick:function(){return v(),void(r?s.logout():p(i.map((function(e){if(e)return e.isSelected&&(e.isBanned=!1,N(e.email,!1).then((function(e){return console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")}))),e}))))},children:"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(h.jsx)("div",{className:"col-2"}),Object(h.jsx)("div",{className:"col-1",children:Object(h.jsx)("button",{className:"btn btn-dark",onClick:function(){return v(),void(r?s.logout():p(i.map((function(e){if(e)return e.isSelected&&(e._id==s.userId&&(console.log("ban yourself"),s.logout()),e.isBanned=!0,N(e.email,!0).then((function(e){return console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d")}))),e}))))},children:"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(h.jsx)("div",{className:"col-2"}),Object(h.jsx)("div",{className:"col-1",children:Object(h.jsx)("button",{className:"btn btn-dark",onClick:function(){return s.login()},children:"SignOut"})})]}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",checked:y,onChange:function(){return v(),void(r?s.logout():(I(!y),p(i.map((function(e){return e&&!y?e.isSelected=!0:e&&y&&(e.isSelected=!1),e})))))}})}),O.map((function(e){return Object(h.jsx)("th",{children:e})}))]})}),Object(h.jsx)("tbody",{children:i.map((function(e){if(e)return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"checkbox",checked:e.isSelected,onChange:function(){return t=e,v(),void(r?s.logout():p(i.map((function(e){return e==t&&(e.isSelected=!e.isSelected),e}))));var t}})}),Object(h.jsx)("td",{children:e._id}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:(t=e.isBanned,t?"true":"false")}),Object(h.jsx)("td",{children:e.registrationDate}),Object(h.jsx)("td",{children:e.lastLoginDate})]});var t}))})]})})]})}var x=n(6),f=n(13);function g(e){var t,n,r,c,s,l=Object(a.useContext)(m),o=b(),i=o.loading,O=o.request,p=Object(a.useState)({email:"",password:"",name:""}),g=Object(j.a)(p,2),v=g[0],N=g[1],w=function(e){N(Object(f.a)(Object(f.a)({},v),{},Object(x.a)({},e.target.name,e.target.value))),console.log(v)},k=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(f.a)({},v),n=t.email,a=t.password,r=t.name,e.next=4,O("/api/auth/register","POST",{email:n,password:a,name:r},{});case 4:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0437\u0434\u0430\u043d"==(c=e.sent).message&&(console.log("Hi"),l.login(c.token,c.userId,c.isBanned,c.userEmail)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(f.a)({},v),n=t.email,a=t.password,e.next=4,O("/api/auth/login","POST",{email:n,password:a},{});case 4:r=e.sent,l.login(r.token,r.userId,r.isBanned,r.userEmail),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"background blue",children:Object(h.jsxs)("div",{className:"container row mt-5",children:[Object(h.jsx)("div",{className:"col-5 card",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h2",{className:"card-title",children:"LogIn"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",(t={htmlFor:"InputEmail"},Object(x.a)(t,"htmlFor","email"),Object(x.a)(t,"children","Email"),t)),Object(h.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",name:"email",onChange:w}),Object(h.jsx)("small",{id:"emailHelper",className:"form-text text-muted",children:"You should enter your email in this row"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",(n={htmlFor:"InputPassword"},Object(x.a)(n,"htmlFor","password"),Object(x.a)(n,"children","Password"),n)),Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter password",name:"password",onChange:w}),Object(h.jsx)("small",{id:"passwordHelper",className:"form-text text-muted",children:"You should enter your password in this row"})]})]}),Object(h.jsx)("div",{className:"card-footer",children:Object(h.jsx)("button",{className:"btn btn-primary",disabled:i,onClick:S,children:"\u0412\u043e\u0439\u0442\u0438"})})]})}),Object(h.jsx)("div",{className:"col-2",children:" "}),Object(h.jsx)("div",{className:"col-5 card",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h2",{className:"card-title",children:"Register"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",(r={htmlFor:"InputEmail"},Object(x.a)(r,"htmlFor","email"),Object(x.a)(r,"children","Email"),r)),Object(h.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",name:"email",onChange:w}),Object(h.jsx)("small",{id:"emailHelper",className:"form-text text-muted",children:"You should enter your email in this row"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",(c={htmlFor:"InputName"},Object(x.a)(c,"htmlFor","name"),Object(x.a)(c,"children","Name"),c)),Object(h.jsx)("input",{type:"text",className:"form-control",id:"text",placeholder:"Enter your name",name:"name",onChange:w}),Object(h.jsx)("small",{id:"emailHelper",className:"form-text text-muted",children:"You should enter your email in this row"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",(s={htmlFor:"InputPassword"},Object(x.a)(s,"htmlFor","password"),Object(x.a)(s,"children","Password"),s)),Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter password",name:"password",onChange:w}),Object(h.jsx)("small",{id:"passwordHelper",className:"form-text text-muted",children:"You should enter your password in this row"})]})]}),Object(h.jsx)("div",{className:"card-footer",children:Object(h.jsx)("button",{className:"btn btn-primary",disabled:i,onClick:k,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})})]})})}function v(e){return e?Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{exact:!0,path:"/table",children:Object(h.jsx)(p,{})}),Object(h.jsx)(o.a,{to:"/table"})]})})}):Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{exact:!0,path:"/",children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{to:"/"})]})})})}var N=function(){var e=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(j.a)(c,2),l=s[0],o=s[1],i=Object(a.useState)(!1),u=Object(j.a)(i,2),d=u[0],b=u[1],m=Object(a.useState)(null),h=Object(j.a)(m,2),O=(h[0],h[1]),p=Object(a.useCallback)((function(e,t,n,a){r(e),o(t),b(n),O(a),n||(localStorage.setItem("userData",JSON.stringify({userId:t,token:e,isBanned:n,userEmail:a})),localStorage.setItem("inBan",JSON.stringify({inBan:n})))}),[]),x=Object(a.useCallback)((function(){o(null),r(null),b(!1),localStorage.removeItem("userData"),localStorage.removeItem("inBan")}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&!e.isBanned&&p(e.token,e.userId,e.isBanned,e.userEmail)}),[p]),{token:n,userId:l,login:p,logout:x,ban:d}}(),t=e.token,n=e.login,r=e.logout,c=e.userId,s=e.ban,l=!!t&&!s;return document.title="UserDbTable",Object(h.jsx)(m.Provider,{value:{login:n,logout:r,userId:c,token:t,isAuth:l,ban:s},children:Object(h.jsx)("div",{className:"container",children:v(l)})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.1df780fa.chunk.js.map