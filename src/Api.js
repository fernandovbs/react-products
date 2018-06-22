import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    getCategorias : () => api.get('categorias'),
    deleteCategoria : (catId) => api.delete(`categorias/${catId}`)
}

export default apis