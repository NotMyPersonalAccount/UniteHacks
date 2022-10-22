import { ReactElement, useState } from "react";
import icon from "../public/images/icon.png";
import hamburgerIcon from "../public/images/hamburger.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-10 sm:px-16 py-8 bg-gray-100 md:bg-inherit">
        <div className="flex items-center justify-items-center">
          <div className="flex items-center justify-items-center mr-4 lg:mr-10">
            <Image src={icon} width="56em" height="45em" />
            <a className="font-bold text-2xl" href="/">
              Remotely
            </a>
          </div>
          <div className="hidden md:block">
            <NavItem href="/workspaces">Workspaces</NavItem>
            <NavItem href="/">Enterprise</NavItem>
            <NavItem href="/">Contact</NavItem>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="/signup">
            <button
              className="text-white font-bold px-8 lg:px-12 py-3 rounded-md"
              style={{ backgroundColor: "#66A473" }}
            >
              Sign In
            </button>
          </a>
        </div>
        <div
          className="flex items-center justify-items-center md:hidden"
          onClick={() => setHamburger(!hamburger)}
        >
          <Image src={hamburgerIcon} width="24em" height="24em" />
        </div>
      </nav>
      <div
        id={styles.hamburger}
        className={
          "md:hidden bg-gray-100 transition-all ease-in-out duration-500 px-6 overflow-hidden text-right " +
          (hamburger ? "max-h-44 py-4 " : "max-h-0")
        }
      >
        <ul>
          <HamburgerItem href="/">Workspaces</HamburgerItem>
          <HamburgerItem href="/">Enterprise</HamburgerItem>
          <HamburgerItem href="/">Contact</HamburgerItem>
        </ul>
        <a href="/signup">
          <button
            className="text-white font-bold px-8 lg:px-12 py-2 mt-4 mr-5 rounded-md"
            style={{ backgroundColor: "#66A473" }}
          >
            Sign In
          </button>
        </a>
      </div>
    </>
  );
};

const NavItem: React.FC<{ href: string; children: ReactElement | string }> = ({
  href,
  children,
}) => {
  return (
    <a className={styles["nav-item"]} href={href}>
      {children}
    </a>
  );
};

const HamburgerItem: React.FC<{
  href: string;
  children: ReactElement | string;
}> = ({ href, children }) => {
  return (
    <li>
      <a className="text-xl mr-5" href={href}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
