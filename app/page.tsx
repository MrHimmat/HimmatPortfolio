import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/GridItems";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Aproach";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-start overflow-clip overflow-y-hidden  items-center flex-col mx-auto sm:px-10 px-5">
      <CustomCursor />
      <div className="max-w-7xl w-full mx-auto overflow-y-hidden overflow-hidden">
        {/* Pass navItems as a prop directly to FloatingNav */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
