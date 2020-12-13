var nomes = ["igor", "maria","jose"]
var notasA= [7.0 ,6,5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media(n1,n2){
    return (n1+n2)/2
}

function passou(media){
    if(media>7){
        return "aprovado"
    }else{
        return "reprovado"
    }
}

for (var index in nomes){
    var nota1 = notasA[index]
    var nota2 = notasB[index]

    var m = media(nota1,nota2)

    console.log(nomes[index] + "-" + nota1 + "-" + nota2 + "-"+ m + "-"+ passou(m))

}
//
//
var objeto = {
  nome:"vlmar",
  sobrenome:"souza",
  idade:"25",
  notas:[7,8,9.5,6],
  media:function media(){
      return (this.notas[0]+this.notas[1])/2
  }
}
//
//
console.log("idade :" + objeto.idade)
console.log("nome :" +  objeto.nome)
console.log(objeto.notas.length)
console.log(objeto.notas[0])
console.log("media = " + objeto.media())
