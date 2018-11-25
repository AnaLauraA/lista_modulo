function principal(){
    var vetor =  Number(prompt("Digite os 15 números").split(","));
    alert(par(vetor));
}
var i = 0;
var soma = 0;
function par(vetor){

    for(i;i<3;i++){
        if (Number(vetor[i])%2 == 0){
            soma = Number(vetor[i]) + soma;
            console.log("comehere");
        }
    } 
    return soma;
}
principal();