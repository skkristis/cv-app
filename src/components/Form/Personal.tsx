import { useForm } from "react-hook-form";
import { FormValues, PersonalFormInputs, PersonalFormProps } from "../../types";

export default function Personal({ setFormValues, formValues }: PersonalFormProps) {
  const { register, getValues } = useForm<PersonalFormInputs>();

  const inputsDefinitions = [
    {
      placeholder: "First Name",
      registerName: "firstName",
    },
    {
      placeholder: "Last Name",
      registerName: "lastName",
    },
    {
      placeholder: "Title",
      registerName: "title",
    },
    {
      placeholder: "Address",
      registerName: "address",
    },
    {
      placeholder: "Phone number",
      registerName: "phoneNumber",
    },
    {
      placeholder: "Email",
      registerName: "email",
    },
    {
      placeholder: "Description",
      registerName: "description",
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
                  console.log({ ...prevValues, personal: getValues() });
                  return { ...prevValues, personal: getValues() };
                });
              },
            })}
          />
        );
      })}
    </form>
  );
}
