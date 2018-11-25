function principal(){
    var p = String(document.getElementById("pri").value);
    var s = String(document.getElementById("seg").value);
    var resultado = secundaria(p,s);
    document.getElementById("aviso").innerHTML = resultado;
}
function secundaria(x,y){
    if(x==y){
        return 0;
    }
    else if (x.length <= y.length){
        for(var i = 0;i<y.length;i++){
            if(y[i] != x[i]){
                return i;
            }
        }
    }
    else{
        for(var i = 0;i<x.length;i++){
            if(x[i] != y[i]){
                return i;
            }
        }
    }
}
