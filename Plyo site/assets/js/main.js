// Mobile menu
(function(){
  var btn = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Cookie banner
(function(){
  try {
    var banner = document.getElementById('cookieBanner');
    var accept = document.getElementById('cookieAccept');
    if (!banner || !accept) return;
    if (!localStorage.getItem('plyo_cookie_ack')) {
      banner.classList.add('show');
    }
    accept.addEventListener('click', function(){
      localStorage.setItem('plyo_cookie_ack', '1');
      banner.classList.remove('show');
    });
  } catch(e) {}
})();

// Footer year
(function(){
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Scroll reveal
(function(){
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();

// Count up the stat numbers when stat band enters viewport
(function(){
  var band = document.getElementById('statBand');
  if (!band) return;
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.stat-num').forEach(function(el){
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    return;
  }
  function animate(el){
    var target = parseInt(el.dataset.count, 10) || 0;
    var suffix = el.dataset.suffix || '';
    var duration = 1200;
    var start = performance.now();
    function tick(now){
      var p = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-num').forEach(animate);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  io.observe(band);
})();
