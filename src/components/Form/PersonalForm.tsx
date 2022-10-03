import { FormValues, PersonalFormInputs, SetStateAction } from "../../types";
import Personal from "./Personal";

type Props = {
  setFormValues: SetStateAction<FormValues>;
  personalValues: PersonalFormInputs;
};

export default function PersonalForm({ setFormValues, personalValues }: Props) {
  const personalSet = (currValues: PersonalFormInputs) => {
    setFormValues((prevState: FormValues) => {
      return { ...prevState, personal: currValues };
    });
  };

  return (
    <div id="Personal">
      <h3>Personal Information</h3>
      <Personal personalValues={personalValues} personalSet={personalSet} />
    </div>
  );
}
