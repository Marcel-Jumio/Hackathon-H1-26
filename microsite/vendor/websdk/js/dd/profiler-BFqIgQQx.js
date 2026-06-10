import { c as H, j as D, o as x, a as C, b as q, d as G, e as _, g as X, f as J, s as K, h as N, i as Q, k as W, l as Y, m as Z } from "../index.BI4tfquX.js";
function $(e, s, o, i) {
  const p = (a) => {
    s.notify(14, { error: a }), C("Error reported to customer", { "error.message": a.message });
  }, d = H([e.profilingEndpointBuilder], p), c = o(i);
  return {
    async send({ event: a, ...E }) {
      const f = new FormData(), m = D(a);
      if (!m)
        throw new Error("Failed to serialize event");
      f.append("event", new Blob([m], { type: "application/json" }), "event.json");
      let n = m.length;
      for (const [v, k] of x(E)) {
        const w = D(k);
        if (!w)
          throw new Error("Failed to serialize attachment");
        const g = await ee(c, w);
        n += g.outputBytesCount, f.append(v, new Blob([g.output]), v);
      }
      d.send({
        data: f,
        bytesCount: n
      });
    }
  };
}
function ee(e, s) {
  return new Promise((o) => {
    e.write(s), e.finish((i) => {
      o(i);
    });
  });
}
function te(e) {
  let s = 0;
  for (const o of e)
    o.stackId !== void 0 && s++;
  return s;
}
const se = /\/(?![vV]\d{1,2}\/)([^/\d?]*\d+[^/?]*)/g;
function ne(e) {
  return e ? e.replace(se, "/?") : "/";
}
const O = (e, s) => e || ne(s);
function re(e, s, o) {
  const { ids: i, names: p } = oe(e.views), d = e.longTasks.map((a) => a.id).filter((a) => a !== void 0), c = { application: { id: s } };
  return o && (c.session = { id: o }), i.length && (c.view = { id: i, name: p }), d.length && (c.long_task = { id: d }), c;
}
function oe(e) {
  const s = { ids: [], names: [] };
  for (const o of e)
    s.ids.push(o.viewId), o.viewName && s.names.push(o.viewName);
  return s.names = Array.from(new Set(s.names)), s;
}
function ae(e, s, o) {
  return {
    event: ie(e, s, o),
    "wall-time.json": e
  };
}
function ie(e, s, o) {
  const i = q(s), p = re(e, s.applicationId, o), d = le(i);
  return {
    ...p,
    attachments: ["wall-time.json"],
    start: new Date(e.startClocks.timeStamp).toISOString(),
    end: new Date(e.endClocks.timeStamp).toISOString(),
    family: "chrome",
    runtime: "chrome",
    format: "json",
    version: 4,
    // Ingestion event version (not the version application tag)
    tags_profiler: d.join(","),
    _dd: {
      clock_drift: G()
    }
  };
}
function le(e) {
  return e.concat(["language:javascript", "runtime:chrome", "family:chrome", "host:browser"]);
}
const ue = {
  sampleIntervalMs: 10,
  // Sample stack trace every 10ms
  collectIntervalMs: 6e4,
  // Collect data every minute
  minProfileDurationMs: 5e3,
  // Require at least 5 seconds of profile data to reduce noise and cost
  minNumberOfSamples: 50
  // Require at least 50 samples (~500 ms) to report a profile to reduce noise and cost
};
function de(e, s, o, i, p, d, c, a = ue) {
  const E = $(
    e,
    s,
    d,
    6
    /* DeflateEncoderStreamId.PROFILING */
  );
  let f;
  const m = [];
  let n = { state: "stopped", stateReason: "initializing" };
  s.subscribe(9, () => {
    w("session-expired");
  }), s.subscribe(10, () => {
    n.state === "stopped" && n.stateReason === "session-expired" && v();
  });
  function v() {
    if (n.state === "running")
      return;
    const t = c.findView();
    f = t ? {
      startClocks: t.startClocks,
      viewId: t.id,
      viewName: O(t.name, document.location.pathname)
    } : void 0, m.push(_(e, window, "visibilitychange", A).stop, _(e, window, "beforeunload", B).stop), b();
  }
  function k() {
    w("stopped-by-user");
  }
  function w(t) {
    j(t), m.forEach((r) => r()), i.set({ status: "stopped", error_reason: void 0 });
  }
  function g(t) {
    if (t.state === "running")
      return {
        cleanupTasks: t.cleanupTasks
      };
    const r = [], u = s.subscribe(2, (l) => {
      const h = {
        viewId: l.id,
        // Note: `viewName` is only filled when users use manual view creation via `startView` method.
        viewName: O(l.name, document.location.pathname),
        startClocks: l.startClocks
      };
      y(h), f = h;
    });
    return r.push(u.unsubscribe), {
      cleanupTasks: r
    };
  }
  function b() {
    const t = X().Profiler;
    if (!t)
      throw i.set({ status: "error", error_reason: "not-supported-by-browser" }), new Error("RUM Profiler is not supported in this browser.");
    n.state === "running" && I(n);
    const { cleanupTasks: r } = g(n);
    let u;
    try {
      u = new t({
        sampleInterval: a.sampleIntervalMs,
        // Keep buffer size at 1.5 times of minimum required to collect data for a profiling instance
        maxBufferSize: Math.round(a.collectIntervalMs * 1.5 / a.sampleIntervalMs)
      });
    } catch (l) {
      l instanceof Error && l.message.includes("disabled by Document Policy") ? (J.warn("[DD_RUM] Profiler startup failed. Ensure your server includes the `Document-Policy: js-profiling` response header when serving HTML pages.", l), i.set({ status: "error", error_reason: "missing-document-policy-header" })) : i.set({ status: "error", error_reason: "unexpected-exception" });
      return;
    }
    i.set({ status: "running", error_reason: void 0 }), n = {
      state: "running",
      startClocks: N(),
      profiler: u,
      timeoutId: K(b, a.collectIntervalMs),
      views: [],
      cleanupTasks: r,
      longTasks: []
    }, y(f), u.addEventListener("samplebufferfull", T);
  }
  function I(t) {
    Q(t.timeoutId), t.profiler.removeEventListener("samplebufferfull", T);
    const { startClocks: r, views: u } = t;
    t.profiler.stop().then((l) => {
      const h = N(), P = W(r.timeStamp, h.timeStamp), S = p.findLongTasks(r.relative, P), U = P < a.minProfileDurationMs, z = te(l.samples) < a.minNumberOfSamples;
      S.length === 0 && (U || z) || R(
        // Enrich trace with time and instance data
        Object.assign(l, {
          startClocks: r,
          endClocks: h,
          clocksOrigin: Y(),
          longTasks: S,
          views: u,
          sampleInterval: a.sampleIntervalMs
        })
      );
    }).catch(Z);
  }
  function j(t) {
    if (n.state === "paused") {
      n = { state: "stopped", stateReason: t };
      return;
    }
    if (n.state !== "running")
      return;
    const r = n;
    n = { state: "stopped", stateReason: t }, r.cleanupTasks.forEach((u) => u()), I(r);
  }
  function M() {
    if (n.state !== "running")
      return;
    const t = n;
    n = { state: "paused" }, t.cleanupTasks.forEach((r) => r()), I(t);
  }
  function y(t) {
    n.state !== "running" || !t || n.views.push(t);
  }
  function R(t) {
    var r;
    const u = (r = o.findTrackedSession()) === null || r === void 0 ? void 0 : r.id, l = ae(t, e, u);
    E.send(l);
  }
  function T() {
    b();
  }
  function A() {
    document.visibilityState === "hidden" && n.state === "running" ? M() : document.visibilityState === "visible" && n.state === "paused" && b();
  }
  function B() {
    b();
  }
  function L() {
    return n.state === "stopped";
  }
  function V() {
    return n.state === "running";
  }
  function F() {
    return n.state === "paused";
  }
  return { start: v, stop: k, isStopped: L, isRunning: V, isPaused: F };
}
export {
  ue as DEFAULT_RUM_PROFILER_CONFIGURATION,
  de as createRumProfiler
};
//# sourceMappingURL=profiler-BFqIgQQx.js.map
