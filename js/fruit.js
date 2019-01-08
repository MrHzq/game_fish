var fruitObj = function() {
    this.alive = [] /*boolean*/
    this.x = []
    this.y = []
    this.l = []
    this.type = []
    this.speed = []
    this.orange = new Image()
    this.blue = new Image()
}
fruitObj.prototype.num = 15

fruitObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false
        this.speed[i] = Math.random() * 0.01 + 0.005 //[0.01,0.015)
        this.type[i] = ''
    }
    this.orange.src = './src/fruit.png'
    this.blue.src = './src/blue.png'
}
fruitObj.prototype.draw = function() {
    for (var i = 0; i < this.num; i++) {
        //draw
        if (this.alive[i]) {
            if (this.l[i] >= 14) {
                this.y[i] -= this.speed[i] * deltaTime * 5
            } else {
                this.l[i] += this.speed[i] * deltaTime
            }

            ctx2.beginPath()
            ctx2.drawImage(
                this.type[i] == 'blue' ? this.blue : this.orange,
                this.x[i] - this.l[i] * 0.5,
                this.y[i] - this.l[i] * 0.5,
                this.l[i],
                this.l[i]
            )
            ctx2.stroke()
            if (this.y[i] <= 0) {
                this.alive[i] = false
            }
        }

        //find,born,fly
    }
}
fruitObj.prototype.born = function(i) {
    var aneID = Math.floor(Math.random() * 50)
    this.x[i] = ane.x[aneID]
    this.y[i] = 600 - ane.len[aneID]
    this.l[i] = 0
    this.alive[i] = true
    this.type[i] = Math.random() < 0.2 ? 'blue' : 'orange'
}

function fruitMointer() {
    for (var i = 0; i < fruit.num; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i)
        }
    }
}
