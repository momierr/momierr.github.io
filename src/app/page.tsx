import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Conferences from "@/components/Conferences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Publications />
        <Conferences />
      </main>
      <Footer />
    </>
  );
}
