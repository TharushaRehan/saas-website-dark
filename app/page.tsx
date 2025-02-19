import Action from "@/components/action";
import Banner from "@/components/banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import Product from "@/components/product";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Logos />
      <Features />
      <Product />
      <FAQ />
      <Action />
      <Footer />
    </>
  );
}
