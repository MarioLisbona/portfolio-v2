export const handleLinkClick = (event: any, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleMobileNavClick = (
  event: any,
  targetId: string,
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  console.log(isOpen);
  isOpen ? onClose() : onOpen();
};
