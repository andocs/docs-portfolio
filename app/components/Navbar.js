import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();
  const isHome = location === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop */}
      <div
        data-scroll-section
        className="hidden md:flex px-8 py-8 w-full text-white font-bold justify-between items-center z-10 relative"
        id="navbar"
      >
        {/* Logo Section */}
        <div
          className="flex-1"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-position="top"
          data-scroll-speed="-5"
        >
          <a href="/">KD○</a>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex flex-1 justify-end"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-position="top"
          data-scroll-speed="5"
        >
          <nav>
            <ul className="flex gap-5 w-max">
              <li>
                <a
                  href={isHome ? "#home" : "/#home"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#projects" : "/#projects"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#about" : "/#about"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#education" : "/#education"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#experience" : "/#experience"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#contact" : "/#contact"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": "" })}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex md:hidden w-full text-white bg-[#1c1c1c] font-bold justify-between items-center z-50 relative"
        id="navbar"
      >
        {/* Logo Section */}
        <div className="pl-8 py-8 flex-1">
          <a href="/">KD○</a>
        </div>

        {/* Hamburger Menu Icon - Mobile Only */}
        <div className="pr-8 py-8 flex flex-1 justify-end md:hidden">
          <button
            className={`flex flex-col justify-between w-5 h-5 focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-1 bg-white transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`p-8 absolute overflow-hidden bg-[#1c1c1c] w-full h-screen top-[88px] -z-50 text-white flex flex-col justify-start transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >         
          {/* Mobile Navigation */}
          <nav className="w-full">
            <ul className="flex flex-col gap-8 text-2xl">
              <li>
                <a
                  href={isHome ? "#home" : "/#home"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#projects" : "/#projects"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#about" : "/#about"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#education" : "/#education"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#experience" : "/#experience"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#contact" : "/#contact"}
                  {...(isHome && { "data-scroll-to": "" })}
                  onClick={toggleMenu}
                  className="uppercase head-underline transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                  style={{ textAlign: "left" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
