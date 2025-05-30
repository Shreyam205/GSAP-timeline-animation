var tl = gsap.timeline({paused:true})

tl.to("#full",{
    right:"0",
    duration:0.6
})
tl.from("#full h4",{
    x:150,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})