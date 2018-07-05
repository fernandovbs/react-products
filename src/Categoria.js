import React, { Component } from 'react'

export default class Categoria extends Component {    
    loadData = (id) => {
        this.props.handleGetProdutos(id)
        this.props.handleLoadCategoria(id)
    }

    renderProduto = (produto) => {
        return <p key={produto.id} className="well">{produto.produto}</p>
    }

    componentDidMount(){
        this.loadData(this.props.match.params.catId)
    }
    componentWillReceiveProps(newProps) {
        newProps !== this.props &&
        this.loadData(newProps.match.params.catId)
    }
    render(){
//        return <h1>{this.state.categoria}</h1>
        return (
            <div>
                <h3>{this.props.categoria.categoria}</h3>
                {this.props.produtos.map(this.renderProduto)}
            </div>
        )
    }
}