/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

window.Event = new Vue();

Vue.component('task-list', {
    template: '\n    <div>\n        <task v-for="task in tasks">{{task.task}}</task>\n    </div>',
    data: function data() {
        return {
            tasks: [{ task: 'go to the store', completed: true }, { task: 'feed the dog', completed: false }, { task: 'dance like no one is watching', completed: true }]
        };
    }
});
Vue.component('task', {
    template: '<li><slot></slot></li>'
});
Vue.component('message', {
    props: ['title', 'body'],
    data: function data() {
        return {
            isVisible: true
        };
    },

    template: '\n                <article class="message" v-show="isVisible">\n                <div class="message-header">\n                    {{ title }}\n                    <button class="delete" aria-label="delete" @click="isVisible = false"></button>\n                </div>\n                <div class="message-body">\n                    {{ body }}\n                </div>\n            </article>\n    '
});
Vue.component('modal', {
    template: '\n    <div class="modal is-active">\n        <div class="modal-background"></div>\n        <div class="modal-content">\n            <div class="box">\n                <slot></slot>\n            </div>\n            <button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button>\n        </div>\n    </div>\n    '
});
Vue.component('tabs', {
    template: '\n    <div>\n        <div class="tabs">\n          <ul>\n            <li v-for="tab in tabs" :class="{ \'is-active\': tab.isActive }">\n                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="tabs-details">\n            <slot></slot>\n        </div>\n    </div>',
    data: function data() {
        return { tabs: [] };
    },
    created: function created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab: function selectTab(selectedTab) {
            this.tabs.forEach(function (tab) {
                tab.isActive = tab.name == selectedTab.name;
            });
        }
    }
});
Vue.component('tab', {
    template: '\n    <div v-show="isActive">\n        <slot></slot>\n    </div>',
    props: {
        name: { required: true },
        selected: { default: false }
    },
    data: function data() {
        return {
            isActive: false
        };
    },

    computed: {
        href: function href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted: function mounted() {
        this.isActive = this.selected;
    }
});
Vue.component('coupon', {
    template: '<input placeholder="Enter your Coupon Code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied: function onCouponApplied() {
            Event.$emit('applied');
        }
    }
});

var lesson1 = new Vue({
    el: '#lesson1',
    data: {
        message: 'Vue Practice'
    }
});
var lesson3 = new Vue({
    el: '#lesson3',
    data: {
        newName: '',
        names: ['Joe', 'Mary', 'Jane', 'Jack']
    },
    methods: {
        addName: function addName() {
            this.names.push(this.newName);
            this.newName = '';
        }
    }
});
var lesson5 = new Vue({
    el: '#lesson5',
    data: {
        title: 'I am a button.',
        isLoading: false
    },
    methods: {
        toggleClass: function toggleClass() {
            this.isLoading = true;
        }
    }
});
var lesson6 = new Vue({
    el: '#lesson6',
    data: {
        message: 'All Tasks',
        tasks: [{ description: 'go to the store', completed: true }, { description: 'feed the dog', completed: false }, { description: 'dance like no one is watching', completed: true }]
    },
    computed: {
        reversedMessage: function reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks: function incompleteTasks() {
            return this.tasks.filter(function (task) {
                return !task.completed;
            });
        }
    }
});
var lesson7 = new Vue({
    el: '#lesson7'
});
var lesson8 = new Vue({
    el: '#lesson8'
});
var lesson9 = new Vue({
    el: '#lesson9'
});
var lesson10 = new Vue({
    el: '#lesson10',
    data: {
        showModal: false
    }
});
var lesson11 = new Vue({
    el: '#lesson11'
});
var lesson12 = new Vue({
    el: '#lesson12',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied: function onCouponApplied() {
            this.couponApplied = true;
        }
    },
    created: function created() {
        Event.$on('applied', function () {
            return alert('jokes');
        });
    }
});

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })

/******/ });