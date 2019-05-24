var allItems, input, checkDiv, check, newItem, newText, newButton, removeButtonDiv;

function addItem() {

	allItems = document.getElementById('all-items');
	input = document.getElementById('input').value;
	newItem = document.createElement('div');
	checkDiv = document.createElement('div');
	check = document.createElement('input');
	newText = document.createElement('div');
	newButton = document.createElement('button');
	removeButtonDiv = document.createElement('div');

	checkDiv.setAttribute('class', 'check-div');
	check.setAttribute('type', 'checkbox');
	check.setAttribute('class', 'checkbox');
	newText.textContent = input;
	newButton.textContent = 'X';
	newItem.setAttribute('class', 'item');
	newText.setAttribute('class', 'text');
	newButton.setAttribute('class', 'remove');
	removeButtonDiv.setAttribute('class', 'remove-button-div');

	allItems.appendChild(newItem);
	newItem.appendChild(checkDiv);
	checkDiv.appendChild(check);
	newItem.appendChild(newText);
	newItem.appendChild(removeButtonDiv);
	removeButtonDiv.appendChild(newButton);

	modifyElements('Enter a task here.', 'What do you want to do?', 'initial');
	check.addEventListener('click', markDone);
	newButton.addEventListener('click', removeItem);
};

function testItem() {
	if (document.getElementById('input').value.length === 0 || !document.getElementById('input').value.trim()) {
		modifyElements('Do something. Anything.', 'No blank tasks please!', 'crimson');
	} else {
		addItem();
	}
};

function removeItem(button) {
	button.target.parentElement.parentElement.outerHTML = '';
	document.getElementById('input').focus();
};

function modifyElements(inputAttribute, messageTextContent, messageColor) {
	document.getElementById('input').focus();
	document.getElementById('input').value = '';
	document.getElementById('input').setAttribute('placeholder', inputAttribute);
	document.getElementById('message').textContent = messageTextContent;
	document.getElementById('message').style.color = messageColor;
};

function markDone(checkbox) {
	if (checkbox.target.checked == true) {
		checkbox.target.parentElement.parentElement.style.textDecoration = 'line-through';
		checkbox.target.parentElement.parentElement.style.color = '#B69A73';
	}
	else {
		checkbox.target.parentElement.parentElement.style.textDecoration = 'initial';
		checkbox.target.parentElement.parentElement.style.color = 'initial';
	}
}

document.getElementById('add').addEventListener('click', testItem);

document.getElementById('input').addEventListener('keypress', function(key) {
	if (key.key === 'Enter') {
		testItem();
	}
});