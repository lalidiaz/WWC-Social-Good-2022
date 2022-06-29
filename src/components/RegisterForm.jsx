import React from "react";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "./Button";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";

const RegisterForm = () => {
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name:" type="string" id="name" />
        <Input label="Email:" type="email" id="email" />
        <Input label="Password:" type="string" id="password" />
        <Input label="Repeat Password:" type="string" id="repeatassword" />
        <div className={style.subBtn}>
          <Button text="Register" />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default RegisterForm;
