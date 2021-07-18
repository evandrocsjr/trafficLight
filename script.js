const bt_red = document.getElementById('bt-red')
const bt_yellow = document.getElementById('bt-yellow')
const bt_green = document.getElementById('bt-green')
const trImg = document.getElementById('trLight')


function onRed(){
    trImg.src = './img/trafficRed.png'
}

function onYellow(){
    trImg.src = './img/trafficyellow.png'
}

function onGreen(){
    trImg.setAttribute('src', './img/trafficGreen.png')
}

bt_red.addEventListener('click', onRed)
bt_yellow.addEventListener('click', onYellow)
bt_green.addEventListener('click', onGreen)
