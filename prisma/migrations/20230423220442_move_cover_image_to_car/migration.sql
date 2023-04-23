/*
  Warnings:

  - You are about to drop the column `coverImage` on the `users` table. All the data in the column will be lost.
  - Added the required column `coverImage` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "coverImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "coverImage";
