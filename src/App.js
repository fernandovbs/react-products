import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
              <a href="/" className="navbar-brand">Gerenciador de Produtos</a>
              <ul className="navbar-nav ">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/produtos" className="nav-link">produtos</Link></li>
                <li className="nav-item"><Link to="/sobre" className="nav-link">about</Link></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/sobre' component={Sobre} /> 
            <Route path='/produtos' component={Produtos} />             
          </div>    
        </div>
      </Router>
    );
  }
}

export default App;
