import React, { useState } from 'react';
import SectionTest from './SectionTest';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Page from './components/page/Page';

import Section from './components/product/Section';
import Product from './components/product/Product';
import productsData from './ProductsData';

const App = () => {
    const a = <div style={{}}><Section products={productsData} name='aaa'/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/></div>
    const b = <div style={{width: '800px', height: '900px'}}></div>
    const c = <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)'}}>{productsData.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}{productsData.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}</div>
    const d = <SectionTest />

    const pages = [
        {
            name: 'Ofertas da semana',
            content: a,
        },
        {
            name: 'Perecíveis',
            content: b
        },
        {
            name: 'Não perecíveis',
            content: c
        },
        {
            name: 'Limpeza',
            content: d
        },
        {
            name: 'Higiene',
            content: a
        },
        {
            name: 'Busca',
            content: a,
            invisible: true
        },
    ]

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <>
            <header className='App-header'><h1>Mercado feliz</h1></header>
            <div className='App-main-wrapper'>
                <Sidebar>
                    {pages.map((p, i) => !p.invisible && <SidebarItem key={i} name={p.name} active={currentPage === i} targetIndex={i} action={setCurrentPage} />)}
                </Sidebar>
                <Page>
                    {pages[currentPage].content}
                </Page>
            </div>
            <footer className='App-header'><h3>Footer</h3></footer>
        </>
    );
}

export default App;
