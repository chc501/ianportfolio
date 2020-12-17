  gsap.registerPlugin(ScrollTrigger);
    var t1 = gsap.timeline();

    t1.from('.content' , {
        y: '-30%' ,
        opacity: 0,
        duration: 2,
        ease: Power4.easeOut
    })
    t1.from('.stagger1',{
        opacity: 0,
        y: -50,
        stagger: .3,
        ease: Power4.easeOut,
        duration: 2
    }, "-=1.5")

    t1.from('.hero-design', {
        opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
    }, "-=2")


    gsap.from(".square-anim", {
        stagger: .2,
        scale: 0.1,
        duration: 1,
        ease: Back.easeOut.config(1.7)
    })

    gsap.from(".transition2", {
        scrollTrigger: {
            trigger:'.transition2',
            start:"top bottom"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: .5

    })

    gsap.from(".transition3", {
        scrollTrigger: {
            trigger:'.transition3',
            start:"top bottom"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: .6

    })
