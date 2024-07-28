import TableBody from "./Table/Body/TableBody";
import TableHeader from "./Table/Header/TableHeader";

const Students = () => {
  return (
    <section className="py-8">
      <div className="table-container pb-12">
        <table className="border-b border-gray-200 text-primaryBlue text-center">
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </section>
  );
};

export default Students;
