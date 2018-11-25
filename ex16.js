function principal(){
    var num = Number(document.getElementById("num").value);
    document.getElementById("resposta").innerHTML = somar(num);
}
function somar(n){
   if(n < 0 ){
       return ("É negativo");
   }
   else{
       return ("É positivo");
   }
}