function parallogram(){
    const parallogramBaseInput= document.getElementById('parallogram-base');
    const parallogramBaseValue = parallogramBaseInput.value;
    const base = parseFloat(parallogramBaseValue);
    console.log(base);


    const parallogramHeightInput = document.getElementById('parallogram-height');
    const parallogramHeightValue = parallogramHeightInput.value;
    const height = parseFloat(parallogramHeightValue);
    console.log(height);

    const area = base*height;
    console.log(area);

    const parallogramAreaSpan = document.getElementById('parallelogram-area');
    parallogramAreaSpan.innerText=area;






}
