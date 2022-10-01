import { EducationFormInputs } from "../../types";

type Props = {
  educationValues: EducationFormInputs[];
};

export default function OutputInfoEducation({ educationValues }: Props) {
  return (
    <>
      <h3 className="section-header">Education</h3>
      <section>
        {educationValues.map((entry, i) => {
          return (
            <div key={i} className="entry">
              <h4>{`${entry.from ?? ""} - ${entry.to ?? ""}`}</h4>
              <div className="entry-section">
                <h4>{`${entry.uniName ?? ""}, ${entry.city ?? ""}`}</h4>
                <p>{`Degree: ${entry.degree ?? ""}`}</p>
                <p>{`Subject: ${entry.subject ?? ""}`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
