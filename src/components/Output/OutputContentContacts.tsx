import { PersonalFormInputs } from "../../types";

type Props = {
  personalValues: PersonalFormInputs;
};
export default function OutputContentContacts({ personalValues }: Props) {
  return (
    <>
      <section className="output-contacts">
        <h3 className="section-header">Personal Details</h3>
        <h4 className="detail-header">Address</h4>
        <p>{personalValues.address}</p>
        <h4 className="detail-header">Phone Number</h4>
        <p>{personalValues.phoneNumber}</p>
        <h4 className="detail-header">Email</h4>
        <p>{personalValues.email}</p>
      </section>
    </>
  );
}
