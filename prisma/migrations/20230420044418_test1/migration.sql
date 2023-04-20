/*
  Warnings:

  - Made the column `userId` on table `cars` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_userId_fkey";

-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "complement" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
