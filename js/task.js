function calculateX(a) {
    let x;
    if (a > 100) {
        x = 0;
    } else if (a < 61) {
        x = a;
    } else {
        x = Math.pow(a, 4);
    }
    return x;
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const a = parseFloat(document.getElementById('inputA').value);
    if (isNaN(a)) {
        document.getElementById('result').textContent = 'Введите корректное число!';
        return;
    }
    const x = calculateX(a);
    document.getElementById('result').textContent = `Результат: x = ${x}`;
});
