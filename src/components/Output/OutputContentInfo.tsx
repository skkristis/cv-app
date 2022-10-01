import { OutputProps } from "../../types";
import OutputInfoEducation from "./OutputInfoEducation";
import OutputInfoExperience from "./OutputInfoExperience";

export default function OutputContentInfo({ formValues }: OutputProps) {
  const { personal, experience, education } = formValues;

  return (
    <>
      <section className="output-content">
        <h3 className="section-header">Description</h3>
        <p className="description">{personal.description}</p>
        <OutputInfoExperience experienceValues={experience} />
        <OutputInfoEducation educationValues={education} />
      </section>
    </>
  );
}
