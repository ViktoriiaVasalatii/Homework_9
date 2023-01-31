/* мережа фасфудів пропонує кілька виджів гамбургерів: (маленький(50 тугриків 20 калорій)  великий (100 тугриків 40 калорій)) 
Гамбургер може бути одним із декількох видів начинок: (сиром(+10 тугриків, + 20 калорій), салатом(+20 тугриків, +5 калорій), картоплею(+15 тугриків, +10 калорій))
Можна додати добавки: (посипати приправою(+15 тугриків, 0 калорій)б полити майонезом (+20 тугриків +5 калорій))
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ОПП підхід. 
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунки потрібних величин )*/

let caloriesHamburger;
let priceHamburger;
const SIZE_SMALL =[50, 20];
const SIZE_LARGE=[100,40];
const STUFFING_CHEESE=[10, 20];
const STUFFING_SALAD=[20, 5];
const STUFFING_POTATO=[15,10]
const TOPPING_MAYO=[20,5];
const TOPPING_SPICE=[25, 0];

class Hamburger {
    static toping_mayo;
    static toping_spice;
    constructor(sizeHamburger, stuffingHamburger){
        this.sizeHamburger = sizeHamburger;
        this.stuffingHamburger = stuffingHamburger;
    }
    addTopping(topingHamburger){

        if(topingHamburger == TOPPING_MAYO){
            this.toping_mayo = 'TOPPING_MAYO';
        }
        if(topingHamburger == TOPPING_SPICE){
            this.toping_spice = 'TOPPING_SPICE';
        }
    }
    
    calculate(){
        if (this.sizeHamburger == SIZE_LARGE){
            caloriesHamburger = SIZE_LARGE[1];
        }
        else if(this.sizeHamburger == SIZE_SMALL){
            caloriesHamburger = SIZE_SMALL[1];
        }
        if (this.stuffingHamburger == STUFFING_CHEESE){
            caloriesHamburger += STUFFING_CHEESE[1];
        }
        else if(this.stuffingHamburger == STUFFING_SALAD){
            caloriesHamburger += STUFFING_SALAD[1];
        }
        else if (this.stuffingHamburger == STUFFING_POTATO){
            caloriesHamburger += STUFFING_POTATO[1];
        }
        if( this.toping_mayo == 'TOPPING_MAYO'){
            caloriesHamburger +=TOPPING_MAYO[1];
        }
        if( this.toping_spice == 'TOPPING_SPICE'){
            caloriesHamburger +=TOPPING_SPICE[1];
        }
        console.log(`Калорії: ${caloriesHamburger}`);
    }
    calculatePrice(){
        if (this.sizeHamburger == SIZE_LARGE){
            priceHamburger = SIZE_LARGE[0];
        }
        else if(this.sizeHamburger == SIZE_SMALL){
            priceHamburger = SIZE_SMALL[0];
        }

        if (this.stuffingHamburger == STUFFING_CHEESE){
            priceHamburger += STUFFING_CHEESE[0];
        }
        else if(this.stuffingHamburger == STUFFING_SALAD){
            priceHamburger += STUFFING_SALAD[0];
        }
        else if (this.stuffingHamburger == STUFFING_POTATO){
            priceHamburger += STUFFING_POTATO[0];
        }

        if(this.toping_mayo == 'TOPPING_MAYO'){
            priceHamburger +=TOPPING_MAYO[0];
        }

        if( this.toping_spice == 'TOPPING_SPICE'){
            priceHamburger +=TOPPING_SPICE[0];
        }
        console.log(`Ціна:  ${priceHamburger}`);
        
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

hamburger.calculatePrice();

// добавка з майонезу
hamburger.addTopping(TOPPING_MAYO);

// запитаємо скільки там калорій
hamburger.calculate();

// скільки коштує
hamburger.calculatePrice();

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SPICE);

// // А скільки тепер коштує?
hamburger.calculatePrice();

console.log(hamburger);