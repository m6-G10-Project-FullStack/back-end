/*
  Warnings:

  - Made the column `brandId` on table `cars` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_brandId_fkey";

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "userId" TEXT,
ALTER COLUMN "brandId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
