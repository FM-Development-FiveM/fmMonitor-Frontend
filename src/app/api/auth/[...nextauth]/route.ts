import NextAuth from "next-auth"
import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord"

const handler = NextAuth({
  providers: [
    DiscordProvider<DiscordProfile>({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.global_name || profile.username
        }
      }
    }),
  ],
  pages: {
    signIn: '/dash/home',
    signOut: '/auth/login'
  }
});

export { handler as GET, handler as POST };