import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { getProfile } from "@/sanity/sanity.query";

export default async function Home() {
  const profile = await getProfile();

  console.log(profile);
  return (
    <SectionContainer>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </SectionContainer>
  );
}
