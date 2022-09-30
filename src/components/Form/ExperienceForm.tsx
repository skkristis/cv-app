import { ExperienceFormProps } from "../../types";
import Experience from "./Experience";

export default function ExperienceForm({ setFormValues, formValues }: ExperienceFormProps) {
  return (
    <div id="Experience">
      <h3>Experience</h3>
      <Experience formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
}
