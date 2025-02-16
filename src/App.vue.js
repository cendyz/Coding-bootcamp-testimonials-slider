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
var vue_1 = require("vue");
var Nav_vue_1 = require("./components/Nav.vue");
var FirstSection_vue_1 = require("./components/FirstSection.vue");
var SecondSection_vue_1 = require("./components/SecondSection.vue");
var pattern_curve_svg_1 = require("@/images/pattern-curve.svg");
var checkIndex = (0, vue_1.ref)(0);
var isChecked = (0, vue_1.ref)(null);
var currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
(0, vue_1.watchEffect)(function () {
    if (currentTheme) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        isChecked.value = false;
    }
    else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        isChecked.value = true;
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    // @ts-ignore
    /** @type { [typeof Nav, ] } */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(Nav_vue_1.default, new Nav_vue_1.default(__assign({ 'onChangeThemeValue': {} }, { isChecked: ((__VLS_ctx.isChecked)) })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onChangeThemeValue': {} }, { isChecked: ((__VLS_ctx.isChecked)) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
    var __VLS_5;
    var __VLS_6 = {
        onChangeThemeValue: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isChecked = $event;
        }
    };
    var __VLS_2;
    var __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("gap-y-[5rem] p-[2rem] py-[5.7rem] pb-[12rem] container lg:grid lg:place-items-center lg:grid-cols-[1fr_auto_auto] lg:grid-rows-1") }));
    // @ts-ignore
    /** @type { [typeof FirstSection, ] } */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(FirstSection_vue_1.default, new FirstSection_vue_1.default(__assign({ 'onPassCheckIndex': {} })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onPassCheckIndex': {} })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_12;
    var __VLS_13 = {
        onPassCheckIndex: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.checkIndex = $event;
        }
    };
    var __VLS_9;
    var __VLS_10;
    var __VLS_11;
    // @ts-ignore
    /** @type { [typeof SecondSection, ] } */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(SecondSection_vue_1.default, new SecondSection_vue_1.default({
        checkIndex: ((__VLS_ctx.checkIndex)),
        isChecked: ((__VLS_ctx.isChecked)),
    }));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{
            checkIndex: ((__VLS_ctx.checkIndex)),
            isChecked: ((__VLS_ctx.isChecked)),
        }], __VLS_functionalComponentArgsRest(__VLS_14), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.pattern)), alt: (""), 'aria-hidden': ("true") }, { class: ("absolute bottom-0 left-0") }));
    ['gap-y-[5rem]', 'p-[2rem]', 'py-[5.7rem]', 'pb-[12rem]', 'container', 'lg:grid', 'lg:place-items-center', 'lg:grid-cols-[1fr_auto_auto]', 'lg:grid-rows-1', 'absolute', 'bottom-0', 'left-0',];
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
            Nav: Nav_vue_1.default,
            FirstSection: FirstSection_vue_1.default,
            SecondSection: SecondSection_vue_1.default,
            pattern: pattern_curve_svg_1.default,
            checkIndex: checkIndex,
            isChecked: isChecked,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
