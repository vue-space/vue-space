'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var toString = function (x) { return Object.prototype.toString.call(x); };
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var noopFn = function (_) { return _; };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noopFn,
    set: noopFn,
};
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    sharedPropertyDefinition.get = get || noopFn;
    sharedPropertyDefinition.set = set || noopFn;
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition)
        throw new Error("[vue-composition-api] " + msg);
}
function isPlainObject(x) {
    return toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function warn(msg, vm) {
    Vue.util.warn(msg, vm);
}

var currentVue = null;
var currentVM = null;
function getCurrentVue() {
    {
        assert(currentVue, "must call Vue.use(plugin) before using any function.");
    }
    return currentVue;
}
function setCurrentVue(vue) {
    currentVue = vue;
}
function getCurrentVM() {
    return currentVM;
}
function setCurrentVM(vm) {
    currentVM = vm;
}

function ensureCurrentVMInFn(hook) {
    var vm = getCurrentVM();
    {
        assert(vm, "\"" + hook + "\" get called outside of \"setup()\"");
    }
    return vm;
}
function createComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    return currentVue && obj instanceof currentVue;
}
function createSlotProxy(vm, slotName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            return warn("slots." + slotName + "() got called outside of the \"render()\" scope", vm);
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    };
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var AccessControlIdentifierKey = createSymbol('vfa.key.accessControlIdentifier');
var ReactiveIdentifierKey = createSymbol('vfa.key.reactiveIdentifier');
var NonReactiveIdentifierKey = createSymbol('vfa.key.nonReactiveIdentifier');
// must be a string, symbol key is ignored in reactive
var RefKey = 'vfa.key.refKey';

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options) {
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shoulnd't extend it.
    // related issues: #79
    return Object.seal(new RefImpl(options));
}
// implementation
function ref(raw) {
    // if (isRef(raw)) {
    //   return {} as any;
    // }
    var _a;
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}

var AccessControlIdentifier = {};
var ReactiveIdentifier = {};
var NonReactiveIdentifier = {};
function isNonReactive(obj) {
    return (hasOwn(obj, NonReactiveIdentifierKey) && obj[NonReactiveIdentifierKey] === NonReactiveIdentifier);
}
function isReactive(obj) {
    return hasOwn(obj, ReactiveIdentifierKey) && obj[ReactiveIdentifierKey] === ReactiveIdentifier;
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isNonReactive(target) ||
        Array.isArray(target) ||
        isRef(target) ||
        isComponentInstance(target)) {
        return;
    }
    if (hasOwn(target, AccessControlIdentifierKey) &&
        target[AccessControlIdentifierKey] === AccessControlIdentifier) {
        return;
    }
    if (Object.isExtensible(target)) {
        def(target, AccessControlIdentifierKey, AccessControlIdentifier);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ && arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            var value = getter ? getter.call(target) : val;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getCurrentVue();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = createComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!obj) {
        warn('"reactive()" is called without provide an "object".');
        // @ts-ignore
        return;
    }
    if (!isPlainObject(obj) || isReactive(obj) || isNonReactive(obj) || !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    def(observed, ReactiveIdentifierKey, ReactiveIdentifier);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function nonReactive(obj) {
    if (!isPlainObject(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    def(obj, '__ob__', observe({}).__ob__);
    // mark as nonReactive
    def(obj, NonReactiveIdentifierKey, NonReactiveIdentifier);
    return obj;
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
    if (!from)
        return to;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            (isPlainObject(toVal) && !isRef(toVal)) &&
            (isPlainObject(fromVal) && !isRef(fromVal))) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
function install(Vue, _install) {
    if (currentVue && currentVue === Vue) {
        {
            assert(false, 'already installed. Vue.use(plugin) should be called only once');
        }
        return;
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(typeof child === 'function' ? child(props, context) || {} : {}, typeof parent === 'function' ? parent(props, context) || {} : {});
        };
    };
    setCurrentVue(Vue);
    _install(Vue);
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function set$1(vm, key, value) {
    var state = (vm.__secret_vfa_state__ = vm.__secret_vfa_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__secret_vfa_state__ || {})[key];
}
var vmStateManager = {
    set: set$1,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        proxy(vm, propName, {
            get: function () { return propValue.value; },
            set: function (val) {
                propValue.value = val;
            },
        });
        {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                proxy(vm._data, propName, {
                    get: function () { return propValue.value; },
                    set: function (val) {
                        propValue.value = val;
                    },
                });
            });
        }
    }
    else {
        if (props && hasOwn(props, propName)) {
            warn("The setup binding property \"" + propName + "\" is already declared as a prop.", vm);
        }
        else {
            warn("The setup binding property \"" + propName + "\" is already declared.", vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVode = vm.$options._parentVnode;
    if (!parentVode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(vm, fn, onError) {
    var preVm = getCurrentVM();
    setCurrentVM(vm);
    try {
        return fn(vm);
    }
    catch (err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentVM(preVm);
    }
}
function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            updateTemplateRef(this);
        },
        updated: function () {
            updateTemplateRef(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(vm, function () { return render.apply(_this, args); });
            };
        }
        if (!setup) {
            return;
        }
        if (typeof setup !== 'function') {
            {
                warn('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return typeof data === 'function'
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(vm, function () {
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(vm, function () { return bindingFunc_1(); });
            };
            return;
        }
        if (isPlainObject(binding)) {
            var bindingObj_1 = binding;
            vmStateManager.set(vm, 'rawBindings', binding);
            Object.keys(binding).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                // only make primitive value reactive
                if (!isRef(bindingValue)) {
                    if (isReactive(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                    else {
                        // a non-reactive should not don't get reactivity
                        bindingValue = ref(nonReactive(bindingValue));
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"" + Object.prototype.toString
                .call(binding)
                .slice(8, -1) + "\"");
        }
    }
    function createSetupContext(vm) {
        var ctx = {
            slots: {},
        };
        var props = [
            'root',
            'parent',
            'refs',
            'attrs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        props.forEach(function (key) {
            var _a;
            var targetKey;
            var srcKey;
            if (Array.isArray(key)) {
                _a = __read(key, 2), targetKey = _a[0], srcKey = _a[1];
            }
            else {
                targetKey = srcKey = key;
            }
            srcKey = "$" + srcKey;
            proxy(ctx, targetKey, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    warn("Cannot assign to '" + targetKey + "' because it is a read-only property", vm);
                },
            });
        });
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        return ctx;
    }
}

var fallbackCreateElement;
var createElement = function createElement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!currentVM) {
        warn('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = createComponentInstance(getCurrentVue()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return currentVM.$createElement.apply(currentVM, args);
};

// implementation, close to no-op
function createComponent(options) {
    return options;
}

var genName = function (name) { return "on" + (name[0].toUpperCase() + name.slice(1)); };
function createLifeCycles(lifeCyclehooks, name) {
    return function (callback) {
        var currentVue = getCurrentVue();
        var vm = ensureCurrentVMInFn(name);
        lifeCyclehooks.forEach(function (lifeCyclehook) {
            return injectHookOption(currentVue, vm, lifeCyclehook, callback);
        });
    };
}
function injectHookOption(Vue, vm, hook, val) {
    var options = vm.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    options[hook] = mergeFn(options[hook], val);
}
// only one event will be fired between destroyed and deactivated when an unmount occurs
var onUnmounted = createLifeCycles(['destroyed', 'deactivated'], genName('unmounted'));

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var vm = ensureCurrentVMInFn('provide');
    if (!vm._provided) {
        var provideCache_1 = {};
        Object.defineProperty(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue) {
    if (!key) {
        return defaultValue;
    }
    var vm = ensureCurrentVMInFn('inject');
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    else if (defaultValue !== undefined) {
        return defaultValue;
    }
    else {
        warn("Injection \"" + String(key) + "\" not found", vm);
    }
}

var _install = function (Vue) { return install(Vue, mixin); };
var plugin = {
    install: _install,
};
// Auto install if it is not done yet and `window` has `Vue`.
// To allow users to avoid auto-installation in some cases,
if (currentVue && typeof window !== 'undefined' && window.Vue) {
    _install(window.Vue);
}

var classNamePrefix = "vs-circular-progress";
var VsButton = createComponent({
  props: {
    size: {
      "default": "normal"
    },
    color: {
      "default": "primary"
    }
  },
  setup: function setup(props) {
    function judgePrimaryColor(color) {
      return color === "primary";
    }

    return function () {
      var _classData;

      var isPrimaryColor = judgePrimaryColor(props.color);
      var classData = (_classData = {}, _defineProperty(_classData, classNamePrefix, true), _defineProperty(_classData, "".concat(classNamePrefix, "--").concat(props.size), true), _defineProperty(_classData, "".concat(classNamePrefix, "--primary-color"), isPrimaryColor), _classData);
      return createElement("i", [createElement("svg", {
        "class": classData,
        "attrs": {
          "viewBox": "0 0 66 66",
          "xmlns": "http://www.w3.org/2000/svg"
        }
      }, [createElement("circle", {
        "class": "".concat(classNamePrefix, "__path"),
        "attrs": {
          "fill": "none",
          "cx": "33",
          "cy": "33",
          "r": "30",
          "stroke": props.color
        }
      })])]);
    };
  }
});

var classNamePrefix$1 = 'vs-btn';
var VsButton$1 = createComponent({
  props: {
    size: {
      "default": 'normal'
    },
    variant: {
      "default": 'secondary'
    },
    tag: {
      "default": 'button'
    },
    loading: {
      "default": false
    },
    disabled: {
      "default": false
    },
    block: {
      "default": false
    }
  },
  setup: function setup(props, ctx) {
    /**
     * if button text is two CN char, split them with space (inspired by ant design)
     */
    function splitTwoCNChar(nodes) {
      var _ref, _nodes$, _nodes$$text;

      var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
      var raw = (_ref = nodes === null || nodes === void 0 ? void 0 : (_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : (_nodes$$text = _nodes$.text) === null || _nodes$$text === void 0 ? void 0 : _nodes$$text.trim()) !== null && _ref !== void 0 ? _ref : '';

      if ((nodes === null || nodes === void 0 ? void 0 : nodes.length) === 1 && rxTwoCNChar.test(raw)) {
        var twoChar = raw;
        return twoChar.split('').join(' ');
      }

      return nodes;
    }

    return function () {
      var _classData;

      var isDisabled = props.disabled || props.loading;
      var classData = (_classData = {}, _defineProperty(_classData, classNamePrefix$1, true), _defineProperty(_classData, "".concat(classNamePrefix$1, "--").concat(props.size), true), _defineProperty(_classData, "".concat(classNamePrefix$1, "--").concat(props.variant), true), _defineProperty(_classData, "".concat(classNamePrefix$1, "--icon"), props.loading), _defineProperty(_classData, "".concat(classNamePrefix$1, "--block"), props.block), _classData);
      var children = splitTwoCNChar(ctx.slots["default"]());
      return createElement(props.tag, {
        "attrs": {
          "tabindex": "0",
          "disabled": isDisabled,
          "aria-disabled": isDisabled
        },
        "class": classData,
        "on": _objectSpread2({}, ctx.listeners)
      }, [props.loading && createElement(VsButton, {
        "class": "".concat(classNamePrefix$1, "__icon"),
        "attrs": {
          "color": "currentColor",
          "size": "small"
        }
      }), children]);
    };
  }
});

var VsThemeProvider = createComponent({
  props: {
    theme: {
      "default": "light"
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      return createElement("div", {
        "class": "vs-theme-".concat(props.theme)
      }, [ctx.slots["default"]()]);
    };
  }
});

var iconClassData = "vs-icon";
var VsIcon = createComponent({
  props: {
    name: {
      "default": ""
    }
  },
  setup: function setup(props) {
    return function () {
      return createElement("i", {
        "class": "".concat(iconClassData, " iconfont icon").concat(props.name)
      });
    };
  }
});

var validatableComponentProps = {
  validateStatus: {
    "default": "normal"
  }
};
var computeValidation = function computeValidation(classNamePrefix, validateStatus) {
  var _validationClassName;

  var isValidateSuccess = validateStatus === "success";
  var isValidateError = validateStatus === "error";
  var validationClassName = (_validationClassName = {}, _defineProperty(_validationClassName, "".concat(classNamePrefix, "--success"), isValidateSuccess), _defineProperty(_validationClassName, "".concat(classNamePrefix, "--error"), isValidateError), _validationClassName);
  var validationAriaAttributes = {
    "aria-invalid": isValidateError
  };
  var validationIcon = isValidateError ? createElement(VsIcon, {
    "attrs": {
      "name": "close"
    }
  }) : isValidateSuccess ? createElement(VsIcon, {
    "attrs": {
      "name": "checkmark"
    }
  }) : null;
  return {
    validationClassName: validationClassName,
    validationAriaAttributes: validationAriaAttributes,
    isValidateError: isValidateError,
    isValidateSuccess: isValidateSuccess,
    validationIcon: validationIcon
  };
};

var classNamePrefix$2 = "vs-input";
var VsInput = createComponent({
  props: _objectSpread2({
    value: {
      "default": ""
    },
    type: {
      "default": "text"
    }
  }, validatableComponentProps),
  inheritAttrs: false,
  setup: function setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(event) {
      ctx.emit("input", event.currentTarget.value);
    }

    return function () {
      var _objectSpread2$1;

      var disabled = props.disabled,
          type = props.type,
          validateStatus = props.validateStatus,
          value = props.value;
      var _ctx$slots = ctx.slots,
          prefix = _ctx$slots.prefix,
          suffix = _ctx$slots.suffix;
      var isPassword = type === "password";

      var _computeValidation = computeValidation(classNamePrefix$2, validateStatus),
          validationClassName = _computeValidation.validationClassName,
          validationAriaAttributes = _computeValidation.validationAriaAttributes,
          isValidateSuccess = _computeValidation.isValidateSuccess,
          isValidateError = _computeValidation.isValidateError,
          validationIcon = _computeValidation.validationIcon;

      var hasPrefix = Boolean(prefix);
      var hasSuffix = Boolean(suffix || isPassword || isValidateSuccess || isValidateError);

      var classData = _objectSpread2((_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, classNamePrefix$2, true), _defineProperty(_objectSpread2$1, "".concat(classNamePrefix$2, "--prefix"), hasPrefix), _defineProperty(_objectSpread2$1, "".concat(classNamePrefix$2, "--suffix"), hasSuffix), _objectSpread2$1), validationClassName);

      var inputElement = createElement("input", {
        "class": classData,
        "domProps": {
          "value": value
        },
        "attrs": _objectSpread2({
          "type": type,
          "disabled": disabled,
          "aria-disabled": disabled
        }, _objectSpread2({}, ctx.attrs, {}, validationAriaAttributes)),
        "on": _objectSpread2({}, _objectSpread2({}, ctx.listeners, {
          input: eventInput
        }))
      });

      if (hasSuffix || hasPrefix) {
        var prefixElement = hasPrefix && createElement("span", {
          "class": "".concat(classNamePrefix$2, "__prefix")
        }, [prefix()]);
        var suffixElement = hasSuffix && createElement("span", {
          "class": "".concat(classNamePrefix$2, "__suffix")
        }, [suffix && suffix(), validationIcon]);
        return createElement("span", {
          "class": "".concat(classNamePrefix$2, "__wrapper")
        }, [prefixElement, inputElement, suffixElement]);
      } else {
        return inputElement;
      }
    };
  }
});

var VsForm = createComponent({
  props: {},
  setup: function setup(props, ctx) {
    return function () {
      return createElement("form", {
        "on": _objectSpread2({}, ctx.listeners)
      }, [ctx.slots["default"]()]);
    };
  }
});

var classNamePrefix$3 = "vs-input";
var VsInput$1 = createComponent({
  props: _objectSpread2({
    value: {
      "default": ""
    }
  }, validatableComponentProps),
  inheritAttrs: false,
  setup: function setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(event) {
      ctx.emit("input", event.currentTarget.value);
    }

    return function () {
      var _objectSpread2$1;

      var disabled = props.disabled,
          validateStatus = props.validateStatus,
          value = props.value;
      var _ctx$slots = ctx.slots,
          prefix = _ctx$slots.prefix,
          suffix = _ctx$slots.suffix;

      var _computeValidation = computeValidation(classNamePrefix$3, validateStatus),
          validationClassName = _computeValidation.validationClassName,
          validationAriaAttributes = _computeValidation.validationAriaAttributes,
          isValidateSuccess = _computeValidation.isValidateSuccess,
          isValidateError = _computeValidation.isValidateError,
          validationIcon = _computeValidation.validationIcon;

      var hasPrefix = Boolean(prefix);
      var hasSuffix = Boolean(suffix || isValidateSuccess || isValidateError);

      var classData = _objectSpread2((_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, classNamePrefix$3, true), _defineProperty(_objectSpread2$1, "".concat(classNamePrefix$3, "--disabled"), disabled), _defineProperty(_objectSpread2$1, "".concat(classNamePrefix$3, "--prefix"), hasPrefix), _defineProperty(_objectSpread2$1, "".concat(classNamePrefix$3, "--suffix"), hasSuffix), _objectSpread2$1), validationClassName);

      var inputElement = createElement("select", {
        "class": classData,
        "domProps": {
          "value": value
        },
        "attrs": _objectSpread2({
          "disabled": disabled,
          "aria-disabled": disabled
        }, _objectSpread2({}, ctx.attrs, {}, validationAriaAttributes)),
        "on": _objectSpread2({}, _objectSpread2({}, ctx.listeners, {
          input: eventInput
        }))
      }, [ctx.slots["default"]()]);
      var prefixElement = hasPrefix && createElement("span", {
        "class": "".concat(classNamePrefix$3, "__prefix")
      }, [prefix()]);
      var suffixElement = createElement("span", {
        "class": "".concat(classNamePrefix$3, "__suffix")
      }, [createElement(VsIcon, {
        "attrs": {
          "name": "arrow-down"
        }
      }), suffix && suffix(), validationIcon]);
      return createElement("span", {
        "class": "".concat(classNamePrefix$3, "__wrapper")
      }, [prefixElement, inputElement, suffixElement]);
    };
  }
});

var classNamePrefix$4 = "vs-form-item";
var VsFormItem = createComponent({
  props: {
    label: {
      "default": ""
    },
    labelFor: {
      "default": ""
    },
    description: {
      "default": ""
    },
    feedback: {
      "default": ""
    },
    validateStatus: {
      "default": "normal"
    }
  },
  inheritAttrs: false,
  setup: function setup(props, ctx) {
    return function () {
      var _feedbackClassName;

      // label
      var labelElement = props.label && createElement("label", {
        "class": "".concat(classNamePrefix$4, "__label"),
        "attrs": _objectSpread2({
          "for": props.labelFor
        }, ctx.attrs)
      }, [props.label]); // feedback

      var feedbackClassName = (_feedbackClassName = {}, _defineProperty(_feedbackClassName, "".concat(classNamePrefix$4, "__feedback"), true), _defineProperty(_feedbackClassName, "".concat(classNamePrefix$4, "__feedback--").concat(props.validateStatus), true), _feedbackClassName);
      var feedbackElement = props.feedback && createElement("div", {
        "class": feedbackClassName
      }, [props.feedback]); // description

      var descriptionElement = props.description && createElement("small", {
        "class": "".concat(classNamePrefix$4, "__description")
      }, [props.description]);
      return createElement("div", {
        "class": classNamePrefix$4
      }, [labelElement, ctx.slots["default"](), feedbackElement, descriptionElement]);
    };
  }
});

var classNamePrefix$5 = "vs-row";
var noGuttersPrefix = "vs-no-gutters";
var VsRow = createComponent({
  props: {
    gutter: {
      "default": false
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      var _classData;

      var classData = (_classData = {}, _defineProperty(_classData, classNamePrefix$5, true), _defineProperty(_classData, noGuttersPrefix, !props.gutter), _classData);
      return createElement("div", {
        "class": classData,
        "on": _objectSpread2({}, ctx.listeners)
      }, [ctx.slots["default"]()]);
    };
  }
});

var classNamePrefix$6 = "vs-col";
var offsetNamePrefix = "vs-offset";
var orderNamePrefix = "vs-order";
var VsCol = createComponent({
  props: {
    span: {
      "default": false
    },
    xs: {
      "default": false
    },
    sm: {
      "default": false
    },
    md: {
      "default": false
    },
    lg: {
      "default": false
    },
    xl: {
      "default": false
    },
    offset: {
      "default": null
    },
    order: {
      "default": null
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      var _objectSpread3;

      var span = props.span,
          offset = props.offset,
          order = props.order;

      var classData = _objectSpread2(_defineProperty({}, classNamePrefix$6, true), Object.assign.apply(Object, [{}].concat(_toConsumableArray(["xs", "sm", "md", "lg", "xl"].map(function (size) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, "".concat(classNamePrefix$6, "-").concat(size).concat(isNaN(props[size]) ? "" : "-".concat(props[size])), Boolean(props[size])), _defineProperty(_ref, "".concat(classNamePrefix$6, "-").concat(Boolean(props[size]) ? 12 : span), Boolean(props[size]) || Boolean(span)), _ref;
      })))), (_objectSpread3 = {}, _defineProperty(_objectSpread3, "".concat(offsetNamePrefix, "-").concat(offset), Boolean(offset)), _defineProperty(_objectSpread3, "".concat(orderNamePrefix, "-").concat(order), Boolean(order)), _objectSpread3));

      return createElement("div", {
        "class": classData,
        "on": _objectSpread2({}, ctx.listeners)
      }, [ctx.slots["default"]()]);
    };
  }
});

var classNamePrefix$7 = "vs-checkbox";
var VsCheckbox = createComponent({
  props: {
    checked: {
      "default": false
    }
  },
  model: {
    prop: "checked",
    event: "input"
  },
  inheritAttrs: false,
  setup: function setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(event) {
      ctx.emit("input", event.currentTarget.checked);
    }

    return function () {
      var disabled = props.disabled,
          checked = props.checked;
      return createElement("label", {
        "class": "".concat(classNamePrefix$7)
      }, [createElement("input", {
        "class": "".concat(classNamePrefix$7, "__input"),
        "attrs": _objectSpread2({
          "type": "checkbox",
          "disabled": disabled
        }, ctx.attrs),
        "domProps": {
          "checked": checked
        },
        "on": _objectSpread2({}, _objectSpread2({}, ctx.listeners, {
          input: eventInput
        }))
      }), createElement("span", {
        "class": "".concat(classNamePrefix$7, "__icon")
      }, [createElement("span", {
        "class": "".concat(classNamePrefix$7, "__icon-inner")
      }, [createElement(VsIcon, {
        "attrs": {
          "name": "checkmark"
        }
      })])]), createElement("span", {
        "class": "".concat(classNamePrefix$7, "__label")
      }, [ctx.slots["default"]()])]);
    };
  }
});

/**
 * provider name of radio group
 */
var RadioGroupProviderSymbol = Symbol("RadioGroupProvider");

var classNamePrefix$8 = "vs-radio";
var VsRadio = createComponent({
  props: {
    checked: {
      "default": false
    },
    value: {
      "default": null
    },
    name: {
      "default": null
    }
  },
  model: {
    prop: "checked",
    event: "input"
  },
  inheritAttrs: false,
  setup: function setup(props, ctx) {
    var radioGroupContext = inject(RadioGroupProviderSymbol) || null;
    /**
     * for v-model
     */

    function eventInput(event) {
      var _radioGroupContext$ev;

      ctx.emit("input", event.currentTarget.checked);
      radioGroupContext === null || radioGroupContext === void 0 ? void 0 : (_radioGroupContext$ev = radioGroupContext.eventInput) === null || _radioGroupContext$ev === void 0 ? void 0 : _radioGroupContext$ev.call(radioGroupContext, props.value);
    }

    function judgeChecked() {
      return (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.groupProps.value) === props.value || props.checked;
    }

    return function () {
      var _ref;

      var disabled = props.disabled,
          name = props.name;
      return createElement("label", {
        "class": "".concat(classNamePrefix$8)
      }, [createElement("input", {
        "class": "".concat(classNamePrefix$8, "__input"),
        "attrs": _objectSpread2({
          "type": "radio",
          "disabled": disabled,
          "name": (_ref = radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.groupProps.name) !== null && _ref !== void 0 ? _ref : name
        }, ctx.attrs),
        "domProps": {
          "checked": judgeChecked()
        },
        "on": _objectSpread2({}, _objectSpread2({}, ctx.listeners, {
          input: eventInput
        }))
      }), createElement("span", {
        "class": "".concat(classNamePrefix$8, "__icon")
      }, [createElement("span", {
        "class": "".concat(classNamePrefix$8, "__icon-inner")
      })]), createElement("span", {
        "class": "".concat(classNamePrefix$8, "__label")
      }, [ctx.slots["default"]()])]);
    };
  }
});

var VsRadioProps = createComponent({
  props: {
    name: {
      "default": null
    }
  },
  setup: function setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(value) {
      ctx.emit("input", value);
    }

    provide(RadioGroupProviderSymbol, {
      groupProps: props,
      eventInput: eventInput
    });
    return function () {
      return createElement("div", {
        "on": _objectSpread2({}, _objectSpread2({}, ctx.listeners, {
          input: eventInput
        }))
      }, [ctx.slots["default"]()]);
    };
  }
});

var isEmptyNode = function isEmptyNode(node) {
  var _node$text;

  return !node.tag && /^\s$/.test((_node$text = node.text) !== null && _node$text !== void 0 ? _node$text : "");
};

var classNamePrefix$9 = "vs-breadcrumb";
var VsBreadcrumb = createComponent({
  props: {
    separator: {
      "default": ">"
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      var separator = props.separator;
      return createElement("nav", {
        "attrs": {
          "aria-label": "Breadcrumb"
        },
        "class": classNamePrefix$9,
        "on": _objectSpread2({}, ctx.listeners)
      }, [createElement("ol", [ctx.slots["default"]().filter(function (node) {
        return !isEmptyNode(node);
      }).reduce(function (prev, curr, index) {
        var currentNode = createElement("li", [curr]);

        if (index !== 0) {
          return [].concat(_toConsumableArray(prev), [createElement("li", {
            "class": "".concat(classNamePrefix$9, "__separator"),
            "attrs": {
              "aria-hidden": "true"
            }
          }, [separator]), currentNode]);
        } else {
          return [currentNode];
        }
      }, [])])]);
    };
  }
});

var classNamePrefix$a = "vs-avatar"; // eslint-disable-next-line @typescript-eslint/no-empty-interface

var VsAvatar = createComponent({
  props: {
    size: {
      "default": "normal"
    },
    image: {
      "default": ""
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      var _classData;

      var classData = (_classData = {}, _defineProperty(_classData, classNamePrefix$a, true), _defineProperty(_classData, "".concat(classNamePrefix$a, "--").concat(props.size), true), _classData);
      return createElement("div", {
        "class": classData,
        "on": _objectSpread2({}, ctx.listeners)
      }, [props.image ? createElement("img", {
        "attrs": {
          "alt": "",
          "src": props.image
        }
      }) : createElement(VsIcon, {
        "attrs": {
          "name": "person-outline"
        }
      })]);
    };
  }
});

var classNamePrefix$b = "vs-menu";
var VsMenu = createComponent({
  setup: function setup(props, ctx) {
    return function () {
      return createElement("nav", {
        "class": classNamePrefix$b
      }, [createElement("ol", [ctx.slots["default"]()])]);
    };
  }
});

var classNamePrefix$c = "vs-menu-item";
var VsMenuItem = createComponent({
  props: {
    caption: {
      "default": false
    }
  },
  setup: function setup(props, ctx) {
    return function () {
      var _classData;

      var classData = (_classData = {}, _defineProperty(_classData, classNamePrefix$c, true), _defineProperty(_classData, "".concat(classNamePrefix$c, "--caption"), props.caption), _classData);
      return createElement("li", {
        "class": classData,
        "attrs": {
          "aria-invalid": props.caption
        }
      }, [ctx.slots["default"]({
        activeClass: "active-class"
      })]);
    };
  }
});

var classNamePrefix$d = "vs-tab";
var VsTab = createComponent({
  setup: function setup(props, ctx) {
    return function () {
      return createElement("nav", {
        "class": classNamePrefix$d
      }, [createElement("ol", [ctx.slots["default"]()])]);
    };
  }
});

var classNamePrefix$e = "vs-tab-item";
var VsTabItem = createComponent({
  setup: function setup(props, ctx) {
    return function () {
      var classData = _defineProperty({}, classNamePrefix$e, true);

      return createElement("li", {
        "class": classData
      }, [ctx.slots["default"]({
        activeClass: "active-class"
      })]);
    };
  }
});

var Components = {
  VsButton: VsButton$1,
  VsThemeProvider: VsThemeProvider,
  VsCircularProgress: VsButton,
  VsInput: VsInput,
  VsIcon: VsIcon,
  VsForm: VsForm,
  VsFormItem: VsFormItem,
  VsRow: VsRow,
  VsCol: VsCol,
  VsSelect: VsInput$1,
  VsCheckbox: VsCheckbox,
  VsRadio: VsRadio,
  VsRadioGroup: VsRadioProps,
  VsBreadcrumb: VsBreadcrumb,
  VsAvatar: VsAvatar,
  VsMenu: VsMenu,
  VsMenuItem: VsMenuItem,
  VsTab: VsTab,
  VsTabItem: VsTabItem
};

var install$1 = function install(Vue) {
  Object.keys(Components).forEach(function (key) {
    Vue.component(key, Components[key]);
  });
  Vue.use(plugin);
};

var VueSpace = {
  install: install$1,
  NAME: 'vue-space'
};

module.exports = VueSpace;
//# sourceMappingURL=vue-space.common.js.map
