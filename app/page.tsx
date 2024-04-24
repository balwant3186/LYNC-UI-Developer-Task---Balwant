import Believers from "@/components/believers/believers";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Believers />

      <Footer />
    </div>
  );
}