function getPageBreak() {
  const start =
    Math.floor(document.getElementById('home').getBoundingClientRect().y) <=
      0 && 'start';
  const home =
    Math.floor(document.getElementById('home').getBoundingClientRect().y) < 0 &&
    'home';
  const about =
    Math.floor(document.getElementById('about').getBoundingClientRect().y) <=
      0 && 'about';
  const resume =
    Math.floor(document.getElementById('resume').getBoundingClientRect().y) <=
      0 && 'resume';
  const portfolio =
    Math.floor(
      document.getElementById('portfolio').getBoundingClientRect().y
    ) <= 0 && 'portfolio';
  const interests =
    Math.floor(
      document.getElementById('testimonials').getBoundingClientRect().y
    ) <= 0 && 'interests';

  const yPositive = interests || resume || about || portfolio || home || start;

  switch (yPositive) {
    case 'start':
      return { pathname: '#home', background: 'light' };
    case 'home':
      return { pathname: '#home', background: 'dark' };
    case 'portfolio':
      return { pathname: '#portfolio', background: 'dark' };
    case 'about':
      return { pathname: '#about', background: 'dark' };
    case 'resume':
      return { pathname: '#resume', background: 'dark' };
    case 'interests':
      return { pathname: '#testimonials', background: 'dark' };
  }
}

export default getPageBreak;
