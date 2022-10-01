import { useForm } from "react-hook-form";
import { EducationFormInputs, EducationFormProps, FormValues } from "../../types";

export default function Education({ setFormValues, educationValues, id }: EducationFormProps) {
  const { register, getValues } = useForm<EducationFormInputs>();
  const inputsDefinitions = [
    {
      placeholder: "University name",
      registerName: "uniName",
    },
    {
      placeholder: "City",
      registerName: "city",
    },
    {
      placeholder: "Degree",
      registerName: "degree",
    },
    {
      placeholder: "Subject",
      registerName: "subject",
    },
    {
      placeholder: "From",
      registerName: "from",
    },
    {
      placeholder: "To",
      registerName: "to",
    },
  ];

  return (
    <form className="form">
      {inputsDefinitions.map((input) => {
        const regName = input.registerName;

        return (
          <input
            key={regName}
            value={educationValues[regName]}
            placeholder={input.placeholder}
            {...register(regName, {
              onChange: () => {
                setFormValues((prevState: FormValues) => {
                  const newState = JSON.parse(JSON.stringify(prevState));
                  const currObjIndex = newState.education.findIndex((x: EducationFormInputs) => x.id === id);
                  newState.education.splice(currObjIndex, 1, getValues());
                  newState.education[currObjIndex].id = id;
                  return { ...newState };
                });
              },
            })}
          />
        );
      })}
    </form>
  );
}
