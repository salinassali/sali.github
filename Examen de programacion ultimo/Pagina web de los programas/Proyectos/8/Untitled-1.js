<script>
// var formulario =document.getElementsByName('formulario')
var formulario = document.getElementById('formulario');
var nombre =formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e){
    //validamos el nombre
    if(nombre.value > 18){
        alert('maximo de caracteres permitidos');
    }else if (nombre.value==''){
       alert('porfavor ingresa un nombre');
   }
   
   //validamos los radio de button
   if(sexo[0].checked == false && sexo [1].checked==false)
   alert('porfavor ingresa un sexo');
 }
 //validamos los terminos y condiciones
 if(terminos.checked){
   alert('acepta los terminos');
 }
 
//Evitamos que se envie el formulario
e.preventDefault();

formulario.addEventListener('sumit', validar);
</script>