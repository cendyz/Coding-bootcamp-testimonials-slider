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
var vue_1 = require("vue");
var pattern_bg_svg_1 = require("@/images/pattern-bg.svg");
var icon_prev_svg_1 = require("@/images/icon-prev.svg");
var icon_next_svg_1 = require("@/images/icon-next.svg");
var image_tanya_jpg_1 = require("@/images/image-tanya.jpg");
var image_john_jpg_1 = require("@/images/image-john.jpg");
var tom_jpg_1 = require("@/images/tom.jpg");
var jerry_jpg_1 = require("@/images/jerry.jpg");
var data = (0, vue_1.ref)([
    {
        img: image_tanya_jpg_1.default,
        alt: 'Tanya',
    },
    {
        img: image_john_jpg_1.default,
        alt: 'John',
    },
    {
        img: tom_jpg_1.default,
        alt: 'Tom',
    },
    {
        img: jerry_jpg_1.default,
        alt: 'Jerry',
    },
]);
var emit = defineEmits(['passCheckIndex']);
var checkIndex = (0, vue_1.ref)(0);
var goNext = function () {
    if (checkIndex.value + 1 === data.value.length) {
        checkIndex.value = 0;
    }
    else {
        checkIndex.value++;
    }
};
var goPrevious = function () {
    if (checkIndex.value === 0) {
        checkIndex.value = data.value.length - 1;
    }
    else {
        checkIndex.value--;
    }
};
(0, vue_1.onBeforeUpdate)(function () {
    emit('passCheckIndex', checkIndex.value);
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("grid grid-rows-[1fr_auto_auto] grid-columns-1 lg:order-1 lg:col-[2/4] lg:row-span-full lg:relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.pattern)), alt: (""), 'aria-hidden': ("true") }, { class: ("absolute left-1/2 translate-x-[-50%] top-[3rem] w-[32rem] lg:scale-[1.8] lg:top-[6.5rem]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ((item.img)), alt: (""), key: ((index)) }, { class: ("col-span-full row-[1/3] block mx-auto w-[25rem] rounded-lg lg:w-[44rem]") }), { class: ((__VLS_ctx.checkIndex === index ? 'z-[50] opacity-1' : 'z-0 opacity-0')) }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("row-[2/4] col-[1/2] mx-auto bg-bg dark:bg-bgDARK border-[2px] border-white relative z-[100] flex items-center gap-x-[1.2rem] rounded-full lg:left-[-29%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.goPrevious) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.left)), alt: ("previous") }, { class: ("p-[1.1rem] w-[3.5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.goNext) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.right)), alt: ("next") }, { class: ("p-[1.1rem] w-[3.5rem]") }));
    ['grid', 'grid-rows-[1fr_auto_auto]', 'grid-columns-1', 'lg:order-1', 'lg:col-[2/4]', 'lg:row-span-full', 'lg:relative', 'absolute', 'left-1/2', 'translate-x-[-50%]', 'top-[3rem]', 'w-[32rem]', 'lg:scale-[1.8]', 'lg:top-[6.5rem]', 'col-span-full', 'row-[1/3]', 'block', 'mx-auto', 'w-[25rem]', 'rounded-lg', 'lg:w-[44rem]', 'row-[2/4]', 'col-[1/2]', 'mx-auto', 'bg-bg', 'dark:bg-bgDARK', 'border-[2px]', 'border-white', 'relative', 'z-[100]', 'flex', 'items-center', 'gap-x-[1.2rem]', 'rounded-full', 'lg:left-[-29%]', 'p-[1.1rem]', 'w-[3.5rem]', 'p-[1.1rem]', 'w-[3.5rem]',];
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
            left: icon_prev_svg_1.default,
            right: icon_next_svg_1.default,
            data: data,
            checkIndex: checkIndex,
            goNext: goNext,
            goPrevious: goPrevious,
        };
    },
    emits: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
