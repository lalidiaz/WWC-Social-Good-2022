import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Footer from "./Footer";
import Input from "./Input";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";


const Details = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <header className="header">
        <img src="/logo.svg" alt="logo" className="logo" />
      </header>

      <div className={style.headings}>
        <h4 className={style.mainHeader}>Enter your trip details</h4>
        <h4 className={style.subHeader}>
          In order to slow climate change, your daily maximum amount of CO2
          target is :
        </h4>
        <h4 className={style.subHeader} style={{ color: "#4DC66F" }}>
          5 t CO2
        </h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
    <label>Car Size: </label>
    <select id="size">
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    </select>

    <label>Fuel Type:</label>
    <select id="fuel">
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="Hybrid">Hybrid</option>
    <option value="LPG">LPG</option>
    <option value="CNG">CNG</option>
    </select>



        <Input label="Distance in km:" type="number" id="distance" />
        <div className={style.subBtn}>
          <Button text="Submit" to="/history" />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Details;
