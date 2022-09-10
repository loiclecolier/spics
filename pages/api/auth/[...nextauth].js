import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const isCorrectCredentials = credentials =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: "Admin" }
          return user;
        }
        return null;
      },
    }),
  ],
})