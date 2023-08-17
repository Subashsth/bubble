import initRepeat from './repeat';

export default function initHeader() {
  let hitBox = document.querySelector('.header__hit');
  let timeBox = document.querySelector('.header__time');
  let scoreBox = document.querySelector('.header__score');
  let bubbleParent = document.querySelector('.bubble');
  let bgMusic = document.getElementById('bg');
  let correctMusic = document.getElementById('click');
  let errorMusic = document.getElementById('error');
  let congratsMusic = document.getElementById('congrats');
  let hitScore = 0;
  let randomNumber = 0;
  let length = 60;

  document.addEventListener('load', () => {
    bgMusic.play();
  });

  function hit() {
    randomNumber = Math.floor(Math.random() * 5);
    hitBox.textContent = randomNumber;
  }
  hit();

  function playCorrect() {
    correctMusic.play();
  }

  function playError() {
    errorMusic.play();
  }

  function playCongrats() {
    congratsMusic.play();
  }

  function bg() {
    bgMusic.pause();
  }

  function score() {
    hitScore += 10;
    scoreBox.textContent = hitScore;
  }

  function check() {
    bubbleParent.addEventListener('click', (e) => {
      let checkNumber = Number(e.target.textContent);
      if (randomNumber === checkNumber) {
        hit();
        initRepeat();
        score();
        playCorrect();
      } else {
        playError();
        e.target.style.backgroundColor = 'red';

        if (e.target.classList.contains('bubble')) {
          e.target.style.backgroundColor = '';
        }

        if (e.target.classList.contains('h1')) {
          e.target.style.backgroundColor = '';
        }
      }
    });
  }

  function time() {
    let time = setInterval(function () {
      if (length > 0) {
        length--;
        timeBox.textContent = length;
      } else {
        clearInterval(time);
        bg();
        bubbleParent.innerHTML = `
        <div class="congrats">
            <h1 class="h1">Game Over !!! <br> your score : ${hitScore}</h1>
        </div>
        `;

        hitBox.textContent = '-';
        scoreBox.textContent = '-';
        timeBox.textContent = '-';

        playCongrats();
      }
    }, 1000);
  }

  check();
  time();
}
