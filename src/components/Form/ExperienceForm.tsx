import { ExperienceFormInputs, FormValues } from "../../types";
import AddButton from "../AddButton";
import DeleteButton from "../DeleteButton";
import Experience from "./Experience";

type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  experienceValues: ExperienceFormInputs[];
};

export default function ExperienceForm({ setFormValues, experienceValues }: Props) {
  return (
    <div id="Experience">
      <h3>Experience</h3>

      {experienceValues?.map((entry, i) => {
        return (
          <div key={i}>
            <Experience id={entry.id} experienceValues={entry} setFormValues={setFormValues} />
            <DeleteButton id={entry.id} path="experience" setFormValues={setFormValues} />
          </div>
        );
      })}
      <AddButton setFormValues={setFormValues} path="experience" />
    </div>
  );
}
