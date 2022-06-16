import React, { useRef } from 'react';
import Product from './Product';

import './Section.css'
import leftArrowIcon from './icons/left-arrow.png'
import rightArrowIcon from './icons/right-arrow.png'

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
                <span className='Section-left-arrow' onClick={slideLeft}><img src={leftArrowIcon} alt='Mover para a esquerda'/></span>
                <span className='Section-content' ref={ref}>
                    {products.map(p => <Product key={p.id} name={p.name} image={p.image} price={p.price} discount={p.discount}/>)}
                </span>
                <span className='Section-right-arrow' onClick={slideRight}><img src={rightArrowIcon} alt='Mover para a direita'/></span>
            </div>
        </section>
    );
}
 
export default Section;