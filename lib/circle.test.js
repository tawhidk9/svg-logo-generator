const Circle = require("./circle.js");
const Shape = require("./shapes.js")

describe("Red Circle with White Text", () => {
    describe("render", () => {
        it("should render a red circle with white text", () => {
            const text = "xyz";
            const textColor = "white";
            const shapeColor = "red";

            const shape = new Circle(text, textColor, shapeColor);
            expect(shape.render()).toContain(`<circle cx="100" cy="100" r="80" fill="${shapeColor}" />`);
        })
    })
})