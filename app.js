// "I Can Do All Things Through Christ Who Strengthens Me" (Philippians 4:13) 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay')
const winReload = document.getElementById('winReload')

const startGame = document.querySelector('.btn__reset')
const ul = document.querySelector('ul')
// let input = '';
let randomPhrase = '';

let list = '';
const tries = document.querySelectorAll('.tries img');


const letter = document.querySelectorAll('.letter');



startGame.addEventListener('click', () => {
  overlay.style.display = 'none';

})

let phrases = ['god loves you', 'faith moves mountain', 'time is precious',
  'starve your laziness', 'believe in yourself', 'women in red'
];

function getRandomPhraseAsArray(arr) {

  const num = Math.floor((Math.random() * 6))
  for (let i = 0; i < phrases.length; i++) {
    randomPhrase = phrases[num].split('');
    return randomPhrase;
  }
}
getRandomPhraseAsArray(phrases);



const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

function addPhrasetoDisplay(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    list = document.createElement('li')
    list.textContent = element
    ul.appendChild(list)
    if (list.textContent !== ' ') {
      list.className = 'letter'
    } else {
      list.className = 'space'
    }
  }
  list = phrase.querySelectorAll('li');

}

function checkLetter(b) {
  let goodtries = null;
  for (let i = 0; i < randomPhrase.length; i++) {
    const element = randomPhrase[i];
    if (element.includes(b)) {
      list[i].classList.add('show')
      goodtries = true;
    }  }
  return goodtries;
}
const letters = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');

function checkWin() {
  if (show.length === letters.length) {
    overlay.style.display = 'flex';
    overlay.classList.add('win');
    setInterval(() => {
      document.location.reload();
      overlay.style.display = 'none';
    }, 2000);
  
    
  } else if (missed === 5) {
   overlay.style.display = 'flex';
    overlay.classList.add('lose');
    setInterval(() => {
      document.location.reload();
      overlay.style.display = 'none';
    }, 2000);
   
  }
}
qwerty.addEventListener('click', function (e) {

  if (e.target.tagName === 'BUTTON') {
    const chosen = e.target;
    chosen.classList.add('chosen');
    chosen.disabled = 'true'

    const letterFound = checkLetter(e.target.textContent);
    if (letterFound == null) {
      tries[missed].setAttribute('src', 'images/lostHeart.png'); //I toggle the pictures so as I can have some contrasts on the project. However, the result is the this.
      missed++;
    }
  }
  checkWin()
})
