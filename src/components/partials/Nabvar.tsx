import { useState } from 'react';
import NavLinkItem from '../ui/NavLinkItem';
import MobileMenuButton from '../ui/MobileMenuButton';
import MobileMenu from '../ui/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="lg:px-[120px] sm:px-[45px] px-[22px] mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLinkItem to="/">Home</NavLinkItem>
                <NavLinkItem to="/works">Works</NavLinkItem>
                <NavLinkItem to="/blog">Blog</NavLinkItem>
                <NavLinkItem to="/contact">Contact</NavLinkItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
