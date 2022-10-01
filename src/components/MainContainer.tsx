import { useState } from "react";
import { FormValues } from "../types";
import FormContainer from "./Form/FormContainer";
import Output from "./Output/Output";

export default function MainPart() {
  const [formValues, setFormValues] = useState<FormValues>({
    personal: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
    experience: [
      {
        id: 0,
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ],
    education: [
      {
        id: 0,
        uniName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ],
  });

  return (
    <div className="main-container">
      <FormContainer formValues={formValues} setFormValues={setFormValues} />
      <Output formValues={formValues} />
    </div>
  );
}
