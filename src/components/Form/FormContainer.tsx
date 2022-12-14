import { FormValues } from "../../types";
import FormManipulationButtons from "../FormManipulationButtons";
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
      <PersonalForm personalValues={personal} setFormValues={setFormValues} />
      <ExperienceForm experienceValues={experience} setFormValues={setFormValues} />
      <EducationForm educationValues={education} setFormValues={setFormValues} />
      <FormManipulationButtons setFormValues={setFormValues} formValues={formValues} />
    </div>
  );
}
