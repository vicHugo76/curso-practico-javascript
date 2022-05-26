// const lista = [
//   100,
//   15,
//   200,
//   180,
//   500,
//   350,
//   220,
//   400000000,
//   1780,
//   670
// ];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length; 
  return promedioLista;
}

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  // Ordenacion de la lista por medio de la funcion o metodo sort enviando una funcion anonima de comparacion
  const lista1 = lista.sort(function(a,b){return a - b;});

  const mitadLista1 = parseInt(lista1.length / 2);

  let mediana;

  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2
    ]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }
  console.log(lista1);
  console.log(mediana);
}


// Ordenando un array

// Un array de elementos string, sin especificar una función de comparación:
// var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
// arr.sort();  //[ 'AA', 'Aa', 'Z', 'a', 'b' ]

// Un array de elementos numéricos,  sin función de comparación:
// var arr = [ 40, 1, 5, 200 ];
// arr.sort();  //[ 1, 200, 40, 5 ]

// Un array de elementos numéricos, usando una función de comparación:
// var arr = [ 40, 1, 5, 200 ];
// function comparar ( a, b ){ return a - b; }
// arr.sort( comparar );  // [ 1, 5, 40, 200 ]

// Lo mismo pero usando una función anónima normal:
// var arr = [ 40, 1, 5, 200 ];
// arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]

// Lo mismo escrito más compacto mediante una función flecha:
// var arr = [ 40, 1, 5, 200 ];
// arr.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]