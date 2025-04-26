/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

/**
 1.	Completen el método copyWith en la clase Player para que permita 
 crear una copia con cambios en name, score o level.
 
 2.	Usen el código cliente para probar el funcionamiento de copyWith, 
 haciendo cambios en el puntaje, nivel y nombre del jugador.
 */

 import { COLORS } from '../helpers/colors.ts';

 // 1. Clase Player inmutable
 class Player {
   readonly name: string;
   readonly score: number;
   readonly level: number;

   constructor(name: string, score: number, level: number) {
     if (typeof name !== 'string' || name.trim() === '') {
       throw new Error('Name must be a non-empty string.');
     }
     if (typeof score !== 'number' || score < 0) {
       throw new Error('Score must be a non-negative number.');
     }
     if (typeof level !== 'number' || level <= 0 || !Number.isInteger(level)) {
       throw new Error('Level must be a positive integer.');
     }
     this.name = name;
     this.score = score;
     this.level = level;
   }

   static createPlayer(name: string, score: number, level: number): Player {
     return new Player(name, score, level);
   }

   // Método copyWith para crear una copia modificada del jugador
   copyWith({ name, score, level }: Partial<Player>): Player {
     return new Player(
       name ?? this.name,
       score ?? this.score,
       level ?? this.level
     );
   }

   displayState(): void {
     console.log(`\n%cJugador: ${this.name}`, COLORS.green);
     console.log(`%cPuntaje: ${this.score}`, COLORS.yellow);
     console.log(`%cNivel: ${this.level}`, COLORS.blue);
   }
 }
 
 // 2. Código Cliente para probar
 function main() {
   // Crear jugador inicial
   let player = new Player('Carlos', 0, 1);
   console.log('Estado inicial:');
   player.displayState();
 
   // Incrementar el puntaje
   player = player.copyWith({ score: 10 });
   console.log('\nDespués de incrementar el puntaje:');
   player.displayState();
 
   // Subir de nivel
   player = player.copyWith({ level: 2 });
   console.log('\nDespués de subir de nivel:');
   player.displayState();
 
   // Cambiar el nombre del jugador
   player = player.copyWith({ name: 'Carlos Pro' });
   console.log('\nDespués de cambiar el nombre:');
   player.displayState();
 }
 
 main();