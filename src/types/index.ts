import { PortableTextBlock } from "sanity";

export type SocialLinksProps = {
  linkedin: string;
  github: string;
  instagram: string;
};

export type ProjectReposProps = {
  github: string;
  liveSite?: string;
};

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
  socialLinks: SocialLinksProps;
  skills: string[];
};

export type ProjectType = {
  _id: string;
  title: string;
  thumbnail: {
    alt: string;
    image: string;
  };
  buildDate: string;
  tech: string;
  shortDescription: string;
  longDescription: PortableTextBlock[];
  projectLinks: ProjectReposProps;
};
