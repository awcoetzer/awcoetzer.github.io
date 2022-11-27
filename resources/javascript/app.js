////////////////////////////////////////
// Making background blurred

const heroEl = document.querySelector('.hero-text-box');

const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];
  console.log(ent)

  if (ent.isIntersecting === false) {
    document.body.classList.add('bg-blur');
  } else {
    document.body.classList.remove('bg-blur');
  }
}, {
  root:null,
  threshold: 1,
  // rootMargin: '-200px',
})

obs.observe(heroEl)