"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    //console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res?.ok) {
      alert(res?.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });
  return (
    <div className="container p-10">
      <h1 className="py-2 text-center font-semibold">LOGIN</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-y-2 max-w-80 mx-auto"
      >
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
        <button>Register</button>
      </form>
      <div className="mt-10">
        <p className="text-center">email: admin@mail.com</p>
        <p className="text-center">pass: 123</p>
      </div>
    </div>
  );
};

export default LoginPage;
