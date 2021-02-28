"use strict"


/*/The onload event occurs when an object has been loaded.


 function myload(){

            alert("Load function...")
          }


/* Example window.onload JavaScript
The window object represents the browser window. The window onload property processes load events after the element has finished loading.

By default, it is fired when the entire page loads, including its content (images, CSS, scripts, etc.).

//ok
window.onload = function funload() { 
            console.log('The fun will load now.'); 
        } 

 /*It is called when the DOM is ready which can be prior to images and other external content is loaded.

Note: document.onload is not supported by any modern browser (event is never fired)
document.onload = function docload() { 
            console.log('The doc will load now.'); 
        } 

/*/
window.onload = function () {
// so ececuta depois da pagina carregada






let oi = document.getElementById('oi') 
oi.addEventListener('click',function () {
	console.log("div oi capturada")
	oi.innerHTML="<p style='background-color:powderblue;'>paragrafo oi </p>"
	alert("paragrafo clicado")
	ola.style.display="block"// div aparece
	ola.style.height="50vh"
	botao.style.display="inline"// bota aparece
	
})   

}


/*/
//problema abixo
document.addEventListener('DOMContentLoaded',function carregada() {
	oi.innerText= "oi carregado"

	let cor = document.getElementsByTagName('div')
	console.log("dom carregado 1º")	

})/*/

let botao =document.getElementById('botao')

botao.addEventListener('click',function(){
	alert("vc clicou no botao")
	//botao.classList.remove="botao_1" //erro-classe nao removida
	
	botao.style.display="none" //some da tela
	//ola.remove()  // remove nao volta mais
	ola.style.display="none"
})



let ola = document.getElementById('ola') 
ola.addEventListener('click',function () {
	console.log("div ola capturada")
	console.log(ola)
})