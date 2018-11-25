function principal(){
    var r = Number(document.getElementById("ra").value);
    document.getElementById("resposta").innerHTML = vol(r);
}
function vol(r){
   var v = (4/3*r**3).toFixed(2);
    return v;
}