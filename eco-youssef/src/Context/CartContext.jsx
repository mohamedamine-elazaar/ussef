import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem("shopping_cart");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("shopping_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1, selectedVariant = "") => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex(
                (item) => item.id === product.id && item.variant === selectedVariant
            );

            if (existingIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex].quantity += quantity;
                return updatedCart;
            }

            return [
                ...prevCart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image || (product.images && product.images[0]),
                    quantity,
                    variant: selectedVariant,
                },
            ];
        });
    };

    const updateQuantity = (id, variant, amount) => {
        setCart((prevCart) =>
            prevCart
                .map((item) => {
                    if (item.id === id && item.variant === variant) {
                        const newQty = item.quantity + amount;
                        return newQty > 0 ? { ...item, quantity: newQty } : null;
                    }
                    return item;
                })
                .filter(Boolean)
        );
    };

    const removeFromCart = (id, variant) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.variant === variant))
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);