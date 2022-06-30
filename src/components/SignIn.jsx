import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Wrapper from "./Wrapper";

export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <Wrapper>
    <div>
      
      <section className = "signin--form">
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
     <input type="email" id="email" {...register("email", { required: true })}/>
     <label>Password</label>
     <input type="password" id="password" {...register("password", { required: true })}/>
      
      {errors.email && <span>Please enter a valid email.</span>}
      {errors.password && <span>Please enter your password.</span>}
      <input type="submit" className="btn" value="Sign in"/>
      </form>
      </section>
    </div>
    </Wrapper>
  );
}
