import React from 'react'
import Header from '../../components/Header'
import SearchHeader from '../../components/SearchHeader'
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import Head from "next/head";
import { selectProducts } from '../../slices/productsSlice';
import SearchResult from '../../components/SearchResult';
import { selectTerm } from '../../slices/termSlice';
import {useEffect} from "react";

/**
 * @Author - Vikram Nayyar
 * 
 * Live filtering of results, using a useEffect, custom function and Redux.
 * 
 * @returns - Filtered results on the search page, displayed as components.
 */

function Result() {
    const selectTheTerm = useSelector(selectTerm);
    const products = useSelector(selectProducts);
    const theRouter = useRouter();

    const filterProducts = (theProducts) => {
        const filteredProducts = [];

        theProducts?.map(p => (
            p.title.includes(selectTheTerm) ? filteredProducts.push(p) : console.log("Product Doesn't Match Search Terms")
            )
        )

        return filteredProducts;
        
    }
    
    useEffect(() => {
        console.log("NUMBER OF PRODUCTS: " + products?.length);
        console.log("NUMBER OF FILTER PRODUCTS: " + filterProducts(products)?.length) 

        
    }, [filterProducts(products)])

    return (
        <div>
            <Head>
                <title>Results: {selectTheTerm}</title>
            </Head>

            <Header/>
            <SearchHeader/>

            {filterProducts(products)?.map(p => (
                <SearchResult
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    category={p.category}
                    description={p.description}
                    image={p.image}

                />
            ))}

            
        </div>
    )
}

export default Result
