var bill, tip, people, percentage, totalTip, totalBill, totalEach;

function hideShowElements(totals, message) {
	document.getElementById('totals').style.display = totals;
	document.getElementById('message').style.display = message;
}

function round(item, itemString, digits) {
	document.getElementById(itemString).onblur = function() {
		item = parseFloat(document.getElementById(itemString).value);
		if (isNaN(item) != true) {
			document.getElementById(itemString).value = item.toFixed(digits);
		}
	}
}

hideShowElements('none', 'none');

round(bill, 'bill', 2);
round(tip, 'tip', 0);
round(people, 'people', 0);

document.getElementById('calculate').addEventListener('click', function() {

	bill = parseFloat(document.getElementById('bill').value);
	tip = parseFloat(document.getElementById('tip').value);
	people = parseInt(document.getElementById('people').value);
	percentage = tip / 100;

	if (isNaN(bill) == true || isNaN(tip) == true || isNaN(people) == true
		|| bill < 0 || tip < 0 || people <= 0) {
		hideShowElements('none', 'block');
		document.getElementById('message').textContent = 'Please enter valid amounts.';
	}
	else {
		hideShowElements('block', 'none');
		totalTip = bill * percentage;
		totalBill = bill + totalTip;
		totalEach = totalBill / people;
		document.getElementById('total-tip').textContent = '$ ' + (totalTip).toFixed(2);
		document.getElementById('total-bill').textContent = '$ ' + (totalBill).toFixed(2);
		document.getElementById('total-each').textContent = '$ ' + (totalEach).toFixed(2);

		var currentdate = new Date(); 
		var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() +
                " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();

		document.getElementById('date').textContent = datetime;
	}
});