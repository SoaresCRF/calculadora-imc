const alturaRange = document.querySelector("#altura-range");
const altura = document.querySelector("#altura");
const pesoRange = document.querySelector("#peso-range");
const peso = document.querySelector("#peso");
const statusImc = document.querySelector("#status-imc");

alturaRange.addEventListener("input", () => {
    altura.value = alturaRange.value;
    modificarStatusImc(calcularImc());
});
altura.addEventListener("keyup", () => {
    altura.value = replaceChar(altura);
    alturaRange.value = altura.value;
    modificarStatusImc(calcularImc());
});

pesoRange.addEventListener("input", () => {
    peso.value = pesoRange.value;
    modificarStatusImc(calcularImc());
});
peso.addEventListener("keyup", () => {
    peso.value = replaceChar(peso);
    pesoRange.value = peso.value;
    modificarStatusImc(calcularImc());
});


function calcularImc() {
    return (peso.value / ((altura.value * altura.value) / 10000)).toFixed(2);
}

function modificarStatusImc(valorImc) {
    if (isZero()) {
        statusImc.style.color = "black";
        statusImc.innerHTML = "Valor inválido.";
        return;
    }

    if (valorImc < 18.5) {
        statusImc.style.color = "blue";
        statusImc.innerHTML = valorImc + " - Magreza";

    } else if (valorImc < 25) {
        statusImc.style.color = "green";
        statusImc.innerHTML = valorImc + " - Normal";

    } else if (valorImc < 30) {
        statusImc.style.color = "yellow";
        statusImc.innerHTML = valorImc + " - Sobrepeso";

    } else if (valorImc < 40) {
        statusImc.style.color = "orange";
        statusImc.innerHTML = valorImc + " - Obesidade";

    } else {
        statusImc.style.color = "red";
        statusImc.innerHTML = valorImc + " - Obesidade grave";
    }
}

// Apaga qualquer digito que não seja um número
function replaceChar(input) {
    return input.value.replace(/[^0-9]/g, '');
}

function isZero() {
    if (peso.value == 0 || altura.value == 0) {
        return true;
    }
    return false;
}