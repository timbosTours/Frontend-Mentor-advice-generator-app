//  TO DO!!!
// fix click hover bug??
// fix firefox error?



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
        const adviceIdFrag = document.getElementById('advice-id-frag');
        const adviceFrag = document.getElementById('advice-frag');
        // create empty document fragment
        const docFrag1 = document.createDocumentFragment();
        const docFrag2 = document.createDocumentFragment();
        // create new HTML elements to append datapoints too
        let item1 = document.createElement('h1')
        let item2 = document.createElement('p')
        // asign datapoint variables to items
        item1.textContent = adviceId;
        item2.textContent = `“` + advice + `”`;
        // append to empty document fragments
        docFrag1.appendChild(item1);
        docFrag2.appendChild(item2);
        // append doc frag to DOM
        adviceIdFrag.appendChild(docFrag1);
        adviceFrag.appendChild(docFrag2)

    } catch (error) {
        console.log(error);
    }
}

getAdvice();
