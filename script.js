const bt_red = document.getElementById('bt-red')
const bt_yellow = document.getElementById('bt-yellow')
const bt_green = document.getElementById('bt-green')
const bt_off = document.getElementById('bt-off')
const trImg = document.getElementById('trLight')


function onRed(){
    trImg.src = './img/trafficRed.png'
}

function onYellow(){
    trImg.src = './img/trafficyellow.png'
}

const onGreen = () =>{
    trImg.setAttribute('src', './img/trafficGreen.png')
}

function auto(){
    setInterval(1, )
}

function off(event){
    console.log(event)
    trImg.src = './img/trafficLight.png'
}

bt_red.addEventListener('click', onRed)
bt_yellow.addEventListener('click', onYellow)
bt_green.addEventListener('click', onGreen)
bt_off.addEventListener('click', off)
