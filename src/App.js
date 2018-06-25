import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    this.loadCategorias = this.loadCategorias.bind(this)
    this.handleDeleteCategoria = this.handleDeleteCategoria.bind(this)
    this.handleNewCategory = this.handleNewCategory(this)
  }

  loadCategorias(){
      this.props.apis.getCategorias()
      .then(res => {
        this.setState({
            categorias: res.data
        })
      })
  }

  handleDeleteCategoria = catId => {
    this.props.apis.deleteCategoria(catId)
    .then(res => {
        this.loadCategorias()
    })
  }

  handleNewCategory = (e) => {
    if (e.keyCode === 13) {
        this.props.apis
        .postCategoria({categoria: this.refs.category.value})
        .then(res => {
            this.loadCategorias()
            this.refs.category.value = ''
        })
      }
  }

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
            <Route path='/produtos' render={(props) => {
              return (
              <Produtos {...props} 
              loadCategorias={this.loadCategorias}
              handleDeleteCategoria={this.handleDeleteCategoria}
              handleNewCategory={this.handleNewCategory}
              categorias={this.state.categorias}
              />
            )}} />             
          </div>    
        </div>
      </Router>
    );
  }
}

export default App;
