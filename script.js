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
    y:"190%",
    x:"-100%",
    scale:.8
},'a')

t1.to("#cut-orange",{
    y:"500%",
    x:"-88%",
    scale:1.3
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
    y:"420%",
    x:"5%",
    scale:.7
},'a')

t2.to("#page3-cut-orange2",{
    y:"-67%",
    x:"74%",
    scale:.29,
},'a')