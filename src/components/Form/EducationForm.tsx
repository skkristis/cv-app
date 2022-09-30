import { EducationFormProps } from "../../types";
import Education from "./Education";

export default function EducationForm({ setFormValues, formValues }: EducationFormProps) {
  return (
    <div id="Education">
      <h3>Education</h3>
      <Education formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
}
