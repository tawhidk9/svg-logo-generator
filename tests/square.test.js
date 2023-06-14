const Square = require("../lib/square.js");
const Shape = require("../lib/shapes.js");

describe("Teal Square with Pink Letters", () => {
    describe("render", () => {
        it("should render a teal square with pink text", () => {
            
            const text = "lmk";
            const textColor = "pink";
            const shapeColor = "teal";

            const shape = new Square(text, textColor, shapeColor);

            expect(shape.render()).toContain(`<rect width="160" height="160" fill="${shapeColor}" />`);
        })
    })
})