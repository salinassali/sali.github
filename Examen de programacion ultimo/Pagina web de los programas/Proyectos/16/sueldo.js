function suma (){
    var sueldo = parseFloat(document.getElementById('sueldo').value);
    var resultado = sueldo * 1.10;
    
    document.getElementById('resultado').value = resultado;
    }