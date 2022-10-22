import { CoffeeShop, PrismaClient } from "@prisma/client";
import type { NextPage } from "next";

function Workspaces(props: { shops: CoffeeShop[] }) {
    console.log("d");
    let shops = props.shops;

    // someone make a  prerty component or something for this
    return (
        <div>
            {shops.map((shop) => (
                <div>
                    name: {shop.name} addr: {shop.address} img: {shop.imgUrl}{" "}
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    let prisma = new PrismaClient();

    const shops = await prisma.coffeeShop.findMany();

    return {
        props: { shops },
    };
}

export default Workspaces;
