let btn=document.querySelector('#dicebtn')
btn.addEventListener('click',generateAdvice)
let quote=document.querySelector('#quote')
let advicenum=document.querySelector('span')
let adviceTxt;
function generateAdvice(){
    const xhr = new XMLHttpRequest();

    let apiUrl = "https://api.adviceslip.com/advice";
    xhr.open("GET", apiUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);

            if (data && data.slip && typeof data.slip.advice === "string" && typeof data.slip.id === "number") {
                 adviceTxt = data.slip.advice;
                const adviceNumber = data.slip.id;
                quote.innerHTML=adviceTxt;
                advicenum.innerHTML=adviceNumber
                console.log(adviceTxt);
                console.log(adviceNumber);
            } else {
                console.error("Invalid response format or missing properties");
            }
        }
    };
    
    xhr.send();

}

const twitterShare=document.querySelector('.twitter');
twitterShare.addEventListener('click',()=>{
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(adviceTxt)}`;//used chatgpt for this :)
        window.open(twitterShareUrl, '_blank');
})