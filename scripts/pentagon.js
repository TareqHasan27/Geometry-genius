function calculatePentagonArea() {
    const baseTriangle = getInputById('Pentagon-base');
    const heightTriangle = getInputById('Pentagon-height')
    
    const Area = 0.5 * heightTriangle * baseTriangle;
    setInputText('Pentagon-area' , Area);
}