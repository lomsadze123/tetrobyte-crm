import fetchStudents from "@/_actions/fetchStudents/fetchStudents";
import EditButton from "@/components/UseClientComponents/EditButton/EditButton";

const TableBody = async () => {
  const studentData: StudentsTypes = await fetchStudents();
  return (
    <tbody>
      {studentData.students.map((item) => (
        <tr key={item._id}>
          {[
            <div key={item._id} className="flex items-center">
              <EditButton id={item._id} />
              <span>{item.personalNumber}</span>
            </div>,
            item.code,
            item.firstName,
            item.lastName,
            item.enrollmentYear,
            item.graduationYear,
            item.status,
            item.school,
            item.program,
            item.email,
            `${item.voucher} ₾`,
            `${item.grant} ₾`,
            item.citizenship,
            item.dateOfBirth,
            item.birthCity,
            item.languageOfInstruction,
            item.freshmanOrTransfer,
            item.mobilitySemesterCourse,
            item.firstName,
          ].map((content, index) => (
            <td
              key={item._id + index}
              className="border-b border-gray-200 px-8 py-4 whitespace-nowrap text-ellipsis"
            >
              {content}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
