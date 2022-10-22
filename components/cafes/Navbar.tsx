import { useSession } from "next-auth/react";
import Image from "next/image";
import { ReactElement, useState } from "react";
import icon from "../../public/images/icon.png";

export default function Navbar(): ReactElement {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="px-10 sm:px-16 py-8 bg-gray-100 md:bg-inherit">
        <div className="flex justify-between">
          <div className="flex items-center justify-items-center">
            <div className="flex items-center justify-items-center mr-4 lg:mr-10">
              <Image src={icon} width="56em" height="45em" />
              <a className="font-bold text-2xl" href="/">
                Remotely
              </a>
            </div>
          </div>
          <div
            className="bg-gray-200 rounded-md flex items-center justify-items-center px-2 text-xl"
            onClick={() => setDropdown(!dropdown)}
          >
            {session?.user?.name}
          </div>
        </div>
      </nav>
    </>
  );
}
