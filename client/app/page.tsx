import Students from "@/components/Students/Students";
import AddNew from "@/components/UseClientComponents/AddNew/AddNew";

const Home = () => {
  return (
    <main className="pl-16 pr-6 mt-8">
      <AddNew />
      <Students />
    </main>
  );
};

export default Home;
