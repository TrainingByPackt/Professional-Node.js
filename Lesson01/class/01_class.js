var Shape = function(x, y) {
    this.x = x;
    this.y = y;
};

Shape.prototype.getNumberOfSides = function() {
    return this.noOfSides;
};

var Circle = function(x, y, radius) {
    Shape.call(this, x, y);
    this.type = "Circle";
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return 3.14159 * this.radius * this.radius;
}

var circle = new Circle(10, 10, 30);

console.log("Type: " + circle.type);
console.log("x = " + circle.x + ", y = " + circle.y);
console.log("Area of shape = " + circle.area());

console.log("");

var Rectangle = function(x, y, width, height) {
    Shape.call(this, x, y);
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

var rectangle = new Rectangle(10, 10, 40, 10);

console.log("Type: " + rectangle.type);
console.log("x = " + rectangle.x + ", y = " + rectangle.y);
console.log("Area of Rectangle = " + rectangle.area());

// Convert the above example into the equivalent using the Class syntax discussed in Chapter 1 of the book
// Also, where appropriate, use other constructs we have discussed earlier in the Chapter
