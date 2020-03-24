! function e(t, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(s, !0);
                if (i) return i(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var n = t[s][1][e];
                return o(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
    return o
}({
    1: [function(e, t, n) {
        (function(t) {
            "use strict";

            function n(e) {
                L && L.pause(), T && T.parentNode.removeChild(T), O.stop(), O.removeAllListeners("tick");
                var t = s();
                if (e) "string" == typeof e && (e = {
                    url: e
                });
                else {
                    var n = "undefined" != typeof t.preset ? 0 | parseInt(t.preset, 10) : Math.floor(Math.random() * w.length);
                    e = w[n % w.length]
                }
                e = j({}, e), e.url = t.url || e.url;
                var o = ["distance", "capacity", "alpha", "seek", "extent", "position"];
                o.forEach(function(n) {
                    "position" === n && "string" == typeof t.position ? (e.position = t.position.split(",").map(function(e) {
                        return parseFloat(e) || 0
                    }).slice(0, 3), 3 !== e.position.length && (e.position = null)) : "undefined" != typeof t[n] && (e[n] = parseFloat(t[n]))
                }), y({
                    client_id: "b95f61a90da961736c03f659c03cb0cc",
                    song: a(e.url),
                    dark: !0,
                    getFonts: !0
                }, function(t, n, o, i) {
                    t && x(E), T = i,  r(n, e)
                })
            }

            function r(e, t) {
                var n = new Audio;
                n.crossOrigin = "Anonymous", n.addEventListener("canplay", h(function() {
                	window.onclick = function() {
                    	t.seek && (n.currentTime = t.seek), o(n, t), n.play()
                	}
                })), n.src = e, L = n
                // Added onlcik without autoplay
                //window.onclick = function() { n.play(); }
            }

            function o(e, t) {
                function n(e) {
                    s += e / 1e3;
                    var n = s / p;
                    if (n > 1) return O.stop();
                    var o = r.waveform(),
                        u = o.length;
                    a.identity(), a.translate(t.position || [0, 3.5, 0]), a.lookAt([0, 0, 0]), a.update(), C.save(), C.scale(i, i);
                    var l = 1 - n,
                        v = s,
                        g = t.alpha || .25;
                    C.strokeStyle = "rgba(0, 0, 0, " + g + ")", C.lineWidth = 1, C.lineJoin = "round", C.beginPath();
                    for (var w = h.length - 1; w >= 0; w--) {
                        var x = h[w];
                        C.lineTo(x[0], x[1])
                    }
                    C.stroke(), C.restore();
                    for (var w = 0; w < u; w++) {
                        var j = w / (u - 1),
                            k = d(v + y, v, j);
                        f[0] = Math.cos(k) * l, f[2] = Math.sin(k) * l;
                        var _ = o[w] / 128,
                            A = _ * b / 2,
                            E = [f[0], f[1] + A, f[2]],
                            T = a.project(E),
                            L = c(T, 2),
                            M = L[0],
                            q = L[1];
                        h.length > m && h.shift(), h.push([M, q])
                    }
                }
                var r = u(e, _, {
                        audible: !0,
                        stereo: !1
                    }),
                    o = [window.innerWidth, window.innerHeight],
                    i = window.devicePixelRatio;
                g(A, window, i)();
                var s = 0,
                    a = l({
                        fov: Math.PI / 4,
                        near: .01,
                        far: 100,
                        viewport: [0, 0].concat(o)
                    }),
                    p = e.duration,
                    f = [0, 0, 0],
                    h = [],
                    m = v(t.capacity, 1e3),
                    y = v(t.distance, .25),
                    b = v(t.extent, .5);
                O.on("tick", n).start()
            }

            function i() {
                console.log("%cspins", "font-weight: bold; padding: 3px; background: #ededed;"), console.log("Reload the page for another preset.\n    \nTo change tracks and settings:\n\n  load()    // loads a random track\n  load(url) // loads a SoundCloud url\n  load(opt) // loads with full options\n  \n  options:\n    url        the URL to load\n    capacity   number of line segments per tick\n    distance   radial distance along circle to draw each tick\n    position   camera [x, y, z]\n    extent     amount to extend away from line center\n    alpha      line opacity\n    seek       seconds to jump into the song at\n\n\nYou can also specify a short URL in the query and it will take precedence.\n  http://mattdesl.github.io/spins?url=roman-mars/99-invisible-162-mystery-house\n")
            }

            function s() {
                return m.parse(window.location.search)
            }

            function a(e) {
                return e ? (/https?:/i.test(e) || (e = b("https://soundcloud.com/", e)), e) : null
            }
            var c = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                u = e("web-audio-analyser"),
                l = e("perspective-camera"),
                p = e("raf-loop"),
                f = e("get-canvas-context"),
                d = e("lerp"),
                h = e("once"),
                v = e("defined"),
                g = e("canvas-fit"),
                m = e("query-string"),
                y = e("soundcloud-badge"),
                b = e("url-join"),
                w = e("./presets"),
                x = e("./lib/error"),
                j = e("object-assign"),
                k = window.AudioContext || window.webkitAudioContext,
                _ = k ? new k : null,
                C = f("2d"),
                A = C.canvas;
            document.body.appendChild(A), document.body.style.overflow = "hidden";
            var E = "Sorry, this demo only works in Chrome and FireFox!",
                O = p(),
                T = void 0,
                L = void 0;
            k ? (t.load = n, n(), i()) : x(E)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./lib/error": 2,
        "./presets": 67,
        "canvas-fit": 10,
        defined: 11,
        "get-canvas-context": 14,
        lerp: 36,
        "object-assign": 38,
        once: 39,
        "perspective-camera": 41,
        "query-string": 46,
        "raf-loop": 50,
        "soundcloud-badge": 58,
        "url-join": 64,
        "web-audio-analyser": 65
    }],
    2: [function(e, t, n) {
        "use strict";

        function r(e) {
            var t = '\n    <div class="error">' + e + '\n    See <a target="_top" href="https://github.com/mattdesl/spins">here</a>\n    for screen shots and source.\n    </div>\n  ';
            a.add({
                "Open Sans": [300, 600]
            }), i(c);
            var n = o(t);
            document.body.appendChild(n)
        }
        var o = e("domify"),
            i = e("insert-css"),
            s = e("once"),
            a = e("google-fonts"),
            c = "\n.error {\n  position: fixed;\n  position: fixed;\n  width: 100%;\n  z-index: 100000;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 20px;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  font-size: 16px;\n  margin: 0;\n  font: 14px 'Open Sans', sans-serif;\n  /*background: #fff;*/\n}\n\na {\n  text-decoration: none;\n  color: #0066FF;\n}\na:hover, a:visited, a:active {\n  text-decoration: underline;\n}\n";
        t.exports = s(r)
    }, {
        domify: 12,
        "google-fonts": 33,
        "insert-css": 35,
        once: 39
    }],
    3: [function(e, t, n) {}, {}],
    4: [function(e, t, n) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function o(e) {
            return "function" == typeof e
        }

        function i(e) {
            return "number" == typeof e
        }

        function s(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
            if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, r.prototype.emit = function(e) {
            var t, n, r, i, c, u;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1], t instanceof Error) throw t;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (n = this._events[e], a(n)) return !1;
            if (o(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (r = arguments.length, i = new Array(r - 1), c = 1; c < r; c++) i[c - 1] = arguments[c];
                    n.apply(this, i)
            } else if (s(n)) {
                for (r = arguments.length, i = new Array(r - 1), c = 1; c < r; c++) i[c - 1] = arguments[c];
                for (u = n.slice(), r = u.length, c = 0; c < r; c++) u[c].apply(this, i)
            }
            return !0
        }, r.prototype.addListener = function(e, t) {
            var n;
            if (!o(t)) throw TypeError("listener must be a function");
            if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned) {
                var n;
                n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())
            }
            return this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
            }
            if (!o(t)) throw TypeError("listener must be a function");
            var r = !1;
            return n.listener = t, this.on(e, n), this
        }, r.prototype.removeListener = function(e, t) {
            var n, r, i, a;
            if (!o(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (n = this._events[e], i = n.length, r = -1, n === t || o(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (s(n)) {
                for (a = i; a-- > 0;)
                    if (n[a] === t || n[a].listener && n[a].listener === t) {
                        r = a;
                        break
                    }
                if (r < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, r.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[e], o(n)) this.removeListener(e, n);
            else
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, r.prototype.listeners = function(e) {
            var t;
            return t = this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, r.listenerCount = function(e, t) {
            var n;
            return n = e._events && e._events[t] ? o(e._events[t]) ? 1 : e._events[t].length : 0
        }
    }, {}],
    5: [function(e, t, n) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (p === setTimeout) return setTimeout(e, 0);
            if ((p === r || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
            try {
                return p(e, 0)
            } catch (t) {
                try {
                    return p.call(null, e, 0)
                } catch (t) {
                    return p.call(this, e, 0)
                }
            }
        }

        function s(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function a() {
            g && h && (g = !1, h.length ? v = h.concat(v) : m = -1, v.length && c())
        }

        function c() {
            if (!g) {
                var e = i(a);
                g = !0;
                for (var t = v.length; t;) {
                    for (h = v, v = []; ++m < t;) h && h[m].run();
                    m = -1, t = v.length
                }
                h = null, g = !1, s(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function l() {}
        var p, f, d = t.exports = {};
        ! function() {
            try {
                p = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                p = r
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                f = o
            }
        }();
        var h, v = [],
            g = !1,
            m = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            v.push(new u(e, t)), 1 !== v.length || g || i(c)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, {}],
    6: [function(e, t, n) {
        function r(e, t, n, r, c) {
            i(e, n[0], n[1], 0), i(t, n[0], n[1], 1), o(e, e, r, c), o(t, t, r, c), s(t, t, e), a(t, t)
        }
        var o = e("camera-unproject"),
            i = e("gl-vec3/set"),
            s = e("gl-vec3/subtract"),
            a = e("gl-vec3/normalize");
        t.exports = r
    }, {
        "camera-unproject": 8,
        "gl-vec3/normalize": 24,
        "gl-vec3/set": 27,
        "gl-vec3/subtract": 29
    }],
    7: [function(e, t, n) {
        function r(e, t, n, r) {
            var u = n[0],
                l = n[1],
                p = n[2],
                f = n[3],
                d = s,
                h = a;
            i(c, t[0], t[1], t[2], 1), o(c, c, r);
            var v = c[3];
            return 0 !== v && (c[0] = c[0] / v, c[1] = c[1] / v, c[2] = c[2] / v), e[0] = u + p / 2 * c[0] + (0 + p / 2), e[1] = l + f / 2 * c[1] + (0 + f / 2), e[2] = (h - d) / 2 * c[2] + (h + d) / 2, e[3] = 0 === v ? 0 : 1 / v, e
        }
        var o = e("gl-vec4/transformMat4"),
            i = e("gl-vec4/set"),
            s = 0,
            a = 1,
            c = [0, 0, 0, 0];
        t.exports = r
    }, {
        "gl-vec4/set": 30,
        "gl-vec4/transformMat4": 31
    }],
    8: [function(e, t, n) {
        function r(e, t, n, r) {
            var i = n[0],
                s = n[1],
                a = n[2],
                c = n[3],
                u = t[0],
                l = t[1],
                p = t[2];
            return u -= i, l = c - l - 1, l -= s, e[0] = 2 * u / a - 1, e[1] = 2 * l / c - 1, e[2] = 2 * p - 1, o(e, e, r)
        }
        var o = e("./lib/projectMat4");
        t.exports = r
    }, {
        "./lib/projectMat4": 9
    }],
    9: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0],
                o = t[1],
                i = t[2],
                s = n[0],
                a = n[1],
                c = n[2],
                u = n[3],
                l = n[4],
                p = n[5],
                f = n[6],
                d = n[7],
                h = n[8],
                v = n[9],
                g = n[10],
                m = n[11],
                y = n[12],
                b = n[13],
                w = n[14],
                x = n[15],
                j = 1 / (r * u + o * d + i * m + x);
            return e[0] = (r * s + o * l + i * h + y) * j, e[1] = (r * a + o * p + i * v + b) * j, e[2] = (r * c + o * f + i * g + w) * j, e
        }
        t.exports = r
    }, {}],
    10: [function(e, t, n) {
        function r(e, t, n) {
            function r() {
                var t = r.parent || e.parentNode;
                if ("function" == typeof t) var n = t(i) || i,
                    a = n[0],
                    c = n[1];
                else if (t && t !== document.body) var u = o(t),
                    a = 0 | u[0],
                    c = 0 | u[1];
                else var a = window.innerWidth,
                    c = window.innerHeight;
                return s ? (e.setAttribute("width", a * r.scale + "px"), e.setAttribute("height", c * r.scale + "px")) : (e.width = a * r.scale, e.height = c * r.scale), e.style.width = a + "px", e.style.height = c + "px", r
            }
            var s = "SVG" === e.nodeName.toUpperCase();
            return e.style.position = e.style.position || "absolute", e.style.top = 0, e.style.left = 0, r.scale = parseFloat(n || 1), r.parent = t, r()
        }
        var o = e("element-size");
        t.exports = r;
        var i = new Float32Array(2)
    }, {
        "element-size": 13
    }],
    11: [function(e, t, n) {
        t.exports = function() {
            for (var e = 0; e < arguments.length; e++)
                if (void 0 !== arguments[e]) return arguments[e]
        }
    }, {}],
    12: [function(e, t, n) {
        function r(e, t) {
            if ("string" != typeof e) throw new TypeError("String expected");
            t || (t = document);
            var n = /<([\w:]+)/.exec(e);
            if (!n) return t.createTextNode(e);
            e = e.replace(/^\s+|\s+$/g, "");
            var r = n[1];
            if ("body" == r) {
                var o = t.createElement("html");
                return o.innerHTML = e, o.removeChild(o.lastChild)
            }
            var i = s[r] || s._default,
                a = i[0],
                c = i[1],
                u = i[2],
                o = t.createElement("div");
            for (o.innerHTML = c + e + u; a--;) o = o.lastChild;
            if (o.firstChild == o.lastChild) return o.removeChild(o.firstChild);
            for (var l = t.createDocumentFragment(); o.firstChild;) l.appendChild(o.removeChild(o.firstChild));
            return l
        }
        t.exports = r;
        var o, i = !1;
        "undefined" != typeof document && (o = document.createElement("div"), o.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', i = !o.getElementsByTagName("link").length, o = void 0);
        var s = {
            legend: [1, "<fieldset>", "</fieldset>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            _default: i ? [1, "X<div>", "</div>"] : [0, "", ""]
        };
        s.td = s.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], s.option = s.optgroup = [1, '<select multiple="multiple">', "</select>"], s.thead = s.tbody = s.colgroup = s.caption = s.tfoot = [1, "<table>", "</table>"], s.polyline = s.ellipse = s.polygon = s.circle = s.text = s.line = s.path = s.rect = s.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
    }, {}],
    13: [function(e, t, n) {
        function r(e) {
            if (e === window || e === document.body) return [window.innerWidth, window.innerHeight];
            if (!e.parentNode) {
                var t = !0;
                document.body.appendChild(e)
            }
            var n = e.getBoundingClientRect(),
                r = getComputedStyle(e),
                i = (0 | n.height) + o(r.getPropertyValue("margin-top")) + o(r.getPropertyValue("margin-bottom")),
                s = (0 | n.width) + o(r.getPropertyValue("margin-left")) + o(r.getPropertyValue("margin-right"));
            return t && document.body.removeChild(e), [s, i]
        }

        function o(e) {
            return parseFloat(e) || 0
        }
        t.exports = r
    }, {}],
    14: [function(e, t, n) {
        function r(e, t) {
            if ("string" != typeof e) throw new TypeError("must specify type string");
            if (t = t || {}, "undefined" == typeof document && !t.canvas) return null;
            var n = t.canvas || document.createElement("canvas");
            "number" == typeof t.width && (n.width = t.width), "number" == typeof t.height && (n.height = t.height);
            var r, o = t;
            try {
                var i = [e];
                0 === e.indexOf("webgl") && i.push("experimental-" + e);
                for (var s = 0; s < i.length; s++)
                    if (r = n.getContext(i[s], o)) return r
            } catch (e) {
                r = null
            }
            return r || null
        }
        t.exports = r
    }, {}],
    15: [function(e, t, n) {
        function r(e) {
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        }
        t.exports = r
    }, {}],
    16: [function(e, t, n) {
        function r(e, t) {
            var n = t[0],
                r = t[1],
                o = t[2],
                i = t[3],
                s = t[4],
                a = t[5],
                c = t[6],
                u = t[7],
                l = t[8],
                p = t[9],
                f = t[10],
                d = t[11],
                h = t[12],
                v = t[13],
                g = t[14],
                m = t[15],
                y = n * a - r * s,
                b = n * c - o * s,
                w = n * u - i * s,
                x = r * c - o * a,
                j = r * u - i * a,
                k = o * u - i * c,
                _ = l * v - p * h,
                C = l * g - f * h,
                A = l * m - d * h,
                E = p * g - f * v,
                O = p * m - d * v,
                T = f * m - d * g,
                L = y * T - b * O + w * E + x * A - j * C + k * _;
            return L ? (L = 1 / L, e[0] = (a * T - c * O + u * E) * L, e[1] = (o * O - r * T - i * E) * L, e[2] = (v * k - g * j + m * x) * L, e[3] = (f * j - p * k - d * x) * L, e[4] = (c * A - s * T - u * C) * L, e[5] = (n * T - o * A + i * C) * L, e[6] = (g * w - h * k - m * b) * L, e[7] = (l * k - f * w + d * b) * L, e[8] = (s * O - a * A + u * _) * L, e[9] = (r * A - n * O - i * _) * L, e[10] = (h * j - v * w + m * y) * L, e[11] = (p * w - l * j - d * y) * L, e[12] = (a * C - s * E - c * _) * L, e[13] = (n * E - r * C + o * _) * L, e[14] = (v * b - h * x - g * y) * L, e[15] = (l * x - p * b + f * y) * L, e) : null
        }
        t.exports = r
    }, {}],
    17: [function(e, t, n) {
        function r(e, t, n, r) {
            var i, s, a, c, u, l, p, f, d, h, v = t[0],
                g = t[1],
                m = t[2],
                y = r[0],
                b = r[1],
                w = r[2],
                x = n[0],
                j = n[1],
                k = n[2];
            return Math.abs(v - x) < 1e-6 && Math.abs(g - j) < 1e-6 && Math.abs(m - k) < 1e-6 ? o(e) : (p = v - x, f = g - j, d = m - k, h = 1 / Math.sqrt(p * p + f * f + d * d), p *= h, f *= h, d *= h, i = b * d - w * f, s = w * p - y * d, a = y * f - b * p, h = Math.sqrt(i * i + s * s + a * a), h ? (h = 1 / h, i *= h, s *= h, a *= h) : (i = 0, s = 0, a = 0), c = f * a - d * s, u = d * i - p * a, l = p * s - f * i, h = Math.sqrt(c * c + u * u + l * l), h ? (h = 1 / h, c *= h, u *= h, l *= h) : (c = 0, u = 0, l = 0), e[0] = i, e[1] = c, e[2] = p, e[3] = 0, e[4] = s, e[5] = u, e[6] = f, e[7] = 0, e[8] = a, e[9] = l, e[10] = d, e[11] = 0, e[12] = -(i * v + s * g + a * m), e[13] = -(c * v + u * g + l * m), e[14] = -(p * v + f * g + d * m), e[15] = 1, e)
        }
        var o = e("./identity");
        t.exports = r
    }, {
        "./identity": 15
    }],
    18: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0],
                o = t[1],
                i = t[2],
                s = t[3],
                a = t[4],
                c = t[5],
                u = t[6],
                l = t[7],
                p = t[8],
                f = t[9],
                d = t[10],
                h = t[11],
                v = t[12],
                g = t[13],
                m = t[14],
                y = t[15],
                b = n[0],
                w = n[1],
                x = n[2],
                j = n[3];
            return e[0] = b * r + w * a + x * p + j * v, e[1] = b * o + w * c + x * f + j * g, e[2] = b * i + w * u + x * d + j * m, e[3] = b * s + w * l + x * h + j * y, b = n[4], w = n[5], x = n[6], j = n[7], e[4] = b * r + w * a + x * p + j * v, e[5] = b * o + w * c + x * f + j * g, e[6] = b * i + w * u + x * d + j * m, e[7] = b * s + w * l + x * h + j * y, b = n[8], w = n[9], x = n[10], j = n[11], e[8] = b * r + w * a + x * p + j * v, e[9] = b * o + w * c + x * f + j * g, e[10] = b * i + w * u + x * d + j * m, e[11] = b * s + w * l + x * h + j * y, b = n[12], w = n[13], x = n[14], j = n[15], e[12] = b * r + w * a + x * p + j * v, e[13] = b * o + w * c + x * f + j * g, e[14] = b * i + w * u + x * d + j * m, e[15] = b * s + w * l + x * h + j * y, e
        }
        t.exports = r
    }, {}],
    19: [function(e, t, n) {
        function r(e, t, n, r, o) {
            var i = 1 / Math.tan(t / 2),
                s = 1 / (r - o);
            return e[0] = i / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (o + r) * s, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * o * r * s, e[15] = 0, e
        }
        t.exports = r
    }, {}],
    20: [function(e, t, n) {
        function r(e, t, n) {
            return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
        }
        t.exports = r
    }, {}],
    21: [function(e, t, n) {
        function r(e, t) {
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
        }
        t.exports = r
    }, {}],
    22: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0],
                o = t[1],
                i = t[2],
                s = n[0],
                a = n[1],
                c = n[2];
            return e[0] = o * c - i * a, e[1] = i * s - r * c, e[2] = r * a - o * s, e
        }
        t.exports = r
    }, {}],
    23: [function(e, t, n) {
        function r(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }
        t.exports = r
    }, {}],
    24: [function(e, t, n) {
        function r(e, t) {
            var n = t[0],
                r = t[1],
                o = t[2],
                i = n * n + r * r + o * o;
            return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i), e
        }
        t.exports = r
    }, {}],
    25: [function(e, t, n) {
        function r(e, t, n) {
            return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
        }
        t.exports = r
    }, {}],
    26: [function(e, t, n) {
        function r(e, t, n, r) {
            return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e
        }
        t.exports = r
    }, {}],
    27: [function(e, t, n) {
        function r(e, t, n, r) {
            return e[0] = t, e[1] = n, e[2] = r, e
        }
        t.exports = r
    }, {}],
    28: [function(e, t, n) {
        function r(e, t) {
            var n = t[0] - e[0],
                r = t[1] - e[1],
                o = t[2] - e[2];
            return n * n + r * r + o * o
        }
        t.exports = r
    }, {}],
    29: [function(e, t, n) {
        function r(e, t, n) {
            return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
        }
        t.exports = r
    }, {}],
    30: [function(e, t, n) {
        function r(e, t, n, r, o) {
            return e[0] = t, e[1] = n, e[2] = r, e[3] = o, e
        }
        t.exports = r
    }, {}],
    31: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0],
                o = t[1],
                i = t[2],
                s = t[3];
            return e[0] = n[0] * r + n[4] * o + n[8] * i + n[12] * s, e[1] = n[1] * r + n[5] * o + n[9] * i + n[13] * s, e[2] = n[2] * r + n[6] * o + n[10] * i + n[14] * s, e[3] = n[3] * r + n[7] * o + n[11] * i + n[15] * s, e
        }
        t.exports = r
    }, {}],
    32: [function(e, t, n) {
        (function(e) {
            "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : t.exports = {}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    33: [function(e, t, n) {
        function r(e) {
            var t = i(e);
            return '<link href="' + t + '" rel="stylesheet" type="text/css">'
        }

        function o(e) {
            var t = i(e),
                n = document.createElement("link");
            return n.setAttribute("href", t), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n
        }

        function i(e) {
            var t = Object.keys(e).map(function(t) {
                var n = e[t];
                return t = t.replace(/\s+/, "+"), "boolean" == typeof n ? t : t + ":" + a(n).join(",")
            }).join("|");
            return "http://fonts.googleapis.com/css?family=" + t
        }

        function s(e) {
            var t = o(e);
            return document.head.appendChild(t), t
        }

        function a(e) {
            return Array.isArray(e) ? e : [e]
        }
        t.exports = r, t.exports.add = s
    }, {}],
    34: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, {}],
    35: [function(e, t, n) {
        var r = {};
        t.exports = function(e, t) {
            if (!r[e]) {
                r[e] = !0;
                var n = document.createElement("style");
                n.setAttribute("type", "text/css"), "textContent" in n ? n.textContent = e : n.styleSheet.cssText = e;
                var o = document.getElementsByTagName("head")[0];
                t && t.prepend ? o.insertBefore(n, o.childNodes[0]) : o.appendChild(n)
            }
        }
    }, {}],
    36: [function(e, t, n) {
        function r(e, t, n) {
            return e * (1 - n) + t * n
        }
        t.exports = r
    }, {}],
    37: [function(e, t, n) {
        function r(e, t) {
            t = t || {};
            var n = o(e);
            return n(t)
        }

        function o(e) {
            for (var t, n = [], r = s(e), o = 0; o < r.length; ++o)
                if (t = r[o], o % 2 == 0) n.push('"' + t.replace(/"/g, '\\"') + '"');
                else switch (t[0]) {
                    case "/":
                        t = t.slice(1), n.push(") + ");
                        break;
                    case "^":
                        t = t.slice(1), i(t), n.push(' + section(obj, "' + t + '", true, ');
                        break;
                    case "#":
                        t = t.slice(1), i(t), n.push(' + section(obj, "' + t + '", false, ');
                        break;
                    case "!":
                        t = t.slice(1), i(t), n.push(" + obj." + t + " + ");
                        break;
                    default:
                        i(t), n.push(" + escape(obj." + t + ") + ")
                }
                return n = "\n" + a(u.toString()) + ";\n\n" + a(c.toString()) + ";\n\n  return " + n.join("").replace(/\n/g, "\\n"), new Function("obj", n)
        }

        function i(e) {
            if (!e.match(/^[\w.]+$/)) throw new Error('invalid property "' + e + '"')
        }

        function s(e) {
            return e.split(/\{\{|\}\}/)
        }

        function a(e) {
            return e.replace(/^/gm, "  ")
        }

        function c(e, t, n, r) {
            var o = e[t];
            return "function" == typeof o ? o.call(e, r) : (n && (o = !o), o ? r : "")
        }

        function u(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        n = t.exports = r, n.compile = o
    }, {}],
    38: [function(e, t, n) {
        "use strict";

        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function o() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join("")) return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    o[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (e) {
                return !1
            }
        }
        var i = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = o() ? Object.assign : function(e, t) {
            for (var n, o, a = r(e), c = 1; c < arguments.length; c++) {
                n = Object(arguments[c]);
                for (var u in n) i.call(n, u) && (a[u] = n[u]);
                if (Object.getOwnPropertySymbols) {
                    o = Object.getOwnPropertySymbols(n);
                    for (var l = 0; l < o.length; l++) s.call(n, o[l]) && (a[o[l]] = n[o[l]])
                }
            }
            return a
        }
    }, {}],
    39: [function(e, t, n) {
        function r(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
            };
            return t.called = !1, t
        }

        function o(e) {
            var t = function() {
                    if (t.called) throw new Error(t.onceError);
                    return t.called = !0, t.value = e.apply(this, arguments)
                },
                n = e.name || "Function wrapped with `once`";
            return t.onceError = n + " shouldn't be called more than once", t.called = !1, t
        }
        var i = e("wrappy");
        t.exports = i(r), t.exports.strict = i(o), r.proto = r(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return r(this)
                },
                configurable: !0
            }), Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return o(this)
                },
                configurable: !0
            })
        })
    }, {
        wrappy: 66
    }],
    40: [function(e, t, n) {
        (function(e) {
            (function() {
                var n, r, o;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                    return performance.now()
                } : "undefined" != typeof e && null !== e && e.hrtime ? (t.exports = function() {
                    return (n() - o) / 1e6
                }, r = e.hrtime, n = function() {
                    var e;
                    return e = r(), 1e9 * e[0] + e[1]
                }, o = n()) : Date.now ? (t.exports = function() {
                    return Date.now() - o
                }, o = Date.now()) : (t.exports = function() {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        }).call(this, e("_process"))
    }, {
        _process: 5
    }],
    41: [function(e, t, n) {
        t.exports = e("./lib/camera-perspective")
    }, {
        "./lib/camera-perspective": 44
    }],
    42: [function(e, t, n) {
        var r = e("object-assign"),
            o = e("ray-3d"),
            i = e("camera-project"),
            s = e("camera-unproject"),
            a = e("./camera-look-at"),
            c = e("camera-picking-ray"),
            u = e("gl-vec3/add"),
            l = e("gl-mat4/multiply"),
            p = e("gl-mat4/invert"),
            f = e("gl-mat4/identity"),
            d = e("gl-vec3/set");
        t.exports = function(e) {
            function t() {
                l(b.projView, b.projection, b.view);
                var e = p(b.invProjView, b.projView);
                if (!e) throw new Error("camera projection * view is non-invertible")
            }

            function n(e) {
                return a(b.direction, b.up, b.position, e), b
            }

            function h() {
                return d(b.position, 0, 0, 0), d(b.direction, 0, 0, -1), d(b.up, 0, 1, 0), f(b.view), f(b.projection), f(b.projView), f(b.invProjView), b
            }

            function v(e) {
                return u(b.position, b.position, e), b
            }

            function g(e) {
                var t = new o;
                return c(t.origin, t.direction, e, b.viewport, b.invProjView), t
            }

            function m(e) {
                return i([], e, b.viewport, b.projView)
            }

            function y(e) {
                return s([], e, b.viewport, b.invProjView)
            }
            e = e || {};
            var b = {
                projection: f([]),
                view: f([]),
                position: e.position || [0, 0, 0],
                direction: e.direction || [0, 0, -1],
                up: e.up || [0, 1, 0],
                viewport: e.viewport || [-1, -1, 1, 1],
                projView: f([]),
                invProjView: f([])
            };
            return r(b, {
                translate: v,
                identity: h,
                lookAt: n,
                createPickingRay: g,
                update: t,
                project: m,
                unproject: y
            })
        }
    }, {
        "./camera-look-at": 43,
        "camera-picking-ray": 6,
        "camera-project": 7,
        "camera-unproject": 8,
        "gl-mat4/identity": 15,
        "gl-mat4/invert": 16,
        "gl-mat4/multiply": 18,
        "gl-vec3/add": 20,
        "gl-vec3/set": 27,
        "object-assign": 45,
        "ray-3d": 52
    }],
    43: [function(e, t, n) {
        var r = e("gl-vec3/cross"),
            o = e("gl-vec3/subtract"),
            i = e("gl-vec3/normalize"),
            s = e("gl-vec3/copy"),
            a = e("gl-vec3/dot"),
            c = e("gl-vec3/scale"),
            u = [0, 0, 0],
            l = 1e-9;
        t.exports = function(e, t, n, p) {
            o(u, p, n), i(u, u);
            var f = 0 === u[0] && 0 === u[1] && 0 === u[2];
            if (!f) {
                var d = a(u, t);
                Math.abs(d - 1) < l ? c(t, e, -1) : Math.abs(d + 1) < l && s(t, e), s(e, u), r(u, e, t), i(u, u), r(t, u, e), i(t, t)
            }
        }
    }, {
        "gl-vec3/copy": 21,
        "gl-vec3/cross": 22,
        "gl-vec3/dot": 23,
        "gl-vec3/normalize": 24,
        "gl-vec3/scale": 25,
        "gl-vec3/subtract": 29
    }],
    44: [function(e, t, n) {
        var r = e("./camera-base"),
            o = e("object-assign"),
            i = e("defined"),
            s = e("gl-mat4/perspective"),
            a = e("gl-mat4/lookAt"),
            c = e("gl-vec3/add");
        t.exports = function(e) {
            function t() {
                var e = n.viewport[2] / n.viewport[3];
                return s(n.projection, n.fov, e, Math.abs(n.near), Math.abs(n.far)), c(u, n.position, n.direction), a(n.view, n.position, u, n.up), l(), n
            }
            e = e || {};
            var n = r(e);
            n.fov = i(e.fov, Math.PI / 4), n.near = i(e.near, 1), n.far = i(e.far, 100);
            var u = [0, 0, 0],
                l = n.update;
            return t(), o(n, {
                update: t
            })
        }
    }, {
        "./camera-base": 42,
        defined: 11,
        "gl-mat4/lookAt": 17,
        "gl-mat4/perspective": 19,
        "gl-vec3/add": 20,
        "object-assign": 45
    }],
    45: [function(e, t, n) {
        "use strict";

        function r(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        t.exports = Object.assign || function(e, t) {
            for (var n, o, i = r(e), s = 1; s < arguments.length; s++) {
                n = arguments[s], o = Object.keys(Object(n));
                for (var a = 0; a < o.length; a++) i[o[a]] = n[o[a]]
            }
            return i
        }
    }, {}],
    46: [function(e, t, n) {
        "use strict";
        var r = e("strict-uri-encode");
        n.extract = function(e) {
            return e.split("?")[1] || ""
        }, n.parse = function(e) {
            return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
                var n = t.replace(/\+/g, " ").split("="),
                    r = n.shift(),
                    o = n.length > 0 ? n.join("=") : void 0;
                return r = decodeURIComponent(r), o = void 0 === o ? null : decodeURIComponent(o), e.hasOwnProperty(r) ? Array.isArray(e[r]) ? e[r].push(o) : e[r] = [e[r], o] : e[r] = o, e
            }, {}) : {})
        }, n.stringify = function(e) {
            return e ? Object.keys(e).sort().map(function(t) {
                var n = e[t];
                return Array.isArray(n) ? n.sort().map(function(e) {
                    return r(t) + "=" + r(e)
                }).join("&") : r(t) + "=" + r(n)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }
    }, {
        "strict-uri-encode": 63
    }],
    47: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function(e, t, n, i) {
            t = t || "&", n = n || "=";
            var s = {};
            if ("string" != typeof e || 0 === e.length) return s;
            var a = /\+/g;
            e = e.split(t);
            var c = 1e3;
            i && "number" == typeof i.maxKeys && (c = i.maxKeys);
            var u = e.length;
            c > 0 && u > c && (u = c);
            for (var l = 0; l < u; ++l) {
                var p, f, d, h, v = e[l].replace(a, "%20"),
                    g = v.indexOf(n);
                g >= 0 ? (p = v.substr(0, g), f = v.substr(g + 1)) : (p = v, f = ""), d = decodeURIComponent(p), h = decodeURIComponent(f), r(s, d) ? o(s[d]) ? s[d].push(h) : s[d] = [s[d], h] : s[d] = h
            }
            return s
        };
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}],
    48: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }
        var o = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function(e, t, n, a) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(s(e), function(s) {
                var a = encodeURIComponent(o(s)) + n;
                return i(e[s]) ? r(e[s], function(e) {
                    return a + encodeURIComponent(o(e))
                }).join(t) : a + encodeURIComponent(o(e[s]))
            }).join(t) : a ? encodeURIComponent(o(a)) + n + encodeURIComponent(o(e)) : ""
        };
        var i = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            s = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
    }, {}],
    49: [function(e, t, n) {
        "use strict";
        n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
    }, {
        "./decode": 47,
        "./encode": 48
    }],
    50: [function(e, t, n) {
        function r(e) {
            return this instanceof r ? (this.running = !1, this.last = s(), this._frame = 0, this._tick = this.tick.bind(this), void(e && this.on("tick", e))) : new r(e)
        }
        var o = e("inherits"),
            i = e("events").EventEmitter,
            s = e("right-now"),
            a = e("raf");
        t.exports = r, o(r, i), r.prototype.start = function() {
            if (!this.running) return this.running = !0, this.last = s(), this._frame = a(this._tick), this
        }, r.prototype.stop = function() {
            return this.running = !1, 0 !== this._frame && a.cancel(this._frame), this._frame = 0, this
        }, r.prototype.tick = function() {
            this._frame = a(this._tick);
            var e = s(),
                t = e - this.last;
            this.emit("tick", t), this.last = e
        }
    }, {
        events: 4,
        inherits: 34,
        raf: 51,
        "right-now": 57
    }],
    51: [function(e, t, n) {
        (function(n) {
            for (var r = e("performance-now"), o = "undefined" == typeof window ? n : window, i = ["moz", "webkit"], s = "AnimationFrame", a = o["request" + s], c = o["cancel" + s] || o["cancelRequest" + s], u = 0; !a && u < i.length; u++) a = o[i[u] + "Request" + s], c = o[i[u] + "Cancel" + s] || o[i[u] + "CancelRequest" + s];
            if (!a || !c) {
                var l = 0,
                    p = 0,
                    f = [],
                    d = 1e3 / 60;
                a = function(e) {
                    if (0 === f.length) {
                        var t = r(),
                            n = Math.max(0, d - (t - l));
                        l = n + t, setTimeout(function() {
                            var e = f.slice(0);
                            f.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(l)
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e
                                    }, 0)
                                }
                        }, Math.round(n))
                    }
                    return f.push({
                        handle: ++p,
                        callback: e,
                        cancelled: !1
                    }), p
                }, c = function(e) {
                    for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
                }
            }
            t.exports = function(e) {
                return a.call(o, e)
            }, t.exports.cancel = function() {
                c.apply(o, arguments)
            }, t.exports.polyfill = function() {
                o.requestAnimationFrame = a, o.cancelAnimationFrame = c
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "performance-now": 40
    }],
    52: [function(e, t, n) {
        function r(e, t) {
            this.origin = e || [0, 0, 0], this.direction = t || [0, 0, -1]
        }
        var o = e("ray-triangle-intersection"),
            i = e("ray-plane-intersection"),
            s = e("ray-sphere-intersection"),
            a = e("ray-aabb-intersection"),
            c = e("gl-vec3/copy"),
            u = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            l = [0, 0, 0];
        t.exports = r, r.prototype.set = function(e, t) {
            this.origin = e, this.direction = t
        }, r.prototype.copy = function(e) {
            c(this.origin, e.origin), c(this.direction, e.direction)
        }, r.prototype.clone = function() {
            var e = new r;
            return e.copy(this), e
        }, r.prototype.intersectsSphere = function(e, t) {
            return s(l, this.origin, this.direction, e, t)
        }, r.prototype.intersectsPlane = function(e, t) {
            return i(l, this.origin, this.direction, e, t)
        }, r.prototype.intersectsTriangle = function(e) {
            return o(l, this.origin, this.direction, e)
        }, r.prototype.intersectsBox = function(e) {
            return a(l, this.origin, this.direction, e)
        }, r.prototype.intersectsTriangleCell = function(e, t) {
            var n = e[0],
                r = e[1],
                o = e[2];
            return u[0] = t[n], u[1] = t[r], u[2] = t[o], this.intersectsTriangle(u)
        }
    }, {
        "gl-vec3/copy": 21,
        "ray-aabb-intersection": 53,
        "ray-plane-intersection": 54,
        "ray-sphere-intersection": 55,
        "ray-triangle-intersection": 56
    }],
    53: [function(e, t, n) {
        function r(e, t, n, r) {
            var i = o(t, n, r);
            if (i === 1 / 0) e = null;
            else {
                e = e || [];
                for (var s = 0; s < t.length; s++) e[s] = t[s] + n[s] * i
            }
            return e
        }

        function o(e, t, n) {
            for (var r = e.length, o = -(1 / 0), i = +(1 / 0), s = 0; s < r; s++) {
                var a = (n[0][s] - e[s]) / t[s],
                    c = (n[1][s] - e[s]) / t[s];
                if (a > c) {
                    var u = a;
                    a = c, c = u
                }
                if (c < o || a > i) return 1 / 0;
                a > o && (o = a), c < i && (i = c)
            }
            return o > i ? 1 / 0 : o
        }
        t.exports = r, t.exports.distance = o
    }, {}],
    54: [function(e, t, n) {
        function r(e, t, n, r, u) {
            var l = o(n, r);
            if (0 !== l) {
                var p = -(o(t, r) + u) / l;
                return p < 0 ? null : (s(c, n, p), i(e, t, c))
            }
            return o(r, t) + u === 0 ? a(e, t) : null;
        }
        var o = e("gl-vec3/dot"),
            i = e("gl-vec3/add"),
            s = e("gl-vec3/scale"),
            a = e("gl-vec3/copy");
        t.exports = r;
        var c = [0, 0, 0]
    }, {
        "gl-vec3/add": 20,
        "gl-vec3/copy": 21,
        "gl-vec3/dot": 23,
        "gl-vec3/scale": 25
    }],
    55: [function(e, t, n) {
        function r(e, t, n, r, p) {
            s(l, r, t);
            var f = i(n, l);
            if (f < 0) return null;
            a(l, t, n, f);
            var d = o(r, l),
                h = p * p;
            return d > h ? null : (c(e, n, f - Math.sqrt(h - d)), u(e, e, t))
        }
        var o = e("gl-vec3/squaredDistance"),
            i = e("gl-vec3/dot"),
            s = e("gl-vec3/subtract"),
            a = e("gl-vec3/scaleAndAdd"),
            c = e("gl-vec3/scale"),
            u = e("gl-vec3/add"),
            l = [0, 0, 0];
        t.exports = r
    }, {
        "gl-vec3/add": 20,
        "gl-vec3/dot": 23,
        "gl-vec3/scale": 25,
        "gl-vec3/scaleAndAdd": 26,
        "gl-vec3/squaredDistance": 28,
        "gl-vec3/subtract": 29
    }],
    56: [function(e, t, n) {
        function r(e, t, n, r) {
            s(c, r[1], r[0]), s(u, r[2], r[0]), o(p, n, u);
            var d = i(c, p);
            if (d < a) return null;
            s(l, t, r[0]);
            var h = i(l, p);
            if (h < 0 || h > d) return null;
            o(f, l, c);
            var v = i(n, f);
            if (v < 0 || h + v > d) return null;
            var g = i(u, f) / d;
            return e[0] = t[0] + g * n[0], e[1] = t[1] + g * n[1], e[2] = t[2] + g * n[2], e
        }
        var o = e("gl-vec3/cross"),
            i = e("gl-vec3/dot"),
            s = e("gl-vec3/subtract"),
            a = 1e-6,
            c = [0, 0, 0],
            u = [0, 0, 0],
            l = [0, 0, 0],
            p = [0, 0, 0],
            f = [0, 0, 0];
        t.exports = r
    }, {
        "gl-vec3/cross": 22,
        "gl-vec3/dot": 23,
        "gl-vec3/subtract": 29
    }],
    57: [function(e, t, n) {
        (function(e) {
            t.exports = e.performance && e.performance.now ? function() {
                return performance.now()
            } : Date.now || function() {
                return +new Date
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    58: [function(e, t, n) {
        function r(e) {
            if (e) throw e
        }

        function o(e, t) {
            l || (c(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"), l = !0), f || (f = a.compile('<div class="npm-scb-wrap">\n  <div class="npm-scb-inner">\n    <a target="_blank" href="{{!urls.song}}">\n      <img class="npm-scb-icon" src="{{!icon}}">\n      <img class="npm-scb-artwork" src="{{!artwork}}">\n    </a>\n    <div class="npm-scb-info">\n      <a target="_blank" href="{{!urls.song}}">\n        <p class="npm-scb-title">{{!title}}</p>\n      </a>\n      <a target="_blank" href="{{!urls.artist}}">\n        <p class="npm-scb-artist">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class="npm-scb-now-playing">\n    Now Playing:\n    <a href="{{!urls.song}}">{{!title}}</a>\n    by\n    <a href="{{!urls.artist}}">{{!artist}}</a>\n  </div>\n</div>')), !p && e.getFonts && (s.add({
                "Open Sans": [300, 600]
            }), p = !0), e = e || {}, t = t || r;
            var n = e.el || document.createElement("div"),
                o = "dark" in e && !e.dark ? "white" : "black",
                d = e.client_id,
                h = e.song;
            return i(d, h, function(e, r) {
                if (e) return t(e);
                if ("track" !== r.kind) throw new Error("soundcloud-badge only supports individual tracks at the moment");
                n.classList["black" === o ? "remove" : "add"]("npm-scb-white"), n.innerHTML = f({
                    artwork: r.artwork_url || r.user.avatar_url,
                    artist: r.user.username,
                    title: r.title,
                    icon: u[o],
                    urls: {
                        song: r.permalink_url,
                        artist: r.user.permalink_url
                    }
                }), document.body.appendChild(n), t(null, r.stream_url + "?client_id=" + d, r, n)
            }), n
        }
        var i = e("soundcloud-resolve"),
            s = e("google-fonts"),
            a = e("minstache"),
            c = e("insert-css"),
            u = (e("fs"), {
                black: "https://developers.soundcloud.com/assets/logo_black.png",
                white: "https://developers.soundcloud.com/assets/logo_white.png"
            });
        t.exports = o;
        var l = !1,
            p = !1,
            f = null
    }, {
        fs: 3,
        "google-fonts": 33,
        "insert-css": 59,
        minstache: 37,
        "soundcloud-resolve": 61
    }],
    59: [function(e, t, n) {
        var r = [];
        t.exports = function(e) {
            if (!(r.indexOf(e) >= 0)) {
                r.push(e);
                var t = document.createElement("style"),
                    n = document.createTextNode(e);
                t.appendChild(n), document.head.childNodes.length ? document.head.insertBefore(t, document.head.childNodes[0]) : document.head.appendChild(t)
            }
        }
    }, {}],
    60: [function(e, t, n) {
        function r(e) {
            var t = !1;
            return function() {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }
        t.exports = r, r.proto = r(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return r(this)
                },
                configurable: !0
            })
        })
    }, {}],
    61: [function(e, t, n) {
        function r(e, t, n) {
            var r = "http://api.soundcloud.com/resolve.json?" + o.stringify({
                url: t,
                client_id: e
            });
            i({
                uri: r,
                method: "GET"
            }, function(e, t, r) {
                if (e) return n(e);
                try {
                    r = JSON.parse(r)
                } catch (e) {
                    return n(e)
                }
                return r.errors ? n(new Error(r.errors[0].error_message)) : n(null, r)
            })
        }
        var o = e("querystring"),
            i = e("xhr");
        t.exports = r
    }, {
        querystring: 49,
        xhr: 62
    }],
    62: [function(e, t, n) {
        function r(e, t) {
            function n() {
                4 === l.readyState && r()
            }

            function r() {
                var e = null,
                    n = l.statusCode = l.status,
                    r = l.body = l.response || l.responseText || l.responseXML;
                if (0 === n || n >= 400 && n < 600) {
                    var o = l.responseText || a[String(l.status).charAt(0)];
                    e = new Error(o), e.statusCode = l.status
                }
                if (v) try {
                    r = l.body = JSON.parse(r)
                } catch (e) {}
                t(e, l, r)
            }

            function i(e) {
                t(e, l)
            }
            "string" == typeof e && (e = {
                uri: e
            }), e = e || {}, t = s(t);
            var l;
            l = e.cors ? new u : new c;
            var p = l.url = e.uri,
                f = l.method = e.method || "GET",
                d = e.body || e.data,
                h = l.headers = e.headers || {},
                v = !1;
            return "json" in e && (v = !0, h["Content-Type"] = "application/json", d = JSON.stringify(e.json)), l.onreadystatechange = n, l.onload = r, l.onerror = i, l.onprogress = function() {}, l.ontimeout = o, l.open(f, p), e.cors && (l.withCredentials = !0), l.timeout = "timeout" in e ? e.timeout : 5e3, l.setRequestHeader && Object.keys(h).forEach(function(e) {
                l.setRequestHeader(e, h[e])
            }), l.send(d), l
        }

        function o() {}
        var i = e("global/window"),
            s = e("once"),
            a = {
                0: "Internal XMLHttpRequest Error",
                4: "4xx Client Error",
                5: "5xx Server Error"
            },
            c = i.XMLHttpRequest || o,
            u = "withCredentials" in new c ? i.XMLHttpRequest : i.XDomainRequest;
        t.exports = r
    }, {
        "global/window": 32,
        once: 60
    }],
    63: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }, {}],
    64: [function(e, t, n) {
        function r(e) {
            return e.replace(/[\/]+/g, "/").replace(/\/\?/g, "?").replace(/\/\#/g, "#").replace(/\:\//g, "://")
        }
        t.exports = function() {
            var e = [].slice.call(arguments, 0).join("/");
            return r(e)
        }
    }, {}],
    65: [function(e, t, n) {
        function r(e, t, n) {
            if (!(this instanceof r)) return new r(e, t, n);
            if (t instanceof o || (n = t, t = null), n = n || {}, this.ctx = t = t || new o, e instanceof AudioNode || (e = e instanceof Audio || e instanceof HTMLAudioElement ? t.createMediaElementSource(e) : t.createMediaStreamSource(e)), this.analyser = t.createAnalyser(), this.stereo = !!n.stereo, this.audible = n.audible !== !1, this.wavedata = null, this.freqdata = null, this.splitter = null, this.merger = null, this.source = e, this.stereo) {
                this.analyser = [this.analyser], this.analyser.push(t.createAnalyser()), this.splitter = t.createChannelSplitter(2), this.merger = t.createChannelMerger(2), this.output = this.merger, this.source.connect(this.splitter);
                for (var i = 0; i < 2; i++) this.splitter.connect(this.analyser[i], i, 0), this.analyser[i].connect(this.merger, 0, i);
                this.audible && this.merger.connect(t.destination)
            } else this.output = this.source, this.source.connect(this.analyser), this.audible && this.analyser.connect(t.destination)
        }
        var o = window.AudioContext || window.webkitAudioContext;
        t.exports = r, r.prototype.waveform = function(e, t) {
            e || (e = this.wavedata || (this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)));
            var n = this.stereo ? this.analyser[t || 0] : this.analyser;
            return n.getByteTimeDomainData(e), e
        }, r.prototype.frequencies = function(e, t) {
            e || (e = this.freqdata || (this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)));
            var n = this.stereo ? this.analyser[t || 0] : this.analyser;
            return n.getByteFrequencyData(e), e
        }
    }, {}],
    66: [function(e, t, n) {
        function r(e, t) {
            function n() {
                for (var t = new Array(arguments.length), n = 0; n < t.length; n++) t[n] = arguments[n];
                var r = e.apply(this, t),
                    o = t[t.length - 1];
                return "function" == typeof r && r !== o && Object.keys(o).forEach(function(e) {
                    r[e] = o[e]
                }), r
            }
            if (e && t) return r(e)(t);
            if ("function" != typeof e) throw new TypeError("need wrapper function");
            return Object.keys(e).forEach(function(t) {
                n[t] = e[t]
            }), n
        }
        t.exports = r
    }, {}],
    67: [function(e, t, n) {
        "use strict";
        t.exports = [{
            capacity: 500,
            distance: .1,
            alpha: .1,
            extent: 1.25,
            position: [0, -3.5, 0],
            url: "https://soundcloud.com/mon_dre/the-axis-of-perspectivity"
        }, {
            capacity: 1e3,
            distance: .1,
            alpha: .2,
            extent: .25,
            position: [0, 3.5, 0],
            url: "https://soundcloud.com/kartell/sg-lewis-no-less-kartell-remix-1"
        }]
    }, {}]
}, {}, [1]);
