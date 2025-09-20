import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { itemsArray } from "./data/itemSection";
import Index from './Index.jsx'
import Product from './components/product.jsx'

export default function Home() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                {itemsArray &&
                    itemsArray.map((item, index) => (
                        <Route
                            key={index}
                            path={`/products/${item.codigo}`}
                            element={<Product id={index} uniqueKey={index} />}
                        />
                    ))}
            </Routes>
        </Router>
    );
}
