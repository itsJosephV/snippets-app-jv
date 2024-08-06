"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "../extra/Spinner";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return <button>{pending ? <Spinner /> : "Create"}</button>;
};

export default SubmitButton;
