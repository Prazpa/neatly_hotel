import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  try {
    const newBooking = await prisma.customerBooking.create({
      data: {
        CustomerName: 'John Doe',
        Guests: 2,
        Amount: 1.00,
        Bedtype: 'King Size',
        checkIn: new Date('2024-08-14'),
        checkOut: new Date('2024-08-16'),
      },
    });

    console.log(newBooking);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
