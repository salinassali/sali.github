function paises (){
var paises = parseFloat(document.getElementById('pais').value );

switch(paises){
    case 1:
        document.getElementById('resultado').value = 'Guatemala';
    break;
    
    case 2:
        document.getElementById('resultado').value = 'Honduras';
    break;

    case 3:
        document.getElementById('resultado').value = 'El salvador';
    break;

    case 4:
        document.getElementById('resultado').value = 'Nicaragua';
        break;
    
    case 5:
        document.getElementById('resultado').value = 'Costa rica';
        break;

   default:
    document.getElementById('resultado').value = 'No definido en la lista';
   break;
   }
} 