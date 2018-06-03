import React, { Component } from 'react'

export default class Categoria extends Component {
    render(){
        return <h1>Categorie {this.props.match.params.catId}</h1>
    }
}