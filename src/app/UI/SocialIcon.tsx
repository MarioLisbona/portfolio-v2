import { Link, Button } from "@chakra-ui/react";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} target={"_blank"}>
      <Button variant={"linkSmallBtn"}>{children}</Button>
    </Link>
  );
};

export default SocialIcon;
