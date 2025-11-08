// Small JS to handle dynamic year, contact demo and simple smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  // contact form (demo) - prevent real submit and show success
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.classList.remove('d-none');
    setTimeout(()=> status.classList.add('d-none'), 3000);
    form.reset();
  });

  // smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
