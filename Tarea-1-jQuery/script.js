$(document).ready(function () {

	$('#add').click(testItem)

	$('#input').keypress(function (key) {
		if (key.key === 'Enter') {
			testItem()
		}
	})

	function addItem() {
		var input = $('#input').val()
		$('<div class="item"><div class="check-div"><input type="checkbox" class="checkbox"></div><div class="text">' + input + '</div><div class="remove-button-div"><button class="remove"> X </button></div></div>').appendTo('#all-items')
		modifyElements('Enter a task here.', 'What do you want to do?', 'initial')
		$('.checkbox').click(markDone)
		$('.remove').click(removeItem)
	}

	function removeItem(button) {
		$(button.target).parent().parent().remove()
	}

	function markDone(checkbox) {
		if ($(checkbox.target).prop('checked')) {
			$(checkbox.target).parent().parent().css({ color: '#B69A73', textDecoration: 'line-through' })
		} else {
			$(checkbox.target).parent().parent().css({ color: 'initial', textDecoration: 'initial' })
		}
	}

	function testItem() {
		if ($('#input').val().length === 0 || !$('#input').val().trim()) {
			modifyElements('Do something. Anything.', 'No blank tasks please!', 'crimson')
		} else {
			addItem()
		}
	}

	function modifyElements(inputAttribute, messageTextContent, messageColor) {
		$('#input').val('')
		$('#input').focus()
		$('#input').attr('placeholder', inputAttribute)
		$('#message').text(messageTextContent)
		$('#message').css('color', messageColor)
	}
})