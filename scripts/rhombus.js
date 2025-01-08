function calculateRhombusArea() {
    const baseTriangle = getInputById('Rhombus-base');
    const heightTriangle = getInputById('Rhombus-height')
    
    const Area = 0.5 * heightTriangle * baseTriangle;
    setInputText('Rhombus-area' , Area);
}