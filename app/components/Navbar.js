const Navbar = () => {
  return (
    <div
      data-scroll-section
      className="px-8 py-8 w-full text-white font-bold flex justify-between items-center z-50 absolute top-0"
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
                <a href="#home" data-scroll-to>Home</a>
              </li>
              <li>
                <a href="#projects" data-scroll-to>Projects</a>
              </li>
              <li>
                <a href="#about" data-scroll-to>About</a>
              </li>
              <li>
                <a href="#education" data-scroll-to>Education</a>
              </li>
              <li>
                <a href="#experience" data-scroll-to>Experience</a>
              </li>
              <li>
                <a href="#contact" data-scroll-to>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
