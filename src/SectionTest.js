import React from 'react';
import productsData from './ProductsData'
import Section from './components/product/Section';

import './SectionTest.css';

const SectionTest = () => {
    return (
        <div className="SectionTest">
            <div className='SectionTest-sidebar'>
                <ul>
                    <li>Perecíveis</li>
                    <li>Não perecíveis</li>
                    <li>Limpeza</li>
                    <li>Higiene</li>
                </ul>
            </div>
            <div className='SectionTest-container'>
                <Section name='Em oferta' products={productsData} />
                <Section name='Mais buscados' products={productsData} />
                <Section name='Marcas famosas' products={productsData} />
                <Section name='Não pode faltar na sua dispensa' products={productsData} />
            </div>
        </div>
    );
}

export default SectionTest;