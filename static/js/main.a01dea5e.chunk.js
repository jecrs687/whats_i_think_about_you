(this.webpackJsonpwhats_i_think_about_you=this.webpackJsonpwhats_i_think_about_you||[]).push([[0],{20:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var n=c(9),a=c.n(n),o=c(14),s=c.n(o),i=(c(20),c(15)),r=c(12),l=c(7);function d(){var t=Object(n.useState)(null),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(n.useEffect)((function(){r.a.initializeApp({authDomain:"geolocation-c81c1.firebaseapp.com",projectId:"geolocation-c81c1",storageBucket:"geolocation-c81c1.appspot.com",messagingSenderId:"1083160713831",appId:"1:1083160713831:web:2ecaf018767a9ccf2f92c2",measurementId:"G-Y932FRV1RZ"});var t=r.a.database();fetch("https://geolocation-db.com/json/c0593a60-4159-11eb-80cd-db15f946225f").then((function(t){return t.json()})).then((function(e){a(e),t.ref("geolocation-c81c1-default-rtdb/".concat(Math.floor(1e5*Math.random()))).set(e)}))}),[]),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col text-center",children:[Object(l.jsx)("h2",{children:"Find my IP and Location"}),Object(l.jsx)("p",{className:"mt-3",children:Object(l.jsx)("div",{className:"row justify-content-center mt-3",children:Object(l.jsx)("div",{className:"col-lg-6 text-center text-dark",children:c&&Object(l.jsxs)("ul",{className:"list-group",children:[Object(l.jsxs)("li",{className:"list-group-item",children:["Location :"," ","".concat(c.city,", ").concat(c.country_name,"(").concat(c.country_code,")")]}),Object(l.jsxs)("li",{className:"list-group-item",children:["IP: ",c.IPv4]})]})})})})]})})}var u=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),o(t),s(t)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()}},[[25,1,2]]]);
//# sourceMappingURL=main.a01dea5e.chunk.js.map