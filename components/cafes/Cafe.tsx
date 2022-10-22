import { ReactElement } from "react";

type CafeProps = {
  name: string;
  address: string;
};

export default function Cafe({ name, address }: CafeProps): ReactElement {
  return (
    <div className="w-80 border border-black mr-8">
      <img src="https://media.istockphoto.com/photos/cute-pig-leaning-on-railing-of-his-cot-picture-id140462837?k=20&m=140462837&s=612x612&w=0&h=PM_57ox9n_WE_1Q7JdgNeg7kK5SI4Y8C8Z3UYM1m_JY=" />
      <div className="px-4 py-4">
        <p className="font-bold text-xl">{name}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
