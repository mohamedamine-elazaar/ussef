import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem("shopping_cart");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("shopping_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1, selectedVariant = "") => {
        setCart((previousCart) => {
            const existingIndex = previousCart.findIndex(
                (item) => item.id === product.id && item.variant === selectedVariant
            );
            if (existingIndex !== -1) {
                return previousCart.map((item, index) =>
                    index === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...previousCart, {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image || product.images?.[0],
                quantity,
                variant: selectedVariant,
            }];
        });
    };

    const updateQuantity = (id, variant, amount) => {
        setCart((previousCart) => previousCart.map((item) => {
            if (item.id !== id || item.variant !== variant) return item;
            const quantity = item.quantity + amount;
            return quantity > 0 ? { ...item, quantity } : null;
        }).filter(Boolean));
    };

    const removeFromCart = (id, variant) => {
        setCart((previousCart) => previousCart.filter((item) => item.id !== id || item.variant !== variant));
    };

    return <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart: () => setCart([]) }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
