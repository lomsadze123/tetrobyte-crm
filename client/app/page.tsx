import Students from "@/components/Students/Students";
import AddNew from "@/components/UseClientComponents/AddNew/AddNew";
import ExportButton from "@/components/UseClientComponents/ExportButton/ExportButton";

const Home = () => {
  return (
    <main className="pl-16 pr-6 mt-8">
      <div className="flex justify-between items-center">
        <ExportButton />
        <AddNew />
      </div>
      <Students />
    </main>
  );
};

export default Home;
