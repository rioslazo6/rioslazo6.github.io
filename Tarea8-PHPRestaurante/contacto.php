<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<title>Tony Roma's</title>
	<style>
		textarea {
			resize: none;
			height: 100%;
		}
		.form-control::-webkit-input-placeholder {
		color: #C0C0C0;
		}
	</style>
</head>
<body>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<img class="navbar-brand" src="logo.png" alt="Tony Roma's">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbar-toggler">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="index.html">Inicio</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="menu.html">Menú</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="promociones.html">Promociones</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="sucursales.html">Sucursales</a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="contacto.php">Contáctanos <span class="sr-only">(current)</span></a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container">
		<div class="row mt-5 mb-3">
			<div class="col-12">
				<p class="text-justify lead">En Tony Roma's agradecemos tus comentarios y sugerencias para mejorar y para siempre brindarte la calidad de atención que te mereces.</p>
				<p class="text-justify lead">Cuéntanos tu experiencia en nuestros restaurantes, haznos saber cómo te sientes con nuestro servicio, dinos qué platos te gustaría que agregáramos a nuestro menú, etc.</p>
			</div>
			<form class="col-12 my-3" action="" method="post" onsubmit="return validate()">
				<div class="form-row">
					<div class="form-group col-md-12">
						<label for="input-full-name" class="font-weight-bold">Nombre completo</label>
						<input type="text" class="form-control" name="input-full-name" id="input-full-name" placeholder="Antonio Roma" required>
					</div>
					<div class="form-group col-md-6">
						<label for="input-email" class="font-weight-bold">Email</label>
						<input type="email" class="form-control" name="input-email" id="input-email" placeholder="tony@roma.com" required>
					</div>
					<div class="form-group col-md-6">
						<label for="input-phone-number" class="font-weight-bold">Teléfono</label>
						<input type="text" class="form-control" name="input-phone-number" id="input-phone-number" placeholder="7788-9900" required>
					</div>
					<div class="form-group col-md-12">
						<label for="input-comments" class="font-weight-bold">Comentarios</label>
						<textarea class="form-control" rows="8" name="input-comments" id="input-comments" placeholder="¡Me encanta Tony Roma's!" required></textarea>
					</div>
				</div>
				<button type="submit" name="submit" class="btn btn-dark d-block mx-auto">Enviar</button>
			</form>
		</div>
	</div>
	<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;
	require 'PHPMailer.php';
	require 'Exception.php';
	require 'SMTP.php';
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->Encoding = 'base64';
		if (isset($_POST['submit'])) {
			try {
				$mail->isSMTP();
				$mail->Host = 'smtp.gmail.com';				//Yo usé Gmail para configurarlo
				$mail->SMTPAuth = true;
				$mail->Username = 'your-email@gmail.com';	//Gmail
				$mail->Password = 'your-password';			//Usé 2FA y una app-specific password para que funcionara
				$mail->SMTPSecure = 'tls';
				$mail->Port = 587;
				$mail->isHTML(true);
				$mail->setFrom($_POST['input-email'], $_POST['input-full-name']);	//Gmail no permite usar otro email como 'From' así que todos los correos que envié aparecían como enviados desde mi Gmail... No es error del código sino que limitación de Gmail
				$mail->addAddress('recipient-email@email.com', 'Tony Roma\'s');		//Email donde caerán los correos
				$mail->Subject = 'Feedback - Tony Roma\'s';
				$mail->Body =
					"<b>Nombre:</b> {$_POST['input-full-name']}<br/>
					<b>Correo electrónico:</b> {$_POST['input-email']}<br/>
					<b>Teléfono:</b> {$_POST['input-phone-number']}<br/>
							<b>Mensaje: </b>{$_POST['input-comments']}";
				$mail->send();
				echo '	<div class="container">
							<div class="row mb-3">
								<div class="col-12">
									<h2>¡Gracias por tu mensaje!</h2>
									<p class="text-justify lead mt-3">Apreciamos mucho tu opinión. Uno de nuestros representantes te responderá dentro de poco.</p>
								</div>
							</div>
						</div>';
			}
			catch (Exception $e) {
				echo '	<div class="container">
							<div class="row mb-3">
								<div class="col-12">
									<h2 class="text-danger">¡Oh-oh!</h2>
									<p class="text-justify lead mt-3">Hubo un problema y tu mensaje no fue enviado. Por favor inténtalo de nuevo.</p>
									<p class="text-justify lead mt-3"><b>Detalles del error:</b> <i>', $mail->ErrorInfo;'</i></p>
								</div>
							</div>
						</div>';
			}
		}
	?>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>