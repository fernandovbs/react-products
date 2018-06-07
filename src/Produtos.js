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
    }

    componentDidMount() {
        axios
        .get('http://localhost:3001/categorias')
        .then(res => {
            this.setState({
                categorias: res.data
            })
        })
    }

    renderCategoria = (cat) => {
        console.log(cat)
        return <li><Link to={`/produtos/categorias/${cat.id}`}>{cat.categoria}</Link></li>
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
