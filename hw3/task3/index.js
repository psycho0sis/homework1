// a

class Zoo {
    workers = [];
    animals = [];

    get adress() {
        return this._adress;
    }
    set adress(value) {
        this._adress = value;
    }
    get area() {
        return this._area;
    }
    set area(value) {
        this._area = value;
    }
    get establishedDate() {
        return this._establishedDate;
    }
    set establishedDate(value) {
        this._establishedDate = value;
    }
    get ticketPrice() {
        return this._ticketPrice;
    }
    set ticketPrice(value) {
        this._ticketPrice = value;
    }

    addWorker(value) {
        this.workers.push(value);
    }
    removeWorker(index) {
        this.workers.splice(index, 1);
    }
    showWorkers() {
        console.log(this.workers);
    }
    editWorkers(index) {
        this.workers[index]
    }
    addAnimal(value) {
        this.animals.push(value);
    }
    removeAnimal(index) {
        this.animals.splice(index, 1);
    }
    showAnimals() {
        console.log(this.animals);
    }
}

const myzoo = new Zoo();
myzoo.adress = "Kosmonavtov str";
myzoo.area = "200 sq.m.";
myzoo.establishedDate = "20.09.2013";
myzoo.ticketPrice = "20$";
myzoo.addWorker("Marina");
myzoo.addWorker("Svetlana");
myzoo.addWorker("Alex");
myzoo.removeWorker(2);
myzoo.showWorkers();
myzoo.addAnimal("Tiger");
myzoo.addAnimal("Lion");
myzoo.addAnimal("Bear");
myzoo.removeAnimal(2);
myzoo.showAnimals();
console.log(myzoo.adress)
console.log(myzoo.area)
console.log(myzoo.establishedDate)
console.log(myzoo.ticketPrice)

const dataWrapper = document.querySelector(".data");
const div = document.createElement("div");
div.innerHTML += `
    <h2>Data of the Zoo</h2>
        <p>Adress: ${myzoo.adress}</p>
        <p>Area: ${myzoo.area}</p>
        <p>Established date: ${myzoo.establishedDate}</p>
        <p>Ticket price: ${myzoo.ticketPrice}</p>
        <p>Animals: ${myzoo.animals}</p>
        <p>Workers: ${myzoo.workers}</p>
`
dataWrapper.append(div)

// b

class Animal {
    constructor(type, color, placeOfOrigin) {
        this.color = color;
        this.type = type;
        this.placeOfOrigin = placeOfOrigin;
    }

    get info() {
        console.log(this)
    }

    set weight(value) {
        return this._weight = value;
    }

    set height(value) {
         return this._height = value;
    }
    
}
    
const myanimal = new Animal("black", "lion", "Africa");
myanimal.weight = 198;
myanimal.height = 134;
console.log(myanimal)

// c

class Snakes extends Animal {
    constructor(color, placeOfOrigin) {
        super(color, "snake", placeOfOrigin);
    }
    set IsPoisonous(value) {
        return this.isPoisonous = value;
    }
}
    
const bill = new Snakes("tobby", "Africa")
bill.isPoisonous = true;
console.log(bill)

class CatLike extends Animal {
    constructor(color, placeOfOrigin) {
        super(color, "catlike", placeOfOrigin);
    }
    set IsSafeToPet(value) {
        return this.isSafeToPet = value;
    }
}
    
const john = new CatLike("white", "Russia")
john.isSafeToPet = true;
console.log(john)

class Birds extends Animal {
    constructor(color, placeOfOrigin) {
        super(color, "catlike", placeOfOrigin);
    }
    set IsFlying(value) {
        return this.isFlying = value;
    }
}
    
const bullfinch = new Birds("black", "Belarus")
bullfinch.isFlying = true;
console.log(bullfinch)
