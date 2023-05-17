var result = document.getElementById("result");

function addToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Invalid Calculation");
    }
}
