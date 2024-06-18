class Autocomplete {
    constructor(inputElement, listElement, data) {
        this.inputElement = inputElement;
        this.listElement = listElement;
        this.data = data;
        this.currentFocus = -1;
        this.init();
    }

    init() {
        this.inputElement.addEventListener('input', () => this.onInput());
        this.inputElement.addEventListener('keydown', (e) => this.onKeyDown(e));
    }

    onInput() {
        const value = this.inputElement.value.toLowerCase();
        this.listElement.innerHTML = '';

        if (value) {
            const filteredData = this.data.filter(item => this.matchesInput(item, value));
            this.renderList(filteredData);
        }
    }

    matchesInput(item, value) {
        const itemLower = item.toLowerCase();
        return itemLower.startsWith(value);
    }

    renderList(data) {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('list-group-item');
            li.addEventListener('click', () => this.onSelect(item));
            this.listElement.appendChild(li);
        });
    }

    onSelect(item) {
        this.inputElement.value = item;
        this.listElement.innerHTML = '';
    }

    onKeyDown(e) {
        const items = this.listElement.getElementsByTagName('li');
        if (e.keyCode == 40) { // Down arrow
            this.currentFocus++;
            this.addActive(items);
        } else if (e.keyCode == 38) { // Up arrow
            this.currentFocus--;
            this.addActive(items);
        } else if (e.keyCode == 13) { // Enter
            e.preventDefault();
            if (this.currentFocus > -1) {
                items[this.currentFocus].click();
            }
        }
    }

    addActive(items) {
        if (!items) return false;
        this.removeActive(items);
        if (this.currentFocus >= items.length) this.currentFocus = 0;
        if (this.currentFocus < 0) this.currentFocus = items.length - 1;
        items[this.currentFocus].classList.add('autocomplete-active');
    }

    removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('autocomplete-active');
        }
    }
}

function initAutocomplete(dataSets) {
    const inputElements = document.querySelectorAll('.autocomplete-input');
    const listElements = document.querySelectorAll('.autocomplete-list');

    inputElements.forEach((inputElement, index) => {
        const dataList = inputElement.getAttribute('data-list');
        if (dataSets[dataList]) {
            new Autocomplete(inputElement, listElements[index], dataSets[dataList]);
        }
    });
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
    initAutocomplete(dataSets);
});
