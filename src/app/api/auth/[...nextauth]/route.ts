import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "foo" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(credentials);

        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if (!userFound) throw new Error('User not found')

        console.log(userFound);

        const matchPassword = await bcrypt.compare(credentials?.password as string, userFound.password)

        if (!matchPassword) throw new Error('Wrong password')

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email
        }

      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }