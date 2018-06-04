var person = {
    "firstname": "Al",
    "surname": "Pacino"
};

class MovieStar {
    constructor(person) {
        this.firstname = person['firstname'];
        this.surname = person['surname'];
    }

    getFirstname() {
        return this.firstname;
    }

    getSurname() {
        return this.surname;
    }

    getFullname() {
        return this.getFirstname() + this.getSurname();
    }
}

var alPacino = new MovieStar(person);

console.log("Full name: " + alPacino.getFullname());
console.log("Firstname: " + alPacino.getFirstname());
console.log("Surname: " + alPacino.getSurname());

// Using Object Literals to represent the person class, change the above example so that the object variable is instead
// an Object liberal. This should produce a cleaner syntax.