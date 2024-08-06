import { createSection } from "@/lib/actions";
import React, { FormEvent } from "react";
import SubmitButton from "../ui/submit-buttons/SubmitButton";

export function NewSectionForm() {
  return (
    <form action={createSection}>
      <input name="section-name" type="text" placeholder="Section name" />
      <SubmitButton />
    </form>
  );
}

export default NewSectionForm;
