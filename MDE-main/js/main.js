
document.addEventListener("DOMContentLoaded", function () {
  const experienceSection = document.querySelector(".experience-img");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  experienceSection.classList.add("in-view");
                  observer.unobserve(entry.target); // Zapobiega ponownemu uruchamianiu animacji
              }
          });
      },
      { threshold: 0.5 } // Element musi być przynajmniej w 50% widoczny
  );

  observer.observe(experienceSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const puzzleHand = document.querySelector(".puzzle-hand");

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
            puzzleHand.classList.add("active"); // Dodajemy klasę, by uruchomić animację
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Sprawdzenie przy załadowaniu strony
});

// ***************widgets*******************
const navOverlay = document.getElementById('overlay-widgets');
let widgetsBtns = document.querySelectorAll('.widget-box');
const closeBtn = document.querySelector('.close-btn');
const changeTextSection = document.querySelector('.widget-text');
const widgetHolder = document.getElementsByClassName('.widget-content');

changeTextSection

    




const sekcje = [
    { header: "Księgowość", paragraph: "To jest paragraf 1" },
    { header: "Admnistracja", paragraph: "To jest paragraf 2" },
    { header: "Podatki", paragraph: "To jest paragraf 3" },
    { header: "Usługi biurowe", paragraph: "To jest paragraf 4" },
    { header: "Doradztwo księgowe", paragraph: "To jest paragraf 5" },
    { header: "Analiza finansowa", paragraph: "To jest paragraf 6" },
];

let paragraphWidget = changeTextSection.querySelector('p');
let headerWidget = changeTextSection.querySelector('h2');



function comparingNumbers(widgetNr) {

    paragraphWidget.innerText = sekcje[widgetNr-1].paragraph;
    headerWidget.innerText = sekcje[widgetNr-1].header;
}


function checkingWidgetNumber(clickedElem) {
  console.log(clickedElem)
  let widgtStr = clickedElem.classList[2].charAt(13);
  console.log(widgtStr)
  let widgetNr = parseInt(widgtStr);
  comparingNumbers(widgetNr)
}



widgetsBtns.forEach(function(elem, index) {
    elem.addEventListener('click', function(event) {
        let clickedElem = this
        widgetsBtns.forEach(function(elem) {
            elem.classList.remove('rollDiv');
        });
        let widgetContent =  this.children[0];
        this.classList.add('expandDiv');
        widgetContent.classList.add('hidden')
        this.classList.remove('rollDiv');

        // this.children[0].classList.add('hidden')

        checkingWidgetNumber(clickedElem)
        if (this.classList.contains('widget-box--secondary')) {
            navOverlay.classList.add('widget-box--secondary');
            navOverlay.classList.remove('widget-box--primary');
        } else {
            navOverlay.classList.add('widget-box--primary');
            navOverlay.classList.remove('widget-box--secondary');
        }
        setTimeout(() => {
            this.classList.add('active');
            navOverlay.classList.toggle('hidden');
            this.classList.remove('expandDiv');
            widgetContent.classList.remove('hidden');
        }, 400);
    });
})



function removeAnimation() {

}

closeBtn.addEventListener('click', function(){
    navOverlay.classList.toggle('hidden');
    widgetsBtns.forEach(function(elem){
        if (elem.classList.contains('active')) {
            elem.classList.add('rollDiv')
        }
    })
    setTimeout(() => {
    widgetsBtns.forEach(function(elem){
        elem.classList.remove('active');
    }, 100);
    })

    // setTimeout(() => {
    //     widgetsBtns.forEach(function(elem){
    //         elem.classList.remove('rollDiv');
    //     }, 300);
    // })
})


function settingOverlayBg() {

}


function gettingWidgetData() {

}

function overlayColorSetting() {

}

closeBtn.addEventListener('click', switchOverlay);


function switchOverlay() {
    navOverlay.classList.toggle('hidden');
}



closeBtn.addEventListener('click', () => {
  closeBtn.classList.add('clicked'); // dodaje klasę do animacji
  navOverlay.classList.toggle('hidden'); // ukrywa menu

  // po animacji reset klasy, by można było powtórzyć animację
  setTimeout(() => {
    closeBtn.classList.remove('clicked');
  }, 400);
});

document.addEventListener('keydown', function(event) {
    navOverlay.classList.toggle('hidden');
});


const widgetBoxes = document.querySelectorAll('.widget-box');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150); // lekkie opóźnienie dla każdego elementu
      observer.unobserve(entry.target); // tylko raz
    }
  });
}, {
  threshold: 0.1 // 10% elementu musi się pojawić, by odpalić
});

widgetBoxes.forEach(box => observer.observe(box));


let stringArr = [];

const counter = document.getElementById('counter');





  // Obserwator odpala animację tylko raz, gdy element wejdzie w widok
  function animateCounter(el, endValue, duration = 2000) {
    const startTime = performance.now();
  
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * endValue);
      el.textContent = `+ ${currentValue.toLocaleString('pl-PL')}`;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
//   document.addEventListener('DOMContentLoaded', () => {
//     const counter = new CountUp('counter', 0, 400, 0, 2, {
//       useGrouping: false
//     });
  
//     if (!counter.error) {
//       counter.start();
//     } else {
//       console.error(counter.error);
//     }
//   });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endVal = parseInt(el.getAttribute('data-end'), 10);

          const countUp = new CountUp(el, 0, endVal, 0, 2, {
            useGrouping: false
          });

          if (!countUp.error) {
            countUp.start();
            observer.unobserve(el); // żeby nie animować ponownie
          } else {
            console.error(countUp.error);
          }
        }
      });
    }, {
      threshold: 0.6 // uruchomi się, gdy 60% elementu w widoku
    });

    counters.forEach(counter => observer.observe(counter));
  });


// slider mobile

let sliderImages = document.getElementsByClassName('mobile-slide');
let carouselSqaures = document.getElementsByClassName('carousel-square')
let mainHeader = document.getElementById('main-header')
let headerMobileHolder = document.querySelector('.headers-mobile')



let headerArr = [
  'PROFESJONALNA OBSŁUGA KSIĘGOWA<br><span style="color:white">DLA TWOJEGO BIZNESU</span>',
  'ROZLICZENIA<br><span style="color:white">W POLSCE<br>ORAZ NIEMCZECH</span>',
  'ZWIĘKSZ SWÓJ KAPITAŁ<br><span style="color:white">Z NASZĄ POMOCĄ</span>'
];





let intervalId;


sliderImages = Array.from(sliderImages);
carouselSqaures = Array.from(carouselSqaures);

let nrOfSlide = -1;
console.log(sliderImages);
console.log(mainHeader)

function changeSlide() {
  headerMobileHolder.classList.add('showUp');
  nrOfSlide++;
  if (nrOfSlide >= sliderImages.length) {
    nrOfSlide = 0;
  }
  carouselSqaures.forEach(function(elem){
    elem.classList.remove('active')
  })
  sliderImages.forEach(function(elem){
    elem.classList.remove('active')
  })
  sliderImages[nrOfSlide].classList.add('active')
  carouselSqaures[nrOfSlide].classList.add('active')
  mainHeader.innerHTML = headerArr[nrOfSlide];
  setTimeout(() => {
    headerMobileHolder.classList.remove('showUp');
  }, 2000);
};


// Start interwału
function startInterval() {
  intervalId = setInterval(changeSlide, 3500);
}

// Zatrzymanie interwału
function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

carouselSqaures.forEach(function(square) {
  square.addEventListener('click', changeSlideBySquare);
});

function changeSlideBySquare(event) {
  const index = Array.from(carouselSqaures).indexOf(this);
  carouselSqaures.forEach(function(elem){
    elem.classList.remove('active')
  })
  sliderImages.forEach(function(elem){
    elem.classList.remove('active')
  })
  sliderImages[index].classList.add('active')
  carouselSqaures[index].classList.add('active')
  mainHeader.innerHTML = headerArr[index];
  nrOfSlide = index;
  resetInterval(); // <-- Po kliknięciu resetuj interwał
}

startInterval();


const hamburgerBtn = document.getElementById('hamburger-btn');
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('#menu');
console.log(menu)


hamburgerBtn.addEventListener('click', function() {
  navBar.classList.toggle('overflow');
  this.classList.toggle('active');

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column'; // Jeśli chcesz kolumnowo
    menu.style.alignItems = 'center';     // Opcjonalnie wyśrodkowanie
    menu.style.justifyContent = 'center'; // Opcjonalnie wyśrodkowanie
  }
});



const menuItems = document.querySelectorAll('ul li');
const services = document.querySelector('.widgets')
const opinions = document.querySelector('.opinions')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')



menuItems.forEach((item) => {
  item.addEventListener('click', function() {
    menu.style.display = 'none';
    navBar.classList.toggle('overflow');
    hamburgerBtn.classList.toggle('active');

    const sectionClass = this.getAttribute('data-section');
    console.log(sectionClass);

    if (sectionClass === 'services') {
      services.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionClass === 'opinions') {
      opinions.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionClass === 'about') {
      about.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionClass === 'contact') {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



