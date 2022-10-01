import { EducationFormInputs, ExperienceFormInputs, FormValues } from "../types";

type Props = {
  path: string;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  id: number;
};

export default function DeleteButton({ id, path, setFormValues }: Props) {
  function clickHandler() {
    setFormValues((oldState) => {
      const newState = JSON.parse(JSON.stringify(oldState));
      const currObjIndex = newState[path].findIndex((x: ExperienceFormInputs | EducationFormInputs) => x.id === id);
      console.log(newState[path]);
      console.log(id);
      console.log(currObjIndex);
      newState[path].splice(currObjIndex, 1);
      console.log({ ...newState });
      return { ...newState };
    });
  }

  return (
    <button className="btn" onClick={clickHandler}>
      Delete
    </button>
  );
}
