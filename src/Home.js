import logo3 from '../src/Imagenes/lateral.fw.png';
import logo4 from '../src/Imagenes/galeriafotosyvideos.png';
import logo5 from '../src/Imagenes/620px-Assemblage_chien.jpg';
import logo6 from '../src/Imagenes/620px-Assemblage_chien.png';
import logo7 from '../src/Imagenes/vermas2.gif';
import logo8 from '../src/Imagenes/sobre _nostrosre.fw.png'; 
import logo9 from '../src/Imagenes/Untitled-6.fw.png';
import ElPerro from './ElPerro';
import Historia from './Historia';
import Servicios from './Servicios';

export default function Home(){
    return (
           
        <div>
           
            <div class="portada2" id="dvicontenido">
            
            <h1>BuenoS MomentoS</h1>
            <img src={logo3} width="368" height="563" alt="" align="right" Style="border-radius: 10px"></img>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</h2>
            
            <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
            <p>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p>
            </div>

            <div class="portada1">
          <h1>Galería de Fotos y Videos</h1>
          <p>♥♥Fotos de los amigos de todas formas hacien do de todo y re lindoso. Son los mejores super amigoss♥♥</p>
          <p><a href= {<Servicios/>}> <img src={logo4} alt="" width="318" height="235" align="absmiddle"></img></a></p>
          <p>&nbsp;          </p>
          <div class="portada2">
            <h1>El Perro</h1>
            <h2>INTRODUCCIÓN</h2>
            <p>Canis lupus familiaris:El&nbsp;perro&nbsp;o&nbsp;perro doméstico&nbsp;(Canis lupus familiaris)es un&nbsp;mamífero&nbsp;carnívoro&nbsp;de la&nbsp;familia&nbsp;de los&nbsp;cánidos, que constituye una subespecie del&nbsp;lobo&nbsp;(Canis lupus).Un estudio publicado por la revista de&nbsp;divulgación científica&nbsp;Nature&nbsp;revela que, gracias al proceso dedomesticación, el organismo del perro se ha adaptado5&nbsp;a cierta clase de alimentos, en este caso el&nbsp;almidón.6&nbsp;Su tamaño o talla, su forma y pelaje es muy diverso según la&nbsp;raza. Posee un&nbsp;oído&nbsp;y&nbsp;olfato&nbsp;muy desarrollados, siendo este último su principal órgano sensorial. En las razas pequeñas puede alcanzar una longevidad de cerca de 20 años, con atención esmerada por parte del propietario, de otra forma su vida en promedio es alrededor de los 15 años.
            <br/>
            </p>
            <p><a href={logo5}><img src={logo6} width="202" height="191" alt=""></img></a></p>
            <p><a href= {<ElPerro/>}><img src={logo7} width="70" height="32" alt=""></img></a></p>
            <p>&nbsp;</p>
          </div>
          <div class="portada2">
            <h1>Sobre Nosotros</h1>
            <h2>INTRODUCCIÓN</h2>
            <p>Ellos son bebe amigo , layky, pelu (la mas linda del salon), la negra, la morena, bebe osi, la cleo, el ziru, la tenesita, la chana, la zafy, bebe disco, la negra, y muchos             </p>
            <p><a href={logo8}><img src={logo9} width="252" height="370" alt=""></img></a></p>
            <p><a href={<Historia/>}> <img src={logo7} width="70" height="32" alt=""></img></a></p>
            <p>
              </p><section></section>
            <p></p>
          </div>
        </div>
           
            
        </div>
        
    )
}