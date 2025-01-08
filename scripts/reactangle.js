function calculateRectangleArea() {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleBaseText = rectangleLengthInput.value;
    const length = parseFloat(rectangleBaseText );
    // console.log(length);

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText );
    // console.log(width); 
    
    const Area = width * length;
    //console.log(Area);
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = Area;
}