function cambiaOpcion (){
  if (document.getElementById ('radio1').checked){
    alert ('Has seleccionado la opcion 1');
  }
  if (document.getElementById ('radio2').checked){
    alert ('Has seleccionado la opcion 2');
  }
};


function mostrarMayor() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  if (num1 > num2) {
      alert('El mayor es ' + num1);
  } else {
      alert('El mayor es ' + num2);
  }
};


function cambiaResultado(){
var x= parseInt(document.getElementById('numero1').value);
var y= parseInt(document.getElementById('numero2').value);
  alert (x+y);
}
  