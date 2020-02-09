const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('item')) || [];

function formSubmit(e) {
    e.preventDefault();

    itemName = this.querySelector("input[type='text']").value;

    item = {
        itemName,
        checked: false
    }

    items.push(item);
    this.reset();
    localStorage.setItem('item', JSON.stringify(items))
    itemsAdd(itemsList, items)
}

function itemsAdd(plates, plateList) {
    plates.innerHTML = plateList.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id= "item${i}" ${plate.checked ? 'checked' : ''} />
            <label for="item${i}">${plate.itemName}</label>
        </li>`
    }).join("");
}

function checkboxStorage(e) {
    console.log(e.target);
    
}

itemsAdd(itemsList, items);
addItems.addEventListener("submit", formSubmit);
itemsList.addEventListener("click", checkboxStorage);