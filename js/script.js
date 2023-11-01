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

$(function () {
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "blind",
      duration: 500,
    },
  });

  $("#open").on("click", function () {
    $("#dialog").dialog("open");
  });
});

$(document).ready(function ($) {
  $(".lightbox-trigger").click(function (e) {
    //prevent default action (hyperlink)
    e.preventDefault();

    //Get clicked link href
    let image_href = $(this).attr("href");

    /* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/

    if ($("#lightbox").length > 0) {
      // #lightbox exists

      //place href as img src value
      $("#content").html('<img src="' + image_href + '" />');

      //show lightbox window - you could use .show('fast') for a transition
      $("#lightbox").show();
    } else {
      //#lightbox does not exist - create and insert (runs 1st time only)

      //create HTML markup for lightbox window
      let lightbox =
        '<div id="lightbox">' +
        "<p>Close</p>" +
        '<div id="content">' + //insert clicked link's href into img src
        '<img src="' +
        image_href +
        '" />' +
        "</div>" +
        "</div>";

      //insert lightbox HTML into page
      $("body").append(lightbox);
    }
  });

  //Click anywhere on the page to get rid of lightbox window
  $("body").on("click", "#lightbox", function () {
    //must use on, as the lightbox element is inserted into the DOM
    $("#lightbox").hide();
  });
});
