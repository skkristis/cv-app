export type FormValues = {
  personal: PersonalFormInputs;
  experience: ExperienceFormInputs;
  // experience: ExperienceFormInputs[];

  education: EducationFormInputs;
  // education: EducationFormInputs[];
};

export type PersonalFormInputs = {
  firstName: string;
  lastName: string;
  title: string;
  address: string;
  phoneNumber: string;
  email: string;
  description: string;
};

export type ExperienceFormInputs = {
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
};

export type EducationFormInputs = {
  uniName: string;
  city: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
};

export type PersonalFormProps = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: undefined | PersonalFormInputs;
};
export type ExperienceFormProps = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: undefined | ExperienceFormInputs;
};
export type EducationFormProps = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: undefined | EducationFormInputs;
};

export type OutputProps = {
  formValues: FormValues;
};
