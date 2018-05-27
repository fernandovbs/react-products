import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProdutosHome from './ProdutosHome'

export default class Produtos extends Component{
    render(){
        return (
        <div className='row'>
            <div className='col-md-2'>
                <h3>Categories</h3>
                <ul><li>Link for categories</li></ul>
            </div>
            <div className='col-md-10'>
                <h1>Produtos</h1>
                <Route exact path={this.props.match.url} component={ProdutosHome} />
            </div>
        </div>
        )
    }
}
