import { CoffeeShop } from "@prisma/client";
import { Head } from "next/document";
import { ReactElement } from "react";
import Navbar from "../../components/cafes/Navbar";
import { prisma } from "../utils/prisma";

type Props = {
  cafe: CoffeeShop;
};

export default function CafePage({ cafe }: Props): ReactElement {
  //get cafe data from id

  console.log(cafe);
  return (
    <>
      <Navbar />
      <div className="py-8 flex justify-center">
        <div>
          <div className="text-center">
            <p className="text-2xl font-bold">{cafe.name}</p>
            <p className="text-xl">{cafe.description}</p>
          </div>
          <div className="flex flex-wrap justify-center mt-16">
            <img
                          className="rounded-md w-8/12 mb-8 border border-black"
                          src={"../images/" + cafe.imgUrl}
            />
            <div className="mx-8">
              <div>
                <span className="text-lg block">
                  Oakland, CA <span>Get Directions</span>
                </span>
                <span className="text-lg block">
                  4.9 <span>Get Directions</span>
                </span>
              </div>
              <div className="my-4">
                <p className="text-lg">Website: </p>
              </div>
              <div className="my-8">
                <p className="text-xl font-bold">Factors</p>
                <ul>
                  <li>Fast Wifi</li>
                  <li>Serves Tea</li>
                  <li>Serves Coffee</li>
                </ul>
                <a className="underline">View More</a>
              </div>
              <p>Open</p>
              <p>Website</p>
              <p>Factors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type Context = {
  params: {
    id: number;
  };
};

export async function getServerSideProps(context: Context) {
  const cafe = await prisma.coffeeShop.findUnique({
    where: {
      id: parseInt(context.params.id),
    },
  });
  console.log(context);
  return {
    props: {
      cafe,
    },
  };
}
