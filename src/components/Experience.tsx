import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface Props {
  setFunc: React.Dispatch<React.SetStateAction<{}>>;
  id: number;
}

interface Inputs {
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
}

export default function Experience({ setFunc, id }: Props) {
  const { register, watch } = useForm<Inputs>();

  useEffect(() => {
    window.addEventListener("keyup", () => {
      setFunc((prevState) => {
        console.log(prevState);
        return { ...prevState, [id]: watch() };
      });
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
    <div className="exp">
      <form className="form">
        <input placeholder="Position" {...register("position")} />
        <input placeholder="Company" {...register("company")} />
        <input placeholder="City" {...register("city")} />
        <input placeholder="From" {...register("from")} />
        <input placeholder="To" {...register("to")} />
      </form>
      <button onClick={clickHandler} className="btn">
        Delete
      </button>
    </div>
  );
}
