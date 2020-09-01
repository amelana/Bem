// document.querySelector("#play").onclick = play;
// document.querySelector("#stop").onclick = stop;
document.querySelector("#volume").oninput = VideoVolume;

function VideoVolume() {
  let v = this.value;
  console.log(v);
  video.volume = v / 100;
}

var video;
window.onload = function () {
  video = document.getElementById("video-player");
};

function PlayVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function PauseVideo() {
  if (video.played) {
    video.pause();
  } else {
    video.play();
  }
}
$(document).ready(function () {
  $(".video-play").click(function (event) {
    $(".video-play").toggleClass("active");
  });
});

$(document).ready(function () {
  var btn = $(".button");
  btn.click(function () {
    btn.toggleClass("paused");
    return false;
  });
});

$(
  ".mybutton--animate-click-one, .mybutton--animate-click-two, .mybutton--animate-click-three"
).click(function () {
  return (
    (_this = this),
    $(_this).stop().addClass("button--click"),
    setTimeout(function () {
      $(_this).removeClass("button--click");
    }, 600)
  );
});

// var galleryThumbs = new Swiper(".gallery-thumbs", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   // watchSlidesVisibility: true,
//   // watchSlidesProgress: true,
// });
// var galleryTop = new Swiper(".gallery-top", {
//   spaceBetween: 10,
//   loop: true,
//   loopedSlides: 5, //looped slides should be the same
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//       slidesPerGroup: 1,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//       slidesPerGroup: 2,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       slidesPerGroup: 3,
//     },
//   },
// });

$(".footer-to__top-btn").on("click", "a.js-anchor", function (event) {
  event.preventDefault();
  $("html, body").animate(
    { scrollTop: $($(this).attr("href")).offset().top },
    800
  );
});

$(document).ready(function () {
  $(".menu-burger").click(function (event) {
    $(".menu-burger, .menu").toggleClass("active");
  });
});

$(".header__contant-decor").on("click", "a.js-anchor", function (event) {
  event.preventDefault();
  $("html, body").animate(
    { scrollTop: $($(this).attr("href")).offset().top },
    0
  );
});

const slider2 = document.querySelector(".swiper-container2");

var mySwiper = new Swiper(slider2, {
  slidesPerView: 1,
  spaceBetween: 10,
  slideClass: "slider-slide",
  wrapperClass: "slider-wrapper",
  loop: true,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },
});

var swiper = new Swiper(".swiper-container", {
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function map(n) {
  google.maps.Map.prototype.setCenterWithOffset = function (
    latlng,
    offsetX,
    offsetY
  ) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function () {
      var proj = this.getProjection();
      var aPoint = proj.fromLatLngToContainerPixel(latlng);
      aPoint.x = aPoint.x + offsetX;
      aPoint.y = aPoint.y + offsetY;
      map.panTo(proj.fromContainerPixelToLatLng(aPoint));
      //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    };
    ov.draw = function () {};
    ov.setMap(this);
  };
  var markers = new Array();
  var infowindow = new google.maps.InfoWindow({
    // pixelOffset: new google.maps.Size(-230, 250),
  });
  var locations = [[new google.maps.LatLng(53.819055, 27.8813694)]];
  var options = {
    zoom: 10,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var icon = {
    url: "img/icons/map.svg",
    scaledSize: new google.maps.Size(18, 20),
    anchor: new google.maps.Point(9, 10),
  };
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      //icon:icon,
      position: locations[i][0],
      map: map,

      // title: "Наш маркет",
    });
    markers.push(marker);
  }
}
if ($("#map").length > 0) {
  map();
}
