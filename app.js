import addNote from './addNote.js';
import newNote from './newNote.js';
//import saveAlert from './saveAlert.js'

const newElement = document.getElementById("newElement");
const noteField = document.querySelector(".notesClasses");
const inputTitle = document.querySelector(".input");
const addElement = document.getElementById("addBtn")
//const mainWindow = document.querySelector(".mainWindow")
let divInputField = document.querySelector(".notesInputField")

let notes = new Array();
let savedNotes = new Array();
let clicked = 0;

let saveQue = false;

newElement.addEventListener('click', function(){
    let inputValue = inputTitle.value 
    if(inputTitle.value != "" && clicked < 1){
        clicked++;
        console.log('input is not empty')
        let note = new newNote(noteField, inputValue)
        notes.push(note)
        console.log(notes[0])
        inputTitle.value = "";
    }
    else if(inputTitle != "" && clicked == 1){

    }
    console.log('clicked: ', clicked)
})
addElement.addEventListener('click', function(){
    let addedNote = new addNote(notes[notes.length - 1].state.title)
    savedNotes.push(addedNote);
    console.log(savedNotes[0])
})
function write(){
}





