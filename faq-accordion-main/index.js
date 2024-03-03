const q1Btn=document.querySelector('#plus-1');
const q2Btn=document.querySelector('#plus-2');
const q3Btn=document.querySelector('#plus-3');
const q4Btn=document.querySelector('#plus-4');

const ans1Btn=document.querySelector('#ans1');
const ans2Btn=document.querySelector('#ans2');
const ans3Btn=document.querySelector('#ans3');
const ans4Btn=document.querySelector('#ans4');

function toggleAnswer(qBtn, ansBtn) {
    if (ansBtn.style.display === "block") {
        qBtn.src = "assets/images/icon-plus.svg";
        ansBtn.style.display = "none";
    } else {
        ansBtn.style.display = "block";
        qBtn.src = "assets/images/icon-minus.svg";
    }
}

q1Btn.addEventListener('click',()=>{
    toggleAnswer(q1Btn,ans1Btn)   
})
q2Btn.addEventListener('click',()=>{
    toggleAnswer(q2Btn,ans2Btn)  
})
q3Btn.addEventListener('click',()=>{
   toggleAnswer(q3Btn,ans3Btn)   
})
q4Btn.addEventListener('click',()=>{
    toggleAnswer(q4Btn.ans4Btn)    
})