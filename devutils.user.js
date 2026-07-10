// ==UserScript==
// @name        devutils
// @namespace   slidav.Desmos
// @version     1.0.0
// @author      SlimRunner
// @description Developer utilities for web console
// @grant       none
// @match       http://*/*
// @match       https://*/*
// @noframes
// ==/UserScript==

/*jshint esversion: 6 */

"use strict";
(function() {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = function(cb, mod) {
    return function __require() {
      try {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      } catch (e) {
        throw mod = 0, e;
      }
    };
  };

  // src/index.ts
  var require_index = __commonJS({
    "src/index.ts": function() {
      function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
          if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var _n = 0, F = function F2() {
            };
            return { s: F, n: function n() {
              return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
            }, e: function e2(r2) {
              throw r2;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = true, u = false;
        return { s: function s() {
          t = t.call(r);
        }, n: function n() {
          var r2 = t.next();
          return a = r2.done, r2;
        }, e: function e2(r2) {
          u = true, o = r2;
        }, f: function f() {
          try {
            a || null == t["return"] || t["return"]();
          } finally {
            if (u) throw o;
          }
        } };
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function _regenerator() {
        var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
        function i(r2, n2, o2, i2) {
          var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
          return _regeneratorDefine2(u2, "_invoke", (function(r3, n3, o3) {
            var i3, c3, u3, f2 = 0, p = o3 || [], y = false, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d2(t2, r4) {
              return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
            } };
            function d(r4, n4) {
              for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
                var o4, i4 = p[t], d2 = G.p, l = i4[2];
                r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
              }
              if (o4 || r4 > 1) return a;
              throw y = true, n4;
            }
            return function(o4, p2, l) {
              if (f2 > 1) throw TypeError("Generator is already running");
              for (y && 1 === p2 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
                i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
                try {
                  if (f2 = 2, i3) {
                    if (c3 || (o4 = "next"), t = i3[o4]) {
                      if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      u3 = t.value, c3 < 2 && (c3 = 0);
                    } else 1 === c3 && (t = i3["return"]) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
                    i3 = e;
                  } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
                } catch (t2) {
                  i3 = e, c3 = 1, u3 = t2;
                } finally {
                  f2 = 1;
                }
              }
              return { value: t, done: y };
            };
          })(r2, o2, i2), true), u2;
        }
        var a = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        t = Object.getPrototypeOf;
        var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
          return this;
        }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
        function f(e2) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
          return this;
        }), _regeneratorDefine2(u, "toString", function() {
          return "[object Generator]";
        }), (_regenerator = function _regenerator2() {
          return { w: i, m: f };
        })();
      }
      function _regeneratorDefine2(e, r, n, t) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (e2) {
          i = 0;
        }
        _regeneratorDefine2 = function _regeneratorDefine(e2, r2, n2, t2) {
          function o(r3, n3) {
            _regeneratorDefine2(e2, r3, function(e3) {
              return this._invoke(r3, n3, e3);
            });
          }
          r2 ? i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2 : (o("next", 0), o("throw", 1), o("return", 2));
        }, _regeneratorDefine2(e, r, n, t);
      }
      function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return _arrayLikeToArray(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
      }
      function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
      }
      function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
      }
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
      }
      function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      var Utils = /* @__PURE__ */ (function() {
        function Utils2() {
          _classCallCheck(this, Utils2);
          this.MIME = {
            bmp: "image/bmp",
            gif: "image/gif",
            ico: "image/vnd.microsoft.icon",
            jpeg: "image/jpeg",
            png: "image/png",
            svg: "image/svg+xml",
            tiff: "image/tiff",
            webp: "image/webp"
          };
        }
        return _createClass(Utils2, [{
          key: "download",
          value: function download(data, filename, type) {
            var file = new Blob([data], {
              type: type
            });
            var anchor = document.createElement("a");
            var url = URL.createObjectURL(file);
            anchor.href = url;
            anchor.download = filename;
            document.body.appendChild(anchor);
            anchor.click();
            setTimeout(function() {
              document.body.removeChild(anchor);
              window.URL.revokeObjectURL(url);
            }, 0);
          }
        }, {
          key: "downloadURI",
          value: function downloadURI(uri, filename) {
            var anchor = document.createElement("a");
            anchor.href = uri;
            anchor.download = filename;
            document.body.appendChild(anchor);
            anchor.click();
            setTimeout(function() {
              document.body.removeChild(anchor);
            }, 0);
          }
        }, {
          key: "savePage",
          value: function savePage() {
            var XMLS = new XMLSerializer();
            var HTML = XMLS.serializeToString(document);
            var title = document.title.replace(/[^.a-zA-Z0-9 _-]/g, "").replace(/(\s)+/g, "$1");
            this.download(HTML, "".concat(title, ".html"), "text/html; charset=UTF-8");
          }
        }, {
          key: "saveElement",
          value: function saveElement(elem) {
            var XMLS = new XMLSerializer();
            var HTML = XMLS.serializeToString(elem);
            var title = "".concat(elem.tagName.toLowerCase(), "-").concat(document.title).replace(/[^.a-zA-Z0-9 _-]/g, "").replace(/(\s)+/g, "$1");
            this.download(HTML, "".concat(title, ".html"), "text/html; charset=UTF-8");
          }
        }, {
          key: "darkToggle",
          value: function darkToggle(value) {
            var body = document.body.parentElement;
            if (!body) return;
            if (!body.style.filter) {
              body.style.filter = "invert(".concat(value, "%)");
            } else {
              body.style.filter = "";
            }
          }
        }, {
          key: "reverseLines",
          value: function reverseLines(text) {
            return text.split("\n").reverse().join("\n");
          }
        }, {
          key: "shuffleLines",
          value: function shuffleLines(text) {
            return this.shuffle(text.split("\n")).join("\n");
          }
        }, {
          key: "randInt",
          value: function randInt(start) {
            var end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (end === null) {
              var _ref = [0, start];
              start = _ref[0];
              end = _ref[1];
            }
            var minCeiled = Math.ceil(start);
            var maxFloored = Math.floor(end);
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
          }
        }, {
          key: "shuffle",
          value: function shuffle(arr) {
            var out = _toConsumableArray(arr);
            for (var i = 0, j; i < arr.length; ++i) {
              j = this.randInt(0, arr.length);
              var _ref2 = [out[j], out[i]];
              out[i] = _ref2[0];
              out[j] = _ref2[1];
            }
            return out;
          }
        }, {
          key: "range",
          value: function range(start) {
            var end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            var step = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
            return /* @__PURE__ */ _regenerator().m(function _callee() {
              var _ref3, i, _i;
              return _regenerator().w(function(_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (end == null) {
                      _ref3 = [0, start];
                      start = _ref3[0];
                      end = _ref3[1];
                    }
                    if (!((end - start) * step < 0)) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2);
                  case 1:
                    if (!(step >= 1)) {
                      _context.n = 5;
                      break;
                    }
                    i = start;
                  case 2:
                    if (!(i < end)) {
                      _context.n = 4;
                      break;
                    }
                    _context.n = 3;
                    return i;
                  case 3:
                    i += step;
                    _context.n = 2;
                    break;
                  case 4:
                    _context.n = 8;
                    break;
                  case 5:
                    _i = start;
                  case 6:
                    if (!(_i > end)) {
                      _context.n = 8;
                      break;
                    }
                    _context.n = 7;
                    return _i;
                  case 7:
                    _i += step;
                    _context.n = 6;
                    break;
                  case 8:
                    return _context.a(2);
                }
              }, _callee);
            })();
          }
        }, {
          key: "divSet",
          value: function divSet(start, end, divisor) {
            var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
            return /* @__PURE__ */ _regenerator().m(function _callee2() {
              var s, mod, st, n, i;
              return _regenerator().w(function(_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    s = Math.sign(end - start);
                    if (!(start === end)) {
                      _context2.n = 2;
                      break;
                    }
                    _context2.n = 1;
                    return start;
                  case 1:
                    return _context2.a(2);
                  case 2:
                    if (!(divisor === 0)) {
                      _context2.n = 3;
                      break;
                    }
                    return _context2.a(2);
                  case 3:
                    mod = function mod2(n2, m) {
                      var rem = n2 % m;
                      return n2 * m >= 0 ? rem : rem ? rem + m : 0;
                    };
                    st = Math.abs(divisor);
                    n = mod(offset, st);
                    i = start;
                    if (!(i % st !== n)) {
                      _context2.n = 4;
                      break;
                    }
                    i += s >= 0 ? st - mod(i - n, st) : -mod(i - n, st);
                    if (s >= 0 ? i <= end : i >= end) {
                      _context2.n = 4;
                      break;
                    }
                    return _context2.a(2);
                  case 4:
                    if (!(s >= 0 ? i <= end : i >= end)) {
                      _context2.n = 6;
                      break;
                    }
                    _context2.n = 5;
                    return i;
                  case 5:
                    i += s * st;
                    _context2.n = 4;
                    break;
                  case 6:
                    return _context2.a(2);
                }
              }, _callee2);
            })();
          }
        }, {
          key: "zipgen",
          value: /* @__PURE__ */ _regenerator().m(function zipgen() {
            var _len, iters, _key, iterators, results, _args3 = arguments;
            return _regenerator().w(function(_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  for (_len = _args3.length, iters = new Array(_len), _key = 0; _key < _len; _key++) {
                    iters[_key] = _args3[_key];
                  }
                  iterators = iters.map(function(it) {
                    if (_typeof(it) === "object" && it !== null && Symbol.iterator in it) {
                      return it[Symbol.iterator]();
                    }
                    return it;
                  });
                case 1:
                  if (false) {
                    _context3.n = 4;
                    break;
                  }
                  results = iterators.map(function(iter) {
                    return iter.next();
                  });
                  if (!results.some(function(res) {
                    return res.done;
                  })) {
                    _context3.n = 2;
                    break;
                  }
                  return _context3.a(2);
                case 2:
                  _context3.n = 3;
                  return results.map(function(res) {
                    return res.value;
                  });
                case 3:
                  _context3.n = 1;
                  break;
                case 4:
                  return _context3.a(2);
              }
            }, zipgen);
          })
        }, {
          key: "enumerate",
          value: /* @__PURE__ */ _regenerator().m(function enumerate(iter) {
            var i, _iterator, _step, item, _t;
            return _regenerator().w(function(_context4) {
              while (1) switch (_context4.p = _context4.n) {
                case 0:
                  i = 0;
                  _iterator = _createForOfIteratorHelper(iter);
                  _context4.p = 1;
                  _iterator.s();
                case 2:
                  if ((_step = _iterator.n()).done) {
                    _context4.n = 4;
                    break;
                  }
                  item = _step.value;
                  _context4.n = 3;
                  return [i++, item];
                case 3:
                  _context4.n = 2;
                  break;
                case 4:
                  _context4.n = 6;
                  break;
                case 5:
                  _context4.p = 5;
                  _t = _context4.v;
                  _iterator.e(_t);
                case 6:
                  _context4.p = 6;
                  _iterator.f();
                  return _context4.f(6);
                case 7:
                  return _context4.a(2);
              }
            }, enumerate, null, [[1, 5, 6, 7]]);
          })
        }, {
          key: "isBalanced",
          value: function isBalanced(text, pairs) {
            var pairMap = new Map(pairs);
            var closeSet = new Set(pairMap.values());
            var N = text.length;
            var stack = [];
            var _iterator2 = _createForOfIteratorHelper(text), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _char = _step2.value;
                if (pairMap.has(_char)) {
                  stack.push(pairMap.get(_char));
                } else if (closeSet.has(_char) && _char != stack.pop()) {
                  return false;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return !stack.length;
          }
        }, {
          key: "itemInList",
          value: function itemInList(item, list) {
            if (Array.isArray(list)) {
              var set = new Set(list);
              return set.has(item);
            } else {
              throw TypeError("item must be an array");
            }
          }
        }, {
          key: "filterDocumentByElem",
          value: function filterDocumentByElem(node, target) {
            var filter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(e) {
              return false;
            };
            if (node instanceof HTMLElement && target instanceof HTMLElement) {
              if (node.isSameNode(target)) {
                return;
              }
              if (node.contains(target)) {
                for (var _i2 = 0, _Array$from = Array.from(node.children); _i2 < _Array$from.length; _i2++) {
                  var child = _Array$from[_i2];
                  this.filterDocumentByElem(child, target, filter);
                }
              } else if (!filter(node)) {
                node.remove();
              }
            } else {
              throw TypeError("root and element must be HTMLElements");
            }
          }
        }, {
          key: "spareStyleTags",
          value: function spareStyleTags(node) {
            return this.itemInList(node.tagName.toLowerCase(), ["script", "style"]);
          }
        }, {
          key: "generateBraceSet",
          value: function generateBraceSet(text) {
            if (text.length % 2 !== 0) {
              throw RangeError("Braces must come in pairs");
            }
            var output = /* @__PURE__ */ new Map();
            if (typeof text === "string" || text instanceof String) {
              for (var i = 0; i < text.length; i += 2) {
                var idx = text.at(i);
                var val = text.at(i + 1);
                if (idx == void 0 || val == void 0) continue;
                output.set(idx, val);
              }
            } else {
              throw TypeError("Argument must be a string");
            }
            return output;
          }
        }, {
          key: "getPDFOutline",
          value: function getPDFOutline(root, tree) {
            var _children, _this = this;
            if (!(root instanceof HTMLElement)) {
              throw TypeError("expects an HTML element");
            }
            if (root == void 0) {
              root = document.querySelector("#sidebarContent #outlineView");
            }
            var payload = {
              title: null,
              subtitles: []
            };
            var children = null;
            if (tree === null) {
              var _root;
              tree = payload;
              children = (_root = root) === null || _root === void 0 ? void 0 : _root.querySelectorAll(":scope > .treeItem");
            } else {
              var _root$querySelector$t, _root2, _root3;
              var title = (_root$querySelector$t = (_root2 = root) === null || _root2 === void 0 || (_root2 = _root2.querySelector("a")) === null || _root2 === void 0 ? void 0 : _root2.textContent) !== null && _root$querySelector$t !== void 0 ? _root$querySelector$t : null;
              payload.title = title;
              tree.subtitles.push(payload);
              children = (_root3 = root) === null || _root3 === void 0 ? void 0 : _root3.querySelectorAll(":scope > .treeItems > .treeItem");
            }
            (_children = children) === null || _children === void 0 || _children.forEach(function(item) {
              _this.getPDFOutline(item, payload);
            });
            return tree;
          }
        }, {
          key: "unrollOutline",
          value: function unrollOutline(outline) {
            var output = [];
            var stack = outline.subtitles.toReversed().map(function(e) {
              return [0, e];
            });
            if (!(stack instanceof Array)) {
              throw TypeError("nodes should be an array");
            }
            while (stack.length > 0) {
              var _ref4 = stack.pop(), _ref5 = _slicedToArray(_ref4, 2), i = _ref5[0], node = _ref5[1];
              var _iterator3 = _createForOfIteratorHelper(node.subtitles.toReversed()), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  var child = _step3.value;
                  stack.push([i + 1, child]);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              output.push([i, node.title]);
            }
            return output.map(function(_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2), i2 = _ref7[0], e = _ref7[1];
              return "  ".repeat(i2) + "- " + e;
            }).join("\n");
          }
        }]);
      })();
      var utilName = "utils";
      var index = 0;
      while (utilName in window) {
        if (index > 1e3) {
          throw new Error("Too many attempts to find a utils name.");
        }
        console.warn("".concat(utilName, " was taken."));
        utilName = "utils".concat(index++);
      }
      window[utilName] = new Utils();
    }
  });
  require_index();
})();
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
