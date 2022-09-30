import { useState } from "react";
import { FormValues } from "../types";
import FormContainer from "./Form/FormContainer";
import Output from "./Output/Output";

export default function MainPart() {
  const [formValues, setFormValues] = useState<FormValues>({} as FormValues);

  return (
    <div className="main-container">
      <FormContainer formValues={formValues} setFormValues={setFormValues} />
      <Output formValues={formValues} />
    </div>
  );
}
