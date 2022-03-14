exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 1235:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "main_container__H2cvg",
	"nav": "main_nav__Ew75O",
	"main": "main_main__gNu8R"
};


/***/ }),

/***/ 6246:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__VP3XG",
	"main": "navbar_main__IVrTd",
	"list": "navbar_list__8TEVn"
};


/***/ }),

/***/ 942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(1235);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/navbar.module.scss
var navbar_module = __webpack_require__(6246);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Navbar.tsx




const Navbar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navbar_module_default()).main,
                    children: "главная"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/todo",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navbar_module_default()).list,
                    onClick: ()=>{},
                    children: "Список дел"
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/MainLayout.tsx





const MainLayout = ({ children , title ='Cars'  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (main_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "todo list"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_module_default()).nav,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_module_default()).main,
                children: children
            })
        ]
    })
;


/***/ })

};
;