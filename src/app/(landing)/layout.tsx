import Footer from "@/components/navigation/general/footer";
import Navbar from "@/components/navigation/landing-page/navbar";

interface LandingPageProps {
  children: React.ReactNode;
}

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <div>
      <div>
        <div className="fixed w-full h-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:6rem_6rem]">
          </div>
        </div>
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
