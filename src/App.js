import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand">Gerenciador de Produtos</a>
            <ul className="navbar-nav ">
              <li className="nav-item"><a href="/" className="nav-link">about</a></li>
              <li className="nav-item"><a href="/" className="nav-link">about</a></li>
              <li className="nav-item"><a href="/" className="nav-link">about</a></li>
              <li className="nav-item"><a href="/" className="nav-link">about</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <h1>Produtos</h1>
        </div>    
      </div>
    );
  }
}

export default App;
