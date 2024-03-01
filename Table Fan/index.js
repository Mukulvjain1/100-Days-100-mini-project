const off=document.querySelector('#off');
const on=document.querySelector('#on');
const speed1=document.querySelector('#speed1');
const speed2=document.querySelector('#speed2');
const fanBlade=document.querySelector('#fanBlade');

off.addEventListener('click',()=>{
    fanBlade.classList.remove("on","speed1","speed2","speed3")
})
on.addEventListener('click',()=>    {
    fanBlade.classList.toggle("on")
})
speed1.addEventListener('click',()=>    {
    fanBlade.classList.toggle("speed1")
})
speed2.addEventListener('click',()=>    {
    fanBlade.classList.toggle("speed2")
})
