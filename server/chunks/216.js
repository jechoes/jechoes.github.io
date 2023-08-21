exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 1610:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 7564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6173, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2211));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5678));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3554));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3737));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9120))

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4256);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const routes = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "shows",
        path: "/shows"
    },
    {
        name: "video",
        path: "/video"
    },
    {
        name: "audio",
        path: "/audio"
    }
];
const Navbar = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: "joienya"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navLinks),
                children: routes.map(({ name, path })=>{
                    const isActive = path === pathname;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: path,
                        className: isActive ? (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeNavlink) : (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),
                        children: name
                    }, name);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 2543:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__CnGx4",
	"hiddenFooter": "footer_hiddenFooter__XnfQ4"
};


/***/ }),

/***/ 4256:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "navbar_nav__eC77a",
	"navLinks": "navbar_navLinks__n1IHx",
	"navlink": "navbar_navlink__EREzf",
	"activeNavlink": "navbar_activeNavlink__3vokF",
	"title": "navbar_title__ZyZBh"
};


/***/ }),

/***/ 4897:
/***/ ((module) => {

// Exports
module.exports = {
	"links": "socials_links__PSdDd",
	"icon": "socials_icon__pm9Up",
	"tooltip": "socials_tooltip__XFeWM"
};


/***/ }),

/***/ 9057:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "layout_background__RVjTN",
	"container": "layout_container__F8gUU"
};


/***/ }),

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ layout_metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4862);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./app/styles/reset.css
var styles_reset = __webpack_require__(4036);
// EXTERNAL MODULE: ./app/styles/globals.css
var globals = __webpack_require__(413);
// EXTERNAL MODULE: ./app/styles/layout.module.css
var layout_module = __webpack_require__(9057);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./app/components/Footer/footer.module.css
var footer_module = __webpack_require__(2543);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./app/components/Footer/index.tsx


const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            "\xa9",
            ` ${new Date().getFullYear()} joienya · la`
        ]
    });
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/Navbar/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/runner/work/joienya.github.io/joienya.github.io/app/components/Navbar/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./app/components/Socials/socials.module.css
var socials_module = __webpack_require__(4897);
var socials_module_default = /*#__PURE__*/__webpack_require__.n(socials_module);
;// CONCATENATED MODULE: ./public/email.svg
/* harmony default export */ const email = ({"src":"/_next/static/media/email.0f9cd75c.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.2ffde97b.svg","height":512,"width":448,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/soundcloud.svg
/* harmony default export */ const soundcloud = ({"src":"/_next/static/media/soundcloud.53e33da7.svg","height":512,"width":640,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.72c72f5f.svg","height":512,"width":576,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/components/Socials/index.tsx







const links = [
    {
        href: "https://youtube.com/@joienyamusic",
        label: "youtube",
        icon: youtube
    },
    {
        href: "https://soundcloud.com/joienya",
        label: "soundcloud",
        icon: soundcloud
    },
    {
        href: "https://www.instagram.com/joienya/",
        label: "instagram",
        icon: instagram
    },
    {
        href: "mailto:joienyamusic@gmail.com",
        label: "email",
        icon: email
    }
];
const Socials = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (socials_module_default()).links,
        children: links.map(({ href, label, icon })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                "aria-hidden": "false",
                href: href,
                "aria-label": label,
                target: "_blank",
                rel: "noopener noreferrer",
                className: (socials_module_default()).icon,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: icon,
                        alt: label,
                        width: 25,
                        height: 25
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (socials_module_default()).tooltip,
                        children: label
                    })
                ]
            }, href))
    });
};
/* harmony default export */ const components_Socials = (Socials);

// EXTERNAL MODULE: ./app/lib/metadata.ts
var metadata = __webpack_require__(4799);
;// CONCATENATED MODULE: ./app/layout.tsx









const layout_metadata = (0,metadata/* generateMetadata */.N)("joienya");
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://kit.fontawesome.com/51da45b07a.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (layout_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            children: [
                                children,
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Socials, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 4799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ generateMetadata)
/* harmony export */ });
const generateMetadata = (title)=>({
        title,
        description: "Los Angeles based marimba and voice artist with musical roots in Boston."
    });


/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/email.0f9cd75c.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/instagram.2ffde97b.svg","height":512,"width":448,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/soundcloud.53e33da7.svg","height":512,"width":640,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/youtube.72c72f5f.svg","height":512,"width":576,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"64x64"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 413:
/***/ (() => {



/***/ }),

/***/ 4036:
/***/ (() => {



/***/ })

};
;