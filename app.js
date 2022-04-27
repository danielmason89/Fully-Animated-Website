// Scroll Trigger Example
// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "25%",
//     scrub: true,
//     // markers: true,
//   },
// });

// tlIntro.fromTo("nav", { opacity: 1 }, { opacity: 0 });

// Pin the first page

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// HightLight page 2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    marker: { startColor: "blue", endColor: "black" },
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4" },
  { color: "rgba(255,255,255,1", stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    marker: { startColor: "pink", endColor: "pink" },
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4", stagger: 1 });

// Page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: "50", opacity: 0 },
  { opacity: 1, x: "0" },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: "-50", opacity: 0 },
  { opacity: 1, x: "0" },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "0%",
    end: "100%",
  },
});

// Carousel Page

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");
let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  // console.log(slides[index]);
  const coord = slides[index].getBoundingClientRect().left;
  //   console.log(coord);
  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    // console.log(swatchName);
    let closeUp = document.querySelector("." + swatchName);

    // Check if we are on the same swatch
    if (currentSwatch === swatchName) return;

    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
    // Increment z-index
    topIndex++;
    currentSwatch = swatchName;
  });
});

// Page 5 Video on Scroll

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "150%",
    scrub: true,
    pin: true,
  },
});

tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);

// Final Page

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "50%",
    scrub: true,
  },
});

tlParallax.fromTo(".photo-description", { y: 0 }, { y: -80 });
tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallax.fromTo(".phone-video", { y: 0 }, { y: -90 }, "<");
