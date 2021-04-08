var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

titulo.addEventListener("click", function (){
  console.log("Chamado por uma função anônima.");
});

//Calcular IMC e validar campos de peso e altura.
var trPacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < trPacientes.length; i++) {
  var tdPeso = trPacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = trPacientes[i].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = trPacientes[i].querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  if (!pesoValido) {
    console.log("Peso inválido.");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido.";
    trPacientes[i].classList.add("paciente-invalido");
  }
  if (!validaAltura) {
    console.log("Altura inválida.");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida.";
    trPacientes[i].classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
//FIM

function validaPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if (altura >= 0 && altura <=3.0) {
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
