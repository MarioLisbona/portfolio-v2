import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
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

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(buildDate desc) {
      _id,
      thumbnail {alt, "image": asset->url},
      title, 
      tech,
      shortDescription,
      longDescription,
      projectLinks
    }`
  );
}
