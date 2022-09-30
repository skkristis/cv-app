import { FormValues } from "../../types";
import Buttons from "../Buttons";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
};

export default function Form({ setFormValues, formValues }: Props) {
  const { personal, experience, education } = formValues;
  return (
    <div className="form-container">
      <PersonalForm formValues={personal} setFormValues={setFormValues} />
      <ExperienceForm formValues={experience} setFormValues={setFormValues} />
      <EducationForm formValues={education} setFormValues={setFormValues} />
      {/* <Buttons /> */}
    </div>
  );
}
