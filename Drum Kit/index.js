let divButtons = document.querySelectorAll("#box");
//selecting eact button
divButtons.forEach((button) => {
  button.addEventListener("click", (element) => {
    let a = element.path[2].classList[0];
    element.path[2].classList.add("active");
    playAudio(a);
    setTimeout(() => {
      element.path[2].classList.remove("active");
    }, 100);
  });
});

//to get  which key is pressed 

window.addEventListener('keyup',function(event){
    console.log(event.key)
    let key=event.key
    // store the value of the keys 
    const alphabets={
        a:'clap',
        s:'hihat',
        d:'kick',
        f:'openhat',
        g:'boom',
        h:'ride',
        j:'snare',
        k:'tom',
        l:'tink'
    }
    if("asdfghjkl".includes(key)){
        let val=document.querySelector(`.${alphabets[key]}`).classList[0]
        document.querySelector(`.${val}`).classList.add('active');
        playAudio(val)
        // console.log(val)
        setTimeout(()=>{
            document.querySelector(`.${val}`).classList.remove('active')
        },1000)
    } 
    
});
// to search file in src
function playAudio(filename){
// console.log(filename)
    let audio= new Audio(`sounds/${filename}.wav`)
    audio.play();
}