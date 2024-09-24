// /app/api/property/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { roomType, roomSize, bedType, Guests, Price, PromotionPrice, RoomDescription, MainImage, ImageGallery, Amenity } = await req.json();

    const newRoom = await prisma.property.create({
      data: {
        Roomtype: roomType,
        RoomSize: parseInt(roomSize, 10),
        Bedtype: bedType,
        Guests: parseInt(Guests, 10),
        Price: parseInt(Price, 10),
        PromotionPrice: PromotionPrice ? parseInt(PromotionPrice, 10) : 0,
        RoomDescription,
        MainImage,
        ImageGallery: ImageGallery || [],
        Amenity: Amenity || [],
      },
    });

    return NextResponse.json(newRoom);
  } catch (error) {
    console.error('Failed to create room:', error);
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 });
  }
}
