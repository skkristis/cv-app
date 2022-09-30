import { OutputProps } from "../../types";
import checkValue from "../../utils/checkValue";

export default function OutputContentContacts({ formValues }: OutputProps) {
  return (
    <>
      <section className="output-contacts">
        <h3 className="section-header">Personal Details</h3>
        <h4 className="detail-header">Address</h4>
        <p>{checkValue(formValues, "personal", "address")}</p>
        <h4 className="detail-header">Phone Number</h4>
        <p>{checkValue(formValues, "personal", "phoneNumber")}</p>
        <h4 className="detail-header">Email</h4>
        <p>{checkValue(formValues, "personal", "email")}</p>
      </section>
    </>
  );
}
