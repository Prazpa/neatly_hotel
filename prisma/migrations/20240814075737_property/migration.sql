-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "Image" VARCHAR(255) NOT NULL,
    "Roomtype" VARCHAR(255) NOT NULL,
    "Price" INTEGER NOT NULL,
    "PromotionPrice" INTEGER NOT NULL,
    "Guests" INTEGER NOT NULL,
    "Bedtype" VARCHAR(255) NOT NULL,
    "RoomsSize" VARCHAR(255) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
