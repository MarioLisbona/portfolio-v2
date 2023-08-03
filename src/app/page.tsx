import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { getProfile, getProjects } from "@/sanity/sanity.query";
import { ProfileType, ProjectType } from "@/types";

export default async function Home() {
  const profile: ProfileType = await getProfile();
  const projects: ProjectType[] = await getProjects();

  return (
    <SectionContainer>
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects projects={projects} />
      <Experience />
      <Contact profile={profile} />
    </SectionContainer>
  );
}
