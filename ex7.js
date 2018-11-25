function principal(){
    var vetor = prompt("Digite os números").split(",");
    alert(media(vetor));
}
var i = 0;
var soma = 0;
function media(vetor){

    for(i;i<vetor.length;i++){
        if (Number(vetor[i]) >= 0){
            soma = Number(vetor[i]) + soma;
        }
    } 
    
    return soma/vetor.length;
}
principal();