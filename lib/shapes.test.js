const {Circle, Triangle, Square} = require("./shapes");

describe("Circle", () => {
    test("for a red circle", () => {
        
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#FF0000" />');
    });
});