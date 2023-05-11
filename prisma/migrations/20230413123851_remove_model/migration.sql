/*
  Warnings:

  - You are about to drop the column `modelId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the `models` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `model` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carId` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_modelId_fkey";

-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_userId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_carId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "models" DROP CONSTRAINT "models_brandId_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "modelId",
DROP COLUMN "userId",
ADD COLUMN     "model" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "carId" SET NOT NULL;

-- DropTable
DROP TABLE "models";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
