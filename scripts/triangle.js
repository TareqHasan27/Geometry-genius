function calculateTriangleArea() {
    const baseTriangle = getInputById('triangle-base');
    const heightTriangle = getInputById('triangle-height')
    
    const Area = 0.5 * heightTriangle * baseTriangle;
    setInputText('triangle-area' , Area);
}


function getInputById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}

function setInputText(elementId , Area) {
    const elementArea = document.getElementById(elementId);
    elementArea.innerText = Area;
}
