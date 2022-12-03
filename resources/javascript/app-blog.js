////////////////////////////////////////
// Making the header sticky

const sectionHeroEl = document.querySelector('.section-blog-hero');
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
// Making the mobile nav active

const mobileBtnEl = document.querySelector('.mobile-nav');

mobileBtnEl.addEventListener('click', () => {
  document.body.classList.toggle('mobile-active');
})

////////////////////////////////////////
// Making the toc clickable to display its contents

const tocEl = document.querySelector('.toc');
const tocBtnEl = document.querySelector('.toc-btn');

tocBtnEl.addEventListener('click', () => {
  tocEl.classList.toggle('toc-open');
})

////////////////////////////////////////
// Copyright Date Changer, it updates the date automatically

const copyrightEl = document.querySelector('#copyright');

const newDate = new Date().getFullYear();
copyrightEl.innerHTML = newDate;