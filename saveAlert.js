export default class saveAlert{
    state = {
        bool: null,
    }
    constructor(){
        const windowRightSide = document.querySelector(".rightSide")
        
        let divAlert = document.createElement("div");
        divAlert.classList.add("divAlert"); //to add

        let pAlert = document.createElement("p");
        let pText = document.createTextNode("Save ?");
        pAlert.appendChild(pText); //to add

        let divAlertBtnF = document.createElement("div")
        let fText = document.createTextNode("Yes");
        divAlertBtnF.appendChild(fText);
        divAlertBtnF.classList.add("divAlertBtn")
        divAlertBtnF.id = "yesBtn";
        
        let divAlertBtnT = document.createElement("div")
        let tText = document.createTextNode("No");
        divAlertBtnT.appendChild(tText);
        divAlertBtnT.classList.add("divAlertBtn")
        divAlertBtnT.id = "noBtn";

        windowRightSide.appendChild(divAlert)
        divAlert.appendChild(pAlert)
        divAlert.appendChild(divAlertBtnF)
        divAlert.appendChild(divAlertBtnT)

        divAlertBtnF.addEventListener('click', function(){
            console.log('true clicked')
            this.state.bool = true;
        });
        divAlertBtnT.addEventListener('click', function(){
            console.log('false clicked')
            this.state.save = false;
        });

    }
}