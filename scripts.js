const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    let item = document.querySelector('#item').value;
    if (!item) return;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    items.appendChild(li);

    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete'
    button.textContent = 'X';
    li.appendChild(button);

    form.reset();
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItems(e) {
    let input = e.target.value.toLowerCase();
    let items = itemList.children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().includes(input)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}