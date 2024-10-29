import React from "react";
import Phone from "../components/Images/telephone.png";
import Location from "../components/Images/location.png";
import Email from "../components/Images/email.png";
import DailyRoutine from "../components/Images/dailyRoutine.png";
import Time from "../components/Images/time.png";
function Contakt() {
  return (
    <div className="container">
      <h2 className="mt-5">Контакты</h2>
      <div className="d-flex align-items-center justify-content-around text-center mt-5">
        <div>
          <img
            src={Phone}
            alt="Phone"
            style={{ fontSize: "60px", marginBottom: "10px" }}
          />
          <h5 style={{ fontSize: "24px" }}>Телефон</h5>
          <p>+998 (97) 761 62 51</p>
        </div>
        <div>
          <img
            src={Location}
            alt="Location"
            style={{ fontSize: "60px", marginBottom: "10px" }}
          />
          <h5 style={{ fontSize: "24px" }}>Локация</h5>
          <p>
            ул. Уста Ширин, рынок Джамий, <br /> дом 134, магазин 131
          </p>
        </div>
        <div>
          <img
            src={Email}
            alt="Email"
            style={{ fontSize: "60px", marginBottom: "10px", color: "#F79915" }}
          />
          <h5 style={{ fontSize: "24px" }}>Е-майл</h5>
          <p>Sardorraimov@gmail.com</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around text-center mt-5">
        <div>
          <img
            src={Phone}
            alt="Phone"
            style={{ fontSize: "60px", marginBottom: "10px" }}
          />
          <h5 style={{ fontSize: "24px" }}>Телефон</h5>
          <p>+998 (93) 556 91 31</p>
        </div>
        <div>
          <img
            src={DailyRoutine}
            alt="dailyRoutine"
            style={{ fontSize: "60px", marginBottom: "10px" }}
          />
          <h5 style={{ fontSize: "24px" }}>Расписание</h5>
          <p>
            Мы в вашем распоряжении <br />7 дней в неделю!
          </p>
        </div>
        <div>
          <img
            src={Time}
            alt="time"
            style={{ fontSize: "60px", marginBottom: "10px" }}
          />
          <h5 style={{ fontSize: "24px" }}>Время</h5>
          <p>Каждый день с 8:00 – 18:00</p>
        </div>
      </div>
    </div>
  );
}

export default Contakt;
