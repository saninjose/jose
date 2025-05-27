const cabezaArray = [
  'cabeza1.png',
  'cabeza2.png',
  'cabeza3.png',
  'cabeza4.png',
  'cabeza5.png',
  'cabeza6.png',
  'cabeza7.png',
  'cabeza8.png',
];

const ojosArray = [
  'ojos1.png',
  'ojos2.png',
  'ojos3.png',
  'ojos4.png',
  'ojos5.png',
  'ojos6.png',
  'ojos7.png',
  'ojos8.png',
];

const narizArray = [
  'nariz1.png',
  'nariz2.png',
  'nariz3.png',
  'nariz4.png',
  'nariz5.png',
  'nariz6.png',
  'nariz7.png',
  'nariz8.png',
];

const bocaArray = [
  'boca1.png',
  'boca2.png',
  'boca3.png',
  'boca4.png',
  'boca5.png',
  'boca6.png',
  'boca7.png',
  'boca8.png',
];

const cabezaTag = document.getElementById('cabezaImg');
const ojosTag = document.getElementById('ojosImg');
const narizTag = document.getElementById('narizImg');
const bocaTag = document.getElementById('bocaImg');



function generateRandomPicture(cabezaTag, ojosTag, narizTag, bocaTag, cabezaArray, ojosArray, narizArray, bocaArray) {
  let randomNum1 = Math.floor(Math.random() * cabezaArray.length);
  let randomNum2 = Math.floor(Math.random() * ojosArray.length);
  let randomNum3 = Math.floor(Math.random() * narizArray.length);
  let randomNum4 = Math.floor(Math.random() * bocaArray.length);
  cabezaTag.setAttribute('src', './assets/' + cabezaArray[randomNum1]);
  ojosTag.setAttribute('src', './assets/' + ojosArray[randomNum2]);
  narizTag.setAttribute('src', './assets/' + narizArray[randomNum3]);
  bocaTag.setAttribute('src', './assets/' + bocaArray[randomNum4]);
}

window.onload = () =>
  generateRandomPicture(cabezaTag, ojosTag, narizTag, bocaTag, cabezaArray, ojosArray, narizArray, bocaArray);
//window.onload = () => generateRandomPicture(caraTag, gafitasArray);

window.onresize = () =>
  generateRandomPicture(cabezaTag, ojosTag, narizTag, bocaTag, cabezaArray, ojosArray, narizArray, bocaArray);
//window.onresize = () => generateRandomPicture(caraTag, gafitasArray);

  function reloadPage(){
  var refreshEnabled = document.getElementById('auto-refresh-checkbox');
  if(refreshEnabled.checked) {
    window.location.reload(1);
  }
}
