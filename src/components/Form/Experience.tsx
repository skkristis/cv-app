import { useForm } from "react-hook-form";
import { ExperienceFormInputs, ExperienceFormProps } from "../../types";

export default function Experience({ experienceSet, experienceValues, id }: ExperienceFormProps) {
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
            value={experienceValues[regName as keyof ExperienceFormInputs]}
            placeholder={input.placeholder}
            {...register(regName as keyof ExperienceFormInputs, {
              onChange: () => experienceSet(id, getValues()),
            })}
          />
        );
      })}
    </form>
  );
}
