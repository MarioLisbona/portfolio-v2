import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { getExperiences, getProfile, getProjects } from "@/sanity/sanity.query";
import { ExperienceType, ProfileType, ProjectType } from "@/types";

export default async function Home() {
  const profile: ProfileType = await getProfile();
  const projects: ProjectType[] = await getProjects();
  const experiences: ExperienceType[] = await getExperiences();

  return (
    <SectionContainer>
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact profile={profile} />
    </SectionContainer>
  );
}
