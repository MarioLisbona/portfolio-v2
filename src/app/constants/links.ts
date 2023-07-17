export interface NavbarLinksProps {
  label: string;
  href: string;
  external: boolean;
}

export const navbarLinks: NavbarLinksProps[] = [
  {
    label: "About",
    href: "/about",
    external: false,
  },
  {
    label: "Projects",
    href: "/projects",
    external: false,
  },
  {
    label: "Contact",
    href: "/contact",
    external: false,
  },
];
