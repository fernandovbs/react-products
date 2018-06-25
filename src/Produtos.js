import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

export default class Produtos extends Component{    

    handleNewCategoria = (e) => {
        this.props.handleNewCategory(e)
    }
    
    componentDidMount() {
        this.props.loadCategorias()
    }
    
    renderCategoria = (cat) => {
        return  (<li key={cat.id}>
                    <button className='btn btn-sm' onClick={() => {this.props.handleDeleteCategoria(cat.id)}}>
                        <span className='fa fa-remove'></span>
                    </button>
                    <Link to={`/produtos/categorias/${cat.id}`}>{cat.categoria}</Link>
                </li>)
    }
    
    render(){
        const { match, categorias } = this.props

        return (
        <div className='row'>
            <div className='col-md-2'>
                <h3>Categories</h3>
                <ul>
                    { categorias.map( this.renderCategoria ) }
                </ul>
                <div className="well">
                    <input onKeyUp={this.handleNewCategoria} 
                    type='text'
                    ref='category'
                    placeholder='Nova Categoria' style={{width: '100%'}}/>
                </div>
            </div>
            <div className='col-md-10'>
                <h1>Produtos</h1>
                <Route exact path={match.url} component={ProdutosHome} />
                <Route exact path={match.url+'/categorias/:catId'} component={Categoria} />    
            </div>
        </div>
        )
    }
}
