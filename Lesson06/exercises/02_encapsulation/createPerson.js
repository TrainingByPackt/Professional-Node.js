function createPerson(name) {
    const privateProperties = {};

    const person = {
      setName: name => {
        if (!name)
            throw new Error('A person must have a name');
        privateProperties.name = name;
      },
      getName: () => {
        return privateProperties.name;
      }
    };

    person.setName(name);
    return person;
}

const person = createPerson('James Bond');

console.log('Name is [from person.name] ' + person.name);
console.log('Name is [from getName] ' + person.getName());

