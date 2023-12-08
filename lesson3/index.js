const select = document.querySelector('#products');
const textarea = document.querySelector('#review');

document.querySelector('.button').addEventListener('click', function() {
    const selectSave = select.value;
    const text = textarea.value;
    let storedValues;
        if (localStorage.getItem(selectSave) === null) {
            storedValues = [];
        } else {
            storedValues = JSON.parse(localStorage.getItem(selectSave));
        }
    
    storedValues.push(text);
    localStorage.setItem(selectSave, JSON.stringify(storedValues));
    textarea.value = "";


    document.querySelector('.btn').addEventListener('click', function() {
        const selectValue = document.getElementById('products').value;
        const storedData = JSON.parse(localStorage.getItem(selectValue));
        const divElement = document.getElementById('download-reviews');
        divElement.innerHTML = storedData.map(n => `<p>${n}</p>`).join('');
    });
});



