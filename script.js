const display = document.getElementById("display");

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    if (display.value !== "" && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function appendDot() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch { 
        alert("잘못된 입력입니다!");
        clearDisplay();
    }
}
