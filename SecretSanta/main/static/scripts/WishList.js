function addInput() {
    const container = document.getElementById('inputs-container');

    const originalInput = container.querySelector('#default-input');

    const clonedInput = originalInput.cloneNode(true); 
    clonedInput.value = '';

    container.appendChild(clonedInput);
}