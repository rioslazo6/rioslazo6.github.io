$(document).ready(function () {
	$('#get-products').click(function () {
		getProducts();
	})

	function getProducts() {
		$.ajax({
			url: 'https://mini-shop-rg.herokuapp.com/products',
			type: 'GET',
			dataType: 'json',
			success: function (json) {
				$('#get-products').css('display', 'none')
				$('#initial-text').html('Feel free to look around. This is good stuff. Everything we sell is top quality. 100% guaranteed.')
				for (var i = 0; i < json.length; i++) {
					var item = json[i]
					$('#products').append(
						'<div class="col-6 col-md-4 col-xl-3 my-4 px-4">' +
							'<div class="image-container"><img class="img img-responsive full-width" src="' + item.image + '"/></div>' +
							'<h5 class="text-center mt-3">' + item.name + '</h5>' +
							'<h4 class="text-center">$' + item.price + '</h4>' +
							'<p class="text-center">Available units: <strong class="text-primary">' + item.stock + '</strong></p>' +
							'<p class="text-justify text-muted">' + item.description + '</p>' +
						'</div>'
					)
				}
			},
			error: function () {
				alert('An error has occurred. Please try again later.')
			}
		})
	}
})