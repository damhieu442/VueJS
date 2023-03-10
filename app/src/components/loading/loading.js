!(function () {
  function t(t) {
    (this.element = t), this.animationId, (this.start = null), this.init();
  }
  if (!window.requestAnimationFrame) {
    var i = null;
    window.requestAnimationFrame = function (t, n) {
      var e = new Date().getTime();
      i || (i = e);
      var a = Math.max(0, 16 - (e - i)),
        o = window.setTimeout(function () {
          t(e + a);
        }, a);
      return (i = e + a), o;
    };
  }
  (t.prototype.init = function () {
    var t = this;
    this.animationId = window.requestAnimationFrame(t.triggerAnimation.bind(t));
  }),
    (t.prototype.reset = function () {
      var t = this;
      window.cancelAnimationFrame(t.animationId);
    }),
    (t.prototype.triggerAnimation = function (t) {
      var i = this;
      this.start || (this.start = t);
      var n = t - this.start;
      800 > n || (this.start = this.start + 800),
        this.element.setAttribute(
          "transform",
          "rotate(" + (parseInt(Math.min(n / 100, 8)) % 8) * 45 + " 16 16)"
        );
      if (document.documentElement.contains(this.element))
        window.requestAnimationFrame(i.triggerAnimation.bind(i));
    });
  var n = document.getElementsByClassName("nc-loop_dots-06-32"),
    e = [];
  if (n)
    for (var a = 0; n.length > a; a++)
      !(function (i) {
        e.push(new t(n[i]));
      })(a);
  document.addEventListener("visibilitychange", function () {
    "hidden" == document.visibilityState
      ? e.forEach(function (t) {
          t.reset();
        })
      : e.forEach(function (t) {
          t.init();
        });
  });
})();
