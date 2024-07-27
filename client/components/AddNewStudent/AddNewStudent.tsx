const AddNewStudent = () => {
  return (
    <div className="container mx-auto p-8">
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            სახელი
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="სახელი"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            გვარი
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="გვარი"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            პირადი ნომერი
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="პირადი ნომერი"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ჩაბარების წელი
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>წელი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            დაბადების თარიღი
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>თარიღი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            დაბადების ადგილი
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>ქალაქი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            სკოლა
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>სკოლა</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            პროგრამა
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>პროგრამა</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ვაუჩერი
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="ვაუჩერი"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            გრანტი
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>გრანტი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            მოქალაქეობა
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>მოქალაქეობა</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            სწავლის ენა
          </label>
          <select className="w-full border rounded px-3 py-2">
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
            />
            <label className="mr-4">FRESHMAN</label>
            <input
              type="radio"
              name="status"
              value="TRANSFER"
              className="mr-2"
            />
            <label>TRANSFER</label>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            მობილობის სემესტრი
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>სემესტრი</option>
            {/* options */}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            აგენტი
          </label>
          <select className="w-full border rounded px-3 py-2">
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
