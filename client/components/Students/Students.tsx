import fetchStudents from "@/_actions/fetchStudents/fetchStudents";

const Students = async () => {
  const studentData: StudentsTypes = await fetchStudents();

  return (
    <section className="py-8">
      <table className="border-b border-gray-200">
        <thead>
          <tr className="thead-custom-styles">
            <th className="px-4 py-2 text-center w-40 h-12">პირადი N</th>
            <th className="px-4 py-2 text-center w-40 h-12">კოდი</th>
            <th className="px-4 py-2 text-center w-40 h-12">სახელი</th>
            <th className="px-4 py-2 text-center w-40 h-12">გვარი</th>
            <th className="px-4 py-2 text-center w-40 h-12">ჩაბ. წელი</th>
            <th className="px-4 py-2 text-center w-40 h-12">დამთ. წელი</th>
            <th className="px-4 py-2 text-center w-40 h-12">სტატუსი</th>
            <th className="px-4 py-2 text-center w-40 h-12">სკოლა</th>
            <th className="px-4 py-2 text-center w-40 h-12">პროგრამა</th>
            <th className="px-4 py-2 text-center w-40 h-12">ელფოსტა</th>
            <th className="px-4 py-2 text-center w-40 h-12">ვაუჩერი</th>
            <th className="px-4 py-2 text-center w-40 h-12">გრანტი</th>
            <th className="px-4 py-2 text-center w-40 h-12">მოქალაქეობა</th>
            <th className="px-4 py-2 text-center w-40 h-12">
              დაბადების თარიღი
            </th>
            <th className="px-4 py-2 text-center w-40 h-12">
              დაბადების ქალაქი
            </th>
            <th className="px-4 py-2 text-center w-40 h-12">სწავლების ენა</th>
            <th className="px-4 py-2 text-center w-40 h-12">
              Freshman / Transfer
            </th>
            <th className="px-4 py-2 text-center w-40 h-12">
              მობილობის სემ კურსი
            </th>
            <th className="px-4 py-2 text-center w-40 h-12">აგენტი</th>
          </tr>
        </thead>
        <tbody>
          {studentData.students.map((item, index) => (
            <tr key={index}>
              <td className="flex items-center border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                <span className="rotate-90 block text-xl font-bold">
                  <button>...</button>
                </span>
                <span>{item.personalNumber}</span>
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.code}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.firstName}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.lastName}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.enrollmentYear}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.graduationYear}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.status}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.school}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.program}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.email}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.voucher}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.grant}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.citizenship}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.dateOfBirth}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.birthCity}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.languageOfInstruction}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.freshmanOrTransfer}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.mobilitySemesterCourse}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
                {item.firstName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Students;
