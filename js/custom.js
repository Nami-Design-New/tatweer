$(document).ready(function () {
  // page URL
  var currentPageUrl = window.location.href;
  $(".navbar-nav a").each(function () {
    var navLinkUrl = $(this).attr("href");
    if (currentPageUrl.indexOf(navLinkUrl) !== -1) {
      $(this).addClass("active");
    }
  });
  //partnersSlider Slider
  var partnersSlider = new Swiper(".partnersSlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".partnersPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  });
  //projectsSlider
  var projectsSlider = new Swiper(".projectsSliderContainer", {
    spaceBetween: 0,
    // loop: true,
    effect: "fade",
    speed: 500,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".projectsSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projectsSliderNext",
      prevEl: ".projectsSliderPrev",
    },
  });

  const mainSlider = new Swiper(".mainSlider", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    speed: 500,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  // services slider
  var latestProjectsSlider = new Swiper(".latestProjectsSlider", {
    navigation: {
      nextEl: ".latestProjectsSliderNext",
      prevEl: ".latestProjectsSliderPrev",
    },
    pagination: {
      el: ".latestProjectsSliderPagination",
    },
    loop: true,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });
  $(".latestProjectsSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  //project Details Slider
  var projectDetailsSlider = new Swiper(".projectDetailsSlider", {
    spaceBetween: 0,
    loop: false,
    // effect: "fade",
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".projectDetailsSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projectDetailsSliderNext",
      prevEl: ".projectDetailsSliderPrev",
    },
  });

  $(
    " .projects .project .description , .latestProjects .project .description "
  ).each(function () {
    var text = $(this).text();
    if (text.length > 140) {
      var truncatedText =
        $.trim(text).substring(0, 140).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });
  $(
    " .projects .project .title , .latestProjects .project .title  , .projectDetails .Moreprojects .project .description"
  ).each(function () {
    var text = $(this).text();
    if (text.length > 45) {
      var truncatedText =
        $.trim(text).substring(0, 45).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});
