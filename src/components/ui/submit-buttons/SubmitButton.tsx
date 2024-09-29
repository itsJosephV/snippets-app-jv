"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "../extra/Spinner";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="border p-1 bg-blue-300 rounded-md px-2">
      <div className="flex items-center gap-1.5">
        {pending ? (
          <>
            <span>
              <Spinner />
            </span>
            Creating
          </>
        ) : (
          "Create"
        )}
      </div>
    </button>
  );
};

export default SubmitButton;
