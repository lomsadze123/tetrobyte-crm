import fetchStudent from "@/_actions/fetchSingleStudent/fetchSingleStudent";
import postStudent from "@/_actions/postStudent/postStudent";
import updateStudent from "@/_actions/updateStudent/updateStudent";
import { useEffect, useState } from "react";
// import updateUser from "@/_actions/updateUser/updateUser";

const StudentForm = ({
  mode,
  id,
}: {
  mode: "view" | "edit" | "add";
  id: string;
}) => {
  const isReadOnly = mode === "view";
  const [student, setStudent] = useState<StudentsTypes["students"][0] | null>(
    null
  );

  useEffect(() => {
    if (mode !== "add") {
      const handleFetchStudent = async () => {
        const response = await fetchStudent(id);
        setStudent(response.student);
      };

      handleFetchStudent();
    }
  }, [id, mode]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const studentData = Object.fromEntries(formData.entries());

    if (mode === "add") {
      await postStudent(new FormData(e.currentTarget));
    } else if (mode === "edit") {
      await updateStudent(id, studentData);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            სახელი
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="სახელი"
            readOnly={isReadOnly}
            defaultValue={student?.firstName || ""}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            გვარი
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="გვარი"
            readOnly={isReadOnly}
            defaultValue={student?.lastName || ""}
          />
        </div>
        <div>
          <label
            htmlFor="personalNumber"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            პირადი ნომერი
          </label>
          <input
            id="personalNumber"
            name="personalNumber"
            type="text"
            maxLength={11}
            className="w-full border rounded px-3 py-2"
            placeholder="პირადი ნომერი"
            readOnly={isReadOnly}
            defaultValue={student?.personalNumber || ""}
          />
        </div>
        <div>
          <label
            htmlFor="enrollmentYear"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            ჩაბარების წელი
          </label>
          <select
            id="enrollmentYear"
            name="enrollmentYear"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.enrollmentYear : "წელი"}
            </option>
            <option value="2020-2021">2020-2021</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            დაბადების თარიღი
          </label>
          <select
            id="dateOfBirth"
            name="dateOfBirth"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.dateOfBirth : "თარიღი"}
            </option>
            <option value="2024-2025">2024-2025</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="birthCity"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            დაბადების ადგილი
          </label>
          <select
            id="birthCity"
            name="birthCity"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.birthCity : "ქალაქი"}
            </option>
            <option value="რუსთავი">რუსთავი</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="school"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            სკოლა
          </label>
          <select
            id="school"
            name="school"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.school : "სკოლა"}
            </option>
            <option value="TLS">TLS</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="program"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            პროგრამა
          </label>
          <select
            id="program"
            name="program"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.program : "პროგრამა"}
            </option>
            <option value="CyberSecurity">CyberSecurity</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="voucher"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            ვაუჩერი
          </label>
          <input
            id="voucher"
            name="voucher"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="ვაუჩერი"
            readOnly={isReadOnly}
            defaultValue={student?.voucher || ""}
          />
        </div>
        <div>
          <label
            htmlFor="grant"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            გრანტი
          </label>
          <select
            id="grant"
            name="grant"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit" ? student?.grant : "გრანტი"}
            </option>
            <option value="700">700</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="citizenship"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            მოქალაქეობა
          </label>
          <select
            id="citizenship"
            name="citizenship"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit"
                ? student?.citizenship
                : "მოქალაქეობა"}
            </option>
            <option value="საქართველო">საქართველო</option>
            <option value="საქართველო">ინდოეთი</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="languageOfInstruction"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            სწავლის ენა
          </label>
          <select
            id="languageOfInstruction"
            name="languageOfInstruction"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit"
                ? student?.languageOfInstruction
                : "ენა"}
            </option>
            <option value="English">English</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm text-left font-medium text-gray-700"
            htmlFor="freshmanOrTransfer"
          >
            FRESHMAN / TRANSFER
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name="freshmanOrTransfer"
              value="FRESHMAN"
              className="mr-2"
              id="freshman"
              disabled={isReadOnly}
              defaultChecked={student?.freshmanOrTransfer === "FRESHMAN"}
            />
            <label className="mr-4" htmlFor="freshman">
              FRESHMAN
            </label>
            <input
              type="radio"
              name="freshmanOrTransfer"
              value="TRANSFER"
              className="mr-2"
              id="transfer"
              disabled={isReadOnly}
              defaultChecked={student?.freshmanOrTransfer === "TRANSFER"}
            />
            <label htmlFor="transfer">TRANSFER</label>
          </div>
        </div>
        <div>
          <label
            htmlFor="mobilitySemesterCourse"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            მობილობის სემესტრი
          </label>
          <select
            id="mobilitySemesterCourse"
            name="mobilitySemesterCourse"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
          >
            <option>
              {isReadOnly || mode === "edit"
                ? student?.mobilitySemesterCourse
                : "სემესტრი"}
            </option>
            <option value="8">8</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="agent"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            აგენტი
          </label>
          <select
            id="agent"
            name="agent"
            className="w-full border rounded px-3 py-2"
            disabled={isReadOnly}
            defaultValue={""} // i must add agent in here -----------------
          >
            <option>აგენტი</option>
            <option value="პაატა">პაატა</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {mode !== "view" && (
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2 mt-4"
            >
              {mode === "add" ? "დამახსოვრება" : "განახლება"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentForm;
