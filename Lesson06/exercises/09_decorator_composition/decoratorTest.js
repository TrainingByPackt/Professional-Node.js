const decorate = require('./decorator');

class World {

    hello() {
        console.log("")
    };

    world() {
        console.log('World');
    };
};

const Earth = new World();

const decorator = decorate(Earth);

decorator.greetings();
decorator.world();