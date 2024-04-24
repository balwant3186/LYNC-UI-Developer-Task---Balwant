import Believers from "@/components/believers/believers";
import BlockchainGaming from "@/components/blockchain-gaming/blockchain-gaming";
import Chains from "@/components/chains/chains";
import Community from "@/components/community/community";
import Footer from "@/components/footer/footer";
import GamingSection from "@/components/gaming-section/gaming-section";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import PowerUpSection from "@/components/power-up-section/power-up-section";
import ProductSuite from "@/components/product-suite/product-suite";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <BlockchainGaming />
      <PowerUpSection />

      <GamingSection />

      <ProductSuite />

      <Chains />

      <Community />

      <Believers />

      <Footer />
    </div>
  );
}
