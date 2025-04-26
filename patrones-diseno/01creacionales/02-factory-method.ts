/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
import { COLORS } from '../helpers/colors.ts';

interface Hamburger {
    prepare(): void;
}

class Cheeseburger implements Hamburger {
    public prepare(): void {
        console.log("Preparing a %ccheese burger...",COLORS.green);
    }
}

class VeggieBurger implements Hamburger {
    public prepare(): void {
        console.log("Preparing a %cveggie burger...",COLORS.yellow);
    }
}

class BeefBurger implements Hamburger {
    public prepare(): void {
        console.log("Preparing a %cbeef burger...", COLORS.blue);
    }
}

//? metodo abstracto no permite crear instancias del mismo
//? nos permite definir una estructura o esqueleto
abstract class BurgerFactory {
    protected abstract createBurger(): Hamburger;
    orderHamburger():void{
        const burger = this.createBurger();
        burger.prepare();
    }
}

//? extendemos la clase abstracta 
//? construimos sobre la estructura, le ponemos carne al esqueleto                                                                                                                                                                                                                                                                                                                                                          
class CheeseburgerFactory extends BurgerFactory {
    override createBurger(): Hamburger {
        return new Cheeseburger();
    }
}

class VeggieBurgerFactory extends BurgerFactory {
    override createBurger(): Hamburger {
        return new VeggieBurger();
    }
}

class BeefBurgerFactory extends BurgerFactory {
    override createBurger(): Hamburger {
        return new BeefBurger();
    }
}

function main(){

    let burger: BurgerFactory;

    const burgerType =prompt('que tipo de hamburguesa desea? (cheese/veggie/beef)');

    switch(burgerType!.toLowerCase()){
        case 'cheese':
            burger = new CheeseburgerFactory();
            break;
        case'veggie':
            burger = new VeggieBurgerFactory();
            break;            
        case 'beef':
            burger = new BeefBurgerFactory();
            break;            
        default:
            throw new Error('no se reconoce el tipo de hamburguesa');            
    }

    burger.orderHamburger();    
}

main();

//! Tarea: implementar el Factory Method para crear objetos de una clase abstracta