function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const baseTriangle = parseFloat(triangleBaseText);
    // console.log(baseTriangle);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const heightTriangle = parseFloat(triangleHeightText);
    // console.log(heightTriangle); 
    
    const Area = 0.5 * heightTriangle * baseTriangle;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = Area;
}
