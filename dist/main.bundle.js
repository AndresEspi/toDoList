"use strict";(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[179],{426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ni {\r\n  opacity: 0.8;\r\n  color: gray;\r\n}\r\n\r\n.main-section {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  margin: 10% 10%;\r\n  box-shadow: 3px 3px 3px 2px gray;\r\n  padding: 2% 2%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3% 0;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.title h1 {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.title i {\r\n  display: block;\r\n}\r\n\r\n.form-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2% 0;\r\n  min-height: 3%;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.form-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-right: 3%;\r\n}\r\n\r\n.form-input input {\r\n  border: none;\r\n  height: 2.5rem;\r\n}\r\n\r\n#edit-todo-item {\r\n  display: none;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3% 0;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.todo_detail {\r\n  display: flex;\r\n}\r\n\r\n.todo_detail .item {\r\n  font-size: 0.9rem;\r\n  font-weight: normal;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3% 0;\r\n  background-color: rgba(255, 255, 220);\r\n}\r\n\r\n.clear h3 {\r\n  font-size: 0.9rem;\r\n  font-weight: normal;\r\n  cursor: pointer;\r\n}\r\n\r\ni:hover {\r\n  cursor: pointer;\r\n  color: #000;\r\n  opacity: 1;\r\n}\r\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},524:(t,e,n)=>{var r=n(379),o=n.n(r),a=n(795),i=n.n(a),s=n(569),c=n.n(s),d=n(565),l=n.n(d),u=n(216),p=n.n(u),f=n(589),m=n.n(f),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class v{constructor(t,e,n=!1){this.description=t,this.index=e,this.completed=n}}class y{static setLocalStorageData=t=>{let e=JSON.stringify(t);localStorage.setItem("todoList",e)};static getLocalStorageData=()=>{let t;return t=null===JSON.parse(localStorage.getItem("todoList"))?[]:JSON.parse(localStorage.getItem("todoList")),t};static reassignIndex=t=>{t.forEach(((t,e)=>{t.index=e+1}))};static deleteTask=t=>{let e=this.getLocalStorageData();const n=e[t];e=e.filter((t=>t!==n)),this.reassignIndex(e),this.setLocalStorageData(e)};static updateTaskInput=(t,e)=>{let n=this.getLocalStorageData();const r=n[e];n.forEach((e=>{e==r&&(e.description=t)})),this.setLocalStorageData(n),this.showTodoItems()};static addBtnRemoveEvent=()=>{document.querySelectorAll(".trash-can").forEach((t=>t.addEventListener("click",(e=>{let n;e.preventDefault(),n=t.id>0?t.id-1:0,this.deleteTask(n),this.showTodoItems()}))))};static addBtnEditEvent=()=>{document.querySelectorAll(".edit-btn").forEach((t=>t.addEventListener("click",(e=>{let n;e.preventDefault(),n=t.id>0?t.id-1:0;const r=this.getLocalStorageData()[n];document.getElementById("todo-input").style.display="none";let o=document.querySelector(".todo-edit-input");o.value=r.description,o.setAttribute("id",n),document.getElementById("edit-todo-item").style.display="block",o.focus()}))))};static creatTodoItemsHtml=({description:t,index:e})=>{const n=document.createElement("div");return n.className="todo-item",n.innerHTML=`\n      <div class="todo_detail">\n      <input type="checkbox" id="" name="" value=""> <h3 class="item">${t}</h3> <i></i>\n      </div>\n      <div>\n      <button class="edit-btn" id="${e}"><i class="fa-regular fa-pen-to-square"></i></button>\n      <button class="trash-can" id="${e}"><i class="fa-solid fa-trash-can"></i></button>\n      </div>\n      `,n};static showTodoItems=()=>{const t=this.getLocalStorageData();document.querySelector(".todo_lists").innerHTML="",t.forEach((t=>{document.querySelector(".todo_lists").append(this.creatTodoItemsHtml(t))})),this.addBtnRemoveEvent(),this.addBtnEditEvent()};static addTodoTask=t=>{const e=this.getLocalStorageData(),n=e.length+1,r=new v(t,n);e.push(r),this.setLocalStorageData(e),this.showTodoItems()}}const b=document.getElementById("todo-form"),x=document.getElementById("edit-todo-item"),S=document.getElementById("todo-input"),E=document.querySelector(".todo-edit-input");b.addEventListener("submit",(t=>{t.preventDefault(),y.addTodoTask(S.value),S.value=""})),x.addEventListener("submit",(t=>{t.preventDefault();let e=Number(E.getAttribute("id"));y.updateTaskInput(E.value,e),E.value="",document.getElementById("todo-input").style.display="block",x.style.display="none"})),y.showTodoItems()}},t=>{t(t.s=524)}]);