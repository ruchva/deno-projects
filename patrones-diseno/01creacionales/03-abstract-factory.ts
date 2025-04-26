/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */
import { COLORS } from '../helpers/colors.ts';

interface Hamburger {
    prepare(): void;
}

interface Beverage {
    prepare(): void;
}

class ChickenHamburguer implements Hamburger {
    prepare(): void {
        console.log("Preparing a %cchicken hamburguer...", COLORS.green);
    }
}
class BeefHamburguer implements Hamburger {
    prepare(): void {
        console.log("Preparing a %cbeef hamburguer...", COLORS.green);
    }
}

class Coke implements Beverage {
    prepare(): void {
        console.log("Preparing a %ccoke...", COLORS.brown);
    }
}

class Pepsi implements Beverage {
    prepare(): void {
        console.log("Preparing a %cpepsi...", COLORS.brown);
    }
}

interface FoodFactory {
    createHamburger(): Hamburger;
    createBeverage(): Beverage;
}

class ChickenFoodFactory implements FoodFactory {
    createHamburger(): Hamburger {
        return new ChickenHamburguer();
    }
    createBeverage(): Beverage {
        return new Coke();
    }
}

class BeefFoodFactory implements FoodFactory {
    createHamburger(): Hamburger {
        return new BeefHamburguer();
    }
    createBeverage(): Beverage {
        return new Pepsi();
    }
}

function main(factory:FoodFactory) {
    
    const hamburger = factory.createHamburger();
    hamburger.prepare();
    const drink = factory.createBeverage();
    drink.prepare();
}

console.log('\n%cregular delivery:',COLORS.blue);
main( new ChickenFoodFactory() );

console.log('\n%cexpress delivery:', COLORS.blue);
main( new BeefFoodFactory() );



