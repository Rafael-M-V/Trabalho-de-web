import React from 'react';
import IconButton from '../generic/IconButton';
import Product, { mapProduct } from '../product/Product';

import './SearchBar.css';
import { ReactComponent as SearchIcon } from './icons/search.svg';

const SearchBar = ({ items, setSearchTerm, setResults, setCurrentPage, searchFor = 'Product' }) => {
    const normalize = str => str.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

    const maps = {
        Product: (p, e) => {
            // console.log(normalize(e.target.value) + ', ' + normalize(p.name).slice(0, e.target.value.length))
            // const match = normalize(p.name).slice(0, e.target.value.length).includes(normalize(e.target.value))
            
            // console.log(normalize(e.target.value) + ', ' + normalize(p.name))
            const match = normalize(p.name).includes(normalize(e.target.value))
            return match && mapProduct(p)
        }
    }

    const placeholders = {
        Product: 'Busque por produtos'
    }

    const search = (e) => {
        if (e.key !== 'Enter' || e.target.value === '') return

        setCurrentPage(0)
        setSearchTerm(normalize(e.target.value))
        setResults(items.map(p => maps[searchFor](p, e)))
    }

    return (
        <span className='SearchBar'>
            <span className='SearchBar-icon'>
                <IconButton><SearchIcon /></IconButton>
            </span>
            <input type='text' onKeyDown={search} placeholder={placeholders[searchFor]}/>
        </span>
    );
}
 
export default SearchBar;