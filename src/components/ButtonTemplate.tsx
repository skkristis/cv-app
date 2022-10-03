import { FormValues } from "../types";

type Props = {
  onButtonClick: () => void;
  buttonText?: string;
};

export default function ButtonTemplate({ onButtonClick, buttonText = "Add" }: Props) {
  return (
    <button className="btn " onClick={onButtonClick}>
      {buttonText}
    </button>
  );
}
