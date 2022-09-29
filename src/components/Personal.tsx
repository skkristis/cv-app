import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  setFunc: React.Dispatch<React.SetStateAction<{}>>;
}

type Inputs = {
  firstName: string;
  lastName: string;
  title: string;
  address: string;
  phoneNumber: string;
  email: string;
  description: string;
};

export default function Personal({ setFunc }: Props) {
  const { register, watch } = useForm<Inputs>();

  useEffect(() => {
    window.addEventListener("keyup", () => {
      setFunc(watch());
    });
  }, []);

  return (
    <form className="form">
      <input placeholder="First Name" {...register("firstName")} />
      <input placeholder="Last Name" {...register("lastName")} />
      <input placeholder="Title" {...register("title")} />
      <input placeholder="Address" {...register("address")} />
      <input placeholder="Phone number" {...register("phoneNumber")} />
      <input placeholder="Email" {...register("email")} />
      <input placeholder="Description" {...register("description")} />
    </form>
  );
}
