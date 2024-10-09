

import { usePathname } from "next/navigation";

const Navbar = () => {
  const location = usePathname();
  const isHome = location === "/";

  return (
    <div
      data-scroll-section
      className="px-8 py-8 w-full text-white font-bold flex justify-between items-center z-50"
      id="navbar"
    >
      <div
        className="flex-1"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-position="top"
        data-scroll-speed="-5"
      >
        <a href="/">KD○</a>
      </div>

      <div
        className="flex-1 flex justify-end"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-position="top"
        data-scroll-speed="5"
      >
        <nav>
          <div>
            <ul className="flex gap-5 w-max">
              <li>
                <a
                  href={isHome ? "#home" : "/#home"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#projects" : "/#projects"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#about" : "/#about"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#education" : "/#education"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#experience" : "/#experience"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href={isHome ? "#contact" : "/#contact"}
                  className="head-underline"
                  {...(isHome && { "data-scroll-to": ""})}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
