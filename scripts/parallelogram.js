function calculateParallelogramArea() {
    const baseTriangle = getInputById('parallelogram-base');
    const heightTriangle = getInputById('parallelogram-height')
    
    const Area = heightTriangle * baseTriangle;
    setInputText('parallelogram-area' , Area);
}


// function getInputById(inputId) {
//     const inputField = document.getElementById(inputId);
//     const inputText = inputField.value;
//     const value = parseFloat(inputText);
//     return value;
// }

// function setInputText(elementId , Area) {
//     const elementArea = document.getElementById(elementId);
//     elementArea.innerText = Area;
// }
