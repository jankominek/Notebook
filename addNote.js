export default class addNote{
    state = {
        title:null,
        dataText: null,
    }
    constructor(title, dataText){

        this.state.title = title;
        this.state.dataText = dataText;
        console.log('title: ', this.state.title)
        console.log('dataText: ', this.state.dataText)
    }
}