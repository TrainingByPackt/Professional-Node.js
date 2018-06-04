
function hoistingWithDeclaration() {
    var x = 5;
    var y;

    console.log("x is " + x + " and y is " + y);
    y = 7;
}

hoistingWithDeclaration();

function hoistingWithDeclarationAfterUse() {
    var x = 5;

    console.log("x is " + x + " and y is " + y);

    var y = 7;
}

hoistingWithDeclarationAfterUse();

// Why is the result the same in both? x is 5 and y is undefined
// Answer: This is because the declaration of y is hoisted to the top but NOT the assignment!