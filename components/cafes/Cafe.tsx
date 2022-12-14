import Link from "next/link";
import { ReactElement } from "react";

type CafeProps = {
  id: number;
  name: string;
  address: string;
  img: string;
};

export default function Cafe({
  name,
  address,
  id,
  img,
}: CafeProps): ReactElement {
  return (
    <div className="mt-8 w-80 border rounded-lg border-black mr-8">
      <img className="h-40 w-full" src={img} />
      <div className="px-4 py-4">
        <Link href={"./cafes/" + id}>
          <p className="font-bold text-xl">{name}</p>
        </Link>
        <p>{address}</p>
      </div>
    </div>
  );
}
