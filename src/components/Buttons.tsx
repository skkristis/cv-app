import { FormValues } from "../types";

type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
};

export default function Buttons({ setFormValues, formValues }: Props) {
  function reset() {
    setFormValues(() => ({
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
    }));
  }
  function loadExample() {
    setFormValues(() => ({
      personal: {
        firstName: "John",
        lastName: "Doe",
        title: "Senior Web Developer",
        address: "Example Street 10",
        phoneNumber: "123456789",
        email: "john.doe@gmail.com",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis atque quaerat sit cum, ipsum odit quae, perspiciatis modi beatae, nemo quibusdam vero molestiae aliquam quo ex laudantium enim iste autem magni inventore. Harum dolor ea placeat aspernatur ex iusto sequi beatae explicabo, eum amet cum voluptatum itaque dolores nostrum laborum?",
      },
      experience: [
        {
          id: 0,
          position: "Senior Web Developer",
          company: "Facebook Inc.",
          city: "Menlo Park",
          from: "2015",
          to: "Present",
        },
        {
          id: 1,
          position: "Junior Web Developer",
          company: "Tesla Inc.",
          city: "Palo Alto",
          from: "2012",
          to: "2015",
        },
        {
          id: 2,
          position: "UI / UX Designer",
          company: "Google LLC",
          city: "Mountain View",
          from: "2010",
          to: "2012",
        },
      ],
      education: [
        {
          id: 0,
          uniName: "University of Technology",
          city: "Oklahoma",
          degree: "Master",
          subject: "Science",
          from: "2008",
          to: "2010",
        },
        {
          id: 1,
          uniName: "University of Design Art",
          city: "New York",
          degree: "Bachelor",
          subject: "Visual Art",
          from: "2005",
          to: "2008",
        },
      ],
    }));
  }

  return (
    <>
      <div className="Submit">
        <button onClick={loadExample} className="btn">
          Load Example
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </>
  );
}
