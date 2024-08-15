function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

function calculate() {
    var expression = Calculator.text1.value;
    try {
        var result = eval(expression); // Avalia a expressão
        updateHistory(expression, result); // Atualiza o histórico
        Calculator.text1.value = result; // Mostra o resultado no campo de entrada
    } catch (e) {
        Calculator.text1.value = "Error"; // Exibe "Error" em caso de erro na avaliação
    }
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

function clearHistory() {
    historyDisplay.innerText = ""; // Limpa o conteúdo da div de histórico
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
    }
});
