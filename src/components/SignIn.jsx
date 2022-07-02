import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Footer from "./Footer";
import Input from "./Input";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";
import Wrapper from "./Wrapper";

const SignIn = () => {
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
        <Input label="Email:" type="string" id="email" />
        <Input label="Password:" type="password" id="password" />
        <div className={style.subBtn}>
          <Button text="Sign In" to="/trip-details" />
        </div>
      </form>
      </Wrapper>
    </>
  );
};

export default SignIn;
