import fetchStudents from "@/_actions/fetchStudents/fetchStudents";
import EditButton from "@/components/UseClientComponents/EditButton/EditButton";

const TableBody = async () => {
  const studentData: StudentsTypes = await fetchStudents();

  return (
    <tbody>
      {studentData.students.map((item, index) => (
        <tr key={item._id}>
          <td className="flex items-center border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
            <EditButton id={item._id} />
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
            {item.voucher} ₾
          </td>
          <td className="border-b border-gray-200 px-4 py-2 text-center w-40 h-12">
            {item.grant} ₾
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
  );
};

export default TableBody;
