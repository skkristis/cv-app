import { OutputProps } from "../../types";
import OutputContentContacts from "./OutputContentContacts";
import OutputContentInfo from "./OutputContentInfo";

export default function OutputContent({ formValues }: OutputProps) {
  return (
    <>
      <section className="output-content-container">
        <OutputContentInfo formValues={formValues} />
        <OutputContentContacts personalValues={formValues.personal} />
      </section>
    </>
  );
}
