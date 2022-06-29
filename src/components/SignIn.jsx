import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Wrapper from "./Wrapper";

// export default function SignIn() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <Wrapper>
//     <div>

//       <section className = "signin--form">
//       <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Email</label>
//      <input type="email" id="email" {...register("email", { required: true })}/>
//      <label>Password</label>
//      <input type="password" id="password" {...register("password", { required: true })}/>

//       {errors.email && <span>Please enter a valid email.</span>}
//       {errors.password && <span>Please enter your password.</span>}
//       <input type="submit" className="btn" value="Sign in"/>
//       </form>
//       </section>
//     </div>
//     </Wrapper>
//   );
// }

import { useForm } from "react-hook-form";
import Button from "./Button";
import Footer from "./Footer";
import Input from "./Input";
import "../styles/Form.scss";
import style from "../styles/Details.module.scss";

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
      <header className="header">
        <img src="/logo.svg" alt="logo" className="logo" />
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email:" type="email" id="email" />
        <Input label="Password:" type="string" id="password" />
        <div className={style.subBtn}>
          <Button text="Sign In" />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default SignIn;
