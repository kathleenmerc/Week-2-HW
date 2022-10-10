// W2D2 Classes Homework

// Creating Classes:
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor (nameParam, colorParam, weightParam) {
        this.name = nameParam,
        this.color = colorParam,
        this.weight = weightParam
    }

    meows () {
        console.log(`${this.name} says meow!`)
    }

    isHungry (hungerCheck) {
        if (hungerCheck === true) {
            console.log(`${this.name} is hungry and needs to be fed. Current weight is: ${this.weight}.`)
        } else {
            console.log(`${this.name} already ate.`)
        }
    }

    isBored (boredCheck) {
        if (boredCheck === true) {
            console.log(`${this.name} wants to play!`)
         } else {
            console.log(`${this.name} is relaxing.`)
         }
    }
} 

const TomCat = new Cat ("Tom", "black and white", "10 lbs")
const JerryCat = new Cat ("Jerry", "orange", "12 lbs")
console.log(TomCat)
console.log(JerryCat)

TomCat.meows()
TomCat.isHungry(true)
TomCat.isBored(true)

JerryCat.meows()
JerryCat.isHungry(false)
JerryCat.isBored(false)

// Constructors:
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(nameParam, ageParam, positionParam) {
        this.name = nameParam,
        this.age = ageParam,
        this.position = positionParam
    }

    saysGreeting () {
        console.log(`Ahoy Matey! My name is ${this.name}. I am ${this.age} years old. And I am the ${this.position}.`)
    }

    isThirsty (thirstCheck) {
        if (thirstCheck === true && this.age >= 21) {
            console.log(`${this.name} needs some rum.`)
        } else if (thirstCheck === true && this.age < 21) {
            console.log(`${this.name} can't have rum, but can have some juice.`)
        } else {
            console.log(`${this.name} is not thirsty right now.`)
        }
    }

    digsForGold () {
        console.log(`${this.name} is digging for gold.`)
    }
}


const captainSeadog = new Pirate ("Captain Seadog", 38, "captain")
const mirandaGoldTooth = new Pirate("Miranda Gold-Tooth", 31, "first mate")
const johnBlackeye = new Pirate("John Blackeye", 20, "navigator" )

const jollyRoger = [captainSeadog,mirandaGoldTooth,johnBlackeye]


const captainSylvesterShadows = new Pirate("Captiain Sylvester Shadows", 42, "captain")
const winterGreybeard = new Pirate("Winter Greybeard", 34, "gunner")
const petePegLeg = new Pirate("Pete Peg-Leg", 32, "cook")

const blackPearl = [captainSylvesterShadows, winterGreybeard, petePegLeg]


console.log(jollyRoger)
console.log(blackPearl)
