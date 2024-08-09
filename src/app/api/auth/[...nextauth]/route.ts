import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Importing the auth options from your configuration file

const handler = NextAuth(authOptions); // Creating a NextAuth handler with the options

export { handler as GET, handler as POST }; // Exporting the handler for both GET and POST requests
