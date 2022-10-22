import { CoffeeShop, PrismaClient } from "@prisma/client";

function Workspaces(props: { shops: CoffeeShop[] }) {
    console.log("d");
    let shops = props.shops;

    let query = "quiet";
    let desired = {
        quiet: 3,
        wifi: 8,
        coffee: 3,
        tea: 7,
        outlets: 2,
    };

    return (
        <div>
            {shops
                .filter((s) => s.name.includes(query))
                .filter((s) => s.quiet >= desired.quiet)
                .filter((s) => s.quiet >= desired.wifi)
                .filter((s) => s.quiet >= desired.coffee)
                .filter((s) => s.quiet >= desired.outlets)
                .map((shop) => (
                    <div>
                        name: {shop.name} addr: {shop.address} img:{" "}
                        {shop.imgUrl}{" "}
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
