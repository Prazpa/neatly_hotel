/*
  Warnings:

  - You are about to drop the column `Image` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `RoomsSize` on the `Property` table. All the data in the column will be lost.
  - Added the required column `MainImage` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RoomDescription` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RoomSize` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "Image",
DROP COLUMN "RoomsSize",
ADD COLUMN     "Amenity" VARCHAR(255)[],
ADD COLUMN     "ImageGallery" VARCHAR(255)[],
ADD COLUMN     "MainImage" VARCHAR(255) NOT NULL,
ADD COLUMN     "RoomDescription" VARCHAR(255) NOT NULL,
ADD COLUMN     "RoomSize" INTEGER NOT NULL;
