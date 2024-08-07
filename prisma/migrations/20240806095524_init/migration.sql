-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "id_number" VARCHAR(255) NOT NULL,
    "dob" DATE NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "profile_pic" TEXT,
    "card_number" VARCHAR(16) NOT NULL,
    "card_owner" VARCHAR(255) NOT NULL,
    "expiry_date" DATE NOT NULL,
    "cvc" VARCHAR(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
