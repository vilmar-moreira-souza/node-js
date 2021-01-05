/*
modulo 8- exercicios
*/
//1 --ok
function maior(n1, n2) {
  if (n1 > n2) {
    console.log("maior = " + n1)
  } else {
    console.log("maior = " + n2)
  }
}
//2
var ar3 = [1, 3, 6]

function array1(n1) {
  //for i index n1{
  //console.log(n1[i])
  //}
  for (var i = 0; i < n1.length; i++) {
    console.log("array = " + n1[i])
  }
}
//3
var num1 = [];

function array2(nun1) {
  var soma = 0
  for (var i = 0; i < nun1.length; i++) {
    if (nun1[i] >= soma) {
      soma = nun1[i]
    }
  }
  console.log("soma = " + soma)
}
//4
function array3(nun1) {
  var soma = 0;
  for (var i = 0; i < nun1.length; i++) {
    soma = soma + nun1[i]
    var media = soma / nun1.length
  }
  console.log("media = " + media)
}
//5  par ou impar
let numero = 0;

function par_impar(numero) {
  if ((numero % 2) == 0) { // % operador mod-resto da divisão
    console.log(numero + " é par")
  } else {
    console.log(numero + " é impar")
  }
}
//Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar
function multipo_de_4() {
  for (var i = 0; i < 100; i++) {
    if ((i % 4) == 0) { // % operador mod-resto da divisão- operador / (divisão ) tb funcionaria
      console.log(i)
    } else {
      console.log(" pi")
    }
  }
}
//7-Escreva uma função que receba um objeto e imprima suas propriedades
let pessoa = {
  id: "001",
  nome: "Maria",
  Ativo: true,
  idade: 35,
}

function imprime_objeto(pessoa) {
  console.log(pessoa)
}
//8 Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.
let dia, mes, ano = 0;

function data(dia, mes, ano) {
  //var d = new Date(year, month, day,
  var d = new Date(ano, mes, dia)
  console.log(d)
}
//9 -Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
let alt = {
  idade: [20, 21, 22, 23, 24],
  altura: [181, 161, 185, 182]
}

function ar_altura_idade(alt) {
  let a = alt.altura[0]
  let b = alt.altura[0]
  for (var i = 0; i < alt.altura.length; i++) {
    if (alt.altura[i] > a) {
      a = alt.altura[i]
    }
    if (alt.altura[i] < b) {
      b = alt.altura[i]
    }
  }
  let media_idade = 0
  for (var index in alt.idade) {
    media_idade = media_idade + alt.idade[index]
  }
  media_idade = media_idade / alt.idade.length
  console.log(b + " menor altura ")
  console.log(a + " maior altura ")
  console.log("media idade = " + media_idade)
}
//10 Escreva um programa que imprima o seguinte padrão
//*
//* *
//* * *
//* * * *
//* * * * *
function padrao() {
  let texto = "*"
  const texto1 = "*"
  for (var i = 0; i < 5; i++) {
    console.log("texto = " + texto)
    texto = texto + texto1
    console.log("\n")
  }
}
//
let ar5 = [1, 2, 3, 4, 5]
maior(11, 10) // ok-- 1
array1(ar3) //ok --2
array2(ar5) // ok --3
array3(ar5) // ok --4
par_impar(4) //ok --5
multipo_de_4() // ok --6
console.log(pessoa) // ok --7
data(05, 4, 2021) //ok --8
ar_altura_idade(alt) // ok --9
padrao() // ok --10
