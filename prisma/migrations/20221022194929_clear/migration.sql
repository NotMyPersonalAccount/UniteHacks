/*
  Warnings:

  - Added the required column `id` to the `CoffeeShop` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CoffeeShop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "quiet" INTEGER NOT NULL,
    "wifi" INTEGER NOT NULL,
    "outlets" INTEGER NOT NULL,
    "coffee" INTEGER NOT NULL,
    "tea" INTEGER NOT NULL
);
INSERT INTO "new_CoffeeShop" ("address", "coffee", "imgUrl", "name", "outlets", "quiet", "tea", "wifi") SELECT "address", "coffee", "imgUrl", "name", "outlets", "quiet", "tea", "wifi" FROM "CoffeeShop";
DROP TABLE "CoffeeShop";
ALTER TABLE "new_CoffeeShop" RENAME TO "CoffeeShop";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
