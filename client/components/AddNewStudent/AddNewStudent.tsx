import useStudent from "@/hooks/useStudent/useStudent";

const StudentForm = ({
  mode,
  id,
  setShow,
}: {
  mode: "view" | "edit" | "add";
  id: string;
  setShow?: (show: boolean) => void;
}) => {
  const { handleSubmit, student, isReadOnly } = useStudent({
    mode,
    id,
    setShow,
  });

  return (
    <div className="container mx-auto p-8">
      {/* more better is action, but in this case we need to have CRS */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 text-primaryBlue text-left"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-semibold"
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
            className="block mb-2 text-sm font-semibold"
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
            className="block mb-2 text-sm font-semibold"
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
            className="block mb-2 text-sm font-semibold"
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
          </select>
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block mb-2 text-sm font-semibold"
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
            <option value="2020">2000</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="birthCity"
            className="block mb-2 text-sm font-semibold"
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
          </select>
        </div>
        <div>
          <label htmlFor="school" className="block mb-2 text-sm font-semibold">
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
          </select>
        </div>
        <div>
          <label htmlFor="program" className="block mb-2 text-sm font-semibold">
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
          </select>
        </div>
        <div>
          <label htmlFor="voucher" className="block mb-2 text-sm font-semibold">
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
          <label htmlFor="grant" className="block mb-2 text-sm font-semibold">
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
          </select>
        </div>
        <div>
          <label
            htmlFor="citizenship"
            className="block mb-2 text-sm font-semibold"
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
          </select>
        </div>
        <div>
          <label
            htmlFor="languageOfInstruction"
            className="block mb-2 text-sm font-semibold"
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
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-semibold"
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
            />
            <label htmlFor="transfer">TRANSFER</label>
          </div>
        </div>
        <div>
          <label
            htmlFor="mobilitySemesterCourse"
            className="block mb-2 text-sm font-semibold"
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
          </select>
        </div>
        <div>
          <label htmlFor="agent" className="block mb-2 text-sm font-semibold">
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
          </select>
        </div>
        {mode !== "view" && (
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-primaryBlue text-white rounded px-4 py-3 mt-4"
            >
              {mode === "add" ? "დამატება" : "შენახვა"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentForm;
