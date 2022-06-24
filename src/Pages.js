import React from 'react';
import GridView from './components/generic/GridView';
import { mapProduct } from './components/product/Product';
import Section from './components/product/Section';
import { productsOnSale, sectionsCleaning, sectionsHygiene } from './ProductsData';
import { sectionsPerishable } from './ProductsData';
import { sectionsNonPerishable } from './ProductsData';

export const OnSale = () => {
    return (
        <GridView>
            {productsOnSale.map(mapProduct)}
        </GridView>
    );
}

export const Perishable = () => {
    return sectionsPerishable.map(s => <Section name={s.title} products={s.content} />);
}

export const NonPerishable = () => {
    return sectionsNonPerishable.map(s => <Section name={s.title} products={s.content} />);
}

export const Cleaning = () => {
    return sectionsCleaning.map(s => <Section name={s.title} products={s.content} />);
}

export const Hygiene = () => {
    return sectionsHygiene.map(s => <Section name={s.title} products={s.content} />);
}