import Navbar from "@/components/navigation/app/navbar";
import SideBar from "@/components/navigation/app/sidebar";
import Footer from "@/components/navigation/general/footer";
import TaskCategories from "@/components/page-components/tasks/task-categories";

interface LandingPageProps {
  children: React.ReactNode;
}

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <div>
      <Navbar />
      <div className="pt-[7vh]">
        <TaskCategories />
        <br />
        <div className="max-w-screen-xl mx-auto h-full flex flex-col md:flex-row gap-8 p-5">
          <div className="w-full md:w-[25%]">
            <SideBar />
          </div>
          <div className="w-full md:w-[75%]">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
