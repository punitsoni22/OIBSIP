function appendToResult(value) {
    document.getElementById('result').value += value;
}

function allClear() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0,-1)
}

function calculateResult() {
    const result = document.getElementById('result').value;
    if(result){
        try {
            const total = eval(result);
            document.getElementById('result').value = total;
        } catch(error){
            document.getElementById('result').value = 'ERROR';
        }

    }
}