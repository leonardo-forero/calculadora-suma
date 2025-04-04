let display = document.getElementById('display');

// Agrega el número o símbolo al display
function append(value) {
    display.value += value;
}

// Borra todo el contenido del display
function clearDisplay() {
    display.value = '';
}

// Calcula el resultado de la operación
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}