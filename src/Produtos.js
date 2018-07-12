import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import ProdutosNovo from './ProdutosNovo'
import Categoria from './Categoria'

export default class Produtos extends Component{    
    constructor(props){
        super(props)
        this.state = {
            editingCategoria: ''
        }

        this.editCategoria = this.editCategoria.bind(this)
        this.handleEditCategoria = this.handleEditCategoria.bind(this)
    }

    handleNewCategoria = e => {
        if (e.keyCode === 13) {
            this.props.handleNewCategoria({categoria: this.refs.category.value})
            this.refs.category.value = ''
        }
    }
    
    handleEditCategoria = e => {
        if (e.keyCode === 13) {
            this.props.handleEditCategoria(
                {
                    id: this.state.editingCategoria, 
                    categoria: this.refs['cat-'+this.state.editingCategoria].value
                }
            )
            
            this.setState({editingCategoria: ''})
        }
    }

    editCategoria(catId) {
        this.setState({
            editingCategoria: catId
        })
    }

    componentDidMount() {
        this.props.loadCategorias()
    }
    
    renderCategoria = (cat) => {
        return  (

            <li key={cat.id}>
                {this.state.editingCategoria === cat.id &&
                    <div className='input-group'>
                        <button className='input-group-btn' onClick={() => {this.setState({editingCategoria: ''})}}>
                            <span className='fa fa-remove'></span>
                        </button>
                        <input className='form-control' onKeyUp={this.handleEditCategoria} ref={'cat-'+cat.id} type='text' defaultValue={cat.categoria} />
                    </div>
                }
                {this.state.editingCategoria !== cat.id &&
                    <div>
                        <button className='btn btn-sm' onClick={() => {this.props.handleDeleteCategoria(cat.id)}}>
                            <span className='fa fa-remove'></span>
                        </button>
                        <button className='btn btn-sm' onClick={() => {this.editCategoria(cat.id)}}>
                            <span className='fa fa-pencil'></span>
                        </button>
                        <Link to={`/produtos/categorias/${cat.id}`}>{cat.categoria}</Link>
                    </div>
                }
            </li>
            )
    }
    
    render(){
        const { match, categorias } = this.props

        return (
        <div className='row'>
            <div className='col-md-3'>
                <h3>Categories</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                    { categorias.map(this.renderCategoria) }
                </ul>
                <div className="well">
                    <input onKeyUp={this.handleNewCategoria} 
                    type='text'
                    ref='category'
                    placeholder='Nova Categoria' style={{width: '100%'}}/>
                </div>
                <Link to='/produtos/novo'>Novo Produto</Link>
            </div>
            <div className='col-md-9'>
                <h1>Produtos</h1>
                <Route exact path={match.url} component={ProdutosHome} />
                <Route exact path={match.url+'/novo'} 
                    render={(props) => { 
                    return <ProdutosNovo {...props} 
                    categorias={categorias}
                    handleNewProduto={this.props.handleNewProduto}
                />}} />
                <Route exact path={match.url+'/categorias/:catId'} render={(props) => {
                    return <Categoria {...props}
                    handleLoadCategoria={this.props.handleLoadCategoria}
                    handleGetProdutos={this.props.handleGetProdutos}
                    categoria={this.props.categoria}
                    produtos={this.props.produtos}                    
                    handleDeleteProduto={this.props.handleDeleteProduto}
                />}} />    
            </div>
        </div>
        )
    }
}
