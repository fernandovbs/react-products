import React, { Component} from 'react'

class ProdutosNovo extends Component{
    constructor(props){
        super(props)
        this.renderCategoria = this.renderCategoria.bind(this)
        this.handleNewProduto = this.handleNewProduto.bind(this)
    }

    handleNewProduto = e => {
        if (e.keyCode === 13) {
            this.props.handleNewProduto(
                {categoria: this.refs.categoria.value,
                produto: this.refs.produto.value}
            )
            this.refs.produto.value = ''            
        }
    }

    renderCategoria(categoria){
        return <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
    }

    render(){
        return (<div>
                <h2>Novo Produto</h2>
                <div className='field-group'>
                    <select ref='categoria'>
                        {this.props.categorias.map(this.renderCategoria)}
                    </select>
                </div>
                <input type='text' placeholder='Nome do novo produto' 
                className='form-control' 
                ref='produto' onKeyUp={this.handleNewProduto}/>
            </div>)
    }
}

export default ProdutosNovo