import { ReactElement, useState } from "react";
import Cafe from "../../components/cafes/Cafe";
import Navbar from "../../components/cafes/Navbar";

type Props = {
  cafes: {
    name: string;
    address: string;
  }[];
};

export default function Cafes({ cafes }: Props): ReactElement {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <input
        className="border border-black px-2 py-2 rounded-md"
        placeholder="Search Workspaces"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap">
          {cafes
            .filter(
              (cafe) => search.trim() === "" || cafe.name.includes(search)
            )
            .map((cafe) => (
              <Cafe name={cafe.name} address={cafe.address} />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      cafes: [
        {
          name: "Test",
          address: "Test",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Test 2",
          address: "Test 2",
        },
        {
          name: "Tesgfgft 2",
          address: "Test 2",
        },
      ],
    },
  };
}
