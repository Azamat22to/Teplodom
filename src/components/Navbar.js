import React, { useContext } from "react";
import logo from "./Images/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../index.css";
function Navbar() {
  const { cartItemCount } = useContext(CartContext);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-4 container">
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo d-flex align-items-center">
            <img
              src={logo}
              alt="Teplodom Logo"
              style={{
                width: "70px",
                height: "70px",
                marginRight: "15px",
                borderRadius: "8px",
              }}
            />
            <div>
              <h1
                style={{
                  color: "rgba(255, 165, 9, 1)",
                  fontSize: "1.5rem",
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                TEPLODOM
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.3",
                  color: "#333",
                }}
              >
                Интернет магазин <br /> строй материалов
              </p>
            </div>
          </div>
        </NavLink>
        <div
          className="input-container d-flex align-items-center position-relative"
          style={{ width: "400px" }}
        >
          <CiSearch
            style={{
              fontSize: "20px",
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
          <input
            style={{
              paddingLeft: "40px",
              height: "40px",
              width: "100%",
              backgroundColor: "#FFF",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            type="text"
            placeholder="Поиск..."
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>

        <div className="d-flex gap-5 align-items-center justify-content-center">
          <NavLink
            to="/LikedProducts"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaRegHeart style={{ fontSize: "30px", cursor: "pointer" }} />
          </NavLink>
          <NavLink
            to="/Cart"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ position: "relative" }}>
              <BiSolidShoppingBags
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              {cartItemCount > 0 && (
                <span
                  className="badge bg-danger"
                  style={{ position: "absolute", top: "-5px", right: "-10px" }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </NavLink>
          <button
            style={{
              backgroundColor: "#FFFF",
              borderRadius: "10px",
              border: "none",
              width: "170px",
              height: "56px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <CiUser style={{ width: "25px", height: "25px" }} />
            Профиль
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-5 mt-3">
        <NavLink to="/Tovar" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                width: "215px",
                height: "42px",
              }}
            >
              Товары по акции
            </button>
          )}
        </NavLink>
        <NavLink to="/Novinki" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "133px",
                fontWeight: "600",
                borderRadius: "10px",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Новинки
            </button>
          )}
        </NavLink>
        <NavLink to="/Pastivshik" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "186px",
                height: "42px",
                borderRadius: "10px",
                fontWeight: "600",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Поставщикам
            </button>
          )}
        </NavLink>
        <NavLink to="/Contakt" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                width: "144px",
                borderRadius: "10px",
                fontWeight: "600",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Контакты
            </button>
          )}
        </NavLink>
        <NavLink to="/Vozvrat" activeClassName="active">
          {({ isActive }) => (
            <button
              className={isActive ? "active" : ""}
              style={{
                borderRadius: "10px",
                fontWeight: "600",
                width: "203px",
                height: "42px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Возврат товара
            </button>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
