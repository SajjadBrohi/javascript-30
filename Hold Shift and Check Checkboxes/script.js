const checkboxes = document.querySelectorAll("input");
let lastCheckbox;

function boxClicked(e) {
    let toBeChecked = false;

    if (e.shiftKey) {
        for (let index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index] == this || checkboxes[index] == lastCheckbox) {
                toBeChecked = !toBeChecked;
            }

            if (toBeChecked) {
                checkboxes[index].checked = true;
            }
        }
    }
    
    lastCheckbox = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", boxClicked, false));