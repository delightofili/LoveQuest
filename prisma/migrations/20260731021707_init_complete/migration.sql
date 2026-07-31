/*
  Warnings:

  - Added the required column `occasion` to the `experiences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipientName` to the `experiences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderName` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "occasion" TEXT NOT NULL,
ADD COLUMN     "recipientName" TEXT NOT NULL,
ADD COLUMN     "senderName" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
