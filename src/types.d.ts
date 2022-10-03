export type FormValues = {
  personal: PersonalFormInputs;
  experience: ExperienceFormInputs[];
  education: EducationFormInputs[];
};

export type IdentifiableEntity = {
  id: number;
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

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type PersonalFormProps = {
  personalSet: (currValues: PersonalFormInputs) => void;
  personalValues: PersonalFormInputs;
};
export interface ExperienceFormProps extends IdentifiableEntity {
  experienceSet: (id: number, currValues: ExperienceFormInputs) => void;
  experienceValues: ExperienceFormInputs;
}
export interface EducationFormProps extends IdentifiableEntity {
  educationSet: (id: number, currValues: EducationFormInputs) => void;
  educationValues: EducationFormInputs;
}

export type OutputProps = {
  formValues: FormValues;
};
