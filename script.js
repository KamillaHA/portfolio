const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (!link.classList.contains('active')) {
      const active = document.querySelector('.link.active');
      if (active !== null) {
        active.classList.remove('active');
      }
      link.classList.add('active');
      const href = link.getAttribute('href');
      window.location.href = href;
    }
  });
});