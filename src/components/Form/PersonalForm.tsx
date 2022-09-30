import { PersonalFormProps } from "../../types";
import Personal from "./Personal";

export default function PersonalForm({ setFormValues, formValues }: PersonalFormProps) {
  return (
    <div id="Personal">
      <h3>Personal Information</h3>
      <Personal formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
}
