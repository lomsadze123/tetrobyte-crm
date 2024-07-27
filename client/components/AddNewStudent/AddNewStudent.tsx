const AddNewStudent = () => {
  return (
    <div className="container mx-auto p-8">
      <form className="grid grid-cols-2 gap-4">
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
            className="w-full border rounded px-3 py-2"
            placeholder="პირადი ნომერი"
          />
        </div>
        <div>
          <label
            htmlFor="enrollYear"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            ჩაბარების წელი
          </label>
          <select
            id="enrollYear"
            name="enrollYear"
            className="w-full border rounded px-3 py-2"
          >
            <option>წელი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label
            htmlFor="graduationYear"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            დაბადების თარიღი
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            className="w-full border rounded px-3 py-2"
          >
            <option>თარიღი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label
            htmlFor="bornPlace"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            დაბადების ადგილი
          </label>
          <select
            id="bornPlace"
            name="bornPlace"
            className="w-full border rounded px-3 py-2"
          >
            <option>ქალაქი</option>
            {/* options */}
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
          >
            <option>სკოლა</option>
            {/* options */}
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
          >
            <option>პროგრამა</option>
            {/* options */}
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
          >
            <option>გრანტი</option>
            {/* options */}
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
          >
            <option>მოქალაქეობა</option>
            {/* options */}
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
          >
            <option>ენა</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            FRESHMAN / TRANSFER
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name="status"
              value="FRESHMAN"
              className="mr-2"
              id="freshman"
            />
            <label className="mr-4" htmlFor="freshman">
              FRESHMAN
            </label>
            <input
              type="radio"
              name="status"
              value="TRANSFER"
              className="mr-2"
              id="transfer"
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
          >
            <option>სემესტრი</option>
            {/* options */}
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
          >
            <option>აგენტი</option>
            {/* options */}
          </select>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded px-4 py-2 mt-4"
          >
            დამახსოვრება
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStudent;
