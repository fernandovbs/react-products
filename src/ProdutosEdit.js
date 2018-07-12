import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProdutosEdit extends Component{

    componenentDidMount(){
        this.props.loadProduto(this.props.match.params.id)
        .then(() => {
            this.refs.categoria.value = this.props.produto.categoria
            this.refs.produto.value = this.props.produto.produto
        })
    }

    handleEditProduto(e) {
        if (e.keyCode === 13) {
            const produto = {
                categoria: this.props.produto.id,
                categoria: this.refs.categoria.value,
                produto: this.refs.produto.value
            }

            this.props.handleEditProduto(produto)
            .then((res) => this.setState({redirect: '/produtos/categorias/'+produto.categoria}))

            this.refs.produto.value = ''            
        }
    }
    
    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (<div>
            <h2>Editar Produto</h2>
            <div className='field-group'>
                <select ref='categoria'>
                    {this.props.categorias.map(this.renderCategoria)}
                </select>
            </div>
            <input type='text' placeholder='Nome do produto' 
            className='form-control' 
            ref='produto' onKeyUp={this.handleNewProduto}/>
        </div>)

    }
}

export default ProdutosEdit