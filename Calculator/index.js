const display=document.querySelector('#output')

const appendToDisp1ay=(toCalVal)=>{
    display.value+=toCalVal;
}
const clearDisplay=()=>{
    display.value=""
}
const clearOneSpace=()=>{
    display.value =display.value.slice(0, -1);
}
const calculate=()=>{
    if (display.value=="") return display.value="Error"
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}
const calculatePercentage = () => {
    display.value ="%"
    const expression = display.value;
    const parts = expression.split('%');
    const value = parseFloat(parts[0]);
    const percentage = parseFloat(parts[1]);
    const result = value * (percentage / 100);
    display.value = result;
}