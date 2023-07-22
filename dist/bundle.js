/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.svg */ \"./src/delete.svg\");\n/* harmony import */ var _reload_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reload.svg */ \"./src/reload.svg\");\n/* harmony import */ var _enter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter.svg */ \"./src/enter.svg\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\n\n\nvar ToDoListContainer = document.getElementById('list-container');\nvar reloadIcon = document.getElementById('reload-img');\nvar enterIcon = document.getElementById('enter-icon');\nvar clearButton = document.querySelector('.clear-btn');\nvar addForm = document.querySelector('.add-form');\nenterIcon.src = _enter_svg__WEBPACK_IMPORTED_MODULE_4__;\nreloadIcon.src = _reload_svg__WEBPACK_IMPORTED_MODULE_3__;\nvar todoList = [];\nvar deleteTaskHandler = function deleteTaskHandler(taskId) {\n  todoList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.deleteTask)(taskId, todoList);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.renderList)(todoList, ToDoListContainer, _more_svg__WEBPACK_IMPORTED_MODULE_1__, _delete_svg__WEBPACK_IMPORTED_MODULE_2__, deleteTaskHandler);\n};\nvar completeTaskHandler = function completeTaskHandler(taskId, completed) {\n  todoList.forEach(function (task) {\n    if (task.id === taskId) {\n      task.completed = completed;\n    }\n  });\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoList);\n};\nvar editTaskDescriptionHandler = function editTaskDescriptionHandler(taskId, newDescription) {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.editTaskDescription)(taskId, newDescription, todoList);\n};\nvar clearCompletedTasksHandler = function clearCompletedTasksHandler() {\n  todoList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.clearCompletedTasks)(todoList);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.renderList)(todoList, ToDoListContainer, _more_svg__WEBPACK_IMPORTED_MODULE_1__, _delete_svg__WEBPACK_IMPORTED_MODULE_2__, deleteTaskHandler);\n};\n(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.renderList)(todoList, ToDoListContainer, _more_svg__WEBPACK_IMPORTED_MODULE_1__, _delete_svg__WEBPACK_IMPORTED_MODULE_2__, deleteTaskHandler);\naddForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var addInput = document.querySelector('.add-input');\n  var description = addInput.value.trim();\n  if (description !== '') {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.addTask)(description, todoList);\n    addInput.value = '';\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.renderList)(todoList, ToDoListContainer, _more_svg__WEBPACK_IMPORTED_MODULE_1__, _delete_svg__WEBPACK_IMPORTED_MODULE_2__, deleteTaskHandler);\n  }\n});\nclearButton.addEventListener('click', function () {\n  clearCompletedTasksHandler();\n});\nwindow.onload = function () {\n  todoList = JSON.parse(localStorage.getItem('todoList')) || [];\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.renderList)(todoList, ToDoListContainer, _more_svg__WEBPACK_IMPORTED_MODULE_1__, _delete_svg__WEBPACK_IMPORTED_MODULE_2__, deleteTaskHandler);\n};\nToDoListContainer.addEventListener('click', function (e) {\n  var taskElement = e.target.closest('.to-do-tasks');\n  if (taskElement) {\n    var taskId = Number(taskElement.dataset.taskId);\n    var checkBox = taskElement.querySelector('.check-box');\n    var taskDescription = taskElement.querySelector('.task-description');\n    var moreLogo = taskElement.querySelector('.more-logo');\n    if (e.target === checkBox) {\n      var completed = !checkBox.classList.contains('completed');\n      checkBox.classList.toggle('completed');\n      taskDescription.classList.toggle('line-through');\n      checkBox.textContent = completed ? '✓' : '';\n      completeTaskHandler(taskId, completed);\n    } else if (e.target === moreLogo) {\n      var _deleteIcon = taskElement.querySelector('.delete-icon');\n      moreLogo.style.display = 'none';\n      _deleteIcon.style.display = 'inline-block';\n    } else if (e.target.classList.contains('delete-icon')) {\n      e.stopPropagation();\n      deleteTaskHandler(taskId);\n    }\n  }\n});\nToDoListContainer.addEventListener('input', function (e) {\n  var taskElement = e.target.closest('.to-do-tasks');\n  if (taskElement) {\n    var taskId = Number(taskElement.dataset.taskId);\n    var taskDescription = taskElement.querySelector('.task-description');\n    if (e.target === taskDescription) {\n      var newDescription = taskDescription.textContent.trim();\n      editTaskDescriptionHandler(taskId, newDescription);\n    }\n  }\n});\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),\n/* harmony export */   renderList: () => (/* binding */ renderList),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nvar saveToLocalStorage = function saveToLocalStorage(list) {\n  localStorage.setItem('todoList', JSON.stringify(list));\n};\nvar renderList = function renderList(list, container, moreIcon, deleteIcon, deleteTaskHandler) {\n  var innerList = '';\n  if (list.length === 0) {\n    innerList = '<h3 class=\"list-placeholder\">Please, add your first task!</h3>';\n  } else {\n    var sortedList = list.sort(function (a, b) {\n      return a.index - b.index;\n    });\n    sortedList.forEach(function (task) {\n      innerList += \"\\n          <li class=\\\"to-do-tasks\\\" data-task-id=\\\"\".concat(task.id, \"\\\">\\n            <div class=\\\"check-box \").concat(task.completed ? 'completed' : '', \"\\\">\").concat(task.completed ? '✓' : '', \"</div>\\n            <p class=\\\"task-description \").concat(task.completed ? 'line-through' : '', \"\\\" contenteditable>\").concat(task.description, \"</p>\\n            <img class=\\\"more-logo\\\" src=\\\"\").concat(moreIcon, \"\\\" data-task-id=\\\"\").concat(task.id, \"\\\"/>\\n            <img class=\\\"delete-icon\\\" src=\\\"\").concat(deleteIcon, \"\\\" alt=\\\"Delete\\\" data-task-id=\\\"\").concat(task.id, \"\\\" style=\\\"width: 16px; height: 16px; display: none;\\\"/>\\n          </li>\\n        \");\n    });\n  }\n  container.innerHTML = innerList;\n  var deleteIcons = container.querySelectorAll('.delete-icon');\n  deleteIcons.forEach(function (deleteIcon) {\n    deleteIcon.addEventListener('click', function () {\n      var taskId = Number(deleteIcon.dataset.taskId);\n      deleteTaskHandler(taskId);\n    });\n  });\n  var toDoTasks = container.querySelectorAll('.to-do-tasks');\n  toDoTasks.forEach(function (task) {\n    var moreLogo = task.querySelector('.more-logo');\n    var deleteIcon = task.querySelector('.delete-icon');\n    task.addEventListener('mouseover', function () {\n      moreLogo.style.display = 'none';\n      deleteIcon.style.display = 'inline-block';\n    });\n    task.addEventListener('mouseout', function () {\n      moreLogo.style.display = 'inline-block';\n      deleteIcon.style.display = 'none';\n    });\n  });\n};\nvar addTask = function addTask(description, list) {\n  var newTask = {\n    id: Date.now(),\n    description: description,\n    completed: false,\n    index: list.length + 1\n  };\n  list.push(newTask);\n  saveToLocalStorage(list);\n};\nvar deleteTask = function deleteTask(taskId, list) {\n  var updatedList = list.filter(function (task) {\n    return task.id !== taskId;\n  });\n  saveToLocalStorage(updatedList);\n  return updatedList;\n};\nvar editTaskDescription = function editTaskDescription(taskId, newDescription, list) {\n  var task = list.find(function (task) {\n    return task.id === taskId;\n  });\n  if (task) {\n    task.description = newDescription;\n    saveToLocalStorage(list);\n  }\n};\nvar clearCompletedTasks = function clearCompletedTasks(list) {\n  var updatedList = list.filter(function (task) {\n    return !task.completed;\n  });\n  updatedList.forEach(function (task, index) {\n    task.index = index + 1;\n  });\n  saveToLocalStorage(updatedList);\n  return updatedList;\n};\n\n//# sourceURL=webpack://project/./src/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  font-size: 20px;\r\n  margin: 10px;\r\n  position: relative;\r\n  z-index: 1;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nh2 {\r\n  color: black;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nli {\r\n  margin-left: 30px;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  min-height: 54vh;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.container {\r\n  margin: 50px;\r\n  position: relative;\r\n  z-index: 1;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.add-item {\r\n  margin: 10px;\r\n}\r\n\r\n#addItemButton {\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n}\r\n\r\n.remove-item {\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  width: max-content;\r\n  height: 30px;\r\n  position: relative;\r\n}\r\n\r\n.line-through {\r\n  color: rgb(90, 90, 90);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(192, 192, 192);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  min-width: 350px;\r\n  border: 5px solid rgb(7, 6, 3);\r\n  border-radius: 5px;\r\n}\r\n\r\n.main-title {\r\n  background-color: white;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.reload-icon {\r\n  height: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-form {\r\n  width: 100%;\r\n  background-color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 15px;\r\n}\r\n\r\n.add-input {\r\n  font-style: italic;\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.add-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.enter-icon {\r\n  height: 15px;\r\n}\r\n\r\n.list-container {\r\n  background-color: rgb(192, 192, 192);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1px;\r\n  list-style: none;\r\n}\r\n\r\n.to-do-tasks {\r\n  display: flex;\r\n  width: 100%;\r\n  text-align: left;\r\n  background-color: white;\r\n  padding: 15px;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.task-description {\r\n  margin-right: auto;\r\n}\r\n\r\n.more-logo {\r\n  height: 100%;\r\n  cursor: move;\r\n}\r\n\r\n.check-box {\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 3px;\r\n  border: 2px solid grey;\r\n  cursor: pointer;\r\n}\r\n\r\n.completed {\r\n  border: none;\r\n  font-size: 14px;\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\n.clear-btn {\r\n  background-color: rgb(240, 240, 240);\r\n  padding: 15px;\r\n  text-align: center;\r\n  color: rgb(116, 116, 116);\r\n  cursor: pointer;\r\n}\r\n\r\n.clear {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  justify-content: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"677da4ba10955ff4dddf.svg\";\n\n//# sourceURL=webpack://project/./src/delete.svg?");

/***/ }),

/***/ "./src/enter.svg":
/*!***********************!*\
  !*** ./src/enter.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8712b80f9d2d96c695e9.svg\";\n\n//# sourceURL=webpack://project/./src/enter.svg?");

/***/ }),

/***/ "./src/more.svg":
/*!**********************!*\
  !*** ./src/more.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0187318f8f2b11b4652e.svg\";\n\n//# sourceURL=webpack://project/./src/more.svg?");

/***/ }),

/***/ "./src/reload.svg":
/*!************************!*\
  !*** ./src/reload.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0dc8a8b6fd982e095e00.svg\";\n\n//# sourceURL=webpack://project/./src/reload.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;