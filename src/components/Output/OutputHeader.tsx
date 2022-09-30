import { OutputProps } from "../../types";
import checkValue from "../../utils/checkValue";

export default function OutputHeader({ formValues }: OutputProps) {
  return (
    <>
      <section className="output-header">
        <h1>{`${checkValue(formValues, "personal", "firstName")} ${checkValue(formValues, "personal", "lastName")}`}</h1>
        <h3>{checkValue(formValues, "personal", "title")}</h3>
      </section>
    </>
  );
}
