<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/data" >
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="css/estilo.css"/>
        <title>El Tiempo <xsl:value-of select="locality/name/text()"/></title>
      </head>
      <body>
        <header>
          <h1>
            El Tiempo <xsl:value-of select="locality/name/text()"/>
          </h1>
          <h2>
            XSLT 04
          </h2>
        </header>
        
        <main>
          <table>
            <thead>
              <tr>
                <th>
                  fecha
                </th>
                <th>
                  <xsl:value-of select="information/temperature"/>
                </th>
                <th>
                  Humedad
                </th>
                <th>
                  Estado del cielo
                </th>
                <th>
                  Direccion del Viento <xsl:value-of select="information/wind"/>
                </th>
                <th>
                  Salida / Puesta de Sol
                </th>
                <th>
                  Salida / Puesta de Luna
                </th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="day">
                <tr>
                  <td>
                    <xsl:value-of select="date"/>
                  </td>
                  <td>
                    <xsl:value-of select="temperature_min"/> / <xsl:value-of select="temperature_max"/>
                  </td>
                  <td>
                    <xsl:value-of select="humidity"/>
                  </td>
                  <td>
                    <img src="images/{icon}.gif" alt="{concat(icon,' ',text)}"/>
                  </td>
                  <td>
                    <xsl:value-of select="concat(wind,' ',/data/information/wind)"/> <img src="images/{wind_direction}.gif" alt="{wind_direction}"/>
                  </td>
                  <td>
                    <xsl:value-of select="sunrise"/> : <xsl:value-of select="sunset"/>
                  </td>
                  <td>
                    <xsl:value-of select="moonrise"/> : <xsl:value-of select="moonset"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
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