function parallogram(){
    const parallogramBaseInput= document.getElementById('parallogram-base');
    const parallogramBaseValue = parallogramBaseInput.ariaValueMax;
    const base = parseFloat(parallogramBaseValue);


    const parallogramHeightInput = document.getElementById('parallogram-height');
    const parallogramHeightValue = parallogramHeightInput.ariaValueMax;
    const height = parseFloat(parallogramHeightValue);

    const area = base*height;
    console.log(area);

    const parallogramArea = document.getElementById('parallelogram-area');
    parallogramArea.innerText=area;






}