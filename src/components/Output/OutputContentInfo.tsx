import { OutputProps } from "../../types";
import checkValue from "../../utils/checkValue";
import OutputInfoEducation from "./OutputInfoEducation";
import OutputInfoExperience from "./OutputInfoExperience";

export default function OutputContentInfo({ formValues }: OutputProps) {
  return (
    <>
      <section className="output-content">
        <h3 className="section-header">Description</h3>
        <p>{checkValue(formValues, "personal", "description")}</p>
        <OutputInfoExperience formValues={formValues} />
        <OutputInfoEducation formValues={formValues} />
      </section>
    </>
  );
}
