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
var props = defineProps({
    checkIndex: Number,
    isChecked: Boolean,
});
var data = (0, vue_1.ref)([
    {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        desc: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        desc: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    },
    {
        name: 'Tom Cat',
        job: 'CSS Overlord & Animation Expert',
        desc: '“ Every time I think I fixed a CSS issue, Jerry finds a new screen size to break it. ”',
    },
    {
        name: 'Jerry Mouse',
        job: 'Full Cheese Stack Developer',
        desc: '“ I optimize my code like I optimize my cheese supply: never waste a single byte! ”',
    },
]); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("text-center grid grid-rows-1 grid-columns-1 lg:col-[1/3] lg:row-span-full lg:z-[100] lg:mr-[18rem] lg:max-w-[43rem] lg:text-left lg:mt-[8rem]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: ((index)) }, { class: ("col-span-full row-span-full transition-opacity duration-200") }), { class: ((index === props.checkIndex ? 'z-[10] opacity-1' : 'z-0 opacity-0')) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[1.89rem] text-bgDARK dark:text-[#8E8EB7] font-inter300 lg:text-[2.3rem]") }));
        (item.desc);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-[2rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-bold text-bgDARK dark:text-bg") }));
        (item.job);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-blue-200 dark:text-blue-100dark") }));
        (item.name);
    }
    ['text-center', 'grid', 'grid-rows-1', 'grid-columns-1', 'lg:col-[1/3]', 'lg:row-span-full', 'lg:z-[100]', 'lg:mr-[18rem]', 'lg:max-w-[43rem]', 'lg:text-left', 'lg:mt-[8rem]', 'col-span-full', 'row-span-full', 'transition-opacity', 'duration-200', 'text-[1.89rem]', 'text-bgDARK', 'dark:text-[#8E8EB7]', 'font-inter300', 'lg:text-[2.3rem]', 'mt-[2rem]', 'font-bold', 'text-bgDARK', 'dark:text-bg', 'text-blue-200', 'dark:text-blue-100dark',];
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
            data: data,
        };
    },
    props: {
        checkIndex: Number,
        isChecked: Boolean,
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    props: {
        checkIndex: Number,
        isChecked: Boolean,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
