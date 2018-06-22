import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

export default class Produtos extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categorias: []
        }
        this.handleNewCategory =  this.handleNewCategory.bind(this)
        this.loadCategorias = this.loadCategorias.bind(this)
    }

    loadCategorias(){
        axios
        .get('http://localhost:3001/categorias')
        .then(res => {
            this.setState({
                categorias: res.data
            })
        })
    }

    handleDeleteCategoria = catId => {
        axios
        .delete(`http://localhost:3001/categorias/${catId}`)
        .then(res => {
            this.loadCategorias()
        })
    }

    handleNewCategory = (e) => {
        if (e.keyCode === 13) {
            axios
            .post('http://localhost:3001/categorias', 
            {categoria: this.refs.category.value})
            .then(res => {
                this.loadCategorias()
                this.refs.category.value = ''
            })
        }
    }
    
    componentDidMount() {
        this.loadCategorias()
    }
    
    renderCategoria = (cat) => {
        return  (<li key={cat.id}>
                    <button className='btn btn-sm' onClick={() => {this.handleDeleteCategoria(cat.id)}}>
                        <span className='fa fa-remove'></span>
                    </button>
                    <Link to={`/produtos/categorias/${cat.id}`}>{cat.categoria}</Link>
                </li>)
    }
    
    render(){
        const { match } = this.props
        const { categorias } = this.state

        return (
        <div className='row'>
            <div className='col-md-2'>
                <h3>Categories</h3>
                <ul>
                    { categorias.map( this.renderCategoria ) }
                </ul>
                <div className="well">
                    <input onKeyUp={this.handleNewCategory} 
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
