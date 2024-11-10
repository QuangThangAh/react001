import React, { useEffect } from "react";
import productApi from "./api/productApi";
import { Routes, Route } from "react-router-dom";
import NotFound from "../src/components/NotFound";

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const productlist = await productApi.getAll();
            console.log(productlist);
        };
        fetchProducts();
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route component={NotFound} />
            </Routes>
        </div>
    );
}

export default App;
