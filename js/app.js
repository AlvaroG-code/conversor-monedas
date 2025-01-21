//Inicialización variables, objetos con el DOM//
const amountInput = document.getElementById('amount');
const converter = document.getElementById('converter');
const result = document.getElementById('result');
const form = document.getElementById('form');
const error = document.getElementById('error');
const resetButton = document.getElementById('reset');


//validación del input del número//
function comprobarForm(event) {
    if (amount.value === "") {
        amountInput.focus();
        event.preventDefault();
        error.innerText="El campo de introducción de número no puede estar vacío";
        return false;
    } else if(isNaN(amount.value)) {
        amountInput.focus();
        event.preventDefault();
        error.innerText="Por favor introduce un número válido";
        return false;
    } else if(amount.value < 0) {
        amountInput.focus();
        event.preventDefault();
        error.innerText="El número introducido no puede ser negativo";
        return false;
    }
    
    return true;
}

//Función para convertir el número introducido en euros a dólares, yenes y libras//
function convertir() {
    const tasaCambio = {
        dolar: 0.96,  
        yen: 162.14,    
        libra: 1.18,  
    };

    const euros = parseFloat(document.getElementById("amount").value) || 0;
    
    document.getElementById("usd").value = (euros * tasaCambio.dolar).toFixed(2) + " $";
    document.getElementById("jpy").value = (euros * tasaCambio.yen).toFixed(2) + " ¥"; 
    document.getElementById("gbp").value = (euros * tasaCambio.libra).toFixed(2) + " £";
    console.log("USD:" ,euros * tasaCambio.dolar.toFixed(2))
    console.log("JPY:" ,euros * tasaCambio.yen.toFixed(2))
    console.log("Libra:" ,euros * tasaCambio.libra.toFixed(2))

    
}

function reset(){
    document.getElementById("amount").value = "";
    document.getElementById("usd").value = "";
    document.getElementById("jpy").value = ""; 
    document.getElementById("gbp").value = "";
    error.innerText="";
}

function preventDefault(event) {
    event.preventDefault();
}




//Inicio carga de eventos//
form.addEventListener('submit', comprobarForm);
form.addEventListener('submit', convertir);
resetButton.addEventListener("click", reset);
form.addEventListener('submit', preventDefault);
//Fin carga de eventos//
resetButton.addEventListener("click", preventDefault);



