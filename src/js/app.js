import ready, { HTML } from './utils';
import initBg from './components/background';
import initRepeat from './components/repeat';
import initHeader from './components/header';
import initMusic from './components/music';

ready(() => {
  HTML.classList.add('is-loaded');
  // initBg();
  initRepeat();
  initHeader();
  // initMusic();
});
