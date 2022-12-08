import { CoffeeShop } from "@prisma/client";
import { ReactElement } from "react";
import Navbar from "../../components/cafes/Navbar";
import { fakeShitJob } from "../../utils/prisma";
// import { prisma } from "../utils/prisma";

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
              src={cafe.imgUrl}
            />
            <div className="mx-8">
              <div>
                <span className="text-lg block">Location: {cafe.address}</span>
              </div>
              <div className="my-8">
                <p className="text-xl font-bold">Funky Stats</p>
                <ul>
                  coffee score: {cafe.coffee}
                  <br />
                  tea score: {cafe.tea}
                  <br />
                  outlet score: {cafe.outlets}
                  <br />
                  wifi score: {cafe.wifi}
                  <br />
                  quiet score (higher is quieter): {cafe.quiet}
                  <br />
                </ul>
              </div>
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
  //   const cafe = await prisma.coffeeShop.findUnique({
  //     where: {
  //       // @ts-ignore
  //       id: parseInt(context.params.id),
  //     },
  //   });
  return {
    props: {
        // @ts-ignore
      cafe: fakeShitJob.find((s) => s.id === parseInt(context.params.id)),
    },
  };
}
