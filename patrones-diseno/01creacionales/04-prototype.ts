/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
    public title: string;
    public author: string;
    public content: string;

    constructor(title: string, author: string, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    dysplayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Content: ${this.content}`);
    }

    /**
     * Creates and returns a shallow copy of the current Document instance.
     * 
     * This method uses Object.assign to create a new object with the same property values
     * as the current instance. Note that this is a shallow copy, meaning nested objects
     * or arrays will still reference the same memory locations as the original.
     * 
     * @returns {Document} A new Document instance with the same property values as the current instance.
     */
    clone(): Document {
        //return Object.assign({}, this); //solo crea un objeto literal
        //return {...this}; // ES6 spread operator (ES2018) solo crea un objeto literal
        return new Document(this.title, this.author, this.content); // ES6 constructor function syntax
    }

}

function main() {
    const doc1 = new Document('Documento 1', 'Juan Pablo', 'Contenido del documento 1');
    console.log({ doc1 });
    doc1.dysplayInfo();

    const doc2 = doc1.clone();
    doc2.title = 'Documento 2';
    doc2.author = 'Maria';
    doc2.content = 'Contenido del documento 2';
    console.log({ doc2 });
    doc2.dysplayInfo();

    const doc3 = { ...doc1 };
    doc3.title = 'Documento 3';
    console.log({ doc3 });
    //doc3.dysplayInfo();	
    //error: Uncaught (in promise) TypeError: doc3.dysplayInfo is not a function
    //because doc3 is not an instance of Document, it's an object literal.
    //una instancia de objeto es la creación de un objeto a partir de una clase, 
    //mientras que un objeto literal es una variable que almacena datos en pares clave-valor    

    // Si deseamos cambiar doc3 a una instancia de Document, tendríamos que hacer:
    // doc3 = new Document(doc3.title, doc3.author, doc3.content);
    // En este caso, doc3 sería una instancia de Document, pero no una copia de doc1.
    // Aquí funcionaría el método displayInfo()    
}

main();

