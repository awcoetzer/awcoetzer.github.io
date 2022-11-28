////////////////////////////////////////
// Making background blurred

const sectionHeroEl = document.querySelector('.section-hero');
const headerEl = document.querySelector('.header');

const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];

  if (ent.isIntersecting === false) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
}, {
  root:null,
  threshold: 0,
  rootMargin: '-80px',
})

obs.observe(sectionHeroEl)

////////////////////////////////////////
// Making the header sticky

