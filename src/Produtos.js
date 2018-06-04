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
        .get('localhost:3001/categorias')
        .then(res => {
            this.setState({
                categorias: res.data
            })
        })
    }
    render(){
        const { match } = this.props

        return (
        <div className='row'>
            <div className='col-md-2'>
                <h3>Categories</h3>
                <Link to='produtos/categorias/1'>Category 1</Link>
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
