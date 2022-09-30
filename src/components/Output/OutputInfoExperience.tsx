import { OutputProps } from "../../types";
import checkValue from "../../utils/checkValue";

export default function OutputInfoExperience({ formValues }: OutputProps) {
  return (
    <>
      <h3 className="section-header">Experience</h3>
      <section>
        <div className="entry">
          <h4>{`${checkValue(formValues, "experience", "from")} - ${checkValue(formValues, "experience", "to")}`}</h4>
          <div className="entry-section">
            <h4>{checkValue(formValues, "experience", "position")}</h4>
            <p>{`${checkValue(formValues, "experience", "company")}, ${checkValue(formValues, "experience", "city")}`}</p>
          </div>
        </div>
      </section>
    </>
  );
}
