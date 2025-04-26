// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Strona załadowana.');
// });


// // document.getElementById('alertButton').addEventListener('click', () => {
// //     alert('Witaj, kliknąłeś przycisk!');
// // });

// const slides = document.querySelectorAll('.custom-carousel-item');
// const indicators = document.querySelectorAll('.custom-indicator');
// const carouselSlides = document.querySelector('.custom-carousel-slides');
// let currentIndex = 1; // Startujemy od indeksu 1, aby pokazać pierwszy prawdziwy slajd
// let autoSlideInterval;

// // Funkcja do ustawienia szerokości slajdu
// function getSlideWidth() {
//   return slides[0].clientWidth;
// }

// // Funkcja do wyświetlania slajdu na podstawie indeksu
// function showSlide(index) {
//   const slideWidth = getSlideWidth(); // Za każdym razem pobieramy szerokość
//   carouselSlides.style.transition = 'transform 0.5s ease-in-out';
//   carouselSlides.style.transform = `translateX(-${index * slideWidth}px)`;

//   // Aktualizacja wskaźników
//   indicators.forEach((indicator, i) => {
//     indicator.classList.toggle('active', i === (index - 1) % indicators.length);
//   });
// }

// // Przeskakiwanie na początek lub koniec karuzeli
// carouselSlides.addEventListener('transitionend', () => {
//   if (currentIndex >= slides.length - 1) {
//     carouselSlides.style.transition = 'none';
//     currentIndex = 1; // Wracamy do pierwszego rzeczywistego slajdu
//     carouselSlides.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
//   } else if (currentIndex <= 0) {
//     carouselSlides.style.transition = 'none';
//     currentIndex = slides.length - 2; // Wracamy do ostatniego rzeczywistego slajdu
//     carouselSlides.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
//   }
// });

// // Funkcja przechodzenia do następnego slajdu
// function nextSlide() {
//   currentIndex++;
//   showSlide(currentIndex);
// }

// // Funkcja przechodzenia do poprzedniego slajdu
// function prevSlide() {
//   currentIndex--;
//   showSlide(currentIndex);
// }

// // Reset automatycznego przesuwania
// function resetAutoSlide() {
//   clearInterval(autoSlideInterval);
//   autoSlideInterval = setInterval(nextSlide, 5000);
// }

// // Obsługa przycisków do zmiany slajdów
// document.querySelector('.custom-carousel-next').addEventListener('click', () => {
//   nextSlide();
//   resetAutoSlide();
// });

// document.querySelector('.custom-carousel-prev').addEventListener('click', () => {
//   prevSlide();
//   resetAutoSlide();
// });

// // Wskaźniki (kropki)
// indicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     currentIndex = index + 1;
//     showSlide(currentIndex);
//     resetAutoSlide();
//   });
// });

// // Automatyczne przewijanie
// autoSlideInterval = setInterval(nextSlide, 5000);

// // Początkowe wyświetlenie
// showSlide(currentIndex);

// // Zapewnienie, że szerokość jest aktualizowana przy zmianie rozmiaru okna
// window.addEventListener('resize', () => {
//   showSlide(currentIndex);
// });


// // ############################ Zmiana jezyka ##############################

// function changeLanguage(lang) {
//   alert(`Język zmieniony na: ${lang}`);
//   // Tutaj można dodać logikę zmieniającą język na stronie
// }

// // ############################ Zmiana motywu ##############################

// const switchButton = document.querySelector("header button");
// let theme = localStorage.getItem("theme");

// switchButton.addEventListener("click", () => {
//   console.log("siema");
//     if (theme === "dark") {
//         document.querySelector("body").classList.remove("dark");
//         document.querySelector("body").classList.add("light");
//         theme = "light";
//     } else {
//         document.querySelector("body").classList.remove("light");
//         document.querySelector("body").classList.add("dark");
//         theme = "dark";
//     }

//     localStorage.setItem("theme", theme);
// });

// if (theme === "dark") {
//     document.querySelector("body").classList.add("dark");
// }

// if (theme === "light") {
//     document.querySelector("body").classList.add("light");
// }



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
        const rect = puzzleHand.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
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

