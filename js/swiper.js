export const initSkillsSwiper = () => {
  return new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      560: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
      },
      650: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
      },
      800: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 25,
        slidesPerGroup: 6,
      },
    },
  });
};
