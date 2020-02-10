const BANDS_TAG = document.querySelector("#bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function slice(string) {
    return string.replace(/^(an |a |the )/i, '').trim();
}

bands.sort((a, b) => slice(a) > slice(b) ? 1 : -1);

BANDS_TAG.innerHTML =
    bands.map((band) => `<li> ${band} </li>`).join('');

