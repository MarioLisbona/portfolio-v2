export const handleLinkClick = (event: any, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
