const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function formSubmit(e) {
    e.preventDefault();

    itemName = this.querySelector("input[type='text']").value;

    item = {
        itemName,
        checked: false
    }

    items.push(item);
    this.reset();
    itemsAdd(itemsList, items)
}

function itemsAdd(plates, plateList) {
    plates.innerHTML = plateList.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id= "item${i}"/>
            <label for="item${i}">${plate.itemName}</label>
        </li>`
    }).join("");

    // ${plate.checked ? 'checked' : ''} 

}


addItems.addEventListener("submit", formSubmit);