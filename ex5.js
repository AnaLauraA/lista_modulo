function principal(){
    var num = Number(document.getElementById("num").value);
    document.getElementById("resposta").innerHTML = posouneg(num);
}
function posouneg(n){
   if(n < 0 ){
       return ("É negativo");
   }
   else{
       return ("É positivo");
   }
}