//Template for my project Yumicode 2022

const pop = {
    //^VARIABLES
    element: document.querySelector('#project'),
    formElement: document.querySelector('form'),
    colorsElement: document.querySelector('.colors'),
    numberElement: document.querySelector('.number'),
    popped: 0,
    /**/
    titles: [
        'Popping game',
        'Gotta pop them all !',
        ''
    ],
    balloonsColor: {
        pastel: [
            '#6867AC',
            '#A267AC',
            '#CE7BB0',
            '#FFBCD1',
            '#D9D7F1',
            '#FFFDDE',
            '#FFF9F9',
            '#F3E9DD'
        ],
        neon: [
            '#49FF00',
            '#FBFF00',
            '#28FFBF',
            '#FF0000',
            '#0CECDD',
            '#FF577F',
            '#FF5200',
            '#F0134D'
        ]
    },
    //^INIT
    init: function () {
        this.getTitles();
        this.inputsColor();
        this.inputNumber();
        this.submitBtn();
        this.addBalloon();
        this.balloons();
    },
    //^FUNCTIONS
    //~change titles and text
    getTitles: function () {
        for (let title = 0; title < template.headerTxt.length; title++) {
            template.headerTxt[title] = pop.titles[title];
        };
    },
    //~create a balloon
    addBalloon: function () {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');

        this.inputsChecked(balloon);

        pop.element.appendChild(balloon);

        balloon.addEventListener('click', (event) => {
            this.popBalloon(event);
            if (!balloon.classList.contains('sound')) {
                //sound
                balloon.appendChild(this.audio());
                balloon.classList.add('sound');
                this.audio().play();
                document.querySelector('.audio').remove();
                this.popped++;
            };
            balloon.removeEventListener('click', (event) => {  
            })
        });
    },
    //~remove event
    removeEvent: function (e) {
        e.target.removeEventListener('click', (event) => {});
    },
    //~pop balloon
    popBalloon: function (event) {
        let popBalloon = event.target;
        if (popBalloon.classList.contains('balloon')) {
            //display
            popBalloon.style.backgroundColor = '';
            popBalloon.style.boxShadow = 'none';
            popBalloon.textContent = 'POP!';
            popBalloon.classList.add('popped');

        }
        console.log(popBalloon);
        return popBalloon;
    },
    //~add audio
    audio: function () {
        let audio = document.createElement('audio');
        audio.classList.add('audio');
        audio.src = '../audio/mixkit-retro-game.wav';
        return audio;
    },
    //~play win
    audioWin: function () {
        let audioWIN = document.createElement('audio');
        audioWIN.classList.add('audio-win');
        audioWIN.src = 'popping-game/audio/fairy-win.wav';
        return audioWIN;
    },
    //~randomColor pastel
    randomColorPastel: function () {
        let pastelColors = pop.balloonsColor.pastel;
        let random = Math.floor(Math.random() * pastelColors.length);
        let randomColorPastel = pastelColors[random];
        console.log(randomColorPastel);
        return randomColorPastel;
    },
    //~randomColor neon
    randomColorNeon: function () {
        let neonColors = pop.balloonsColor.neon;
        let random = Math.floor(Math.random() * neonColors.length);
        let randomColorNeon = neonColors[random];
        console.log(randomColorNeon);
        return randomColorNeon;
    },
    //~create inputs color
    inputsColor: function () {
        pop.colorsElement.insertAdjacentHTML('afterbegin', `
        <label for="color">Which theme ?</label>
                    <input type="radio" name="color" id="neon"> Neon
                    <input type="radio" name="color" id="pastel"> Pastel
        `)
    },
    //~inputs checked
    inputsChecked: function (balloon) {
        let inputPastelElement = document.querySelector('#pastel');
        let inputNeonElement = document.querySelector('#neon');

        inputPastelElement.addEventListener('change', (event) => {
            balloon.style.backgroundColor = `${pop.randomColorPastel()}`;
        });

        inputNeonElement.addEventListener('change', (event) => {
            balloon.style.backgroundColor = `${pop.randomColorNeon()}`;
        });
    },
    //~input number
    inputNumber: function () {
        pop.numberElement.insertAdjacentHTML('afterbegin', `How many balloons ?
        <input type='number' id='number' min='10' max='100' placeholder='min 10 - max 100' >`);
    },
    //~input number balloons
    balloons: function () {
        let inputNumber = document.querySelector('#number');
        
    },
    //~reset
    reset: function () {
        //erase all
    },
    //~submit btn
    submitBtn: function () {
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = 'Submit';
        this.formElement.appendChild(btn);
    }

}