import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: [],
      produtos:[],
      categoria:{id:'', categoria:''}
    }
    
    this.loadCategorias = this.loadCategorias.bind(this)
    this.handleDeleteCategoria = this.handleDeleteCategoria.bind(this)
    this.handleNewCategoria = this.handleNewCategoria.bind(this)
    this.handleEditCategoria = this.handleEditCategoria.bind(this)    
    this.handleLoadCategoria = this.handleLoadCategoria.bind(this)
    this.handleGetProdutos = this.handleGetProdutos.bind(this)        
  }

  handleLoadCategoria = catId => {
    this.props.apis.loadCategoria(catId)
    .then(res => {
      this.setState({
          categoria: res.data
      })
    })
  }

  loadCategorias(){
      this.props.apis.getCategorias()
      .then(res => this.setState( {categorias: res.data} ))
  }

  handleDeleteCategoria = catId => {
    this.props.apis.deleteCategoria(catId)
    .then(res => this.loadCategorias())
  }

  handleNewCategoria = categoria => {
    this.props.apis
    .postCategoria(categoria)
    .then(res => this.loadCategorias())
  }

  handleEditCategoria = categoria => {
    this.props.apis
    .editCategoria(categoria)
    .then(res => this.loadCategorias())
  }

  handleNewProduto = produto => this.props.apis.postProduto(produto)

  handleGetProdutos = catId => {
    this.props.apis.getProdutos(catId)
    .then(res => {
      this.setState({
          produtos: res.data
      })
    })        
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
              handleLoadCategoria={this.handleLoadCategoria}
              loadCategorias={this.loadCategorias}
              handleDeleteCategoria={this.handleDeleteCategoria}
              handleNewCategoria={this.handleNewCategoria}
              handleEditCategoria={this.handleEditCategoria}
              categorias={this.state.categorias}
              handleGetProdutos={this.handleGetProdutos}  
              handleNewProduto={this.handleNewProduto}
              categoria={this.state.categoria}
              produtos={this.state.produtos}
              />
            )}} />             
          </div>    
        </div>
      </Router>
    );
  }
}

export default App;
