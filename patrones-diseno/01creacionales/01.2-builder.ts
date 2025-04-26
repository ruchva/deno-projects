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
import { COLORS } from '../helpers/colors.ts';

class QueryBuilder {
    private table: string;
    private fields: string[] = [];
    private conditions?: string[] = [];
    private orderFields?: string[] = [];
    private limitCount?: number;

    constructor(table: string) {
        this.table = table;
    }
    
    select(...fields: string[]): QueryBuilder {
        this.fields = fields;
        return this;
    }
    
    where(...condition: string[]): QueryBuilder {
        this.conditions! =condition;
        return this;
      }
    
    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.orderFields!.push(`${field} ${direction}`);
        return this;
    }
    
    limit(limit: number): QueryBuilder {
        this.limitCount = limit;
        return this;
    }
    
    execute(): string {
        const fields = 
          this.fields.length > 0 
            ? this.fields.join(', ') 
            : '*';
    
        const whereClause =
          this.conditions!.length > 0
            ? `WHERE ${this.conditions!.join(' AND ')}`
            : ' ';
    
        const orderByClause =
          this.orderFields!.length > 0
            ? `ORDER BY ${this.orderFields!.join(', ')}`
            : '';
    
        const limitClause = 
          this.limitCount 
            ? `LIMIT ${this.limitCount}` 
            : '';
    
        return `SELECT ${fields} \nFROM ${this.table} \n${whereClause} \n${orderByClause} \n${limitClause}`;
      }
}

function main() {
    const usersQuery = new QueryBuilder('users')
      .select('id', 'name', 'email')
      .where('age > 20','disabled = false',"country = 'BOL'")
      //.where("country = 'CHI'")
      .orderBy('name', 'ASC')
      .orderBy('age', 'DESC')
      .limit(100)
      .execute();
  
    console.log('%cConsulta:\n', COLORS.red);
    console.log(usersQuery);

    // Select id, name, email from users where age > 20 and disabled = false and country = 'BOL' order by name ASC, age DESC LIMIT 100;
    // Select id, name, email from users where age > 20 and country = 'CHI' order by name ASC, age DESC LIMIT 100;
    // Select id, name, email from users where age > 20 and (disabled = false and country = 'BOL') order by name ASC, age DESC LIMIT 100;
  
}

main();