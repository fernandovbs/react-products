import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-header">
              <a href="/" className="navbar-brand">Gerenciador de Produtos</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/">about</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">about</a></li>
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
