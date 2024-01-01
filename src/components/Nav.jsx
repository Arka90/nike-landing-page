import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="font-monserrat leading-normal text-lg text-slate-gray"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-montserrat font-medium max-lg:hidden">
          <a>Signin</a>
          <span>/</span>
          <a>Explore Now</a>
        </div>

        <div className="max-lg:block hidden">
          <img alt="Hamburger" width={25} height={25} src={hamburger} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
