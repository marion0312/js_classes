class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width
        this.height = _height
        this.color = _color
    }

    getArea() {
        return this.width * this.height
    }
}

let myRectangle1 = new Rectangle(3, 4, 'blue')
let myRectangle2 = new Rectangle(7, 3, 'red')

console.log(myRectangle1.getArea())
console.log(myRectangle2.getArea())