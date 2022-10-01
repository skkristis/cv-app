import { PersonalFormProps } from "../../types";
import Personal from "./Personal";

export default function PersonalForm({ setFormValues, personalValues }: PersonalFormProps) {
  return (
    <div id="Personal">
      <h3>Personal Information</h3>
      <Personal personalValues={personalValues} setFormValues={setFormValues} />
    </div>
  );
}
