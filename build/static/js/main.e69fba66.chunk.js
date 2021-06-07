(this["webpackJsonprecord-store"] =
  this["webpackJsonprecord-store"] || []).push([
  [0],
  {
    94: function (e, t, r) {},
    95: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(110),
        c = r(0),
        n = r(74),
        s = r.n(n),
        i = r(116),
        d = r(76),
        o = r(106),
        j = r(3);
      var l = function () {
          return Object(j.jsx)("footer", {
            className: "container mx-auto py-2",
            children: Object(j.jsxs)(o.a, {
              fontSize: "xs",
              children: [new Date().getFullYear(), " Records"],
            }),
          });
        },
        u = r(107);
      var b = function () {
          return Object(j.jsx)("header", {
            className: "container mx-auto",
            children: Object(j.jsx)(u.a, { as: "h1", children: "Records" }),
          });
        },
        x = r(9),
        O = r.n(x),
        h = r(15),
        f = r(43),
        m = "http://localhost:8080/records",
        p = {
          index: function () {
            return f.a.get(m).json();
          },
          get: function (e) {
            return f.a.get("".concat(m, "/").concat(e)).json();
          },
          delete: function (e) {
            return f.a.delete("".concat(m, "/").concat(e));
          },
          create: function (e) {
            return f.a.post(m, { json: e }).json();
          },
          update: function (e, t) {
            return f.a.put("".concat(m, "/").concat(t), { json: e });
          },
        },
        v = r(42),
        g = r(108),
        y = r(117),
        w = r(114);
      var k = function (e) {
          var t = e.handler;
          return Object(j.jsxs)("form", {
            className: "flex flex-col gap-4 mb-4",
            onSubmit: t,
            children: [
              Object(j.jsxs)(v.a, {
                id: "artist",
                isRequired: !0,
                children: [
                  Object(j.jsx)(g.a, { children: "Artist" }),
                  Object(j.jsx)(y.a, { placeholder: "artist", name: "artist" }),
                ],
              }),
              Object(j.jsxs)(v.a, {
                id: "album",
                isRequired: !0,
                children: [
                  Object(j.jsx)(g.a, { children: "Album" }),
                  Object(j.jsx)(y.a, { placeholder: "Album", name: "album" }),
                ],
              }),
              Object(j.jsxs)(v.a, {
                id: "year",
                isRequired: !0,
                children: [
                  Object(j.jsx)(g.a, { children: "Year" }),
                  Object(j.jsx)(y.a, { placeholder: "year", name: "year" }),
                ],
              }),
              Object(j.jsx)(w.a, {
                colorScheme: "green",
                type: "submit",
                className: "max-w-xs",
                children: "Add Record",
              }),
            ],
          });
        },
        N = r(11),
        R = r(16),
        S = r(113),
        A = r(109),
        D = r(118),
        K = r(56),
        q = r(111);
      var z = function (e) {
        var t = e.value,
          r = e.recordKey,
          a = e.id,
          c = e.handler;
        return Object(j.jsxs)(q.a, {
          defaultValue: t,
          className: "flex gap-2 items-center text-purple-600",
          children: [
            Object(j.jsx)(q.c, {}),
            Object(j.jsx)(q.b, {
              size: "xs",
              "data-key": r,
              "data-id": a,
              onChange: c,
              onBlur: c,
            }),
          ],
        });
      };
      var C = function (e) {
          var t = e.records,
            r = Object(D.a)(function (e) {
              var t = e.payload,
                r = e.id;
              return p.update(t, r);
            }),
            a = Object(D.a)(function (e) {
              return p.delete(e);
            }),
            c = Object(K.b)();
          function n(e) {
            var a = Object(R.a)(
              Object(R.a)(
                {},
                t.find(function (t) {
                  return t.id === Number(e.target.dataset.id);
                })
              ),
              Object(N.a)({}, e.target.dataset.key, e.target.value)
            );
            r.mutate({ payload: a, id: e.target.dataset.id });
          }
          function s(e) {
            console.log(
              "Gonna delete the record with id " + e.target.dataset.id
            ),
              a.mutate(e.target.dataset.id, {
                onSuccess: (function () {
                  var e = Object(h.a)(
                    O.a.mark(function e() {
                      return O.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              console.log("OK"), c.invalidateQueries("records");
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              });
          }
          return Object(j.jsxs)(A.a, {
            variant: "simple",
            children: [
              Object(j.jsx)(A.b, {
                children: "Click on any data to edit \ud83d\udcdd it.",
              }),
              Object(j.jsx)(A.f, {
                children: Object(j.jsxs)(A.g, {
                  children: [
                    Object(j.jsx)(A.e, { children: "Artist" }),
                    Object(j.jsx)(A.e, { children: "Album" }),
                    Object(j.jsx)(A.e, { children: "Year" }),
                    Object(j.jsx)(A.e, {}),
                  ],
                }),
              }),
              Object(j.jsx)(A.c, {
                children: t.map(function (e) {
                  var t = e.id,
                    r = e.artist,
                    a = e.album,
                    c = e.year;
                  return Object(j.jsxs)(
                    A.g,
                    {
                      "data-id": t,
                      children: [
                        Object(j.jsx)(A.d, {
                          children: Object(j.jsx)(z, {
                            value: r,
                            handler: n,
                            recordKey: "artist",
                            id: t,
                          }),
                        }),
                        Object(j.jsx)(A.d, {
                          children: Object(j.jsx)(z, {
                            value: a,
                            handler: n,
                            recordKey: "album",
                            id: t,
                          }),
                        }),
                        Object(j.jsx)(A.d, {
                          children: Object(j.jsx)(z, {
                            value: c,
                            handler: n,
                            recordKey: "year",
                            id: t,
                          }),
                        }),
                        Object(j.jsx)(A.d, {
                          children: Object(j.jsx)(w.a, {
                            leftIcon: Object(j.jsx)(S.a, {}),
                            colorScheme: "teal",
                            variant: "solid",
                            size: "xs",
                            onClick: s,
                            "data-id": t,
                            children: "Delete \ud83d\udd25",
                          }),
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
            ],
          });
        },
        I = r(115),
        Q = (function () {
          var e = Object(h.a)(
            O.a.mark(function e() {
              return O.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), p.index();
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      var Y = function () {
          var e = Object(I.a)("records", Q),
            t = e.status,
            r = e.data,
            a = e.error,
            c = Object(D.a)(function (e) {
              return p.create(e);
            }),
            n = Object(K.b)();
          switch (t) {
            case "loading":
              return Object(j.jsx)(o.a, { children: "Loading..." });
            case "error":
              return Object(j.jsx)(o.a, {
                color: "tomato",
                children: a.message,
              });
            default:
              return Object(j.jsxs)("main", {
                className: "container mx-auto",
                children: [
                  Object(j.jsx)(C, { records: r }),
                  Object(j.jsx)(k, {
                    handler: function (e) {
                      e.preventDefault(),
                        c.mutate(Object.fromEntries(new FormData(e.target)), {
                          onSuccess: function () {
                            n.invalidateQueries("records");
                          },
                        });
                    },
                  }),
                ],
              });
          }
        },
        B = r(112),
        E = r(75),
        F = (r(94), new B.a());
      var J = function () {
        return Object(j.jsx)(i.a, {
          theme: d.theme,
          children: Object(j.jsxs)(K.a, {
            client: F,
            children: [
              Object(j.jsx)(b, {}),
              Object(j.jsx)(Y, {}),
              Object(j.jsx)(l, {}),
              Object(j.jsx)(E.ReactQueryDevtools, { initialIsOpen: !1 }),
            ],
          }),
        });
      };
      s.a.render(
        Object(j.jsxs)(c.StrictMode, {
          children: [Object(j.jsx)(a.a, {}), Object(j.jsx)(J, {})],
        }),
        document.getElementById("root")
      );
    },
  },
  [[95, 1, 2]],
]);
//# sourceMappingURL=main.e69fba66.chunk.js.map
