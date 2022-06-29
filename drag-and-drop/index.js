const draggableElements = document.querySelectorAll('.draggable');
const lists = document.querySelectorAll('.list');

let currentDraggable = null;

function onDragStart(evt) {
    evt.dataTransfer.effectAllowed = 'move';

    currentDraggable = evt.target;
    currentDraggable.classList.add('ondrag');
}

function onDragEnd(evt) {
    currentDraggable.classList.remove('ondrag');
    currentDraggable = null;
}

function onDragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
}

function onDrop(evt) {
    evt.preventDefault();
    const target = evt.target;

    console.log(evt, currentDraggable);

    if (target.classList.contains('list')) {
        const currentList = currentDraggable.parentElement;

        currentList.removeChild(currentDraggable);
        target.appendChild(currentDraggable);

        return;
    }

    if (target.classList.contains('draggable')) {
        const collection = [...target.parentElement.children];
        const parent = target.parentElement;
        parent.removeChild(currentDraggable);
        parent.insertBefore(currentDraggable, target);
    }
}

function onDragLeave(evt) {
    if (currentDraggable === evt.target) {
    }
}

draggableElements.forEach((element) => {
    element.ondragstart = onDragStart;
    element.ondragend = onDragEnd;
});

lists.forEach((list) => {
    list.ondragleave = onDragLeave;
    list.ondragover = onDragOver;
    list.ondrop = onDrop;
});



