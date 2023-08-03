import { PortableTextBlock } from "sanity";
export type SocialLinksProps = {
  linkedin: string;
  github: string;
  instagram: string;
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
  thumbnail: {
    alt: string;
    image: string;
  };
  title: string;
  tech: string;
  shortDescription: string;
  longDescription: string;
};
