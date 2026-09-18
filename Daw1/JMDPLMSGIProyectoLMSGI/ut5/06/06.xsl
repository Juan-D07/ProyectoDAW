<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0">

  <xsl:output method="xml" indent="yes"/>

  <xsl:template match="/universidad" >
    <root> <!-- xsl:elemetn name="root" -->
      
      <xsl:for-each select="carreras/carrera">
        <carrera>
          <nombreCarreras> 
              <xsl:value-of select="nombre"/>
          </nombreCarreras>
          
          <xsl:if test="count(//asignatura[@titulacion=current()/@id]) &gt; 0">
            <asignaturas>
              <xsl:for-each select="//asignatura[@titulacion=current()/@id]">
                <asignatura>
                  <xsl:value-of select="nombre"/>
                </asignatura>    
                
              </xsl:for-each>
            </asignaturas>
          </xsl:if>

        </carrera>
        
      </xsl:for-each>
    </root>
    
    
  </xsl:template>

  

</xsl:stylesheet>