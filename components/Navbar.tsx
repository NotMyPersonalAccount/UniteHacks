import { ReactElement, ReactNode, useState } from "react";
import icon from "../public/images/icon.png";
import hamburgerIcon from "../public/images/hamburger.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar(): ReactElement {
  const { data: session } = useSession();
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-10 sm:px-16 py-8 bg-gray-100 md:bg-inherit">
        <div className="flex items-center justify-items-center">
          <div className="flex items-center justify-items-center mr-4 lg:mr-10">
            <Image src={icon} width="56em" height="45em" />
            <strong>
              <Link className="font-bold text-2xl" href="/">
                Remotely
              </Link>
            </strong>
          </div>
          <div className="hidden md:block">
            <NavItem href="/cafes">Cafes</NavItem>
            <NavItem href="/enterprise">Enterprise</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
        </div>
        <div className="hidden md:block">
          <button
            className="text-white font-bold px-8 lg:px-12 py-3 rounded-md"
            style={{ backgroundColor: "#66A473" }}
            onClick={() => (session ? signOut() : signIn())}
          >
            {session ? "Sign Out" : "Sign In"}
          </button>
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
          <HamburgerItem href="/cafes">Cafes</HamburgerItem>
          <HamburgerItem href="/enterprise">Enterprise</HamburgerItem>
          <HamburgerItem href="/contact">Contact</HamburgerItem>
        </ul>
        <a href="/signup">
          <button
            className="text-white font-bold px-8 lg:px-12 py-2 mt-4 mr-5 rounded-md"
            style={{ backgroundColor: "#66A473" }}
            onClick={() => (session ? signOut() : signIn())}
          >
            {session ? "Sign Out" : "Sign In"}
          </button>
        </a>
      </div>
    </>
  );
}

type NavItemProps = {
  href: string;
  children: ReactNode;
};
function NavItem({ href, children }: NavItemProps): ReactElement {
  return (
    <a className={styles["nav-item"]} href={href}>
      {children}
    </a>
  );
}

type HamburgerItemProps = {
  href: string;
  children: ReactNode;
};
function HamburgerItem({ href, children }: HamburgerItemProps): ReactElement {
  return (
    <li>
      <a className="text-xl mr-5" href={href}>
        {children}
      </a>
    </li>
  );
}
