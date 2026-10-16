import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
        <Projects />
        <Publications />
        <Conferences />
      </main>
      <Footer />
    </>
  );
}
