document.addEventListener("DOMContentLoaded", function () {
  // Change height header while scroll
  const body = document.getElementsByTagName("body")[0];

  const handleScroll = () => {
    if (window.scrollY < 60) {
      body.classList.remove("scroll-top");
    } else {
      body.classList.add("scroll-top");
    }
  };
  window.addEventListener("scroll", handleScroll);

  // Close meet section

  const meet = document.getElementsByClassName("meet")[0];
  const meetCloseBtn = document.getElementsByClassName("meet-close-btn")[0];

  meetCloseBtn.addEventListener("click", () => {
    meet.classList.add("close-meet");
  });

  // Play meet's video

  const meetVideo = document.getElementsByClassName("meet-video");
  const playIcon = document.getElementsByClassName("play-icon");
  const video = document.getElementsByClassName("video");

  const playVideoFun = (i) => {
    let playVideo = new MediaElementPlayer(video[i], {
      success: function (mediaElement, originalNode) {},
    });
    playVideo.play();
  };

  for (let i = 0; i < playIcon.length; i++) {
    playIcon[i].addEventListener("click", () => {
      meetVideo[i].classList.add("play-video");
      playVideoFun(i);
    });
  }

  // Open modal window

  const showModalBtn = document.getElementsByClassName("show-modal-btn")[0];
  const meetModal = document.getElementsByClassName("meet-modal")[0];
  const meetModalContent =
    document.getElementsByClassName("meet-modal-content")[0];

  showModalBtn.addEventListener("click", () => {
    body.classList.add("show-modal");
  });

  meetModal.addEventListener("click", (e) => {
    const closeModal = e.composedPath().includes(meetModalContent);
    if (!closeModal || e.target.className === "modal-icon-close") {
      body.classList.remove("show-modal");
    }
  });

  // Work swiper-experts

  const swiperCustom = new Swiper(".swiper-experts", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      prevEl: ".experts-swiper-btn-prev",
      nextEl: ".experts-swiper-btn-next",
    },
    breakpoints: {
      1024: {
        spaceBetween: 16,
      },
    },
  });

  // // Work swiper-risk

  const swiperRisk = new Swiper(".swiper-risk", {
    slidesPerView: "1",
    spaceBetween: 16,
    navigation: {
      prevEl: ".risk-swiper-btn-prev",
      nextEl: ".risk-swiper-btn-next",
    },
    breakpoints: {
      768: {
        slidesPerView: "2",
      },
      1024: {
        slidesPerView: "3",
      },
    },
  });

  // Work swiper-medical-experts

  const swiperMedicalExperts = new Swiper(".swiper-medical-experts", {
    slidesPerView: "auto",
    spaceBetween: 12,
    breakpoints: {
      1024: {
        spaceBetween: 16,
      },
    },
  });

  // Show current year

  const currentYear = new Date();
  let year = document.getElementsByClassName("year")[0];

  year.innerHTML = currentYear.getFullYear();
});
