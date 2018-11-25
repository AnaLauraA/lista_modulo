function principal(){
    var num = document.getElementById("num").value.split(",");
    document.getElementById("resposta").innerHTML = somar(num);
}
function somar(n){
    var soma = 0; 
    for(var i = 0;i<20;i++){
        soma = Number(n[i]) + soma;
    }
    return soma;
}