(this.webpackJsonpcalc_note=this.webpackJsonpcalc_note||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"tasks":[{"id":0,"title":"\u041f\u043e\u043a\u0443\u043f\u043a\u0438","done":true},{"id":1,"title":"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434","done":false},{"id":2,"title":"\u0424\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b","done":false},{"id":3,"title":"jkjk","done":true}],"list":[{"id":0,"title":"Notes","to":"/notes"},{"id":1,"title":"Calc","to":"/calc"}]}')},22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(18),r=n.n(c),o=(n(27),n(15)),i=n(11),s=l.a.createContext(),u=function(e){var t=e.task,n=Object(a.useContext)(s),c=n.deleteTask,r=n.doneTask;return l.a.createElement("div",{className:"action-btn"},t.done?l.a.createElement("p",{onClick:function(){return c(t.id)}},l.a.createElement("svg",{width:"14",height:"14",fill:"#FF1317",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 371.23 371.23"},l.a.createElement("polygon",{points:"371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "}))):l.a.createElement("p",{onClick:function(){return r(t.id)}},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#25AD39",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))))},m=function(e){var t=e.task,n="task "+(t.done?"task-done":"");return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"tasks"},l.a.createElement("p",null,t.title),l.a.createElement("small",null,t.date)),l.a.createElement(u,{task:t}))},d=function(){var e=Object(a.useContext)(s).addTask,t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],o=function(){c&&e(c),r(c),r("")};return l.a.createElement("div",{className:"task-input"},l.a.createElement("input",{onKeyPress:function(e){"Enter"===e.key&&o()},onChange:function(e){return r(e.target.value)},value:c,type:"text"}),l.a.createElement("button",{onClick:o},"ADD"))},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("value")||[];c(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("value",JSON.stringify(n))}),[n]);var r=n.filter((function(e){return!e.done})).length;return l.a.createElement(s.Provider,{value:{deleteTask:function(e){c(n.filter((function(t){return t.id!==e})))},addTask:function(e){var t=[].concat(Object(o.a)(n),[{id:n.length,date:(new Date).toLocaleDateString(),title:e,done:!1}]);c(t)},doneTask:function(e){n.map((function(t){e===t.id?t.done=!0:n.done=!1})),c(Object(o.a)(n))}}},l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"top"},"Active tasks: ",r),n.map((function(e,t){if(!e.done)return l.a.createElement(m,{key:e.id,task:e})})),n.map((function(e){if(e.done)return l.a.createElement(m,{key:e.id,task:e})})),l.a.createElement(d,null)))},E=n(10),p=n(5),k=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),"\u041f\u043e\u043a\u0430 \u0434\u043e\u0434\u0435\u043b\u044b\u0432\u0430\u044e \u0421\u043f\u0438c\u043e\u043a \u0437\u0430\u0434\u0430\u0447")},v=(n(28),n(19)),g=function(){var e=v.list;return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",null,"Calc&Notes"),l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(E.b,{to:e.to},e.title))}))))},h=function(){return l.a.createElement(E.a,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/notes",component:f}),l.a.createElement(p.a,{path:"/calc",component:k}),l.a.createElement(p.a,null))))};r.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7917a89a.chunk.js.map