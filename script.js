function percentual() {
    // Obtém os valores dos inputs
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    // Calcula percentual
    const p = (valor2 - valor1 ) / valor1*100;

    // Exibe o resultado
    document.getElementById('resultado').textContent = `Percentual é: ${p.toFixed(2)} `;
}
