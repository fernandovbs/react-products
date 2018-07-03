import React, { Component } from 'react'
import axios from 'axios';

export default class Categoria extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            categoria: {}
        }
    }

    loadData = (id) => {
        axios
        .get(`http://localhost:3001/produtos?categoria=${id}`)
        .then(res => {
            this.setState({
                produtos: res.data
            })
        })        
        axios
        .get(`http://localhost:3001/categorias/${id}`)
        .then(res => {
            this.setState({
                categoria: res.data
            })
        })
    }

    renderProduto = (produto) => {
        return <p key={produto.id} className="well">{produto.produto}</p>
    }

    componentDidMount(){
        this.loadData(this.props.match.params.catId)
    }
    componentWillReceiveProps(newProps) {
        this.loadData(newProps.match.params.catId)
    }
    render(){
//        return <h1>{this.state.categoria}</h1>
        return (
            <div>
                <h3>{this.state.categoria.categoria}</h3>
                {this.state.produtos.map(this.renderProduto)}
            </div>
        )
    }
}