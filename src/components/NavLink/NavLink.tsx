import React from "react";

interface NavLinkProps {
  id?: string;
  text: string;
  currentRef: React.RefObject<HTMLBaseElement>;
}

const NavLink = ({ id, text, currentRef }: NavLinkProps) => {
  function removeClass() {
    currentRef.current?.classList.toggle("responsive-nav");
  }
  return (
    <a href={`#${id}`} onClick={removeClass}>
      {text}
    </a>
  );
};

export default NavLink;
