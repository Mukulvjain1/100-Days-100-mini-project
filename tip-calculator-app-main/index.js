let bill=document.querySelector("#bill");
let people=document.querySelector("#people")
let customTip=document.querySelector("#custom-tip");
let tipDisplay=document.querySelector("#calTip");
let totalDisplay=document.querySelector("#Total");
let tipcal=0;
let totalcal=0;
function tip(tipPer){
    if(tipPer=="5"){
        tipcal=((bill.innerHTML/100)*5)/people
        totalcal=(bill.innerHTML+((bill.innerHTML/100)*5)/people)
        console.log("5%")
    }
    else if(tipPer=="10"){
        tipcal=((bill.innerHTML/100)*10)/people
        totalcal=(bill.innerHTML+((bill.innerHTML/100)*10)/people)
        console.log("10%")
    }
    else if(tipPer=="15"){
        tipcal=((bill.innerHTML/100)*15)/people
        totalcal=(bill.innerHTML+((bill.innerHTML/100)*15)/people)
        console.log("15%")

    }
    else if(tipPer=="25"){
        tipcal=((bill.innerHTML/100)*25)/people
        totalcal=(bill.innerHTML+((bill.innerHTML/100)*25)/people)
        console.log("25%")

    }
    else if(tipPer=="50"){
        tipcal=((bill.innerHTML/100)*50)/people
        totalcal=(bill.innerHTML+((bill.innerHTML/100)*50)/people)
        console.log("50%")
    }
    else{
        console.log("Enter the val")
    }
}
function handleCustom(){
        tipDisplay=((bill.value/100)*customTip)/people
        totalDisplay=(bill.value+((bill.value/100)*customTip)/people)
        console.log(`custom tip ${tipDisplay} ${totalDisplay}`)
}
function calculateval(){
    tip();
    handleCustom();
    tipDisplay.innerHTML=(`${Number(tipcal)}`)
    totalDisplay.innerHTML=(`${Number(totalcal)}`)
}
function resetVal(){
    tipDisplay.innerHTML=(`$ 0.00`);
    totalDisplay.innerHTML=(`$ 0.00`)
}