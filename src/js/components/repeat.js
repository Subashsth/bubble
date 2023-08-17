export default function initRepeat() {
  let repeatText = '';
  let repeatNum = 286;
  let item = document.querySelector('.bubble');
  for (let i = 0; i < repeatNum; i++) {
    let random = Math.floor(Math.random() * 5);
    // console.log(random);
    repeatText += `<div class="bubble__item">${random}</div>`;
  }

  item.innerHTML = repeatText;
}
