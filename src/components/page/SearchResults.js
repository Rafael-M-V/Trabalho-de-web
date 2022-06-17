import React from 'react'
import GridView from './GridView'

import './SearchResults.css'
import notFoundIcon from './icons/not-found.png'

const SearchResults = (props) => {
    const searchTerm = props.searchTerm

    const nResults = props.children !== null ? props.children.filter(Boolean).length : 0

    return (
        <div className='SearchResults'>
            {nResults > 0
            ? <><h2>Mostrando {nResults} {`resultado${nResults > 1 ? 's' : ''}`} para "{searchTerm}"</h2> <GridView>{props.children}</GridView></>
            : <><h2>:( Não foi possível encontrar nenhum resultado para "{searchTerm}"</h2> <img src={notFoundIcon} alt='Nenhum resultado encontrado'/> </>}
        </div>
    );
}

export default SearchResults;

