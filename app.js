// Create an async function to retrive json data, convert it and display it on screen
async function getAdvice() {
    try {
        // get data
        const response = await fetch('https://api.adviceslip.com/advice');
        // convert data
        const data = await response.json();
        // grab datapoints an asign to variables
        const adviceId = await data.slip.id;
        const advice = await data.slip.advice;
        // grab element to append datapoints too
        const body = document.getElementById('body');
        // create empty document fragment
        const docFrag = document.createDocumentFragment();
        // create new HTML elements to append datapoints too
        let item1 = document.createElement('h1')
        let item2 = document.createElement('h2')
        // asign datapoint variables to items
        item1.textContent = adviceId;
        item2.textContent = advice;
        // append to empty document fragment
        docFrag.appendChild(item1);
        docFrag.appendChild(item2);
        // append doc frag to DOM element
        body.appendChild(docFrag);

    } catch (error) {
        console.log('Error!');
    }
}

getAdvice();
