const toggler = document.querySelector('#nav-toggle');
const nav = document.querySelector('nav ul');
const body = document.querySelector('body');
toggler.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    toggler.classList.toggle('show');
    body.classList.toggle('show');
})

// GSAP ANIMATION
// Show Timeline
var tl = gsap.timeline({defaults:{duration: 1}});
tl.from(".animate1", {y:-50, opacity: 0})
  .from("img", {y:30, opacity: 0}, "-=0.5")
  .from("aside", {x:50, opacity: 0})

// Show Click reverse
// document.getElementById('cta-btn').addEventListener('click', () => {
//     console.log('click')
//     tl.reversed() ? tl.play() : tl.reverse();
// })