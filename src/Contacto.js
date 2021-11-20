export default function Contacto(){
return (
        <div>
            <h1>Contacto</h1>
            <table className="tabla" align="center">
  <tbody>
    <tr>
   {/*   <td height="195" colspan="3"><p><img src="Imagenes/titulo1.png" width="271" height="191" alt=""/><img src="Imagenes/titulo2.png" width="382" height="191" alt=""/><img src="Imagenes/titulo3.png" width="247" height="191" alt=""/></p></td>*/}
   </tr>
    <tr>
      <td><p>&nbsp;</p>
        
        
 {/* <p><a href="index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image7','','Imagenes/1inicio2.jpg',1)"><img src="Imagenes/1inicio.png" name="Image7" width="165" height="26" border="0"></a><a href="sobre_nosotros.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image8','','Imagenes/1sobre__nosotros2.jpg',1)"><img src="Imagenes/1sobre__nosotros.png" name="Image8" width="165" height="29" border="0"></a><a href="el_perro.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image11','','Imagenes/el_perro2.jpg',1)"><img src="Imagenes/el_perro1.png" name="Image11" width="165" height="29" border="0"></a><a href="galeria.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image9','','Imagenes/3galeria2.jpg',1)"><img src="Imagenes/3galeria.png" name="Image9" width="165" height="30" border="0"></a><a href="contactenos.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image10','','Imagenes/4contactenos2.jpg',1)"><img src="Imagenes/4contactenos.png" name="Image10" width="166" height="31" border="0"></a></p> 
<p><a href="Imagenes/aviacion%20latina.png" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image9','','Imagenes/4contactenos2.png',1)"><img src="Imagenes/untitled.jpg" alt="" width="165" height="135"></a></p>
      <p>&nbsp;</p></td>
<td width="734" colspan="2" valign="top" bgcolor="#282828"><!-- InstanceBeginEditable name="contenido" -->*/}
        <h1 className="h1Contacto">Contactenos</h1>
        <div>
          
      <form id="form1" name="form1">
        <table>
          <tr>
            <td ><p>NOMBRE: </p></td>
            <td width="380"><input type="text" name="nombre" id="nombre" /></td>
          </tr>
          <tr>
            <td><p>APELLIDO: </p></td>
            <td><input type="text" name="apellido" id="apellido" /></td>
          </tr>
          <tr>
            <td><p>EMAIL: </p></td>
            <td><input type="text" name="email" id="email" /></td>
          </tr>
          <tr>
            <td><p>CONSULTA: </p></td>
            <td><textarea name="consulta" id="consulta" cols="50" rows="7"></textarea></td>
          </tr>
          <tr>
            <td><input type="submit" name="boton" id="boton" value="Enviar" /></td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </form>
      <h1 className="finForm">&nbsp;</h1>
    
        </div>
        <p>&nbsp;</p>
     </td>
    </tr>
    <tr>
     
    </tr>
  </tbody>
</table>
</div>
    )
}