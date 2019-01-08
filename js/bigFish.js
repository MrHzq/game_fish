var fishObj = function() {
    this.x
    this.y
    this.angle
    this.fishEye = new Image()
    this.fishBody = new Image()
    this.fishTail = new Image()
}
fishObj.prototype.init = function(type) {
    if (type == 'big') {
        this.fishEye.src = './src/bigEye0.png'
        this.fishBody.src = './src/bigSwim0.png'
        this.fishTail.src = './src/bigTail0.png'
        this.x = canvasWidth * 0.5
        this.y = canvasHeight * 0.5
    } else {
        this.fishEye.src = './src/babyEye0.png'
        this.fishBody.src = './src/babyFade0.png'
        this.fishTail.src = './src/babyTail0.png'
        this.x = canvasWidth * 0.6
        this.y = canvasHeight * 0.6
    }
    this.angle = 0
}
fishObj.prototype.draw = function() {
    //lerp x,y
    this.x = lerpDistance(mx, this.x, 0.9)
    this.y = lerpDistance(my, this.y, 0.9)

    //计算angle Math.atan2(y,x)
    this.angle = lerpAngle(
        Math.atan2(my - this.y, mx - this.x) + Math.PI,
        this.angle,
        0.9
    )

    ctx1.save()
    ctx1.translate(this.x, this.y)
    ctx1.rotate(this.angle)
    ctx1.drawImage(
        this.fishEye,
        -this.fishEye.width * 0.5,
        -this.fishEye.height * 0.5
    )
    ctx1.drawImage(
        this.fishBody,
        -this.fishBody.width * 0.5,
        -this.fishBody.height * 0.5
    )
    ctx1.drawImage(
        this.fishTail,
        this.fishTail.width * 0.5,
        -this.fishTail.height * 0.5
    )
    ctx1.restore()
}
