// PART II

let questionNumber = 0;
function printHeader(question = '', isEnd = false)
{
	if(questionNumber != 0)
		console.log(`----end question ${questionNumber} ----`);
	
	questionNumber++;

	if(question)
		console.log(question);

	if(!isEnd)
	console.log(`----start question ${questionNumber} ----`);

}

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// -----------------------------------------------------------------------------------
printHeader(`
// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
`);
function getUSA()
{
	for (const element of document.getElementsByTagName("*")) {
		if(element.innerText == 'USA')
			console.log(element.innerText);
	}
}
getUSA();
  
printHeader(`
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
`);
function getPeopleInSales()
{
	for (const element of document.getElementsByClassName("empName")) {
		console.log(element.innerText);
	}
}
getPeopleInSales();
  
printHeader(`
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
`);
function getAnchorChildren()
{
	for (const element of document.getElementsByTagName("a") ) {
		for (const element1 of element.getElementsByTagName('span'))
		{
			console.log(element1.innerText);
		}
	}
}
getAnchorChildren();
  
printHeader(`
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
`);
function getHobbies()
{
	for (const element of document.getElementsByName("skills") ) {
		for (const option of element.childNodes) {
			if(option.selected){
				console.log(option.value);
				console.log(option.innerText);
			}
		} 
	}
}
getHobbies();
  
printHeader(`
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
`);
function getCustomAttribute()
{
	for (const element of document.getElementsByName("skills") ) {
		for (const option of element.childNodes) {
			if(option.selected){
				console.log(option.value);
				console.log(option.innerText);
			}
		} 
	}
}
getCustomAttribute();

printHeader(`
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
`);
function getSumEvent()
{
	let span = document.getElementById("sum");
	let spanParent = span.parentElement;
	//do logic
	let input1 = document.createElement("input");
	let plus = document.createElement("span");
	let input2 = document.createElement("input");

	input1.value = 1;
	plus.innerHTML = " + "
	input2.value = 2;

	let val1 = input1.value;
	let val2 = input2.value;

	spanParent.insertBefore(input1, span);
	spanParent.insertBefore(plus, span);
	spanParent.insertBefore(input2, span);

	span.innerHTML = ` = ${+val1 + +val2}`;

	console.log( `sum is ${+val1 + +val2}`)
}
getSumEvent();

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
