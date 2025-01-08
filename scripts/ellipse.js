function calculateEllipseArea() {
    const baseTriangle = getInputById('Ellipse-base');
    const heightTriangle = getInputById('Ellipse-height')
    
    const Area = 3.14 * heightTriangle * baseTriangle;
    setInputText('Ellipse-area' , Area);
}