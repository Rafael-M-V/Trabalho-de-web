import React, { useState } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Page from './components/page/Page';

import SearchResults from './components/page/SearchResults';
import SearchBar from './components/searchbar/SearchBar';

import Section from './components/product/Section';
import Product from './components/product/Product';
import productsData from './ProductsData';
import SectionTest from './SectionTest';

import './App.css';

const App = () => {
    const a = <div style={{}}><Section products={productsData} name='aaa'/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/><Section products={productsData}/></div>
    const b = <div style={{width: '800px', height: '900px'}}></div>
    const c = <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)'}}>{productsData.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}{productsData.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}</div>
    const d = <SectionTest />

    const [searchResults, setSearchResults] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const searchResultsPage = <SearchResults searchTerm={searchTerm}>{searchResults}</SearchResults>

    const pages = [
        {
            name: 'Resultados da busca',
            content: searchResultsPage,
            invisible: true
        },
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
        }
    ]

    pages[0].invisible = (searchResults === null)

    const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
            <Header>
                <h1>Mercado Feliz</h1>
                <SearchBar items={productsData} setSearchTerm={setSearchTerm} setResults={setSearchResults} setCurrentPage={setCurrentPage}/>
            </Header>
            <div className='App-main-wrapper'>
                <Sidebar>
                    {/* {searchResults !== null && <span onClick={() => { setSearchResults(null); setCurrentPage(1) }}>Limpar busca</span>} */}
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
