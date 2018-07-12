import React, { Component } from 'react'

export default class Categoria extends Component {    
    constructor(props){
        super(props)
        this.state = {
            id: null
        }
    }

    loadData = (id) => {
        this.setState({id: id})
        this.props.handleGetProdutos(id)
        this.props.handleLoadCategoria(id)
    }

    renderProduto = (produto) => {
        return (<div key={produto.id}>
                    <p className="well">{produto.produto}
                        <button onClick={() => {
                            this.props.handleDeleteProduto(produto.id)
                            this.loadData(produto.categoria)
                        }}>Apagar</button></p>
                </div>)
    }

    componentDidMount(){
        this.loadData(this.props.match.params.catId)
    }
    componentWillReceiveProps(newProps) {
        newProps.match.params.catId !== this.state.id &&
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