interface Props {
  info: {
    personal: {
      firstName: string;
      lastName: string;
      title: string;
      address: string;
      phoneNumber: string;
      email: string;
      description: string;
    };
    experience: {
      position: string;
      company: string;
      city: string;
      from: string;
      to: string;
    };
    education: {
      uniName: string;
      city: string;
      degree: string;
      subject: string;
      from: string;
      to: string;
    };
  };
}

export default function Output({ info }: Props) {
  const { personal, experience, education } = info;

  return (
    <div className="Output">
      <section className="name-ocupation">
        <h1>{`${personal.firstName} ${personal.lastName}`}</h1>
        <h3>{personal.title}</h3>
      </section>
      <section className="main-info-container">
        <section className="content">
          <h3 className="section-header">Description</h3>
          <p>{personal.description}</p>
          <h3 className="section-header">Experience</h3>
          <section className="exp-container">
            {Object.values(experience).map((exp) => {
              return (
                <div className="entry">
                  <h4>{`${exp.from} - ${exp.to}`}</h4>
                  <div className="container-mapped">
                    <h4>{exp.position}</h4>
                    <p>{`${exp.company}, ${exp.city}`}</p>
                  </div>
                </div>
              );
            })}
          </section>
          <h3 className="section-header">Education</h3>
          <section className="exp-container">
            {Object.values(education).map((edu) => {
              return (
                <div className="entry">
                  <h4>{`${edu.from} - ${edu.to}`}</h4>
                  <div className="container-mapped">
                    <h4>{edu.uniName}</h4>
                    <p>{`Degree: ${edu.degree}`}</p>
                    <p>{`Degree: ${edu.subject}`}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
        <section className="contacts">
          <h3 className="section-header">Personal Details</h3>
          <h4 className="detail-header">Address</h4>
          <p>{personal.address}</p>
          <h4 className="detail-header">Phone Number</h4>
          <p>{personal.phoneNumber}</p>
          <h4 className="detail-header">Email</h4>
          <p>{personal.email}</p>
        </section>
      </section>
    </div>
  );
}
