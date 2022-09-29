import { useState } from "react";
import Form from "./Form";
import Output from "./Output";

interface InfoI {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    address: string;
    phoneNumber: string;
    email: string;
    description: string;
  };
  experience: {};
  education: {};
}

export default function MainPart() {
  const [info, setInfo] = useState<InfoI>({
    personal: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
    experience: {},
    education: {},
  });

  return (
    <div className="main-display">
      <Form setFunc={setInfo} />
      <Output info={info} />
    </div>
  );
}
