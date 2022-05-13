// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuandrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
	return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
	return lado * lado;
} 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm y su altura es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
} 

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

// Cálculos para el triángulo isósceles
console.group("Triángulos isósceles")
// const lado1 = 6;
// const lado2 = 6;
// const lado3 = 8;
// Altura
// H = Raiz Cuadrada(A^2-(b^2/4))
function alturaTrianguloIso(ladoIgual, base) {
  return Math.sqrt(ladoIgual**2 - (base**2/4));
}

// const alturaTrianguloIso = Math.sqrt(lado1**2 - (lado3**2/4));
// console.log(alturaTrianguloIso)

// Area
// A = C/4 * Raiz Cuadrada(4A^2-C^2)
function areaTrianguloIso(ladoIgual, ladoDiferente) {
  return (ladoDiferente / 4) * Math.sqrt((4 * ladoIgual**2) - (ladoDiferente**2));
}

// const areaTrianguloIso = (lado3 / 4) * Math.sqrt((4 * lado1**2) - (lado3**2));
// console.log(areaTrianguloIso);

console.groupEnd();

console.groupEnd(); // Fin de Triángulos

// Código del círculo
console.group("Círculos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
function diametroCirculo(radio) {
	return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

// PI
// const PI = 3.1415;
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
} 

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// Area
function areaCirculo(radio) {
	return PI * (radio * radio);
}

// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El área del círculo es: " + areaCirculo + " cm^2");
console.groupEnd();

// Aqui interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCudrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function datosTriangulo() {
  var datosTri = new Array();
  const lado1 = document.getElementById("inputTrianguloLado1");
  const lado2 = document.getElementById("inputTrianguloLado2");
  const base = document.getElementById("inputTrianguloBase");
  const altura = document.getElementById("inputTrianguloAltura");
  datosTri.push(Number(lado1.value), Number(lado2.value), Number(base.value), Number(altura.value));
  return datosTri;
}

function calcularPerimetroTriangulo() {
  const datos = datosTriangulo();
  const perimetro = perimetroTriangulo(datos[0], datos[1], datos[2]);
  alert(perimetro);
}

function calcularAreaTriangulo () {
  const datos = datosTriangulo();
  const area = areaTriangulo(datos[2], datos[3]);
  alert(area);
}

// Circulo
function calcularDiametroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}

// Triángulo Isósceles
// Formula para el area, perimetro y altura:
// Para saber que es un isósceles debe tener 2 de sus lados iguales
// P = A + B + C, la suma de cada lado
// A = C/4 * Raiz Cuadrada(4A^2-C^2)
// H = Raiz Cuadrada(A^2-(b^2/4))
function datosTrianguloIso() {
  var datosTriIso = new Array();
  const lado1 = document.getElementById("inputTrianguloIsoLado1");
  const lado2 = document.getElementById("inputTrianguloIsoLado2");
  const lado3 = document.getElementById("inputTrianguloIsoLado3");
  datosTriIso.push(Number(lado1.value), Number(lado2.value), Number(lado3.value));
  return datosTriIso;
}

function calcularPerimetroTrianguloIso() {
  const datosTI = datosTrianguloIso();
  const perimetro = perimetroTriangulo(datosTI[0], datosTI[1], datosTI[2]);
  alert(perimetro);
}

function calcularAlturaTrianguloIso() {
  const datosTI = datosTrianguloIso();
  const resultado = (datosTI[0] == datosTI[1] || datosTI[0] == datosTI[2] || datosTI[1] == datosTI[2]) ? true : false;
  if (resultado) {
    if (datosTI[0] == datosTI[1]) {
      const result = alturaTrianguloIso(datosTI[0], datosTI[2]);
      alert(result);
    } else if (datosTI[0] == datosTI[2]) {
      const result = alturaTrianguloIso(datosTI[0], datosTI[1]);
      alert(result);
    } else {
      const result = alturaTrianguloIso(datosTI[1], datosTI[0]);
      alert(result);
    }
  } else {
    alert("No es un triángulo isósceles");
  }
}

function calcularAreaTrianguloIso() {
  const datosTI = datosTrianguloIso();
  const resultado = (datosTI[0] == datosTI[1] || datosTI[0] == datosTI[2] || datosTI[1] == datosTI[2]) ? true : false;
  if (resultado) {
    if (datosTI[0] == datosTI[1]) {
      const result = areaTrianguloIso(datosTI[0], datosTI[2]);
      alert(result);
    } else if (datosTI[0] == datosTI[2]) {
      const result = areaTrianguloIso(datosTI[0], datosTI[1]);
      alert(result);
    } else {
      const result = areaTrianguloIso(datosTI[1], datosTI[0]);
      alert(result);
    }
  } else {
    alert("No es un triángulo isósceles");
  }
}