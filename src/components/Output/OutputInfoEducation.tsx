import { OutputProps } from "../../types";
import checkValue from "../../utils/checkValue";

export default function OutputInfoEducation({ formValues }: OutputProps) {
  return (
    <>
      <h3 className="section-header">Education</h3>
      <section className="entries-container">
        <div className="entry">
          <h4>{`${checkValue(formValues, "education", "from")} - ${checkValue(formValues, "education", "to")}`}</h4>
          <div className="entry-section">
            <h4>{`${checkValue(formValues, "education", "uniName")}, ${checkValue(formValues, "education", "city")}`}</h4>
            <p>{`Degree: ${checkValue(formValues, "education", "degree")}`}</p>
            <p>{`Subject: ${checkValue(formValues, "education", "subject")}`}</p>
          </div>
        </div>
      </section>
    </>
  );
}
