/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */
class Persona {
    #nombre;
    #edad;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;
    #dni;
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
    this.#dni = this.generaDNI();
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  get sexo() {
    return this.#sexo;
  }

  set sexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }

  get peso() {
    return this.#peso;
  }

  set peso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }

  get altura() {
    return this.#altura;
  }

  set altura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }

  get anioNacimiento() {
    return this.#anioNacimiento;
  }

  set anioNacimiento(nuevoAnio) {
    this.#anioNacimiento = nuevoAnio;
  }

  get dni() {
    return this.#dni;
  }

  set dni(nuevoDNI) {
    this.#dni = nuevoDNI;
  }

  mostrarGeneracion() {
    let generacion;
    let rasgoCaracteristico;

    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgoCaracteristico = "Irreverencia";
    } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgoCaracteristico = "Frustración";
    } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgoCaracteristico = "Obsesión con el éxito";
    } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgoCaracteristico = "Ambición";
    } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      generacion = "Silent Generation (Los niños de la postguerra)";
      rasgoCaracteristico = "Austeridad";
    } else {
      generacion = "No se pudo determinar la generación";
      rasgoCaracteristico = "Desconocido";
    }

    document.write(
      `${this.#nombre} pertenece a la ${generacion}, cuyo rasgo característico es ${rasgoCaracteristico}.<br>`
    );
  }

  esMayorDeEdad() {
    if (this.#edad >= 18) {
      document.write(`${this.#nombre} es mayor de edad.<br>`);
    } else {
      document.write(`${this.#nombre} no es mayor de edad.<br>`);
    }
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.#nombre}<br>`);
    document.write(`Edad: ${this.#edad}<br>`);
    document.write(`Sexo: ${this.#sexo}<br>`);
    document.write(`Peso: ${this.#peso}<br>`);
    document.write(`Altura: ${this.#altura}<br>`);
    document.write(`Año de nacimiento: ${this.#anioNacimiento}<br>`);
    document.write(`DNI: ${this.#dni}<br>`);
  }

  generaDNI() {
    const dni = Math.floor(Math.random() * 100000000);
    return dni;
  }
}

// Crear una instancia de Persona
const persona1 = new Persona("Kai", 20, "Masculino", 70, 1.75, 2002);
persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();

document.write(`<hr><p>Generar otra persona: </p>`)
const persona2 = new Persona("Hyde", 34, "Masculino", 75, 1.90, 1989);
persona2.mostrarDatos();
persona2.esMayorDeEdad();
persona2.mostrarGeneracion();