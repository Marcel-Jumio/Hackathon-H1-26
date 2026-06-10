import { n as D, C as Z, p as Me, N as g, q as ve, r as X, t as Re, u as _e, v as L, w as Q, x as ee, P as te, y as ne, z as De, A as P, B as k, D as xe, E as V, F, G as y, k as oe, H as Ae, I as se, J as ie, K as re, L as O, M as w, O as I, e as Oe, Q as ze, R as C, S as _, T as Le, U as Pe, V as v, W as ke, X as Ve, Y as Fe, Z as U, _ as Ue, $ as He, a0 as Be, a1 as Ge, a2 as Ye, a3 as $e, i as Xe, s as We, a4 as qe, a5 as Je, a6 as Ke, c as je, a7 as Ze, a as Qe } from "../index.BI4tfquX.js";
const m = {
  FullSnapshot: 2,
  IncrementalSnapshot: 3,
  Meta: 4,
  Focus: 6,
  ViewEnd: 7,
  VisualViewport: 8,
  FrustrationRecord: 9,
  Change: 12
}, b = {
  Document: 0,
  DocumentType: 1,
  Element: 2,
  Text: 3,
  CDATA: 4,
  DocumentFragment: 11
}, h = {
  AddString: 0,
  AddNode: 1,
  RemoveNode: 2,
  Attribute: 3,
  Text: 4,
  Size: 5,
  ScrollPosition: 6,
  AddStyleSheet: 7,
  AttachedStyleSheets: 8,
  MediaPlaybackState: 9,
  VisualViewport: 10
}, S = {
  Mutation: 0,
  MouseMove: 1,
  MouseInteraction: 2,
  Scroll: 3,
  ViewportResize: 4,
  Input: 5,
  TouchMove: 6,
  MediaInteraction: 7,
  StyleSheetRule: 8
  // CanvasMutation : 9,
  // Font : 10,
}, N = {
  MouseUp: 0,
  MouseDown: 1,
  Click: 2,
  ContextMenu: 3,
  DblClick: 4,
  Focus: 5,
  Blur: 6,
  TouchStart: 7,
  TouchEnd: 9
}, x = {
  Play: 0,
  Pause: 1
};
function et(e) {
  return tt(void 0, void 0, e);
}
function tt(e, t, n) {
  let o = {
    container: void 0,
    parentId: e,
    previousSiblingId: void 0,
    nextSiblingId: t
  };
  const s = (i) => o.previousSiblingId === i - 1 ? 0 : o.nextSiblingId !== void 0 ? o.nextSiblingId - i : o.parentId !== void 0 ? i - o.parentId : null;
  return {
    advance(i) {
      const r = n.getOrInsert(i), a = s(r);
      return o.previousSiblingId = r, { nodeId: r, insertionPoint: a };
    },
    ascend() {
      o.container && (o = o.container);
    },
    descend() {
      o.previousSiblingId !== void 0 && (o = {
        container: o,
        parentId: o.previousSiblingId,
        previousSiblingId: void 0,
        nextSiblingId: void 0
      });
    }
  };
}
function H(e, t) {
  const n = e.tagName, o = e.value;
  if (D(e, t)) {
    const s = e.type;
    return n === "INPUT" && (s === "button" || s === "submit" || s === "reset") ? o : !o || n === "OPTION" ? void 0 : Z;
  }
  if (n === "OPTION" || n === "SELECT")
    return e.value;
  if (!(n !== "INPUT" && n !== "TEXTAREA"))
    return o;
}
const nt = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm, ot = /^[A-Za-z]+:|^\/\//, st = /^["']?data:.*,/i;
function it(e, t) {
  return e.replace(nt, (n, o, s, i, r, a) => {
    const u = s || r || a;
    if (!t || !u || ot.test(u) || st.test(u))
      return n;
    const c = o || i || "";
    return `url(${c}${rt(u, t)}${c})`;
  });
}
function rt(e, t) {
  try {
    return Me(e, t).href;
  } catch {
    return e;
  }
}
const at = /[^a-z1-6-_]/;
function ut(e) {
  const t = e.toLowerCase().trim();
  return at.test(t) ? "div" : t;
}
function ae(e) {
  return e.tagName.toLowerCase();
}
function W(e, t) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}' style='background-color:silver'%3E%3C/svg%3E`;
}
function ue(e, t) {
  if (e === void 0 || e.length === 0)
    return;
  const n = (s) => {
    const i = s.cssRules || s.rules, r = Array.from(i, (u) => u.cssText);
    return t.addMetric("cssText", r.reduce((u, c) => u + c.length, 0)), {
      cssRules: r,
      disabled: s.disabled || void 0,
      media: s.media.length > 0 ? Array.from(s.media) : void 0
    };
  }, o = [];
  for (let s = 0; s < e.length; s++)
    o.push(n(e[s]));
  return o;
}
const ct = 1e6;
function ce(e, t, n, o) {
  if (t === g.HIDDEN)
    return null;
  const s = e.getAttribute(n), i = e.tagName;
  if (ve(i, n, s, t, o)) {
    if (i === "IMG") {
      const r = e;
      if (r.naturalWidth > 0)
        return W(r.naturalWidth, r.naturalHeight);
      const { width: a, height: u } = e.getBoundingClientRect();
      return a > 0 || u > 0 ? W(a, u) : X;
    }
    return i === "SOURCE" ? X : Z;
  }
  return s && Re(s, ct);
}
function dt(e, t, n) {
  return {
    ...de(e, t, n),
    ...le(e, t, n)
  };
}
function de(e, t, n) {
  if (t === g.HIDDEN)
    return {};
  const o = {}, s = ae(e);
  for (let r = 0; r < e.attributes.length; r += 1) {
    const u = e.attributes.item(r).name, c = ce(e, t, u, n.scope.configuration);
    c !== null && (o[u] = c);
  }
  if (e.value && (s === "textarea" || s === "select" || s === "option" || s === "input")) {
    const r = H(e, t);
    r !== void 0 && (o.value = r);
  }
  if (s === "option") {
    const r = e;
    r.selected && !D(r, t) ? o.selected = "" : delete o.selected;
  }
  const i = e;
  return s === "input" && (i.type === "radio" || i.type === "checkbox") && (i.checked && !D(i, t) ? o.checked = "" : delete o.checked), o;
}
function le(e, t, n) {
  if (t === g.HIDDEN)
    return {};
  const o = {}, s = e.ownerDocument, i = ae(e);
  if (i === "link") {
    const u = Array.from(s.styleSheets).find((l) => l.href === e.href), c = z(u);
    c && u && (n.addMetric("cssText", c.length), o._cssText = c);
  }
  if (i === "style" && e.sheet) {
    const u = z(e.sheet);
    u && (n.addMetric("cssText", u.length), o._cssText = u);
  }
  if (i === "audio" || i === "video") {
    const u = e;
    o.rr_mediaState = u.paused ? "paused" : "played";
  }
  let r, a;
  switch (n.kind) {
    case 0:
      r = Math.round(e.scrollTop), a = Math.round(e.scrollLeft), (r || a) && n.scope.elementsScrollPositions.set(e, { scrollTop: r, scrollLeft: a });
      break;
    case 1:
      n.scope.elementsScrollPositions.has(e) && ({ scrollTop: r, scrollLeft: a } = n.scope.elementsScrollPositions.get(e));
      break;
  }
  return a && (o.rr_scrollLeft = a), r && (o.rr_scrollTop = r), o;
}
function z(e) {
  if (!e)
    return null;
  let t;
  try {
    t = e.rules || e.cssRules;
  } catch {
  }
  if (!t)
    return null;
  const n = Array.from(t, _e() ? lt : fe).join("");
  return it(n, e.href);
}
function lt(e) {
  if (pt(e) && e.selectorText.includes(":")) {
    const t = /(\[[\w-]+[^\\])(:[^\]]+\])/g;
    return e.cssText.replace(t, "$1\\$2");
  }
  return fe(e);
}
function fe(e) {
  return ft(e) && z(e.styleSheet) || e.cssText;
}
function ft(e) {
  return "styleSheet" in e;
}
function pt(e) {
  return "selectorText" in e;
}
function B(e, t, n) {
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return ht(e, t, n);
    case e.DOCUMENT_FRAGMENT_NODE:
      return gt(e, t, n);
    case e.DOCUMENT_TYPE_NODE:
      return St(e, n);
    case e.ELEMENT_NODE:
      return mt(e, t, n);
    case e.TEXT_NODE:
      return Nt(e, t, n);
    case e.CDATA_SECTION_NODE:
      return Tt(e, n);
    default:
      return null;
  }
}
function G(e, t, n) {
  const o = [];
  return k(e, (s) => {
    const i = B(s, t, n);
    i && o.push(i);
  }), o;
}
function ht(e, t, n) {
  return {
    type: b.Document,
    id: n.assignId(e),
    childNodes: G(e, t, n),
    adoptedStyleSheets: ue(e.adoptedStyleSheets, n)
  };
}
function gt(e, t, n) {
  const o = P(e);
  return o && n.scope.shadowRootsController.addShadowRoot(e, n.scope), {
    type: b.DocumentFragment,
    id: n.assignId(e),
    childNodes: G(e, t, n),
    isShadowRoot: o,
    adoptedStyleSheets: o ? ue(e.adoptedStyleSheets, n) : void 0
  };
}
function St(e, t) {
  return {
    type: b.DocumentType,
    id: t.assignId(e),
    name: e.name,
    publicId: e.publicId,
    systemId: e.systemId
  };
}
function mt(e, t, n) {
  const o = ut(e.tagName), s = Et(e) || void 0, i = Q(ee(e), t);
  if (i === g.HIDDEN) {
    const { width: c, height: l } = e.getBoundingClientRect();
    return {
      type: b.Element,
      id: n.assignId(e),
      tagName: o,
      attributes: {
        rr_width: `${c}px`,
        rr_height: `${l}px`,
        [ne]: te
      },
      childNodes: [],
      isSVG: s
    };
  }
  if (i === g.IGNORE)
    return null;
  const r = n.assignId(e), a = dt(e, i, n);
  let u = [];
  return De(e) && // Do not serialize style children as the css rules are already in the _cssText attribute
  o !== "style" && (u = G(e, i, n)), {
    type: b.Element,
    id: r,
    tagName: o,
    attributes: a,
    childNodes: u,
    isSVG: s
  };
}
function Et(e) {
  return e.tagName === "svg" || e instanceof SVGElement;
}
function Nt(e, t, n) {
  const o = L(e, t);
  return o === void 0 ? null : {
    type: b.Text,
    id: n.assignId(e),
    textContent: o
  };
}
function Tt(e, t) {
  return {
    type: b.CDATA,
    id: t.assignId(e),
    textContent: ""
  };
}
function yt(e, t) {
  const n = t.scope.configuration.defaultPrivacyLevel;
  return B(e, n, t);
}
function pe(e, t, n, o) {
  let s;
  const i = ee(t);
  if (i ? s = Q(i, n) : s = n, s === g.HIDDEN) {
    Rt(e, t, o);
    return;
  }
  if (s !== g.IGNORE) {
    switch (t.nodeType) {
      case t.CDATA_SECTION_NODE:
        vt(e, t, o);
        break;
      case t.DOCUMENT_NODE:
        It(e, t, o);
        break;
      case t.DOCUMENT_FRAGMENT_NODE:
        Ct(e, t, o);
        break;
      case t.DOCUMENT_TYPE_NODE:
        bt(e, t, o);
        break;
      case t.ELEMENT_NODE:
        wt(e, t, s, o);
        break;
      case t.TEXT_NODE:
        Mt(e, t, s, o);
        break;
      default:
        return;
    }
    switch (t.nodeType) {
      case t.CDATA_SECTION_NODE:
      case t.DOCUMENT_TYPE_NODE:
      case t.TEXT_NODE:
        return;
    }
    t.nodeName !== "STYLE" && (e.descend(), k(t, (r) => {
      pe(e, r, s, o);
    }), e.ascend());
  }
}
function It(e, t, n) {
  const { nodeId: o, insertionPoint: s } = e.advance(t);
  n.addNode(s, "#document"), n.setScrollPosition(o, V(), F()), he(t.adoptedStyleSheets, o, n);
}
function Ct(e, t, n) {
  const { nodeId: o, insertionPoint: s } = e.advance(t);
  if (!P(t)) {
    n.addNode(s, "#document-fragment");
    return;
  }
  n.addNode(s, "#shadow-root"), n.scope.shadowRootsController.addShadowRoot(t, n.scope), he(t.adoptedStyleSheets, o, n);
}
function bt(e, t, n) {
  const { insertionPoint: o } = e.advance(t);
  n.addNode(o, "#doctype", t.name, t.publicId, t.systemId);
}
function wt(e, t, n, o) {
  const { nodeId: s, insertionPoint: i } = e.advance(t), r = Object.entries(de(t, n, o));
  o.addNode(i, ge(t), ...r);
  const { _cssText: a, rr_mediaState: u, rr_scrollLeft: c, rr_scrollTop: l } = le(t, n, o), d = t;
  if (a !== void 0 && d.sheet) {
    const f = o.scope.styleSheetIds.getOrInsert(d.sheet);
    o.addStyleSheet(a), o.attachStyleSheets(s, [f]);
  }
  u === "played" ? o.setMediaPlaybackState(s, x.Play) : u === "paused" && o.setMediaPlaybackState(s, x.Pause), (c !== void 0 || l !== void 0) && o.setScrollPosition(s, c || 0, l || 0);
}
function Mt(e, t, n, o) {
  const s = L(t, n);
  if (s === void 0)
    return;
  const { insertionPoint: i } = e.advance(t);
  o.addNode(i, "#text", s);
}
function vt(e, t, n) {
  const { insertionPoint: o } = e.advance(t);
  n.addNode(o, "#cdata-section");
}
function Rt(e, t, n) {
  if (!xe(t))
    return;
  const { nodeId: o, insertionPoint: s } = e.advance(t);
  n.addNode(s, ge(t), [ne, te]);
  const { width: i, height: r } = t.getBoundingClientRect();
  n.setSize(o, i, r);
}
function he(e, t, n) {
  !e || e.length === 0 || n.attachStyleSheets(t, e.map((o) => _t(o, n)));
}
function _t(e, t) {
  const n = Array.from(e.cssRules || e.rules, (s) => s.cssText), o = e.media.length > 0 ? Array.from(e.media) : void 0;
  return t.addMetric("cssText", n.reduce((s, i) => s + i.length, 0)), t.addStyleSheet(n, o, e.disabled), t.scope.styleSheetIds.getOrInsert(e);
}
function ge(e) {
  const t = e.nodeName;
  return Dt(e) ? `svg>${t}` : t;
}
function Dt(e) {
  return e.namespaceURI === "http://www.w3.org/2000/svg";
}
function Y() {
  return {
    cssText: {
      count: 0,
      max: 0,
      sum: 0
    },
    serializationDuration: {
      count: 0,
      max: 0,
      sum: 0
    }
  };
}
function A(e, t, n) {
  e[t].count += 1, e[t].max = Math.max(e[t].max, n), e[t].sum += n;
}
function xt(e, t) {
  for (const n of ["cssText", "serializationDuration"])
    e[n].count += t[n].count, e[n].max = Math.max(e[n].max, t[n].max), e[n].sum += t[n].sum;
}
function At(e) {
  let t = {};
  const n = (i) => {
    for (let r = 0, a = i.length; r < a; r++) {
      const u = i[r];
      if (typeof u == "string") {
        const c = e.size;
        i[r] = e.getOrInsert(u), e.size > c && o(h.AddString, u);
      } else Array.isArray(u) && n(u);
    }
  }, o = (i, r) => {
    i in t || (t[i] = [i]), i !== h.AddString && Array.isArray(r) && n(r), t[i].push(r);
  };
  return { add: o, flush: () => {
    const i = [];
    return [
      h.AddString,
      h.AddNode,
      h.RemoveNode,
      h.Attribute,
      h.Text,
      h.Size,
      h.ScrollPosition,
      h.AddStyleSheet,
      h.AttachedStyleSheets,
      h.MediaPlaybackState,
      h.VisualViewport
    ].forEach((r) => {
      const a = t[r];
      a && i.push(a);
    }), t = {}, i;
  } };
}
function Se(e, t, n, o, s) {
  const i = [], r = Y(), a = {
    add(c) {
      i.push(c);
    },
    addMetric(c, l) {
      A(r, c, l);
    },
    assignId(c) {
      const l = o.nodeIds.getOrInsert(c);
      return a.serializedNodeIds && a.serializedNodeIds.add(l), l;
    },
    kind: e,
    scope: o
  }, u = y();
  s(a), A(r, "serializationDuration", oe(u, y()));
  for (const c of i)
    t(c);
  n(r);
}
function Ot(e, t, n, o, s, i) {
  const r = At(o.stringIds), a = Y(), u = {
    addMetric(d, f) {
      A(a, d, f);
    },
    addNode(...d) {
      r.add(h.AddNode, d);
    },
    addStyleSheet(d, f, p) {
      p ? r.add(h.AddStyleSheet, [d, f || [], p]) : f ? r.add(h.AddStyleSheet, [d, f]) : r.add(h.AddStyleSheet, [d]);
    },
    attachStyleSheets(d, f) {
      const p = [d];
      for (const E of f)
        p.push(E);
      r.add(h.AttachedStyleSheets, p);
    },
    setMediaPlaybackState(d, f) {
      r.add(h.MediaPlaybackState, [d, f]);
    },
    setScrollPosition(d, f, p) {
      r.add(h.ScrollPosition, [d, f, p]);
    },
    setSize(d, f, p) {
      r.add(h.Size, [d, f, p]);
    },
    kind: e,
    scope: o
  }, c = y();
  i(u), A(a, "serializationDuration", oe(c, y()));
  const l = r.flush();
  l.length > 0 && t({
    data: l,
    type: m.Change,
    timestamp: s
  }), n(a);
}
const q = 25;
function zt(e) {
  return Math.abs(e.pageTop - e.offsetTop - window.scrollY) > q || Math.abs(e.pageLeft - e.offsetLeft - window.scrollX) > q;
}
const Lt = (e, t) => {
  const n = window.visualViewport, o = {
    layoutViewportX: e,
    layoutViewportY: t,
    visualViewportX: e,
    visualViewportY: t
  };
  if (n)
    zt(n) ? (o.layoutViewportX = Math.round(e + n.offsetLeft), o.layoutViewportY = Math.round(t + n.offsetTop)) : (o.visualViewportX = Math.round(e - n.offsetLeft), o.visualViewportY = Math.round(t - n.offsetTop));
  else return o;
  return o;
}, me = (e) => ({
  scale: e.scale,
  offsetLeft: e.offsetLeft,
  offsetTop: e.offsetTop,
  pageLeft: e.pageLeft,
  pageTop: e.pageTop,
  height: e.height,
  width: e.width
});
function Pt(e, t, n, o, s) {
  J(y(), 0, t, n, s);
  const { unsubscribe: i } = e.subscribe(2, (r) => {
    o(), J(r.startClocks.timeStamp, 1, t, n, s);
  });
  return {
    stop: i
  };
}
function J(e, t, n, o, s) {
  const { width: i, height: r } = Ae();
  n({
    data: {
      height: r,
      href: window.location.href,
      width: i
    },
    type: m.Meta,
    timestamp: e
  }), n({
    data: {
      has_focus: document.hasFocus()
    },
    type: m.Focus,
    timestamp: e
  }), se(ie.USE_CHANGE_RECORDS) ? (t === 1 && s.resetIds(), Ot(t, n, o, s, e, (a) => {
    pe(et(s.nodeIds), document, s.configuration.defaultPrivacyLevel, a);
  })) : Se(t, n, o, s, (a) => {
    a.add(kt(e, a));
  }), window.visualViewport && n({
    data: me(window.visualViewport),
    type: m.VisualViewport,
    timestamp: e
  });
}
function kt(e, t) {
  return {
    data: {
      node: yt(document, t),
      initialOffset: {
        left: V(),
        top: F()
      }
    },
    type: m.FullSnapshot,
    timestamp: e
  };
}
function Vt() {
  return $(
    1
    /* EventIdConstants.FIRST_ID */
  );
}
function Ft() {
  return $(
    0
    /* NodeIdConstants.FIRST_ID */
  );
}
function Ut() {
  return Bt(
    0
    /* StringIdConstants.FIRST_ID */
  );
}
function Ht() {
  return $(
    0
    /* StyleSheetIdConstants.FIRST_ID */
  );
}
function Bt(e) {
  return Ee(() => /* @__PURE__ */ new Map(), e);
}
function $(e) {
  return Ee(() => /* @__PURE__ */ new WeakMap(), e);
}
function Ee(e, t) {
  let n = e(), o = t;
  const s = (i) => n.get(i);
  return {
    clear() {
      n = e(), o = t;
    },
    get: s,
    getOrInsert(i) {
      let r = s(i);
      return r === void 0 && (r = o++, n.set(i, r)), r;
    },
    get size() {
      return o - t;
    }
  };
}
function Gt(e, t, n) {
  const o = Vt(), s = Ft(), i = Ut(), r = Ht();
  return {
    resetIds() {
      o.clear(), s.clear(), i.clear(), r.clear();
    },
    configuration: e,
    elementsScrollPositions: t,
    eventIds: o,
    nodeIds: s,
    shadowRootsController: n,
    stringIds: i,
    styleSheetIds: r
  };
}
function Yt() {
  const e = /* @__PURE__ */ new WeakMap();
  return {
    set(t, n) {
      t === document && !document.scrollingElement || e.set(t === document ? document.scrollingElement : t, n);
    },
    get(t) {
      return e.get(t);
    },
    has(t) {
      return e.has(t);
    }
  };
}
function Ne(e) {
  return !!e.changedTouches;
}
function R(e) {
  return e.composed === !0 && re(e.target) ? e.composedPath()[0] : e.target;
}
function T(e, t) {
  return {
    data: {
      source: e,
      ...t
    },
    type: m.IncrementalSnapshot,
    timestamp: y()
  };
}
const $t = 50;
function Xt(e, t) {
  const { throttled: n, cancel: o } = O((i) => {
    const r = R(i), a = t.nodeIds.get(r);
    if (a === void 0)
      return;
    const u = Te(i);
    if (!u)
      return;
    const c = {
      id: a,
      timeOffset: 0,
      x: u.x,
      y: u.y
    };
    e(T(Ne(i) ? S.TouchMove : S.MouseMove, { positions: [c] }));
  }, $t, {
    trailing: !1
  }), { stop: s } = w(t.configuration, document, [
    "mousemove",
    "touchmove"
    /* DOM_EVENT.TOUCH_MOVE */
  ], n, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      s(), o();
    }
  };
}
function Te(e) {
  let { clientX: t, clientY: n } = Ne(e) ? e.changedTouches[0] : e;
  if (window.visualViewport) {
    const { visualViewportX: o, visualViewportY: s } = Lt(t, n);
    t = o, n = s;
  }
  if (!(!Number.isFinite(t) || !Number.isFinite(n)))
    return { x: t, y: n };
}
const K = {
  // Listen for pointerup DOM events instead of mouseup for MouseInteraction/MouseUp records. This
  // allows to reference such records from Frustration records.
  //
  // In the context of supporting Mobile Session Replay, we introduced `PointerInteraction` records
  // used by the Mobile SDKs in place of `MouseInteraction`. In the future, we should replace
  // `MouseInteraction` by `PointerInteraction` in the Browser SDK so we have an uniform way to
  // convey such interaction. This would cleanly solve the issue since we would have
  // `PointerInteraction/Up` records that we could reference from `Frustration` records.
  pointerup: N.MouseUp,
  mousedown: N.MouseDown,
  click: N.Click,
  contextmenu: N.ContextMenu,
  dblclick: N.DblClick,
  focus: N.Focus,
  blur: N.Blur,
  touchstart: N.TouchStart,
  touchend: N.TouchEnd
};
function Wt(e, t) {
  const n = (o) => {
    const s = R(o), i = t.nodeIds.get(s);
    if (i === void 0 || I(s, t.configuration.defaultPrivacyLevel) === g.HIDDEN)
      return;
    const r = K[o.type];
    let a;
    if (r !== N.Blur && r !== N.Focus) {
      const u = Te(o);
      if (!u)
        return;
      a = { id: i, type: r, x: u.x, y: u.y };
    } else
      a = { id: i, type: r };
    e({
      id: t.eventIds.getOrInsert(o),
      ...T(S.MouseInteraction, a)
    });
  };
  return w(t.configuration, document, Object.keys(K), n, {
    capture: !0,
    passive: !0
  });
}
const qt = 100;
function ye(e, t, n) {
  const { throttled: o, cancel: s } = O((r) => {
    const a = R(r);
    if (!a)
      return;
    const u = n.nodeIds.get(a);
    if (u === void 0 || I(a, n.configuration.defaultPrivacyLevel) === g.HIDDEN)
      return;
    const c = a === document ? {
      scrollTop: F(),
      scrollLeft: V()
    } : {
      scrollTop: Math.round(a.scrollTop),
      scrollLeft: Math.round(a.scrollLeft)
    };
    n.elementsScrollPositions.set(a, c), t(T(S.Scroll, {
      id: u,
      x: c.scrollLeft,
      y: c.scrollTop
    }));
  }, qt), { stop: i } = Oe(n.configuration, e, "scroll", o, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      i(), s();
    }
  };
}
const Jt = 200;
function Kt(e, t) {
  const n = ze(t.configuration).subscribe((o) => {
    e(T(S.ViewportResize, o));
  });
  return {
    stop: () => {
      n.unsubscribe();
    }
  };
}
function jt(e, t) {
  const n = window.visualViewport;
  if (!n)
    return { stop: C };
  const { throttled: o, cancel: s } = O(() => {
    e({
      data: me(n),
      type: m.VisualViewport,
      timestamp: y()
    });
  }, Jt, {
    trailing: !1
  }), { stop: i } = w(t.configuration, n, [
    "resize",
    "scroll"
    /* DOM_EVENT.SCROLL */
  ], o, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      i(), s();
    }
  };
}
function Zt(e, t) {
  return w(t.configuration, document, [
    "play",
    "pause"
    /* DOM_EVENT.PAUSE */
  ], (n) => {
    const o = R(n);
    if (!o)
      return;
    const s = t.nodeIds.get(o);
    s === void 0 || I(o, t.configuration.defaultPrivacyLevel) === g.HIDDEN || e(T(S.MediaInteraction, {
      id: s,
      type: n.type === "play" ? x.Play : x.Pause
    }));
  }, {
    capture: !0,
    passive: !0
  });
}
function Qt(e, t) {
  function n(i, r) {
    if (!i || !i.ownerNode)
      return;
    const a = t.nodeIds.get(i.ownerNode);
    a !== void 0 && r(a);
  }
  const o = [
    _(CSSStyleSheet.prototype, "insertRule", ({ target: i, parameters: [r, a] }) => {
      n(i, (u) => e(T(S.StyleSheetRule, {
        id: u,
        adds: [{ rule: r, index: a }]
      })));
    }),
    _(CSSStyleSheet.prototype, "deleteRule", ({ target: i, parameters: [r] }) => {
      n(i, (a) => e(T(S.StyleSheetRule, {
        id: a,
        removes: [{ index: r }]
      })));
    })
  ];
  typeof CSSGroupingRule < "u" ? s(CSSGroupingRule) : (s(CSSMediaRule), s(CSSSupportsRule));
  function s(i) {
    o.push(_(i.prototype, "insertRule", ({ target: r, parameters: [a, u] }) => {
      n(r.parentStyleSheet, (c) => {
        const l = j(r);
        l && (l.push(u || 0), e(T(S.StyleSheetRule, {
          id: c,
          adds: [{ rule: a, index: l }]
        })));
      });
    }), _(i.prototype, "deleteRule", ({ target: r, parameters: [a] }) => {
      n(r.parentStyleSheet, (u) => {
        const c = j(r);
        c && (c.push(a), e(T(S.StyleSheetRule, {
          id: u,
          removes: [{ index: c }]
        })));
      });
    }));
  }
  return {
    stop: () => {
      o.forEach((i) => i.stop());
    }
  };
}
function j(e) {
  const t = [];
  let n = e;
  for (; n.parentRule; ) {
    const r = Array.from(n.parentRule.cssRules).indexOf(n);
    t.unshift(r), n = n.parentRule;
  }
  if (!n.parentStyleSheet)
    return;
  const s = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
  return t.unshift(s), t;
}
function en(e, t) {
  return w(t.configuration, window, [
    "focus",
    "blur"
    /* DOM_EVENT.BLUR */
  ], () => {
    e({
      data: { has_focus: document.hasFocus() },
      type: m.Focus,
      timestamp: y()
    });
  });
}
function tn(e, t, n) {
  const o = e.subscribe(12, (s) => {
    var i, r;
    s.rawRumEvent.type === Le.ACTION && s.rawRumEvent.action.type === Pe.CLICK && (!((r = (i = s.rawRumEvent.action.frustration) === null || i === void 0 ? void 0 : i.type) === null || r === void 0) && r.length) && "events" in s.domainContext && s.domainContext.events && s.domainContext.events.length && t({
      timestamp: s.rawRumEvent.date,
      type: m.FrustrationRecord,
      data: {
        frustrationTypes: s.rawRumEvent.action.frustration.type,
        recordIds: s.domainContext.events.map((a) => n.eventIds.getOrInsert(a))
      }
    });
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function nn(e, t, n) {
  const o = e.subscribe(5, () => {
    n(), t({
      timestamp: y(),
      type: m.ViewEnd
    });
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function Ie(e, t, n) {
  const o = n.configuration.defaultPrivacyLevel, s = /* @__PURE__ */ new WeakMap(), i = e !== document, { stop: r } = w(
    n.configuration,
    e,
    // The 'input' event bubbles across shadow roots, so we don't have to listen for it on shadow
    // roots since it will be handled by the event listener that we did add to the document. Only
    // the 'change' event is blocked and needs to be handled on shadow roots.
    i ? [
      "change"
      /* DOM_EVENT.CHANGE */
    ] : [
      "input",
      "change"
      /* DOM_EVENT.CHANGE */
    ],
    (l) => {
      const d = R(l);
      (d instanceof HTMLInputElement || d instanceof HTMLTextAreaElement || d instanceof HTMLSelectElement) && u(d);
    },
    {
      capture: !0,
      passive: !0
    }
  );
  let a;
  if (i)
    a = C;
  else {
    const l = [
      v(HTMLInputElement.prototype, "value", u),
      v(HTMLInputElement.prototype, "checked", u),
      v(HTMLSelectElement.prototype, "value", u),
      v(HTMLTextAreaElement.prototype, "value", u),
      v(HTMLSelectElement.prototype, "selectedIndex", u)
    ];
    a = () => {
      l.forEach((d) => d.stop());
    };
  }
  return {
    stop: () => {
      a(), r();
    }
  };
  function u(l) {
    const d = I(l, o);
    if (d === g.HIDDEN)
      return;
    const f = l.type;
    let p;
    if (f === "radio" || f === "checkbox") {
      if (D(l, d))
        return;
      p = { isChecked: l.checked };
    } else {
      const M = H(l, d);
      if (M === void 0)
        return;
      p = { text: M };
    }
    c(l, p);
    const E = l.name;
    f === "radio" && E && l.checked && document.querySelectorAll(`input[type="radio"][name="${CSS.escape(E)}"]`).forEach((M) => {
      M !== l && c(M, { isChecked: !1 });
    });
  }
  function c(l, d) {
    const f = n.nodeIds.get(l);
    if (f === void 0)
      return;
    const p = s.get(l);
    (!p || p.text !== d.text || p.isChecked !== d.isChecked) && (s.set(l, d), t(T(S.Input, {
      id: f,
      ...d
    })));
  }
}
const on = 100, sn = 16;
function rn(e) {
  let t = C, n = [];
  function o() {
    t(), e(n), n = [];
  }
  const { throttled: s, cancel: i } = O(o, sn, {
    leading: !1
  });
  return {
    addMutations: (r) => {
      n.length === 0 && (t = ke(s, { timeout: on })), n.push(...r);
    },
    flush: o,
    stop: () => {
      t(), i();
    }
  };
}
function Ce(e, t, n, o) {
  const s = Ve();
  if (!s)
    return { stop: C, flush: C };
  const i = rn((a) => {
    Se(2, t, n, o, (u) => an(a.concat(r.takeRecords()), u));
  }), r = new s(Fe(i.addMutations));
  return r.observe(e, {
    attributeOldValue: !0,
    attributes: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), {
    stop: () => {
      r.disconnect(), i.stop();
    },
    flush: () => {
      i.flush();
    }
  };
}
function an(e, t) {
  const n = /* @__PURE__ */ new Map();
  e.filter((c) => c.type === "childList").forEach((c) => {
    c.removedNodes.forEach((l) => {
      be(l, t.scope.shadowRootsController.removeShadowRoot);
    });
  });
  const o = e.filter((c) => c.target.isConnected && fn(c.target, t.scope.nodeIds) && I(c.target, t.scope.configuration.defaultPrivacyLevel, n) !== g.HIDDEN), { adds: s, removes: i, hasBeenSerialized: r } = un(o.filter((c) => c.type === "childList"), n, t), a = cn(o.filter((c) => c.type === "characterData" && !r(c.target)), n, t), u = dn(o.filter((c) => c.type === "attributes" && !r(c.target)), n, t);
  !a.length && !u.length && !i.length && !s.length || t.add(T(S.Mutation, {
    adds: s,
    removes: i,
    texts: a,
    attributes: u
  }));
}
function un(e, t, n) {
  const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  for (const l of e)
    l.addedNodes.forEach((d) => {
      o.add(d);
    }), l.removedNodes.forEach((d) => {
      o.has(d) || s.set(d, l.target), o.delete(d);
    });
  const i = Array.from(o);
  ln(i), n.serializedNodeIds = /* @__PURE__ */ new Set();
  const r = [];
  for (const l of i) {
    if (u(l))
      continue;
    const d = I(l.parentNode, n.scope.configuration.defaultPrivacyLevel, t);
    if (d === g.HIDDEN || d === g.IGNORE)
      continue;
    const f = B(l, d, n);
    if (!f)
      continue;
    const p = U(l);
    r.push({
      nextId: c(l),
      parentId: n.scope.nodeIds.get(p),
      node: f
    });
  }
  const a = [];
  return s.forEach((l, d) => {
    const f = n.scope.nodeIds.get(l), p = n.scope.nodeIds.get(d);
    f !== void 0 && p !== void 0 && a.push({ parentId: f, id: p });
  }), { adds: r, removes: a, hasBeenSerialized: u };
  function u(l) {
    var d;
    const f = n.scope.nodeIds.get(l);
    return f !== void 0 && ((d = n.serializedNodeIds) === null || d === void 0 ? void 0 : d.has(f));
  }
  function c(l) {
    let d = l.nextSibling;
    for (; d; ) {
      const f = n.scope.nodeIds.get(d);
      if (f !== void 0)
        return f;
      d = d.nextSibling;
    }
    return null;
  }
}
function cn(e, t, n) {
  var o;
  const s = [], i = /* @__PURE__ */ new Set(), r = e.filter((a) => i.has(a.target) ? !1 : (i.add(a.target), !0));
  for (const a of r) {
    if (a.target.textContent === a.oldValue)
      continue;
    const c = n.scope.nodeIds.get(a.target);
    if (c === void 0)
      continue;
    const l = I(U(a.target), n.scope.configuration.defaultPrivacyLevel, t);
    l === g.HIDDEN || l === g.IGNORE || s.push({
      id: c,
      value: (o = L(a.target, l)) !== null && o !== void 0 ? o : null
    });
  }
  return s;
}
function dn(e, t, n) {
  const o = [], s = /* @__PURE__ */ new Map(), i = e.filter((a) => {
    const u = s.get(a.target);
    return u && u.has(a.attributeName) ? !1 : (u ? u.add(a.attributeName) : s.set(a.target, /* @__PURE__ */ new Set([a.attributeName])), !0);
  }), r = /* @__PURE__ */ new Map();
  for (const a of i) {
    if (a.target.getAttribute(a.attributeName) === a.oldValue)
      continue;
    const c = n.scope.nodeIds.get(a.target);
    if (c === void 0)
      continue;
    const l = I(a.target, n.scope.configuration.defaultPrivacyLevel, t), d = ce(a.target, l, a.attributeName, n.scope.configuration);
    let f;
    if (a.attributeName === "value") {
      const E = H(a.target, l);
      if (E === void 0)
        continue;
      f = E;
    } else typeof d == "string" ? f = d : f = null;
    let p = r.get(a.target);
    p || (p = { id: c, attributes: {} }, o.push(p), r.set(a.target, p)), p.attributes[a.attributeName] = f;
  }
  return o;
}
function ln(e) {
  e.sort((t, n) => {
    const o = t.compareDocumentPosition(n);
    return o & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : o & Node.DOCUMENT_POSITION_CONTAINS || o & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : o & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
  });
}
function be(e, t) {
  re(e) && t(e.shadowRoot), k(e, (n) => be(n, t));
}
function fn(e, t) {
  let n = e;
  for (; n; ) {
    if (t.get(n) === void 0 && !P(n))
      return !1;
    n = U(n);
  }
  return !0;
}
const pn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return {
    addShadowRoot: (s, i) => {
      if (n.has(s))
        return;
      const r = Ce(s, e, t, i), a = Ie(s, e, i), u = ye(s, e, i);
      n.set(s, {
        flush: () => r.flush(),
        stop: () => {
          r.stop(), a.stop(), u.stop();
        }
      });
    },
    removeShadowRoot: (s) => {
      const i = n.get(s);
      i && (i.stop(), n.delete(s));
    },
    stop: () => {
      n.forEach(({ stop: s }) => s());
    },
    flush: () => {
      n.forEach(({ flush: s }) => s());
    }
  };
};
function hn(e) {
  const { emitRecord: t, emitStats: n, configuration: o, lifeCycle: s } = e;
  if (!t || !n)
    throw new Error("emit functions are required");
  const i = (f) => {
    t(f), Ue("record", { record: f });
    const p = e.viewHistory.findView();
    He(p.id);
  }, r = pn(i, n), a = Gt(o, Yt(), r), { stop: u } = Pt(s, i, n, c, a);
  function c() {
    r.flush(), l.flush();
  }
  const l = Ce(document, i, n, a), d = [
    l,
    Xt(i, a),
    Wt(i, a),
    ye(document, i, a),
    Kt(i, a),
    Ie(document, i, a),
    Zt(i, a),
    Qt(i, a),
    en(i, a),
    jt(i, a),
    tn(s, i, a),
    nn(s, i, c)
  ];
  return {
    stop: () => {
      r.stop(), d.forEach((f) => f.stop()), u();
    },
    flushMutations: c,
    shadowRootsController: r
  };
}
function gn(e, t, n, o) {
  const s = new FormData();
  s.append("segment", new Blob([e], {
    type: "application/octet-stream"
  }), `${t.session.id}-${t.start}`);
  const i = {
    raw_segment_size: o,
    compressed_segment_size: e.byteLength,
    ...t
  }, r = JSON.stringify(i);
  return s.append("event", new Blob([r], { type: "application/json" })), {
    data: s,
    bytesCount: e.byteLength,
    cssText: n.cssText,
    isFullSnapshot: t.index_in_view === 0,
    rawSize: o,
    recordCount: t.records_count,
    serializationDuration: n.serializationDuration
  };
}
function Sn({ context: e, creationReason: t, encoder: n }) {
  let o = 0;
  const s = e.view.id, i = Be(s), r = {
    start: 1 / 0,
    end: -1 / 0,
    creation_reason: t,
    records_count: 0,
    has_full_snapshot: !1,
    index_in_view: i,
    source: "browser",
    ...e
  }, a = Y();
  Ge(s);
  function u(d, f) {
    r.start = Math.min(r.start, d.timestamp), r.end = Math.max(r.end, d.timestamp), r.records_count += 1, r.has_full_snapshot || (r.has_full_snapshot = d.type === m.FullSnapshot || d.type === m.Change && r.index_in_view === 0);
    const p = n.isEmpty ? '{"records":[' : ",";
    n.write(p + JSON.stringify(d), (E) => {
      o += E, f(o);
    });
  }
  function c(d) {
    xt(a, d);
  }
  function l(d) {
    if (n.isEmpty)
      throw new Error("Empty segment flushed");
    n.write(`],${JSON.stringify(r).slice(1)}
`), n.finish((f) => {
      Ye(r.view.id, f.rawBytesCount), d(r, a, f);
    });
  }
  return { addRecord: u, addStats: c, flush: l };
}
const mn = 5 * qe;
let we = 6e4;
function En(e, t, n, o, s, i) {
  return Nn(e, () => Tn(t.applicationId, n, o), s, i);
}
function Nn(e, t, n, o) {
  let s = {
    status: 0,
    nextSegmentCreationReason: "init"
  };
  const { unsubscribe: i } = e.subscribe(2, () => {
    a("view_change");
  }), { unsubscribe: r } = e.subscribe(11, (u) => {
    a(u.reason);
  });
  function a(u) {
    s.status === 1 && (s.segment.flush((c, l, d) => {
      const f = gn(d.output, c, l, d.rawBytesCount);
      $e(u) ? n.sendOnExit(f) : n.send(f);
    }), Xe(s.expirationTimeoutId)), u !== "stop" ? s = {
      status: 0,
      nextSegmentCreationReason: u
    } : s = {
      status: 2
    };
  }
  return {
    addRecord: (u) => {
      if (s.status !== 2) {
        if (s.status === 0) {
          const c = t();
          if (!c)
            return;
          s = {
            status: 1,
            segment: Sn({ encoder: o, context: c, creationReason: s.nextSegmentCreationReason }),
            expirationTimeoutId: We(() => {
              a("segment_duration_limit");
            }, mn)
          };
        }
        s.segment.addRecord(u, (c) => {
          c > we && a("segment_bytes_limit");
        });
      }
    },
    addStats: (u) => {
      s.status === 1 && s.segment.addStats(u);
    },
    stop: () => {
      a("stop"), i(), r();
    }
  };
}
function Tn(e, t, n) {
  const o = t.findTrackedSession(), s = n.findView();
  if (!(!o || !s))
    return {
      application: {
        id: e
      },
      session: {
        id: o.id
      },
      view: {
        id: s.id
      }
    };
}
function yn(e, t) {
  if (!e.metricsEnabled)
    return { stop: C };
  const { unsubscribe: n } = t.subscribe((o) => {
    if (o.type === "failure" || o.type === "queue-full" || o.type === "success" && o.payload.isFullSnapshot) {
      const s = In(o.type, o.bandwidth, o.payload);
      Je("Segment network request metrics", { metrics: s });
    }
  });
  return {
    stop: n
  };
}
function In(e, t, n) {
  return {
    cssText: {
      count: n.cssText.count,
      max: n.cssText.max,
      sum: n.cssText.sum
    },
    encoding: {
      fullSnapshot: se(ie.USE_CHANGE_RECORDS) ? "change" : "v1",
      incrementalSnapshot: "v1"
    },
    isFullSnapshot: n.isFullSnapshot,
    ongoingRequests: {
      count: t.ongoingRequestCount,
      totalSize: t.ongoingByteCount
    },
    recordCount: n.recordCount,
    result: e,
    serializationDuration: {
      count: n.serializationDuration.count,
      max: n.serializationDuration.max,
      sum: n.serializationDuration.sum
    },
    size: {
      compressed: n.bytesCount,
      raw: n.rawSize
    }
  };
}
function Cn(e) {
  const t = Ke();
  return {
    addRecord: (n) => {
      const o = e.findView();
      t.send("record", n, o.id);
    }
  };
}
function wn(e, t, n, o, s, i, r) {
  const a = [], u = (p) => {
    e.notify(14, { error: p }), Qe("Error reported to customer", { "error.message": p.message });
  }, c = r || je([t.sessionReplayEndpointBuilder], u, we);
  let l, d;
  if (Ze())
    ({ addRecord: l } = Cn(o)), d = C;
  else {
    const p = En(e, t, n, o, c, s);
    l = p.addRecord, d = p.addStats, a.push(p.stop);
    const E = yn(i, c.observable);
    a.push(E.stop);
  }
  const { stop: f } = hn({
    emitRecord: l,
    emitStats: d,
    configuration: t,
    lifeCycle: e,
    viewHistory: o
  });
  return a.push(f), {
    stop: () => {
      a.forEach((p) => p());
    }
  };
}
export {
  wn as startRecording
};
//# sourceMappingURL=startRecording-DtvE5Wi2.js.map
