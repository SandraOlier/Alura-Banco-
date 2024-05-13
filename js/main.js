import esUnCuil from "/js/validar-cuil.js";
import esMayorDeEdad from "/js/validar-edad.js";


const campoDeFormulario= document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo) => {
    campo.addEventListener("blur",()=>verificarCampo(campo))
});

function verificarCampo(campo){
   if(campo.name=="cuil" && campo.value.length >=11){
    esUnCuil(campo)
   }
if (campo.name == "fecha_nacimiento" && campo.value != ""){
    esMayorDeEdad(campo)
}
}