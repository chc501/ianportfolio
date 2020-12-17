        var card = document.getElementById('card');

        var rule = CSSRulePlugin.getRule(".card::before");
        var rule2 = CSSRulePlugin.getRule(".card::after");
    
        var t1 = gsap.timeline({defaults: {ease: "power2.inOut"}});
    
        t1.to(rule, {
        width: '100%'
    })
        t1.to(rule2, {
        width: '100%'
    }, "-=.3")

        t1.to('h1' , {
            color: 'white'
        }, "-=.7")
        t1.to('p' , {
            'clipPath': 'circle(140% at 0% 100%)' ,
            'transform': 'translateX(0)',
            ease: Back.easeOut.config(4),
        }, "-=.3")
    
        t1.pause();
    
        card.addEventListener('mouseenter', () => {
        t1.play();
    })
    
        card.addEventListener('mouseleave', () => {
        t1.reverse();
    })

