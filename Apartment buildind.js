class Human {
    constructor(nameHuman, genderHuman) {
        this.nameHuman = nameHuman;
        this.genderHuman = genderHuman;
    }
}
const residents = new Array();
class Apartment extends Human {
    addResidents(Human) {
        residents.push(this.nameHuman);
    };

}
const arrayApartment = new Array();
class House extends Apartment {
    constructor(maxNumberApartment) {
        super();
        this.maxNumberApartment = maxNumberApartment;
        // this.addApartment =[];
    }
    addApartment(Apartment) {
        if (residents.length < this.maxNumberApartment) {
            arrayApartment.push(residents);
            console.log(arrayApartment);
        }
        else { console.log("Error"); }
    }
}

const firstHuman = new Human();
const firstApartment = new Apartment("Ann", "Female");
firstApartment.addResidents();
const secondApartment = new Apartment("Den", "Male")
secondApartment.addResidents();
const firstHouse = new House(20);
firstHouse.addApartment();
secondApartment.addResidents();
const secondHouse = new House(4);
secondHouse.addApartment();
