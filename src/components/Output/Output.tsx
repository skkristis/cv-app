import { OutputProps } from "../../types";
import OutputContent from "./OutputContent";
import OutputHeader from "./OutputHeader";

export default function Output({ formValues }: OutputProps) {
  return (
    <div className="Output">
      <OutputHeader formValues={formValues} />
      <OutputContent formValues={formValues} />
    </div>
  );
}
