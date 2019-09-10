class Person {
    constructor(fullName, favBand) {
        this.name = fullName;
        this.band = favBand;
    }

    // methods
    greet() {
        console.log('Yo, I\'m ' + this.name + ' and I like ' + this.band );
    }
}

class Entertain extends Person {
    watch() {
        console.log(this.name + ' is going out to the movies tonight!')
    }
}

let john = new Person('John', 'Nirvana');
john.greet();

let jane = new Entertain('Jane', 'Metallica');
jane.greet();
jane.watch();