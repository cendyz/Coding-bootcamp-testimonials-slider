"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
require("./style.scss");
var App_vue_1 = require("./App.vue");
var Kurs_vue_1 = require("./Kurs.vue");
var app = (0, vue_1.createApp)(App_vue_1.default);
app.mount('#app');
app.component('app-kurs', Kurs_vue_1.default);
