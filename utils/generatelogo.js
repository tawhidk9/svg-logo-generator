const Shape = require("../lib/shapes.js");
const Circle = require("../lib/circle.js");
const Triangle = require("../lib/triangle.js");
const Square = require("../lib/square.js");

function generateLogo(data){
    if (data.shape === "Circle") {
        const circleLogo = new Circle(data.text, data.textColor, data.shapeColor)
        return circleLogo.render();
      } else if (data.shape === "Triangle") {
        const triangleLogo = new Triangle(data.text, data.textColor, data.shapeColor)
        return triangleLogo.render();
      } else {
        const squareLogo = new Square(data.text, data.textColor, data.shapeColor)
        return squareLogo.render();
      }
}

module.exports = generateLogo