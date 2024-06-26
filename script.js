
const container = document.getElementById("container-main")
let dropDownsArr = []

//Dropdown Q&As
let questionsAndAnswers = {
    'What is FrontEnd Mentor, and how will it help me?' : 
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.",
    'Is Frontend Mentor free?' : 'Yes.',
    'Can I use Frontend Mentor projects in my portfolio?' : 'Yes.',
    "How can I get help if I'm stuck on a challenge?" : "View the Frontend Mentor community forums."
}

let questions = Object.keys(questionsAndAnswers)
let answers = Object.values(questionsAndAnswers)

class dropDownItem {
    constructor(id) {
        this.id = id;
    }
}

//Create array of DD objects based on pre-determined number
for (let i = 0; i < questions.length; ++i) {
    const dropDownObj = new dropDownItem(i.toString())
    dropDownsArr.push(dropDownObj)
}

for (let i = 0; i < dropDownsArr.length; ++i) {
    //Create Question Element
    let ddQuestion = document.createElement("p")
    ddQuestion.appendChild(document.createTextNode(questions[i]))
    // container.appendChild(ddQuestion)
    ddQuestion.setAttribute('class', 'dd-entry')
    ddQuestion.setAttribute('id', `ddquestion${i}`);

    //Create Button Element
    let ddButton = document.createElement('button')
    ddButton.setAttribute('class', 'dd-button plus')
    ddButton.setAttribute('id', 'btn'+dropDownsArr[i].id)
    ddButton.setAttribute('title', "dropdownbutton")
    // container.appendChild(ddButton)

    //Create Div to house Question and Button
    let questionAndButtonContainer = document.createElement('div');
    container.appendChild(questionAndButtonContainer)
    questionAndButtonContainer.setAttribute('id', 'qAndBcontainer');
    questionAndButtonContainer.appendChild(ddQuestion)
    questionAndButtonContainer.appendChild(ddButton)


    //Create Answer element and hide it
    let ddAnswer = document.createElement("div")
    ddAnswer.appendChild(document.createTextNode(answers[i]))
    ddAnswer.setAttribute('class', 'hidden')
    ddAnswer.setAttribute('id', `dd-entry` + dropDownsArr[i].id)
    container.appendChild(ddAnswer)
    let finalAnswer = document.getElementById(`dd-entry` + dropDownsArr[i].id)

    container.appendChild(document.createElement('hr'))
    
    //Function to hide/display answer, the dropdown function
    const dropDownFunction = () => {
        if (finalAnswer.style.display === 'block') {
            finalAnswer.style.display = 'none';
        } else {
            finalAnswer.style.display = 'block';
        }
        if (finalAnswer.style.display === 'block') {
            ddButton.setAttribute('class', 'dd-button minus')
        } else {
            ddButton.setAttribute('class', 'dd-button plus')
        }
    }

    //Event Listeners to reveal dropdown
    let testChange = document.getElementById('btn'+dropDownsArr[i].id)
    let ddQuestionEvent = document.getElementById(`ddquestion${i}`);
    ddQuestionEvent.addEventListener('click', dropDownFunction);
    testChange.addEventListener('click', dropDownFunction);
    

   

}

