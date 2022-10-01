import { EducationFormInputs, FormValues } from "../../types";
import AddButton from "../AddButton";
import DeleteButton from "../DeleteButton";
import Education from "./Education";

type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  educationValues: EducationFormInputs[];
};

export default function EducationForm({ setFormValues, educationValues }: Props) {
  return (
    <div id="Education">
      <h3>Education</h3>

      {educationValues?.map((entry, i) => {
        return (
          <div key={i}>
            <Education id={entry.id} educationValues={entry} setFormValues={setFormValues} />
            <DeleteButton id={entry.id} path="education" setFormValues={setFormValues} />
          </div>
        );
      })}
      <AddButton setFormValues={setFormValues} path="education" />
    </div>
  );
}
