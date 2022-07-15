import axios from 'axios';

const url = 'http://localhost:3008/api';

const api = {};

api.getProductById = async (id) => {
    try {
        const res = await axios.get(`${url}/products/${id}`)
        return res.data
    } catch (err) {
        throw err
    }
}

api.getProducts = async () => {
    try {
        const res = await axios.get(`${url}/products`)
        return res.data
    } catch (err) {
        throw err
    }
}

api.getProductsOnSale = async () => {
    try {
        const res = await axios.get(`${url}/products/on-sale`)
        return res.data
    } catch (err) {
        throw err
    }
}

api.getProductsByTags = async (tags) => {
    try {
        const res = await axios.post(`${url}/products/tags`, { tags: tags })
        return await res.data
    } catch (err) {
        throw err
    }
}

api.getProductsByCategories = async (categories) => {
    try {
        const res = await axios.post(`${url}/products/categories`, { categories: categories })
        return await res.data
    } catch (err) {
        throw err
    }
}

api.searchProducts = async (name) => {
    try {
        const res = await axios.post(`${url}/products/search`, { name: name })
        return await res.data
    } catch (err) {
        throw err
    }
}

api.createProduct = async (product, token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
       
        const fd = new FormData();

        for (const key in product) {
            const value = Array.isArray(product[key]) ? JSON.stringify(product[key]) : product[key]
            fd.append(key, value)
        }

        return await axios.post(`${url}/products/`, fd, config)
    } catch (err) {
        throw err
    }
}

api.updateProduct = async (id, product, token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const fd = new FormData();

        for (const key in product) {
            const value = Array.isArray(product[key]) ? JSON.stringify(product[key]) : product[key]
            fd.append(key, value)
        }

        return await axios.put(`${url}/products/${id}`, fd, config)
    } catch (err) {
        throw err
    }
}

api.removeProduct = async (id, token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        return await axios.delete(`${url}/products/${id}`, config)
    } catch (err) {
        throw err
    }
}

api.getUserData = async (id, token) => {
    try {
        const res = await axios.get(`${url}/users/${id}`)
        return await res.data
    } catch (err) {
        throw err
    }
}

api.getUserData = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.get(`${url}/users/me`, config)
        return await res.data
    } catch (err) {
        throw err
    }
}

api.login = async (email, password) => {
    try {
        const res = await axios.post(`${url}/users/login`, { email, password })
        return await res.data
    } catch (err) {
        throw err
    }
}

api.signUp = async ({ name, email, password, address, role }) => {
    try {
        const res = await axios.post(`${url}/users`, { name, email, password, address, role })
        return await res.data
    } catch (err) {
        throw err
    }
}

export default api;