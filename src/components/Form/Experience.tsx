import { useForm } from "react-hook-form";
import { ExperienceFormInputs, ExperienceFormProps, FormValues } from "../../types";

export default function Experience({ setFormValues, formValues }: ExperienceFormProps) {
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
        return (
          <input
            key={input.registerName}
            value={(formValues && formValues[input.registerName]) ?? ""}
            placeholder={input.placeholder}
            {...register(input.registerName, {
              onChange: () => {
                setFormValues((prevValues: FormValues) => {
                  console.log({ ...prevValues, experience: getValues() });
                  return { ...prevValues, experience: getValues() };
                });
              },
            })}
          />
        );
      })}
    </form>
  );
}
