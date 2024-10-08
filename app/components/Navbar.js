const Navbar = () => {
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
        <a href="#home">KD○</a>
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
                <a href="#home" className="head-underline" data-scroll-to>Home</a>
              </li>
              <li>
                <a href="#projects" className="head-underline" data-scroll-to>Projects</a>
              </li>
              <li>
                <a href="#about" className="head-underline" data-scroll-to>About</a>
              </li>
              <li>
                <a href="#education" className="head-underline" data-scroll-to>Education</a>
              </li>
              <li>
                <a href="#experience" className="head-underline" data-scroll-to>Experience</a>
              </li>
              <li>
                <a href="#contact" className="head-underline" data-scroll-to>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
