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
});
document.querySelector('.h2').addEventListener('click', function() {
    const keys = Object.keys(localStorage);
    keys.forEach((key, index) => {
        const divEl = document.getElementById('all-reviews');
        const btn = document.createElement('button');
        btn.className = ('button-rev');
        btn.textContent = key;
        const divElem = document.createElement('div');
        divElem.className = ('active');
        const values = JSON.parse(localStorage.getItem(key));
        divElem.innerHTML = values.map(e => `<p id="reviewId">${e}</p> <button class="remove">Удалить</button>`).join('');
        divEl.append(btn);
        divEl.append(divElem);
    
        btn.addEventListener('click', function() {
            divElem.classList.toggle('active');
        });
        const buttonEl = document.querySelector('.remove');
        buttonEl.addEventListener('click', function() {    
            //не могу понять как удалить из  localStorage..
            //попробывал так, не получается,если вставляю "key", то удаляются все значения вообще        
            // values.filter((el) => {
            //     if(el !== index) {
            //         localStorage.removeItem(el);
            //     }
            // });            
        });
    });
});