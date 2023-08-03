import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  firstName: string;
  lastName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  location: string;
  fullBio: PortableTextBlock[];
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};
