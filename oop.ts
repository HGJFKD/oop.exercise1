//Class Shape 
class Shape {
    info : string;
    draw: string;

    constructor (info :string = "This is a Shape", draw: string = "drawing a shape"){
        this.info = info;
        this.draw = draw;
    }

    getInfo () : string {
        return this.info;
    };

    ConsoleLogDraw () : void {
        console.log(this.draw);       
    };
};

// class Rectangle extends Shape
class Rectangle extends Shape{
    height : number
    width :number
        
    constructor(height : number, width :number) {
        super ()
        this.info = "This is a Recktangle"
        this.height = height;
        this.width = width;       
    };

    area(): number {
        return this.height * this.width;
    };

    scale(factor: number): number {
        this.width *= factor;
        this.height *= factor;
        return this.area();
    }

    combinationRectangle(rectangleA :Rectangle, rectangleB :Rectangle) : Rectangle {
        return new Rectangle (rectangleA.height + rectangleB.height,
            rectangleA.width + rectangleB.width)
    }
}

// Square extends Rectangle
class Square extends Rectangle{
    sideLength : number
    draw: string;
    
    constructor(sideLength : number ,draw: string = "drawing a Triangle") {
        super(sideLength, sideLength) 
        this.draw = draw       
    }
};

// class ColoredRectangle extends Rectangle
class ColoredRectangle extends Rectangle {
    color : string
    
    constructor(height : number, width :number, color : string) {
        super (height, width)
        this.color = color 
        this.info = "This is a rectangle in color " + this.color
    };
}

// class Circle extends Shape
class Circle extends Shape {
    draw: string;

    constructor (draw: string = "drawing a Circle"){
        super()
        this.draw = draw;
    }
};

// class Triangle extends Shape
class Triangle extends Shape {
    draw: string;

    constructor (draw: string = "drawing a Triangle"){
        super()
        this.draw = draw;
    };
};

// class SquareShaped extends Shape
class SquareShaped  extends Shape {
    draw: string;

    constructor (draw: string = "drawing a Square"){
        super()
        this.draw = draw;
    };
};

// Exercise 5
function renderShapes (shape :Shape[]) : void {
    shape.forEach (shape => shape.ConsoleLogDraw() )
}

// console.log rectangleA
const rectangleA = new Rectangle(20, 30)
console.log("Rectangle area is " + rectangleA.area()+ " " + rectangleA.getInfo());
console.log("\n ===");

const rectangleB = new Rectangle(25, 30)
console.log("Rectangle area is " + rectangleB.area()+ " " + rectangleB.getInfo());
console.log("\n ===");

// console.log combinationRectangle
console.log(Rectangle.prototype.combinationRectangle(rectangleA, rectangleB));
console.log("\n ===");

// console.log colored Rectangle
const coloredRectangle = new ColoredRectangle (2, 5, "red")
console.log("colored Rectangle area is " + coloredRectangle.area() + " " + coloredRectangle.getInfo());
console.log("\n ===");

// console.log Square
const square = new Square (5)
console.log("square area is " + square.scale(5) + " " + square.getInfo());
console.log("\n ===");


