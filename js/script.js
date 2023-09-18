$("document").ready(function () {
  $("#accordion").mousedown(function () {
    $("h3").filter(".ui-accordion").css("background-color", "#f5f5dc");
  });
  $("#accordion").mouseup(function () {
    $("h3").filter(".ui-accordion").css("border", "2px solid #222222");
  });
});

$(function () {
  $("#accordion").accordion();
});

(function () {
  $("html").addClass("js");

  var contactForm = {
    container: $("#contact"),
    config: {
      effect: "slideToggle",
      speed: 200,
    },

    init: function (config) {
      $.extend(this.config, config);

      $("#c-btn").on("click", this.show);
    },

    show: function () {
      var cf = contactForm,
        container = cf.container,
        config = cf.config;

      if (container.is(":hidden")) {
        cf.close.call(container);
        container[config.effect](config.speed);
      }
    },

    close: function () {
      var $this = $("#contact");

      if ($this.find("span.close").length) return;

      $("<span class=close>-</span>")
        .prependTo(this)
        .on("click", function () {
          $this[contactForm.config.effect](contactForm.config.speed);
        });
    },
  };

  contactForm.init({
    effect: "fadeToggle",
    speed: 200,
  });
})();

/* Particles settings */
/* tsParticles.load("tsparticles", {
  fps_limit: 60,
  interactivity: {
    detect_on: "window",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: "#222222" },
    line_linked: {
      color: "#222222",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
}); */
