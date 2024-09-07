// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Naya karne ke liye bhi kuch hona chahiye naa';

// Task 2: Select an HTML element by its class and change its background color
const textParagraph = document.querySelector('.text');
textParagraph.style.backgroundColor = '#000000'; // Kaayi color

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'Mujhe bhi dekh lo ek baar bhai mai yahan u niche';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
const newListItem = document.createElement('li');
newListItem.textContent = 'Item 3';
const itemList = document.getElementById('item-list');
itemList.appendChild(newListItem);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM
const hoverDiv = document.getElementById('hover-div');
hoverDiv.remove();

// Task 6: Remove the last child of a specific HTML element
itemList.removeChild(itemList.lastElementChild);

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
// (Assuming there's an image element in the HTML)
// const imgElement = document.getElementById('my-image');
// imgElement.src = 'new-image-source.jpg';

// Task 8: Add and remove a CSS class to/from an HTML element
const changeTextParagraph = document.getElementById('change-text');
changeTextParagraph.classList.add('red-bg');
setTimeout(() => {
    changeTextParagraph.classList.remove('red-bg');
}, 3000);

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
const changeTextButton = document.getElementById('change-text-button');
changeTextButton.addEventListener('click', () => {
    changeTextParagraph.textContent = 'Likha hua badal gya dekho!';
});

// Task 10: Add a mouseover event listener to an element that changes its border color
const hoverDivNew = document.createElement('div');
hoverDivNew.id = 'hover-div';
hoverDivNew.classList.add('hover');
hoverDivNew.textContent = 'Yahan to hover krne par border-color change hota hai kar ke dekh lo';
document.querySelector('.container').appendChild(hoverDivNew);

hoverDivNew.addEventListener('mouseover', () => {
    hoverDivNew.style.borderColor = '#00796b'; // Deep Orange
});
hoverDivNew.addEventListener('mouseout', () => {
    hoverDivNew.style.borderColor = '#000000'; // Reset to original
});
