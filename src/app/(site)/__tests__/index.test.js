import { getProfile } from "../../../sanity/sanity.query";

describe("Fetch profile from sanity.io", () => {
  const marioProfile = {
    _id: "a1f965a2-0527-4265-813d-e9be741e5dc0",
    headline: null,
    profileImage: {
      alt: "Profile Pic",
      asset: {
        _ref: "image-5a34eb7a924b09d465751a2f948a2829226e9e05-498x340-jpg",
        _type: "reference",
      },
      _type: "image",
    },
    socialLinks: {
      github: "https://github.com/MarioLisbona/",
      instagram: "https://www.instagram.com/muzzza79/",
      linkedin:
        "https://linkedin.com/in/https://www.linkedin.com/in/mariolisbona/",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
      "React",
      "NextJS",
      "NodeJS",
      "Express",
      "Postgres",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    fullBio: [
      {
        markDefs: [],
        children: [Array],
        _type: "block",
        style: "normal",
        _key: "a2153446d0c6",
      },
      {
        _type: "block",
        style: "normal",
        _key: "71fc5761f373",
        markDefs: [],
        children: [Array],
      },
      {
        _key: "d0f6b42df130",
        markDefs: [],
        children: [Array],
        _type: "block",
        style: "normal",
      },
    ],
    resumeURL:
      "https://cdn.sanity.io/files/i7lim65w/production/7ffbb447fcf7d8149c31e77aa358fbea7394abe8.pdf",
    firstName: "Mario",
    lastName: "Lisbona",
    shortBio:
      "I've been developing full stack applications for the last year and a half. Lets connect !",
    email: "mario.lisbona@gmail.com",
    location: "Sydney, Australia",
  };

  global.fetch = jest.fn(() => {
    Promise.resolve().then;
  });
  const timeout = 15000;

  it(
    "Fetch correct profile data",
    async () => {
      const profile = await getProfile();
      expect(profile).toEqual(marioProfile);
    },
    timeout
  );
});
