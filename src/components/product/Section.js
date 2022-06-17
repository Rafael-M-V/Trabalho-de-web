import React, { useRef } from 'react';
import Product from './Product';
import IconButton from '../generic/IconButton';

import './Section.css';
import { ReactComponent as LeftArrowIcon } from './icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from './icons/right-arrow.svg';

const Section = ({ name, products }) => {
    let page = 0

    const ref = useRef(null)

    const slideLeft = () => {
        if (page > 0) {
            ref.current.scrollBy({
                left: -ref.current.offsetWidth,
                behavior: 'smooth'
            })
            page--;
        }
    }
    
    const slideRight = () => {
        if (page < products.length) {
            ref.current.scrollBy({
                left: ref.current.offsetWidth,
                behavior: 'smooth'
            })
            page++;
        }
    }

    return (
        <section>
            <h1 className='Section-header'>{name}</h1>
            <div className='Section'>
                <span className='Section-left-arrow'>
                    <IconButton action={slideLeft}><LeftArrowIcon /></IconButton>
                </span>
                <span className='Section-content' ref={ref}>
                    {products.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}
                </span>
                <span className='Section-right-arrow'>
                    <IconButton action={slideRight}><RightArrowIcon /></IconButton>
                </span>
            </div>
        </section>
    );
}
 
export default Section;