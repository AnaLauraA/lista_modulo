function principal(){
    var num = Number(document.getElementById("f").value);
    document.getElementById("resposta").innerHTML = fatorial(num);
}
function fatorial(num){
    if (num == 0){
        return 1
    } 
    else{
    var fat = 1
    var i = 1;
    for(i;i<num+1;i++){
        fat *= i
    }
    return fat
    }
}