import React from 'react';

/*class App extends React.Component{
  constructor(...props){
    super(...props);
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    this.agregar();
  }
  agregar(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(posts =>this.setState({posts}))
  }
  render(){
    const {posts} = this.state;
    return(
      <ul>
        {posts.map(post=><li>{post.title}</li>)}
      </ul>
    )
     }
}



export default App;
*/
import Servicios from './Servicios';
import Contacto from './Contacto';
import Home from './Home';
import Header from "./Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Imagen1 from './Imagen1';
import Historia from './Historia';
import {
  BrowserRouter as Router,
  Route,Switch, Link
} from 'react-router-dom';
import ElPerro from './ElPerro';
function App (){
  return(
    <Router>
    <div>
    <div class="col-xs-12">  
    <Header/>
    </div>
      {/*crear Hipervinculos */}
      <nav  class="navbar navbar-dark bg-dark text-center col-xs-12 "> 
        <Link  to="/">Home</Link>
        <Link to="/servicios">Servicios</Link> 
        <Link to="/contacto">Contacto</Link> 
        <Link to="/historia">Historia</Link> 
        <Link to="/elperro">El Perro</Link>
      </nav>
    </div>
  
    {/*crear las rutas */}
    <Switch>
      <Route path = "/" exact><Home/></Route>
      <Route path = "/servicios"><Servicios/></Route>
      <Route path = "/contacto"><Contacto/></Route>
      <Route path = "/historia"><Historia/></Route>
      <Route path = "/elperro"><ElPerro/></Route>
    </Switch>
    <div> 
    {/*  <Imagen1/>*/}
    </div>
    </Router>
 
  )
}

export default App;
/*https://ajgallego.gitbook.io/bootstrap-4/componentes-responsive/barra-de-navegacion*/