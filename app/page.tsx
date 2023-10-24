import Header from "@/components/ui/Header";
import ButtonAppBar from "@/components/ui/Header";
import Dashboard from "./dashboard/page";

const Home = () => {
  return (
    <div>
      <main className="flex  flex-col">
      <Header />
      <Dashboard />
      </main>
    </div>
  );
};

export default Home;
