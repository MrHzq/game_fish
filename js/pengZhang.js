// 检测大鱼与果实是否碰撞
function fishPZFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            if (
                calLength2(fruit.x[i], fruit.y[i], bigFish.x, bigFish.y) < 900
            ) {
                fruit.alive[i] = false
            }
        }
    }
}
