function calculateRectangleArea(){
    const rectangleLength = document.getElementById('rectengle-length');
    const rectangleLengthValue = rectangleLength.value ;
    
    const length = parseFloat(rectangleLengthValue);
    console.log(length);


    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    console.log(width)

    //Calculate area

    const area = length*width;
    console.log(area);

    //Display Rectangle Area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;
}