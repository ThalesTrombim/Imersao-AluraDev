document.body.innerHTML = Conversor();

function Conversor () {
    
    var valorEmDolarTexto = document.getElementById("valorParaCoversao").value;
    
    var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

    var valorEmReal = valorEmDolarNumero * 5.50
    
    var valorEmRealFixado = valorEmReal.toFixed(2);

    alert(`${valorEmRealFixado} $`) 
}
    