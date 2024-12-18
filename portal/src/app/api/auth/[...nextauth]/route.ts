
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials!;
                if (email === "admin" && password === "admin") {
                    return { id: "1", email: "phamdinhlam@example.com" };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.exp = Math.floor(Date.now() / 1000) + (60 * 60);
            }
            return token;
        },
        async session({ session, token }) {
            console.log('enter session');
            if (token) {
                session.user = {
                    email: token.email,
                };
            }
            console.log("Session:", session);
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url === baseUrl || url.startsWith(baseUrl)) {
                return baseUrl;
            }
            return url;
        },
    },
});

export { handler as GET, handler as POST }