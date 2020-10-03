$('document').ready(function () {
  config('.header--name__heading', 0, 55, 'Majid Ghasemi');
  config(
    '.header--name__comment',
    500,
    35,
    'Front-End developer who cares about open-source and creative ideas '
  );
  config('.header--information__address', 3500, 30, 'Alborz Province, Karaj');
  config('.header--information__tel', 4000, 50, '(+98)9910609113');
  config('.header--information__mail', 4000, 50, 'mjghcr@gmail.com');
  config('.main--content__heading-ex', 5500, 80, 'Experience');
  config(
    '.main--exp1__heading',
    6500,
    65,
    'Expert Road, Karaj - Front-End developer'
  );
  config('.main--exp1__date', 7500, 70, 'Oct 2018 - Apr 2019');
  config(
    '.main--exp1__describe',
    8500,
    40,
    'Working as a Front-End chapter lead ...  In expert Road marketing camp we developed leader boards, landings, dashboard, panels and etc ...'
  );
  config(
    '.main--exp2__heading',
    10500,
    65,
    'TestHub, Karaj - Front-End developer'
  );
  config('.main--exp2__date', 12000, 70, 'May 2018 - Sep 2018');
  config(
    '.main--exp2__describe',
    13000,
    40,
    'Working as a Front-End developer of core team ... We developed some landings and dashboard for Testhub'
  );
  config('.main--content__heading-edu', 15000, 65, 'Education');
  config(
    '.main--content__edu-heading',
    16000,
    60,
    'Imam Khomeini International University, Qazvin — B.Sc'
  );
  config('.main--content__edu-date', 18500, 60, '2017 - Present');
  config(
    '.main--content__edu-describe',
    19500,
    50,
    'Bachelor of Science, Software Engineering'
  );
  // main--content__projects-linkedin
  config('.main--content__heading-pro', 24000, 60, 'Projects');
  config(
    '.main--content__projects-project',
    24000,
    60,
    'Projects [in] Github |'
  );
  config('.main--content__projects-linkedin', 25000, 60, ' Linkedin');
  config('.main--skill__heading', 27000, 60, 'Main Skills');
  config('.main--navbar__item1', 28000, 60, 'Javascript');
  config('.main--navbar__item2', 29000, 60, 'HTML5');
  config('.main--navbar__item3', 30000, 60, 'CSS3');
  config('.main--navbar__item4', 31000, 60, 'Vue.js');
  config('.main--navbar__item5', 32000, 60, 'Bootstrap 4');
  config('.main--navbar__lang', 34000, 60, 'Languages');
  config(
    '.main--navbar__exp-lang',
    35000,
    60,
    'Farsi (Native), English, Turkish'
  );
});

function config(name, speedDelay, typeSpeed, text) {
  new Typed(name, {
    strings: [text],
    typeSpeed: typeSpeed,
    showCursor: false,
    startDelay: speedDelay,
  });
}
