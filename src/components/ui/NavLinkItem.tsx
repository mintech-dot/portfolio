import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkItemProps {
  to: string;
  children: ReactNode;
}

const NavLinkItem = ({ to, children }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className="text-gray-300 focus:text-primary hover:text-primary block px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
