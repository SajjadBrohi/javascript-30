const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function formSubmit(e) {
    e.preventDefault();

    let itemName = this.querySelector("input[type='text']").value;

    let item = {
        itemName,
        checked: false
    }

    items.push(item);
    itemsAdd(itemsList, items);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
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
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    itemsAdd(itemsList, items)

}

addItems.addEventListener("submit", formSubmit);
itemsList.addEventListener("click", checkboxStorage);

itemsAdd(itemsList, items);