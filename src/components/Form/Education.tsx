import { useForm } from "react-hook-form";
import { EducationFormInputs, EducationFormProps, FormValues } from "../../types";

export default function Education({ setFormValues, formValues }: EducationFormProps) {
  const { register, getValues } = useForm<EducationFormInputs>();
  // const onChangeHandler = setEducationValues(watch(), setFormValues);
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
        return (
          <input
            key={input.registerName}
            value={(formValues && formValues[input.registerName]) ?? ""}
            placeholder={input.placeholder}
            {...register(input.registerName, {
              onChange: () => {
                setFormValues((prevValues: FormValues) => {
                  console.log({ ...prevValues, education: getValues() });
                  return { ...prevValues, education: getValues() };
                });
              },
            })}
          />
        );
      })}
    </form>
  );
}
