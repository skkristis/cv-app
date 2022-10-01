import { ExperienceFormInputs } from "../../types";

type Props = {
  experienceValues: ExperienceFormInputs[];
};

export default function OutputInfoExperience({ experienceValues }: Props) {
  return (
    <>
      <h3 className="section-header">Experience</h3>
      <section>
        {experienceValues.map((entry, i) => {
          return (
            <div key={i} className="entry">
              <h4>{`${entry.from ?? ""} - ${entry.to ?? ""}`}</h4>
              <div className="entry-section">
                <h4>{entry.position ?? ""}</h4>
                <p>{`${entry.company ?? ""}, ${entry.city ?? ""}`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
