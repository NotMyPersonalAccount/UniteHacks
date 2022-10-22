-- CreateTable
CREATE TABLE "CoffeeShop" (
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "quiet" INTEGER NOT NULL,
    "wifi" INTEGER NOT NULL,
    "outlets" INTEGER NOT NULL,
    "coffee" INTEGER NOT NULL,
    "tea" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShop_name_key" ON "CoffeeShop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShop_address_key" ON "CoffeeShop"("address");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShop_imgUrl_key" ON "CoffeeShop"("imgUrl");
