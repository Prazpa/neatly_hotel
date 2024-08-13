-- CreateTable
CREATE TABLE "CustomerBooking" (
    "id" SERIAL NOT NULL,
    "CustomerName" VARCHAR(255) NOT NULL,
    "Guests" INTEGER NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Bedtype" VARCHAR(255) NOT NULL,
    "checkIn" DATE NOT NULL,
    "checkOut" DATE NOT NULL,

    CONSTRAINT "CustomerBooking_pkey" PRIMARY KEY ("id")
);
