import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      firstName,
      lastName,
      headline,
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
