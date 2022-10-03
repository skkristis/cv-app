import { useForm } from "react-hook-form";
import { PersonalFormInputs, PersonalFormProps } from "../../types";

export default function Personal({ personalSet, personalValues }: PersonalFormProps) {
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
        const regName = input.registerName;

        return (
          <input
            key={regName}
            value={personalValues[regName as keyof PersonalFormInputs]}
            placeholder={input.placeholder}
            {...register(regName as keyof PersonalFormInputs, {
              onChange: () => personalSet(getValues()),
            })}
          />
        );
      })}
    </form>
  );
}
// cast as string and should be fine
//try to assert type corectness
