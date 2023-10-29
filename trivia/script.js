const API_KEY = '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'
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
//const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('.input-container')

function changeInput(value) {
    const inputElement = document.querySelector('input')
    inputElement.value = value
}

function displayInitialMessage() {
  //const initialMessage = "Generate a trivia question"; // Custom initial message
  //outPutElement.textContent = initialMessage;
}

async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`, 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "Generate a trivia question with 4 possible answers."}],
            max_tokens: 40
        }) 
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()

        if (data.choices && data.choices.length > 0) {
            const generatedMessage = data.choices[0].message.content;
            outPutElement.textContent = generatedMessage;
            //inputElement.placeholder = generatedMessage;
        }
       
        //outPutElement.textContent = data.choices[0].message.content
        /*if(data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }*/
    } catch (error){
        console.log(error)
    }
        
}

document.addEventListener('DOMContentLoaded', () => {
      displayInitialMessage();
      getMessage('');
    });

submitButton.addEventListener('click', getMessage)

function clearInput() {
    inputElement.value = ''
}

buttonElement.addEventListener('click', clearInput)