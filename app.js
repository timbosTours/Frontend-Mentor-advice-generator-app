// fetch('https://api.adviceslip.com/advice')
//     .then(res => res.json())
//     .then(data => console.log(data.slip.advice))
async function getAdvice(){
        const response = await fetch('https://api.adviceslip.com/advice');

        const data = await response.json();
    
        const adviceId = data.slip.id;
        const advice = data.slip.advice;

        console.log(adviceeId);
        console.log(advice);
        return adviceId, advice;
}

getAdvice();