function calculateRectangleArea() {
    const length = getInputById('rectangle-length');
    const width = getInputById('rectangle-width');
    
    const Area = width * length;
    setInputText('rectangle-area' , Area);
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