// src/app/pages/profile/page.tsx

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth"; // Adjust the import path as needed
import { PrismaClient } from "@prisma/client";
import Profile from "@/components/Profile";

const prisma = new PrismaClient();

export default async function ProfilePage() {
  // Get the session from NextAuth
  const session = await getServerSession(authOptions);

  // Check if the session or session.user is undefined
  if (!session || !session.user || !session.user.id) {
    return <div>Please log in to view your profile.</div>;
  }

  const userId = session.user.id;

  // Fetch the user by their unique ID
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  // Pass the user data to the Profile component
  return <Profile user={user} />;
}
