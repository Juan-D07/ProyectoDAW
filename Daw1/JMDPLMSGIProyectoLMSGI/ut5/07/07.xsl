<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">

  <xsl:output method="text" indent="yes"/>

  <xsl:template match="/universidad" >
        UNIVERSIDAD <xsl:value-of select="nombre"/>
    <xsl:text> &#10; &#10;</xsl:text>

    <xsl:for-each select="carreras/carrera">
      <xsl:value-of select="concat(nombre,': ',count(//alumno[estudios/carrera/@codigo=current()/@id]))"/>
      <xsl:text> &#10;</xsl:text>
    </xsl:for-each>
    
    
  </xsl:template>

  

</xsl:stylesheet>