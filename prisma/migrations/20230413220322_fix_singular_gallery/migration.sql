/*
  Warnings:

  - You are about to drop the `galeries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "galeries" DROP CONSTRAINT "galeries_carId_fkey";

-- DropTable
DROP TABLE "galeries";

-- CreateTable
CREATE TABLE "gallery" (
    "id" SERIAL NOT NULL,
    "photo_link" TEXT NOT NULL,
    "carId" TEXT,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "gallery" ADD CONSTRAINT "gallery_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
