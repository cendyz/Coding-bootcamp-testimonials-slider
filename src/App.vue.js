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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var index = (0, vue_1.ref)(0);
var data = (0, vue_1.reactive)({
    0: {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: image_tanya_jpg_1.default,
        alt: 'Tanya',
        desc: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    1: {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: image_john_jpg_1.default,
        alt: 'John',
        desc: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    },
    2: {
        name: 'Tom Cat',
        job: 'CSS Overlord & Animation Expert',
        img: tom_jpg_1.default,
        alt: 'Tom',
        desc: '“ Every time I think I fixed a CSS issue, Jerry finds a new screen size to break it. ”',
    },
    3: {
        name: 'Jerry Mouse',
        job: 'Full Cheese Stack Developer',
        img: jerry_jpg_1.default,
        alt: 'Jerry',
        desc: '“ I optimize my code like I optimize my cheese supply: never waste a single byte! ”',
    },
});
var goNext = function () {
    if (Object.keys(data).length - 1 === index.value) {
        index.value = 0;
    }
    else {
        index.value++;
    }
};
var goPrevious = function () {
    if (index.value === 0) {
        index.value = Object.keys(data).length - 1;
    }
    else {
        index.value--;
    }
};
var preloadImages = function () {
    Object.values(data).forEach(function (item) {
        var img = new Image();
        img.src = item.img;
    });
};
(0, vue_1.onMounted)(function () {
    preloadImages();
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("p-[2rem] xl:flex container xl:w-[75%] xl:items-center xl:relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("relative grid grid-cols-[1fr] grid-rows-[1fr_auto_auto] xl:order-1 xl:w-[183.2rem] xl:self-start") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.pattern)), alt: ("") }, { class: ("absolute top-[1%] left-1/2 translate-x-[-50%] scale-95 xl:scale-[1.4]") }));
    var __VLS_0 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    if (__VLS_ctx.index !== null) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ key: ((__VLS_ctx.index)), src: ((__VLS_ctx.data[__VLS_ctx.index].img)), alt: ((__VLS_ctx.data[__VLS_ctx.index].alt + ' profile picture')) }, { class: ("avatar scale-[.75] rounded-3xl col-[1/2] row-[1/3] mx-auto w-[50rem] xl:scale-[1.1] z-10") }));
    }
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid-cols-1 grid-col-[1/2] col-[1/2] row-[2/4] bg-white mx-auto flex z-10 gap-x-[3rem] w-fit p-[1rem] rounded-full xl:absolute xl:left-[11%] xl:p-[1.3rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.goPrevious) }, { src: ((__VLS_ctx.left)), alt: ("previous") }), { class: ("scale-[.8] xl:scale-[1] cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.goNext) }, { src: ((__VLS_ctx.right)), alt: ("next") }), { class: ("scale-[.8] xl:scale-[1] cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("p-[2rem] text-center mt-[2rem] pt-[4.5rem] relative xl:w-[200rem] xl:text-left z-20") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("xl:absolute xl:top-1/2 xl:translate-y-[-45%] xl:left-[10%] xl:w-[49.5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.quotes)), alt: ("") }, { class: ("absolute left-1/2 top-0 scale-[.5] translate-x-[-50%] xl:scale-[.7] xl:left-[26%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-inter300 text-[1.7rem] relative xl:text-[2.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.index].desc);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("xl:flex xl:gap-x-[1rem] xl:items-center xl:mt-[2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-inter700 mt-[1.5rem] text-[1.4rem] xl:mt-0 xl:text-[1.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.index].name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[1.4rem] text-blue-0 xl:text-[1.6rem]") }));
    (__VLS_ctx.data[__VLS_ctx.index].job);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.downPattern)), alt: ("") }, { class: ("absolute w-full left-0 bottom-0 xl:w-[43%]") }));
    ['p-[2rem]', 'xl:flex', 'container', 'xl:w-[75%]', 'xl:items-center', 'xl:relative', 'relative', 'grid', 'grid-cols-[1fr]', 'grid-rows-[1fr_auto_auto]', 'xl:order-1', 'xl:w-[183.2rem]', 'xl:self-start', 'absolute', 'top-[1%]', 'left-1/2', 'translate-x-[-50%]', 'scale-95', 'xl:scale-[1.4]', 'avatar', 'scale-[.75]', 'rounded-3xl', 'col-[1/2]', 'row-[1/3]', 'mx-auto', 'w-[50rem]', 'xl:scale-[1.1]', 'z-10', 'grid-cols-1', 'grid-col-[1/2]', 'col-[1/2]', 'row-[2/4]', 'bg-white', 'mx-auto', 'flex', 'z-10', 'gap-x-[3rem]', 'w-fit', 'p-[1rem]', 'rounded-full', 'xl:absolute', 'xl:left-[11%]', 'xl:p-[1.3rem]', 'scale-[.8]', 'xl:scale-[1]', 'cursor-pointer', 'scale-[.8]', 'xl:scale-[1]', 'cursor-pointer', 'p-[2rem]', 'text-center', 'mt-[2rem]', 'pt-[4.5rem]', 'relative', 'xl:w-[200rem]', 'xl:text-left', 'z-20', 'xl:absolute', 'xl:top-1/2', 'xl:translate-y-[-45%]', 'xl:left-[10%]', 'xl:w-[49.5rem]', 'absolute', 'left-1/2', 'top-0', 'scale-[.5]', 'translate-x-[-50%]', 'xl:scale-[.7]', 'xl:left-[26%]', 'font-inter300', 'text-[1.7rem]', 'relative', 'xl:text-[2.6rem]', 'xl:flex', 'xl:gap-x-[1rem]', 'xl:items-center', 'xl:mt-[2rem]', 'font-inter700', 'mt-[1.5rem]', 'text-[1.4rem]', 'xl:mt-0', 'xl:text-[1.6rem]', 'text-[1.4rem]', 'text-blue-0', 'xl:text-[1.6rem]', 'absolute', 'w-full', 'left-0', 'bottom-0', 'xl:w-[43%]',];
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
            index: index,
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
