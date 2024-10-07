const Footer = () => {
  return (
    <footer
      id="footer"
      data-scroll
      className="px-8 py-8 w-full text-white font-bold flex justify-between items-center"
    >
      <div
        data-scroll
        data-scroll-speed="1"
        data-scroll-position="bottom"
        data-scroll-target="footer"
        className="w-full max-w-screen-xl mx-auto p-4 md:py-8"
      >
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
          >
            <a href="#home">KD○</a>
          </div>
          <ul className="flex gap-5 w-max">
            <li>
              <a href="#home" data-scroll-to>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" data-scroll-to>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" data-scroll-to>
                About
              </a>
            </li>
            <li>
              <a href="#education" data-scroll-to>
                Education
              </a>
            </li>
            <li>
              <a href="#experience" data-scroll-to>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" data-scroll-to>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="font-neue block text-sm text-white sm:text-center">
          © 2024{" "}
          <a href="" className="head-underline">
            Kenneth Docot
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
