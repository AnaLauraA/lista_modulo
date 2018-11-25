function principal(){
    var vetor = (prompt("Digite os 15 números").split(","));
    alert(par(vetor));
}
function par(vetor){
    var i = 0;
    var soma = 0;
    for(i;i<15;i++){
        if (Number(vetor[i]) % 2 == 0){
            soma = Number(vetor[i]) + soma;
        }
    } 
    return soma;
}
principal();