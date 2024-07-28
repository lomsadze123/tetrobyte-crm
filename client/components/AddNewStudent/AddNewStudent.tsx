import useStudent from "@/hooks/useStudent/useStudent";
import InputField from "../StudentForms/InputField";
import SelectField from "../StudentForms/SelectField";
import RadioGroup from "../StudentForms/RadioGroup";

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
        <InputField
          label="სახელი"
          name="firstName"
          type="text"
          placeholder="სახელი"
          readOnly={isReadOnly}
          defaultValue={student?.firstName || ""}
        />
        <InputField
          label="გვარი"
          name="lastName"
          type="text"
          placeholder="გვარი"
          readOnly={isReadOnly}
          defaultValue={student?.lastName || ""}
        />
        <InputField
          label="პირადი ნომერი"
          name="personalNumber"
          type="text"
          placeholder="პირადი ნომერი"
          readOnly={isReadOnly}
          defaultValue={student?.personalNumber || ""}
        />
        <SelectField
          label="ჩაბარების წელი"
          name="enrollmentYear"
          options={["2020-2021"]}
          disabled={isReadOnly}
          defaultValue={student?.enrollmentYear || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="დაბადების თარიღი"
          name="dateOfBirth"
          options={["2000"]}
          disabled={isReadOnly}
          defaultValue={student?.dateOfBirth || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="დაბადების ადგილი"
          name="birthCity"
          options={["რუსთავი"]}
          disabled={isReadOnly}
          defaultValue={student?.birthCity || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="სკოლა"
          name="school"
          options={["TLS"]}
          disabled={isReadOnly}
          defaultValue={student?.school || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="პროგრამა"
          name="program"
          options={["CyberSecurity"]}
          disabled={isReadOnly}
          defaultValue={student?.program || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <InputField
          label="ვაუჩერი"
          name="voucher"
          type="text"
          placeholder="ვაუჩერი"
          readOnly={isReadOnly}
          defaultValue={student?.voucher || ""}
        />
        <SelectField
          label="გრანტი"
          name="grant"
          options={["700"]}
          disabled={isReadOnly}
          defaultValue={student?.grant || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="მოქალაქეობა"
          name="citizenship"
          options={["საქართველო", "ინდოეთი"]}
          disabled={isReadOnly}
          defaultValue={student?.citizenship || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="სწავლის ენა"
          name="languageOfInstruction"
          options={["English"]}
          disabled={isReadOnly}
          defaultValue={student?.languageOfInstruction || ""}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <RadioGroup
          label="FRESHMAN / TRANSFER"
          name="freshmanOrTransfer"
          options={["FRESHMAN", "TRANSFER"]}
          disabled={isReadOnly}
        />
        <SelectField
          label="მობილობის სემესტრი"
          name="mobilitySemesterCourse"
          options={["8"]}
          disabled={isReadOnly}
          defaultValue={Number(student?.mobilitySemesterCourse || "")}
          isReadOnly={mode === "view" || mode === "edit"}
        />
        <SelectField
          label="აგენტი"
          name="agent"
          options={["პაატა"]}
          disabled={isReadOnly}
          defaultValue={""}
          isReadOnly={mode === "view" || mode === "edit"}
        />

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
