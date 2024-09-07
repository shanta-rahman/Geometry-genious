/*
*Objective : get base ,heifht of a tringale .Calculate the area by 



Step 1 : 
*/






function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log( base);


   const  triangleHeightInput=document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText);
//    console.log(height);

//    Calculate triangle Area

const area = 0.5*base*height;
console.log('Area of the triangle is : ' , area);

//display triangle area

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText=area;
}
