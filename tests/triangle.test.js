const Triangle = require("../lib/triangle.js");
const Shape = require("../lib/shapes.js");

describe("Blue Triangle with yellow text", () => {
    describe("render", () => {
        it("should render a blue triangle with yellow text", () => {
            
            const text = "abc";
            const textColor = "yellow";
            const shapeColor = "blue";

            const shape = new Triangle(text, textColor, shapeColor);

            expect(shape.render()).toContain(`<polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />`);
        })
    })
})