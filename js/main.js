var  numeros = document.getElementsByClassName("b1");
var  bombas = document.getElementsByClassName("b2");
var   espacios= document.getElementsByClassName("b3");
var  reiniciar=document.getElementById("borrar");
  reiniciar.addEventListener("click",borrar)
var botones=document.getElementsByTagName("il");
for (var i=0;i<numeros.length;i++){
  numeros[i].addEventListener("click", numerica);
}
for (var j=0;j<bombas.length;j++){
  bombas[j].addEventListener("click", explosion);
}
for (var k=0;k<espacios.length;k++){
  espacios[k].addEventListener("click",minasFaltantes);
}
 function numerica(){
     this.value="1";
 }
 function explosion(){
  this.value="b";
//this.style.backgroundImage ="url('bombas.png')";
 }
 function minasFaltantes(){
     this.value="11";
 }


function borrar(){
  for (var i=0;i<numeros.length;i++){
  console.log(botones[i])
  //botones.forEach(function(boto) {boto.value=""});
  }
}
