import { useState } from "react";
import { submitForm } from "./index";

export function useForm() {
  const [formId, setFormId] = useState(0);

  async function submit(formData: FormData) {
    try {
      const id = await submitForm(formData);
      setFormId(id);
    } catch (error) {
      console.error(error);
    }
  }

  return { formId, submit };
}
