import { useForm } from "react-hook-form";
import { ExperienceFormInputs, ExperienceFormProps, FormValues } from "../../types";

export default function Experience({ setFormValues, experienceValues, id }: ExperienceFormProps) {
  const { register, getValues } = useForm<ExperienceFormInputs>();
  const inputsDefinitions = [
    {
      placeholder: "Position",
      registerName: "position",
    },
    {
      placeholder: "Company",
      registerName: "company",
    },
    {
      placeholder: "City",
      registerName: "city",
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
            value={experienceValues[regName]}
            placeholder={input.placeholder}
            {...register(regName, {
              onChange: () => {
                setFormValues((prevState: FormValues) => {
                  const newState = JSON.parse(JSON.stringify(prevState));
                  const currObjIndex = newState.experience.findIndex((x: ExperienceFormInputs) => x.id === id);
                  newState.experience.splice(currObjIndex, 1, getValues());
                  newState.experience[currObjIndex].id = id;
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
