window.onload = function() {
  const callback = function(entries) {
    let counter = 0;
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        counter++;
        entry.target.style.transitionDelay = `${counter * .08}s`;
        entry.target.classList.add("is-visible");
      }
      if (entry.boundingClientRect.top < 0) {
        entry.target.style.transition = 'none';
      }
      
    });
  };

  const options = {
    threshold: .4
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll("ul.gallery > li > img");
  targets.forEach(target => {
    observer.observe(target);
  });
};
