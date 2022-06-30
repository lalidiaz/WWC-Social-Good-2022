import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div>
      <h1>Sign in </h1> 
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
     <input type="email" id="email" {...register("email", { required: true })}/>
     <label>Password</label>
     <input type="password" id="password" {...register("password", { required: true })}/>
      
      {errors.email && <span>Please enter a valid email.</span>}
      {errors.password && <span>Please enter your password.</span>}
      <input type="submit" />
      </form>
    </div>
  );
}
