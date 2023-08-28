function startLoader() {
    let counterElement = document.querySelector('.counter')
    let currentValue = 0

    function updateCounter() {
        if (currentValue === 100) return;
        currentValue += Math.floor(Math.random() * 10) + 1

        if (currentValue > 100) currentValue = 100;

        counterElement.textContent = currentValue + '%'

        let delay = Math.floor(Math.random() * 200) + 50
        setTimeout(updateCounter, delay)
    }

    updateCounter()

}

window.onload = () => {
    startLoader()
    gsap.to('.counter', 0.25, {
        delay: 3.5,
        opacity: 0
    })
    gsap.to('.bar', 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: 'power4.inOut'
    })
    gsap.from('.h1', 1.5, {
        delay: 4,
        y: 700,
        stagger: {
            amount: 0.5
        }
    })
    gsap.from('.hero', 2, {
        delay: 4.5,
        y: 400,
        ease: 'power4.inOut'
    })
}


gsap.registerPlugin('ScrollTrigger')

gsap.to('.parallax', {
    scrollTrigger: {
        trigger: '.parallax',
        toggleActions: 'restart pause resume none',
        start: '0 10vw',
        end: 'bottom 20%',
        pin: true,
        scrub: 1
    }
})
gsap.to([".h-1", ".h-3"], {
    scrollTrigger: {
        trigger: '.parallax',
        toggleActions: 'restart pause resume none',
        start: '0 10vw',
        scrub: 1,
    },
    x: '10vw',
    scale: 2,
    ease: 'power4.inOut',
})
gsap.to('.h-2', {
    scrollTrigger: {
        trigger: '.parallax',
        toggleActions: 'restart pause resume none',
        start: '0 10vw',
        scrub: 1,
    },
    x: '-10vw',
    scale: 2,
    ease: 'power4.inOut',
})
gsap.to('.image-wrapper', {
    scrollTrigger: {
        trigger: '.parallax',
        toggleActions: 'restart pause resume none',
        start: '0 10vw',
        scrub: 1,
    },
    scaleY: 2,
    top: '-20%',
    ease: 'power4.inOut',
})
gsap.to('.image', {
    scrollTrigger: {
        trigger: '.parallax',
        toggleActions: 'restart pause resume none',
        start: '0 10vw',
        scrub: 1,
    },
    scaleX: 2,
    xPercent: 50,
    ease: 'power4.inOut',
})
let blocks = gsap.utils.toArray('.block')
gsap.set('.block', { position: 'absolute' })

gsap.to(blocks, {
    // xPercent: -100 * (blocks.length - 1),
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".blocks",
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => "+=" + document.querySelector('.blocks').offsetWidth,
    }
});

ScrollTrigger.refresh()

document.querySelector('.year').innerHTML = new Date().getFullYear()