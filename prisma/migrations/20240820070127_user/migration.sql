/*
  Warnings:

  - Changed the type of `id_number` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `card_number` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cvc` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "id_number",
ADD COLUMN     "id_number" INTEGER NOT NULL,
DROP COLUMN "card_number",
ADD COLUMN     "card_number" INTEGER NOT NULL,
DROP COLUMN "cvc",
ADD COLUMN     "cvc" INTEGER NOT NULL;
