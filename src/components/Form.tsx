import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

export default function Form({ setFunc }: any) {
  const [personalInfo, setPersonalInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [numOfExperience, setNumOfExperience] = useState([{}]);
  const [numOfEducation, setNumOfEducation] = useState([{}]);

  useEffect(() => {
    setFunc(() => {
      return {
        personal: personalInfo,
        experience: experienceInfo,
        education: educationInfo,
      };
    });
  }, [personalInfo, experienceInfo, educationInfo]);

  return (
    <div className="form-container">
      <div id="Personal">
        <h3>Personal Information</h3>
        <Personal setFunc={setPersonalInfo} />
      </div>
      <div id="Experience">
        <h3>Experience</h3>
        {numOfExperience.map((job, i) => {
          return <Experience key={i} id={i} setFunc={setExperienceInfo} />;
        })}
        <Buttons setFunc={setNumOfExperience} />
      </div>
      <div id="Education">
        <h3>Education</h3>
        {numOfEducation.map((edu, i) => {
          return <Education key={i} id={i} setFunc={setEducationInfo} />;
        })}
        <Buttons setFunc={setNumOfEducation} />
      </div>
      <div className="Submit">
        <button className="btn">Generate PDF</button>
        <button className="btn">Load Example</button>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}
