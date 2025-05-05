document.addEventListener("DOMContentLoaded", function () {

  // =============== OBSERWATOR: experience-img ===============
  const experienceSection = document.querySelector('.experience-img');
  if (experienceSection) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observerInstance.unobserve(entry.target); // Jednorazowa animacja
        }
      });
    }, { threshold: 0.5 });
    observer.observe(experienceSection);
  }

  // =============== ELEMENTY WIDGETS ===============
  const navOverlay = document.getElementById('overlay-widgets');
  let widgetsBtns = document.querySelectorAll('.widget-box');
  const closeBtn = document.querySelector('.close-btn');
  const changeTextSection = document.querySelector('.widget-text');
  const widgetHolder = document.getElementsByClassName('widget-content');

  // niepotrzebna linijka: changeTextSection

  // =============== DANE: Treści widgetów ===============
  const sekcje = [
    { header: "Księgowość", paragraph: "Oferujemy kompleksową obsługę księgową dla firm i klientów indywidualnych w Polsce i Niemczech. Prowadzimy pełną ewidencję dokumentów księgowych, księgujemy bieżące transakcje gospodarcze oraz zarządzamy rozrachunkami z odbiorcami i dostawcami. Nasze usługi obejmują również przygotowanie zestawień sald oraz rocznych sprawozdań finansowych. Gwarantujemy rzetelność, zgodność z aktualnymi przepisami oraz pełne bezpieczeństwo powierzonych danych." },
    { header: "Administracja", paragraph: "Świadczymy profesjonalne usługi administracyjne, wspierając klientów w codziennym zarządzaniu dokumentacją i procesami biurowymi. Oferujemy pomoc w rejestracji oraz wyrejestrowaniu pracowników, prowadzeniu akt osobowych oraz przygotowywaniu zgłoszeń do urzędów i instytucji ubezpieczeniowych. Nasze wsparcie administracyjne obejmuje również obsługę formalności związanych z prowadzeniem działalności gospodarczej w Niemczech, co pozwala klientom skupić się na rozwoju biznesu." }, // Poprawiłem literówkę: Admnistracja -> Administracja
    { header: "Podatki", paragraph: "Oferujemy pełne wsparcie w zakresie rozliczeń podatkowych dla firm i osób prywatnych. Przygotowujemy i składamy roczne deklaracje podatkowe zgodnie z obowiązującymi przepisami w Polsce i Niemczech. Nasze doświadczenie pozwala na rzetelną analizę sytuacji podatkowej klienta i optymalne przygotowanie dokumentacji, co przekłada się na pewność i bezpieczeństwo w kontaktach z urzędami skarbowymi." },
    { header: "Usługi biurowe", paragraph: "Zapewniamy wsparcie w prowadzeniu prywatnej i biznesowej korespondencji, w tym obsługę kontaktów z urzędami skarbowymi, kasami chorych oraz innymi instytucjami. Przygotowujemy wymagane dokumenty, wnioski i zgłoszenia zgodnie z obowiązującymi standardami, dbając o pełną poufność i terminowość. Nasze wsparcie biurowe to wygodne rozwiązanie dla przedsiębiorców ceniących sprawną organizację procesów administracyjnych." },
    { header: "Analiza finansowa", paragraph: "  Oferujemy indywidualne doradztwo księgowe dla firm, dostosowane do potrzeb i specyfiki działalności klienta. Wspieramy w bieżących kwestiach rachunkowych, interpretacji przepisów podatkowych oraz optymalizacji rozwiązań księgowych. Dzięki naszej wiedzy i doświadczeniu pomagamy firmom sprawnie zarządzać finansami i dostosowywać się do zmieniających się wymagań prawnych." },
    { header: "Doradztwo księgowe", paragraph: "  Opracowujemy sprawozdania finansowe oraz przygotowujemy zestawienia sald i oceny wyników finansowych firm działających w Polsce i Niemczech. Tworzymy analizy BWA (oceny biznesowe), które umożliwiają skuteczne monitorowanie kondycji przedsiębiorstwa oraz wspierają podejmowanie świadomych decyzji biznesowych. Wszystkie nasze opracowania są zgodne z aktualnymi standardami rachunkowości i dostosowane do indywidualnych potrzeb klienta." },
  ];
  
  
  let paragraphWidget = changeTextSection.querySelector('p');
  let headerWidget = changeTextSection.querySelector('h2');

  // =============== FUNKCJE: Obsługa zmiany tekstu widgeta ===============
  function comparingNumbers(widgetNr) {
    paragraphWidget.innerText = sekcje[widgetNr - 1].paragraph;
    headerWidget.innerText = sekcje[widgetNr - 1].header;
  }

  function checkingWidgetNumber(clickedElem) {
    console.log(clickedElem);
    let widgtStr = clickedElem.classList[2].charAt(13); // zakładamy konkretną strukturę klas — potencjalny błąd
    console.log(widgtStr);
    let widgetNr = parseInt(widgtStr);
    comparingNumbers(widgetNr);
  }

  // =============== NASŁUCHIWANIE kliknięcia widgetów ===============
  widgetsBtns.forEach(function (elem) {
    elem.addEventListener('click', function () {
      let clickedElem = this;
      widgetsBtns.forEach(function (elem) {
        elem.classList.remove('rollDiv');
      });
      let widgetContent = this.children[0];
      this.classList.add('expandDiv');
      widgetContent.classList.add('hidden');
      this.classList.remove('rollDiv');

      checkingWidgetNumber(clickedElem);

      // Obsługa tła overlay
      if (this.classList.contains('widget-box--secondary')) {
        navOverlay.classList.add('widget-box--secondary');
        navOverlay.classList.remove('widget-box--primary');
      } else {
        navOverlay.classList.add('widget-box--primary');
        navOverlay.classList.remove('widget-box--secondary');
      }

      // Opóźniona animacja otwierania
      setTimeout(() => {
        this.classList.add('active');
        navOverlay.classList.toggle('hidden');
        this.classList.remove('expandDiv');
        widgetContent.classList.remove('hidden');
      }, 400);
    });
  });

  // =============== FUNKCJE pomocnicze (puste) ===============
  function removeAnimation() {}
  function settingOverlayBg() {}
  function gettingWidgetData() {}
  function overlayColorSetting() {}

  // =============== Zamykanie overlay po kliknięciu krzyżyka ===============
  closeBtn.addEventListener('click', function () {
    navOverlay.classList.toggle('hidden');
    widgetsBtns.forEach(function (elem) {
      if (elem.classList.contains('active')) {
        elem.classList.add('rollDiv');
      }
    });
    setTimeout(() => {
      widgetsBtns.forEach(function (elem) {
        elem.classList.remove('active');
      });
    }, 100);
  });

  // =============== Dodatkowe zamykanie overlay i resetowanie klasy kliknięcia ===============
  function switchOverlay() {
    navOverlay.classList.toggle('hidden');
  }

  closeBtn.addEventListener('click', switchOverlay);

  closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('clicked');
    navOverlay.classList.toggle('hidden');
    setTimeout(() => {
      closeBtn.classList.remove('clicked');
    }, 400);
  });

  // =============== OBSERWATOR: animacja widgetów ===============
  const widgetBoxes = document.querySelectorAll('.widget-box');

  const observerWidget = new IntersectionObserver((entries, observerWidget) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
        observerWidget.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  widgetBoxes.forEach(box => observerWidget.observe(box));

  // =============== LICZNIKI: animacja wartości liczbowych ===============
  const counter = document.getElementById('counter');

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

  const counters = document.querySelectorAll('.counter');

  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endVal = parseInt(el.dataset.end, 10) || 0;
          const countUp = new CountUp(el, 0, endVal, 0, 2, { useGrouping: false });
          if (!countUp.error) {
            countUp.start();
            observerInstance.unobserve(el);
          } else {
            console.error('CountUp error:', countUp.error);
          }
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(counter => counterObserver.observe(counter));
  }

  // =============== SLIDER MOBILE ===============
  let sliderImages = Array.from(document.getElementsByClassName('mobile-slide'));
  let carouselSquares = Array.from(document.getElementsByClassName('carousel-square'));
  let mainHeader = document.getElementById('main-header');
  let headerMobileHolder = document.querySelector('.headers-mobile');
  let headerArr = [
    'PROFESJONALNA OBSŁUGA KSIĘGOWA<br><span style="color:white">DLA TWOJEGO BIZNESU</span>',
    'ROZLICZENIA<br><span style="color:white">W POLSCE<br>ORAZ NIEMCZECH</span>',
    'ZWIĘKSZ SWÓJ KAPITAŁ<br><span style="color:white">Z NASZĄ POMOCĄ</span>'
  ];

  let nrOfSlide = 0;
  let intervalId;

  function changeSlide() {
    headerMobileHolder.classList.add('showUp');
    nrOfSlide++;
    if (nrOfSlide >= sliderImages.length) {
      nrOfSlide = 0;
    }
    carouselSquares.forEach(elem => elem.classList.remove('active'));
    sliderImages.forEach(elem => elem.classList.remove('active'));
    sliderImages[nrOfSlide].classList.add('active');
    carouselSquares[nrOfSlide].classList.add('active');
    mainHeader.innerHTML = headerArr[nrOfSlide];
    setTimeout(() => {
      headerMobileHolder.classList.remove('showUp');
    }, 2000);
  }

  function startInterval() {
    intervalId = setInterval(changeSlide, 3500);
  }

  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }

  carouselSquares.forEach(function (square) {
    square.addEventListener('click', changeSlideBySquare);
  });

  function changeSlideBySquare(event) {
    headerMobileHolder.classList.add('showUp');
    const index = Array.from(carouselSquares).indexOf(this);
    carouselSquares.forEach(elem => elem.classList.remove('active'));
    sliderImages.forEach(elem => elem.classList.remove('active'));
    sliderImages[index].classList.add('active');
    carouselSquares[index].classList.add('active');
    mainHeader.innerHTML = headerArr[index];
    nrOfSlide = index;
    setTimeout(() => {
      headerMobileHolder.classList.remove('showUp');
    }, 1500);
    resetInterval();
  }

  headerMobileHolder.classList.remove('showUp');
  startInterval();

  // =============== HAMBURGER MENU ===============
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navBar = document.querySelector('.navbar');
  const menu = document.querySelector('#menu');

  hamburgerBtn.addEventListener('click', function () {
    navBar.classList.toggle('overflow');
    this.classList.toggle('active');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.alignItems = 'center';
      menu.style.justifyContent = 'center';
    }
  });

  const menuItems = document.querySelectorAll('ul li');
  const services = document.querySelector('.widgets');
  const opinions = document.querySelector('.opinions');
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');

  function closeMenu() {
    menu.style.display = 'none';
    navBar.classList.toggle('overflow');
    hamburgerBtn.classList.toggle('active');
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', function () {
      closeMenu();
      const sectionClass = this.getAttribute('data-section');
      console.log(sectionClass);
      if (sectionClass === 'services') services.scrollIntoView({ behavior: 'smooth' });
      if (sectionClass === 'opinions') opinions.scrollIntoView({ behavior: 'smooth' });
      if (sectionClass === 'about') about.scrollIntoView({ behavior: 'smooth' });
      if (sectionClass === 'contact') contact.scrollIntoView({ behavior: 'smooth' });
    });
  });


const commentTittle = document.getElementById('comment-tittle');
const commentText = document.getElementById('comment-text');
const commentPerson = document.getElementById('comment-person');
const commentCompany = document.getElementById('comment-company');
const commentsSquares = Array.from(document.getElementsByClassName('comments-square'));
const triangleBtns =  Array.from(document.getElementsByClassName('triangle-btn'));
const comments = Array.from(document.getElementsByClassName('comment'));


console.log(comments);


  // =============== OPINIONS SLIDER (niedokończony) ===============
  let opinionsComments = [
    { header: "Księgowość", comment: "To jest paragraf 1", name: "Wojtek", company: "Dundersztyc" },
    { header: "Administracja", comment: "To jest paragraf 2", name: "Anna", company: "FirmaX" },
    { header: "Podatki", comment: "To jest paragraf 3", name: "Piotr", company: "TaxHelp" }
  ];



  let commentSliderCounter = 0

  triangleBtns.forEach(function(elem, index) {
    elem.addEventListener('click', function() {
      commentsSquares.forEach((elem) => {
        elem.classList.remove('active');
      });
      let clickedArrow = index;
      accumulator(clickedArrow);
    });
  });
  
  function accumulator(clickedArrow) {
  
    if (clickedArrow === 0) {
      actualValue = commentSliderCounter--;
      checkingAccumulator(commentSliderCounter);
    } else {
      actualValue = commentSliderCounter++;
      checkingAccumulator(commentSliderCounter);
    }
  }
  
  function checkingAccumulator(accumulatorValue) {
    // console.log(accumulatorValue + 'before local');
    // console.log(commentSliderCounter + 'before global');

    if (accumulatorValue >= commentsSquares.length) {
      console.log('przekroczyłeś');
      accumulatorValue = 0
      commentSliderCounter = accumulatorValue
      changeComment(accumulatorValue)
      return activatingSquares(accumulatorValue)

    } else if (accumulatorValue <= -1) {
      accumulatorValue = 2
      commentSliderCounter = accumulatorValue
      changeComment(accumulatorValue)
      return activatingSquares(accumulatorValue)
    } else {
      changeComment(accumulatorValue)
      return activatingSquares(accumulatorValue)
    }
    // console.log(accumulatorValue + 'after local');
    // console.log(commentSliderCounter + 'before global');
  }
  
function activatingSquares(activatedSquare) {
  commentsSquares[activatedSquare].classList.add('active')
}


function changeComment(nrOfComment) {
  console.log(nrOfComment + " tiki");

  comments.forEach((comment, index) => {
    let newOrder = (index - nrOfComment + comments.length) % comments.length;
    comment.style.order = newOrder;
  });
}


// CONTACT POPUP


const closePopupBtn = document.getElementById('close-popup');
const openPopupBtn = document.getElementById('popoup-btn');

const popup = document.querySelector('.popup');


console.log(closePopupBtn);
console.log(popup);



closePopupBtn.addEventListener('click', function(){
  popup.classList.remove('active');
});


openPopupBtn.addEventListener('click', function(){
  popup.classList.add('active');
});




// Pasek z logotypami firm
const track = document.querySelector('.companies-track');
const container = document.querySelector('.companies-logotypes');

let scrollAmount = 0;
const scrollSpeed = 0.8; // modyfikuj dla szybkości

function scrollLogos() {
  scrollAmount += scrollSpeed;
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }
  container.scrollLeft = scrollAmount;
  requestAnimationFrame(scrollLogos);
}

scrollLogos();




});

