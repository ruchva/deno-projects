/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from "../helpers/index.ts";

interface Ability {
    use(): void;
    attack(): void;
    defend(): void;
}

class FireAbility implements Ability {
    use() {
        console.log("%cUsando habilidad de fuego", COLORS.yellow);
    }
    attack() {
        console.log("%cAtacando con fuego", COLORS.yellow);
    }
    defend() {
        console.log("%cDefendiendo con fuego", COLORS.yellow);
    }
}

class WaterAbility implements Ability {
    use() {
        console.log("%cUsando habilidad de agua", COLORS.blue);
    }
    attack() {
        console.log("%cAtacando con agua", COLORS.blue);
    }
    defend() {
        console.log("%cDefendiendo con agua", COLORS.blue);
    }
}

abstract class Character {
    constructor(protected ability: Ability) {
        this.ability = ability;
    }

    setAbility(ability: Ability) {
        this.ability = ability;
    }

    abstract performAbility(): void;
    abstract attack(): void;
    abstract defend(): void;
    abstract use(): void;
}

class Mage extends Character {
    override use(): void {
        throw new Error("Method not implemented.");
    }

    override performAbility() {
        console.log("%cRealizando habilidad de mago", COLORS.purple);
        this.ability.use();
    }

    override attack() {
        console.log("%cAtacando como mago", COLORS.purple);
        this.ability.attack();
    }
    override defend() {
        console.log("%cDefendiendo como mago", COLORS.purple);
        this.ability.defend();
    }
}

class Warrior extends Character {
    override use(): void {
        throw new Error("Method not implemented.");
    }
    constructor(ability: Ability) {
        super(ability);
    }

    performAbility() {
        console.log("%cRealizando habilidad de guerrero", COLORS.red);
        this.ability.use();
    }

    attack() {
        console.log("%cAtacando como guerrero", COLORS.red);
        this.ability.attack();
    }
    defend() {
        console.log("%cDefendiendo como guerrero", COLORS.red);
        this.ability.defend();
    }
}


function main() {
    const fireAbility = new FireAbility();
    const waterAbility = new WaterAbility();

    const mage = new Mage(fireAbility);
    mage.performAbility();
    //mage.attack();
    mage.defend();

    const warrior = new Warrior(waterAbility);
    warrior.performAbility();
    warrior.attack();
    //warrior.defend();

    // Cambiando la habilidad del guerrero a fuego
    warrior.setAbility(fireAbility);
    warrior.performAbility();
}
main();