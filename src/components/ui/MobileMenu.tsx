import { Transition } from "@headlessui/react";
import NavLinkItem from "./NavLinkItem";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div
        className="sm:hidden flex items-center justify-center"
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/works">Works</NavLinkItem>
          <NavLinkItem to="/blog">Blog</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;
