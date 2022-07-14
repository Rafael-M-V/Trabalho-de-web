import React, { useEffect, useState } from 'react';
import GridView from './components/generic/GridView';
import { mapProduct } from './components/product/Product';
import Section from './components/product/Section';
import sections from './ProductsData';
import api from './api';

export const OnSale = () => {
    const [productsOnSale, setProductsOnSale] = useState([])

    useEffect(() => async () => setProductsOnSale(await api.getProductsOnSale()), []);

    return (
        <GridView>
            {productsOnSale.map(mapProduct)}
        </GridView>
    );
}

export const Perishable = () => {
    const [sectionProducts, setSectionProducts] = useState([])

    useEffect(() => {
        return async () => {
            try {
                const products = await api.getProductsByCategories(['perishable'])
                setSectionProducts(await products)
                console.log(await products)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    // useEffect(() => {
    //     const sp = []

    //     sections.perishable.forEach(async (s, i) => {
    //         try {
    //             const products = await api.getProductsByTags(s.tags)
    //             sp.push(await products)
    //             // return products;
    //             // console.log(sp)
    //         } catch (err) {
    //             console.log(err)
    //             alert(err)
    //         }
    //     })

    //     setSectionProducts(sp)
    //     // console.log(sectionProducts[0])
    // });

    // useEffect(() => {
    //     if (sectionProducts[1]) {
    //         console.log(sectionProducts[1])
    //     }
    // })

    return (
        <GridView>
            {sectionProducts.map(mapProduct)}
        </GridView>
        // sections.perishable.map((s, i) => <Section key={i} name={s.title} products={sectionProducts} />)
    );
}

export const NonPerishable = () => {
    const [sectionProducts, setSectionProducts] = useState([])

    useEffect(() => {
        return async () => {
            try {
                const products = await api.getProductsByCategories(['nonPerishable'])
                setSectionProducts(await products)
                console.log(await products)
            } catch (err) {
                console.log(err)
            }
        }
    }, []);

    return (
        <GridView>
            {sectionProducts.map(mapProduct)}
        </GridView>
        // sections.perishable.map((s, i) => <Section key={i} name={s.title} products={sectionProducts} />)
    );
}

export const Cleaning = () => {
    const [sectionProducts, setSectionProducts] = useState([])

    useEffect(() => {
        return async () => {
            try {
                const products = await api.getProductsByCategories(['cleaning'])
                setSectionProducts(await products)
                console.log(await products)
            } catch (err) {
                console.log(err)
            }
        }
    }, []);

    return (
        <GridView>
            {sectionProducts.map(mapProduct)}
        </GridView>
        // sections.perishable.map((s, i) => <Section key={i} name={s.title} products={sectionProducts} />)
    );
}

export const Hygiene = () => {
    const [sectionProducts, setSectionProducts] = useState([])

    useEffect(() => {
        return async () => {
            try {
                const products = await api.getProductsByCategories(['hygiene'])
                setSectionProducts(await products)
                console.log(await products)
            } catch (err) {
                console.log(err)
            }
        }
    }, []);

    return (
        <GridView>
            {sectionProducts.map(mapProduct)}
        </GridView>
        // sections.perishable.map((s, i) => <Section key={i} name={s.title} products={sectionProducts} />)
    );
}