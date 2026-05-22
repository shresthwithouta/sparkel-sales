(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/src/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SAMPLE_PRODUCTS",
    ()=>SAMPLE_PRODUCTS,
    "SITE_CONFIG",
    ()=>SITE_CONFIG
]);
const SITE_CONFIG = {
    name: "Spark Innovations",
    tagline: "Authorized Kutchina Distributor",
    description: "Your trusted partner for premium Kutchina kitchen appliances. Explore chimneys, hobs, cooktops, and more.",
    phone: "+91 98310 12345",
    email: "contact@sparkinnovations.in",
    address: "Kolkata, West Bengal, India"
};
const CATEGORIES = [
    {
        name: "Kitchen Chimneys",
        slug: "kitchen-chimneys",
        icon: "Wind",
        description: "Premium auto-clean chimneys with powerful suction"
    },
    {
        name: "Hobs & Cooktops",
        slug: "hobs-cooktops",
        icon: "Flame",
        description: "Built-in gas hobs and induction cooktops"
    },
    {
        name: "Water Purifiers",
        slug: "water-purifiers",
        icon: "Droplets",
        description: "RO+UV water purifiers for pure drinking water"
    },
    {
        name: "Dishwashers",
        slug: "dishwashers",
        icon: "Sparkles",
        description: "Fully automatic dishwashers for modern kitchens"
    },
    {
        name: "Built-in Ovens",
        slug: "built-in-ovens",
        icon: "CookingPot",
        description: "Microwave and convection built-in ovens"
    },
    {
        name: "Coolers & Fans",
        slug: "coolers-fans",
        icon: "Fan",
        description: "Air coolers and exhaust fans for ventilation"
    }
];
const SAMPLE_PRODUCTS = [
    {
        name: "Kutchina Flora 90 Auto Clean Chimney",
        slug: "kutchina-flora-90",
        category: "kitchen-chimneys",
        price: 18990,
        description: "90cm auto-clean kitchen chimney with 1200 m³/hr suction power, filterless technology, and touch control panel.",
        specs: [
            {
                label: "Suction Power",
                value: "1200 m³/hr"
            },
            {
                label: "Size",
                value: "90 cm"
            },
            {
                label: "Type",
                value: "Filterless Auto Clean"
            },
            {
                label: "Control",
                value: "Touch + Motion Sensor"
            },
            {
                label: "Noise Level",
                value: "58 dB"
            }
        ],
        images: [
            "/images/hero/chimney.png"
        ]
    },
    {
        name: "Kutchina Atlas 3B Built-in Hob",
        slug: "kutchina-atlas-3b",
        category: "hobs-cooktops",
        price: 14490,
        description: "3-burner built-in glass hob with auto-ignition, brass burners, and toughened glass surface.",
        specs: [
            {
                label: "Burners",
                value: "3 Brass Burners"
            },
            {
                label: "Surface",
                value: "8mm Toughened Glass"
            },
            {
                label: "Ignition",
                value: "Auto Electric"
            },
            {
                label: "Knobs",
                value: "Metal Alloy"
            }
        ],
        images: [
            "/images/hero/hob.png"
        ]
    },
    {
        name: "Kutchina Aqua Fresh Water Purifier",
        slug: "kutchina-aqua-fresh",
        category: "water-purifiers",
        price: 12990,
        description: "7-stage RO+UV+UF water purifier with 12L storage tank and mineral enhancer.",
        specs: [
            {
                label: "Purification",
                value: "RO + UV + UF"
            },
            {
                label: "Storage",
                value: "12 Litres"
            },
            {
                label: "Stages",
                value: "7-Stage"
            },
            {
                label: "TDS Range",
                value: "Up to 2000 ppm"
            }
        ],
        images: [
            "/images/hero/purifier.png"
        ]
    },
    {
        name: "Kutchina Vento DX Dishwasher",
        slug: "kutchina-vento-dx",
        category: "dishwashers",
        price: 29990,
        description: "12-place setting free-standing dishwasher with 6 wash programs and half-load option.",
        specs: [
            {
                label: "Capacity",
                value: "12 Place Settings"
            },
            {
                label: "Programs",
                value: "6 Wash Programs"
            },
            {
                label: "Type",
                value: "Free Standing"
            },
            {
                label: "Energy Rating",
                value: "A++"
            }
        ],
        images: [
            "/images/hero/dishwasher.png"
        ]
    },
    {
        name: "Kutchina Elite 60 Built-in Oven",
        slug: "kutchina-elite-60",
        category: "built-in-ovens",
        price: 24990,
        description: "65L built-in convection oven with 10 cooking functions and digital display.",
        specs: [
            {
                label: "Capacity",
                value: "65 Litres"
            },
            {
                label: "Functions",
                value: "10 Cooking Modes"
            },
            {
                label: "Type",
                value: "Convection"
            },
            {
                label: "Display",
                value: "Digital LED"
            }
        ],
        images: [
            "/images/placeholder-product.svg"
        ]
    },
    {
        name: "Kutchina Storm Air Cooler",
        slug: "kutchina-storm",
        category: "coolers-fans",
        price: 8990,
        description: "75L desert air cooler with honeycomb cooling pads and 3-speed motor.",
        specs: [
            {
                label: "Tank",
                value: "75 Litres"
            },
            {
                label: "Cooling",
                value: "Honeycomb Pads"
            },
            {
                label: "Motor",
                value: "3-Speed Copper"
            },
            {
                label: "Coverage",
                value: "Up to 550 sq ft"
            }
        ],
        images: [
            "/images/placeholder-product.svg"
        ]
    }
];
const NAV_LINKS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Categories",
        href: "#",
        isDropdown: true
    },
    {
        label: "Jobs",
        href: "/jobs"
    },
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/contexts/ToastContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ToastProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "2a85a48ad3fda2918ef6579c4e4c79c024243bfccf8a8818084417ca9dfcdb13") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a85a48ad3fda2918ef6579c4e4c79c024243bfccf8a8818084417ca9dfcdb13";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ToastProvider[showToast]": (message, t3)=>{
                const type = t3 === undefined ? "success" : t3;
                const id = Math.random().toString(36).substring(2, 9);
                setToasts({
                    "ToastProvider[showToast > setToasts()]": (prev)=>[
                            ...prev,
                            {
                                id,
                                message,
                                type
                            }
                        ]
                }["ToastProvider[showToast > setToasts()]"]);
                setTimeout({
                    "ToastProvider[showToast > setTimeout()]": ()=>{
                        setToasts({
                            "ToastProvider[showToast > setTimeout() > setToasts()]": (prev_0)=>prev_0.filter({
                                    "ToastProvider[showToast > setTimeout() > setToasts() > prev_0.filter()]": (t)=>t.id !== id
                                }["ToastProvider[showToast > setTimeout() > setToasts() > prev_0.filter()]"])
                        }["ToastProvider[showToast > setTimeout() > setToasts()]"]);
                    }
                }["ToastProvider[showToast > setTimeout()]"], 5000);
            }
        })["ToastProvider[showToast]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const showToast = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ToastProvider[removeToast]": (id_0)=>{
                setToasts({
                    "ToastProvider[removeToast > setToasts()]": (prev_1)=>prev_1.filter({
                            "ToastProvider[removeToast > setToasts() > prev_1.filter()]": (t_0)=>t_0.id !== id_0
                        }["ToastProvider[removeToast > setToasts() > prev_1.filter()]"])
                }["ToastProvider[removeToast > setToasts()]"]);
            }
        })["ToastProvider[removeToast]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const removeToast = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            showToast
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== toasts) {
        let t6;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = ({
                "ToastProvider[toasts.map()]": (toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `pointer-events-auto flex items-center gap-4 p-4 rounded-sm shadow-2xl border animate-reveal transition-all ${toast.type === "success" ? "bg-emerald-50 border-emerald-100 text-emerald-800" : toast.type === "error" ? "bg-rose-50 border-rose-100 text-rose-800" : "bg-amber-50 border-amber-100 text-amber-800"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0",
                                children: [
                                    toast.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/contexts/ToastContext.js",
                                        lineNumber: 85,
                                        columnNumber: 445
                                    }, this),
                                    toast.type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/contexts/ToastContext.js",
                                        lineNumber: 85,
                                        columnNumber: 499
                                    }, this),
                                    toast.type === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/contexts/ToastContext.js",
                                        lineNumber: 85,
                                        columnNumber: 550
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/contexts/ToastContext.js",
                                lineNumber: 85,
                                columnNumber: 390
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black uppercase tracking-widest flex-1",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/client/src/contexts/ToastContext.js",
                                lineNumber: 85,
                                columnNumber: 582
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ToastProvider[toasts.map() > <button>.onClick]": ()=>removeToast(toast.id)
                                }["ToastProvider[toasts.map() > <button>.onClick]"],
                                className: "p-1 hover:bg-black/5 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/client/src/contexts/ToastContext.js",
                                    lineNumber: 87,
                                    columnNumber: 128
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/contexts/ToastContext.js",
                                lineNumber: 85,
                                columnNumber: 672
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/client/src/contexts/ToastContext.js",
                        lineNumber: 85,
                        columnNumber: 49
                    }, this)
            })["ToastProvider[toasts.map()]"];
            $[7] = t6;
        } else {
            t6 = $[7];
        }
        t5 = toasts.map(t6);
        $[5] = toasts;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-8 right-8 z-[200] flex flex-col gap-4 max-w-md w-full pointer-events-none",
            children: t5
        }, void 0, false, {
            fileName: "[project]/client/src/contexts/ToastContext.js",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== children || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
            value: t4,
            children: [
                children,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/contexts/ToastContext.js",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_s(ToastProvider, "d5e9/eTh9mCws6AJ6xOMGthCHTA=");
_c = ToastProvider;
function useToast() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "2a85a48ad3fda2918ef6579c4e4c79c024243bfccf8a8818084417ca9dfcdb13") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a85a48ad3fda2918ef6579c4e4c79c024243bfccf8a8818084417ca9dfcdb13";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCartApi",
    ()=>addToCartApi,
    "addToWishlist",
    ()=>addToWishlist,
    "applyForJob",
    ()=>applyForJob,
    "clearCartApi",
    ()=>clearCartApi,
    "clearWishlistApi",
    ()=>clearWishlistApi,
    "createBanner",
    ()=>createBanner,
    "createCategory",
    ()=>createCategory,
    "createInquiry",
    ()=>createInquiry,
    "createOrder",
    ()=>createOrder,
    "createProduct",
    ()=>createProduct,
    "deleteBanner",
    ()=>deleteBanner,
    "deleteCategory",
    ()=>deleteCategory,
    "deleteInquiry",
    ()=>deleteInquiry,
    "deleteProduct",
    ()=>deleteProduct,
    "fetchAdminPayments",
    ()=>fetchAdminPayments,
    "fetchAllOrders",
    ()=>fetchAllOrders,
    "fetchAnalyticsData",
    ()=>fetchAnalyticsData,
    "fetchBanners",
    ()=>fetchBanners,
    "fetchCart",
    ()=>fetchCart,
    "fetchCategories",
    ()=>fetchCategories,
    "fetchInquiries",
    ()=>fetchInquiries,
    "fetchMyPayments",
    ()=>fetchMyPayments,
    "fetchOrderById",
    ()=>fetchOrderById,
    "fetchProductBySlug",
    ()=>fetchProductBySlug,
    "fetchProducts",
    ()=>fetchProducts,
    "fetchSiteSettings",
    ()=>fetchSiteSettings,
    "fetchStats",
    ()=>fetchStats,
    "fetchUserMe",
    ()=>fetchUserMe,
    "fetchUserOrders",
    ()=>fetchUserOrders,
    "fetchUsers",
    ()=>fetchUsers,
    "fetchWishlist",
    ()=>fetchWishlist,
    "loginUser",
    ()=>loginUser,
    "loginWithGoogle",
    ()=>loginWithGoogle,
    "registerUser",
    ()=>registerUser,
    "removeFromCartApi",
    ()=>removeFromCartApi,
    "removeFromWishlist",
    ()=>removeFromWishlist,
    "searchProducts",
    ()=>searchProducts,
    "submitQrPayment",
    ()=>submitQrPayment,
    "updateAdminUser",
    ()=>updateAdminUser,
    "updateBanner",
    ()=>updateBanner,
    "updateCartItemApi",
    ()=>updateCartItemApi,
    "updateCategory",
    ()=>updateCategory,
    "updateInquiryStatus",
    ()=>updateInquiryStatus,
    "updateOrderStatus",
    ()=>updateOrderStatus,
    "updatePassword",
    ()=>updatePassword,
    "updatePaymentStatus",
    ()=>updatePaymentStatus,
    "updateProduct",
    ()=>updateProduct,
    "updateSiteSettings",
    ()=>updateSiteSettings,
    "updateUserProfile",
    ()=>updateUserProfile,
    "uploadImage",
    ()=>uploadImage
]);
const API_URL = '/api';
// Centralized request helper to handle 401s and common logic
const apiRequest = async (endpoint, options = {})=>{
    const { token, ...fetchOptions } = options;
    const headers = {
        ...token && {
            'Authorization': `Bearer ${token}`
        },
        ...fetchOptions.headers
    };
    // Only set application/json if body is not FormData
    if (!(fetchOptions.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), 60000); // Increased to 60s for mobile uploads
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            ...fetchOptions,
            headers,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        // Handle 401 Unauthorized globally
        if (res.status === 401) {
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent('unauthorized'));
            }
        }
        if (!res.ok) {
            let errorMessage = `Request failed with status ${res.status}`;
            try {
                const errorData = await res.json();
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
            // Not JSON
            }
            throw new Error(errorMessage);
        }
        return res.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error("Request timed out. Please check your internet connection.");
        }
        console.error(`API Error [${endpoint}]:`, error);
        throw error;
    }
};
const fetchProducts = async (params = {})=>{
    try {
        if (!params.limit) params.limit = 100;
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/products?${query}`);
    } catch (error) {
        console.warn("Backend not reachable, using fallback data.");
        return {
            products: [],
            total: 0
        };
    }
};
const searchProducts = async (params = {})=>{
    try {
        if (!params.limit) params.limit = 100;
        const query = new URLSearchParams(params).toString();
        return await apiRequest(`/products/search?${query}`);
    } catch (error) {
        console.warn("Backend not reachable, using fallback data.");
        return {
            products: [],
            total: 0
        };
    }
};
const fetchProductBySlug = async (slug)=>{
    try {
        return await apiRequest(`/products/${slug}`);
    } catch (error) {
        return null;
    }
};
const createProduct = (token, productData)=>apiRequest('/products', {
        method: 'POST',
        token,
        body: JSON.stringify(productData)
    });
const updateProduct = (token, slug, productData)=>apiRequest(`/products/${slug}`, {
        method: 'PUT',
        token,
        body: JSON.stringify(productData)
    });
const deleteProduct = (token, slug)=>apiRequest(`/products/${slug}`, {
        method: 'DELETE',
        token
    });
const fetchCategories = async ()=>{
    try {
        return await apiRequest('/categories');
    } catch (error) {
        return {
            categories: []
        };
    }
};
const createCategory = (token, categoryData)=>apiRequest('/categories', {
        method: 'POST',
        token,
        body: JSON.stringify(categoryData)
    });
const updateCategory = (token, slug, categoryData)=>apiRequest(`/categories/${slug}`, {
        method: 'PUT',
        token,
        body: JSON.stringify(categoryData)
    });
const deleteCategory = (token, slug)=>apiRequest(`/categories/${slug}`, {
        method: 'DELETE',
        token
    });
const fetchInquiries = async (token)=>{
    try {
        return await apiRequest('/inquiries', {
            token
        });
    } catch (error) {
        return {
            inquiries: []
        };
    }
};
const deleteInquiry = (token, id)=>apiRequest(`/inquiries/${id}`, {
        method: 'DELETE',
        token
    });
const loginUser = (credentials)=>apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
    });
const registerUser = (userData)=>apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
const fetchUserMe = (token)=>apiRequest('/auth/me', {
        token
    });
const createInquiry = (inquiryData)=>apiRequest('/inquiries', {
        method: 'POST',
        body: JSON.stringify(inquiryData)
    });
const updateInquiryStatus = (token, id, status)=>apiRequest(`/inquiries/${id}`, {
        method: 'PUT',
        token,
        body: JSON.stringify({
            status
        })
    });
const updateUserProfile = (token, profileData)=>apiRequest('/auth/me', {
        method: 'PUT',
        token,
        body: JSON.stringify(profileData)
    });
const createOrder = (token, orderData)=>apiRequest('/orders', {
        method: 'POST',
        token,
        body: JSON.stringify(orderData)
    });
const fetchUserOrders = async (token, limit = 10, page = 1)=>{
    try {
        return await apiRequest(`/orders/me?limit=${limit}&page=${page}`, {
            token
        });
    } catch (error) {
        return {
            orders: []
        };
    }
};
const fetchOrderById = (token, id)=>apiRequest(`/orders/${id}`, {
        token
    });
const fetchBanners = async ()=>{
    try {
        return await apiRequest('/settings/banners');
    } catch (error) {
        return {
            banners: []
        };
    }
};
const updateBanner = (token, id, bannerData)=>apiRequest(`/settings/banners/${id}`, {
        method: 'PUT',
        token,
        body: JSON.stringify(bannerData)
    });
const createBanner = (token, bannerData)=>apiRequest('/settings/banners', {
        method: 'POST',
        token,
        body: JSON.stringify(bannerData)
    });
const deleteBanner = (token, id)=>apiRequest(`/settings/banners/${id}`, {
        method: 'DELETE',
        token
    });
const fetchSiteSettings = async ()=>{
    try {
        return await apiRequest('/settings/site');
    } catch (error) {
        return {
            settings: null
        };
    }
};
const updateSiteSettings = (token, settingsData)=>apiRequest('/settings/site', {
        method: 'PUT',
        token,
        body: JSON.stringify(settingsData)
    });
const fetchAnalyticsData = (token)=>apiRequest('/analytics/data', {
        token
    });
const loginWithGoogle = (idToken)=>apiRequest('/auth/google', {
        method: 'POST',
        body: JSON.stringify({
            token: idToken
        })
    });
const fetchStats = (token)=>apiRequest('/admin/stats', {
        token
    });
const fetchWishlist = async (token)=>{
    try {
        return await apiRequest('/wishlist', {
            token
        });
    } catch (error) {
        return {
            items: []
        };
    }
};
const addToWishlist = (token, product)=>apiRequest('/wishlist', {
        method: 'POST',
        token,
        body: JSON.stringify(product)
    });
const removeFromWishlist = (token, slug)=>apiRequest(`/wishlist/${slug}`, {
        method: 'DELETE',
        token
    });
const clearWishlistApi = (token)=>apiRequest('/wishlist/clear', {
        method: 'DELETE',
        token
    });
const fetchCart = async (token)=>{
    try {
        return await apiRequest('/cart', {
            token
        });
    } catch (error) {
        return {
            items: []
        };
    }
};
const addToCartApi = (token, product)=>apiRequest('/cart', {
        method: 'POST',
        token,
        body: JSON.stringify(product)
    });
const removeFromCartApi = (token, slug)=>apiRequest(`/cart/${slug}`, {
        method: 'DELETE',
        token
    });
const updateCartItemApi = (token, slug, quantity)=>apiRequest(`/cart/${slug}`, {
        method: 'PUT',
        token,
        body: JSON.stringify({
            quantity
        })
    });
const clearCartApi = (token)=>apiRequest('/cart/clear', {
        method: 'DELETE',
        token
    });
const updateOrderStatus = (token, id, status)=>apiRequest(`/admin/orders/${id}/status`, {
        method: 'PATCH',
        token,
        body: JSON.stringify({
            status
        })
    });
const fetchAllOrders = (token)=>apiRequest('/admin/orders', {
        token
    });
const uploadImage = (token, formData)=>{
    // Client-side validation: Max 5MB, images only
    const file = formData.get('image');
    if (file) {
        if (file.size > 10 * 1024 * 1024) throw new Error("File size exceeds 10MB limit");
        if (!file.type.startsWith('image/')) throw new Error("Only image files are allowed");
    }
    return apiRequest('/upload', {
        method: 'POST',
        token,
        body: formData
    });
};
const fetchUsers = (token)=>apiRequest('/admin/users', {
        token
    });
const updateAdminUser = (token, id, data)=>apiRequest(`/admin/users/${id}`, {
        method: 'PATCH',
        token,
        body: JSON.stringify(data)
    });
const updatePassword = (token, passwordData)=>apiRequest('/auth/password', {
        method: 'PUT',
        token,
        body: JSON.stringify(passwordData)
    });
const applyForJob = (jobData)=>apiRequest('/jobs/apply', {
        method: 'POST',
        body: JSON.stringify(jobData)
    });
const submitQrPayment = (token, paymentData)=>apiRequest('/qr-payments', {
        method: 'POST',
        token,
        body: JSON.stringify(paymentData)
    });
const fetchMyPayments = async (token)=>{
    try {
        return await apiRequest('/qr-payments/me', {
            token
        });
    } catch (error) {
        return {
            payments: []
        };
    }
};
const fetchAdminPayments = async (token, status = '')=>{
    try {
        const query = status ? `?status=${status}` : '';
        return await apiRequest(`/qr-payments/admin${query}`, {
            token
        });
    } catch (error) {
        return {
            payments: []
        };
    }
};
const updatePaymentStatus = (token, id, status)=>apiRequest(`/qr-payments/admin/${id}`, {
        method: 'PATCH',
        token,
        body: JSON.stringify({
            status
        })
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/contexts/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Clears auth state only — does NOT redirect
    const clearAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[clearAuth]": ()=>{
            setToken(null);
            setUser(null);
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        }
    }["AuthProvider.useCallback[clearAuth]"], []);
    // Full logout that also redirects to home
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            clearAuth();
            window.location.href = '/';
        }
    }["AuthProvider.useCallback[logout]"], [
        clearAuth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const handleUnauthorized = {
                "AuthProvider.useEffect.handleUnauthorized": ()=>{
                    console.warn('Unauthorized — clearing session');
                    clearAuth();
                    window.location.href = '/auth/login?expired=true';
                }
            }["AuthProvider.useEffect.handleUnauthorized"];
            window.addEventListener('unauthorized', handleUnauthorized);
            return ({
                "AuthProvider.useEffect": ()=>window.removeEventListener('unauthorized', handleUnauthorized)
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        clearAuth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const loadUser = {
                "AuthProvider.useEffect.loadUser": async ()=>{
                    const storedToken = localStorage.getItem('authToken');
                    if (storedToken) {
                        try {
                            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserMe"])(storedToken);
                            setToken(storedToken);
                            setUser(data.user);
                        } catch (err) {
                            console.error('Session expired or invalid — clearing auth');
                            // Just clear state, do NOT redirect — user may be on a public page
                            clearAuth();
                        }
                    }
                    setLoading(false);
                }
            }["AuthProvider.useEffect.loadUser"];
            loadUser();
        }
    }["AuthProvider.useEffect"], [
        clearAuth
    ]);
    const login = (token_0, userData)=>{
        setToken(token_0);
        setUser(userData);
        localStorage.setItem('authToken', token_0);
        localStorage.setItem('user', JSON.stringify(userData));
    };
    const register = (token_1, userData_0)=>{
        login(token_1, userData_0);
    };
    const googleLogin = async (idToken)=>{
        setLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginWithGoogle"])(idToken);
            login(data.token, data.user);
            return data;
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            token,
            loading,
            login,
            register,
            googleLogin,
            logout,
            isAuthenticated: !!user,
            isAdmin: user?.role === 'admin'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client/src/contexts/AuthContext.js",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "TLKUlnc1yIYzm/kwrb541nu8fOI=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "54c5b7003b8e47000ed1185fafc5c7c4b6d3aaec441f0cdaf9de6cd062d74381") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54c5b7003b8e47000ed1185fafc5c7c4b6d3aaec441f0cdaf9de6cd062d74381";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/hooks/useGuestSync.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuestSync",
    ()=>useGuestSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useGuestSync(storageKey, apiFetch, apiAdd) {
    _s();
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mergeGuestItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestSync.useCallback[mergeGuestItems]": async (guestItems, userToken, setItems)=>{
            try {
                setIsSyncing(true);
                const backendData = await apiFetch(userToken);
                const backendItems = backendData.items || [];
                const itemMap = new Set(backendItems.map({
                    "useGuestSync.useCallback[mergeGuestItems]": (item)=>item.slug
                }["useGuestSync.useCallback[mergeGuestItems]"]));
                const itemsToSync = guestItems.filter({
                    "useGuestSync.useCallback[mergeGuestItems].itemsToSync": (item_0)=>!itemMap.has(item_0.slug)
                }["useGuestSync.useCallback[mergeGuestItems].itemsToSync"]);
                if (itemsToSync.length > 0) {
                    await Promise.all(itemsToSync.map({
                        "useGuestSync.useCallback[mergeGuestItems]": (item_1)=>apiAdd(userToken, item_1)
                    }["useGuestSync.useCallback[mergeGuestItems]"]));
                }
                localStorage.removeItem(storageKey);
                const finalData = await apiFetch(userToken);
                setItems(finalData.items || []);
            } catch (err) {
                console.error(`Failed to merge ${storageKey}:`, err);
            } finally{
                setIsSyncing(false);
                setIsLoaded(true);
            }
        }
    }["useGuestSync.useCallback[mergeGuestItems]"], [
        storageKey,
        apiFetch,
        apiAdd
    ]);
    const syncWithGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestSync.useCallback[syncWithGuest]": async (isAuthenticated, token, setItems_0)=>{
            const savedGuest = localStorage.getItem(storageKey);
            const guestItems_0 = savedGuest ? JSON.parse(savedGuest) : [];
            if (isAuthenticated && token) {
                if (guestItems_0.length > 0) {
                    await mergeGuestItems(guestItems_0, token, setItems_0);
                } else {
                    try {
                        setIsSyncing(true);
                        const data = await apiFetch(token);
                        setItems_0(data?.items || []);
                    } catch (err_0) {
                        console.error(`Failed to sync ${storageKey}:`, err_0);
                    } finally{
                        setIsSyncing(false);
                        setIsLoaded(true);
                    }
                }
            } else {
                setItems_0(guestItems_0);
                setIsLoaded(true);
            }
        }
    }["useGuestSync.useCallback[syncWithGuest]"], [
        storageKey,
        apiFetch,
        mergeGuestItems
    ]);
    const syncToStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestSync.useCallback[syncToStorage]": (items, isAuth, loaded)=>{
            if (loaded && !isAuth) {
                localStorage.setItem(storageKey, JSON.stringify(items));
            }
        }
    }["useGuestSync.useCallback[syncToStorage]"], [
        storageKey
    ]);
    return {
        syncWithGuest,
        syncToStorage,
        isSyncing,
        isLoaded,
        setIsLoaded,
        setIsSyncing
    };
}
_s(useGuestSync, "nuMbz7/xcMalVFHtPNmaydS69mc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/contexts/CartContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/ToastContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/hooks/useGuestSync.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const cartApiAdd = (token, item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCartApi"])(token, {
        slug: item.slug,
        name: item.name,
        price: item.price,
        image: item.images?.[0] || item.image,
        quantity: item.quantity
    });
function CartProvider({ children }) {
    _s();
    const { token, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { syncWithGuest, syncToStorage, isSyncing, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestSync"])("cart_guest", __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"], cartApiAdd);
    const syncCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[syncCart]": ()=>{
            syncWithGuest(isAuthenticated, token, setCartItems);
        }
    }["CartProvider.useCallback[syncCart]"], [
        isAuthenticated,
        token,
        syncWithGuest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            syncCart();
        }
    }["CartProvider.useEffect"], [
        syncCart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            syncToStorage(cartItems, isAuthenticated, isLoaded);
        }
    }["CartProvider.useEffect"], [
        cartItems,
        isLoaded,
        isAuthenticated,
        syncToStorage
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addToCart]": async (product)=>{
            const qtyToAdd = product.quantity || 1;
            // Optimistic update
            setCartItems({
                "CartProvider.useCallback[addToCart]": (prev)=>{
                    const existing = prev.find({
                        "CartProvider.useCallback[addToCart].existing": (item)=>item.slug === product.slug
                    }["CartProvider.useCallback[addToCart].existing"]);
                    if (existing) {
                        return prev.map({
                            "CartProvider.useCallback[addToCart]": (item_0)=>item_0.slug === product.slug ? {
                                    ...item_0,
                                    quantity: item_0.quantity + qtyToAdd
                                } : item_0
                        }["CartProvider.useCallback[addToCart]"]);
                    }
                    return [
                        ...prev,
                        {
                            ...product,
                            quantity: qtyToAdd
                        }
                    ];
                }
            }["CartProvider.useCallback[addToCart]"]);
            showToast(`Added ${product.name} to cart`);
            if (isAuthenticated && token) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCartApi"])(token, {
                        slug: product.slug,
                        name: product.name,
                        price: product.price,
                        image: product.images?.[0] || product.image,
                        quantity: qtyToAdd
                    });
                } catch (err) {
                    console.error("Add to cart failed:", err);
                    syncCart();
                }
            }
        }
    }["CartProvider.useCallback[addToCart]"], [
        isAuthenticated,
        token,
        showToast,
        syncCart
    ]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeFromCart]": async (slug)=>{
            if (isAuthenticated && token) {
                try {
                    setCartItems({
                        "CartProvider.useCallback[removeFromCart]": (prev_0)=>prev_0.filter({
                                "CartProvider.useCallback[removeFromCart]": (i)=>i.slug !== slug
                            }["CartProvider.useCallback[removeFromCart]"])
                    }["CartProvider.useCallback[removeFromCart]"]);
                    showToast("Item removed from cart");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCartApi"])(token, slug);
                } catch (err_0) {
                    console.error("Remove from cart failed:", err_0);
                    syncCart();
                }
            } else {
                setCartItems({
                    "CartProvider.useCallback[removeFromCart]": (prev_1)=>prev_1.filter({
                            "CartProvider.useCallback[removeFromCart]": (i_0)=>i_0.slug !== slug
                        }["CartProvider.useCallback[removeFromCart]"])
                }["CartProvider.useCallback[removeFromCart]"]);
                showToast("Item removed from cart");
            }
        }
    }["CartProvider.useCallback[removeFromCart]"], [
        isAuthenticated,
        token,
        showToast,
        syncCart
    ]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": async (slug_0, quantity)=>{
            if (quantity < 1) {
                removeFromCart(slug_0);
                return;
            }
            if (isAuthenticated && token) {
                try {
                    setCartItems({
                        "CartProvider.useCallback[updateQuantity]": (prev_2)=>prev_2.map({
                                "CartProvider.useCallback[updateQuantity]": (i_1)=>i_1.slug === slug_0 ? {
                                        ...i_1,
                                        quantity
                                    } : i_1
                            }["CartProvider.useCallback[updateQuantity]"])
                    }["CartProvider.useCallback[updateQuantity]"]);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartItemApi"])(token, slug_0, quantity);
                } catch (err_1) {
                    console.error("Update quantity failed:", err_1);
                    syncCart();
                }
            } else {
                setCartItems({
                    "CartProvider.useCallback[updateQuantity]": (prev_3)=>prev_3.map({
                            "CartProvider.useCallback[updateQuantity]": (i_2)=>i_2.slug === slug_0 ? {
                                    ...i_2,
                                    quantity
                                } : i_2
                        }["CartProvider.useCallback[updateQuantity]"])
                }["CartProvider.useCallback[updateQuantity]"]);
            }
        }
    }["CartProvider.useCallback[updateQuantity]"], [
        isAuthenticated,
        token,
        removeFromCart,
        syncCart
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": async ()=>{
            if (isAuthenticated && token) {
                try {
                    setCartItems([]);
                    showToast("Bag cleared");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCartApi"])(token);
                } catch (err_2) {
                    console.error("Clear cart failed:", err_2);
                    syncCart();
                }
            } else {
                setCartItems([]);
                showToast("Bag cleared");
            }
            // Also clear guest storage
            localStorage.removeItem("cart_guest");
        }
    }["CartProvider.useCallback[clearCart]"], [
        isAuthenticated,
        token,
        syncCart,
        showToast
    ]);
    const cartTotal = cartItems.reduce((total, item_1)=>total + item_1.price * item_1.quantity, 0);
    const cartCount = cartItems.reduce((count, item_2)=>count + item_2.quantity, 0);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[value]": ()=>({
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
                isLoaded,
                isSyncing
            })
    }["CartProvider.useMemo[value]"], [
        cartItems,
        isLoaded,
        isSyncing,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/client/src/contexts/CartContext.js",
        lineNumber: 144,
        columnNumber: 10
    }, this);
}
_s(CartProvider, "LBG3iENSaTchJC+RGxzzNBkGs1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestSync"]
    ];
});
_c = CartProvider;
function useCart() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "08c902f7ccbecb9084b9bd19550798be84e03e7ed473e16024e51b03e7f09f17") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "08c902f7ccbecb9084b9bd19550798be84e03e7ed473e16024e51b03e7f09f17";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/contexts/WishlistContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/ToastContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/hooks/useGuestSync.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function WishlistProvider({ children }) {
    _s();
    const { token, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { syncWithGuest, syncToStorage, isSyncing, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestSync"])("wishlist_guest", __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"], __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWishlist"]);
    const syncWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[syncWishlist]": ()=>{
            syncWithGuest(isAuthenticated, token, setWishlistItems);
        }
    }["WishlistProvider.useCallback[syncWishlist]"], [
        isAuthenticated,
        token,
        syncWithGuest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            syncWishlist();
        }
    }["WishlistProvider.useEffect"], [
        syncWishlist
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            syncToStorage(wishlistItems, isAuthenticated, isLoaded);
        }
    }["WishlistProvider.useEffect"], [
        wishlistItems,
        isLoaded,
        isAuthenticated,
        syncToStorage
    ]);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[toggleWishlist]": async (product)=>{
            const exists = wishlistItems.some({
                "WishlistProvider.useCallback[toggleWishlist].exists": (item)=>item.slug === product.slug
            }["WishlistProvider.useCallback[toggleWishlist].exists"]);
            if (isAuthenticated && token) {
                try {
                    if (exists) {
                        setWishlistItems({
                            "WishlistProvider.useCallback[toggleWishlist]": (prev)=>prev.filter({
                                    "WishlistProvider.useCallback[toggleWishlist]": (item_0)=>item_0.slug !== product.slug
                                }["WishlistProvider.useCallback[toggleWishlist]"])
                        }["WishlistProvider.useCallback[toggleWishlist]"]);
                        showToast("Removed from wishlist");
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromWishlist"])(token, product.slug);
                    } else {
                        setWishlistItems({
                            "WishlistProvider.useCallback[toggleWishlist]": (prev_0)=>[
                                    ...prev_0,
                                    product
                                ]
                        }["WishlistProvider.useCallback[toggleWishlist]"]);
                        showToast(`Saved ${product.name} to wishlist`);
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWishlist"])(token, {
                            slug: product.slug,
                            name: product.name,
                            price: product.price,
                            image: product.images?.[0] || product.image
                        });
                    }
                } catch (err) {
                    console.error("Wishlist update failed:", err);
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"])(token);
                    setWishlistItems(data.items || []);
                }
            } else {
                // Guest logic
                if (exists) {
                    setWishlistItems({
                        "WishlistProvider.useCallback[toggleWishlist]": (prev_1)=>prev_1.filter({
                                "WishlistProvider.useCallback[toggleWishlist]": (item_1)=>item_1.slug !== product.slug
                            }["WishlistProvider.useCallback[toggleWishlist]"])
                    }["WishlistProvider.useCallback[toggleWishlist]"]);
                    showToast("Removed from wishlist");
                } else {
                    setWishlistItems({
                        "WishlistProvider.useCallback[toggleWishlist]": (prev_2)=>[
                                ...prev_2,
                                product
                            ]
                    }["WishlistProvider.useCallback[toggleWishlist]"]);
                    showToast(`Saved ${product.name} to wishlist`);
                }
            }
        }
    }["WishlistProvider.useCallback[toggleWishlist]"], [
        wishlistItems,
        isAuthenticated,
        token,
        showToast
    ]);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[isInWishlist]": (slug)=>{
            return wishlistItems.some({
                "WishlistProvider.useCallback[isInWishlist]": (item_2)=>item_2.slug === slug
            }["WishlistProvider.useCallback[isInWishlist]"]);
        }
    }["WishlistProvider.useCallback[isInWishlist]"], [
        wishlistItems
    ]);
    const clearWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[clearWishlist]": async ()=>{
            if (isAuthenticated && token) {
                try {
                    setWishlistItems([]);
                    showToast("Wishlist cleared");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearWishlistApi"])(token);
                } catch (err_0) {
                    console.error("Failed to clear wishlist:", err_0);
                }
            } else {
                setWishlistItems([]);
                showToast("Wishlist cleared");
            }
            // Also clear guest storage
            localStorage.removeItem("wishlist_guest");
        }
    }["WishlistProvider.useCallback[clearWishlist]"], [
        isAuthenticated,
        token,
        showToast
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WishlistProvider.useMemo[value]": ()=>({
                wishlistItems,
                wishlistCount: wishlistItems.length,
                toggleWishlist,
                isInWishlist,
                clearWishlist,
                isSyncing,
                isLoaded
            })
    }["WishlistProvider.useMemo[value]"], [
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        isSyncing,
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/client/src/contexts/WishlistContext.js",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
_s(WishlistProvider, "f4kYpAkQPtIwFVgx1FzAAbfXVo8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$hooks$2f$useGuestSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestSync"]
    ];
});
_c = WishlistProvider;
function useWishlist() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "fab3a6b012ff628a10cead37ae3efadafba8133f10075808fac3081251f0c573") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fab3a6b012ff628a10cead37ae3efadafba8133f10075808fac3081251f0c573";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
_s1(useWishlist, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/contexts/SettingsContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsProvider",
    ()=>SettingsProvider,
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function SettingsProvider({ children }) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadSettings = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSiteSettings"])();
            if (data && data.settings) {
                setSettings(data.settings);
                // Cache the latest "truth"
                localStorage.setItem("site_settings", JSON.stringify(data.settings));
            }
        } catch (error) {
            console.error("Error loading site settings:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            const init = {
                "SettingsProvider.useEffect.init": async ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        const saved = localStorage.getItem("site_settings");
                        if (saved) {
                            try {
                                setSettings(JSON.parse(saved));
                            } catch (e) {
                                console.error("Failed to parse cached settings", e);
                            }
                        }
                    }
                    await loadSettings();
                }
            }["SettingsProvider.useEffect.init"];
            init();
        }
    }["SettingsProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            settings,
            loading,
            refreshSettings: loadSettings
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/client/src/contexts/SettingsContext.js",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_s(SettingsProvider, "NbmPcGL1GhgnRY0gyVUleq8hn/s=");
_c = SettingsProvider;
const useSettings = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "69bcda161b391107af807ffbd452a21fc478e079607659d158462eea7d5313bb") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "69bcda161b391107af807ffbd452a21fc478e079607659d158462eea7d5313bb";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};
_s1(useSettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SettingsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/layout/TopBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/SettingsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Custom SVG Brand Icons since they are missing in the current lucide-react version
const FacebookIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { size } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== size) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: t1
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = size;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = FacebookIcon;
const InstagramIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { size } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== size) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = size;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c1 = InstagramIcon;
const TwitterIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { size } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== size) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: t1
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = size;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c2 = TwitterIcon;
const YoutubeIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { size } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 115,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== size) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = size;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c3 = YoutubeIcon;
const LinkedinIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { size } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 148,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "2",
            y: "9",
            width: "4",
            height: "12"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 149,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "4",
            cy: "4",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 150,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== size) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 161,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = size;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c4 = LinkedinIcon;
function TopBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7aebb787eae6535c339423f473c049f05a4e99fe3bde7feaf9a0ab51695ecec";
    }
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname?.startsWith("/admin")) {
        return null;
    }
    const phone = settings?.phone || "";
    const email = settings?.email || "";
    const address = settings?.address || "";
    const topBarText = settings?.topBarText || "";
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookIcon, {
            size: 12
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const t1 = settings?.social?.facebook;
    let t2;
    if ($[2] !== t1) {
        t2 = {
            icon: t0,
            url: t1,
            label: "Facebook"
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {
            size: 12
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = settings?.social?.instagram;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            icon: t3,
            url: t4,
            label: "Instagram"
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TwitterIcon, {
            size: 12
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 230,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = settings?.social?.twitter;
    let t8;
    if ($[8] !== t7) {
        t8 = {
            icon: t6,
            url: t7,
            label: "Twitter"
        };
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YoutubeIcon, {
            size: 12
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 250,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = settings?.social?.youtube;
    let t11;
    if ($[11] !== t10) {
        t11 = {
            icon: t9,
            url: t10,
            label: "YouTube"
        };
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedinIcon, {
            size: 12
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = settings?.social?.linkedin;
    let t14;
    if ($[14] !== t13) {
        t14 = {
            icon: t12,
            url: t13,
            label: "LinkedIn"
        };
        $[14] = t13;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== t11 || $[17] !== t14 || $[18] !== t2 || $[19] !== t5 || $[20] !== t8) {
        t15 = [
            t2,
            t5,
            t8,
            t11,
            t14
        ].filter(_TopBarAnonymous);
        $[16] = t11;
        $[17] = t14;
        $[18] = t2;
        $[19] = t5;
        $[20] = t8;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    const socialLinks = t15;
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-1 h-1 rounded-full bg-brand animate-pulse"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== topBarText) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-2 shrink-0",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-black uppercase tracking-[0.2em] text-white whitespace-nowrap",
                    children: topBarText
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/TopBar.js",
                    lineNumber: 310,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[23] = topBarText;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            size: 11,
            className: "text-brand"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    const t19 = `tel:${phone}`;
    let t20;
    if ($[26] !== phone || $[27] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 group cursor-pointer shrink-0",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: t19,
                    className: "text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider whitespace-nowrap",
                    children: phone
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/TopBar.js",
                    lineNumber: 326,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[26] = phone;
        $[27] = t19;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            size: 11,
            className: "text-brand"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    const t22 = `mailto:${email}`;
    let t23;
    if ($[30] !== email || $[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 group cursor-pointer shrink-0",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: t22,
                    className: "text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider whitespace-nowrap",
                    children: email
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/TopBar.js",
                    lineNumber: 343,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[30] = email;
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            size: 11,
            className: "text-brand"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] !== address) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden xl:flex items-center gap-1.5 group cursor-pointer shrink-0",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider truncate max-w-50",
                    children: address
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/TopBar.js",
                    lineNumber: 359,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[34] = address;
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] !== t20 || $[37] !== t23 || $[38] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 md:gap-8 lg:border-l lg:border-white/10 lg:pl-8",
            children: [
                t20,
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t23;
        $[38] = t25;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] !== t17 || $[41] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 md:gap-8 overflow-hidden",
            children: [
                t17,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t26;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] !== socialLinks) {
        t28 = socialLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: socialLinks.map(_TopBarSocialLinksMap)
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 386,
            columnNumber: 37
        }, this);
        $[43] = socialLinks;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:flex items-center shrink-0",
            children: t28
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[45] = t28;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    let t30;
    if ($[47] !== t27 || $[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-linear-to-r from-brand-blue to-[#051c36] text-white py-1.5 md:py-2.5 border-b border-white/5 relative z-60",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide flex flex-row justify-between items-center gap-4",
                children: [
                    t27,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/layout/TopBar.js",
                lineNumber: 402,
                columnNumber: 138
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/TopBar.js",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[47] = t27;
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    return t30;
}
_s(TopBar, "pBXopswByVQfNkT6/UIpybt/HUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c5 = TopBar;
function _TopBarSocialLinksMap(link_0, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link_0.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-brand transition-all duration-300 hover:-translate-y-0.5 border border-white/5",
        "aria-label": link_0.label,
        children: link_0.icon
    }, idx, false, {
        fileName: "[project]/client/src/components/layout/TopBar.js",
        lineNumber: 412,
        columnNumber: 10
    }, this);
}
function _TopBarAnonymous(link) {
    return link.url;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FacebookIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
__turbopack_context__.k.register(_c2, "TwitterIcon");
__turbopack_context__.k.register(_c3, "YoutubeIcon");
__turbopack_context__.k.register(_c4, "LinkedinIcon");
__turbopack_context__.k.register(_c5, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/layout/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/WishlistContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$layout$2f$TopBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/layout/TopBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/SettingsContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cartCount, cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { wishlistCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { user, isAuthenticated, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileCategoriesOpen, setMobileCategoriesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"]);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "Navbar.useSyncExternalStore[mounted]": ()=>({
                "Navbar.useSyncExternalStore[mounted]": ()=>{}
            })["Navbar.useSyncExternalStore[mounted]"]
    }["Navbar.useSyncExternalStore[mounted]"], {
        "Navbar.useSyncExternalStore[mounted]": ()=>true
    }["Navbar.useSyncExternalStore[mounted]"], {
        "Navbar.useSyncExternalStore[mounted]": ()=>false
    }["Navbar.useSyncExternalStore[mounted]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            const loadCategories = {
                "Navbar.useEffect.loadCategories": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])();
                        if (data && data.categories && data.categories.length > 0) {
                            setCategories(data.categories);
                        }
                    } catch (error) {
                        console.error("Error loading categories for navbar:", error);
                    }
                }
            }["Navbar.useEffect.loadCategories"];
            loadCategories();
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileMenuOpen
    ]);
    // Reset menu state during render if path changes - Recommended React pattern for adjusting state
    const [prevPathname, setPrevPathname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pathname);
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (mobileCategoriesOpen) setMobileCategoriesOpen(false);
    }
    if (pathname?.startsWith("/admin")) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-sm" : ""} border-b border-slate-50`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$layout$2f$TopBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/client/src/components/layout/Navbar.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container-wide transition-all duration-300 ${isScrolled ? "py-2" : "py-3 md:py-4"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 relative flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: settings?.logo || "/favicon.ico",
                                        alt: `${settings?.websiteName || "Spark Innovations"} Logo`,
                                        fill: true,
                                        className: "object-contain",
                                        sizes: "32px"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col leading-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[17px] font-black uppercase tracking-tight text-brand-blue",
                                            children: "KUTCHINA"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] font-black uppercase tracking-[0.12em] text-brand mt-0.5",
                                            children: "Spark Innovations"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/nav",
                                    children: link.isDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors py-2 flex items-center gap-1",
                                                children: [
                                                    link.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 bg-brand rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-100 shadow-2xl rounded-sm p-6 min-w-60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-4",
                                                        children: [
                                                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/categories/${cat.slug}`,
                                                                    className: "text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors flex items-center justify-between group/cat",
                                                                    children: [
                                                                        cat.name,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            size: 12,
                                                                            className: "opacity-0 -translate-x-2 transition-all group-hover/cat:opacity-100 group-hover/cat:translate-x-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                            lineNumber: 108,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, cat.slug, true, {
                                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                    lineNumber: 106,
                                                                    columnNumber: 50
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-4 border-t border-slate-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/categories",
                                                                    className: "text-[9px] font-black uppercase tracking-widest text-brand-blue hover:text-brand flex items-center gap-2",
                                                                    children: [
                                                                        "View All Categories ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            size: 10
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                            lineNumber: 112,
                                                                            columnNumber: 51
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                    lineNumber: 111,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                lineNumber: 110,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 104,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href || "#",
                                        className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors py-2 block",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this)
                                }, link.label, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 96,
                                    columnNumber: 36
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-6",
                            children: [
                                mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: isAuthenticated ? "/wishlist" : "/auth/login?redirect=/wishlist",
                                            className: "relative text-brand-blue hover:text-brand transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-2 -right-2 w-4 h-4 bg-brand text-white text-[8px] font-bold flex items-center justify-center rounded-full",
                                                    children: wishlistCount
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 128,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/cart",
                                                    className: "relative text-brand-blue hover:text-brand transition-colors block py-1",
                                                    "aria-label": `View Shopping Cart (${cartCount} items)`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this),
                                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute -top-1 -right-2 w-4 h-4 bg-brand text-white text-[8px] font-bold flex items-center justify-center rounded-full",
                                                            children: cartCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                            lineNumber: 136,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-80 bg-white border border-slate-100 shadow-2xl rounded-sm p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] mb-4 pb-2 border-b border-slate-50",
                                                                children: "Shopping Cart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this),
                                                            cartItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "max-h-60 overflow-y-auto pr-2 custom-scrollbar space-y-4 mb-6",
                                                                        children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-12 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden shrink-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: item.images?.[0] || item.image || "/images/placeholder.png",
                                                                                            alt: item.name,
                                                                                            fill: true,
                                                                                            className: "object-contain",
                                                                                            sizes: "48px"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                            lineNumber: 150,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                        lineNumber: 149,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[10px] font-black text-brand-blue uppercase leading-tight truncate mb-1",
                                                                                                children: item.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                                lineNumber: 153,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex justify-between items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-[9px] text-slate-400 font-bold",
                                                                                                        children: [
                                                                                                            "QTY: ",
                                                                                                            item.quantity
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                                        lineNumber: 155,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-[10px] font-black text-brand",
                                                                                                        children: [
                                                                                                            "₹",
                                                                                                            (item.price * item.quantity).toLocaleString("en-IN")
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                                        lineNumber: 156,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                                lineNumber: 154,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                        lineNumber: 152,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, item.slug, true, {
                                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                lineNumber: 148,
                                                                                columnNumber: 52
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                        lineNumber: 147,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/cart",
                                                                                className: "w-full block text-center py-3 border border-slate-200 text-brand-blue font-black uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-colors",
                                                                                children: "View Cart"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                lineNumber: 163,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "/checkout",
                                                                                className: "w-full block text-center py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] hover:bg-brand transition-colors",
                                                                                children: "Checkout"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                                lineNumber: 166,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                        lineNumber: 162,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-8 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                                                        children: "Your cart is empty"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                        lineNumber: 171,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/products",
                                                                        className: "text-[10px] font-black text-brand uppercase underline mt-2 block",
                                                                        children: "Start Shopping"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                        lineNumber: 172,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                lineNumber: 170,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                mounted && (isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/me",
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-full overflow-hidden border border-brand-dark flex items-center justify-center bg-brand text-white relative",
                                        children: user?.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: user.avatar,
                                            alt: user.name,
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "48px"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 181,
                                            columnNumber: 35
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 181,
                                            columnNumber: 124
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 179,
                                    columnNumber: 44
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth/login",
                                    className: "text-[9px] font-bold uppercase tracking-widest text-brand-blue hover:text-brand transition-colors",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 183,
                                    columnNumber: 25
                                }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/inquiry",
                                    className: "px-5 py-2 bg-brand text-white font-bold uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand-dark transition-all",
                                    children: "Inquiry"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden p-2 text-brand-blue",
                            onClick: ()=>setMobileMenuOpen(true),
                            "aria-label": "Open Menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Navbar.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/layout/Navbar.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `lg:hidden fixed inset-0 bg-white z-60 transition-all duration-500 ease-in-out overflow-y-auto ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col min-h-full p-8 pt-24 pb-12 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-6 right-6 p-2 text-brand-blue bg-slate-50 rounded-full",
                            onClick: ()=>setMobileMenuOpen(false),
                            "aria-label": "Close Menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 font-black uppercase tracking-[0.4em] text-[8px] mb-6",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: link_0.isDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMobileCategoriesOpen(!mobileCategoriesOpen),
                                                    className: "w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-brand",
                                                    children: [
                                                        link_0.label,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: `transition-transform duration-300 ${mobileCategoriesOpen ? 'rotate-90 text-brand' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `grid gap-4 pl-4 border-l-2 border-slate-50 overflow-hidden transition-all duration-300 ${mobileCategoriesOpen ? 'max-h-125 opacity-100 mt-4' : 'max-h-0 opacity-0'}`,
                                                    children: [
                                                        categories.map((cat_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/categories/${cat_0.slug}`,
                                                                className: "text-2xl font-black text-brand-blue uppercase tracking-tight block hover:text-brand transition-colors",
                                                                onClick: ()=>setMobileMenuOpen(false),
                                                                children: cat_0.name
                                                            }, cat_0.slug, false, {
                                                                fileName: "[project]/client/src/components/layout/Navbar.js",
                                                                lineNumber: 215,
                                                                columnNumber: 48
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/categories",
                                                            className: "text-sm font-black text-brand uppercase tracking-widest block pt-4 mt-4 border-t border-slate-50",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            children: "View All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 208,
                                            columnNumber: 38
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link_0.href || "#",
                                            className: "text-3xl font-black text-brand-blue uppercase tracking-tighter block",
                                            onClick: ()=>setMobileMenuOpen(false),
                                            children: link_0.label
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 222,
                                            columnNumber: 28
                                        }, this)
                                    }, link_0.label, false, {
                                        fileName: "[project]/client/src/components/layout/Navbar.js",
                                        lineNumber: 207,
                                        columnNumber: 38
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-8 border-t border-slate-100 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMobileMenuOpen(false);
                                        router.push("/cart");
                                    },
                                    className: "w-full flex items-center justify-between bg-slate-50 p-4 rounded-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    size: 20,
                                                    className: "text-brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black text-brand-blue uppercase tracking-tight text-sm",
                                                    children: [
                                                        "Shopping Cart (",
                                                        cartCount,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            className: "text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMobileMenuOpen(false);
                                        router.push(isAuthenticated ? "/wishlist" : "/auth/login?redirect=/wishlist");
                                    },
                                    className: "w-full flex items-center justify-between bg-slate-50 p-4 rounded-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    size: 20,
                                                    className: "text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black text-brand-blue uppercase tracking-tight text-sm",
                                                    children: [
                                                        "My Wishlist (",
                                                        wishlistCount,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            className: "text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMobileMenuOpen(false);
                                        router.push("/inquiry");
                                    },
                                    className: "w-full flex items-center justify-between bg-brand text-white p-4 rounded-sm text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black uppercase tracking-tight text-sm",
                                                    children: "Quick Inquiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMobileMenuOpen(false);
                                        router.push("/me");
                                    },
                                    className: "w-full flex items-center justify-between bg-slate-50 p-4 rounded-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 20,
                                                    className: "text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black text-brand-blue uppercase tracking-tight text-sm",
                                                    children: "My Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            className: "text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/layout/Navbar.js",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 262,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMobileMenuOpen(false);
                                        router.push("/auth/login");
                                    },
                                    className: "w-full flex items-center justify-center bg-brand-blue text-white p-4 rounded-sm font-black uppercase tracking-widest text-[10px]",
                                    children: "Login to Account"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Navbar.js",
                                    lineNumber: 271,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/layout/Navbar.js",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Navbar.js",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/layout/Navbar.js",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/layout/Navbar.js",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_s(Navbar, "d5wALN6Qre3Am8Sh162UmhmvcPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/layout/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/SettingsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "95916a88949d4d6672d9b8a00942faf619528173ae827d305caf051f546e2c53") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95916a88949d4d6672d9b8a00942faf619528173ae827d305caf051f546e2c53";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date().getFullYear();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const currentYear = t0;
    if (pathname?.startsWith("/admin")) {
        return null;
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand via-brand-blue to-brand"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.03] pointer-events-none",
            style: {
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px"
            }
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/favicon.ico",
                alt: "Spark Innovations Logo",
                fill: true,
                className: "object-contain",
                sizes: "40px"
            }, void 0, false, {
                fileName: "[project]/client/src/components/layout/Footer.js",
                lineNumber: 52,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-10 group cursor-default",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-black uppercase tracking-tighter",
                            children: [
                                "Spark ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand",
                                    children: "Innovations"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/layout/Footer.js",
                                    lineNumber: 59,
                                    columnNumber: 184
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/layout/Footer.js",
                            lineNumber: 59,
                            columnNumber: 113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 59,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 text-sm leading-relaxed mb-10",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 59,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs font-black uppercase tracking-[0.4em] text-brand mb-10",
            children: "Support"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                size: 18,
                className: "text-brand"
            }, void 0, false, {
                fileName: "[project]/client/src/components/layout/Footer.js",
                lineNumber: 74,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[9px] font-black uppercase tracking-widest text-brand/60 mb-1",
            children: "Direct Call"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    const t8 = settings?.phone || __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].phone;
    let t9;
    if ($[9] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-5 cursor-default",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-black text-white",
                            children: t8
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Footer.js",
                            lineNumber: 85,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 85,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 18,
                className: "text-brand"
            }, void 0, false, {
                fileName: "[project]/client/src/components/layout/Footer.js",
                lineNumber: 94,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[9px] font-black uppercase tracking-widest text-brand/60 mb-1",
            children: "Email Inquiry"
        }, void 0, false, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    const t12 = settings?.email || __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].email;
    let t13;
    if ($[13] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-5 cursor-default",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-black text-white",
                            children: t12
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Footer.js",
                            lineNumber: 105,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 105,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t13 || $[16] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        t9,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 113,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[15] = t13;
        $[16] = t9;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-black uppercase tracking-[0.4em] text-brand mb-10",
                    children: "Authorized Partner"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 122,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 text-sm leading-relaxed",
                    children: "Spark Innovations is a certified premium distributor of Kutchina appliances. Bringing world-class kitchen technology to your doorstep with expert support."
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 122,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-24",
            children: [
                t4,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] text-center md:text-left",
            children: [
                "© ",
                currentYear,
                " Computer Software Solutions | All Rights Reserved"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/terms",
                    className: "text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors",
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 144,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/terms",
                    className: "text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors",
                    children: "Terms of Service"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 144,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-12",
                    children: [
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _FooterButtonOnClick,
                            className: "w-10 h-10 bg-brand hover:bg-brand-dark flex items-center justify-center rounded-full transition-all duration-300 shadow-lg shadow-brand/20 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                size: 16,
                                className: "text-white transition-transform group-hover:-translate-y-0.5"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/layout/Footer.js",
                                lineNumber: 151,
                                columnNumber: 368
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/layout/Footer.js",
                            lineNumber: 151,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 151,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] !== t16) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gradient-to-br from-brand-blue to-[#051c36] text-white pt-24 pb-12 relative overflow-hidden",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: [
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/layout/Footer.js",
                    lineNumber: 158,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/layout/Footer.js",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    return t20;
}
_s(Footer, "OFt2dKG46tGEIxr6VDO1gOjIpxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"]
    ];
});
_c = Footer;
function _FooterButtonOnClick() {
    return window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/ui/WhatsAppFloat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/SettingsContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function WhatsAppFloat() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9797874aefdbce8822d2660c5aecf94e06ea18c377a5b146847a245825b1422c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9797874aefdbce8822d2660c5aecf94e06ea18c377a5b146847a245825b1422c";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== isDismissed) {
        t0 = ({
            "WhatsAppFloat[useEffect()]": ()=>{
                const timer = setTimeout({
                    "WhatsAppFloat[useEffect() > setTimeout()]": ()=>{
                        if (!isDismissed) {
                            setIsVisible(true);
                        }
                    }
                }["WhatsAppFloat[useEffect() > setTimeout()]"], 5000);
                return ()=>clearTimeout(timer);
            }
        })["WhatsAppFloat[useEffect()]"];
        t1 = [
            isDismissed
        ];
        $[1] = isDismissed;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (pathname?.startsWith("/admin")) {
        return null;
    }
    let t2;
    if ($[4] !== settings?.whatsappNumber) {
        t2 = ({
            "WhatsAppFloat[handleClick]": ()=>{
                const num = settings?.whatsappNumber || "918808409295";
                window.open(`https://wa.me/${num}?text=Hi! I'm interested in Kutchina products from Spark Innovations.`, "_blank");
            }
        })["WhatsAppFloat[handleClick]"];
        $[4] = settings?.whatsappNumber;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleClick = t2;
    let t3;
    if ($[6] !== isVisible) {
        t3 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 bg-white/90 backdrop-blur-xl text-brand-blue p-4 rounded-sm shadow-2xl animate-reveal max-w-[200px] relative border border-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "WhatsAppFloat[<button>.onClick]": ()=>{
                            setIsVisible(false);
                            setIsDismissed(true);
                        }
                    }["WhatsAppFloat[<button>.onClick]"],
                    className: "absolute -top-2 -right-2 w-6 h-6 bg-brand text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 10
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
                        lineNumber: 70,
                        columnNumber: 203
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
                    lineNumber: 65,
                    columnNumber: 178
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[8px] font-black uppercase tracking-[0.2em] text-brand mb-1",
                    children: "Live Support"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
                    lineNumber: 70,
                    columnNumber: 227
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] font-bold leading-tight",
                    children: "Expert advice & best deals on WhatsApp."
                }, void 0, false, {
                    fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
                    lineNumber: 70,
                    columnNumber: 323
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 65,
            columnNumber: 23
        }, this);
        $[6] = isVisible;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    let t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            size: 20,
            className: "text-brand group-hover:text-white transition-colors md:w-[24px] md:h-[24px]"
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-3 h-3 bg-brand rounded-full animate-ping"
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-3 h-3 bg-brand rounded-full border-2 border-white"
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
    }
    let t7;
    if ($[11] !== handleClick) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleClick,
            className: "relative w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-200 flex items-center justify-center transition-all hover:bg-brand group shadow-2xl hover:shadow-brand/40 active:scale-90 rounded-full",
            "aria-label": "Chat on WhatsApp",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[11] = handleClick;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t3 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end group",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/WhatsAppFloat.js",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(WhatsAppFloat, "FX6jTcktD8h2qixtZg80xyrEIzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$SettingsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"]
    ];
});
_c = WhatsAppFloat;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppFloat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/ui/SmoothScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function SmoothScroll(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "428ed1cf3fe292e9fe9475cf1c8b6ad7f930e031bc3d4e940abec722664e7a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "428ed1cf3fe292e9fe9475cf1c8b6ad7f930e031bc3d4e940abec722664e7a76";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            duration: 1.2,
            easing: _temp,
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            infinite: false
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
            root: true,
            options: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/SmoothScroll.js",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[2] = children;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = SmoothScroll;
function _temp(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
}
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/GoogleAuthProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleAuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GoogleAuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "19b163a3603b3db2855b9436b8b2556b6610170729f00141d0882e346ced96d6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19b163a3603b3db2855b9436b8b2556b6610170729f00141d0882e346ced96d6";
    }
    const { children } = t0;
    const [clientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    let t1;
    let t2;
    if ($[1] !== clientId) {
        t1 = ({
            "GoogleAuthProvider[useEffect()]": ()=>{
                if (!clientId) {
                    console.warn("Google OAuth is not configured. Google sign-in will not be available.");
                }
            }
        })["GoogleAuthProvider[useEffect()]"];
        t2 = [
            clientId
        ];
        $[1] = clientId;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!clientId) {
        let t3;
        if ($[4] !== children) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/client/src/components/GoogleAuthProvider.js",
                lineNumber: 40,
                columnNumber: 12
            }, this);
            $[4] = children;
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    let t3;
    if ($[6] !== children || $[7] !== clientId) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleOAuthProvider"], {
            clientId: clientId,
            children: children
        }, void 0, false, {
            fileName: "[project]/client/src/components/GoogleAuthProvider.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = clientId;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(GoogleAuthProvider, "QFE6t3BNLjNv1fWlKX2nHqHdi+I=");
_c = GoogleAuthProvider;
var _c;
__turbopack_context__.k.register(_c, "GoogleAuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/ErrorBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-8 rounded-lg shadow-sm border border-red-100 max-w-md text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/ErrorBoundary.js",
                                        lineNumber: 25,
                                        columnNumber: 193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "8",
                                        x2: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/ErrorBoundary.js",
                                        lineNumber: 25,
                                        columnNumber: 225
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12.01",
                                        y2: "16"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/ErrorBoundary.js",
                                        lineNumber: 25,
                                        columnNumber: 263
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/components/ErrorBoundary.js",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ErrorBoundary.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-slate-800 mb-2",
                            children: "Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ErrorBoundary.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mb-6",
                            children: "We encountered an unexpected error. Please try refreshing the page."
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ErrorBoundary.js",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: "bg-brand text-white px-6 py-2 rounded-sm font-semibold hover:bg-brand-dark transition-colors",
                            children: "Refresh Page"
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ErrorBoundary.js",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/ErrorBoundary.js",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/ErrorBoundary.js",
                lineNumber: 22,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_src_040duyr._.js.map