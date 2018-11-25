function principal(){
    var h = Number(document.getElementById("horas").value);
    var m = Number(document.getElementById("minutos").value);
    var s = Number(document.getElementById("segundos").value);
    var resultado = secundaria(h,m,s);
    document.getElementById("aviso").innerHTML = resultado;
}
function secundaria(ph,pm,ps){
    var totals = ((ph*3600) + (pm*60) + ps);

    return totals;

}