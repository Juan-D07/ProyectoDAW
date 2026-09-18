<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">
  
  <xsl:output method="html" indent="yes"/>
  
  <xsl:template match="/mundial_2026" >
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="webroot/css/estilo.css"/>
        <link rel="icon" href="webroot/favicon/copa.png" type="image/png"/>
        <title>Grupos del Mundial 2026 Juan Miguel Dominguez</title>
      </head>
      <body>
        <header>
          <h1>
            <xsl:value-of select="torneo/text()"/>
          </h1>
          <h2>
            Sedes: <xsl:value-of select="sedes/text()"/>
          </h2>
        </header>
        
        <main>
          <xsl:for-each select="grupos/grupo">
            <div class="grupos">
              
              <div class="titu"> GRUPO <xsl:value-of select="@id"/>
              </div>
              <xsl:for-each select="*">
                    <div class="equipo">
                      <img src="webroot/banderas/{@bandera}.png" alt="{@bandera}"/>
                      <p class="nombre"><xsl:value-of select="text()"/></p>
                    </div>
              </xsl:for-each>
            </div>
          </xsl:for-each>
        </main>
        
        <footer class="footer">
          <p class="derechos">
            © 2026 DAW1. <span><a class="miweb-link" href="../../index.html">Juan Miguel Dominguez</a></span>. Todos los derechos reservados.
          </p>
        </footer>
        
      </body>
    </html>
    
  </xsl:template>
  
  
  
</xsl:stylesheet>