var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}












const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Remove to re-trigger animation
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.animated').forEach(element => {
    observer.observe(element);
  });





  
















let valueDisplays = document.querySelectorAll('.statNum');
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let increment = 1;  // Slower increment
    let duration = Math.floor(interval / (endValue / increment));

    let counter = setInterval(function () {
        startValue += increment;
        valueDisplay.textContent = Math.round(startValue) + "%"; 
        if (startValue >= endValue) {
            clearInterval(counter);
            valueDisplay.textContent = endValue + "%";  // Ensure it ends exactly at 100%
        }
    }, duration);
});
console.log(document.querySelectorAll('.statNum'));







window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  
  loader.classList.add('loaderHidden');

  loader.addEventListener('transitioned', () => {
    document.body.removeChild('loader');
  })
})