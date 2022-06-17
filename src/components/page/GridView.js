import React from 'react';

import './GridView.css'

const GridContainer = (props) => {
    return <section className='GridContainer'>{props.children}</section>;
}
 
export default GridContainer;