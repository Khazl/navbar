(function(t, e) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = e(require("vue"), require("vue-router"));
  else if ("function" === typeof define && define.amd)
    define(["vue", "vue-router"], e);
  else {
    var n =
      "object" === typeof exports
        ? e(require("vue"), require("vue-router"))
        : e(t["vue"], t["vue-router"]);
    for (var r in n) ("object" === typeof exports ? exports : t)[r] = n[r];
  }
})(window, function(t, e) {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/"),
      n((n.s = 0))
    );
  })({
    0: function(t, e, n) {
      t.exports = n("56d7");
    },
    "00ee": function(t, e, n) {
      var r = n("b622"),
        o = r("toStringTag"),
        i = {};
      (i[o] = "z"), (t.exports = "[object z]" === String(i));
    },
    "0366": function(t, e, n) {
      var r = n("1c0b");
      t.exports = function(t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function() {
              return t.call(e);
            };
          case 1:
            return function(n) {
              return t.call(e, n);
            };
          case 2:
            return function(n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function(n, r, o) {
              return t.call(e, n, r, o);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    "06cf": function(t, e, n) {
      var r = n("83ab"),
        o = n("d1e7"),
        i = n("5c6c"),
        c = n("fc6a"),
        a = n("c04e"),
        u = n("5135"),
        s = n("0cfb"),
        f = Object.getOwnPropertyDescriptor;
      e.f = r
        ? f
        : function(t, e) {
            if (((t = c(t)), (e = a(e, !0)), s))
              try {
                return f(t, e);
              } catch (n) {}
            if (u(t, e)) return i(!o.f.call(t, e), t[e]);
          };
    },
    "0cfb": function(t, e, n) {
      var r = n("83ab"),
        o = n("d039"),
        i = n("cc12");
      t.exports =
        !r &&
        !o(function() {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    "19aa": function(t, e) {
      t.exports = function(t, e, n) {
        if (!(t instanceof e))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t;
      };
    },
    "1be4": function(t, e, n) {
      var r = n("d066");
      t.exports = r("document", "documentElement");
    },
    "1c0b": function(t, e) {
      t.exports = function(t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    "1c7e": function(t, e, n) {
      var r = n("b622"),
        o = r("iterator"),
        i = !1;
      try {
        var c = 0,
          a = {
            next: function() {
              return { done: !!c++ };
            },
            return: function() {
              i = !0;
            }
          };
        (a[o] = function() {
          return this;
        }),
          Array.from(a, function() {
            throw 2;
          });
      } catch (u) {}
      t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
          var r = {};
          (r[o] = function() {
            return {
              next: function() {
                return { done: (n = !0) };
              }
            };
          }),
            t(r);
        } catch (u) {}
        return n;
      };
    },
    "1cdc": function(t, e, n) {
      var r = n("342f");
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    "1d80": function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    2266: function(t, e, n) {
      var r = n("825a"),
        o = n("e95a"),
        i = n("50c4"),
        c = n("0366"),
        a = n("35a1"),
        u = n("9bdd"),
        s = function(t, e) {
          (this.stopped = t), (this.result = e);
        },
        f = (t.exports = function(t, e, n, f, l) {
          var p,
            d,
            v,
            h,
            b,
            y,
            m,
            g = c(e, n, f ? 2 : 1);
          if (l) p = t;
          else {
            if (((d = a(t)), "function" != typeof d))
              throw TypeError("Target is not iterable");
            if (o(d)) {
              for (v = 0, h = i(t.length); h > v; v++)
                if (
                  ((b = f ? g(r((m = t[v]))[0], m[1]) : g(t[v])),
                  b && b instanceof s)
                )
                  return b;
              return new s(!1);
            }
            p = d.call(t);
          }
          y = p.next;
          while (!(m = y.call(p)).done)
            if (
              ((b = u(p, g, m.value, f)),
              "object" == typeof b && b && b instanceof s)
            )
              return b;
          return new s(!1);
        });
      f.stop = function(t) {
        return new s(!0, t);
      };
    },
    "23cb": function(t, e, n) {
      var r = n("a691"),
        o = Math.max,
        i = Math.min;
      t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e);
      };
    },
    "23e7": function(t, e, n) {
      var r = n("da84"),
        o = n("06cf").f,
        i = n("9112"),
        c = n("6eeb"),
        a = n("ce4e"),
        u = n("e893"),
        s = n("94ca");
      t.exports = function(t, e) {
        var n,
          f,
          l,
          p,
          d,
          v,
          h = t.target,
          b = t.global,
          y = t.stat;
        if (((f = b ? r : y ? r[h] || a(h, {}) : (r[h] || {}).prototype), f))
          for (l in e) {
            if (
              ((d = e[l]),
              t.noTargetGet ? ((v = o(f, l)), (p = v && v.value)) : (p = f[l]),
              (n = s(b ? l : h + (y ? "." : "#") + l, t.forced)),
              !n && void 0 !== p)
            ) {
              if (typeof d === typeof p) continue;
              u(d, p);
            }
            (t.sham || (p && p.sham)) && i(d, "sham", !0), c(f, l, d, t);
          }
      };
    },
    "241c": function(t, e, n) {
      var r = n("ca84"),
        o = n("7839"),
        i = o.concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, i);
        };
    },
    "24fb": function(t, e, n) {
      "use strict";
      function r(t, e) {
        var n = t[1] || "",
          r = t[3];
        if (!r) return n;
        if (e && "function" === typeof btoa) {
          var i = o(r),
            c = r.sources.map(function(t) {
              return "/*# sourceURL="
                .concat(r.sourceRoot || "")
                .concat(t, " */");
            });
          return [n]
            .concat(c)
            .concat([i])
            .join("\n");
        }
        return [n].join("\n");
      }
      function o(t) {
        var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
          n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
            e
          );
        return "/*# ".concat(n, " */");
      }
      t.exports = function(t) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = r(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (e.i = function(t, n, r) {
            "string" === typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var c = this[i][0];
                null != c && (o[c] = !0);
              }
            for (var a = 0; a < t.length; a++) {
              var u = [].concat(t[a]);
              (r && o[u[0]]) ||
                (n &&
                  (u[2]
                    ? (u[2] = "".concat(n, " and ").concat(u[2]))
                    : (u[2] = n)),
                e.push(u));
            }
          }),
          e
        );
      };
    },
    2626: function(t, e, n) {
      "use strict";
      var r = n("d066"),
        o = n("9bf2"),
        i = n("b622"),
        c = n("83ab"),
        a = i("species");
      t.exports = function(t) {
        var e = r(t),
          n = o.f;
        c &&
          e &&
          !e[a] &&
          n(e, a, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    "2cf4": function(t, e, n) {
      var r,
        o,
        i,
        c = n("da84"),
        a = n("d039"),
        u = n("c6b6"),
        s = n("0366"),
        f = n("1be4"),
        l = n("cc12"),
        p = n("1cdc"),
        d = c.location,
        v = c.setImmediate,
        h = c.clearImmediate,
        b = c.process,
        y = c.MessageChannel,
        m = c.Dispatch,
        g = 0,
        x = {},
        w = "onreadystatechange",
        j = function(t) {
          if (x.hasOwnProperty(t)) {
            var e = x[t];
            delete x[t], e();
          }
        },
        O = function(t) {
          return function() {
            j(t);
          };
        },
        S = function(t) {
          j(t.data);
        },
        E = function(t) {
          c.postMessage(t + "", d.protocol + "//" + d.host);
        };
      (v && h) ||
        ((v = function(t) {
          var e = [],
            n = 1;
          while (arguments.length > n) e.push(arguments[n++]);
          return (
            (x[++g] = function() {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            r(g),
            g
          );
        }),
        (h = function(t) {
          delete x[t];
        }),
        "process" == u(b)
          ? (r = function(t) {
              b.nextTick(O(t));
            })
          : m && m.now
          ? (r = function(t) {
              m.now(O(t));
            })
          : y && !p
          ? ((o = new y()),
            (i = o.port2),
            (o.port1.onmessage = S),
            (r = s(i.postMessage, i, 1)))
          : !c.addEventListener ||
            "function" != typeof postMessage ||
            c.importScripts ||
            a(E) ||
            "file:" === d.protocol
          ? (r =
              w in l("script")
                ? function(t) {
                    f.appendChild(l("script"))[w] = function() {
                      f.removeChild(this), j(t);
                    };
                  }
                : function(t) {
                    setTimeout(O(t), 0);
                  })
          : ((r = E), c.addEventListener("message", S, !1))),
        (t.exports = { set: v, clear: h });
    },
    "2d00": function(t, e, n) {
      var r,
        o,
        i = n("da84"),
        c = n("342f"),
        a = i.process,
        u = a && a.versions,
        s = u && u.v8;
      s
        ? ((r = s.split(".")), (o = r[0] + r[1]))
        : c &&
          ((r = c.match(/Edge\/(\d+)/)),
          (!r || r[1] >= 74) &&
            ((r = c.match(/Chrome\/(\d+)/)), r && (o = r[1]))),
        (t.exports = o && +o);
    },
    "33e3": function(t, e, n) {
      (function(e) {
        !(function(e, n) {
          t.exports = n();
        })(0, function() {
          "use strict";
          function t(e) {
            return (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(e);
          }
          function n(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (t[e] = n),
              t
            );
          }
          function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              e &&
                (r = r.filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function o(t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? r(Object(o), !0).forEach(function(e) {
                    n(t, e, o[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(o)
                  )
                : r(Object(o)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(o, e)
                    );
                  });
            }
            return t;
          }
          var i =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof e
              ? e
              : "undefined" != typeof self
              ? self
              : {};
          !(function(t, e) {
            t((e = { exports: {} }), e.exports);
          })(function(t, e) {
            var n;
            (n = i),
              (t.exports = (function(t) {
                if (t.CSS && t.CSS.escape) return t.CSS.escape;
                var e = function(t) {
                  if (0 == arguments.length)
                    throw new TypeError("`CSS.escape` requires an argument.");
                  for (
                    var e,
                      n = String(t),
                      r = n.length,
                      o = -1,
                      i = "",
                      c = n.charCodeAt(0);
                    ++o < r;

                  )
                    0 != (e = n.charCodeAt(o))
                      ? (i +=
                          (e >= 1 && e <= 31) ||
                          127 == e ||
                          (0 == o && e >= 48 && e <= 57) ||
                          (1 == o && e >= 48 && e <= 57 && 45 == c)
                            ? "\\" + e.toString(16) + " "
                            : (0 == o && 1 == r && 45 == e) ||
                              !(
                                e >= 128 ||
                                45 == e ||
                                95 == e ||
                                (e >= 48 && e <= 57) ||
                                (e >= 65 && e <= 90) ||
                                (e >= 97 && e <= 122)
                              )
                            ? "\\" + n.charAt(o)
                            : n.charAt(o))
                      : (i += "�");
                  return i;
                };
                return t.CSS || (t.CSS = {}), (t.CSS.escape = e), e;
              })(n));
          });
          var c = { Vue: null, appOptions: null, template: null };
          function a(t) {
            return t.loadRootComponent
              ? t.loadRootComponent().then(function(e) {
                  return (t.rootComponent = e);
                })
              : Promise.resolve();
          }
          function u(t, e, n) {
            var r = {};
            return Promise.resolve().then(function() {
              var i,
                c = o({}, t.appOptions);
              if ((n.domElement && !c.el && (c.el = n.domElement), c.el))
                if ("string" == typeof c.el) {
                  if (!(i = document.querySelector(c.el)))
                    throw Error(
                      "If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(
                        c.el
                      )
                    );
                } else
                  (i = c.el).id ||
                    (i.id = "single-spa-application:".concat(n.name)),
                    (c.el = "#".concat(CSS.escape(i.id)));
              else {
                var a = "single-spa-application:".concat(n.name);
                (c.el = "#".concat(CSS.escape(a))),
                  (i = document.getElementById(a)) ||
                    (((i = document.createElement("div")).id = a),
                    document.body.appendChild(i));
              }
              if (
                ((c.el = c.el + " .single-spa-container"),
                !i.querySelector(".single-spa-container"))
              ) {
                var u = document.createElement("div");
                (u.className = "single-spa-container"), i.appendChild(u);
              }
              return (
                (r.domEl = i),
                c.render ||
                  c.template ||
                  !t.rootComponent ||
                  (c.render = function(e) {
                    return e(t.rootComponent);
                  }),
                c.data || (c.data = {}),
                (c.data = o({}, c.data, {}, n)),
                (r.vueInstance = new t.Vue(c)),
                r.vueInstance.bind &&
                  (r.vueInstance = r.vueInstance.bind(r.vueInstance)),
                (e[n.name] = r),
                r.vueInstance
              );
            });
          }
          function s(t, e, n) {
            return Promise.resolve().then(function() {
              var r = e[n.name],
                i = o({}, t.appOptions.data || {}, {}, n);
              for (var c in i) r.vueInstance[c] = i[c];
            });
          }
          function f(t, e, n) {
            return Promise.resolve().then(function() {
              var t = e[n.name];
              t.vueInstance.$destroy(),
                (t.vueInstance.$el.innerHTML = ""),
                delete t.vueInstance,
                t.domEl && ((t.domEl.innerHTML = ""), delete t.domEl);
            });
          }
          return function(e) {
            if ("object" !== t(e))
              throw new Error("single-spa-vue requires a configuration object");
            var n = o({}, c, {}, e);
            if (!n.Vue) throw Error("single-spa-vue must be passed opts.Vue");
            if (!n.appOptions)
              throw Error("single-spa-vue must be passed opts.appOptions");
            if (
              n.appOptions.el &&
              "string" != typeof n.appOptions.el &&
              !(n.appOptions.el instanceof HTMLElement)
            )
              throw Error(
                "single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(
                  t(n.appOptions.el)
                )
              );
            var r = {};
            return {
              bootstrap: a.bind(null, n, r),
              mount: u.bind(null, n, r),
              unmount: f.bind(null, n, r),
              update: s.bind(null, n, r)
            };
          };
        });
      }.call(this, n("c8ba")));
    },
    "342f": function(t, e, n) {
      var r = n("d066");
      t.exports = r("navigator", "userAgent") || "";
    },
    "35a1": function(t, e, n) {
      var r = n("f5df"),
        o = n("3f8c"),
        i = n("b622"),
        c = i("iterator");
      t.exports = function(t) {
        if (void 0 != t) return t[c] || t["@@iterator"] || o[r(t)];
      };
    },
    "37e8": function(t, e, n) {
      var r = n("83ab"),
        o = n("9bf2"),
        i = n("825a"),
        c = n("df75");
      t.exports = r
        ? Object.defineProperties
        : function(t, e) {
            i(t);
            var n,
              r = c(e),
              a = r.length,
              u = 0;
            while (a > u) o.f(t, (n = r[u++]), e[n]);
            return t;
          };
    },
    "3bbe": function(t, e, n) {
      var r = n("861d");
      t.exports = function(t) {
        if (!r(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    "3f8c": function(t, e) {
      t.exports = {};
    },
    "428f": function(t, e, n) {
      var r = n("da84");
      t.exports = r;
    },
    "44ad": function(t, e, n) {
      var r = n("d039"),
        o = n("c6b6"),
        i = "".split;
      t.exports = r(function() {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t);
          }
        : Object;
    },
    "44d2": function(t, e, n) {
      var r = n("b622"),
        o = n("7c73"),
        i = n("9bf2"),
        c = r("unscopables"),
        a = Array.prototype;
      void 0 == a[c] && i.f(a, c, { configurable: !0, value: o(null) }),
        (t.exports = function(t) {
          a[c][t] = !0;
        });
    },
    "44de": function(t, e, n) {
      var r = n("da84");
      t.exports = function(t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
      };
    },
    4840: function(t, e, n) {
      var r = n("825a"),
        o = n("1c0b"),
        i = n("b622"),
        c = i("species");
      t.exports = function(t, e) {
        var n,
          i = r(t).constructor;
        return void 0 === i || void 0 == (n = r(i)[c]) ? e : o(n);
      };
    },
    4930: function(t, e, n) {
      var r = n("d039");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function() {
          return !String(Symbol());
        });
    },
    "499e": function(t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var i = e[o],
            c = i[0],
            a = i[1],
            u = i[2],
            s = i[3],
            f = { id: t + ":" + o, css: a, media: u, sourceMap: s };
          r[c] ? r[c].parts.push(f) : n.push((r[c] = { id: c, parts: [f] }));
        }
        return n;
      }
      n.r(e),
        n.d(e, "default", function() {
          return v;
        });
      var o = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var i = {},
        c = o && (document.head || document.getElementsByTagName("head")[0]),
        a = null,
        u = 0,
        s = !1,
        f = function() {},
        l = null,
        p = "data-vue-ssr-id",
        d =
          "undefined" !== typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function v(t, e, n, o) {
        (s = n), (l = o || {});
        var c = r(t, e);
        return (
          h(c),
          function(e) {
            for (var n = [], o = 0; o < c.length; o++) {
              var a = c[o],
                u = i[a.id];
              u.refs--, n.push(u);
            }
            e ? ((c = r(t, e)), h(c)) : (c = []);
            for (o = 0; o < n.length; o++) {
              u = n[o];
              if (0 === u.refs) {
                for (var s = 0; s < u.parts.length; s++) u.parts[s]();
                delete i[u.id];
              }
            }
          }
        );
      }
      function h(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
            r = i[n.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
            for (; o < n.parts.length; o++) r.parts.push(y(n.parts[o]));
            r.parts.length > n.parts.length &&
              (r.parts.length = n.parts.length);
          } else {
            var c = [];
            for (o = 0; o < n.parts.length; o++) c.push(y(n.parts[o]));
            i[n.id] = { id: n.id, refs: 1, parts: c };
          }
        }
      }
      function b() {
        var t = document.createElement("style");
        return (t.type = "text/css"), c.appendChild(t), t;
      }
      function y(t) {
        var e,
          n,
          r = document.querySelector("style[" + p + '~="' + t.id + '"]');
        if (r) {
          if (s) return f;
          r.parentNode.removeChild(r);
        }
        if (d) {
          var o = u++;
          (r = a || (a = b())),
            (e = g.bind(null, r, o, !1)),
            (n = g.bind(null, r, o, !0));
        } else
          (r = b()),
            (e = x.bind(null, r)),
            (n = function() {
              r.parentNode.removeChild(r);
            });
        return (
          e(t),
          function(r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else n();
          }
        );
      }
      var m = (function() {
        var t = [];
        return function(e, n) {
          return (t[e] = n), t.filter(Boolean).join("\n");
        };
      })();
      function g(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = m(e, o);
        else {
          var i = document.createTextNode(o),
            c = t.childNodes;
          c[e] && t.removeChild(c[e]),
            c.length ? t.insertBefore(i, c[e]) : t.appendChild(i);
        }
      }
      function x(t, e) {
        var n = e.css,
          r = e.media,
          o = e.sourceMap;
        if (
          (r && t.setAttribute("media", r),
          l.ssrId && t.setAttribute(p, e.id),
          o &&
            ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = n;
        else {
          while (t.firstChild) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
    },
    "4d64": function(t, e, n) {
      var r = n("fc6a"),
        o = n("50c4"),
        i = n("23cb"),
        c = function(t) {
          return function(e, n, c) {
            var a,
              u = r(e),
              s = o(u.length),
              f = i(c, s);
            if (t && n != n) {
              while (s > f) if (((a = u[f++]), a != a)) return !0;
            } else
              for (; s > f; f++)
                if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: c(!0), indexOf: c(!1) };
    },
    "50c4": function(t, e, n) {
      var r = n("a691"),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    5135: function(t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function(t, e) {
        return n.call(t, e);
      };
    },
    5692: function(t, e, n) {
      var r = n("c430"),
        o = n("c6cd");
      (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      });
    },
    "56d7": function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "bootstrap", function() {
          return w;
        }),
        n.d(e, "mount", function() {
          return j;
        }),
        n.d(e, "unmount", function() {
          return O;
        });
      n("e260"), n("e6cf"), n("cca6"), n("a79d");
      function r(t, e) {
        if ((e || (e = 1), "string" !== typeof t || 0 === t.trim().length))
          throw Error(
            "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
          );
        if ("number" !== typeof e || e <= 0 || !Number.isInteger(e))
          throw Error(
            "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
          );
        let r;
        try {
          if (((r = window.System.resolve(t)), !r)) throw Error();
        } catch (i) {
          throw Error(
            "systemjs-webpack-interop: There is no such module '" +
              t +
              "' in the SystemJS registry. Did you misspell the name of your module?"
          );
        }
        n.p = o(r, e);
      }
      function o(t, e) {
        const n = new URL(t),
          r = new URL(t).pathname;
        let o = 0,
          i = r.length;
        while (o !== e && i >= 0) {
          const t = r[--i];
          "/" === t && o++;
        }
        if (o !== e)
          throw Error(
            "systemjs-webpack-interop: rootDirectoryLevel (" +
              e +
              ") is greater than the number of directories (" +
              o +
              ") in the URL path " +
              fullUrl
          );
        return (n.pathname = n.pathname.slice(0, i + 1)), n.href;
      }
      r("@vue-mf/navbar");
      var i = n("8bbf"),
        c = n.n(i),
        a = n("33e3"),
        u = n.n(a),
        s = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n("nav", { staticClass: "navbar-links" }, [
                n("div", [
                  t._m(0),
                  n("ul", [
                    n(
                      "li",
                      [
                        n(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              to: "/view-doggos",
                              "active-class": "active-nav-link"
                            }
                          },
                          [t._v("View your doggos")]
                        )
                      ],
                      1
                    )
                  ]),
                  n("ul", [
                    n(
                      "li",
                      [
                        n(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              to: "/rate-doggos",
                              "active-class": "active-nav-link"
                            }
                          },
                          [t._v("Rate some doggos")]
                        )
                      ],
                      1
                    )
                  ]),
                  t._m(1)
                ]),
                t._m(2)
              ]),
              n("router-view")
            ],
            1
          );
        },
        f = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("ul", [
              n("li", [
                n(
                  "a",
                  {
                    staticClass: "nav-link logo-link",
                    attrs: {
                      href: "https://github.com/vue-microfrontends/root-config"
                    }
                  },
                  [
                    n("div", { staticClass: "logo-row" }, [
                      n("img", {
                        staticClass: "logo",
                        attrs: {
                          alt: "Cute puppy",
                          src:
                            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages1.fanpop.com%2Fimages%2Fphotos%2F1900000%2FPuppy-3-dogs-1993798-1024-768.jpg&f=1&nofb=1"
                        }
                      }),
                      n("div", { staticClass: "product-name" }, [
                        t._v("Microfrontends")
                      ])
                    ])
                  ]
                )
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("ul", [
              n("li", [
                n("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  t._v(" Test ")
                ])
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n("ul", [
                n("li", [
                  n(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        href:
                          "https://github.com/vue-microfrontends/root-config"
                      }
                    },
                    [t._v("Code / Documentation")]
                  )
                ])
              ])
            ]);
          }
        ];
      n("a69c");
      function l(t, e, n, r, o, i, c, a) {
        var u,
          s = "function" === typeof t ? t.options : t;
        if (
          (e && ((s.render = e), (s.staticRenderFns = n), (s._compiled = !0)),
          r && (s.functional = !0),
          i && (s._scopeId = "data-v-" + i),
          c
            ? ((u = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  t ||
                    "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(c);
              }),
              (s._ssrRegister = u))
            : o &&
              (u = a
                ? function() {
                    o.call(
                      this,
                      (s.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : o),
          u)
        )
          if (s.functional) {
            s._injectStyles = u;
            var f = s.render;
            s.render = function(t, e) {
              return u.call(e), f(t, e);
            };
          } else {
            var l = s.beforeCreate;
            s.beforeCreate = l ? [].concat(l, u) : [u];
          }
        return { exports: t, options: s };
      }
      var p = {},
        d = l(p, s, f, !1, null, "20e19cb6", null),
        v = d.exports,
        h = n("6389"),
        b = n.n(h);
      c.a.use(b.a);
      var y = [{ path: "/", exact: !0, redirect: "/rate-doggos" }],
        m = new b.a({ mode: "history", base: "/", routes: y }),
        g = m;
      c.a.config.productionTip = !1;
      var x = u()({
          Vue: c.a,
          appOptions: {
            render: function(t) {
              return t(v);
            },
            router: g
          }
        }),
        w = x.bootstrap,
        j = x.mount,
        O = x.unmount;
    },
    "56ef": function(t, e, n) {
      var r = n("d066"),
        o = n("241c"),
        i = n("7418"),
        c = n("825a");
      t.exports =
        r("Reflect", "ownKeys") ||
        function(t) {
          var e = o.f(c(t)),
            n = i.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    5725: function(t, e, n) {
      var r = n("24fb");
      (e = r(!1)),
        e.push([
          t.i,
          "nav[data-v-20e19cb6]{position:fixed;left:0;top:0;height:100vh;width:var(--navbar-width);background-color:#fff;-webkit-transition:left .2s ease-in-out;transition:left .2s ease-in-out;-webkit-box-shadow:.2rem 0 .2rem var(--light-gray);box-shadow:.2rem 0 .2rem var(--light-gray);z-index:1000}.navbar-links[data-v-20e19cb6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%}.logo-row[data-v-20e19cb6],.navbar-links[data-v-20e19cb6]{display:-webkit-box;display:-ms-flexbox;display:flex}.logo-row[data-v-20e19cb6]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:700;font-size:1.8rem}.logo[data-v-20e19cb6]{height:4rem}.product-name[data-v-20e19cb6]{padding-left:.6rem}.logo-link.nav-link[data-v-20e19cb6],.logo-link:focus.nav-link[data-v-20e19cb6]:focus{height:4rem}.nav-link[data-v-20e19cb6]:hover{background-color:#dfdfdf}ul[data-v-20e19cb6]{margin:0;padding:0;list-style-type:none}li[data-v-20e19cb6]{list-style:none}.nav-link[data-v-20e19cb6],.nav-link[data-v-20e19cb6]:focus,.nav-link[data-v-20e19cb6]:visited{text-decoration:none;color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:5.6rem;padding:.8rem 1.6rem}.nav-link>div[data-v-20e19cb6]{text-overflow:ellipsis;white-space:nowrap;width:100%;overflow:hidden}.active-nav-link[data-v-20e19cb6]{background-color:#f3f3f3}",
          ""
        ]),
        (t.exports = e);
    },
    "5c6c": function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    },
    "60da": function(t, e, n) {
      "use strict";
      var r = n("83ab"),
        o = n("d039"),
        i = n("df75"),
        c = n("7418"),
        a = n("d1e7"),
        u = n("7b0b"),
        s = n("44ad"),
        f = Object.assign,
        l = Object.defineProperty;
      t.exports =
        !f ||
        o(function() {
          if (
            r &&
            1 !==
              f(
                { b: 1 },
                f(
                  l({}, "a", {
                    enumerable: !0,
                    get: function() {
                      l(this, "b", { value: 3, enumerable: !1 });
                    }
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var t = {},
            e = {},
            n = Symbol(),
            o = "abcdefghijklmnopqrst";
          return (
            (t[n] = 7),
            o.split("").forEach(function(t) {
              e[t] = t;
            }),
            7 != f({}, t)[n] || i(f({}, e)).join("") != o
          );
        })
          ? function(t, e) {
              var n = u(t),
                o = arguments.length,
                f = 1,
                l = c.f,
                p = a.f;
              while (o > f) {
                var d,
                  v = s(arguments[f++]),
                  h = l ? i(v).concat(l(v)) : i(v),
                  b = h.length,
                  y = 0;
                while (b > y)
                  (d = h[y++]), (r && !p.call(v, d)) || (n[d] = v[d]);
              }
              return n;
            }
          : f;
    },
    6389: function(t, n) {
      t.exports = e;
    },
    "69f3": function(t, e, n) {
      var r,
        o,
        i,
        c = n("7f9a"),
        a = n("da84"),
        u = n("861d"),
        s = n("9112"),
        f = n("5135"),
        l = n("f772"),
        p = n("d012"),
        d = a.WeakMap,
        v = function(t) {
          return i(t) ? o(t) : r(t, {});
        },
        h = function(t) {
          return function(e) {
            var n;
            if (!u(e) || (n = o(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        };
      if (c) {
        var b = new d(),
          y = b.get,
          m = b.has,
          g = b.set;
        (r = function(t, e) {
          return g.call(b, t, e), e;
        }),
          (o = function(t) {
            return y.call(b, t) || {};
          }),
          (i = function(t) {
            return m.call(b, t);
          });
      } else {
        var x = l("state");
        (p[x] = !0),
          (r = function(t, e) {
            return s(t, x, e), e;
          }),
          (o = function(t) {
            return f(t, x) ? t[x] : {};
          }),
          (i = function(t) {
            return f(t, x);
          });
      }
      t.exports = { set: r, get: o, has: i, enforce: v, getterFor: h };
    },
    "6eeb": function(t, e, n) {
      var r = n("da84"),
        o = n("9112"),
        i = n("5135"),
        c = n("ce4e"),
        a = n("8925"),
        u = n("69f3"),
        s = u.get,
        f = u.enforce,
        l = String(String).split("String");
      (t.exports = function(t, e, n, a) {
        var u = !!a && !!a.unsafe,
          s = !!a && !!a.enumerable,
          p = !!a && !!a.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || i(n, "name") || o(n, "name", e),
          (f(n).source = l.join("string" == typeof e ? e : ""))),
          t !== r
            ? (u ? !p && t[e] && (s = !0) : delete t[e],
              s ? (t[e] = n) : o(t, e, n))
            : s
            ? (t[e] = n)
            : c(e, n);
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && s(this).source) || a(this);
      });
    },
    7418: function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    7839: function(t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    },
    "7b0b": function(t, e, n) {
      var r = n("1d80");
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    "7c73": function(t, e, n) {
      var r,
        o = n("825a"),
        i = n("37e8"),
        c = n("7839"),
        a = n("d012"),
        u = n("1be4"),
        s = n("cc12"),
        f = n("f772"),
        l = ">",
        p = "<",
        d = "prototype",
        v = "script",
        h = f("IE_PROTO"),
        b = function() {},
        y = function(t) {
          return p + v + l + t + p + "/" + v + l;
        },
        m = function(t) {
          t.write(y("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        g = function() {
          var t,
            e = s("iframe"),
            n = "java" + v + ":";
          return (
            (e.style.display = "none"),
            u.appendChild(e),
            (e.src = String(n)),
            (t = e.contentWindow.document),
            t.open(),
            t.write(y("document.F=Object")),
            t.close(),
            t.F
          );
        },
        x = function() {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (e) {}
          x = r ? m(r) : g();
          var t = c.length;
          while (t--) delete x[d][c[t]];
          return x();
        };
      (a[h] = !0),
        (t.exports =
          Object.create ||
          function(t, e) {
            var n;
            return (
              null !== t
                ? ((b[d] = o(t)), (n = new b()), (b[d] = null), (n[h] = t))
                : (n = x()),
              void 0 === e ? n : i(n, e)
            );
          });
    },
    "7dd0": function(t, e, n) {
      "use strict";
      var r = n("23e7"),
        o = n("9ed3"),
        i = n("e163"),
        c = n("d2bb"),
        a = n("d44e"),
        u = n("9112"),
        s = n("6eeb"),
        f = n("b622"),
        l = n("c430"),
        p = n("3f8c"),
        d = n("ae93"),
        v = d.IteratorPrototype,
        h = d.BUGGY_SAFARI_ITERATORS,
        b = f("iterator"),
        y = "keys",
        m = "values",
        g = "entries",
        x = function() {
          return this;
        };
      t.exports = function(t, e, n, f, d, w, j) {
        o(n, e, f);
        var O,
          S,
          E,
          k = function(t) {
            if (t === d && I) return I;
            if (!h && t in C) return C[t];
            switch (t) {
              case y:
                return function() {
                  return new n(this, t);
                };
              case m:
                return function() {
                  return new n(this, t);
                };
              case g:
                return function() {
                  return new n(this, t);
                };
            }
            return function() {
              return new n(this);
            };
          },
          _ = e + " Iterator",
          P = !1,
          C = t.prototype,
          T = C[b] || C["@@iterator"] || (d && C[d]),
          I = (!h && T) || k(d),
          M = ("Array" == e && C.entries) || T;
        if (
          (M &&
            ((O = i(M.call(new t()))),
            v !== Object.prototype &&
              O.next &&
              (l ||
                i(O) === v ||
                (c ? c(O, v) : "function" != typeof O[b] && u(O, b, x)),
              a(O, _, !0, !0),
              l && (p[_] = x))),
          d == m &&
            T &&
            T.name !== m &&
            ((P = !0),
            (I = function() {
              return T.call(this);
            })),
          (l && !j) || C[b] === I || u(C, b, I),
          (p[e] = I),
          d)
        )
          if (((S = { values: k(m), keys: w ? I : k(y), entries: k(g) }), j))
            for (E in S) (h || P || !(E in C)) && s(C, E, S[E]);
          else r({ target: e, proto: !0, forced: h || P }, S);
        return S;
      };
    },
    "7f9a": function(t, e, n) {
      var r = n("da84"),
        o = n("8925"),
        i = r.WeakMap;
      t.exports = "function" === typeof i && /native code/.test(o(i));
    },
    "825a": function(t, e, n) {
      var r = n("861d");
      t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    "83ab": function(t, e, n) {
      var r = n("d039");
      t.exports = !r(function() {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function() {
              return 7;
            }
          })[1]
        );
      });
    },
    "861d": function(t, e) {
      t.exports = function(t) {
        return "object" === typeof t ? null !== t : "function" === typeof t;
      };
    },
    8925: function(t, e, n) {
      var r = n("c6cd"),
        o = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function(t) {
          return o.call(t);
        }),
        (t.exports = r.inspectSource);
    },
    "8bbf": function(e, n) {
      e.exports = t;
    },
    "90e3": function(t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function(t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    9112: function(t, e, n) {
      var r = n("83ab"),
        o = n("9bf2"),
        i = n("5c6c");
      t.exports = r
        ? function(t, e, n) {
            return o.f(t, e, i(1, n));
          }
        : function(t, e, n) {
            return (t[e] = n), t;
          };
    },
    "94ca": function(t, e, n) {
      var r = n("d039"),
        o = /#|\.prototype\./,
        i = function(t, e) {
          var n = a[c(t)];
          return n == s || (n != u && ("function" == typeof e ? r(e) : !!e));
        },
        c = (i.normalize = function(t) {
          return String(t)
            .replace(o, ".")
            .toLowerCase();
        }),
        a = (i.data = {}),
        u = (i.NATIVE = "N"),
        s = (i.POLYFILL = "P");
      t.exports = i;
    },
    "9bdd": function(t, e, n) {
      var r = n("825a");
      t.exports = function(t, e, n, o) {
        try {
          return o ? e(r(n)[0], n[1]) : e(n);
        } catch (c) {
          var i = t["return"];
          throw (void 0 !== i && r(i.call(t)), c);
        }
      };
    },
    "9bf2": function(t, e, n) {
      var r = n("83ab"),
        o = n("0cfb"),
        i = n("825a"),
        c = n("c04e"),
        a = Object.defineProperty;
      e.f = r
        ? a
        : function(t, e, n) {
            if ((i(t), (e = c(e, !0)), i(n), o))
              try {
                return a(t, e, n);
              } catch (r) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    "9ed3": function(t, e, n) {
      "use strict";
      var r = n("ae93").IteratorPrototype,
        o = n("7c73"),
        i = n("5c6c"),
        c = n("d44e"),
        a = n("3f8c"),
        u = function() {
          return this;
        };
      t.exports = function(t, e, n) {
        var s = e + " Iterator";
        return (
          (t.prototype = o(r, { next: i(1, n) })),
          c(t, s, !1, !0),
          (a[s] = u),
          t
        );
      };
    },
    a1a8: function(t, e, n) {
      var r = n("5725");
      "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var o = n("499e").default;
      o("6f00aea8", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a691: function(t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    a69c: function(t, e, n) {
      "use strict";
      var r = n("a1a8"),
        o = n.n(r);
      o.a;
    },
    a79d: function(t, e, n) {
      "use strict";
      var r = n("23e7"),
        o = n("c430"),
        i = n("fea9"),
        c = n("d039"),
        a = n("d066"),
        u = n("4840"),
        s = n("cdf9"),
        f = n("6eeb"),
        l =
          !!i &&
          c(function() {
            i.prototype["finally"].call({ then: function() {} }, function() {});
          });
      r(
        { target: "Promise", proto: !0, real: !0, forced: l },
        {
          finally: function(t) {
            var e = u(this, a("Promise")),
              n = "function" == typeof t;
            return this.then(
              n
                ? function(n) {
                    return s(e, t()).then(function() {
                      return n;
                    });
                  }
                : t,
              n
                ? function(n) {
                    return s(e, t()).then(function() {
                      throw n;
                    });
                  }
                : t
            );
          }
        }
      ),
        o ||
          "function" != typeof i ||
          i.prototype["finally"] ||
          f(i.prototype, "finally", a("Promise").prototype["finally"]);
    },
    ae93: function(t, e, n) {
      "use strict";
      var r,
        o,
        i,
        c = n("e163"),
        a = n("9112"),
        u = n("5135"),
        s = n("b622"),
        f = n("c430"),
        l = s("iterator"),
        p = !1,
        d = function() {
          return this;
        };
      [].keys &&
        ((i = [].keys()),
        "next" in i
          ? ((o = c(c(i))), o !== Object.prototype && (r = o))
          : (p = !0)),
        void 0 == r && (r = {}),
        f || u(r, l) || a(r, l, d),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
    },
    b575: function(t, e, n) {
      var r,
        o,
        i,
        c,
        a,
        u,
        s,
        f,
        l = n("da84"),
        p = n("06cf").f,
        d = n("c6b6"),
        v = n("2cf4").set,
        h = n("1cdc"),
        b = l.MutationObserver || l.WebKitMutationObserver,
        y = l.process,
        m = l.Promise,
        g = "process" == d(y),
        x = p(l, "queueMicrotask"),
        w = x && x.value;
      w ||
        ((r = function() {
          var t, e;
          g && (t = y.domain) && t.exit();
          while (o) {
            (e = o.fn), (o = o.next);
            try {
              e();
            } catch (n) {
              throw (o ? c() : (i = void 0), n);
            }
          }
          (i = void 0), t && t.enter();
        }),
        g
          ? (c = function() {
              y.nextTick(r);
            })
          : b && !h
          ? ((a = !0),
            (u = document.createTextNode("")),
            new b(r).observe(u, { characterData: !0 }),
            (c = function() {
              u.data = a = !a;
            }))
          : m && m.resolve
          ? ((s = m.resolve(void 0)),
            (f = s.then),
            (c = function() {
              f.call(s, r);
            }))
          : (c = function() {
              v.call(l, r);
            })),
        (t.exports =
          w ||
          function(t) {
            var e = { fn: t, next: void 0 };
            i && (i.next = e), o || ((o = e), c()), (i = e);
          });
    },
    b622: function(t, e, n) {
      var r = n("da84"),
        o = n("5692"),
        i = n("5135"),
        c = n("90e3"),
        a = n("4930"),
        u = n("fdbf"),
        s = o("wks"),
        f = r.Symbol,
        l = u ? f : (f && f.withoutSetter) || c;
      t.exports = function(t) {
        return (
          i(s, t) || (a && i(f, t) ? (s[t] = f[t]) : (s[t] = l("Symbol." + t))),
          s[t]
        );
      };
    },
    c04e: function(t, e, n) {
      var r = n("861d");
      t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
          return o;
        if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    c430: function(t, e) {
      t.exports = !1;
    },
    c6b6: function(t, e) {
      var n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    c6cd: function(t, e, n) {
      var r = n("da84"),
        o = n("ce4e"),
        i = "__core-js_shared__",
        c = r[i] || o(i, {});
      t.exports = c;
    },
    c8ba: function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      t.exports = n;
    },
    ca84: function(t, e, n) {
      var r = n("5135"),
        o = n("fc6a"),
        i = n("4d64").indexOf,
        c = n("d012");
      t.exports = function(t, e) {
        var n,
          a = o(t),
          u = 0,
          s = [];
        for (n in a) !r(c, n) && r(a, n) && s.push(n);
        while (e.length > u) r(a, (n = e[u++])) && (~i(s, n) || s.push(n));
        return s;
      };
    },
    cc12: function(t, e, n) {
      var r = n("da84"),
        o = n("861d"),
        i = r.document,
        c = o(i) && o(i.createElement);
      t.exports = function(t) {
        return c ? i.createElement(t) : {};
      };
    },
    cca6: function(t, e, n) {
      var r = n("23e7"),
        o = n("60da");
      r(
        { target: "Object", stat: !0, forced: Object.assign !== o },
        { assign: o }
      );
    },
    cdf9: function(t, e, n) {
      var r = n("825a"),
        o = n("861d"),
        i = n("f069");
      t.exports = function(t, e) {
        if ((r(t), o(e) && e.constructor === t)) return e;
        var n = i.f(t),
          c = n.resolve;
        return c(e), n.promise;
      };
    },
    ce4e: function(t, e, n) {
      var r = n("da84"),
        o = n("9112");
      t.exports = function(t, e) {
        try {
          o(r, t, e);
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    d012: function(t, e) {
      t.exports = {};
    },
    d039: function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    d066: function(t, e, n) {
      var r = n("428f"),
        o = n("da84"),
        i = function(t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function(t, e) {
        return arguments.length < 2
          ? i(r[t]) || i(o[t])
          : (r[t] && r[t][e]) || (o[t] && o[t][e]);
      };
    },
    d1e7: function(t, e, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({ 1: 2 }, 1);
      e.f = i
        ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    d2bb: function(t, e, n) {
      var r = n("825a"),
        o = n("3bbe");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function() {
              var t,
                e = !1,
                n = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  t.call(n, []),
                  (e = n instanceof Array);
              } catch (i) {}
              return function(n, i) {
                return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
              };
            })()
          : void 0);
    },
    d44e: function(t, e, n) {
      var r = n("9bf2").f,
        o = n("5135"),
        i = n("b622"),
        c = i("toStringTag");
      t.exports = function(t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), c) &&
          r(t, c, { configurable: !0, value: e });
      };
    },
    da84: function(t, e, n) {
      (function(e) {
        var n = function(t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          Function("return this")();
      }.call(this, n("c8ba")));
    },
    df75: function(t, e, n) {
      var r = n("ca84"),
        o = n("7839");
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, o);
        };
    },
    e163: function(t, e, n) {
      var r = n("5135"),
        o = n("7b0b"),
        i = n("f772"),
        c = n("e177"),
        a = i("IE_PROTO"),
        u = Object.prototype;
      t.exports = c
        ? Object.getPrototypeOf
        : function(t) {
            return (
              (t = o(t)),
              r(t, a)
                ? t[a]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? u
                : null
            );
          };
    },
    e177: function(t, e, n) {
      var r = n("d039");
      t.exports = !r(function() {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    e260: function(t, e, n) {
      "use strict";
      var r = n("fc6a"),
        o = n("44d2"),
        i = n("3f8c"),
        c = n("69f3"),
        a = n("7dd0"),
        u = "Array Iterator",
        s = c.set,
        f = c.getterFor(u);
      (t.exports = a(
        Array,
        "Array",
        function(t, e) {
          s(this, { type: u, target: r(t), index: 0, kind: e });
        },
        function() {
          var t = f(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: e[r], done: !1 }
            : { value: [r, e[r]], done: !1 };
        },
        "values"
      )),
        (i.Arguments = i.Array),
        o("keys"),
        o("values"),
        o("entries");
    },
    e2cc: function(t, e, n) {
      var r = n("6eeb");
      t.exports = function(t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t;
      };
    },
    e667: function(t, e) {
      t.exports = function(t) {
        try {
          return { error: !1, value: t() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    e6cf: function(t, e, n) {
      "use strict";
      var r,
        o,
        i,
        c,
        a = n("23e7"),
        u = n("c430"),
        s = n("da84"),
        f = n("d066"),
        l = n("fea9"),
        p = n("6eeb"),
        d = n("e2cc"),
        v = n("d44e"),
        h = n("2626"),
        b = n("861d"),
        y = n("1c0b"),
        m = n("19aa"),
        g = n("c6b6"),
        x = n("8925"),
        w = n("2266"),
        j = n("1c7e"),
        O = n("4840"),
        S = n("2cf4").set,
        E = n("b575"),
        k = n("cdf9"),
        _ = n("44de"),
        P = n("f069"),
        C = n("e667"),
        T = n("69f3"),
        I = n("94ca"),
        M = n("b622"),
        A = n("2d00"),
        R = M("species"),
        L = "Promise",
        N = T.get,
        F = T.set,
        U = T.getterFor(L),
        D = l,
        q = s.TypeError,
        $ = s.document,
        B = s.process,
        V = f("fetch"),
        G = P.f,
        W = G,
        z = "process" == g(B),
        H = !!($ && $.createEvent && s.dispatchEvent),
        J = "unhandledrejection",
        X = "rejectionhandled",
        Y = 0,
        K = 1,
        Q = 2,
        Z = 1,
        tt = 2,
        et = I(L, function() {
          var t = x(D) !== String(D);
          if (!t) {
            if (66 === A) return !0;
            if (!z && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if (u && !D.prototype["finally"]) return !0;
          if (A >= 51 && /native code/.test(D)) return !1;
          var e = D.resolve(1),
            n = function(t) {
              t(
                function() {},
                function() {}
              );
            },
            r = (e.constructor = {});
          return (r[R] = n), !(e.then(function() {}) instanceof n);
        }),
        nt =
          et ||
          !j(function(t) {
            D.all(t)["catch"](function() {});
          }),
        rt = function(t) {
          var e;
          return !(!b(t) || "function" != typeof (e = t.then)) && e;
        },
        ot = function(t, e, n) {
          if (!e.notified) {
            e.notified = !0;
            var r = e.reactions;
            E(function() {
              var o = e.value,
                i = e.state == K,
                c = 0;
              while (r.length > c) {
                var a,
                  u,
                  s,
                  f = r[c++],
                  l = i ? f.ok : f.fail,
                  p = f.resolve,
                  d = f.reject,
                  v = f.domain;
                try {
                  l
                    ? (i || (e.rejection === tt && ut(t, e), (e.rejection = Z)),
                      !0 === l
                        ? (a = o)
                        : (v && v.enter(),
                          (a = l(o)),
                          v && (v.exit(), (s = !0))),
                      a === f.promise
                        ? d(q("Promise-chain cycle"))
                        : (u = rt(a))
                        ? u.call(a, p, d)
                        : p(a))
                    : d(o);
                } catch (h) {
                  v && !s && v.exit(), d(h);
                }
              }
              (e.reactions = []),
                (e.notified = !1),
                n && !e.rejection && ct(t, e);
            });
          }
        },
        it = function(t, e, n) {
          var r, o;
          H
            ? ((r = $.createEvent("Event")),
              (r.promise = e),
              (r.reason = n),
              r.initEvent(t, !1, !0),
              s.dispatchEvent(r))
            : (r = { promise: e, reason: n }),
            (o = s["on" + t])
              ? o(r)
              : t === J && _("Unhandled promise rejection", n);
        },
        ct = function(t, e) {
          S.call(s, function() {
            var n,
              r = e.value,
              o = at(e);
            if (
              o &&
              ((n = C(function() {
                z ? B.emit("unhandledRejection", r, t) : it(J, t, r);
              })),
              (e.rejection = z || at(e) ? tt : Z),
              n.error)
            )
              throw n.value;
          });
        },
        at = function(t) {
          return t.rejection !== Z && !t.parent;
        },
        ut = function(t, e) {
          S.call(s, function() {
            z ? B.emit("rejectionHandled", t) : it(X, t, e.value);
          });
        },
        st = function(t, e, n, r) {
          return function(o) {
            t(e, n, o, r);
          };
        },
        ft = function(t, e, n, r) {
          e.done ||
            ((e.done = !0),
            r && (e = r),
            (e.value = n),
            (e.state = Q),
            ot(t, e, !0));
        },
        lt = function(t, e, n, r) {
          if (!e.done) {
            (e.done = !0), r && (e = r);
            try {
              if (t === n) throw q("Promise can't be resolved itself");
              var o = rt(n);
              o
                ? E(function() {
                    var r = { done: !1 };
                    try {
                      o.call(n, st(lt, t, r, e), st(ft, t, r, e));
                    } catch (i) {
                      ft(t, r, i, e);
                    }
                  })
                : ((e.value = n), (e.state = K), ot(t, e, !1));
            } catch (i) {
              ft(t, { done: !1 }, i, e);
            }
          }
        };
      et &&
        ((D = function(t) {
          m(this, D, L), y(t), r.call(this);
          var e = N(this);
          try {
            t(st(lt, this, e), st(ft, this, e));
          } catch (n) {
            ft(this, e, n);
          }
        }),
        (r = function(t) {
          F(this, {
            type: L,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: Y,
            value: void 0
          });
        }),
        (r.prototype = d(D.prototype, {
          then: function(t, e) {
            var n = U(this),
              r = G(O(this, D));
            return (
              (r.ok = "function" != typeof t || t),
              (r.fail = "function" == typeof e && e),
              (r.domain = z ? B.domain : void 0),
              (n.parent = !0),
              n.reactions.push(r),
              n.state != Y && ot(this, n, !1),
              r.promise
            );
          },
          catch: function(t) {
            return this.then(void 0, t);
          }
        })),
        (o = function() {
          var t = new r(),
            e = N(t);
          (this.promise = t),
            (this.resolve = st(lt, t, e)),
            (this.reject = st(ft, t, e));
        }),
        (P.f = G = function(t) {
          return t === D || t === i ? new o(t) : W(t);
        }),
        u ||
          "function" != typeof l ||
          ((c = l.prototype.then),
          p(
            l.prototype,
            "then",
            function(t, e) {
              var n = this;
              return new D(function(t, e) {
                c.call(n, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          "function" == typeof V &&
            a(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function(t) {
                  return k(D, V.apply(s, arguments));
                }
              }
            ))),
        a({ global: !0, wrap: !0, forced: et }, { Promise: D }),
        v(D, L, !1, !0),
        h(L),
        (i = f(L)),
        a(
          { target: L, stat: !0, forced: et },
          {
            reject: function(t) {
              var e = G(this);
              return e.reject.call(void 0, t), e.promise;
            }
          }
        ),
        a(
          { target: L, stat: !0, forced: u || et },
          {
            resolve: function(t) {
              return k(u && this === i ? D : this, t);
            }
          }
        ),
        a(
          { target: L, stat: !0, forced: nt },
          {
            all: function(t) {
              var e = this,
                n = G(e),
                r = n.resolve,
                o = n.reject,
                i = C(function() {
                  var n = y(e.resolve),
                    i = [],
                    c = 0,
                    a = 1;
                  w(t, function(t) {
                    var u = c++,
                      s = !1;
                    i.push(void 0),
                      a++,
                      n.call(e, t).then(function(t) {
                        s || ((s = !0), (i[u] = t), --a || r(i));
                      }, o);
                  }),
                    --a || r(i);
                });
              return i.error && o(i.value), n.promise;
            },
            race: function(t) {
              var e = this,
                n = G(e),
                r = n.reject,
                o = C(function() {
                  var o = y(e.resolve);
                  w(t, function(t) {
                    o.call(e, t).then(n.resolve, r);
                  });
                });
              return o.error && r(o.value), n.promise;
            }
          }
        );
    },
    e893: function(t, e, n) {
      var r = n("5135"),
        o = n("56ef"),
        i = n("06cf"),
        c = n("9bf2");
      t.exports = function(t, e) {
        for (var n = o(e), a = c.f, u = i.f, s = 0; s < n.length; s++) {
          var f = n[s];
          r(t, f) || a(t, f, u(e, f));
        }
      };
    },
    e95a: function(t, e, n) {
      var r = n("b622"),
        o = n("3f8c"),
        i = r("iterator"),
        c = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (o.Array === t || c[i] === t);
      };
    },
    f069: function(t, e, n) {
      "use strict";
      var r = n("1c0b"),
        o = function(t) {
          var e, n;
          (this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (e = t), (n = r);
          })),
            (this.resolve = r(e)),
            (this.reject = r(n));
        };
      t.exports.f = function(t) {
        return new o(t);
      };
    },
    f5df: function(t, e, n) {
      var r = n("00ee"),
        o = n("c6b6"),
        i = n("b622"),
        c = i("toStringTag"),
        a =
          "Arguments" ==
          o(
            (function() {
              return arguments;
            })()
          ),
        u = function(t, e) {
          try {
            return t[e];
          } catch (n) {}
        };
      t.exports = r
        ? o
        : function(t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (n = u((e = Object(t)), c))
              ? n
              : a
              ? o(e)
              : "Object" == (r = o(e)) && "function" == typeof e.callee
              ? "Arguments"
              : r;
          };
    },
    f772: function(t, e, n) {
      var r = n("5692"),
        o = n("90e3"),
        i = r("keys");
      t.exports = function(t) {
        return i[t] || (i[t] = o(t));
      };
    },
    fc6a: function(t, e, n) {
      var r = n("44ad"),
        o = n("1d80");
      t.exports = function(t) {
        return r(o(t));
      };
    },
    fdbf: function(t, e, n) {
      var r = n("4930");
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    fea9: function(t, e, n) {
      var r = n("da84");
      t.exports = r.Promise;
    }
  });
});
//# sourceMappingURL=app.js.map
