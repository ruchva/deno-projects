/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */
import { COLORS } from '../helpers/colors.ts';

//! arquetipo Singleton:
/*class _Singleton {
    
    private static instance: _Singleton;
    private constructor() {}
    public static getInstance(): _Singleton {
        if (!_Singleton.instance) {
            _Singleton.instance = new _Singleton();
        }
        return _Singleton.instance;
    }
    public doSomething(): void {
        // Implementación específica
    }
}*/

class DragonBalls {
    private static instance: DragonBalls;
    private dragonBalls: number;
    private ballsCollected: number;

    private constructor() {
        this.dragonBalls = 7;
        this.ballsCollected = 0;
    }    
    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('%clas pelotas del dragon han sido creadas por Kamisama', COLORS.green);
        }
        return DragonBalls.instance;
    }
    public collectDragonBalls(): void {
        if (this.ballsCollected >= this.dragonBalls) {
            console.log('%cNo hay más pelotas del dragón disponibles, puedes invocar a Shenlong', COLORS.red);
            return;
        } else if (this.ballsCollected < this.dragonBalls) {
            this.ballsCollected += this.dragonBalls;
            console.log('%cKamisama ha recolectado %d pelotas del dragón', COLORS.blue, this.ballsCollected);
            return;
        }
    }
    public invokeShenlong(): void {
        if (this.ballsCollected === this.dragonBalls) {
            console.log('%cShenlong ha sido invocado, pide tu deseo', COLORS.green);
            this.ballsCollected =0;
            return;
        } else {
            console.log('%cNo hay suficientes pelotas del dragón para invocar a Shenlong', COLORS.red);
        }
    }
    public showDragonBalls(): void {
        console.log(`%cActualmente hay ${this.dragonBalls} pelotas del dragón`, COLORS.green);
        console.log(`%cKamisama ha recogido ${this.ballsCollected} pelotas`, COLORS.blue);
    }
}

// Prueba del Singleton
function main() {
    const db1 = DragonBalls.getInstance();//sin new DragonBalls xq es estatico
    db1.showDragonBalls();
    db1.collectDragonBalls();
    db1.showDragonBalls();
    db1.invokeShenlong();
    db1.showDragonBalls();
}

main();