var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var altura = paciente.querySelector(".info-altura").textContent;

    var pesoValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido");
        pesoValido = false;
        tdImc.textContent = "peso invalido"
        paciente.classList.add("paciente-invalido");
    }

    var alturaValida = true;
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalida");
        alturaValida = false;
        tdImc.textContent = "altura valido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

