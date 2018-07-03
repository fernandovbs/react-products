import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    getCategorias : () => api.get('categorias'),
    deleteCategoria : catId => api.delete(`categorias/${catId}`),
    postCategoria: categoria => api.post('categorias', categoria),
    postProduto: produto => api.post('produtos', produto),    
    editCategoria: categoria => api.put(`categorias/${categoria.id}`, categoria)
}

export default apis