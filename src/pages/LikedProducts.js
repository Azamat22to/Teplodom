import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
function LikedProducts() {
  const { likedItems, deleteLiked } = useContext(CartContext);

  const truncateText = (text, wordCount) => {
    return (
      text.split(" ").slice(0, wordCount).join(" ") +
      (text.split(" ").length > wordCount ? "" : "")
    );
  };
  return (
    <div className="container mt-4">
      <h2>Избранные товары</h2>
      <div className="row">
        {likedItems.map((i, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={i.thumbnail}
                alt={i.title}
                className="card-img-top mt-2"
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <NavLink to="/detail-page" style={{ textDecoration: "none" }}>
                  <p
                    className="card-title"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    {truncateText(i.title, 2)}
                  </p>
                  <p className="card-text">{truncateText(i.description, 4)}</p>
                </NavLink>
                <p className="card-text">
                  <strong>{i.price} сум</strong>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                  onClick={() => deleteLiked(i)}
                >
                  <BiSolidShoppingBags
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "25px",
                    }}
                  />{" "}
                  В корзину
                </button>
                <button className="btn">
                  <MdDeleteOutline
                    onClick={() => deleteLiked(i)}
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
    </div>
  );
}

export default LikedProducts;
