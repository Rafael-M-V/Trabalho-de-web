import React, { useContext, useEffect, useState } from 'react';
import PopUp from '../generic/PopUp';
import Button from '../generic/Button';
import UserContext from '../../context/user/UserContext';
import api from '../../api';

import './Form.css';

const ManageProduct = ({ setOpen }) => {
    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [newImage, setNewImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState('un')
    const [discount, setDiscount] = useState(0)
    const [stockAmount, setStockAmount] = useState(0)
    const [tags, setTags] = useState('')
    const [categories, setCategories] = useState([])

    const { token } = useContext(UserContext)

    const buildNewProduct = (product) => {
        setId(product?._id)
        setName(product.name)
        setImage(product.image)
        setDescription(product.description)
        setPrice(product.price)
        setDiscount(product.discount)
        setUnit(product.unit)
        setStockAmount(product.stockAmount)
        setTags(product.tags.join(', '))
        setCategories(product.categories)
    }

    const buildCurrentProduct = () => {
        const product = {
            name: name,
            newImage: newImage,
            description: description,
            price: price,
            unit: unit,
            stockAmount: stockAmount,
            tags: tags.split(','),
            categories: JSON.stringify(categories)
        }

        if (id !== '') {
            product._id = id
        }

        return product
    }

    const getProduct = async () => {
        try {
            if (id !== '') {
                const product = await api.getProductById(id)
                buildNewProduct(await product)
            } else if (name !== '') {
                const product = await api.searchProducts(name)
                buildNewProduct(await product[0])
            }
        } catch (err) {
            if (err.response.status === 404) {
                return alert('Produto não encontrado')
            }
            console.log(err)
            alert(err)
        }
    }

    const updateProduct = async () => {
        const insert = (id === '');

        try {
            const product = buildCurrentProduct()
            if (insert) {
                await api.createProduct(product, token)
            } else {
                await api.updateProduct(id, product, token)
            }
            alert(`Produto ${insert ? 'inserido' : 'atualizado'} com sucesso`)
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    const removeProduct = async () => {
        try {
            await api.removeProduct(id, token)
            console.log('Produto removido com sucesso')
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    const onChangeImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const onChangeCategories = (e) => {
        let arr = []
        document.querySelectorAll('input[type=checkbox]:checked').forEach(c => {
            arr.push(c.value)
        })
        
        setCategories(arr)
    }

    useEffect(() => {
        document.querySelectorAll('input[type=checkbox]').forEach(c => c.checked = categories.includes(c.value))
    }, [categories])

    return (
        <PopUp title='Gerenciar produtos' setOpen={setOpen}>
            <div className='ManageProduct Form'>
                <img src={image} width="250px"/> <br/><br/>
                <form>
                    <div className='Form-item'>
                        <label htmlFor='id'>ID</label>
                        <input id='id' type='text' name='id' autoComplete='off' value={id} onChange={e => setId(e.target.value)} autoFocus/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='name'>Nome</label>
                        <input id='name' type='text' name='name' autoComplete='off' value={name} onChange={e => setName(e.target.value)} autoFocus/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='description'>Descrição</label>
                        <textarea id='description' name='description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='image'>Descrição</label>
                        <input id='image' type='file' accept='image/png, image/jpg' name='image' onChange={onChangeImage}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='price'>Preço</label>
                        <input id='price' type='number' min="0" name='price' autoComplete='off' value={price} onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='unit'>Unidade</label>
                        <input id='unit' type='text' name='unit' autoComplete='off' value={unit} onChange={e => setUnit(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='discount'>Desconto</label>
                        <input id='discount' type='number' step=".1" name='discount' autoComplete='off' value={discount} onChange={e => setDiscount(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='stockAmount'>Quantidade em estoque</label>
                        <input id='stockAmount' type='number' min="0" name='stockAmount' autoComplete='off' value={stockAmount} onChange={e => setStockAmount(e.target.value)}/>
                    </div>
                    <div className='Form-item'>
                        <label htmlFor='categories'>Categorias</label><br/>
                        <div className='Form-item'>
                            <input id='categories' type='checkbox' name='categories' autoComplete='off' value='perishable' onChange={onChangeCategories}/> Perecíveis
                        </div>
                        <div className='Form-item'>
                            <input id='categories' type='checkbox' name='categories' autoComplete='off' value='nonPerishable' onChange={onChangeCategories}/> Não perecíveis
                        </div>
                        <div className='Form-item'>
                            <input id='categories' type='checkbox' name='categories' autoComplete='off' value='cleaning' onChange={onChangeCategories}/> Limpeza
                        </div>
                        <div className='Form-item'>
                            <input id='categories' type='checkbox' name='categories' autoComplete='off' value='hygiene' onChange={onChangeCategories}/> Higiene
                        </div>
                    </div>                    
                    <div className='Form-item'>
                        <label htmlFor='tags'>Tags</label>
                        <input id='tags' type='text' name='tags' autoComplete='off' value={tags} onChange={e => setTags(e.target.value)}/>
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Inserir' size='fit' action={updateProduct} />
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Buscar' size='fit' action={getProduct} />
                    </div>
                    <div className='Form-item Form-button'>
                        <Button text='Remover' size='fit' action={removeProduct} />
                    </div>
                </form>
            </div>
        </PopUp>
    );
}
 
export default ManageProduct;