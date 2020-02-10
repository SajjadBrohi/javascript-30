const BANDS_TAG = document.querySelector("#bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function slice(string) {
    if (string.startsWith("The ")) {
        return string.slice(4);
    } else if (string.startsWith("An ")) {
        return string.slice(3);
    } else if (string.startsWith("A ")) {
        return string.slice(2);
    } else {
        return string
    }
}

bands.sort((a, b) => slice(a) > slice(b) ? 1 : -1 );

BANDS_TAG.innerHTML = 
 bands.map((band) =>  `<li> ${band} </li>`).join('');

