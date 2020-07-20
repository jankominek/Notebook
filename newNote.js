export default class newNote{
    state = {
        title: null,
        dataText: null
    }
    constructor(noteField, inputValue){
        let divInputField = document.querySelector(".notesInputField")

        let elDiv = document.createElement("div");
        elDiv.classList.add("newDiv")

        let elTextField = document.createElement("p")
        let text = document.createTextNode(inputValue);

        elTextField.appendChild(text);
        elDiv.appendChild(elTextField)
        noteField.appendChild(elDiv)

        this.state.title = inputValue;

        //creating text field
        let inputText = document.createElement("TEXTAREA")
        inputText.classList.add("newInputField")
        divInputField.appendChild(inputText)
        //this.state.dataText = inputText.value;

    }
}