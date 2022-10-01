import { FormValues } from "../types";

type Props = {
  path: string;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
};

export default function AddButton({ path, setFormValues }: Props) {
  function clickHandler() {
    setFormValues((prevState: FormValues) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const newId = newState[path].length;

      path === "experience"
        ? newState[path].push({
            id: newId,
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          })
        : newState[path].push({
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
  }

  return (
    <button className="btn add-btn" onClick={clickHandler}>
      Add
    </button>
  );
}
