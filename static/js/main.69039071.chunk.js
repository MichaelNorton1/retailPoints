(this.webpackJsonppoints=this.webpackJsonppoints||[]).push([[0],[,,,,,,,,,,function(t,n,e){},function(t,n,e){},,function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var a=e(1),c=e.n(a),o=e(3),s=e.n(o),i=(e(10),e(2)),r=(e(11),e(5)),d=e.n(r),u=function(t){var n=d()().subtract(3,"months");return t.transactions.filter((function(t){return new Date(t.date)>n._d}))},m=function(t){var n=[];for(var e in t)n.push({name:t[e].name,id:e,data:t[e]});return n},l={transactions:[{name:"John",id:1,date:"2021-11-21",amountSpent:120},{name:"John",id:1,date:"2021-8-21",amountSpent:42},{name:"John",id:1,date:"2021-10-21",amountSpent:190},{name:"Mark",id:2,date:"2020-10-12",amountSpent:100},{name:"Mark",id:2,date:"2021-9-21",amountSpent:100},{name:"Mark",id:2,date:"2021-11-4",amountSpent:111},{name:"Macy",id:3,date:"2021-11-8",amountSpent:75},{name:"Macy",id:3,date:"2021-11-10",amountSpent:32},{name:"Macy",id:3,date:"2021-03-21",amountSpent:175},{name:"Macy",id:3,date:"2021-11-11",amountSpent:12},{name:"Macy",id:3,date:"2021-11-04",amountSpent:64},{name:"Eric",id:4,date:"2021-12-01",amountSpent:56},{name:"Eric",id:4,date:"2021-12-2",amountSpent:48},{name:"Eric",id:4,date:"2021-8-21",amountSpent:120},{name:"Dave",id:5,date:"2021-9-21",amountSpent:125.33},{name:"Dave",id:5,date:"2021-9-31",amountSpent:48},{name:"Dave",id:5,date:"2021-11-20",amountSpent:63},{name:"Dave",id:5,date:"2021-11-26",amountSpent:72},{name:"Ben",id:6,date:"2021-10-31",amountSpent:24},{name:"Ben",id:6,date:"2021-09-17",amountSpent:72},{name:"Ben",id:6,date:"2021-11-21",amountSpent:15},{name:"Sam",id:7,date:"2021-09-10",amountSpent:120}]},j=function(t){var n=0;if(t>50&&t<100)n+=t-50;else{if(!(t>100))return 0;n=2*(t-100)+50}return Math.floor(n)},h=function(t){var n=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];t.forEach((function(t){t.points=j(t.amountSpent)}));var e={};return t.forEach((function(t){var a=t.date.split("-")[1],c=t.id;void 0!==e[c]?(e[c].transactions.push({month:n[a-1],points:t.points}),e[c].totalPoints+=t.points,e[c].total.push(t)):e[t.id]={name:t.name,totalPoints:t.points,transactions:[{month:n[a-1],points:t.points}],total:[t]}})),e},b=(e(13),e(0)),p=function(t){var n={};return t.data.transactions.forEach((function(t){void 0===n[t.month]?n[t.month]=t.points:n[t.month]+=t.points})),Object.keys(n).map((function(t,e){return console.log(t),Object(b.jsx)("div",{style:{border:"1px solid",margin:"3px",padding:"2px"},children:"".concat(t,": ").concat(n[t]," points")})}))},f=function(t){var n=t.transactionHistory,e=t.style,a=t.setStyle;if("hidden"===e)return null;var c=p(n);return Object(o.createPortal)(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"back"}),Object(b.jsx)("div",{className:e,children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h4",{className:"title",children:n.name})}),Object(b.jsxs)("div",{className:"body",children:["Months: ",c]}),Object(b.jsx)("h3",{children:"All Transactions"}),n.data.total.map((function(t,n){return Object(b.jsx)("div",{className:"body",children:"Amount: $".concat(t.amountSpent,",  Day: ").concat(t.date,", Points: ").concat(t.points)},n)})),Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("button",{className:"button ",onClick:function(){a("hidden")},children:"Close"})})]})})]}),document.getElementById("portal"))},O=(e(15),function(t){var n=t.customers,e=Object(a.useState)(null),c=Object(i.a)(e,2),o=c[0],s=c[1],r=Object(a.useState)("hidden"),d=Object(i.a)(r,2),u=d[0],m=d[1];return Object(b.jsxs)("tbody",{children:[Object(b.jsx)(f,{setStyle:m,style:u,transactionHistory:o}),n.map((function(t){return Object(b.jsxs)("tr",{className:"rows",children:[Object(b.jsx)("td",{className:"rows",children:t.name}),Object(b.jsxs)("td",{className:"rows",children:[t.data.transactions.length," ","  ",Object(b.jsx)("button",{onClick:function(){return function(t){s(t),m("modal")}(t)},children:" Show All "})]}),Object(b.jsx)("td",{className:"rows show",children:t.data.totalPoints})]},t.id)}))]})}),x=(e(16),function(t){var n=t.customers;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"columns",children:"Name"}),Object(b.jsx)("th",{className:"columns",children:"Number of Transactions"}),Object(b.jsx)("th",{className:"columns",children:" Total Points"})]})}),Object(b.jsx)(O,{customers:n})]})," "]})}),S=function(t){return new Promise((function(n,e){n(t)}))};var v=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1];return Object(a.useEffect)((function(){S(l).then((function(t){return u(t)})).then((function(t){return h(t)})).then((function(t){var n=m(t);c(n)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{textAlign:"left"},children:"Retail Points"}),Object(b.jsx)(x,{className:"top",customers:e})]})},y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;e(t),a(t),c(t),o(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}],[[17,1,2]]]);
//# sourceMappingURL=main.69039071.chunk.js.map