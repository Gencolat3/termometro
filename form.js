var f = new Date();
var d = f.getDate();
var m = f.getMonth() + 1;
var a = f.getFullYear();

//document.getElementById("demo2").innerHTML = Number(d)+4;
var date = new Date();
var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);


function limpiar(){
document.getElementById('rango').value = "";
document.getElementById('fmensual').value = "";
document.getElementById('fdiaria').value = "";
document.getElementById('factual').value = "";
document.getElementById('fnec').value = "";        
document.getElementById('resobjetivo1').innerHTML = "“Rellena los Campos y PINCHA AQUI para Ver Tu Negocio”";
document.getElementById('resobjetivo1').style.color = 'black';
document.getElementById('frase').innerHTML = ""; 




        }












function cal1() {
  try {

    var a = parseInt(document.f.num1.value),    
        b = Math.ceil((a/ ultimoDia.getDate()));

    document.f.sum1.value = Math.ceil(b/100)*100;
   document.f.sum2.value = Math.ceil((b*d)/100)*100;




  } catch (e) {
  }
}







function cal3() {
 




var fa = document.getElementById("factual").value;
var resfnec = document.getElementById("fnec").value;
var objetivo = fa - resfnec;





if(objetivo > 0){

document.getElementById("resobjetivo1").innerHTML =  Math.ceil(objetivo/100)*100  + "$";
document.getElementById('resobjetivo1').style.color = 'green';
document.getElementById("frase").innerHTML = " “Buen Trabajo, Sigue en este Camino y Recuerda Conectarte al Sistema cada Día”"

}if(objetivo < 0){
document.getElementById("resobjetivo1").innerHTML =  Math.ceil(objetivo/100)*100 + "$";
document.getElementById('resobjetivo1').style.color = 'red';
document.getElementById("frase").innerHTML =  "“Revisa tu Plan de Trabajo y Contacta con tu Upline si Necesitas Ayuda”";

}
}









function reload(){
location.reload(true);
}



//FECHA
const mi = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.getElementById("fecha").innerHTML = (d + " de " + mi[m-1] + " de " + a);



