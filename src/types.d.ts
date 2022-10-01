export type FormValues = {
  personal: PersonalFormInputs;
  experience: ExperienceFormInputs[];
  education: EducationFormInputs[];
};

export type PersonalFormInputs = {
  firstName: string;
  lastName: string;
  title: string;
  address: string;
  phoneNumber: string;
  email: string;
  description: string;
  regName?: string;
};

export type ExperienceFormInputs = {
  id: number;
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
};

export type EducationFormInputs = {
  id: number;
  uniName: string;
  city: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
};

export type PersonalFormProps = {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  personalValues: undefined | PersonalFormInputs;
};
export type ExperienceFormProps = {
  id: number;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  experienceValues: undefined | ExperienceFormInputs;
};
export type EducationFormProps = {
  id: number;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  educationValues: undefined | EducationFormInputs;
};

export type OutputProps = {
  formValues: FormValues;
};
