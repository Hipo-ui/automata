const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input");

const expresiones = {
    expresion: /^([\s]*(if){1,1}[\s]+(0|1|True|False){1,1}[\s]*((==|!=|<|>|<=|>=|([\s]+and[\s]+)|([\s]+or[\s]+)){1,1}[\s]*(0|1|True|False){1,1}[\s]*)*[:][\s]*)|([\s]*(if){1,1}[\s]*[\(]+[\s]*(0|1|True|False)*[\s]*((==|!=|<|>|<=|>=|([\s]+and[\s]+)|([\s]+or[\s]+)){1,1}[\s]*(0|1|True|False){1,1}[\s]*)*[\)]+[\s]*[:][\s]*)$/,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "sentencia.if":
            validarDatos(expresiones.expresion, e.target, "sentencia");
            break;
    }
};

const validarDatos = (expresion, input, campo) => {
   
    if (input.name == "sentencia.if") {

        if (input.value === "" || input.value == null || input.value.trim().length === 0) {

            document.querySelector(`#grupo-${campo} .invalid-feedback .info-error`).classList.add("d-none");
            document.getElementById(campo).classList.remove("is-invalid");
            document.querySelector(`#grupo-${campo} .valid-feedback .info-success`).classList.add("d-none");
            document.getElementById(campo).classList.remove("is-valid");

        }else{
            if (expresion.test(input.value)) {
                document.querySelector(`#grupo-${campo} .invalid-feedback .info-error`).classList.add("d-none");
                document.getElementById(campo).classList.remove("is-invalid");
    
                document.querySelector(`#grupo-${campo} .valid-feedback .info-success`).classList.remove("d-none");
                document.getElementById(campo).classList.add("is-valid");
          
            } else {
                document.querySelector(`#grupo-${campo} .valid-feedback .info-success`).classList.add("d-none");
                document.getElementById(campo).classList.remove("is-valid");
    
                document.querySelector(`#grupo-${campo} .invalid-feedback .info-error`).classList.remove("d-none");
                document.getElementById(campo).classList.add("is-invalid");
            }
        }                    
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    input.addEventListener("change", validarFormulario);
    input.addEventListener("keypress", validarFormulario); 
});