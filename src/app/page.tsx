import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";

export default async function Home() {
  const profile: ProfileType = await getProfile();

  return (
    <SectionContainer>
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects />
      <Experience />
      <Contact profile={profile} />
    </SectionContainer>
  );
}
