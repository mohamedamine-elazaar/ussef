import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(() => {
        const localData = localStorage.getItem("store_products");
        return localData ? JSON.parse(localData) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem("store_products", JSON.stringify(products));
    }, [products]);

    const addProduct = (newProduct) => setProducts((previous) => [{ ...newProduct, id: Date.now().toString() }, ...previous]);
    const deleteProduct = (id) => setProducts((previous) => previous.filter((product) => product.id !== id));

    return <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>{children}</ProductContext.Provider>;
}

export const useProducts = () => useContext(ProductContext);
