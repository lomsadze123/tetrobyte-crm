const formData = [
  { type: "input", name: "firstName", label: "სახელი", placeholder: "სახელი" },
  { type: "input", name: "lastName", label: "გვარი", placeholder: "გვარი" },
  {
    type: "input",
    name: "personalNumber",
    label: "პირადი ნომერი",
    placeholder: "პირადი ნომერი",
    maxLength: 11,
  },
  {
    type: "select",
    name: "enrollmentYear",
    label: "ჩაბარების წელი",
    options: ["2020-2021"],
  },
  {
    type: "select",
    name: "dateOfBirth",
    label: "დაბადების თარიღი",
    options: ["2000"],
  },
  {
    type: "select",
    name: "birthCity",
    label: "დაბადების ადგილი",
    options: ["რუსთავი"],
  },
  {
    type: "select",
    name: "school",
    label: "სკოლა",
    options: ["TLS"],
  },
  {
    type: "select",
    name: "program",
    label: "პროგრამა",
    options: ["CyberSecurity"],
  },
  { type: "input", name: "voucher", label: "ვაუჩერი", placeholder: "ვაუჩერი" },
  {
    type: "select",
    name: "grant",
    label: "გრანტი",
    options: ["700"],
  },
  {
    type: "select",
    name: "citizenship",
    label: "მოქალაქეობა",
    options: ["საქართველო", "ინდოეთი"],
  },
  {
    type: "select",
    name: "languageOfInstruction",
    label: "სწავლის ენა",
    options: ["English"],
  },
  {
    type: "select",
    name: "mobilitySemesterCourse",
    label: "მობილობის სემესტრი",
    options: ["8"],
  },
  {
    type: "select",
    name: "agent",
    label: "აგენტი",
    options: ["პაატა"],
  },
];

export default formData;
