document.addEventListener('DOMContentLoaded', () => {
    // Task 1: Click Event Listener
    // Add a click event listener to a button that changes the text content of a paragraph.
    const clickButton = document.getElementById('clickButton');
    const clickParagraph = document.getElementById('clickParagraph');

    clickButton.addEventListener('click', () => {
        clickParagraph.textContent = 'The paragraph text has been changed!';
    });

    // Task 2: Double-click Event Listener
    // Add a double-click event listener to an image that toggles its visibility.
    const doubleClickImage = document.getElementById('doubleClickImage');

    doubleClickImage.addEventListener('dblclick', () => {
        doubleClickImage.style.display = doubleClickImage.style.display === 'none' ? 'block' : 'none';
    });

    // Task 3: Mouseover Event Listener
    // Add a mouseover event listener to an element that changes its background color.
    const mouseEventElement = document.getElementById('mouseEventElement');

    mouseEventElement.addEventListener('mouseover', () => {
        mouseEventElement.style.backgroundColor = '#add8e6';
    });

    // Task 4: Mouseout Event Listener
    // Add a mouseout event listener to an element that resets its background color.
    mouseEventElement.addEventListener('mouseout', () => {
        mouseEventElement.style.backgroundColor = '';
    });

    // Task 5: Keydown Event Listener
    // Add a keydown event listener to an input field that logs the key pressed to the console.
    const keyInput = document.getElementById('keyInput');

    keyInput.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Task 6: Keyup Event Listener
    // Add a keyup event listener to an input field that displays the current value in a paragraph.
    const keyInputValue = document.getElementById('keyInputValue');

    keyInput.addEventListener('keyup', () => {
        keyInputValue.textContent = keyInput.value;
    });

    // Task 7: Submit Event Listener
    // Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
    const exampleForm = document.getElementById('exampleForm');

    exampleForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        const formData = new FormData(exampleForm);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });

    // Task 8: Change Event Listener
    // Add a change event listener to a select dropdown that displays the selected value in a paragraph.
    const dropdown = document.getElementById('dropdown');
    const selectedValue = document.getElementById('selectedValue');

    dropdown.addEventListener('change', () => {
        selectedValue.textContent = `Selected: ${dropdown.value}`;
    });

    // Task 9: Click Event Listener with Event Delegation
    // Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
    const itemList = document.getElementById('itemList');

    itemList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });

    // Task 10: Event Listener for Dynamically Added Elements
    // Add an event listener to a parent element that listens for events from dynamically added child elements.
    const addItemButton = document.getElementById('addItemButton');

    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    });
});
