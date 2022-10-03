import { useForm } from "react-hook-form";
import { EducationFormInputs, EducationFormProps } from "../../types";

export default function Education({ educationSet, educationValues, id }: EducationFormProps) {
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
            value={educationValues[regName as keyof EducationFormInputs]}
            placeholder={input.placeholder}
            {...register(regName as keyof EducationFormInputs, {
              onChange: () => educationSet(id, getValues()),
            })}
          />
        );
      })}
    </form>
  );
}
