const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board')


let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let btnAttr = e.target.getAttribute('data-time')
        time = Number(btnAttr)
        startGame();
    }
})

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
        board.innerHTML = `Ваш счет: ${score}`
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function createRandomCircle() {
    const circle = document.createElement('div')

    circle.classList.add('circle')

    let {width, height} = board.getBoundingClientRect()

    let size = randomNumber(10, 80);

    let x = randomNumber(0, width - size)
    let y = randomNumber(0, height - size)

    circle.style = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${randomColor()}
    `
    board.appendChild(circle)

}

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
        randomColor()
    }
})


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

let color = ['linear-gradient(#e66465, #9198e5)', ' linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%)', 'linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)', 'linear-gradient(45deg, red, blue)', 'linear-gradient(to right, blue, pink)', 'linear-gradient(#915C83, #EFDECD)', 'linear-gradient(#9890e3, #b1f4cf)', 'linear-gradient(#e9defa, #fbfcdb)', 'linear-gradient(#a88beb,f8ceec)']

    


function randomColor() {
    let color2 = Math.floor(Math.random() * color.length);
    return color[color2]
}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
  
//   var red = getRandomInt(255);
//   var green = getRandomInt(255);
//   var blue = getRandomInt(255);
  
  



// const obj = {
//     name: 'John',
//     age: 30
// }



// let userName = obj.name

// let userAge = obj.age



// let {name, age, secondName: secondName = 'Johnson'} = obj


// console.log(name, secondName, age);


// let arr = ['1', '2', 'apple', 'plum']

// let [one, two] = ['1', '2', 'apple', 'plum']


// console.log(one);
// console.log(two);

