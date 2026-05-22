(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/src/components/home/HeroSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const HERO_SLIDES = [
    {
        id: 1,
        title: "Revolutionary Water Healthifiers",
        subtitle: "Advanced RO+UV+UF Technology",
        description: "Experience the purest drinking water with 7-stage purification and mineral enrichment.",
        image: "/images/hero/purifier.png",
        accent: "text-brand",
        bg: "bg-orange-50/10"
    },
    {
        id: 2,
        title: "i-Auto Clean Smart Chimneys",
        subtitle: "Power Meet Intelligence",
        description: "Industry-leading suction power with filterless technology and motion sensor controls.",
        image: "/images/hero/chimney.png",
        accent: "text-brand",
        bg: "bg-orange-50/10"
    },
    {
        id: 3,
        title: "Premium Built-in Hobs",
        subtitle: "The Heart of Your Kitchen",
        description: "Toughened glass surface with high-efficiency brass burners for the modern Indian chef.",
        image: "/images/hero/hob.png",
        accent: "text-brand",
        bg: "bg-orange-50/10"
    }
];
function HeroSection() {
    _s();
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const loadBanners = {
                "HeroSection.useEffect.loadBanners": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBanners"])();
                        const activeBanners = (data.banners || []).filter({
                            "HeroSection.useEffect.loadBanners.activeBanners": (b)=>b.active
                        }["HeroSection.useEffect.loadBanners.activeBanners"]);
                        if (activeBanners.length > 0) {
                            // Format dynamic banners to match slide structure
                            const formattedBanners = activeBanners.map({
                                "HeroSection.useEffect.loadBanners.formattedBanners": (b_0)=>({
                                        id: b_0._id,
                                        title: b_0.title,
                                        subtitle: b_0.subtitle || "Premium Collection",
                                        description: b_0.description || "Discover our latest range of innovative home appliances.",
                                        image: b_0.image,
                                        link: b_0.link || "/products"
                                    })
                            }["HeroSection.useEffect.loadBanners.formattedBanners"]);
                            setBanners(formattedBanners);
                        } else {
                            // Fallback to static slides if no active banners in DB
                            setBanners(HERO_SLIDES);
                        }
                    } catch (err) {
                        console.error("Error loading hero banners:", err);
                        setBanners(HERO_SLIDES);
                    } finally{
                        setLoading(false);
                    }
                }
            }["HeroSection.useEffect.loadBanners"];
            loadBanners();
        }
    }["HeroSection.useEffect"], []);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[nextSlide]": ()=>{
            if (banners.length === 0) return;
            setCurrentSlide({
                "HeroSection.useCallback[nextSlide]": (prev)=>(prev + 1) % banners.length
            }["HeroSection.useCallback[nextSlide]"]);
        }
    }["HeroSection.useCallback[nextSlide]"], [
        banners.length
    ]);
    const prevSlide = ()=>{
        if (banners.length === 0) return;
        setCurrentSlide((prev_0)=>(prev_0 - 1 + banners.length) % banners.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (banners.length <= 1) return;
            const timer = setInterval(nextSlide, 8000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(timer)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        nextSlide,
        banners.length
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[50vh] md:h-[85vh] bg-slate-50 animate-pulse flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-black uppercase tracking-widest text-slate-300",
                children: "Loading Experience..."
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/HeroSection.js",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/home/HeroSection.js",
            lineNumber: 80,
            columnNumber: 12
        }, this);
    }
    const slide = banners[currentSlide] || HERO_SLIDES[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-[60vh] md:h-[85vh] bg-white overflow-hidden group pt-24 md:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: banners.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: s.image,
                                alt: s.title,
                                fill: true,
                                className: "object-cover md:object-contain lg:object-cover object-center",
                                priority: idx === 0,
                                sizes: "100vw"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/HeroSection.js",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-linear-to-r from-white via-white/20 md:via-white/40 to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/HeroSection.js",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/HeroSection.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.id, true, {
                        fileName: "[project]/client/src/components/home/HeroSection.js",
                        lineNumber: 87,
                        columnNumber: 34
                    }, this))
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/HeroSection.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full container-wide flex items-center z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl space-y-4 md:space-y-8 animate-reveal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 md:space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-2 md:px-3 py-1 bg-white border border-slate-100 rounded-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-brand"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/HeroSection.js",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500",
                                            children: slide.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/HeroSection.js",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/home/HeroSection.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter",
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/home/HeroSection.js",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hidden md:block text-slate-600 text-sm md:text-lg font-medium max-w-lg leading-relaxed",
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/home/HeroSection.js",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/home/HeroSection.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: slide.link || "/products",
                                className: "px-6 md:px-10 py-3 md:py-4 bg-brand text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-sm hover:bg-brand-dark transition-all flex items-center gap-2 group/btn",
                                children: [
                                    "Shop Now",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 14,
                                        className: "group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/components/home/HeroSection.js",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/components/home/HeroSection.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/home/HeroSection.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/home/HeroSection.js",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/HeroSection.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 md:bottom-10 left-6 md:left-20 flex items-center gap-2 md:gap-3 z-30",
                children: banners.map((_, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(idx_0),
                        className: `h-1 md:h-1.5 transition-all duration-500 rounded-full ${idx_0 === currentSlide ? 'w-8 md:w-12 bg-brand' : 'w-2 md:w-4 bg-slate-200 hover:bg-slate-300'}`
                    }, idx_0, false, {
                        fileName: "[project]/client/src/components/home/HeroSection.js",
                        lineNumber: 121,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/HeroSection.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-10 bottom-10 gap-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-12 h-12 bg-white border border-slate-100 text-slate-900 flex items-center justify-center rounded-full hover:bg-brand hover:text-white transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/home/HeroSection.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/home/HeroSection.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "w-12 h-12 bg-white border border-slate-100 text-slate-900 flex items-center justify-center rounded-full hover:bg-brand hover:text-white transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/home/HeroSection.js",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/home/HeroSection.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/home/HeroSection.js",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/home/HeroSection.js",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
_s(HeroSection, "3e2cuxqKyGiwGnsUYcxwNhlZB5o=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/ui/SectionHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function SectionHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "98f997991e4971807c90eac642843d8ac72b1223d06f54152e0d414ba3f30e23") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "98f997991e4971807c90eac642843d8ac72b1223d06f54152e0d414ba3f30e23";
    }
    const { badge, title, description, align: t1, className: t2 } = t0;
    const align = t1 === undefined ? "left" : t1;
    const className = t2 === undefined ? "" : t2;
    const isCentered = align === "center";
    const t3 = `mb-8 md:mb-16 ${isCentered ? "text-center mx-auto" : ""} ${className}`;
    let t4;
    if ($[1] !== badge || $[2] !== isCentered) {
        t4 = badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `inline-flex items-center gap-2 mb-3 md:mb-4 ${isCentered ? "justify-center" : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-brand font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px]",
                children: badge
            }, void 0, false, {
                fileName: "[project]/client/src/components/ui/SectionHeader.js",
                lineNumber: 23,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/SectionHeader.js",
            lineNumber: 23,
            columnNumber: 19
        }, this);
        $[1] = badge;
        $[2] = isCentered;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl sm:text-3xl md:text-5xl font-black text-brand-blue leading-[1.2] uppercase tracking-tight mb-3 md:mb-4",
            children: title
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/SectionHeader.js",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = title;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== description || $[7] !== isCentered) {
        t6 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `text-slate-500 font-medium text-[11px] md:text-lg leading-relaxed max-w-2xl ${isCentered ? "mx-auto" : ""}`,
            children: description
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/SectionHeader.js",
            lineNumber: 40,
            columnNumber: 25
        }, this);
        $[6] = description;
        $[7] = isCentered;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/SectionHeader.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/home/FeaturedCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/SectionHeader.js [app-client] (ecmascript)");
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
function FeaturedCategories() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedCategories.useEffect": ()=>{
            const getCategories = {
                "FeaturedCategories.useEffect.getCategories": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])();
                        if (data && data.categories && data.categories.length > 0) {
                            setCategories(data.categories);
                        } else {
                            setCategories(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"]);
                        }
                    } catch (error) {
                        setCategories(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FeaturedCategories.useEffect.getCategories"];
            getCategories();
        }
    }["FeaturedCategories.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    badge: "Categories",
                    title: "Explore Our Collection",
                    description: "Browse through our wide range of premium kitchen appliances."
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: loading ? [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[4/3] bg-slate-50 animate-pulse rounded-sm"
                        }, i, false, {
                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                            lineNumber: 35,
                            columnNumber: 50
                        }, this)) : categories.map((category, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/categories/${category.slug}`,
                            className: `group relative bg-white border border-slate-100 rounded-sm overflow-hidden hover:shadow-xl hover:border-brand transition-all animate-reveal delay-${(idx + 1) * 100}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[16/10] bg-slate-50 relative overflow-hidden",
                                    children: [
                                        category.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: category.image,
                                            alt: category.name,
                                            fill: true,
                                            className: "object-cover group-hover:scale-110 transition-transform duration-700",
                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 37,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center text-slate-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                size: 64,
                                                strokeWidth: 1
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                                lineNumber: 38,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 37,
                                            columnNumber: 241
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-black text-brand-blue uppercase tracking-tight group-hover:text-brand transition-colors",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs leading-relaxed line-clamp-2",
                                            children: category.description || "Premium Kutchina appliances for your modern kitchen."
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-brand font-black text-[10px] uppercase tracking-widest pt-2",
                                            children: [
                                                "View Collection ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                                    lineNumber: 51,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, category.slug || category._id, true, {
                            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                            lineNumber: 35,
                            columnNumber: 169
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/FeaturedCategories.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/home/FeaturedCategories.js",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/client/src/components/home/FeaturedCategories.js",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_s(FeaturedCategories, "Ku/3fYTZ4p+HhLbl/Ex0fsiHh1U=");
_c = FeaturedCategories;
var _c;
__turbopack_context__.k.register(_c, "FeaturedCategories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/ui/ProductCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/indian-rupee.mjs [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/WishlistContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/contexts/AuthContext.js [app-client] (ecmascript)");
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
function ProductCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "816cc697e1c52154c1993cb2232d926e7a589bba5fb024424684e92700bfed11") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "816cc697e1c52154c1993cb2232d926e7a589bba5fb024424684e92700bfed11";
    }
    const { product } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { toggleWishlist, isInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (!product) {
        return null;
    }
    let t1;
    if ($[1] !== addToCart || $[2] !== product) {
        t1 = ({
            "ProductCard[handleAddToCart]": (e)=>{
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
            }
        })["ProductCard[handleAddToCart]"];
        $[1] = addToCart;
        $[2] = product;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleAddToCart = t1;
    let t2;
    if ($[4] !== isAuthenticated || $[5] !== pathname || $[6] !== product || $[7] !== router || $[8] !== toggleWishlist) {
        t2 = ({
            "ProductCard[handleWishlistClick]": (e_0)=>{
                e_0.preventDefault();
                e_0.stopPropagation();
                if (!isAuthenticated) {
                    router.push(`/auth/login?redirect=${pathname}`);
                    return;
                }
                toggleWishlist(product);
            }
        })["ProductCard[handleWishlistClick]"];
        $[4] = isAuthenticated;
        $[5] = pathname;
        $[6] = product;
        $[7] = router;
        $[8] = toggleWishlist;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const handleWishlistClick = t2;
    const t3 = `/products/${product.slug}`;
    const t4 = product.images?.[0] || product.image || "/images/placeholder-product.svg";
    let t5;
    if ($[10] !== product.name || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: t4,
            alt: product.name,
            fill: true,
            className: "object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-700",
            sizes: "(max-width: 1023px) 50vw, 25vw"
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = product.name;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = `p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 ${isInWishlist(product.slug) ? "bg-brand text-white shadow-lg shadow-brand/20 scale-110" : "bg-white/90 text-slate-400 hover:text-brand hover:bg-white shadow-sm border border-slate-100"}`;
    const t7 = isInWishlist(product.slug) ? "currentColor" : "none";
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            size: 14,
            className: "md:w-4 md:h-4",
            fill: t7,
            strokeWidth: 2.5
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== handleWishlistClick || $[16] !== t6 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleWishlistClick,
                className: t6,
                children: t8
            }, void 0, false, {
                fileName: "[project]/client/src/components/ui/ProductCard.js",
                lineNumber: 99,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[15] = handleWishlistClick;
        $[16] = t6;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t3 || $[20] !== t5 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t3,
            className: "block aspect-square relative p-4 md:p-8 bg-[#fcfcfc] group-hover:bg-white transition-colors duration-500",
            children: [
                t5,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[19] = t3;
        $[20] = t5;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== product.category) {
        t11 = product.category?.replace(/-/g, " ");
        $[23] = product.category;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[7px] md:text-[9px] font-black text-brand uppercase tracking-[0.2em] mb-1",
            children: t11
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== product.name) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs md:text-base font-black text-brand-blue line-clamp-2 leading-tight tracking-tight uppercase",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[27] = product.name;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
            size: 12,
            className: "md:w-4 md:h-4",
            strokeWidth: 4
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== product.price) {
        t15 = product.price?.toLocaleString("en-IN");
        $[30] = product.price;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 text-brand font-black text-sm md:text-xl",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/client/src/components/ui/ProductCard.js",
                    lineNumber: 158,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== product.mrp) {
        t17 = product.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 text-slate-400 mt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[8px] md:text-[9px] font-black uppercase tracking-widest",
                    children: [
                        "MRP ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden md:inline",
                            children: "(inclusive of all taxes)"
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ui/ProductCard.js",
                            lineNumber: 166,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/ui/ProductCard.js",
                    lineNumber: 166,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] md:text-[11px] font-bold line-through flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                            size: 10,
                            className: "md:w-3 md:h-3",
                            strokeWidth: 3
                        }, void 0, false, {
                            fileName: "[project]/client/src/components/ui/ProductCard.js",
                            lineNumber: 166,
                            columnNumber: 330
                        }, this),
                        product.mrp.toLocaleString("en-IN")
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/ui/ProductCard.js",
                    lineNumber: 166,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 166,
            columnNumber: 26
        }, this);
        $[34] = product.mrp;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t16 || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-0.5",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[36] = t16;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t12 || $[40] !== t13 || $[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1 md:space-y-2 mb-4",
            children: [
                t12,
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[39] = t12;
        $[40] = t13;
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
            size: 12,
            className: "md:w-4 md:h-4"
        }, void 0, false, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== handleAddToCart) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAddToCart,
            className: "w-full py-2.5 md:py-3.5 bg-brand-blue text-white font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] rounded-sm hover:bg-brand transition-all flex items-center justify-center gap-2 group-hover:translate-y-0 active:scale-95 shadow-lg shadow-brand-blue/10",
            children: [
                t20,
                "Add to Cart"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[44] = handleAddToCart;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== t19 || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 md:p-6 flex flex-col flex-1",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t10 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full",
            children: [
                t10,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/ui/ProductCard.js",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[49] = t10;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    return t23;
}
_s(ProductCard, "hQ1MDO7x6sot1vv0x3c7pyshb5E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$WishlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$contexts$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/home/ProductSlider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/SectionHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/ProductCard.js [app-client] (ecmascript)");
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
function ProductSlider() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSlider.useEffect": ()=>{
            const getProducts = {
                "ProductSlider.useEffect.getProducts": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProducts"])({
                            limit: 10
                        });
                        const list = data?.products?.length > 0 ? data.products : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"];
                        // Guarantee a minimum of 8 base items to fill space and ensure horizontal overflow even on 4K/ultrawide screens
                        let baseList_0 = [
                            ...list
                        ];
                        while(baseList_0.length < 8){
                            baseList_0 = [
                                ...baseList_0,
                                ...list
                            ];
                        }
                        // Double the list for seamless infinite loop scroll
                        const repeatedList_0 = [
                            ...baseList_0,
                            ...baseList_0
                        ];
                        setProducts(repeatedList_0);
                    } catch (error) {
                        console.error("Error fetching products for slider:", error);
                        let baseList = [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"]
                        ];
                        while(baseList.length < 8){
                            baseList = [
                                ...baseList,
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"]
                            ];
                        }
                        const repeatedList = [
                            ...baseList,
                            ...baseList
                        ];
                        setProducts(repeatedList);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProductSlider.useEffect.getProducts"];
            getProducts();
        }
    }["ProductSlider.useEffect"], []);
    // Smooth Auto-Scrolling using scrollLeft (allows manual scroll)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSlider.useEffect": ()=>{
            if (loading || !scrollRef.current) return;
            const scrollContainer = scrollRef.current;
            const animate = {
                "ProductSlider.useEffect.animate": ()=>{
                    if (!isPaused) {
                        // Increment scrollLeft slightly every frame
                        scrollContainer.scrollLeft += 0.8;
                        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                        const halfScroll = scrollContainer.scrollWidth / 2;
                        // Safety threshold: loop back if we hit the half-way mark or get close to the scroll end
                        const loopThreshold = Math.min(halfScroll, maxScroll - 5);
                        if (scrollContainer.scrollLeft >= loopThreshold) {
                            scrollContainer.scrollLeft = 0;
                        }
                    }
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["ProductSlider.useEffect.animate"];
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "ProductSlider.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["ProductSlider.useEffect"];
        }
    }["ProductSlider.useEffect"], [
        loading,
        isPaused
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-6639e4eac6b78d61" + " " + "section-padding bg-slate-50/50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "container-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                badge: "Trending",
                                title: "Premium Selection",
                                description: "Our latest smart appliances, curated for the modern lifestyle.",
                                className: "mb-0"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/ProductSlider.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: "w-fit px-6 py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand transition-all flex items-center gap-2",
                                children: "View All Products"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/ProductSlider.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/home/ProductSlider.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>setIsPaused(true),
                        onMouseLeave: ()=>setIsPaused(false),
                        className: "jsx-6639e4eac6b78d61" + " " + "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef,
                                style: {
                                    WebkitOverflowScrolling: 'touch',
                                    scrollBehavior: 'auto'
                                },
                                className: "jsx-6639e4eac6b78d61" + " " + "flex flex-nowrap gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide select-none cursor-grab active:cursor-grabbing",
                                children: loading ? [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "min-w-[280px] md:min-w-[320px] aspect-square bg-slate-100 animate-pulse rounded-sm"
                                    }, i, false, {
                                        fileName: "[project]/client/src/components/home/ProductSlider.js",
                                        lineNumber: 85,
                                        columnNumber: 52
                                    }, this)) : products.map((product, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "min-w-[280px] md:min-w-[320px] shrink-0 transition-all duration-500 hover:scale-[1.03] hover:z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            product: product
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/ProductSlider.js",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    }, `${product._id || product.slug}-${idx}`, false, {
                                        fileName: "[project]/client/src/components/home/ProductSlider.js",
                                        lineNumber: 85,
                                        columnNumber: 197
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/ProductSlider.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "hidden md:block absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50/50 to-transparent pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/ProductSlider.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "hidden md:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/ProductSlider.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/home/ProductSlider.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/home/ProductSlider.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/home/ProductSlider.js",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
_s(ProductSlider, "iGhPwnAzZRa/mzYGUU9xpCaTJs8=");
_c = ProductSlider;
var _c;
__turbopack_context__.k.register(_c, "ProductSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/home/FeaturedProducts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/SectionHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/ProductCard.js [app-client] (ecmascript)");
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
function FeaturedProducts() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedProducts.useEffect": ()=>{
            const getProducts = {
                "FeaturedProducts.useEffect.getProducts": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProducts"])({
                            featured: true
                        });
                        let list = data?.products?.length > 0 ? data.products : [];
                        // If no featured products exist in the database, fetch regular products to keep section populated
                        if (list.length === 0) {
                            const allProductsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProducts"])({
                                limit: 10
                            });
                            list = allProductsData?.products?.length > 0 ? allProductsData.products : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"];
                        }
                        // Guarantee a minimum of 8 base items to fill space and ensure horizontal overflow even on 4K/ultrawide screens
                        let baseList_0 = [
                            ...list
                        ];
                        while(baseList_0.length < 8){
                            baseList_0 = [
                                ...baseList_0,
                                ...list
                            ];
                        }
                        // Double the list for seamless infinite loop scroll
                        const repeatedList_0 = [
                            ...baseList_0,
                            ...baseList_0
                        ];
                        setProducts(repeatedList_0);
                    } catch (error) {
                        console.error("Error fetching featured products:", error);
                        let baseList = [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"]
                        ];
                        while(baseList.length < 8){
                            baseList = [
                                ...baseList,
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PRODUCTS"]
                            ];
                        }
                        const repeatedList = [
                            ...baseList,
                            ...baseList
                        ];
                        setProducts(repeatedList);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FeaturedProducts.useEffect.getProducts"];
            getProducts();
        }
    }["FeaturedProducts.useEffect"], []);
    // Smooth Auto-Scrolling using scrollLeft (allows manual scroll)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedProducts.useEffect": ()=>{
            if (loading || !scrollRef.current) return;
            const scrollContainer = scrollRef.current;
            const animate = {
                "FeaturedProducts.useEffect.animate": ()=>{
                    if (!isPaused) {
                        scrollContainer.scrollLeft += 0.8;
                        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                        const halfScroll = scrollContainer.scrollWidth / 2;
                        // Safety threshold: loop back if we hit the half-way mark or get close to the scroll end
                        const loopThreshold = Math.min(halfScroll, maxScroll - 5);
                        if (scrollContainer.scrollLeft >= loopThreshold) {
                            scrollContainer.scrollLeft = 0;
                        }
                    }
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["FeaturedProducts.useEffect.animate"];
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "FeaturedProducts.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["FeaturedProducts.useEffect"];
        }
    }["FeaturedProducts.useEffect"], [
        loading,
        isPaused
    ]);
    if (!loading && products.length === 0) {
        return null; // Premium layout hides cleanly if empty
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-6639e4eac6b78d61" + " " + "section-padding bg-white border-t border-slate-200 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "container-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                badge: "Best Sellers",
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "FEATURED ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-6639e4eac6b78d61" + " " + "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                            lineNumber: 83,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-6639e4eac6b78d61" + " " + "text-brand",
                                            children: "INNOVATIONS."
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                            lineNumber: 83,
                                            columnNumber: 99
                                        }, this)
                                    ]
                                }, void 0, true),
                                description: "Explore our best-selling smart appliances designed for the modern Indian kitchen.",
                                className: "mb-0"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: "w-fit px-6 py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand transition-all flex items-center gap-2",
                                children: "View All Products"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>setIsPaused(true),
                        onMouseLeave: ()=>setIsPaused(false),
                        className: "jsx-6639e4eac6b78d61" + " " + "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef,
                                style: {
                                    WebkitOverflowScrolling: 'touch',
                                    scrollBehavior: 'auto'
                                },
                                className: "jsx-6639e4eac6b78d61" + " " + "flex flex-nowrap gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide select-none cursor-grab active:cursor-grabbing",
                                children: loading ? [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "min-w-[280px] md:min-w-[320px] aspect-square bg-slate-50 animate-pulse rounded-sm"
                                    }, i, false, {
                                        fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                        lineNumber: 95,
                                        columnNumber: 52
                                    }, this)) : products.map((product, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "min-w-[280px] md:min-w-[320px] shrink-0 transition-all duration-500 hover:scale-[1.03] hover:z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            product: product
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    }, `${product._id || product.slug}-${idx}`, false, {
                                        fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                        lineNumber: 95,
                                        columnNumber: 196
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "hidden md:block absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "hidden md:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/home/FeaturedProducts.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/src/components/home/FeaturedProducts.js",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
_s(FeaturedProducts, "iGhPwnAzZRa/mzYGUU9xpCaTJs8=");
_c = FeaturedProducts;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProducts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/home/WhyChooseUs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/wrench.mjs [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/components/ui/SectionHeader.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "100% GENUINE",
        description: "Official Kutchina warranty."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        title: "EXPERT ADVICE",
        description: "Guidance for every kitchen."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        title: "QUICK INSTALL",
        description: "Trained professionals."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: "24/7 SUPPORT",
        description: "Dedicated helpdesk."
    }
];
function WhyChooseUs() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "f770415480d8117e40d46eb308a84c98f912fbca644cea4787417613fa9b220f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f770415480d8117e40d46eb308a84c98f912fbca644cea4787417613fa9b220f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$components$2f$ui$2f$SectionHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            badge: "Distributor Benefits",
            title: "Why Choose Spark Innovations",
            description: "We are committed to providing the best service and quality appliances for your home."
        }, void 0, false, {
            fileName: "[project]/client/src/components/home/WhyChooseUs.js",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section-padding bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: features.map(_WhyChooseUsFeaturesMap)
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                        lineNumber: 40,
                        columnNumber: 95
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                lineNumber: 40,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/home/WhyChooseUs.js",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = WhyChooseUs;
function _WhyChooseUsFeaturesMap(feature) {
    const IconComp = feature.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-lg border border-slate-100 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 bg-slate-50 text-brand flex items-center justify-center rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComp, {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                    lineNumber: 49,
                    columnNumber: 199
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                lineNumber: 49,
                columnNumber: 105
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-brand-blue uppercase tracking-tight",
                        children: feature.title
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                        lineNumber: 49,
                        columnNumber: 254
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-sm leading-relaxed",
                        children: feature.description
                    }, void 0, false, {
                        fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                        lineNumber: 49,
                        columnNumber: 349
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/components/home/WhyChooseUs.js",
                lineNumber: 49,
                columnNumber: 227
            }, this)
        ]
    }, feature.title, true, {
        fileName: "[project]/client/src/components/home/WhyChooseUs.js",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/components/home/CTASection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/lib/constants.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function CTASection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ed8b26043f0cda911adacad468659b8802efc4583774278e11455230db5716f7") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed8b26043f0cda911adacad468659b8802efc4583774278e11455230db5716f7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-brand font-bold uppercase tracking-widest text-xs",
                    children: "Get in Touch"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/CTASection.js",
                    lineNumber: 16,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-6xl font-bold text-brand-blue leading-tight tracking-tight",
                    children: "Ready to Upgrade Your Kitchen?"
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/CTASection.js",
                    lineNumber: 16,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed",
                    children: "Contact us today for a free consultation or visit our showroom to experience the latest Kutchina smart appliances."
                }, void 0, false, {
                    fileName: "[project]/client/src/components/home/CTASection.js",
                    lineNumber: 16,
                    columnNumber: 250
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/components/home/CTASection.js",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "inquiry",
            className: "section-padding bg-white border-t border-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center space-y-8 animate-reveal",
                    children: [
                        t0,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].phone}`,
                                    className: "px-10 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-brand transition-all shadow-xl shadow-brand-blue/10",
                                    children: [
                                        "Call Now: ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONFIG"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/components/home/CTASection.js",
                                    lineNumber: 23,
                                    columnNumber: 299
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-10 py-4 border border-slate-200 text-brand-blue font-bold uppercase tracking-widest text-xs rounded hover:bg-slate-50 transition-all",
                                    children: "Request a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/components/home/CTASection.js",
                                    lineNumber: 23,
                                    columnNumber: 530
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/components/home/CTASection.js",
                            lineNumber: 23,
                            columnNumber: 217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/components/home/CTASection.js",
                    lineNumber: 23,
                    columnNumber: 141
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/components/home/CTASection.js",
                lineNumber: 23,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/components/home/CTASection.js",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_src_components_13wddct._.js.map