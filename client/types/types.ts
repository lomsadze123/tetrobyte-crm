interface StudentsTypes {
  students: {
    _id: string;
    personalNumber: string;
    code: string;
    firstName: string;
    lastName: string;
    enrollmentYear: string;
    graduationYear: string;
    status: string;
    school: string;
    program: string;
    email: string;
    voucher: string;
    grant: string;
    citizenship: string;
    dateOfBirth: string;
    birthCity: string;
    languageOfInstruction: string;
    freshmanOrTransfer: string;
    mobilitySemesterCourse: number;
  }[];
}

interface InputFieldTypes {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  readOnly: boolean;
  defaultValue: string;
}

interface RadioGroupTypes {
  label: string;
  name: string;
  options: string[];
  disabled: boolean;
}

interface SelectFieldTypes extends RadioGroupTypes {
  defaultValue: string | number;
  isReadOnly: boolean;
}
