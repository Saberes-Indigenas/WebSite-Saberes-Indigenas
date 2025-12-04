import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import Gov from "../assets/images/Gov.jpeg";

const NavBar = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header
      ref={ref}
      className={`w-full z-50 fixed top-0 left-0 bg-green-dark text-white shadow-md transition-all duration-300`}
>
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 pl-4">
          <img src={Logo} alt="Logo" className="h-20 w-20 rounded-md" />
          <span className="text-xl font-semibold">Saberes Indígenas UFR</span>
        </Link>

        <nav className="hidden md:flex items-center ml-auto space-x-6 pr-5">
          <Link to="/podcasts">
            <span className="text-xl font-bold">Podcasts</span>
          </Link>
          <Link to="/game">
            <span className="text-xl font-bold">Game</span>
          </Link>
          <Link to="/album">
            <span className="text-xl font-bold">Album</span>
          </Link>
          <Link to="/mapas">
            <span className="text-xl font-bold">Mapas</span>
          </Link>
          <Link to="/sobre">
            <span className="text-xl font-bold">Sobre</span>
          </Link>
          <Link to="/quemSomos">
            <span className="text-xl font-bold">Quem Somos</span>
          </Link>          
          <img src={Gov} alt="Gov" className="h-20 w-65 rounded-md" />
        </nav>
      </div>
    </header>
  );
});

export default NavBar;
