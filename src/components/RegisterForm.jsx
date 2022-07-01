import React from "react";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "./Button";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";
import Wrapper from "./Wrapper";

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
   <Wrapper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name:" type="string" id="name" />
        <Input label="Email:" type="string" id="email" />

        <Input label="Password:" type="string" id="password" />
        <Input label="Repeat Password:" type="string" id="repeatassword" />
        <div className={style.subBtn}>
          <Button text="Register" to="/trip-details" />
        </div>
      </form>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
