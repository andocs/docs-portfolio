import { usePathname } from "next/navigation";

const Footer = () => {
  const location = usePathname();
  const isHome = location === "/";

  return (
    <footer
      id="footer"
      data-scroll-section
      className="px-8 py-8 w-full text-white font-bold flex justify-between items-center"
    >
      <div
        data-scroll
        data-scroll-speed="1"
        data-scroll-position="bottom"
        data-scroll-target="footer"
        className="w-full max-w-screen-xl mx-auto p-4 md:py-8"
      >
        <div className="sm:items-center sm:justify-between hidden md:flex">
          <div>
            <a href="#home">KD○</a>
          </div>
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
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="font-neue font-normal block text-sm text-white sm:text-center">
          © 2024{" "}
          <a href="/" className="head-underline">
            Kenneth Docot
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
