<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/actividades" >
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="css/estilo.css"/>
        <title>UT5.05 Listado Actividades</title>
      </head>
      <body>
        <header>
          <h1>
            Listado de todas las Actividades
          </h1>
          <h2>
            XSLT 05
          </h2>
          
        </header>
        <main>
          <xsl:for-each select="actividad">
            <div class="actividad_div">
              
              <xsl:for-each select="*">
                <xsl:choose>
                  <xsl:when test="name() = 'sesiones'">
                    <div class="{name()}">
                      <xsl:value-of select="name()"/>
                    </div>

                    <xsl:for-each select="*">
                      <div class="{name()}">
                        <span><xsl:value-of select="name()"/></span><xsl:value-of select="concat(': ',current())"/>
                      </div>
                    </xsl:for-each>

                  </xsl:when>
                  <xsl:otherwise>
                    <div class="{name()}">
                      <span><xsl:value-of select="name()"/></span><xsl:value-of select="concat(': ',current())"/>
                    </div>
                  </xsl:otherwise>
                </xsl:choose>
                
              </xsl:for-each>
            </div>
          </xsl:for-each>
        </main>
        
        <footer class="footer">
          <p class="derechos">
            © 2026 DAW1. <span ><a class="miweb-link" href="../../index.html" >Juan Miguel Dominguez</a></span>. Todos los derechos reservados.
          </p>
          <p class="modificacion">
            Última modificación: 15 de Abril de 2026, 09:00
          </p>        
        </footer>
            
      </body>
    </html>
    
  </xsl:template>

  

</xsl:stylesheet>