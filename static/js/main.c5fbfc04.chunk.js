(this.webpackJsonpcalc_note=this.webpackJsonpcalc_note||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"tasks":[{"id":0,"title":"\u041f\u043e\u043a\u0443\u043f\u043a\u0438","done":true},{"id":1,"title":"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434","done":false},{"id":2,"title":"\u0424\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b","done":false},{"id":3,"title":"jkjk","done":true}],"list":[{"id":0,"title":"Notes","to":"/notes"},{"id":1,"title":"Calc","to":"/calc"}]}')},45:function(e,t,a){e.exports=a(78)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),l=a.n(r),o=(a(50),Object(n.createContext)()),i=function(e){var t=e.task,a=Object(n.useContext)(o);return c.a.createElement("div",{className:"action-btn"},t.done?c.a.createElement("p",{onClick:function(){return a.deleteTask(t.id)}},c.a.createElement("svg",{width:"14",height:"14",fill:"#FF1317",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 371.23 371.23"},c.a.createElement("polygon",{points:"371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "}))):c.a.createElement("p",{onClick:function(){return a.doneTask(t.id)}},c.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#25AD39",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))))},s=function(e){var t=e.task,a="task "+(t.done?"task-done":"");return c.a.createElement("div",{className:a},c.a.createElement("div",{className:"tasks"},c.a.createElement("p",null,t.title),c.a.createElement("small",null,t.date)),c.a.createElement(i,{task:t}))},u=a(14),d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(o),i=function(){a&&l.addTask(a),r(a),r("")};return c.a.createElement("div",{className:"task-input"},c.a.createElement("input",{onKeyPress:function(e){"Enter"===e.key&&i()},onChange:function(e){return r(e.target.value)},value:a,type:"text"}),c.a.createElement("button",{onClick:i},"ADD"))},m=c.a.createContext(),p=function(){var e=Object(n.useContext)(o),t=e.notes,a=e.fetchNotes;Object(n.useEffect)((function(){a()}),[]);var r=t.filter((function(e){return!e.done})).length;return c.a.createElement(m.Provider,{value:{}},c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"top"},"Active tasks: ",r),c.a.createElement(d,null),t.map((function(e){return e.done?null:c.a.createElement(s,{key:e.id,task:e})})),t.map((function(e){return e.done?c.a.createElement(s,{key:e.id,task:e}):null}))))},E=a(20),f=a(9),k=a(80),h=(a(51),a(52),function(e){return c.a.createElement("div",{onClick:function(){return e.handleClick(e.children)},className:"button ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null))},e.children);var t}),v=(a(53),function(e){var t=e.input;return c.a.createElement("div",{className:"input"},t)}),w=(a(54),function(e){return c.a.createElement("div",{className:"clear-btn",onClick:e.handleClear},e.children)}),C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=function(e){r(a+e)};return c.a.createElement("div",{className:"calc"},c.a.createElement("div",{className:"calc-wrapper"},c.a.createElement(v,{input:a}),c.a.createElement("div",{className:"calc-wrapper-row"},c.a.createElement(h,{handleClick:l},"7"),c.a.createElement(h,{handleClick:l},"8"),c.a.createElement(h,{handleClick:l},"9"),c.a.createElement(h,{handleClick:l},"/")),c.a.createElement("div",{className:"calc-wrapper-row"},c.a.createElement(h,{handleClick:l},"4"),c.a.createElement(h,{handleClick:l},"5"),c.a.createElement(h,{handleClick:l},"6"),c.a.createElement(h,{handleClick:l},"*")),c.a.createElement("div",{className:"calc-wrapper-row"},c.a.createElement(h,{handleClick:l},"1"),c.a.createElement(h,{handleClick:l},"2"),c.a.createElement(h,{handleClick:l},"3"),c.a.createElement(h,{handleClick:l},"+")),c.a.createElement("div",{className:"calc-wrapper-row"},c.a.createElement(h,{handleClick:l},"."),c.a.createElement(h,{handleClick:l},"0"),c.a.createElement(h,{handleClick:function(){r(k.a(a))}},"="),c.a.createElement(h,{handleClick:l},"-")),c.a.createElement("div",{className:"calc-wrapper-row"},c.a.createElement(w,{handleClear:function(){return r("")}},"Clear"))))},b=(a(55),a(41)),j=function(){var e=b.list;return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",null,"Calc&Notes"),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(E.b,{to:e.to},e.title))}))))},N=a(8),O=a.n(N),y=a(10),x=a(18),T=a(15),g=a.n(T),D=a(26),A=function(e,t){switch(t.type){case"ADD_TASK":return Object(y.a)({},e,{notes:[].concat(Object(D.a)(e.notes),[t.payload])});case"DONE_TASK":return Object(y.a)({},e,{done:[].concat(Object(D.a)(e.notes),[e.notes.map((function(e){return e.id===t.payload?e.done=!0:e.done}))])});case"DELETE_TASK":return Object(y.a)({},e,{notes:e.notes.filter((function(e){return e.id!==t.payload}))});case"FETCH_NOTES":return Object(y.a)({},e,{notes:t.payload});default:return e}},S=function(e){var t=e.children,a="https://notesapp-f8e3d.firebaseio.com",r=Object(n.useReducer)(A,{notes:[]}),l=Object(u.a)(r,2),i=l[0],s=l[1],d=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(a,"/notes.json"));case 2:(t=e.sent).data&&(n=Object.keys(t.data).map((function(e){return Object(y.a)({},t.data[e],{id:e})})),s({type:"FETCH_NOTES",payload:n}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={date:(new Date).toLocaleDateString(),title:t,done:!1,id:new Date},e.next=3,g.a.post("".concat(a,"/notes.json"),n);case 3:c=e.sent,r=Object(y.a)({},n,{id:c.data.name}),s({type:"ADD_TASK",payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(a,"/notes/").concat(t,".json"));case 2:return(n=e.sent).data.done=!n.data.done,e.next=6,g.a.put("".concat(a,"/notes/").concat(t,".json"),n.data);case 6:s({type:"DONE_TASK",payload:t});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("".concat(a,"/notes/").concat(t,".json"));case 2:s({type:"DELETE_TASK",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(o.Provider,{value:{doneTask:p,deleteTask:E,addTask:m,fetchNotes:d,notes:i.notes}},t)},_=function(){return c.a.createElement(S,null,c.a.createElement(E.a,null,c.a.createElement(j,null),c.a.createElement("div",{className:"container"},c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/notes",component:p}),c.a.createElement(f.a,{path:"/calc",component:C})))))};l.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c5fbfc04.chunk.js.map