const Navbar = () => {
  return (
    <div
      data-scroll-section
      className="rounded-full px-8 py-8 w-full text-white font-bold flex justify-between items-center absolute z-50"
      id="navbar"
    >
      <div
        className="flex-1 show"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-position="top"
        data-scroll-speed="-5"
      >
        <a href="#home">KD○</a>
      </div>

      <div
        className="flex-1 flex justify-end show"
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
