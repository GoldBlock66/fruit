let plus = document.querySelector('.plus');
let appContainer = document.querySelector('.app')


let notes = [];

function createNote(id,content) {
    let element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder="Enter Note";
    element.value=content;

    element.addEventListener('dblclick',()=>{deleteNote(id,element)})
    element.addEventListener('input',()=>{updateNote(id,content)})

    return element;
}

function newNote() {
    console.log("Plus Click");

    const noteObj = {
        id : Math.floor(Math.random() * 1000),
        content : ""
    }

    let noteEl = createNote(noteObj.id,noteObj.content)
    appContainer.insertBefore(noteEl,plus)
}


plus.addEventListener('click',newNote);
