const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const text2 = intro.querySelector("h2");

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

const textAnim = TweenMax.fromTo(text, 5, {opacity: 1 }, { opacity: 0});
const textAnim2 = TweenMax.fromTo(text2, 5, {opacity: 1 }, { opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim2)
    .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e=> {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 130);
