import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface Props {
  setFunc: React.Dispatch<React.SetStateAction<{}>>;
  id: number;
}

type Inputs = {
  uniName: string;
  city: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
};

export default function Education({ setFunc, id }: Props) {
  const { register, watch } = useForm<Inputs>();

  useEffect(() => {
    window.addEventListener("keyup", () => {
      setFunc((prevState) => ({ ...prevState, [id]: watch() }));
    });
  }, []);

  function clickHandler(e: any) {
    e.target.parentNode.remove();

    setFunc((prevState: any) => {
      delete prevState[id];

      return {
        ...prevState,
      };
    });
  }

  return (
    <div className="edu">
      <form className="form">
        <input placeholder="University name" {...register("uniName")} />
        <input placeholder="City" {...register("city")} />
        <input placeholder="Degree" {...register("degree")} />
        <input placeholder="Subject" {...register("subject")} />
        <input placeholder="From" {...register("from")} />
        <input placeholder="To" {...register("to")} />
      </form>
      <button onClick={clickHandler} className="btn">
        Delete
      </button>
    </div>
  );
}
