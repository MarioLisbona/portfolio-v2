export interface NavbarLinksProps {
  label: string;
  id: string;
  href: string;
  external: boolean;
}

export const navbarLinks: NavbarLinksProps[] = [
  {
    label: "About",
    id: "about",
    href: "#about",
    external: false,
  },
  {
    label: "Projects",
    id: "projects",
    href: "#projects",
    external: false,
  },
  {
    label: "Experience",
    id: "experience",
    href: "#experience",
    external: false,
  },
  {
    label: "Contact",
    id: "contact",
    href: "#contact",
    external: false,
  },
];
