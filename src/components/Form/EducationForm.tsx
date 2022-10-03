import { EducationFormInputs, FormValues, IdentifiableEntity, SetStateAction } from "../../types";
import ButtonTemplate from "../ButtonTemplate";
import Education from "./Education";

type Props = {
  setFormValues: SetStateAction<FormValues>;
  educationValues: EducationFormInputs[];
};

export default function EducationForm({ setFormValues, educationValues }: Props) {
  const clickHandler = () => {
    setFormValues((prevState: FormValues) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const newId = newState.education.length;

      newState.education.push({
        id: newId,
        uniName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      });

      return { ...newState };
    });
  };
  const deleteSectionClick = (idGiven: number) => {
    setFormValues((oldState) => {
      const newState = JSON.parse(JSON.stringify(oldState));
      const currObjIndex = newState.education.findIndex((x: IdentifiableEntity) => x.id === idGiven);

      newState.education.splice(currObjIndex, 1);
      return { ...newState };
    });
  };

  const educationSet = (id: number, currValues: EducationFormInputs) => {
    setFormValues((prevState: FormValues) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const currObjIndex = newState.education.findIndex((x: EducationFormInputs) => x.id === id);
      newState.education.splice(currObjIndex, 1, currValues);
      newState.education[currObjIndex].id = id;
      return { ...newState };
    });
  };

  return (
    <div id="Education">
      <h3>Education</h3>

      {educationValues?.map((entry, i) => {
        return (
          <div key={i}>
            <Education id={entry.id} educationValues={entry} educationSet={educationSet} />
            <ButtonTemplate onButtonClick={() => deleteSectionClick(entry.id)} buttonText="Delete" />
          </div>
        );
      })}
      <ButtonTemplate onButtonClick={clickHandler} />
    </div>
  );
}
