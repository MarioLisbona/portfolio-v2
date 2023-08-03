import { ProfileType } from "@/types";
import { getProfile } from "@/sanity/sanity.query";
import HeroInfo from "../UI/HeroInfo";

export default async function Hero() {
  const profile: ProfileType[] = await getProfile();
  return <HeroInfo />;
}
