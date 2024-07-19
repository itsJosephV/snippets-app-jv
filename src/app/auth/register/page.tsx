"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });
  return (
    <div className="container p-10">
      <h1 className="py-2 text-center font-semibold">REGISTER</h1>
      <form
        className="flex flex-col gap-y-2 max-w-80 mx-auto"
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...register("username", {
              required: "This field is required",
            })}
            type="text"
            id="username"
            placeholder="username"
          />
          {errors.username && (
            <span className="mt-1 text-sm text-red-500">
              {errors.username.message as string}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input
            {...register("email", {
              required: "This field is required",
            })}
            type="email"
            placeholder="email"
            id="email"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-500">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>

          <input
            {...register("password", {
              required: "This field is required",
            })}
            type="password"
            placeholder="password"
            id="password"
          />
          {errors.password && (
            <span className="mt-1 text-sm text-red-500">
              {errors.password.message as string}
            </span>
          )}
        </div>
        {/* <div>
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input
            {...register("confirmPassword", {
              required: "This field is required",
            })}
            type="password"
            placeholder="confirm password"
            id="confirm-password"
          />
          {errors.username && (
            <span className="mt-1 text-sm text-red-500">
              {errors.username.message as string}
            </span>
          )}
        </div> */}
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
