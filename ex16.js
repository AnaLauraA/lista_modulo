function principal(){
    var num = document.getElementById("num").value;
    console.log(num);
    document.getElementById("resposta").innerHTML = somar(num);
}
var i = 0;
var soma = 0; 
function somar(n){
    for(i;i<20;i++){
        console.log(n[i]);
        soma = Number(n[i]) + soma;
    }
    return soma;
}