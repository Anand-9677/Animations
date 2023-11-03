var t1=gsap.timeline()

t1.from("#nav img, #nav2, #nav3",{
    y:-100,
    duration:1,
    delay:0.2,
    opacity:0,
    stagger:0.2                  //for doing animation on things one by one.
})

t1.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})

t1.from("#leftimage, #rightimage",{
    scale:0,
    opacity:0,
    stagger:0.2
})
t1.from("h5",{
    scale:0,
    opacity:0
})
t1.to("h5",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})