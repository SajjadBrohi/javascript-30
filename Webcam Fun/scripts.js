const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

class Code {
    constructor(revenent) {
        this.revenent = revenent;
        this.simka = 0;
        this.sick = function () {
            return this.revenent * 3
        }
    }

    speak() {
        console.log("I'm here")
    }
}

class SubCode extends Code {
    constructor(revenent) {
        super(revenent)
    }

    speak() {
        console.log("I'm Now here")
    }
}


let coder = new Code(3);
