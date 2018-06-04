function MovieStar(name) {
    this.name = name;
}

const movieStar = new MovieStar("Al Pacino");

MovieStar.prototype.stunt = function() {
    setTimeout(function cb() {
        console.log("Animated Stunt for " + this.name);
    }, 1000);
};

movieStar.stunt();

MovieStar.prototype.stunt = function() {
    setTimeout((function cb() {
        console.log("Animated Stunt for " + this.name);
    }).bind(this), 1000);
};

movieStar.stunt();

// Convert this example to use the arrows syntax and demonstrate that the scoping of the bound this scope is
// automatically inherited from the parent scope

// Answer:
// MovieStar.prototype.stunt = function() {
//     setTimeout(() => console.log("Animated Stunt for " + this.name), 1000);
// };
//
// movieStar.stunt();