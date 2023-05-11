/*
  Warnings:

  - You are about to drop the `gallery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gallery" DROP CONSTRAINT "gallery_carId_fkey";

-- DropTable
DROP TABLE "gallery";

-- CreateTable
CREATE TABLE "galeries" (
    "id" SERIAL NOT NULL,
    "photo_link" TEXT NOT NULL,
    "carId" TEXT,

    CONSTRAINT "galeries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "galeries" ADD CONSTRAINT "galeries_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
