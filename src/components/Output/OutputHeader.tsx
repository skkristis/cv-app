import { OutputProps } from "../../types";

export default function OutputHeader({ formValues }: OutputProps) {
  return (
    <>
      <section className="output-header">
        <h1>{`${formValues.personal.firstName} ${formValues.personal.lastName}`}</h1>
        <h3>{formValues.personal.title}</h3>
      </section>
    </>
  );
}
