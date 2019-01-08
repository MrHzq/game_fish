var canvas1
var canvas2
var ctx1
var ctx2
var lastTime
var deltaTime
var ane
var fruit
var bigFish
var mx
var my
var canvasWidth
var canvasHeight

document.body.onload = game

function game() {
    /*===游戏加载函数===*/

    init() /*初始化*/
    lastTime = Date.now()
    deltaTime = 0
    gameLoop()
}

function init() {
    /*===初始化函数===*/

    /*canvas1 画：鱼、环、UI等*/
    canvas1 = document.getElementsByClassName('canvas1')[0]
    ctx1 = canvas1.getContext('2d')
    canvas1.addEventListener('mousemove', onMouseMove, false)

    /*canvas2 画：背景、果实、海藻等*/
    canvas2 = document.getElementsByClassName('canvas2')[0]
    ctx2 = canvas2.getContext('2d')

    canvasWidth = canvas1.width
    canvasHeight = canvas1.height

    /*创建海藻对象并且初始化*/
    ane = new aneObj()
    ane.init()

    /*创建果实对象并且初始化*/
    fruit = new fruitObj()
    fruit.init()

    /*创建大鱼对象并且初始化*/
    bigFish = new fishObj()
    bigFish.init('big')

    mx = canvasWidth * 0.5
    my = canvasHeight * 0.5
}

function gameLoop() {
    /*===重复执行函数===*/

    ctx1.clearRect(0, 0, canvasWidth, canvasHeight)
    requestAnimFrame(gameLoop)
    var now = Date.now()
    deltaTime = now - lastTime
    lastTime = now
    if (deltaTime > 40) deltaTime = 40
    drawBackground()
    ane.draw()
    fruitMointer()
    fruit.draw()
    bigFish.draw()
    fishPZFruit()
}

function onMouseMove(e) {
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX
        my = e.offSetY == undefined ? e.layerY : e.offSetY
    }
}

function drawBackground() {
    /*===绘制背景===*/

    var bgImage = new Image()
    bgImage.src = './src/background.jpg'
    ctx2.beginPath()
    ctx2.drawImage(bgImage, 0, 0, canvasWidth, canvasHeight)
    ctx2.stroke()
}
