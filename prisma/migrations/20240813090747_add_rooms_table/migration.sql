-- CreateTable
CREATE TABLE "Rooms" (
    "id" SERIAL NOT NULL,
    "RoomNO" INTEGER NOT NULL,
    "Roomtype" VARCHAR(255) NOT NULL,
    "Bedtype" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("id")
);
