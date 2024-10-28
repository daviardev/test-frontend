import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' }
      },
      async authorize (credentials) {
        const { username, password } = credentials

        if (username === 'john' && password === 'Admin123') {
          const user = { id: 1, name: 'administrator', username }
          const token = sign(user, JWT_SECRET)

          return { ...user, token }
        }

        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
      }

      return token
    },
    async session ({ session, token }) {
      session.user.id = token.id
      session.user.usernmae = token.username

      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
