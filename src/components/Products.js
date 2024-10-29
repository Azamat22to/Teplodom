import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const { addToCart } = useContext(CartContext);
  const { addToFavourites } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  const truncateText = (text, wordCount) => {
    return (
      text.split(" ").slice(0, wordCount).join(" ") +
      (text.split(" ").length > wordCount ? "..." : "")
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} muvaffaqiyatli qo'shildi!`);
  };

  const handleAddToFavourites = (product) => {
    addToFavourites(product);
    toast.success(`${product.title} muvaffaqiyatli qo'shildi!`);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Новинки на сайте</h2>
        <a href="#link" style={allCategoriesStyle}>
          Смотреть все
        </a>
      </div>
      <div className="row">
        {products.slice(8, 16).map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top mt-2"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <NavLink to="/detail-page" style={{ textDecoration: "none" }}>
                  <p
                    className="card-title"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    {truncateText(product.title, 2)}
                  </p>
                  <p className="card-text">
                    {truncateText(product.description, 4)}
                  </p>
                </NavLink>
                <p className="card-text">
                  <strong>{product.price} сум</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  style={{ color: "#fff", fontSize: "18px" }}
                  onClick={() => handleAddToCart(product)}
                >
                  <MdAddShoppingCart
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "25px",
                    }}
                  />{" "}
                  В корзину
                </button>
                <button className="btn">
                  <FaRegHeart
                    onClick={() => handleAddToFavourites(product)}
                    style={{
                      backgroundColor: "#ffb12a",
                      color: "#fff",
                      width: "44px",
                      height: "42px",
                      padding: "6px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

const allCategoriesStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Products;
