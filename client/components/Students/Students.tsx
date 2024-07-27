import TableBody from "./Table/Body/TableBody";
import TableHeader from "./Table/Header/TableHeader";

const Students = () => {
  return (
    <section className="py-8">
      <table className="border-b border-gray-200">
        <TableHeader />
        <TableBody />
      </table>
    </section>
  );
};

export default Students;
