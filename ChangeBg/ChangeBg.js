const stBtn = document.getElementById('start')
const ndBtn = document.getElementById('stop')

//Genrating random colors
let genrateColor = () => {
    let hexaDecimal = '0123456789ABCDEF'
    let color = '#'

    //the hex color value is 6 digit long
    for (let i = 0; i < 6; i++) {
        color += hexaDecimal[Math.floor(Math.random() * 16)];
    }
    return color
}
//Genrating random colors
let genrateColor2 = () => {
    let hexaDecimal = 'abcdef0123456789'
    let color = '#'

    //the hex color value is 6 digit long
    for (let i = 0; i < 6; i++) {
        color += hexaDecimal[Math.floor(Math.random() * 16)];
    }
    return color
}
let ele = document.getElementsByClassName('mainContainer')[0]

let setColor = () => {
    // ele.style.background = genrateColor();
    ele.style.background = `linear-gradient(to top right, ${genrateColor()} 10%, ${genrateColor2()} 100%)`;
}

let intervalId = null;
const startChangning = () => {
    intervalId = setInterval(() => {
        setColor();
    }, 1000)
}
stBtn.addEventListener('click', startChangning)

ndBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = null;
})




//trying to genrate gradient using this 
