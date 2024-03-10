import Footer from "@/components/navigation/general/footer";
import Navbar from "@/components/navigation/landing-page/navbar";

interface LandingPageProps {
  children: React.ReactNode;
}

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <div>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
