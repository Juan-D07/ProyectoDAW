<?php
$xsd = file_get_contents("01.xsd");
$dtd = file_get_contents("01.dtd");
$xml = file_get_contents("01.xml");
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ut4.2 Juan Miguel Dominguez</title>
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="../../webroot/font/Roboto-VariableFont_wdth,wght.ttf">
    <link rel="stylesheet" href="../../webroot/css/style.css">

</head>

<body>
	<header>
		<h1> UT4.2 Correo Electronico</h1>
	</header>
	<main>
    <div>
        <details class="ver">
            <summary>  Correo Electronico</summary>
            <iframe src="../doc/Ut4_01.pdf" width="100%" height="800px"></iframe>

        </details>
    </div>
    <div>
        <details class="ver">
            <summary> XML Correo Electronico</summary>
             <pre><?php echo htmlspecialchars($xml); ?></pre>
        </details>
    </div>
    <div>
        <details class="ver">
            <summary> DTD Correo Electronico</summary>
              <pre><?php echo htmlspecialchars($dtd); ?></pre>
        </details>
    </div>
    <div>
        <details class="ver">
            <summary> XSD Correo Electronico</summary>
             <pre><?php echo htmlspecialchars($xsd); ?></pre>
        </details>
	</div>
	</main>
	 <footer>
        <address>Copyright &copy; 2026 <strong><a href="../../index.html#Unidad4">Juan Miguel Dominguez</a></strong> Todos los derechos reservados</address>
    </footer>
</body>

</html>