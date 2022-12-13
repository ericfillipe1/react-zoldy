(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactZoldy = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$1(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
          ;
        }
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
  }

  function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
  }

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof$2(obj) {
    "@babel/helpers - typeof";

    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$2(obj);
  }

  function _toPrimitive$2(input, hint) {
    if (_typeof$2(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$2(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey$2(arg) {
    var key = _toPrimitive$2(arg, "string");
    return _typeof$2(key) === "symbol" ? key : String(key);
  }

  function _defineProperties$2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
    }
  }
  function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$2(obj, key, value) {
    key = _toPropertyKey$2(key);
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

  function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$2(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function createCommonjsModule$2(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1$2 = createCommonjsModule$2(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1$2 = createCommonjsModule$2(function (module) {
  var _typeof = _typeof_1$2["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) {
                if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              }
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime$2 = regeneratorRuntime$1$2();
  var regenerator$2 = runtime$2;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime$2;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime$2;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime$2);
    }
  }

  var WrappedValue_OPAQUE$1 = Symbol();
  var Void$1 = Symbol();

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
  }

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toArray(arr) {
    return _arrayWithHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableRest$2();
  }

  function _asyncIterator$1(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator$1(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
  function AsyncFromSyncIterator$1(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator$1 = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator$1.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator$1(s); }
  var fromAsyncIterator$1 = function fromAsyncIterator(execute) {
    return new RakunSourceBuildImpl$1(execute);
  };
  var fromCallback$1 = function fromCallback() {
    for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
      callbacks[_key] = arguments[_key];
    }
    return fromAsyncIterator$1(function (ctx) {
      var values = null;
      return _defineProperty$2({}, Symbol.asyncIterator, function () {
        var asyncIterator = {
          next: function next() {
            return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee() {
              var _values, _values2, value, rest;
              return regenerator$2.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (values) {
                        _context.next = 4;
                        break;
                      }
                      _context.next = 3;
                      return Promise.resolve(callbacks.map(function (callback) {
                        return Promise.resolve(callback(ctx));
                      })).then(function (a) {
                        return Promise.all(a);
                      }).then(function (a) {
                        return Promise.all(a.flat().map(function (e) {
                          return Promise.resolve(e);
                        }));
                      });
                    case 3:
                      values = _context.sent;
                    case 4:
                      if (!(!values || values.length == 0)) {
                        _context.next = 6;
                        break;
                      }
                      return _context.abrupt("return", {
                        done: true,
                        value: null
                      });
                    case 6:
                      _values = values, _values2 = _toArray(_values), value = _values2[0], rest = _values2.slice(1);
                      values = rest;
                      return _context.abrupt("return", {
                        done: false,
                        value: value
                      });
                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        };
        return asyncIterator;
      });
    });
  };
  var RakunSourceBuildImpl$1 = /*#__PURE__*/function () {
    function RakunSourceBuildImpl(calback) {
      _classCallCheck$2(this, RakunSourceBuildImpl);
      this.calback = calback;
      _defineProperty$2(this, WrappedValue_OPAQUE$1, 'sourceBuild');
    }
    _createClass$2(RakunSourceBuildImpl, [{
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        var _this = this;
        return fromAsyncIterator$1(function (ctx) {
          var it = _this.asyncIterator(ctx);
          var index = 0;
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee2() {
                  var item;
                  return regenerator$2.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return it.next();
                        case 2:
                          item = _context2.sent;
                          if (!(item.done && index == 0)) {
                            _context2.next = 8;
                            break;
                          }
                          it = source.asyncIterator(ctx);
                          _context2.next = 7;
                          return it.next();
                        case 7:
                          item = _context2.sent;
                        case 8:
                          index++;
                          return _context2.abrupt("return", item);
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return this.switchIfEmpty(fromCallback$1(function () {
          return [value];
        }));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this2 = this;
        for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          sources[_key2] = arguments[_key2];
        }
        return fromAsyncIterator$1(function (ctx) {
          var it = _this2.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee3() {
                  var item, value;
                  return regenerator$2.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return it.next();
                        case 2:
                          item = _context3.sent;
                          if (!item.done) {
                            _context3.next = 5;
                            break;
                          }
                          return _context3.abrupt("return", item);
                        case 5:
                          _context3.t0 = [item.value];
                          _context3.t1 = _toConsumableArray$2;
                          _context3.next = 9;
                          return Promise.all(sources.map(function (source) {
                            return source.asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 9:
                          _context3.t2 = _context3.sent;
                          _context3.t3 = (0, _context3.t1)(_context3.t2);
                          value = _context3.t0.concat.call(_context3.t0, _context3.t3);
                          return _context3.abrupt("return", {
                            done: item.done,
                            value: value
                          });
                        case 13:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this3 = this;
        for (var _len3 = arguments.length, sourceFns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          sourceFns[_key3] = arguments[_key3];
        }
        return fromAsyncIterator$1(function (ctx) {
          var it = _this3.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee4() {
                  var item, value;
                  return regenerator$2.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return it.next();
                        case 2:
                          item = _context4.sent;
                          if (!item.done) {
                            _context4.next = 5;
                            break;
                          }
                          return _context4.abrupt("return", item);
                        case 5:
                          _context4.t0 = [item.value];
                          _context4.t1 = _toConsumableArray$2;
                          _context4.next = 9;
                          return Promise.all(sourceFns.map(function (fn) {
                            return fn(item.value).asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 9:
                          _context4.t2 = _context4.sent;
                          _context4.t3 = (0, _context4.t1)(_context4.t2);
                          value = _context4.t0.concat.call(_context4.t0, _context4.t3);
                          return _context4.abrupt("return", {
                            done: item.done,
                            value: value
                          });
                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        var _this4 = this;
        return fromAsyncIterator$1(function (ctx) {
          var it = _this4.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee5() {
                  var item, b;
                  return regenerator$2.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return it.next();
                        case 2:
                          item = _context5.sent;
                          if (!item.done) {
                            _context5.next = 5;
                            break;
                          }
                          return _context5.abrupt("return", item);
                        case 5:
                          _context5.next = 7;
                          return fn(item.value).asyncIterator(ctx);
                        case 7:
                          _context5.next = 9;
                          return _context5.sent.next();
                        case 9:
                          b = _context5.sent;
                          if (b.value) {
                            _context5.next = 14;
                            break;
                          }
                          _context5.next = 13;
                          return asyncIterator.next();
                        case 13:
                          return _context5.abrupt("return", _context5.sent);
                        case 14:
                          return _context5.abrupt("return", item);
                        case 15:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        var _this5 = this;
        return fromAsyncIterator$1(function (ctx) {
          var it = _this5.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee6() {
                  var item, b;
                  return regenerator$2.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return it.next();
                        case 2:
                          item = _context6.sent;
                          if (!item.done) {
                            _context6.next = 5;
                            break;
                          }
                          return _context6.abrupt("return", item);
                        case 5:
                          b = fn(item.value);
                          if (b) {
                            _context6.next = 10;
                            break;
                          }
                          _context6.next = 9;
                          return asyncIterator.next();
                        case 9:
                          return _context6.abrupt("return", _context6.sent);
                        case 10:
                          return _context6.abrupt("return", item);
                        case 11:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        var sourceOld = this;
        return fromAsyncIterator$1(function (ctx) {
          var finish = false;
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee7() {
                  return regenerator$2.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (finish) {
                            _context7.next = 5;
                            break;
                          }
                          finish = true;
                          _context7.next = 4;
                          return sourceOld.block(ctx);
                        case 4:
                          return _context7.abrupt("return", {
                            value: value
                          });
                        case 5:
                          return _context7.abrupt("return", {
                            done: true,
                            value: null
                          });
                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "then",
      value: function then(source) {
        if (!source) return this.thenReturn(Void$1);
        var sourceOld = this;
        return fromAsyncIterator$1(function (ctx) {
          var finish = false;
          var it2 = source.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee8() {
                  var item2;
                  return regenerator$2.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          if (finish) {
                            _context8.next = 4;
                            break;
                          }
                          finish = true;
                          _context8.next = 4;
                          return sourceOld.block(ctx);
                        case 4:
                          _context8.next = 6;
                          return it2.next();
                        case 6:
                          item2 = _context8.sent;
                          if (!item2.done) {
                            _context8.next = 9;
                            break;
                          }
                          return _context8.abrupt("return", item2);
                        case 9:
                          return _context8.abrupt("return", item2);
                        case 10:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        var _this6 = this;
        return fromAsyncIterator$1(function (ctx) {
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var iterator = _this6.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee9() {
                  return regenerator$2.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;
                          _context9.next = 3;
                          return iterator.next();
                        case 3:
                          return _context9.abrupt("return", _context9.sent);
                        case 6:
                          _context9.prev = 6;
                          _context9.t0 = _context9["catch"](0);
                          if (!(_context9.t0 instanceof errorType)) {
                            _context9.next = 12;
                            break;
                          }
                          _context9.next = 11;
                          return fn(_context9.t0).asyncIterator(ctx).next();
                        case 11:
                          return _context9.abrupt("return", _context9.sent);
                        case 12:
                          throw _context9.t0;
                        case 13:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        var _this7 = this;
        return fromAsyncIterator$1(function (ctx) {
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var iterator = _this7.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee10() {
                  var item;
                  return regenerator$2.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return iterator.next();
                        case 2:
                          item = _context10.sent;
                          if (!item.done) {
                            handler(item.value);
                          }
                          return _context10.abrupt("return", item);
                        case 5:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        var _this8 = this;
        return fromAsyncIterator$1(function (ctx) {
          var it = _this8.asyncIterator(ctx);
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee11() {
                  return regenerator$2.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.prev = 0;
                          _context11.next = 3;
                          return it.next();
                        case 3:
                          return _context11.abrupt("return", _context11.sent);
                        case 6:
                          _context11.prev = 6;
                          _context11.t0 = _context11["catch"](0);
                          handler(_context11.t0);
                          throw _context11.t0;
                        case 10:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        var _this9 = this;
        return fromAsyncIterator$1(function (ctx) {
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var it = _this9.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee12() {
                  var item;
                  return regenerator$2.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.next = 2;
                          return it.next();
                        case 2:
                          item = _context12.sent;
                          if (!item.done) {
                            _context12.next = 5;
                            break;
                          }
                          return _context12.abrupt("return", item);
                        case 5:
                          _context12.t0 = item.done;
                          _context12.next = 8;
                          return fn(item.value);
                        case 8:
                          _context12.t1 = _context12.sent;
                          return _context12.abrupt("return", {
                            done: _context12.t0,
                            value: _context12.t1
                          });
                        case 10:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        var _this10 = this;
        return fromAsyncIterator$1(function (ctx) {
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var iterator = _this10.asyncIterator(ctx);
            var item = null; // (1)
            var iterator2 = null; // (1)
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee13() {
                  var item2;
                  return regenerator$2.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!(item == null)) {
                            _context13.next = 4;
                            break;
                          }
                          _context13.next = 3;
                          return iterator.next();
                        case 3:
                          item = _context13.sent;
                        case 4:
                          if (!item.done) {
                            _context13.next = 6;
                            break;
                          }
                          return _context13.abrupt("return", {
                            done: true,
                            value: item.value
                          });
                        case 6:
                          if (iterator2 == null) {
                            iterator2 = fn(item.value).asyncIterator(ctx);
                          }
                          _context13.next = 9;
                          return iterator2.next();
                        case 9:
                          item2 = _context13.sent;
                          if (!item2.done) {
                            _context13.next = 18;
                            break;
                          }
                          iterator2 = null;
                          item = null;
                          _context13.next = 15;
                          return asyncIterator.next();
                        case 15:
                          return _context13.abrupt("return", _context13.sent);
                        case 18:
                          return _context13.abrupt("return", {
                            done: item2.done,
                            value: item2.value
                          });
                        case 19:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "blockFirst",
      value: function () {
        var _blockFirst = _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee14(contextManager) {
          var array;
          return regenerator$2.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.block(contextManager);
                case 2:
                  array = _context14.sent;
                  return _context14.abrupt("return", array[0]);
                case 4:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));
        function blockFirst(_x) {
          return _blockFirst.apply(this, arguments);
        }
        return blockFirst;
      }()
    }, {
      key: "block",
      value: function () {
        var _block = _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee15(contextManager) {
          var arr, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;
          return regenerator$2.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  arr = [];
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context15.prev = 3;
                  _context15.t0 = _asyncIterator$1;
                  _context15.next = 7;
                  return this.calback(contextManager);
                case 7:
                  _context15.t1 = _context15.sent;
                  _iterator = (0, _context15.t0)(_context15.t1);
                case 9:
                  _context15.next = 11;
                  return _iterator.next();
                case 11:
                  if (!(_iteratorAbruptCompletion = !(_step = _context15.sent).done)) {
                    _context15.next = 17;
                    break;
                  }
                  i = _step.value;
                  arr.push(i);
                case 14:
                  _iteratorAbruptCompletion = false;
                  _context15.next = 9;
                  break;
                case 17:
                  _context15.next = 23;
                  break;
                case 19:
                  _context15.prev = 19;
                  _context15.t2 = _context15["catch"](3);
                  _didIteratorError = true;
                  _iteratorError = _context15.t2;
                case 23:
                  _context15.prev = 23;
                  _context15.prev = 24;
                  if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                    _context15.next = 28;
                    break;
                  }
                  _context15.next = 28;
                  return _iterator["return"]();
                case 28:
                  _context15.prev = 28;
                  if (!_didIteratorError) {
                    _context15.next = 31;
                    break;
                  }
                  throw _iteratorError;
                case 31:
                  return _context15.finish(28);
                case 32:
                  return _context15.finish(23);
                case 33:
                  return _context15.abrupt("return", arr);
                case 34:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this, [[3, 19, 23, 33], [24,, 28, 32]]);
        }));
        function block(_x2) {
          return _block.apply(this, arguments);
        }
        return block;
      }()
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.calback(ctx)[Symbol.asyncIterator]();
      }
    }]);
    return RakunSourceBuildImpl;
  }();

  var StaticSourceBuildImpl$1 = /*#__PURE__*/function () {
    function StaticSourceBuildImpl() {
      _classCallCheck$2(this, StaticSourceBuildImpl);
    }
    _createClass$2(StaticSourceBuildImpl, [{
      key: "fromCallback",
      value: function fromCallback$1$1() {
        return fromCallback$1.apply(void 0, arguments);
      }
    }, {
      key: "just",
      value: function just() {
        for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
          promises[_key] = arguments[_key];
        }
        return fromCallback$1(function () {
          return promises;
        });
      }
    }, {
      key: "fromArray",
      value: function fromArray(values) {
        return fromCallback$1(function () {
          return values;
        });
      }
    }, {
      key: "then",
      value: function then() {
        return fromCallback$1(function () {
          return [Void$1];
        });
      }
    }, {
      key: "empty",
      value: function empty() {
        return fromCallback$1(function () {
          return [];
        });
      }
    }, {
      key: "zip",
      value: function zip() {
        for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          sources[_key2] = arguments[_key2];
        }
        return fromAsyncIterator$1(function (ctx) {
          var finish = false;
          return _defineProperty$2({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee() {
                  var value;
                  return regenerator$2.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (finish) {
                            _context.next = 6;
                            break;
                          }
                          finish = true;
                          _context.next = 4;
                          return Promise.all(sources.map(function (source) {
                            return source.asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 4:
                          value = _context.sent;
                          return _context.abrupt("return", {
                            done: false,
                            value: value
                          });
                        case 6:
                          return _context.abrupt("return", {
                            done: true,
                            value: null
                          });
                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "error",
      value: function error(_error) {
        return fromCallback$1( /*#__PURE__*/_asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee2() {
          return regenerator$2.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  throw _error;
                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
      }
    }]);
    return StaticSourceBuildImpl;
  }();
  var sourceBuild$1$1 = new StaticSourceBuildImpl$1();

  var RakunContextManagerImpl$1 = /*#__PURE__*/function () {
    function RakunContextManagerImpl() {
      _classCallCheck$2(this, RakunContextManagerImpl);
      _defineProperty$2(this, "items", []);
    }
    _createClass$2(RakunContextManagerImpl, [{
      key: "getValue",
      value: function getValue(context) {
        var _this$items$filter$;
        return Promise.resolve((_this$items$filter$ = this.items.filter(function (item) {
          return item.context === context;
        })[0]) === null || _this$items$filter$ === void 0 ? void 0 : _this$items$filter$.value);
      }
    }, {
      key: "setValue",
      value: function setValue(context, value) {
        this.items = [].concat(_toConsumableArray$2(this.items.filter(function (item) {
          return item.context != context;
        })), [{
          context: context,
          value: value
        }]);
        return Promise.resolve(Void$1);
      }
    }]);
    return RakunContextManagerImpl;
  }();

  var fromSourceBuild$1$1 = function fromSourceBuild(sourceBuild) {
    return new RakunFluxImpl$1(sourceBuild);
  };

  var RakunMonoImpl$1 = /*#__PURE__*/function () {
    function RakunMonoImpl(sourceBuild) {
      _classCallCheck$2(this, RakunMonoImpl);
      this.sourceBuild = sourceBuild;
      _defineProperty$2(this, WrappedValue_OPAQUE$1, "mono");
    }
    _createClass$2(RakunMonoImpl, [{
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE$1] == 'flux') {
            return fromSourceBuild$1$1(this.sourceBuild.then(source));
          } else {
            return fromSourceBuild$2(this.sourceBuild.then(source));
          }
        } else return fromSourceBuild$2(this.sourceBuild.then());
      }
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.sourceBuild.asyncIterator(ctx);
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild$2(this.sourceBuild.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild$2(this.sourceBuild.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild$2(this.sourceBuild.doOnError(handler));
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild$2(this.sourceBuild.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild$2(this.sourceBuild.defaultIfEmpty(value));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$sourceBuild;
        return fromSourceBuild$2((_this$sourceBuild = this.sourceBuild).zipWhen.apply(_this$sourceBuild, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$sourceBuild2;
        return fromSourceBuild$2((_this$sourceBuild2 = this.sourceBuild).zip.apply(_this$sourceBuild2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild$2(this.sourceBuild.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild$2(this.sourceBuild.flatPipe(fn));
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild$2(this.sourceBuild.thenReturn(value));
      }
    }, {
      key: "blockFirst",
      value: function () {
        var _blockFirst = _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee(contextManager) {
          var array;
          return regenerator$2.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.sourceBuild.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl$1());
                case 2:
                  array = _context.sent;
                  return _context.abrupt("return", array[0]);
                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        function blockFirst(_x) {
          return _blockFirst.apply(this, arguments);
        }
        return blockFirst;
      }()
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild$2(this.sourceBuild.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild$2(this.sourceBuild.flatFilter(fn));
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this.sourceBuild.block(contextManager);
      }
    }]);
    return RakunMonoImpl;
  }();

  var fromSourceBuild$2 = function fromSourceBuild(sourceBuild) {
    return new RakunMonoImpl$1(sourceBuild);
  };

  var RakunFluxImpl$1 = /*#__PURE__*/function () {
    function RakunFluxImpl(sourceBuild) {
      _classCallCheck$2(this, RakunFluxImpl);
      this.sourceBuild = sourceBuild;
      _defineProperty$2(this, WrappedValue_OPAQUE$1, 'flux');
    }
    _createClass$2(RakunFluxImpl, [{
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE$1] == 'mono') {
            return fromSourceBuild$2(this.sourceBuild.then(source));
          } else {
            return fromSourceBuild$1$1(this.sourceBuild.then(source));
          }
        } else return fromSourceBuild$1$1(this.sourceBuild.then());
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this.sourceBuild.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl$1());
      }
    }, {
      key: "array",
      value: function array() {
        var _this = this;
        return fromSourceBuild$2(sourceBuild$1$1.fromCallback( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator$2( /*#__PURE__*/regenerator$2.mark(function _callee(ctx) {
            return regenerator$2.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.sourceBuild.block(ctx);
                  case 2:
                    _context.t0 = _context.sent;
                    return _context.abrupt("return", [_context.t0]);
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      }
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.sourceBuild.asyncIterator(ctx);
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild$1$1(this.sourceBuild.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild$1$1(this.sourceBuild.defaultIfEmpty(value));
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild$1$1(this.sourceBuild.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild$1$1(this.sourceBuild.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild$1$1(this.sourceBuild.doOnError(handler));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$sourceBuild;
        return fromSourceBuild$1$1((_this$sourceBuild = this.sourceBuild).zipWhen.apply(_this$sourceBuild, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$sourceBuild2;
        return fromSourceBuild$1$1((_this$sourceBuild2 = this.sourceBuild).zip.apply(_this$sourceBuild2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild$1$1(this.sourceBuild.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild$1$1(this.sourceBuild.flatPipe(fn));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild$1$1(this.sourceBuild.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild$1$1(this.sourceBuild.flatFilter(fn));
      }
    }, {
      key: "blockFirst",
      value: function blockFirst(contextManager) {
        return this.sourceBuild.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl$1());
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild$1$1(this.sourceBuild.thenReturn(value));
      }
    }]);
    return RakunFluxImpl;
  }();

  var RakunStaticFluxImpl$1 = /*#__PURE__*/function () {
    function RakunStaticFluxImpl() {
      _classCallCheck$2(this, RakunStaticFluxImpl);
    }
    _createClass$2(RakunStaticFluxImpl, [{
      key: "fromCallBack",
      value: function fromCallBack() {
        return this.fromSourceBuild(sourceBuild$1$1.fromCallback.apply(sourceBuild$1$1, arguments));
      }
    }, {
      key: "fromSourceBuild",
      value: function fromSourceBuild(sourceBuild) {
        return new RakunFluxImpl$1(sourceBuild);
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return this.fromSourceBuild(sourceBuild$1$1.fromArray(promise));
      }
    }, {
      key: "fromArray",
      value: function fromArray(values) {
        return this.fromSourceBuild(sourceBuild$1$1.fromArray(values));
      }
    }, {
      key: "just",
      value: function just() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }
        return this.fromSourceBuild(sourceBuild$1$1.fromArray(values));
      }
    }]);
    return RakunStaticFluxImpl;
  }();
  new RakunStaticFluxImpl$1();

  var StaticMonoImpl$1 = /*#__PURE__*/function () {
    function StaticMonoImpl() {
      _classCallCheck$2(this, StaticMonoImpl);
    }
    _createClass$2(StaticMonoImpl, [{
      key: "fromCallBack",
      value: function fromCallBack() {
        return this.fromSourceBuild(sourceBuild$1$1.fromCallback.apply(sourceBuild$1$1, arguments));
      }
    }, {
      key: "fromSourceBuild",
      value: function fromSourceBuild$1(p) {
        return fromSourceBuild$2(p);
      }
    }, {
      key: "then",
      value: function then() {
        return this.fromSourceBuild(sourceBuild$1$1.then());
      }
    }, {
      key: "empty",
      value: function empty() {
        return this.fromSourceBuild(sourceBuild$1$1.empty());
      }
    }, {
      key: "zip",
      value: function zip() {
        return this.fromSourceBuild(sourceBuild$1$1.zip.apply(sourceBuild$1$1, arguments));
      }
    }, {
      key: "just",
      value: function just(value) {
        return this.fromSourceBuild(sourceBuild$1$1.just(value));
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return this.fromSourceBuild(sourceBuild$1$1.just(promise));
      }
    }, {
      key: "error",
      value: function error(_error) {
        return this.fromSourceBuild(sourceBuild$1$1.error(_error));
      }
    }]);
    return StaticMonoImpl;
  }();
  var mono$1$1 = new StaticMonoImpl$1();

  var RakunContextImpl$1 = /*#__PURE__*/function () {
    function RakunContextImpl(defualtValue) {
      _classCallCheck$2(this, RakunContextImpl);
      this.defualtValue = defualtValue;
    }
    _createClass$2(RakunContextImpl, [{
      key: "get",
      value: function get() {
        var _this = this;
        return mono$1$1.fromCallBack(function (ctx) {
          return [ctx.getValue(_this)];
        });
      }
    }, {
      key: "define",
      value: function define(value) {
        var _this2 = this;
        return mono$1$1.fromCallBack(function (ctx) {
          return [ctx.setValue(_this2, value)];
        });
      }
    }]);
    return RakunContextImpl;
  }();

  var RakunStaticContextImpl$1 = /*#__PURE__*/function () {
    function RakunStaticContextImpl() {
      _classCallCheck$2(this, RakunStaticContextImpl);
    }
    _createClass$2(RakunStaticContextImpl, [{
      key: "create",
      value: function create(value) {
        return new RakunContextImpl$1(value);
      }
    }]);
    return RakunStaticContextImpl;
  }();
  new RakunStaticContextImpl$1();
  var mono$2 = mono$1$1;

  var RakunSnapshotContext = /*#__PURE__*/React__default["default"].createContext(mono$2.then());
  var RakunRoot = function RakunRoot(props) {
    var contextOld = React.useContext(RakunSnapshotContext);
    var value = props.value;
    var context = React.useMemo(function () {
      return contextOld.then(value);
    }, [value, contextOld]);
    return /*#__PURE__*/React__default["default"].createElement(RakunSnapshotContext.Provider, {
      value: context
    }, props.children);
  };

  var useZoldyValue = function useZoldyValue(zoldyValue) {
    var valueLoadable = useZoldyValueLoadable(zoldyValue);
    if (valueLoadable.state == "hasError") throw valueLoadable.contents;else if (valueLoadable.state == "loading") throw valueLoadable.contents;else throw valueLoadable.contents;
  };
  var useZoldyValueLoadable = function useZoldyValueLoadable(zoldyValue) {
    var context = React.useContext(RakunSnapshotContext);
    var setValueLoadable = function setValueLoadable(_) {};
    var load = React.useCallback(function () {
      return context.then(zoldyValue.get()).doOnNext(function (contents) {
        return setValueLoadable({
          state: "hasValue",
          contents: contents
        });
      }).doOnError(function (contents) {
        return setValueLoadable({
          state: "hasError",
          contents: contents
        });
      }).blockFirst();
    }, []);
    var _useState = React.useState(function () {
        return {
          state: 'loading',
          contents: load()
        };
      }),
      _useState2 = _slicedToArray$1(_useState, 2),
      valueLoadable = _useState2[0],
      _setValueLoadable = _useState2[1];
    setValueLoadable = _setValueLoadable;
    return valueLoadable;
  };
  var useSetZoldyState = function useSetZoldyState(zoldyState) {
    var context = React.useContext(RakunSnapshotContext);
    var set = React.useCallback(function (valOrUpdater) {
      context.then(zoldyState.get()).flatPipe(function (oldValue) {
        if (typeof valOrUpdater == "function") {
          var updater = valOrUpdater;
          return zoldyState.set(updater(oldValue));
        } else {
          return zoldyState.set(valOrUpdater);
        }
      }).blockFirst();
    }, []);
    return set;
  };
  var useZoldyState = function useZoldyState(zoldyState) {
    return [useZoldyValue(zoldyState), useSetZoldyState(zoldyState)];
  };
  var useZoldyStateLoadable = function useZoldyStateLoadable(zoldyState) {
    return [useZoldyValueLoadable(zoldyState), useSetZoldyState(zoldyState)];
  };
  var useResetZoldyState = function useResetZoldyState(zoldyState) {
    var context = React.useContext(RakunSnapshotContext);
    var set = React.useCallback(function () {
      context.then(zoldyState.reset()).blockFirst();
    }, []);
    return set;
  };

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$1(obj);
  }

  function _toPrimitive$1(input, hint) {
    if (_typeof$1(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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

  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$1(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function createCommonjsModule$1(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1$1 = createCommonjsModule$1(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1$1 = createCommonjsModule$1(function (module) {
  var _typeof = _typeof_1$1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) {
                if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              }
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime$1 = regeneratorRuntime$1$1();
  var regenerator$1 = runtime$1;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime$1;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime$1;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime$1);
    }
  }

  var WrappedValue_OPAQUE = Symbol();
  var Void = Symbol();

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toArray$1(arr) {
    return _arrayWithHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest$1();
  }

  function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
  function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
  var fromAsyncIterator = function fromAsyncIterator(execute) {
    return new RakunSourceBuildImpl(execute);
  };
  var fromCallback = function fromCallback() {
    for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
      callbacks[_key] = arguments[_key];
    }
    return fromAsyncIterator(function (ctx) {
      var values = null;
      return _defineProperty({}, Symbol.asyncIterator, function () {
        var asyncIterator = {
          next: function next() {
            return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee() {
              var _values, _values2, value, rest;
              return regenerator$1.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (values) {
                        _context.next = 4;
                        break;
                      }
                      _context.next = 3;
                      return Promise.resolve(callbacks.map(function (callback) {
                        return Promise.resolve(callback(ctx));
                      })).then(function (a) {
                        return Promise.all(a);
                      }).then(function (a) {
                        return Promise.all(a.flat().map(function (e) {
                          return Promise.resolve(e);
                        }));
                      });
                    case 3:
                      values = _context.sent;
                    case 4:
                      if (!(!values || values.length == 0)) {
                        _context.next = 6;
                        break;
                      }
                      return _context.abrupt("return", {
                        done: true,
                        value: null
                      });
                    case 6:
                      _values = values, _values2 = _toArray$1(_values), value = _values2[0], rest = _values2.slice(1);
                      values = rest;
                      return _context.abrupt("return", {
                        done: false,
                        value: value
                      });
                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        };
        return asyncIterator;
      });
    });
  };
  var RakunSourceBuildImpl = /*#__PURE__*/function () {
    function RakunSourceBuildImpl(calback) {
      _classCallCheck(this, RakunSourceBuildImpl);
      this.calback = calback;
      _defineProperty(this, WrappedValue_OPAQUE, 'sourceBuild');
    }
    _createClass(RakunSourceBuildImpl, [{
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        var _this = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this.asyncIterator(ctx);
          var index = 0;
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee2() {
                  var item;
                  return regenerator$1.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return it.next();
                        case 2:
                          item = _context2.sent;
                          if (!(item.done && index == 0)) {
                            _context2.next = 8;
                            break;
                          }
                          it = source.asyncIterator(ctx);
                          _context2.next = 7;
                          return it.next();
                        case 7:
                          item = _context2.sent;
                        case 8:
                          index++;
                          return _context2.abrupt("return", item);
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return this.switchIfEmpty(fromCallback(function () {
          return [value];
        }));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this2 = this;
        for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          sources[_key2] = arguments[_key2];
        }
        return fromAsyncIterator(function (ctx) {
          var it = _this2.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee3() {
                  var item, value;
                  return regenerator$1.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return it.next();
                        case 2:
                          item = _context3.sent;
                          if (!item.done) {
                            _context3.next = 5;
                            break;
                          }
                          return _context3.abrupt("return", item);
                        case 5:
                          _context3.t0 = [item.value];
                          _context3.t1 = _toConsumableArray$1;
                          _context3.next = 9;
                          return Promise.all(sources.map(function (source) {
                            return source.asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 9:
                          _context3.t2 = _context3.sent;
                          _context3.t3 = (0, _context3.t1)(_context3.t2);
                          value = _context3.t0.concat.call(_context3.t0, _context3.t3);
                          return _context3.abrupt("return", {
                            done: item.done,
                            value: value
                          });
                        case 13:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this3 = this;
        for (var _len3 = arguments.length, sourceFns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          sourceFns[_key3] = arguments[_key3];
        }
        return fromAsyncIterator(function (ctx) {
          var it = _this3.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee4() {
                  var item, value;
                  return regenerator$1.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return it.next();
                        case 2:
                          item = _context4.sent;
                          if (!item.done) {
                            _context4.next = 5;
                            break;
                          }
                          return _context4.abrupt("return", item);
                        case 5:
                          _context4.t0 = [item.value];
                          _context4.t1 = _toConsumableArray$1;
                          _context4.next = 9;
                          return Promise.all(sourceFns.map(function (fn) {
                            return fn(item.value).asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 9:
                          _context4.t2 = _context4.sent;
                          _context4.t3 = (0, _context4.t1)(_context4.t2);
                          value = _context4.t0.concat.call(_context4.t0, _context4.t3);
                          return _context4.abrupt("return", {
                            done: item.done,
                            value: value
                          });
                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        var _this4 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this4.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee5() {
                  var item, b;
                  return regenerator$1.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return it.next();
                        case 2:
                          item = _context5.sent;
                          if (!item.done) {
                            _context5.next = 5;
                            break;
                          }
                          return _context5.abrupt("return", item);
                        case 5:
                          _context5.next = 7;
                          return fn(item.value).asyncIterator(ctx);
                        case 7:
                          _context5.next = 9;
                          return _context5.sent.next();
                        case 9:
                          b = _context5.sent;
                          if (b.value) {
                            _context5.next = 14;
                            break;
                          }
                          _context5.next = 13;
                          return asyncIterator.next();
                        case 13:
                          return _context5.abrupt("return", _context5.sent);
                        case 14:
                          return _context5.abrupt("return", item);
                        case 15:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        var _this5 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this5.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee6() {
                  var item, b;
                  return regenerator$1.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return it.next();
                        case 2:
                          item = _context6.sent;
                          if (!item.done) {
                            _context6.next = 5;
                            break;
                          }
                          return _context6.abrupt("return", item);
                        case 5:
                          b = fn(item.value);
                          if (b) {
                            _context6.next = 10;
                            break;
                          }
                          _context6.next = 9;
                          return asyncIterator.next();
                        case 9:
                          return _context6.abrupt("return", _context6.sent);
                        case 10:
                          return _context6.abrupt("return", item);
                        case 11:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        var sourceOld = this;
        return fromAsyncIterator(function (ctx) {
          var finish = false;
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee7() {
                  return regenerator$1.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (finish) {
                            _context7.next = 5;
                            break;
                          }
                          finish = true;
                          _context7.next = 4;
                          return sourceOld.block(ctx);
                        case 4:
                          return _context7.abrupt("return", {
                            value: value
                          });
                        case 5:
                          return _context7.abrupt("return", {
                            done: true,
                            value: null
                          });
                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "then",
      value: function then(source) {
        if (!source) return this.thenReturn(Void);
        var sourceOld = this;
        return fromAsyncIterator(function (ctx) {
          var finish = false;
          var it2 = source.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee8() {
                  var item2;
                  return regenerator$1.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          if (finish) {
                            _context8.next = 4;
                            break;
                          }
                          finish = true;
                          _context8.next = 4;
                          return sourceOld.block(ctx);
                        case 4:
                          _context8.next = 6;
                          return it2.next();
                        case 6:
                          item2 = _context8.sent;
                          if (!item2.done) {
                            _context8.next = 9;
                            break;
                          }
                          return _context8.abrupt("return", item2);
                        case 9:
                          return _context8.abrupt("return", item2);
                        case 10:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        var _this6 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this6.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee9() {
                  return regenerator$1.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;
                          _context9.next = 3;
                          return iterator.next();
                        case 3:
                          return _context9.abrupt("return", _context9.sent);
                        case 6:
                          _context9.prev = 6;
                          _context9.t0 = _context9["catch"](0);
                          if (!(_context9.t0 instanceof errorType)) {
                            _context9.next = 12;
                            break;
                          }
                          _context9.next = 11;
                          return fn(_context9.t0).asyncIterator(ctx).next();
                        case 11:
                          return _context9.abrupt("return", _context9.sent);
                        case 12:
                          throw _context9.t0;
                        case 13:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        var _this7 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this7.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee10() {
                  var item;
                  return regenerator$1.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return iterator.next();
                        case 2:
                          item = _context10.sent;
                          if (!item.done) {
                            handler(item.value);
                          }
                          return _context10.abrupt("return", item);
                        case 5:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        var _this8 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this8.asyncIterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee11() {
                  return regenerator$1.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.prev = 0;
                          _context11.next = 3;
                          return it.next();
                        case 3:
                          return _context11.abrupt("return", _context11.sent);
                        case 6:
                          _context11.prev = 6;
                          _context11.t0 = _context11["catch"](0);
                          handler(_context11.t0);
                          throw _context11.t0;
                        case 10:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        var _this9 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var it = _this9.asyncIterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee12() {
                  var item;
                  return regenerator$1.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.next = 2;
                          return it.next();
                        case 2:
                          item = _context12.sent;
                          if (!item.done) {
                            _context12.next = 5;
                            break;
                          }
                          return _context12.abrupt("return", item);
                        case 5:
                          _context12.t0 = item.done;
                          _context12.next = 8;
                          return fn(item.value);
                        case 8:
                          _context12.t1 = _context12.sent;
                          return _context12.abrupt("return", {
                            done: _context12.t0,
                            value: _context12.t1
                          });
                        case 10:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        var _this10 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this10.asyncIterator(ctx);
            var item = null; // (1)
            var iterator2 = null; // (1)
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee13() {
                  var item2;
                  return regenerator$1.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!(item == null)) {
                            _context13.next = 4;
                            break;
                          }
                          _context13.next = 3;
                          return iterator.next();
                        case 3:
                          item = _context13.sent;
                        case 4:
                          if (!item.done) {
                            _context13.next = 6;
                            break;
                          }
                          return _context13.abrupt("return", {
                            done: true,
                            value: item.value
                          });
                        case 6:
                          if (iterator2 == null) {
                            iterator2 = fn(item.value).asyncIterator(ctx);
                          }
                          _context13.next = 9;
                          return iterator2.next();
                        case 9:
                          item2 = _context13.sent;
                          if (!item2.done) {
                            _context13.next = 18;
                            break;
                          }
                          iterator2 = null;
                          item = null;
                          _context13.next = 15;
                          return asyncIterator.next();
                        case 15:
                          return _context13.abrupt("return", _context13.sent);
                        case 18:
                          return _context13.abrupt("return", {
                            done: item2.done,
                            value: item2.value
                          });
                        case 19:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "blockFirst",
      value: function () {
        var _blockFirst = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee14(contextManager) {
          var array;
          return regenerator$1.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.block(contextManager);
                case 2:
                  array = _context14.sent;
                  return _context14.abrupt("return", array[0]);
                case 4:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));
        function blockFirst(_x) {
          return _blockFirst.apply(this, arguments);
        }
        return blockFirst;
      }()
    }, {
      key: "block",
      value: function () {
        var _block = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee15(contextManager) {
          var arr, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;
          return regenerator$1.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  arr = [];
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context15.prev = 3;
                  _context15.t0 = _asyncIterator;
                  _context15.next = 7;
                  return this.calback(contextManager);
                case 7:
                  _context15.t1 = _context15.sent;
                  _iterator = (0, _context15.t0)(_context15.t1);
                case 9:
                  _context15.next = 11;
                  return _iterator.next();
                case 11:
                  if (!(_iteratorAbruptCompletion = !(_step = _context15.sent).done)) {
                    _context15.next = 17;
                    break;
                  }
                  i = _step.value;
                  arr.push(i);
                case 14:
                  _iteratorAbruptCompletion = false;
                  _context15.next = 9;
                  break;
                case 17:
                  _context15.next = 23;
                  break;
                case 19:
                  _context15.prev = 19;
                  _context15.t2 = _context15["catch"](3);
                  _didIteratorError = true;
                  _iteratorError = _context15.t2;
                case 23:
                  _context15.prev = 23;
                  _context15.prev = 24;
                  if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                    _context15.next = 28;
                    break;
                  }
                  _context15.next = 28;
                  return _iterator["return"]();
                case 28:
                  _context15.prev = 28;
                  if (!_didIteratorError) {
                    _context15.next = 31;
                    break;
                  }
                  throw _iteratorError;
                case 31:
                  return _context15.finish(28);
                case 32:
                  return _context15.finish(23);
                case 33:
                  return _context15.abrupt("return", arr);
                case 34:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this, [[3, 19, 23, 33], [24,, 28, 32]]);
        }));
        function block(_x2) {
          return _block.apply(this, arguments);
        }
        return block;
      }()
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.calback(ctx)[Symbol.asyncIterator]();
      }
    }]);
    return RakunSourceBuildImpl;
  }();

  var StaticSourceBuildImpl = /*#__PURE__*/function () {
    function StaticSourceBuildImpl() {
      _classCallCheck(this, StaticSourceBuildImpl);
    }
    _createClass(StaticSourceBuildImpl, [{
      key: "fromCallback",
      value: function fromCallback$1() {
        return fromCallback.apply(void 0, arguments);
      }
    }, {
      key: "just",
      value: function just() {
        for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
          promises[_key] = arguments[_key];
        }
        return fromCallback(function () {
          return promises;
        });
      }
    }, {
      key: "fromArray",
      value: function fromArray(values) {
        return fromCallback(function () {
          return values;
        });
      }
    }, {
      key: "then",
      value: function then() {
        return fromCallback(function () {
          return [Void];
        });
      }
    }, {
      key: "empty",
      value: function empty() {
        return fromCallback(function () {
          return [];
        });
      }
    }, {
      key: "zip",
      value: function zip() {
        for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          sources[_key2] = arguments[_key2];
        }
        return fromAsyncIterator(function (ctx) {
          var finish = false;
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee() {
                  var value;
                  return regenerator$1.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (finish) {
                            _context.next = 6;
                            break;
                          }
                          finish = true;
                          _context.next = 4;
                          return Promise.all(sources.map(function (source) {
                            return source.asyncIterator(ctx).next();
                          })).then(function (array) {
                            return array.map(function (item) {
                              return item.done ? null : item.value;
                            });
                          });
                        case 4:
                          value = _context.sent;
                          return _context.abrupt("return", {
                            done: false,
                            value: value
                          });
                        case 6:
                          return _context.abrupt("return", {
                            done: true,
                            value: null
                          });
                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "error",
      value: function error(_error) {
        return fromCallback( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee2() {
          return regenerator$1.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  throw _error;
                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
      }
    }]);
    return StaticSourceBuildImpl;
  }();
  var sourceBuild$1 = new StaticSourceBuildImpl();

  var RakunContextManagerImpl = /*#__PURE__*/function () {
    function RakunContextManagerImpl() {
      _classCallCheck(this, RakunContextManagerImpl);
      _defineProperty(this, "items", []);
    }
    _createClass(RakunContextManagerImpl, [{
      key: "getValue",
      value: function getValue(context) {
        var _this$items$filter$;
        return Promise.resolve((_this$items$filter$ = this.items.filter(function (item) {
          return item.context === context;
        })[0]) === null || _this$items$filter$ === void 0 ? void 0 : _this$items$filter$.value);
      }
    }, {
      key: "setValue",
      value: function setValue(context, value) {
        this.items = [].concat(_toConsumableArray$1(this.items.filter(function (item) {
          return item.context != context;
        })), [{
          context: context,
          value: value
        }]);
        return Promise.resolve(Void);
      }
    }]);
    return RakunContextManagerImpl;
  }();

  var fromSourceBuild$1 = function fromSourceBuild(sourceBuild) {
    return new RakunFluxImpl(sourceBuild);
  };

  var RakunMonoImpl = /*#__PURE__*/function () {
    function RakunMonoImpl(sourceBuild) {
      _classCallCheck(this, RakunMonoImpl);
      this.sourceBuild = sourceBuild;
      _defineProperty(this, WrappedValue_OPAQUE, "mono");
    }
    _createClass(RakunMonoImpl, [{
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE] == 'flux') {
            return fromSourceBuild$1(this.sourceBuild.then(source));
          } else {
            return fromSourceBuild(this.sourceBuild.then(source));
          }
        } else return fromSourceBuild(this.sourceBuild.then());
      }
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.sourceBuild.asyncIterator(ctx);
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild(this.sourceBuild.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild(this.sourceBuild.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild(this.sourceBuild.doOnError(handler));
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild(this.sourceBuild.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild(this.sourceBuild.defaultIfEmpty(value));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$sourceBuild;
        return fromSourceBuild((_this$sourceBuild = this.sourceBuild).zipWhen.apply(_this$sourceBuild, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$sourceBuild2;
        return fromSourceBuild((_this$sourceBuild2 = this.sourceBuild).zip.apply(_this$sourceBuild2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild(this.sourceBuild.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild(this.sourceBuild.flatPipe(fn));
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild(this.sourceBuild.thenReturn(value));
      }
    }, {
      key: "blockFirst",
      value: function () {
        var _blockFirst = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(contextManager) {
          var array;
          return regenerator$1.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.sourceBuild.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
                case 2:
                  array = _context.sent;
                  return _context.abrupt("return", array[0]);
                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        function blockFirst(_x) {
          return _blockFirst.apply(this, arguments);
        }
        return blockFirst;
      }()
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild(this.sourceBuild.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild(this.sourceBuild.flatFilter(fn));
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this.sourceBuild.block(contextManager);
      }
    }]);
    return RakunMonoImpl;
  }();

  var fromSourceBuild = function fromSourceBuild(sourceBuild) {
    return new RakunMonoImpl(sourceBuild);
  };

  var RakunFluxImpl = /*#__PURE__*/function () {
    function RakunFluxImpl(sourceBuild) {
      _classCallCheck(this, RakunFluxImpl);
      this.sourceBuild = sourceBuild;
      _defineProperty(this, WrappedValue_OPAQUE, 'flux');
    }
    _createClass(RakunFluxImpl, [{
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE] == 'mono') {
            return fromSourceBuild(this.sourceBuild.then(source));
          } else {
            return fromSourceBuild$1(this.sourceBuild.then(source));
          }
        } else return fromSourceBuild$1(this.sourceBuild.then());
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this.sourceBuild.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
      }
    }, {
      key: "array",
      value: function array() {
        var _this = this;
        return fromSourceBuild(sourceBuild$1.fromCallback( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(ctx) {
            return regenerator$1.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.sourceBuild.block(ctx);
                  case 2:
                    _context.t0 = _context.sent;
                    return _context.abrupt("return", [_context.t0]);
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      }
    }, {
      key: "asyncIterator",
      value: function asyncIterator(ctx) {
        return this.sourceBuild.asyncIterator(ctx);
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild$1(this.sourceBuild.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild$1(this.sourceBuild.defaultIfEmpty(value));
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild$1(this.sourceBuild.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild$1(this.sourceBuild.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild$1(this.sourceBuild.doOnError(handler));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$sourceBuild;
        return fromSourceBuild$1((_this$sourceBuild = this.sourceBuild).zipWhen.apply(_this$sourceBuild, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$sourceBuild2;
        return fromSourceBuild$1((_this$sourceBuild2 = this.sourceBuild).zip.apply(_this$sourceBuild2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild$1(this.sourceBuild.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild$1(this.sourceBuild.flatPipe(fn));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild$1(this.sourceBuild.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild$1(this.sourceBuild.flatFilter(fn));
      }
    }, {
      key: "blockFirst",
      value: function blockFirst(contextManager) {
        return this.sourceBuild.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild$1(this.sourceBuild.thenReturn(value));
      }
    }]);
    return RakunFluxImpl;
  }();

  var RakunStaticFluxImpl = /*#__PURE__*/function () {
    function RakunStaticFluxImpl() {
      _classCallCheck(this, RakunStaticFluxImpl);
    }
    _createClass(RakunStaticFluxImpl, [{
      key: "fromCallBack",
      value: function fromCallBack() {
        return this.fromSourceBuild(sourceBuild$1.fromCallback.apply(sourceBuild$1, arguments));
      }
    }, {
      key: "fromSourceBuild",
      value: function fromSourceBuild(sourceBuild) {
        return new RakunFluxImpl(sourceBuild);
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return this.fromSourceBuild(sourceBuild$1.fromArray(promise));
      }
    }, {
      key: "fromArray",
      value: function fromArray(values) {
        return this.fromSourceBuild(sourceBuild$1.fromArray(values));
      }
    }, {
      key: "just",
      value: function just() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }
        return this.fromSourceBuild(sourceBuild$1.fromArray(values));
      }
    }]);
    return RakunStaticFluxImpl;
  }();
  var flux$1 = new RakunStaticFluxImpl();

  var StaticMonoImpl = /*#__PURE__*/function () {
    function StaticMonoImpl() {
      _classCallCheck(this, StaticMonoImpl);
    }
    _createClass(StaticMonoImpl, [{
      key: "fromCallBack",
      value: function fromCallBack() {
        return this.fromSourceBuild(sourceBuild$1.fromCallback.apply(sourceBuild$1, arguments));
      }
    }, {
      key: "fromSourceBuild",
      value: function fromSourceBuild$1(p) {
        return fromSourceBuild(p);
      }
    }, {
      key: "then",
      value: function then() {
        return this.fromSourceBuild(sourceBuild$1.then());
      }
    }, {
      key: "empty",
      value: function empty() {
        return this.fromSourceBuild(sourceBuild$1.empty());
      }
    }, {
      key: "zip",
      value: function zip() {
        return this.fromSourceBuild(sourceBuild$1.zip.apply(sourceBuild$1, arguments));
      }
    }, {
      key: "just",
      value: function just(value) {
        return this.fromSourceBuild(sourceBuild$1.just(value));
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return this.fromSourceBuild(sourceBuild$1.just(promise));
      }
    }, {
      key: "error",
      value: function error(_error) {
        return this.fromSourceBuild(sourceBuild$1.error(_error));
      }
    }]);
    return StaticMonoImpl;
  }();
  var mono$1 = new StaticMonoImpl();

  var RakunContextImpl = /*#__PURE__*/function () {
    function RakunContextImpl(defualtValue) {
      _classCallCheck(this, RakunContextImpl);
      this.defualtValue = defualtValue;
    }
    _createClass(RakunContextImpl, [{
      key: "get",
      value: function get() {
        var _this = this;
        return mono$1.fromCallBack(function (ctx) {
          return [ctx.getValue(_this)];
        });
      }
    }, {
      key: "define",
      value: function define(value) {
        var _this2 = this;
        return mono$1.fromCallBack(function (ctx) {
          return [ctx.setValue(_this2, value)];
        });
      }
    }]);
    return RakunContextImpl;
  }();

  var RakunStaticContextImpl = /*#__PURE__*/function () {
    function RakunStaticContextImpl() {
      _classCallCheck(this, RakunStaticContextImpl);
    }
    _createClass(RakunStaticContextImpl, [{
      key: "create",
      value: function create(value) {
        return new RakunContextImpl(value);
      }
    }]);
    return RakunStaticContextImpl;
  }();
  var context$1 = new RakunStaticContextImpl();
  var flux = flux$1;
  var mono = mono$1;
  var context = context$1;

  context.create(null);
  var zoldySnapshotProvider = context.create(null);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
          ;
        }
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1 = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) {
                if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              }
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntime$1();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var version = 0;
  var ZoldySnapshotImpl = /*#__PURE__*/function () {
    function ZoldySnapshotImpl(parent) {
      _classCallCheck$1(this, ZoldySnapshotImpl);
      this.parent = parent;
      _defineProperty$1(this, "cache", {});
    }
    _createClass$1(ZoldySnapshotImpl, [{
      key: "cleanCache",
      value: function cleanCache(path) {
        var snapshot = this;
        return snapshot.getCacheValue(path).flatPipe(function (_ref) {
          var _snapshot$cache$path;
          _slicedToArray(_ref, 0);
          snapshot.cache[path] = _objectSpread(_objectSpread({}, (_snapshot$cache$path = snapshot.cache[path]) !== null && _snapshot$cache$path !== void 0 ? _snapshot$cache$path : {
            state: "cleanValue"
          }), {}, {
            value: null,
            version: version
          });
          if (snapshot.parent) {
            return snapshot.parent.cleanCache(path);
          } else {
            return mono.then();
          }
        });
      }
    }, {
      key: "addDependency",
      value: function addDependency(path, dependency) {
        var snapshot = this;
        return snapshot.hasDependency(path, dependency).flatPipe(function (b) {
          if (!b) {
            return snapshot.getDependencies(path).array().flatPipe(function (array) {
              return snapshot.setDependency(path, [].concat(_toConsumableArray(array), [dependency]));
            });
          }
          return mono.then();
        });
      }
    }, {
      key: "hasDependency",
      value: function hasDependency(path, dependency) {
        var snapshot = this;
        return mono.fromCallBack( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var _snapshot$cache$path$, _snapshot$cache$path2;
          var dependencies;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  dependencies = (_snapshot$cache$path$ = (_snapshot$cache$path2 = snapshot.cache[path]) === null || _snapshot$cache$path2 === void 0 ? void 0 : _snapshot$cache$path2.dependencies) !== null && _snapshot$cache$path$ !== void 0 ? _snapshot$cache$path$ : [];
                  return _context.abrupt("return", [dependencies.includes(dependency)]);
                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    }, {
      key: "setDependency",
      value: function setDependency(path, dependencies) {
        var snapshot = this;
        return mono.fromCallBack( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
          var _snapshot$cache$path3;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  snapshot.cache[path] = _objectSpread(_objectSpread({}, (_snapshot$cache$path3 = snapshot.cache[path]) !== null && _snapshot$cache$path3 !== void 0 ? _snapshot$cache$path3 : {
                    state: "noValue"
                  }), {}, {
                    dependencies: dependencies
                  });
                  return _context2.abrupt("return", [Void]);
                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
      }
    }, {
      key: "getDependencies",
      value: function getDependencies(path) {
        var _this = this;
        return flux.fromCallBack( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
          var _this$cache$path$depe, _this$cache$path;
          var dependencies;
          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  dependencies = (_this$cache$path$depe = (_this$cache$path = _this.cache[path]) === null || _this$cache$path === void 0 ? void 0 : _this$cache$path.dependencies) !== null && _this$cache$path$depe !== void 0 ? _this$cache$path$depe : [];
                  return _context3.abrupt("return", dependencies);
                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      }
    }, {
      key: "hasCacheState",
      value: function hasCacheState(path) {
        var snapshot = this;
        return mono.fromCallBack( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
          var _snapshot$cache$path$2, _snapshot$cache$path4;
          return regenerator.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", [(_snapshot$cache$path$2 = (_snapshot$cache$path4 = snapshot.cache[path]) === null || _snapshot$cache$path4 === void 0 ? void 0 : _snapshot$cache$path4.state) !== null && _snapshot$cache$path$2 !== void 0 ? _snapshot$cache$path$2 : "noValue"]);
                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        })));
      }
    }, {
      key: "setCacheValue",
      value: function setCacheValue(path, value) {
        var snapshot = this;
        return mono.fromCallBack( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5() {
          var _snapshot$cache$path5;
          return regenerator.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  version = version + 1;
                  snapshot.cache[path] = _objectSpread(_objectSpread({}, (_snapshot$cache$path5 = snapshot.cache[path]) !== null && _snapshot$cache$path5 !== void 0 ? _snapshot$cache$path5 : {
                    state: "hasValue"
                  }), {}, {
                    value: value,
                    version: version
                  });
                  return _context5.abrupt("return", [Void]);
                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        })));
      }
    }, {
      key: "getCacheValue",
      value: function getCacheValue(path) {
        var snapshot = this;
        return this.hasCacheState(path).flatPipe(function (state) {
          var _snapshot$cache$path6;
          if (state == 'noValue' && snapshot.parent) {
            return snapshot.parent.getCacheValue(path);
          }
          var value = (_snapshot$cache$path6 = snapshot.cache[path]) === null || _snapshot$cache$path6 === void 0 ? void 0 : _snapshot$cache$path6.value;
          return mono.just([state, value]);
        });
      }
    }, {
      key: "get",
      value: function get(_ref8) {
        var _get = _ref8.get,
          path = _ref8.path;
        var snapshot = this;
        return snapshot.getCacheValue(path).flatPipe(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
            state = _ref10[0],
            value = _ref10[1];
          if (state == "hasValue") {
            return mono.just(value);
          } else {
            return _get().flatPipe(function (v) {
              return snapshot.setCacheValue(path, v).thenReturn(v);
            });
          }
        });
      }
    }, {
      key: "set",
      value: function set(_ref11) {
        var path = _ref11.path,
          value = _ref11.value;
        return this.setCacheValue(path, value);
      }
    }]);
    return ZoldySnapshotImpl;
  }();
  var createSnapshot = function createSnapshot(parent) {
    return new ZoldySnapshotImpl(parent);
  };

  var ZoldyRoot = function ZoldyRoot(props) {
    var context = React.useMemo(function () {
      var snapshot = createSnapshot(null);
      if (props.initializeState) {
        props.initializeState(snapshot);
      }
      return zoldySnapshotProvider.define(snapshot);
    }, []);
    return /*#__PURE__*/React__default["default"].createElement(RakunRoot, {
      value: context
    }, props.children);
  };

  exports.ZoldyRoot = ZoldyRoot;
  exports.useResetZoldyState = useResetZoldyState;
  exports.useSetZoldyState = useSetZoldyState;
  exports.useZoldyState = useZoldyState;
  exports.useZoldyStateLoadable = useZoldyStateLoadable;
  exports.useZoldyValue = useZoldyValue;
  exports.useZoldyValueLoadable = useZoldyValueLoadable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
