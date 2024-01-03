const tl =  gsap.timeline();

tl.from("#page1 nav",{
  opacity:0,
  duration:1.3,
  y:-80
}) 
tl.from("#page1 nav .part1,#page1 nav .part2 h3,#page1 nav .part3",{
    y:-80,
    opacity:0,
    duration:1,
    stagger:0.3
}) 
tl.from(" #left h1",{
      x:-800,
      duration:0.5,
      stagger:0.3
})
tl.from("#right img",{
     scale:0,
     duration:0.5
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        scrub:1,
        markers:true,
        end:"top 40%"
    }
})