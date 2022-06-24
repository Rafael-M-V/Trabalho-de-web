import React, { useState } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Page from './components/page/Page';
import { OnSale, Perishable, NonPerishable, Cleaning, Hygiene } from './Pages';

import SearchResults from './components/page/SearchResults';
import SearchBar from './components/searchbar/SearchBar';
import productsData from './ProductsData';

import './App.css';

const App = () => {
    const [searchResults, setSearchResults] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const searchResultsPage = <SearchResults searchTerm={searchTerm}>{searchResults}</SearchResults>

    // useEffect(() => {
    //     localStorage.setItem('cart', '[]')
    // }, [])

    const pages = [
        {
            name: 'Resultados da busca',
            content: searchResultsPage,
            invisible: true
        },
        {
            name: 'Ofertas da semana',
            content: <OnSale />,
        },
        {
            name: 'Perecíveis',
            content: <Perishable />
        },
        {
            name: 'Não perecíveis',
            content: <NonPerishable />
        },
        {
            name: 'Limpeza',
            content: <Cleaning />
        },
        {
            name: 'Higiene',
            content: <Hygiene />
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
            {/* <footer className='App-header'><h3>Footer</h3></footer> */}
        </>
    );
}

export default App;
