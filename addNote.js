export default class addNote{
    state = {
        title:null,
        dataText: null,
    }
    constructor(title){
        let divInputField = document.querySelector(".notesInputField")

        this.state.title = title;
        this.state.dataText = divInputField.value;
        console.log('title: ', this.state.title)
        console.log('dataText: ', this.state.dataText)
    }
}