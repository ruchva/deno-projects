/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from '../helpers/colors.ts';

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;
  
    displayConfiguration() {
      console.log(`Configuración de la computadora
        CPU: ${this.cpu}  
        RAM: ${this.ram}  
        Almacenamiento: ${this.storage}  
        GPU: ${this.gpu ?? 'No tiene GPU'}  
        `);
    }
    
}     

class ComputerConfig {
    
    private computer: Computer;
    
    constructor() {
        this.computer = new Computer();
    }

    setCpu(cpu: string) {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string) {
        this.computer.ram = ram;
        return this;
    }
    
    setStorage(storage: string) {
        this.computer.storage = storage;
        return this;
    }
    
    setGpu(gpu: string) {
        this.computer.gpu = gpu;
        return this;
    }    

    build(): Computer {
        return this.computer;
    }

}

function main() {
    const computerConfig = new ComputerConfig();
    const computer = computerConfig
        .setCpu('Intel Core i9')
        .setRam('8GB')
        .setStorage('SSD 500GB')
        //.setGpu(COLORS.RED)
        .build();
        
    console.log('%cComputadora basica: ', COLORS.blue);
    computer.displayConfiguration();
    
    
    // Otra forma de construir la computadora
    const computer2 = new Computer();
    computer2.cpu = 'AMD Ryzen 5 3600';
    computer2.ram = '16GB';
    computer2.storage = 'SSD 1TB';
    computer2.gpu = 'NVIDIA 4GB Decicates';
    console.log('%cComputadora ruchva: ', COLORS.red);
    computer2.displayConfiguration();

}

main();

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 * * Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

  // ! Tarea: Crear un Director de Proyectos para gestionar proyectos en un equipo de desarrollo
  /**
   * Debe de tener los siguientes métodos:
   * - constructor(name: string)
   * - addDeveloper(developer: Developer): DirectorProject - agrega un nuevo desarrollador al equipo
   * - getTeam(): Developer[] - retorna el equipo de desarrollo
   * - getAverageAge(): number - retorna la media de edad del equipo
   * - getMostExperiencedDeveloper(): Developer - retorna el desarrollador con más años de experiencia
   * - getOldestDeveloper(): Developer - retorna el desarrollador más viejo
   * - getDevelopersByAgeRange(minAge: number, maxAge: number): Developer[] - retorna los desarrolladores que están en el rango de edad
   * - getDevelopersByLanguage(language: string): Developer[] - retorna los desarrolladores que utilizan el lenguaje de programación 
   * */

 
  

