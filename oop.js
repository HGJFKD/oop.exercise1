var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class Shape 
var Shape = /** @class */ (function () {
    function Shape(info, draw) {
        if (info === void 0) { info = "This is a Shape"; }
        if (draw === void 0) { draw = "drawing a shape"; }
        this.info = info;
        this.draw = draw;
    }
    Shape.prototype.getInfo = function () {
        return this.info;
    };
    ;
    Shape.prototype.ConsoleLogDraw = function () {
        console.log(this.draw);
    };
    ;
    return Shape;
}());
;
// class Rectangle extends Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this) || this;
        _this.info = "This is a Recktangle";
        _this.height = height;
        _this.width = width;
        return _this;
    }
    ;
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    ;
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
        return this.area();
    };
    Rectangle.prototype.combinationRectangle = function (rectangleA, rectangleB) {
        return new Rectangle(rectangleA.height + rectangleB.height, rectangleA.width + rectangleB.width);
    };
    return Rectangle;
}(Shape));
// Square extends Rectangle
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        return _super.call(this, sideLength, sideLength) || this;
    }
    return Square;
}(Rectangle));
;
// class ColoredRectangle extends Rectangle
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(height, width, color) {
        var _this = _super.call(this, height, width) || this;
        _this.color = color;
        _this.info = "This is a rectangle in color " + _this.color;
        return _this;
    }
    ;
    return ColoredRectangle;
}(Rectangle));
// class Circle extends Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(draw) {
        if (draw === void 0) { draw = "drawing a Circle"; }
        var _this = _super.call(this) || this;
        _this.draw = draw;
        return _this;
    }
    return Circle;
}(Shape));
;
// class Triangle extends Shape
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(draw) {
        if (draw === void 0) { draw = "drawing a Triangle"; }
        var _this = _super.call(this) || this;
        _this.draw = draw;
        return _this;
    }
    ;
    return Triangle;
}(Shape));
;
// class SquareShaped extends Shape
var SquareShaped = /** @class */ (function (_super) {
    __extends(SquareShaped, _super);
    function SquareShaped(draw) {
        if (draw === void 0) { draw = "drawing a Square"; }
        var _this = _super.call(this) || this;
        _this.draw = draw;
        return _this;
    }
    ;
    return SquareShaped;
}(Shape));
;
function renderShapes(shape) {
    shape.forEach(function (shape) { return shape.ConsoleLogDraw(); });
}
// console.log rectangleA
var rectangleA = new Rectangle(20, 30);
console.log("Rectangle area is " + rectangleA.area() + " " + rectangleA.getInfo());
console.log("\n ===");
var rectangleB = new Rectangle(25, 30);
console.log("Rectangle area is " + rectangleB.area() + " " + rectangleB.getInfo());
console.log("\n ===");
// console.log combinationRectangle
console.log(Rectangle.prototype.combinationRectangle(rectangleA, rectangleB));
console.log("\n ===");
// console.log colored Rectangle
var coloredRectangle = new ColoredRectangle(2, 5, "red");
console.log("colored Rectangle area is " + coloredRectangle.area() + " " + coloredRectangle.getInfo());
console.log("\n ===");
// console.log Square
var square = new Square(5);
console.log("square area is " + square.scale(5) + " " + square.getInfo());
console.log("\n ===");
