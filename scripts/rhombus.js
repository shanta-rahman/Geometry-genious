// function rhombusArea()
// {
//     // const d1Input=document.getElementById('d1Input');
//     // const d1Value=d1Input.value;
//     // const d1 = parseFloat(d1Value);
//     // console.log(d1);
//     console.log(d1);
// }
// function rhombusD1(){
//      const d1Input=document.getElementById('d1Input');
//     const d1Value=d1Input.value;
//     const d1 = parseFloat(d1Value);
// return d1;
// }
console.log('connected');
function rhombusArea(){
const base = getInputValueById('d1Input');
console.log('base value' , base);
const height =  getInputValueById('d2Input')
console.log('height value' , height);
const area = 0.5 * base * height;
console.log('Rhombus Area : ', area);

setInnerTextById('rhombus-area' )
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    console.log(inputField.value);

}
function setInnerTextById(elementId ,area)
{
const element = document.getElementById('elementId')
element.innerText = area;
}