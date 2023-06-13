const Circle = require("./circle.js");
const Shape = require("./shapes.js")

describe("Red Circle with White Text", () => {
    describe("render", () => {
        it("should render a red circle with white text", () => {
            const text = "xyz";
            const textColor = "white";
            const shapeColor = "red";

            const shape = new Circle(text, textColor, shapeColor);
            expect(shape.render()).toBe(`<svg height="300" width="200">
            <circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="55" y="115" font-size="4em" fill="${this.textColor}"><text>${this.text}</text></svg>`)
        })
    })
})