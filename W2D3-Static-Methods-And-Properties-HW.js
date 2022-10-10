// W2D3 Homework: Statuc Methods and Properties

// Static Methods and Properties:
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
    static name = "Michael Scott";
    static sex = "Male"
    static birthday = "3/15/1964";
    static place = "Scranton, PA";
    static friend = "Dwight Shrute";
    static enemy = "Toby Flenderson";

    static isSmart () {
        console.log(`${this.name} is smart.`)
    }

    static isConfident () {
        console.log(`${this.name} is confident.`)
    }

    static isForThePeople () {
        console.log(`${this.name} is here for the people of ${this.place}!`)
    }
}

console.log(Governor)
Governor.isSmart()
Governor.isConfident()
Governor.isForThePeople()


// Inheritance:
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
    constructor (nameParam, birthdayParam, moodParam) {
        this.name = nameParam,
        this.birthday = birthdayParam,
        this.mood = moodParam
    }

    sleeps () {
        console.log(`${this.name} is sleeping.`)
    }

    celebratesBirthday () {
        console.log(`${this.name} celebrates their birthday on ${this.birthday}.`)
    }

    feelsMood () {
        console.log(`${this.name} is feeling ${this.mood}.`)
    }
}

class PostalWorker extends Person {
    deliverMail () {
        console.log(`${this.name} is delivering mail.`)
    }

    sortMail () {
        console.log(`${this.name} is sorting mail.`)
    }

    notWorking () {
        console.log(`${this.name} does not work on their birthday, which is on ${this.birthday}.`)
    }
}

class Chef extends Person {
    cooking () {
        console.log(`${this.name} likes to cook when they feel ${this.mood}.`)
    }

    bakesCakes () {
        console.log(`${this.name} bakes a cake on their birthday which is on ${this.birthday}.`)
    }

    specializes (cuisine) {
        console.log(`${this.name} specializes in cooking ${cuisine} food.`)
    }
}

console.log(Person)
console.log(PostalWorker)
console.log(Chef)

const peterPiper = new PostalWorker ("Peter Piper", "3/23/1978", "happy")
console.log(peterPiper)
peterPiper.sleeps()
peterPiper.celebratesBirthday()
peterPiper.feelsMood()
peterPiper.deliverMail()
peterPiper.sortMail()
peterPiper.notWorking()

const suzySeashell = new PostalWorker ("Suzy Seashell", "6/10/1992", "surprised")
console.log(suzySeashell)
suzySeashell.sleeps()
suzySeashell.celebratesBirthday()
suzySeashell.feelsMood()
suzySeashell.deliverMail()
suzySeashell.sortMail()
suzySeashell.notWorking()

const gordonRamsay = new Chef ("Gordon Ramsay", "11/8/1966", "angry")
console.log(gordonRamsay)
gordonRamsay.sleeps()
gordonRamsay.celebratesBirthday()
gordonRamsay.feelsMood()
gordonRamsay.cooking()
gordonRamsay.bakesCakes()
gordonRamsay.specializes("French")

const martinYan = new Chef ("Martin Yan", "12/22/1948", "excited")
console.log(martinYan)
martinYan.sleeps()
martinYan.celebratesBirthday()
martinYan.feelsMood()
martinYan.cooking()
martinYan.bakesCakes()
martinYan.specializes("Chinese")