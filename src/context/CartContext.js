import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const notifyDelete = () => toast.error("Mahsulot savatchadan o'chirildi!");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [likedItems, setLikedItems] = useState([]);
  const [likedItemCount, setLikedItemCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (!exists) {
        // notifyAdd();
        setCartItemCount((count) => count + 1);
        return [...prevItems, product];
      }

      toast.info("Mahsulot allaqachon savatchada");
      return prevItems;
    });
  };

  const addToFavourites = (product) => {
    setLikedItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (!exists) {
        setLikedItemCount((count) => count + 1);
        return [...prevItems, product];
      }
      toast.info("Mahsulot allaqachon savatda!");
      return prevItems;
    });
  };

  const deleteCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== product.id);
      if (updatedItems.length !== prevItems.length) {
        notifyDelete();
        setCartItemCount((count) => count - 1);
      }
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addToFavourites,
        deleteCart,
        cartItemCount,
        likedItemCount,
        likedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
