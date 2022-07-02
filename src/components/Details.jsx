import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Footer from "./Footer";
import Input from "./Input";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";


const Details = () => {
  let output;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
    }
  };
  


  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let vehicle = data.size + data.fuel + 'Car'
    //let distance = data.distance.toString()
    console.log(vehicle)

    fetch(`https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${data.distance}&vehicle=${vehicle}`, options)
    .then(response => response.json())
    .then(response => {console.log(response); output = response.carbonEquivalent; return console.log(output);})
    .catch(err => console.error(err));
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
    <select id="size" {...register("size")}>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    </select>

    <label>Fuel Type:</label>
    <select id="fuel" {...register("fuel")}>
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="Hybrid">Hybrid</option>
    <option value="LPG">LPG</option>
    <option value="CNG">CNG</option>
    </select>


        <label>Distance in km:</label>
        <input type = "number" id="distance" {...register("distance")} />
  
        <div className={style.subBtn}>
        <button type="submit">Submit</button>
        </div>
      </form>
{/*this code isn't working*/}
      {output && <h2>Your carbon equivalent for this trip is {output} t CO2.</h2>}
      <Footer />
    </>
  );
};

export default Details;
