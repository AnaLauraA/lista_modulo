function Habitante(a, b, c, d){
	this.idade = a;
	this.sexo = b;
	this.salario = c; 
	this.filhos = d;
}
var vetor1 = [];
function f1(vetor1){
	// alteração e consulta em vetor1 é na verdade em vetor
	var i = parseInt(prompt("Informe idade"));
	var s = prompt("Informe sexo");
	var sa = parseInt(prompt("Informe salario"));
	var f = parseFloat(prompt("Informe filhos"));
	vetor1.push(new Habitante(i, s, sa, f));
}
function f2(vetor2){
	// alteração e consulta em vetor2 é na verdade em vetor
	var soma =0; var media;
	for(var i=0; i< vetor2.length; i++){
		soma = soma + vetor2[i].salario;
	}
	media = soma / vetor2.length;
	alert("A média é " + media.toFixed(2));
}
function f3(vetor3){
	var maior, menor;
	maior = vetor3[0].idade; menor = vetor3[0].idade; 
	// alteração e consulta em vetor3 é na verdade em vetor
	for(var i=0;i<vetor3.length;i++){
		if (vetor3[i].idade > maior){
			maior = vetor3[i].idade;
		}
		if (vetor3[i].idade < menor){
			menor = vetor3[i].idade;
		}
	}
	alert("Maior idade " + maior + " e menor idade " + menor);
}

function f4(vetor4){
	// alteração e consulta em vetor4 é na verdade em vetor
	var qtde = 0;
	for(var i=0;i<vetor4.length;i++){
		if ((vetor4[i].sexo == "F") && (vetor4[i].filhos == 3) && (vetor4[i].salario <= 500)){
			qtde++;
		}
	}
	alert(qtde);
}
var i = 0;
for(i;i<15;i++){
f1(vetor1);
}
f2(vetor1);f3(vetor1);f4(vetor1)