"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_bg_svg_1 = require("@/images/pattern-bg.svg");
var image_tanya_jpg_1 = require("@/images/image-tanya.jpg");
var image_john_jpg_1 = require("@/images/image-john.jpg");
var icon_next_svg_1 = require("@/images/icon-next.svg");
var icon_prev_svg_1 = require("@/images/icon-prev.svg");
var pattern_curve_svg_1 = require("@/images/pattern-curve.svg");
var pattern_quotes_svg_1 = require("@/images/pattern-quotes.svg");
var jerry_jpg_1 = require("@/images/jerry.jpg");
var tom_jpg_1 = require("@/images/tom.jpg");
var vue_1 = require("vue");
var indexItem = (0, vue_1.ref)(0);
var data = (0, vue_1.reactive)([
    {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: image_tanya_jpg_1.default,
        alt: 'Tanya',
        desc: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: image_john_jpg_1.default,
        alt: 'John',
        desc: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    },
    {
        name: 'Tom Cat',
        job: 'CSS Overlord & Animation Expert',
        img: tom_jpg_1.default,
        alt: 'Tom',
        desc: '“ Every time I think I fixed a CSS issue, Jerry finds a new screen size to break it. ”',
    },
    {
        name: 'Jerry Mouse',
        job: 'Full Cheese Stack Developer',
        img: jerry_jpg_1.default,
        alt: 'Jerry',
        desc: '“ I optimize my code like I optimize my cheese supply: never waste a single byte! ”',
    },
]);
var goNext = function () {
    if (Object.keys(data).length - 1 === indexItem.value) {
        indexItem.value = 0;
    }
    else {
        indexItem.value++;
    }
};
var goPrevious = function () {
    if (indexItem.value === 0) {
        indexItem.value = Object.keys(data).length - 1;
    }
    else {
        indexItem.value--;
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("p-[2rem] xl:flex container xl:w-[75%] xl:items-center xl:relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("relative grid grid-cols-[1fr] grid-rows-[1fr_auto_auto] xl:order-1 xl:w-[183.2rem] xl:self-start") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.pattern)), alt: ("") }, { class: ("absolute top-[-9%] left-1/2 translate-x-[-50%] scale-95 xl:scale-[1]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("relative w-[50rem] mx-auto") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-[20rem] h-[20rem] xl:w-[40rem] xl:h-[40rem] col-[1/2] row-[1/3]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign(__assign({ key: ((index)), src: ((item.img)), alt: ((item.img + ' profile picture')) }, { class: ("\u0061\u0076\u0061\u0074\u0061\u0072\u0020\u0077\u002d\u005b\u0032\u0030\u0072\u0065\u006d\u005d\u0020\u0068\u002d\u005b\u0032\u0030\u0072\u0065\u006d\u005d\u0020\u0078\u006c\u003a\u0077\u002d\u005b\u0034\u0030\u0072\u0065\u006d\u005d\u0020\u0078\u006c\u003a\u0068\u002d\u005b\u0034\u0030\u0072\u0065\u006d\u005d\u0020\u0074\u006f\u0070\u002d\u0030\u0020\u006c\u0065\u0066\u0074\u002d\u005b\u0031\u0030\u0025\u005d\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0033\u0078\u006c\u0020\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0069\u006e\u0073\u0065\u0074\u002d\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u000a\u0009\u0009\u0009\u0009\u0009\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0035\u0030\u0030\u0020\u0065\u0061\u0073\u0065\u002d\u0069\u006e\u002d\u006f\u0075\u0074") }), { class: (({ 'opacity-100 z-[10]': index === __VLS_ctx.indexItem, 'opacity-0 z-0': index !==
                    __VLS_ctx.indexItem })) }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid-cols-1 grid-col-[1/2] col-[1/2] row-[2/4] bg-white mx-auto flex z-[30] gap-x-[3rem] w-fit p-[1rem] rounded-full xl:absolute xl:left-[19%] xl:mt-[-2.3rem] xl:p-[1.3rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.goPrevious) }, { src: ((__VLS_ctx.left)), alt: ("previous") }), { class: ("scale-[.8] xl:scale-[1] cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.goNext) }, { src: ((__VLS_ctx.right)), alt: ("next") }), { class: ("scale-[.8] xl:scale-[1] cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("p-[2rem] text-center mt-[2rem] pt-[4.5rem] relative xl:w-[200rem] xl:text-left z-20") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("xl:absolute xl:top-1/2 xl:translate-y-[-45%] xl:left-[10%] xl:w-[49.5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.quotes)), alt: ("") }, { class: ("absolute left-1/2 top-0 scale-[.5] translate-x-[-50%] xl:scale-[.7] xl:left-[26%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-inter300 text-[1.7rem] relative xl:text-[2.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.indexItem].desc);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("xl:flex xl:gap-x-[1rem] xl:items-center xl:mt-[2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-inter700 mt-[1.5rem] text-[1.4rem] xl:mt-0 xl:text-[1.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.indexItem].name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[1.4rem] text-blue-0 xl:text-[1.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.indexItem].job);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.downPattern)), alt: ("") }, { class: ("absolute w-full left-0 bottom-0 xl:w-[43%]") }));
    ['p-[2rem]', 'xl:flex', 'container', 'xl:w-[75%]', 'xl:items-center', 'xl:relative', 'relative', 'grid', 'grid-cols-[1fr]', 'grid-rows-[1fr_auto_auto]', 'xl:order-1', 'xl:w-[183.2rem]', 'xl:self-start', 'absolute', 'top-[-9%]', 'left-1/2', 'translate-x-[-50%]', 'scale-95', 'xl:scale-[1]', 'relative', 'w-[50rem]', 'mx-auto', 'w-[20rem]', 'h-[20rem]', 'xl:w-[40rem]', 'xl:h-[40rem]', 'col-[1/2]', 'row-[1/3]', 'avatar', 'w-[20rem]', 'h-[20rem]', 'xl:w-[40rem]', 'xl:h-[40rem]', 'top-0', 'left-[10%]', 'rounded-3xl', 'absolute', 'inset-0', 'transition-opacity', 'duration-500', 'ease-in-out', 'opacity-100', 'z-[10]', 'opacity-0', 'z-0', 'grid-cols-1', 'grid-col-[1/2]', 'col-[1/2]', 'row-[2/4]', 'bg-white', 'mx-auto', 'flex', 'z-[30]', 'gap-x-[3rem]', 'w-fit', 'p-[1rem]', 'rounded-full', 'xl:absolute', 'xl:left-[19%]', 'xl:mt-[-2.3rem]', 'xl:p-[1.3rem]', 'scale-[.8]', 'xl:scale-[1]', 'cursor-pointer', 'scale-[.8]', 'xl:scale-[1]', 'cursor-pointer', 'p-[2rem]', 'text-center', 'mt-[2rem]', 'pt-[4.5rem]', 'relative', 'xl:w-[200rem]', 'xl:text-left', 'z-20', 'xl:absolute', 'xl:top-1/2', 'xl:translate-y-[-45%]', 'xl:left-[10%]', 'xl:w-[49.5rem]', 'absolute', 'left-1/2', 'top-0', 'scale-[.5]', 'translate-x-[-50%]', 'xl:scale-[.7]', 'xl:left-[26%]', 'font-inter300', 'text-[1.7rem]', 'relative', 'xl:text-[2.6rem]', 'xl:flex', 'xl:gap-x-[1rem]', 'xl:items-center', 'xl:mt-[2rem]', 'font-inter700', 'mt-[1.5rem]', 'text-[1.4rem]', 'xl:mt-0', 'xl:text-[1.6rem]', 'text-[1.4rem]', 'text-blue-0', 'xl:text-[1.6rem]', 'absolute', 'w-full', 'left-0', 'bottom-0', 'xl:w-[43%]',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            pattern: pattern_bg_svg_1.default,
            right: icon_next_svg_1.default,
            left: icon_prev_svg_1.default,
            downPattern: pattern_curve_svg_1.default,
            quotes: pattern_quotes_svg_1.default,
            indexItem: indexItem,
            data: data,
            goNext: goNext,
            goPrevious: goPrevious,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
