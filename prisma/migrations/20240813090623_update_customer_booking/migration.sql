/*
  Warnings:

  - You are about to alter the column `Amount` on the `CustomerBooking` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `Roomtype` to the `CustomerBooking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerBooking" ADD COLUMN     "Roomtype" VARCHAR(255) NOT NULL,
ALTER COLUMN "Amount" SET DATA TYPE INTEGER;
