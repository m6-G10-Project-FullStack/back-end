/*
  Warnings:

  - You are about to drop the `maps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_carId_fkey";

-- DropForeignKey
ALTER TABLE "galeries" DROP CONSTRAINT "galeries_carId_fkey";

-- DropForeignKey
ALTER TABLE "maps" DROP CONSTRAINT "maps_brandId_fkey";

-- DropForeignKey
ALTER TABLE "maps" DROP CONSTRAINT "maps_modelId_fkey";

-- DropForeignKey
ALTER TABLE "maps" DROP CONSTRAINT "maps_userId_fkey";

-- DropTable
DROP TABLE "maps";

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fuel" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "fipe" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "is_promo" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "brandId" INTEGER,
    "modelId" INTEGER,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galeries" ADD CONSTRAINT "galeries_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
