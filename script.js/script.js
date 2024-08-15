function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

function calculate() {
    var expression = Calculator.text1.value;
    var result = eval(expression);
    updateHistory(expression, result);
}

function deleteLastChar() {
    var currentValue = Calculator.text1.value;
    // Verifica se há caracteres para apagar
    if (currentValue.length > 0) {
        // Remove o último caractere da string
        Calculator.text1.value = currentValue.substring(0, currentValue.length - 1);
    }
}

var historyDisplay = document.getElementById("history");

function updateHistory(expression, result) {
    historyDisplay.innerText += `\n${expression} = ${result}`;
    Calculator.text1.value = "";
}

function insertComma() {
    Calculator.text1.value += ",";
}

function calculatePercentage() {
    var expression = Calculator.text1.value;
    var result = eval(expression);

    // Se a expressão for um número válido
    if (!isNaN(result)) {
        result /= 100; // Calcula a porcentagem
        Calculator.text1.value = result;
    } else {
        // Se a expressão não for um número válido, exibe uma mensagem de erro
        Calculator.text1.value = "Error";
    }
}


// Adiciona um evento de teclado para a página inteira
document.addEventListener('keydown', function(event) {
    // Obtém o código da tecla pressionada
    var key = event.key;

    // Verifica qual tecla foi pressionada e chama a função correspondente
    switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            displaynum(key);
            break;
        case "+":
            displaynum("+");
            break;
        case "-":
            displaynum("-");
            break;
        case "*":
            displaynum("*");
            break;
        case "/":
            displaynum("/");
            break;
        case ".":
            displaynum(".");
            break;
        case "Enter":
            calculate();
            break;
        case "Delete":
        case "Backspace":
            deleteLastChar();
            break;
        case "%":
            calculatePercentage();
            break;
        // Adicione mais casos conforme necessário para outros botões
    }
});
