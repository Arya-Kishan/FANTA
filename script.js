// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

var t1 = new gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "0% 80%",
        end: "0% 0%",
        scrub: true,
        // markers: true
    }
})

t1.to("#fanta",{
    y:"165%",
    x:"-160%",
    scale:.8
},'a')

t1.to("#cut-orange",{
    y:"320%",
    x:"-198%",
    scale:1.2
},'a')


var t2 = new gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "0% 80%",
        end: "0% 0%",
        scrub: true,
        // markers: true
    }
})

t2.to("#fanta",{
    y:"347%",
    x:"-15%",
    scale:.95
},'a')

t2.to("#page3-cut-orange2",{
    y:"-80%",
    x:"162%",
    scale:.5,
},'a')