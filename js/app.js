/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer, NB no binarie), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */
let formulario = document.querySelector("form");

let botonCrearPersona = document.querySelector("#btnCrearPersona");

botonCrearPersona.addEventListener("click", crearPersona);
function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(
    document.getElementById("anio-nacimiento").value
  );

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

  console.log(botonCrearPersona);

  return persona;
}
let botonEsMayorDeEdad = document.querySelector("#btnMayorEdad");
botonEsMayorDeEdad.addEventListener("click", esMayorDeEdad);
function esMayorDeEdad() {
  nombre = document.getElementById("nombre").value;
  if ((edad = parseInt(document.getElementById("edad").value) >= 18)) {
    alert(`${nombre} es mayor de edad.`);
  } else {
    alert(`${nombre} no es mayor de edad.`);
  }
}

let botonMostrarGeneracion = document.querySelector("#btnMostrarGeneracion");
botonMostrarGeneracion.addEventListener("click", function () {
  alert(persona.mostrarGeneracion());
});
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

  mostrarGeneracion(persona) {
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

    alert(
      `${
        this.#nombre
      } pertenece a la ${generacion}, cuyo rasgo característico es ${rasgoCaracteristico}.<br>`
    );
  }

  esMayorDeEdad() {
    if (this.#edad >= 18) {
      alert(`${this.#nombre} es mayor de edad.`);
    } else {
      alert(`${this.#nombre} no es mayor de edad.`);
    }
  }
}
//   document.querySelector('form').reset();

