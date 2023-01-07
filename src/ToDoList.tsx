import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

function ToDoList() {
  // interface를 사용하여 type 지정
  // defaultValues를 이용하여 초기값을 설정 가능
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "Write here." })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "Write here." })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("username", { required: "Write here.", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", { required: "Write here.", minLength: 5 })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
