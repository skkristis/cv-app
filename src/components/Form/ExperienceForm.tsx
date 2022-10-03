import { ExperienceFormInputs, FormValues, IdentifiableEntity, SetStateAction } from "../../types";
import ButtonTemplate from "../ButtonTemplate";
import Experience from "./Experience";

type Props = {
  setFormValues: SetStateAction<FormValues>;
  experienceValues: ExperienceFormInputs[];
};

export default function ExperienceForm({ setFormValues, experienceValues }: Props) {
  const addSectionClick = () => {
    setFormValues((prevState: FormValues) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const newId = newState.experience.length;

      newState.experience.push({
        id: newId,
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      });

      return { ...newState };
    });
  };

  const deleteSectionClick = (idGiven: number) => {
    setFormValues((oldState) => {
      const newState = JSON.parse(JSON.stringify(oldState));
      const currObjIndex = newState.experience.findIndex((x: IdentifiableEntity) => x.id === idGiven);

      newState.experience.splice(currObjIndex, 1);
      return { ...newState };
    });
  };

  const experienceSet = (id: number, currValues: ExperienceFormInputs) => {
    setFormValues((prevState: FormValues) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const currObjIndex = newState.experience.findIndex((x: ExperienceFormInputs) => x.id === id);
      newState.experience.splice(currObjIndex, 1, currValues);
      newState.experience[currObjIndex].id = id;
      return { ...newState };
    });
  };

  return (
    <div id="Experience">
      <h3>Experience</h3>

      {experienceValues?.map((entry, i) => {
        return (
          <div key={i}>
            <Experience id={entry.id} experienceValues={entry} experienceSet={experienceSet} />
            <ButtonTemplate onButtonClick={() => deleteSectionClick(entry.id)} buttonText="Delete" />
          </div>
        );
      })}
      <ButtonTemplate onButtonClick={addSectionClick} />
    </div>
  );
}
