import { groq } from "next-sanity";
import client from "./sanity.client";
import { ExperienceType, ProfileType, ProjectType } from "@/types";

export async function getProfile(): Promise<ProfileType> {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      _id,
      firstName,
      lastName,
      headline,
      profileImage,
      shortBio,
      email,
      location,
      fullBio,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"] | order(buildDate desc) {
      _id,
      thumbnail {alt, "image": asset->url},
      title, 
      tech,
      shortDescription,
      longDescription,
      github,
      liveSite
    }`
  );
}

export async function getExperiences(): Promise<ExperienceType[]> {
  return client.fetch(groq`*[_type == "experience"] | order(startDate asc) {
    _id,
    company,
    startDate,
    endDate,
    title,
    location,
    role,
    techStack
  }`);
}
