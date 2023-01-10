(this["webpackJsonpcurso-react-estado-2"]=this["webpackJsonpcurso-react-estado-2"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(19),a=n.n(c),i=n(13),l=n(3),s=n(7),u=n(4),d=n(6),j=n(9);function b(e,t){var n=r.a.useReducer(p,f({initialValue:t})),o=Object(u.a)(n,2),c=o[0],a=o[1],i=c.sincronizedItem,l=c.error,s=c.loading,d=c.item,j=function(e){return a({type:O.error,payload:e})};r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),function(e){a({type:O.success,payload:e})}(n)}catch(l){j(l)}}),3e3)}),[i]);return{item:d,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),function(e){a({type:O.save,payload:e})}(t)}catch(l){j(l)}},loading:s,error:l,sincronizeItem:function(){a({type:O.sincronize})}}}var f=function(e){return{sincronizedItem:!0,error:!1,loading:!0,item:e.initialValue}},O={error:"ERROR",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},p=function(e,t){return function(e,t){var n;return n={},Object(d.a)(n,O.error,Object(j.a)(Object(j.a)({},e),{},{error:!0})),Object(d.a)(n,O.success,Object(j.a)(Object(j.a)({},e),{},{error:!1,loading:!1,sincronizedItem:!0,item:t})),Object(d.a)(n,O.save,Object(j.a)(Object(j.a)({},e),{},{item:t})),Object(d.a)(n,O.sincronize,Object(j.a)(Object(j.a)({},e),{},{sincronizedItem:!1,loading:!0})),n}(e,t.payload)[t.type]||e};function m(){var e=b("TODOS_V2",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,a=e.error,i=r.a.useState(""),l=Object(u.a)(i,2),d=l[0],j=l[1],f=t.filter((function(e){return!!e.completed})).length,O=t.length,p=[];p=!d.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=d.toLowerCase();return t.includes(n)}));return{state:{loading:c,error:a,totalTodos:O,completedTodos:f,searchValue:d,searchedTodos:p,getTodo:function(e){var n=t.findIndex((function(t){return t.id===parseInt(e)}));return t[n]}},stateUpdaters:{setSearchValue:j,addTodo:function(e){var o=function(e){if(!e.length)return 1;var t=e.map((function(e){return e.id}));return Math.max(t)+1}(t),r=Object(s.a)(t);r.push({completed:!1,text:e,id:o}),n(r)},completeTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(s.a)(t);r[o].completed=!0,n(r)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(s.a)(t);r.splice(o,1),n(r)},editTodo:function(e,o){var r=t.findIndex((function(t){return t.id===parseInt(e)})),c=Object(s.a)(t);c[r].text=o,n(c)},sincronizeTodos:o}}}var h=n(1);function v(e){var t=e.children,n=e.loading;return Object(h.jsx)("header",{children:r.a.Children.toArray(t).map((function(e){return r.a.cloneElement(e,{loading:n})}))})}n(30);function x(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(h.jsxs)("h2",{className:"TodoCounter ".concat(!!o&&"TodoCounter--loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(31);function g(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(h.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:o})}n(32);function T(e){var t=e.children||e.render;return Object(h.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t)]})}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function E(e,t){var n=e.title,r=e.titleId,c=I(e,["title","titleId"]);return o.createElement("svg",y({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,C)}var S=o.forwardRef(E);n.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=o.createElement("path",{d:"M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.     9993Z"}),k=o.createElement("path",{d:"M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.     130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099     5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"});function z(e,t){var n=e.title,r=e.titleId,c=N(e,["title","titleId"]);return o.createElement("svg",w({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,L,k)}var V=o.forwardRef(z);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function F(e,t){var n=e.title,r=e.titleId,c=P(e,["title","titleId"]);return o.createElement("svg",D({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,R)}var A=o.forwardRef(F);n.p;function B(e){var t=e.onEdit;return Object(h.jsx)(M,{type:"edit",onClick:t})}n(33);var J={check:function(e){return Object(h.jsx)(S,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(h.jsx)(A,{className:"Icon-svg Icon-svg--delete",fill:e})},edit:function(e){return Object(h.jsx)(V,{className:"Icon-svg Icon-svg--edit",fill:e})}};function M(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(h.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:J[t](o)})}function U(e){var t=e.completed,n=e.onComplete;return Object(h.jsx)(M,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function H(e){var t=e.onDelete;return Object(h.jsx)(M,{type:"delete",onClick:t})}n(34);function Z(e){return Object(h.jsxs)("li",{className:"TodoItem",children:[Object(h.jsx)(U,{completed:e.completed,onComplete:e.onComplete}),Object(h.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(h.jsx)(B,{onEdit:e.onEdit}),Object(h.jsx)(H,{onDelete:e.onDelete})]})}function _(){return Object(h.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(35);function q(){return Object(h.jsxs)("div",{className:"LoadingTodo-container",children:[Object(h.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(h.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(h.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function Q(){return Object(h.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(36);function Y(e){var t=r.a.useState(e.defaultValue||""),n=Object(u.a)(t,2),o=n[0],c=n[1],a=Object(l.l)();return Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.submitEvent(o),a("/")},children:[Object(h.jsx)("label",{children:e.label}),Object(h.jsx)("textarea",{value:o,onChange:function(e){c(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(h.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(h.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){a("/")},children:"Cancelar"}),Object(h.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:e.submitText})]})]})}n(38);function G(e){return Object(h.jsx)("button",{className:"CreateTodoButton",onClick:e.onClick,children:"+"})}n(39);n(40);function K(e){var t=function(e){var t=r.a.useState(!1),n=Object(u.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),c(!0))})),{show:o,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?Object(h.jsx)("div",{className:"ChangeAlert-bg",children:Object(h.jsxs)("div",{className:"ChangeAlert-container",children:[Object(h.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(h.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(h.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:o,children:"Yes!"})]})}):null}function W(){var e=m(),t=e.state,n=e.stateUpdaters,o=Object(l.l)(),c=t.error,a=t.loading,i=t.searchedTodos,s=t.totalTodos,u=t.completedTodos,d=t.searchValue,j=(n.addTodo,n.completeTodo),b=n.deleteTodo,f=n.setSearchValue,O=n.sincronizeTodos;return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)(v,{loading:a,children:[Object(h.jsx)(x,{totalTodos:s,completedTodos:u}),Object(h.jsx)(g,{searchValue:d,setSearchValue:f})]}),Object(h.jsx)(T,{error:c,loading:a,totalTodos:s,searchedTodos:i,searchText:d,onError:function(){return Object(h.jsx)(_,{})},onLoading:function(){return Object(h.jsx)(q,{})},onEmptyTodos:function(){return Object(h.jsx)(Q,{})},onEmptySearchResults:function(e){return Object(h.jsxs)("p",{children:["No hay resultados para ",e]})},children:function(e){return Object(h.jsx)(Z,{text:e.text,completed:e.completed,onEdit:function(){o("/edit/"+e.id,{state:{todo:e}})},onComplete:function(){return j(e.id)},onDelete:function(){return b(e.id)}},e.id)}}),Object(h.jsx)(G,{onClick:function(){return o("/new")}}),Object(h.jsx)(K,{sincronize:O})]})}function X(){var e=m().stateUpdaters.addTodo;return Object(h.jsx)(Y,{label:"Escribe tu nuevo todo",submitText:"A\xf1adir",submitEvent:function(t){return e(t)}})}function $(){var e,t,n=m(),o=n.state,r=n.stateUpdaters,c=o.loading,a=o.getTodo,i=r.editTodo,s=Object(l.n)().id,u=Object(l.j)();if(null===(e=u.state)||void 0===e?void 0:e.todo)t=u.state.todo.text;else{if(c)return Object(h.jsx)("p",{children:"Cargando..."});t=a(s).text}return Object(h.jsx)(Y,{label:"Edita tu todo",defaultValue:t,submitText:"Editar",submitEvent:function(e){return i(s,e)}})}function ee(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(W,{})}),Object(h.jsx)(l.a,{path:"/new",element:Object(h.jsx)(X,{})}),Object(h.jsx)(l.a,{path:"/edit/:id",element:Object(h.jsx)($,{})}),Object(h.jsx)(l.a,{path:"*",element:Object(h.jsx)("p",{children:"Not Found"})})]})})}n(41);a.a.render(Object(h.jsx)(ee,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b9e1877a.chunk.js.map